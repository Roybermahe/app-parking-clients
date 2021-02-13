import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { AnunciosComponent } from "./Anuncios.component";
import { AnunciosRoutingModule } from "./Anuncios.routes"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AnunciosRoutingModule
    ],
    declarations: [
        AnunciosComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AnunciosModule { }
