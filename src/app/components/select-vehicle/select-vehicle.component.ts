import {Component, OnInit} from "@angular/core";
import {vehiculos} from "../../../models/vehiculos/vehiculos.model";
import {EventData, ObservableArray} from "@nativescript/core";
import {VehiculosService} from "../../../services/vehiculos/vehiculos.service";
import {Usuario} from "../../../models/usuarios/usuario.model";
import * as AppSettings from "@nativescript/core/application-settings";
import {ModalDialogParams, RouterExtensions} from "@nativescript/angular";

@Component({
    moduleId: module.id,
    selector: "select-vehicle",
    templateUrl: "./select-vehicle.component.html",
    styleUrls: [ "./select-vehicle.component.css"]
})
export class selectVehicleComponent implements OnInit{
    usuario: Usuario = JSON.parse(AppSettings.getString("_userInfo", JSON.stringify(<Usuario>{
        email: '', telefono: 'actualizar', nombre: 'actualizar ' ,dni: 'actualizar', userState:"disable" })));

    vehiculos:vehiculos[] = [];
    constructor(
        private _params: ModalDialogParams,
        private router: RouterExtensions,
        private readonly vechiculosSvc: VehiculosService
    ) {}

    async ngOnInit() {
        this.onLoadData();
    }

    onSelectChange(event: number) {
        this._params.closeCallback(this.vehiculos[event]);
    }

    onLoadData() {
        this.vechiculosSvc.Get(`vehiculos/users/${this.usuario.id}`).subscribe(item => {
            AppSettings.setString("_mivehiculos", JSON.stringify(item.getAll));
            this.vehiculos.slice(0,this.vehiculos.length);
            this.vehiculos = item.getAll;
        }, err => {
            this.vehiculos.slice(0,this.vehiculos.length);
            this.vehiculos = JSON.parse(AppSettings.getString("_mivehiculos", JSON.stringify([])));
        });
    }
}
