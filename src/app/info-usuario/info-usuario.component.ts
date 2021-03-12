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
import {VehiculosService} from "../../services/vehiculos/vehiculos.service";
@Component({
	moduleId: module.id,
	selector: 'info-usuario',
	templateUrl: './info-usuario.component.html',
	styleUrls: ['./info-usuario.component.css']
})

export class InfoUsuarioComponent implements OnInit {

    email: string = AppSettings.getString("_loginInit", "");
    usuario: Usuario = JSON.parse(AppSettings.getString("_userInfo", JSON.stringify(<Usuario>{
        email:'no estas logueado', telefono: 'no estas logueado', nombre: 'no estas logueado' ,dni: 'no estas logueado'
    })));
    listVehiculos = new ObservableArray<vehiculos>();
	constructor(
	    private router: RouterExtensions,
	    private userService: UsuarioService,
        private vechiculosSvc: VehiculosService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private ngZone: NgZone
    ) { }

	ngOnInit() {
	    console.log(this.email);
	    console.log(this.usuario);
	    /*this.ngZone.run(() => {
            this.userService.Get(`usuarios/req/${this.email}`).subscribe(resp => {
                AppSettings.setString("_userInfo",JSON.stringify(resp.getOne));
                this.usuario = resp.getOne;
            },err => {
                this.usuario = JSON.parse(AppSettings.getString("_userInfo", JSON.stringify(<Usuario>{
                    email:'', telefono: 'actualizar', nombre: 'actualizar ' ,dni: 'actualizar'
                })));
            });
        });*/
        //this.onVehiclesCount();
    }

    async onUpdate(){
	    await this.modalService.showModal(updateFormComponent, {
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

    onVehiclesCount(){
        this.vechiculosSvc.Get(`vehiculos/users/${this.usuario.id}`).subscribe(item => {
            AppSettings.setString("_mivehiculos", JSON.stringify(item.getAll));
            this.listVehiculos = new ObservableArray<vehiculos>();
            this.listVehiculos.push(item.getAll);
        }, err => {
            this.listVehiculos = new ObservableArray<vehiculos>();
            this.listVehiculos.push(JSON.parse(AppSettings.getString("_mivehiculos", JSON.stringify([]))));
        });
    }
}
