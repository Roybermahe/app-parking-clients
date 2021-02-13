import { Component, OnInit } from '@angular/core';
import { ModalDialogParams, RouterExtensions } from "@nativescript/angular"
import { Page } from '@nativescript/core';
import { vehiculos } from '../../../models/vehiculos/vehiculos.model';

@Component({
	selector: 'register-vehicle',
	templateUrl: './register-vehicle.component.html',
	styleUrls: ['./register-vehicle.component.css']
})

export class RegisterVehicleComponent implements OnInit {

	vehiculo: vehiculos;
	constructor(
		private _params: ModalDialogParams, private router: RouterExtensions
	) { }

	ngOnInit() { }

	onClose() {
		this._params.closeCallback();
	}
}