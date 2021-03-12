import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {sanzionModel} from "../../models/sanziones/sanzion.model";
import {ObservableArray, SearchBar} from "@nativescript/core";
import {SanzionesService} from "../../services/snziones/sanziones.service";

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
        private sanzionSvc: SanzionesService
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
            for (const i in this.source) {
                if(this.source[i].id.toString().toLowerCase().indexOf(this.filterString) !== -1
                ){
                    this.sanzionView = this.source[i];
                    console.log(this.source[i])
                }
            }
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

}
