import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, registerElement} from "@nativescript/angular";
import {EventData, Page} from "@nativescript/core";
import {selectVehicleComponent} from "../components/select-vehicle/select-vehicle.component";

export const token = "sk.eyJ1IjoiZ2VybWFuem0iLCJhIjoiY2tsNnN4a3BmMG1hMzJva3k0OTNiNmtsNyJ9.jweBnYGkYovMfj66XJlqXg"

registerElement( "Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);
@Component({
	moduleId: module.id,
	selector: 'map-parking',
	templateUrl: './map-parking.component.html',
	styleUrls: ['./map-parking.component.css']
})

export class MapParkingComponent implements OnInit {

    tokenMap = token;
	constructor(
	    page: Page,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
    ) {
	    page.actionBarHidden = true;
    }

	ngOnInit() { }


    onMapReady(args) {}

    async selectVehicle() {
	    let data = await this.modalService.showModal(selectVehicleComponent, {
	       animated: true,
           cancelable: true,
           viewContainerRef: this.viewContainerRef,
           fullscreen: false
        });
	    console.log(data);
    }
}
