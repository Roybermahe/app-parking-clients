import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {alert, Page} from '@nativescript/core';
import { RegisterService } from '../../services/register/register.service';
import * as AppSettings from '@nativescript/core/application-settings';
import { AuthService } from '../../services/authGoogle/auth-google.service';
import { RouterExtensions } from '@nativescript/angular';
import {Usuario} from "../../models/usuarios/usuario.model";
import {UsuarioService} from "../../services/usuario/usuario.service";

@Component({
	selector: 'principal',
	templateUrl: './principal.component.html',
	styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
	constructor(
		page: Page,
		private authService: AuthService,
		private route: RouterExtensions,
		private registerService: RegisterService,
		private usuarioService: UsuarioService,
		private router: ActivatedRoute
	) {
        page.actionBarHidden = true;
    }

	async ngOnInit() {
		let email = this.router.snapshot.paramMap.get('email');
		let google = JSON.parse(this.router.snapshot.paramMap.get('google'));
		if(google != null) {
			this.registerService.Post("account/google", { username: "GOOGLE", password: "GOOGLE", passwordConfirm: "GOOGLE", email: google.email }).subscribe(resp => {
				AppSettings.setString("_loginInit", google.email);
				this.updateUserInfo(google.email);
			});
		}
		if(email != null) {
			AppSettings.setString("_loginInit", email);
            this.updateUserInfo(email);
		}
	}

	onLoginOut() {
	    this.authService.tnsOauthLogout()
        .then(() => {
            AppSettings.remove("_loginInit");
            AppSettings.remove("_sessionmail");
            AppSettings.remove("_userInfo");
            this.route.navigate(["signin"], { animated: true, transition: { duration: 1000, name: "slide" }, clearHistory: true})
        })
        .catch((e) => console.log("Error: " + e));
	}

    updateUserInfo(email: string) {
        this.usuarioService.Get(`usuarios/req/${email}`).subscribe(resp => {
            AppSettings.setString("_userInfo",JSON.stringify(resp.getOne));
        });
	}
}
