import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { monederoComponent } from "./monedero.component";
import { monederoRoutingModule } from "./monedero.routes"
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import {ComponentsModule} from "../components/components.module";
import {monederoFormComponent} from "../components/monedero/monedero.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        monederoRoutingModule,
        NativeScriptUIListViewModule,
        ComponentsModule
    ],
    declarations: [
        monederoComponent
    ],
    providers: [],
    entryComponents: [
      monederoFormComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class monederoModule { }
