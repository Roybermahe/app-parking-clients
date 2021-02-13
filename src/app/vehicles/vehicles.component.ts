import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from '@nativescript/angular';
import { RegisterVehicleComponent } from "../components/register-vehicle/register-vehicle.component"
@Component({
	selector: 'vehicles',
	templateUrl: './vehicles.component.html',
	styleUrls: ['./vehicles.component.css']
})

export class VehiclesComponent implements OnInit {

	constructor(
		private modalService: ModalDialogService,
		private viewContainerRef: ViewContainerRef
	) { }

	ngOnInit() { }

	onRegisterVehicle() {
		this.modalService.showModal(RegisterVehicleComponent, {
			fullscreen: false,
			cancelable: true,
			animated: true,
			viewContainerRef: this.viewContainerRef
		});
	}
}