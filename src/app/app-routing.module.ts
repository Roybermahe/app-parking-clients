import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import * as AppSettings from "@nativescript/core/application-settings";
let routePrincipal = AppSettings.getString("_loginInit", "");
const routes: Routes = [
    { path: "", redirectTo: routePrincipal.length == 0 ? "/signin": "/principal", pathMatch: "full" },
    { path: "signin", loadChildren: () => import("./sign-in/sign-in.module").then(m => m.SignInModule) },
    { path: "register", loadChildren: () => import("./register-form/register-form.module").then(m => m.RegisterModule) },
    { path: "principal", loadChildren: () => import("./principal/principal.module").then(m => m.PrincipalModule) },
    { path: "principal/:google", loadChildren: () => import("./principal/principal.module").then(m => m.PrincipalModule) },
    { path: "principal/unk/:email", loadChildren: () => import("./principal/principal.module").then(m => m.PrincipalModule) },
    { path: "vehicles", loadChildren: () => import("./vehicles/vehicles.module").then(m => m.VehiclesModule) },
    { path: "infoUsuario", loadChildren: () => import("./info-usuario/info-usuario.module").then(m => m.InfoUsuarioModule) },
    { path: "anuncios", loadChildren: () => import("./Anuncios/Anuncios.module").then(m => m.AnunciosModule) },
    { path: "map-parking", loadChildren: () => import("./map-parking/map-parking.module").then(m => m.MapParkingModule) },
    { path: "sanziones", loadChildren: () => import("./sanziones/sanziones.module").then(m => m.SanzionesModule) }
];



@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
