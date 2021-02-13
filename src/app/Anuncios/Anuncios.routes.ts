import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import {AnunciosComponent } from "./Anuncios.component";

const routes: Routes = [
    { path: "", component: AnunciosComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AnunciosRoutingModule { }
