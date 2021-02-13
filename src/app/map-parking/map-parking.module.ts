import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { MapParkingComponent } from "./map-parking.component";
import { MapParkingRoutingModule } from "./map-parking.routes"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MapParkingRoutingModule
    ],
    declarations: [
        MapParkingComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MapParkingModule { }
