import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule } from "@nativescript/angular";
import { TNSCheckBoxModule } from "@nstudio/nativescript-checkbox/angular";
import { RegisterVehicleComponent } from "./register-vehicle/register-vehicle.component";
import { updateFormComponent } from "./update-form/update-form.component"
import {selectVehicleComponent} from "./select-vehicle/select-vehicle.component";
import {SelectTimeComponent} from "./selectime/select-time.component";

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
        RegisterVehicleComponent,
        updateFormComponent,
        selectVehicleComponent,
        SelectTimeComponent
    ],
    exports: [
        RegisterVehicleComponent,
        updateFormComponent,
        selectVehicleComponent,
        SelectTimeComponent
    ]
})

export class ComponentsModule { }
