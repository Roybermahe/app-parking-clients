import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { RegisterFormComponent } from "./register-form.component";

const routes: Routes = [
    { path: "", component: RegisterFormComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RegisterRoutingModule { }
