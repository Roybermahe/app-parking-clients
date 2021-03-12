import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { AnunciosComponent } from "./Anuncios.component";
import { AnunciosRoutingModule } from "./Anuncios.routes"
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AnunciosRoutingModule,
        NativeScriptUIListViewModule
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
