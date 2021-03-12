import {Component, OnInit} from "@angular/core";
import {Usuario} from "../../../models/usuarios/usuario.model";
import {ModalDialogParams, RouterExtensions} from "@nativescript/angular";
import {UsuarioService} from "../../../services/usuario/usuario.service";
import * as AppSettings from "@nativescript/core/application-settings";
import {alert} from "@nativescript/core";

@Component({
    selector: "update-form",
    templateUrl: "./update-form.component.html",
    styleUrls: [ "./update-form.component.css"]
})
export class updateFormComponent implements OnInit {
    user: Usuario = { nombre: "", telefono: "", email: AppSettings.getString("_loginInit", '') };
    constructor(
        private _params: ModalDialogParams, private router: RouterExtensions, private readonly UsuarioSvc: UsuarioService
    ) {
    }

    ngOnInit(): void {

    }

    async onSubmit() {
        if(this.user.nombre.length > 0 && this.user.telefono.length > 0 ) {
            this.user.id = this._params.context.userId;
            this.UsuarioSvc.Put("usuarios",this.user).subscribe(async (resp) => {
                await alert({title: "ClickPark", message: resp.message, okButtonText: "Ok" });
                this._params.closeCallback();
            }, async (err) => {
                console.log(err);
                await alert({title: "Message", message: "Ocurrio un error, intentelo de nuevo mas tarde.", okButtonText: "Ok" });
                this._params.closeCallback();
            });
        } else {
           await alert({title: "Message", message: "LLene los campos nombre y telefono para actualizar sus datos.", okButtonText: "Ok" });
        }
    }
}
