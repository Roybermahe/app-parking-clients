import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {sanzionModel} from "../../models/sanziones/sanzion.model";
import {ObservableArray, SearchBar} from "@nativescript/core";
import {SanzionesService} from "../../services/snziones/sanziones.service";
import {inAppBrowserService} from "../../services/app-settings/inAppBrowser.service";
import * as AppSettings from "@nativescript/core/application-settings";
import {alert} from "@nativescript/core/ui/dialogs";
const sign = require('jwt-encode');
@Component({
	moduleId: module.id,
	selector: 'sanziones',
	templateUrl: './sanziones.component.html',
	styleUrls: ['./sanziones.component.css']
})

export class SanzionesComponent implements OnInit {
    filterString = '';
    sanzionView: sanzionModel = null;
    source: sanzionModel[];
    listSanzion = new ObservableArray<sanzionModel>();

	constructor(
	    private routeExt: RouterExtensions,
        private sanzionSvc: SanzionesService,
        private openUrl: inAppBrowserService
    ) { }

	ngOnInit() {
	    this.onLoadData();
    }

	onBack() {
	    this.routeExt.back();
    }

    public onSubmit(args){
        let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text.trim();
        this.filterString = searchValue.toLowerCase();

        this.listSanzion = new ObservableArray<sanzionModel>();
        if(searchValue !== ""){
            this.sanzionView = this.source.find(item => item.id == +searchValue);
        }else{
            this.listSanzion.push(this.source);
        }
    }

    onLoadData() {
        this.sanzionSvc.Get('sanziones').subscribe(resp => {
            this.source = resp.getAll;
            this.listSanzion = new ObservableArray<sanzionModel>();
            this.listSanzion.push(resp.getAll);
        }, error => {
            console.log(error);
        });
    }

    async onPagarSancion() {
	    let data = {
	        idSanzion: this.sanzionView.id,
            idVehiculo: this.sanzionView.vehiculo.id,
            email: AppSettings.getString("_loginInit", "")
        }
        if(data.email.length > 0) {
            await this.openUrl.openUrl(`https://paymentsclickpark.redlandsandwhales.com/Clickpark/Sancion/${sign(data, 'secret')}`);
        } else {
           await alert({title: "Message", message: "Debes iniciar sesión para realizar esta acción.", okButtonText: "Ok"});
        }
    }
}
