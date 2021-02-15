import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { AuthService } from '../../services/authGoogle/auth-google.service';
import { postData, Register } from '../../models/register/register.model'
import { RegisterService } from '../../services/register/register.service';
import jwt_decode from "jwt-decode";
import * as AppSettings from '@nativescript/core/application-settings';

@Component({
	selector: 'register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

	registerForm = new Register();
	terms: boolean = false;
	@ViewChild('usuario') usuario: ElementRef;
	@ViewChild('correo') correo: ElementRef;
	@ViewChild('pass') pass: ElementRef;
	@ViewChild('passcfrm') passcfrm: ElementRef;

	constructor(
		private routeExt: RouterExtensions,
		private registerSvc: RegisterService,
	) {

	}


	onBack() {
		this.routeExt.back();
	}

	onSubmit() {
		this.registerForm.email = (<string>this.correo.nativeElement.text).toLowerCase();
		this.registerForm.username = (<string>this.usuario.nativeElement.text).toLowerCase();
		this.registerForm.password = (<string>this.pass.nativeElement.text).toLowerCase();
		this.registerForm.passwordConfirm = (<string>this.passcfrm.nativeElement.text).toLowerCase();
		if (this.registerForm.password != this.registerForm.passwordConfirm) {
			this.onAlert("Message", "Las contraseñas no coinciden", "Ok");
			return null;
		}
		if (this.onValid() && this.terms) {
			this.registerSvc.Post("account/unknown", this.registerForm).subscribe(resp => {
				this.onAlert("ClickPark", resp.message, "Ok");
			}, err => {
				this.onAlert("Message", "Ocurrio un error, intentelo de nuevo mas tarde.", "Ok");
			});
		} else if(!this.terms) {
			this.onAlert("Message", "No ha aceptado los terminos y condiciones de uso del servicio.", "Ok");
			return null;
		} else {
			this.onAlert("Message", "Llene todos los campos para registrarse.", "Ok");
			return null;
		}
	}

	onValid() {
		let user = <string>this.usuario.nativeElement.text;
		let email = <string>this.correo.nativeElement.text;
		let pass = <string>this.pass.nativeElement.text;
		let passCfrm = <string>this.passcfrm.nativeElement.text;
		return user.length > 0 && email.length > 0 && pass.length > 0 && passCfrm.length > 0;
	}

	onAlert(title: string, message: string, okbtn: string) {
		let options = {
			title: title,
			message: message,
			okButtonText: okbtn
		};
		alert(options);
	}

	onCheckTerms(args: any) {
	    this.terms = args.value;
    }
}
