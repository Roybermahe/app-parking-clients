import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
	selector: 'register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent {

	terms: boolean = false;
	@ViewChild('usuario') usuario: ElementRef;
	@ViewChild('correo') correo: ElementRef;
	@ViewChild('pass') pass: ElementRef;
	@ViewChild('passcfrm') passcfrm: ElementRef;

	constructor(
		private routeExt: RouterExtensions,
		private routerExt: RouterExtensions
	) { 
		
	}


	onBack() {
		this.routeExt.back();
	}

	googleSign() {
	
	}
}