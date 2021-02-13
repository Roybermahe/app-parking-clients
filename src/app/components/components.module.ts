import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule } from "@nativescript/angular";
import { TNSCheckBoxModule } from "@nstudio/nativescript-checkbox/angular";
import { RegisterVehicleComponent } from "./register-vehicle/register-vehicle.component"
@NgModule({
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        TNSCheckBoxModule
    ],
    declarations: [
        RegisterVehicleComponent
    ],
    exports: [
        RegisterVehicleComponent
    ]
})

export class ComponentsModule { }
