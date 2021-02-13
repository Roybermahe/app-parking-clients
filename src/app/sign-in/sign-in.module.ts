import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule } from "@nativescript/angular";
import { ComponentsModule } from "../components/components.module";
import { SignInRoutingModule } from "./sign-in.routes";
import { SignInComponent } from "./sign-in.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        NativeScriptHttpClientModule,
        SignInRoutingModule,
        ComponentsModule
    ],
    declarations: [
        SignInComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignInModule { }
