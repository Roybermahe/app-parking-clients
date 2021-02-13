import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { InfoUsuarioComponent } from "./info-usuario.component";
import { InfoUsuarioRoutingModule } from "./info-usuario.routes"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InfoUsuarioRoutingModule
    ],
    declarations: [
        InfoUsuarioComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InfoUsuarioModule { }
