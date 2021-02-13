import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
	selector: 'principal',
	templateUrl: './principal.component.html',
	styleUrls: ['./principal.component.css']
})

export class PrincipalComponent {

	constructor(
		page: Page,
		private routerExt: RouterExtensions
	) { 
		page.actionBarHidden = true;
	}

	onLoginOut() {
		
	}

}