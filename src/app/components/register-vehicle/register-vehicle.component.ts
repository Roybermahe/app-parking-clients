import { Component, OnInit } from '@angular/core';
import { ModalDialogParams, RouterExtensions } from "@nativescript/angular"
import { vehiculos } from '../../../models/vehiculos/vehiculos.model';
import {alert} from "@nativescript/core";
import {VehiculosService} from "../../../services/vehiculos/vehiculos.service";
import {MisVehiculosService} from "../../../services/app-settings/app-settings.service";

@Component({
	selector: 'register-vehicle',
	templateUrl: './register-vehicle.component.html',
	styleUrls: ['./register-vehicle.component.css']
})

export class RegisterVehicleComponent implements OnInit {

	vehiculo: vehiculos = { marca: "", matricula: ""};
	constructor(
		private _params: ModalDialogParams,
        private router: RouterExtensions,
        private readonly vehicleSvc: VehiculosService,
        private readonly misvhcls: MisVehiculosService
	) { }

	ngOnInit() { }

	onClose() {
		this._params.closeCallback();
	}

	onSubmit() {
	    if(this.vehiculo.matricula.length > 0 && this.vehiculo.marca.length > 0) {
	        this.vehiculo.idUsuario = +this._params.context.userId;
	        this.vehiculo.tipoVehiculo = 4;
	        this.vehicleSvc.Post("vehiculos", this.vehiculo).subscribe(resp => {
                alert({ title: "ClickPark", message: resp.message, okButtonText: "Ok"});
                this.misvhcls.vehiculoSave.emit(true);
            }, err => {
	            alert({title: "Message", message: "", okButtonText: "Ok" });
            });
        } else {
	        alert({title: "Message", message: "Ingrese la matricula y la marca del vehiculo.", okButtonText: "Ok"})
        }
    }
}
