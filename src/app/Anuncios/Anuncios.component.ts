import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {ObservableArray} from "@nativescript/core";

@Component({
	moduleId: module.id,
	selector: 'Anuncios',
	templateUrl: './Anuncios.component.html',
	styleUrls: ['./Anuncios.component.css']
})

export class AnunciosComponent implements OnInit {

    list: string[] = [ "", "", ""]
    listAnuncios = new ObservableArray<string>();
    constructor(
        private routeExt: RouterExtensions
    ) { }

    ngOnInit() {
        this.listAnuncios.push(this.list);
    }

    onBack() {
        this.routeExt.back();
    }
}
