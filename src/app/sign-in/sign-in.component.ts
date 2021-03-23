import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import {EventData, Page, TextField} from '@nativescript/core';
import { AuthService } from '../../services/authGoogle/auth-google.service';
import jwt_decode from "jwt-decode";
import * as AppSettings from '@nativescript/core/application-settings';
import {Register} from "../../models/register/register.model";
import {RegisterService} from "../../services/register/register.service";

@Component({
	selector: 'sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    recordPass: Register = JSON.parse(AppSettings.getString("_userRecord", JSON.stringify({ authenticatedForm: "", pass: "" })));
	recordUsPass: boolean = false;

	@ViewChild('correo') correo: ElementRef;
	@ViewChild('pass') pass: ElementRef;
	constructor(
		page: Page,
		private authService: AuthService,
		private route: RouterExtensions,
		private registSvc: RegisterService,
		private ngZone:NgZone
	) {
		page.actionBarHidden = true;
		if(this.recordPass.authenticatedForm.length > 0 && this.recordPass.pass.length > 0) {
		    this.recordUsPass = true;
        }

	}
	ngOnInit(): void {
		setTimeout(async () => {
			try {
                let token = AppSettings.getString("_sessionmail",null);
                if(token != null) {
                    await this.route.navigate(["principal", token], { clearHistory: true, animated: true, transition: {
                            name: "slide",
                            duration: 500
                        }});
                }
            } catch (err) {
			    console.log(err)
            }
		}, 2000);
	}

	googleSign() {
        let token = JSON.parse(AppSettings.getString("_sessionmail",null));
        if(token == null) {
            this.ngZone.runTask(async () => {
                let data = await this.authService.tnsOauthLogin('google');
                AppSettings.setString("_sessionmail", JSON.stringify(jwt_decode(data.idToken)));
            });
        } else {
            this.route.navigate(["/principal"], { clearHistory: true, animated: true, transition: {
                    name: "slide",
                    duration: 1000
            }});
        }
	}


	onSign() {
        let user = new Register();
        user.authenticatedForm = <string>this.correo.nativeElement.text;
        user.pass = <string>this.pass.nativeElement.text;
        if(!this.onValidSign()) {
            this.onAlert("Message", "Ingrese su correo y contraseña.", "Ok");
            return null;
        }
        if(this.recordUsPass) {
            AppSettings.setString("_userRecord", JSON.stringify(user));
        }
        if(this.onValidSign()) {
            this.registSvc.Post("account/sign/unknown", user).subscribe(resp => {
                let msg = resp.message.split('|')[0];
                console.log(resp);
                AppSettings.setString("_userId", `${resp.getOne.id}`);
                this.onAlert("ClickPark", msg,"Ok");
                if(resp.message.toLowerCase().includes('pass')) {
                    AppSettings.setString("_loginInit",user.authenticatedForm);
                    this.route.navigate(["principal/unk/", user.authenticatedForm.toLowerCase() ], { clearHistory: true, animated: true, transition: {
                            name: "slide",
                            duration: 1000
                        }});
                }
            }, err => {
                this.onAlert("ClickPark", "Ocurrio un error.","Ok");
            })
        }
	}

	onValidSign() {
	    let correo = <string>this.correo.nativeElement.text;
	    let pass = <string>this.correo.nativeElement.text;
	    return correo.length > 0 && pass.length > 0 && correo.includes('@');
    }

	onAlert(title: string, message: string, okbtn: string) {
		let options = {
			title: title,
			message: message,
			okButtonText: okbtn
		};
		alert(options);
	}

    onCheckTerms(event: any) {
	    this.recordUsPass = event.value;
    }

}
