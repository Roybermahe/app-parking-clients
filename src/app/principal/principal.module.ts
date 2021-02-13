import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { PrincipalComponent } from "./principal.component";
import { PrincipalRoutingModule } from "./principal.routes"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PrincipalRoutingModule
    ],
    declarations: [
        PrincipalComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PrincipalModule { }
