import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ModalDialogService, RouterExtensions} from '@nativescript/angular';
import { RegisterVehicleComponent } from "../components/register-vehicle/register-vehicle.component"
import {Usuario} from "../../models/usuarios/usuario.model";
import * as AppSettings from "@nativescript/core/application-settings";
import {alert, confirm, ObservableArray} from "@nativescript/core";
import {MisVehiculosService} from "../../services/app-settings/app-settings.service";
import {VehiculosService} from "../../services/vehiculos/vehiculos.service";
import {vehiculos} from "../../models/vehiculos/vehiculos.model";
@Component({
	selector: 'vehicles',
	templateUrl: './vehicles.component.html',
	styleUrls: ['./vehicles.component.css']
})

export class VehiclesComponent implements OnInit {
    usuario: Usuario = JSON.parse(AppSettings.getString("_userInfo", JSON.stringify(<Usuario>{
    email: '', telefono: 'actualizar', nombre: 'actualizar ' ,dni: 'actualizar', userState:"disable" })));

    busy = true;
    listVehiculos = new ObservableArray<vehiculos>();
	constructor(
	    private routes: RouterExtensions,
		private modalService: ModalDialogService,
		private viewContainerRef: ViewContainerRef,
        private misVehiculos: MisVehiculosService,
        private readonly vechiculosSvc: VehiculosService
	) { }

	ngOnInit() {
	    this.misVehiculos.vehiculoSave.subscribe(resp => {
            this.onLoadData();
        });
	    this.onLoadData();
    }

	async onRegisterVehicle() {
        if(this.usuario.id) {
            await this.modalService.showModal(RegisterVehicleComponent, {
                fullscreen: false,
                cancelable: true,
                animated: true,
                context: { userId: this.usuario.id },
                viewContainerRef: this.viewContainerRef
            });
        } else {
            alert({ title: "Message", message: "Debe iniciar sesión.", okButtonText: "Ok"});
        }
	}

	onBack() {
        this.routes.back();
    }

    onLoadData() {
        this.vechiculosSvc.Get(`vehiculos/users/${this.usuario.id}`).subscribe(item => {
            AppSettings.setString("_mivehiculos", JSON.stringify(item.getAll));
            this.listVehiculos = new ObservableArray<vehiculos>();
            this.listVehiculos.push(item.getAll);
            this.busy = false;
        }, err => {
            this.listVehiculos = new ObservableArray<vehiculos>();
            this.listVehiculos.push(JSON.parse(AppSettings.getString("_mivehiculos", JSON.stringify([]))));
            this.busy = false;
        });
    }

    onDelete(id: number) {
	    confirm({cancelButtonText: "NO", okButtonText: "Sí", title:"Message", message: "Desea quitar este vehiculo de la lista."}).then(resp => {
	        if(resp) {
                this.vechiculosSvc.Delete("vehiculos", id).subscribe(item => {
                    alert({ title: "ClickPark", message: item.message, okButtonText: "Ok"});
                    this.onLoadData();
                }, err => {
                    alert({ title: "Message", message: "Ocurrio un error.", okButtonText: "ok" });
                });
            }
        });
    }
}
