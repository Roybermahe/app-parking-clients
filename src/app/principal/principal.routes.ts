import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import {PrincipalComponent } from "./principal.component";

const routes: Routes = [
    { path: "", component: PrincipalComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PrincipalRoutingModule { }
