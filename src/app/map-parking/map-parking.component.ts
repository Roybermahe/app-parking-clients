import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, registerElement} from "@nativescript/angular";
import {Utils, Page} from "@nativescript/core";
import {selectVehicleComponent} from "../components/select-vehicle/select-vehicle.component";
import {vehiculos} from "../../models/vehiculos/vehiculos.model";
import {SelectTimeComponent} from "../components/selectime/select-time.component";
import {alert, action} from "@nativescript/core/ui/dialogs";
import {ParkingService} from "../../services/parking/parking.service";
import * as AppSettings from "@nativescript/core/application-settings";
const sign = require('jwt-encode');
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "@nativescript/core/ui/enums";
import {UsuarioService} from "../../services/usuario/usuario.service";
import {horariosService} from "../../services/parking/horarios.service";
import {inAppBrowserService} from "../../services/app-settings/inAppBrowser.service";
import {horariosModel} from "../../models/parking/horarios.model";
import {pagoPayments} from "../../services/generic-service/pagos-gen.service";
import {messageGenericInterface} from "../../services/generic-service/http-generic.service";
import * as AppSetting from "@nativescript/core/application-settings";
export const token = "sk.eyJ1IjoiZ2VybWFuem0iLCJhIjoiY2tsNnN4a3BmMG1hMzJva3k0OTNiNmtsNyJ9.jweBnYGkYovMfj66XJlqXg"
export const pad = (i: number): string => (i < 10 ? `0${i}` : `${i}`);
registerElement( "Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);
@Component({
	moduleId: module.id,
	selector: 'map-parking',
	templateUrl: './map-parking.component.html',
	styleUrls: ['./map-parking.component.css']
})

export class MapParkingComponent implements OnInit {
    private userId = AppSetting.getString("_userId","");
    vehicleSelected: vehiculos;
    parkinTime: number = 0;
    textTime="query_builder";
    btnAuto: string = "Elegir vehiculo";
    tokenMap = token;
    monedero = +(AppSettings.getString("_valorMonedero", "0.00"));
    userlocation:{lat: string, long: string} = {lat: "0", long:'0'};
    listaHorarios: horariosModel[];
	constructor(
	    page: Page,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private parkingSvc: ParkingService,
        private usuarioService: UsuarioService,
        private horariosSvc: horariosService,
        private appBrowser: inAppBrowserService,
        private pagoPayments: pagoPayments<any, messageGenericInterface<any>>
    ) {
	    page.actionBarHidden = true;
    }

	ngOnInit() {
        let routePrincipal = AppSettings.getString("_loginInit", "");
        if(routePrincipal.length > 0){
            this.updateUserInfo(routePrincipal);
        }
        this.loadHorarios();
    }


    onMapReady(args) {
	    args.map.getUserLocation().then(userlocation => {
            this.userlocation.lat = userlocation.location.lat;
            this.userlocation.long = userlocation.location.lng;
            console.log(this.userlocation);
        }, err => {
            console.log('err');
        });
    }

    async selectVehicle() {
	    let data = await this.modalService.showModal(selectVehicleComponent, {
	       animated: true,
           cancelable: true,
           viewContainerRef: this.viewContainerRef,
           fullscreen: false
        });
	    this.vehicleSelected = <vehiculos>data;
	    this.btnAuto = data.matricula.toUpperCase();
    }

    async tapSelectTime() {
        let data = await this.modalService.showModal(SelectTimeComponent, {
            animated: true,
            cancelable: true,
            viewContainerRef: this.viewContainerRef,
            fullscreen: false
        });
        if(data) {
            this.parkinTime = <number>data;
            this.textTime = `${this.parkinTime} min`;
        }
    }

    async GuardarParking() {
        let result = await action({
            cancelable: true,
            title: "Seleccione una opción:",
            cancelButtonText: "Cancelar",
            actions: ["Monedero", "Stripe"]
        });
        let location = await geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 });
        await alert({
            title: "Message",
            message: "Su ubicación actual sera usada para la geolocalización del vehiculo, recuerde tener activada la ubicación.",
            okButtonText: "Ok"
        });
        let horaFinal = new Date();
        horaFinal.setMinutes(horaFinal.getMinutes() + this.parkinTime);
        let date = new Date();
        let data = {
            horaInicio: `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`,
            horaFinalizacion: `${pad(horaFinal.getHours())}:${pad(horaFinal.getMinutes())}:${pad(horaFinal.getSeconds())}`,
            tiempo: this.parkinTime,
            idZona: 2,
            email: AppSettings.getString("_loginInit", ""),
            idVehiculo: this.vehicleSelected.id,
            lat: location.latitude,
            long: location.longitude,
            method: 'zona',
        }
        if(!result.includes("Monedero")) {
            await this.appBrowser.openUrl(`https://paymentsclickpark.redlandsandwhales.com/ClickPark/Payments/${sign(data, 'secret')}`);
        } else {
            let datakn = { ...data, userId: +this.userId  };
            this.pagoPayments.Post("ClickPark/Payments/Recargas", datakn).subscribe(resp => {
                   alert({ okButtonText: "Ok", title: "ClickPark", message: resp.message});
            });
        }
    }

    updateUserInfo(email: string) {
        this.usuarioService.Get(`usuarios/req/${email}`).subscribe(resp => {
            AppSettings.setString("_userInfo",JSON.stringify(resp.getOne));
        });
    }

    loadHorarios() {
	    this.horariosSvc.Get("horarios").subscribe(resp => {
	        this.listaHorarios = resp.getAll;
        });
    }

    getTarifa(tiempo: number) {
	    return this.listaHorarios.find(item => item.tiempo >= tiempo);
    }
}
