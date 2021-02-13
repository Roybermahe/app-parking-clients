import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, ModalDialogService } from "@nativescript/angular";
import { VehiclesComponent } from "./vehicles.component";
import { VehiclesRoutingModule } from "./vehicles.routes";
import { RegisterVehicleComponent } from "../components/register-vehicle/register-vehicle.component"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VehiclesRoutingModule
    ],
    declarations: [
        VehiclesComponent
    ],
    providers: [
        ModalDialogService
    ],
    entryComponents: [
        RegisterVehicleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VehiclesModule { }
