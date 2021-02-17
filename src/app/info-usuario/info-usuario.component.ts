import {Component, NgZone, OnInit, ViewContainerRef} from '@angular/core';
import {UsuarioService} from "../../services/usuario/usuario.service";
import {Usuario} from "../../models/usuarios/usuario.model";
import * as AppSettings from '@nativescript/core/application-settings';
import {Register} from "../../models/register/register.model";
import {ModalDialogService, RouterExtensions} from "@nativescript/angular";
import {RegisterVehicleComponent} from "../components/register-vehicle/register-vehicle.component";
import {updateFormComponent} from "../components/update-form/update-form.component";
import {ObservableArray} from "@nativescript/core";
import {vehiculos} from "../../models/vehiculos/vehiculos.model";
@Component({
	moduleId: module.id,
	selector: 'info-usuario',
	templateUrl: './info-usuario.component.html',
	styleUrls: ['./info-usuario.component.css']
})

export class InfoUsuarioComponent implements OnInit {

    email: string = AppSettings.getString("_loginInit", '');
    usuario: Usuario = JSON.parse(AppSettings.getString("_userInfo", JSON.stringify(<Usuario>{
        email:'', telefono: 'actualizar', nombre: 'actualizar ' ,dni: 'actualizar'
    })));
	constructor(
	    private router: RouterExtensions,
	    private userService: UsuarioService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private ngZone: NgZone
    ) { }

	ngOnInit() {
	    this.ngZone.run(() => {
            this.userService.Get(`usuarios/req/${this.email}`).subscribe(resp => {
                AppSettings.setString("_userInfo",JSON.stringify(resp.getOne));
                this.usuario = resp.getOne;
            },err => {
                this.usuario = JSON.parse(AppSettings.getString("_userInfo", JSON.stringify(<Usuario>{
                    email:'', telefono: 'actualizar', nombre: 'actualizar ' ,dni: 'actualizar'
                })));
            });
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

	onBack() {
	    this.router.back();
    }
}
