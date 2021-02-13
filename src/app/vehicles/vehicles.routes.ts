import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { VehiclesComponent } from "./vehicles.component";

const routes: Routes = [
    { path: "", component: VehiclesComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class VehiclesRoutingModule { }