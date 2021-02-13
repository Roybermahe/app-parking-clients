import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { SanzionesComponent } from "./sanziones.component";

const routes: Routes = [
    { path: "", component: SanzionesComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SanzionesRoutingModule { }
