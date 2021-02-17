import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    ModalDialogService,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule
} from "@nativescript/angular";
import { MapParkingComponent } from "./map-parking.component";
import { MapParkingRoutingModule } from "./map-parking.routes"
import {selectVehicleComponent} from "../components/select-vehicle/select-vehicle.component";

@NgModule({
    imports: [
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        MapParkingRoutingModule
    ],
    declarations: [
        MapParkingComponent
    ],
    providers: [
        ModalDialogService
    ],
    entryComponents: [
        selectVehicleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MapParkingModule { }
