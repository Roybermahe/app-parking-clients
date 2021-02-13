import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import {MapParkingComponent } from "./map-parking.component";

const routes: Routes = [
    { path: "", component: MapParkingComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MapParkingRoutingModule { }
