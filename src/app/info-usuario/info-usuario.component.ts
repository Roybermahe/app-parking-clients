import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UsuarioService} from "../../services/usuario/usuario.service";
import {Usuario} from "../../models/usuarios/usuario.model";
import * as AppSettings from '@nativescript/core/application-settings';
import {Register} from "../../models/register/register.model";
import {ModalDialogService} from "@nativescript/angular";
import {RegisterVehicleComponent} from "../components/register-vehicle/register-vehicle.component";
import {updateFormComponent} from "../components/update-form/update-form.component";
@Component({
	moduleId: module.id,
	selector: 'info-usuario',
	templateUrl: './info-usuario.component.html',
	styleUrls: ['./info-usuario.component.css']
})

export class InfoUsuarioComponent implements OnInit {

    email: string = AppSettings.getString("_loginInit", '');
    usuario: Usuario = JSON.parse(AppSettings.getString("_userInfo", JSON.stringify(<Usuario>{
        email: this.email, telefono: 'actualizar', nombre: 'actualizar ' ,dni: 'actualizar'
    })));
	constructor(
	    private userService: UsuarioService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
    ) { }

	ngOnInit() {
	    this.userService.Get(`usuarios/req/${this.email}`).subscribe(resp => {
	        AppSettings.setString("_userInfo",JSON.stringify(resp.getOne));
	        this.usuario = resp.getOne;
        });
    }

   onUpdate(){
	    this.modalService.showModal(updateFormComponent, {
            fullscreen: false,
            cancelable: true,
            animated: true,
            context: { userId: this.usuario.id },
            viewContainerRef: this.viewContainerRef
        });
	    this.ngOnInit();
    }
}
