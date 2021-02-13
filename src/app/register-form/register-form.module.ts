import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule } from "@nativescript/angular";
import { ComponentsModule } from "../components/components.module";
import { RegisterRoutingModule } from "./register-form.routes";
import { RegisterFormComponent } from "./register-form.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        NativeScriptHttpClientModule,
        RegisterRoutingModule,
        ComponentsModule
    ],
    declarations: [
        RegisterFormComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegisterModule { }
