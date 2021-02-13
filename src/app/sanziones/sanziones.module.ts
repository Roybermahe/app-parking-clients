import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { SanzionesComponent } from "./sanziones.component";
import { SanzionesRoutingModule } from "./sanziones.routes"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SanzionesRoutingModule
    ],
    declarations: [
        SanzionesComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SanzionesModule { }
