import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {alert, ObservableArray, Page} from '@nativescript/core';
import { RegisterService } from '../../services/register/register.service';
import * as AppSettings from '@nativescript/core/application-settings';
import { AuthService } from '../../services/authGoogle/auth-google.service';
import { RouterExtensions } from '@nativescript/angular';
import {Usuario} from "../../models/usuarios/usuario.model";
import {UsuarioService} from "../../services/usuario/usuario.service";
import {pagoPayments} from "../../services/generic-service/pagos-gen.service";

@Component({
	selector: 'principal',
	templateUrl: './principal.component.html',
	styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, OnDestroy {
    signinAvailable:boolean = true;
	constructor(
		page: Page,
		private authService: AuthService,
		private route: RouterExtensions,
		private registerService: RegisterService,
		private usuarioService: UsuarioService,
		private router: ActivatedRoute,
        private pagoService: pagoPayments<any, any>
	) {
        page.actionBarHidden = true;
    }

    async ngOnDestroy() {

    }

	async ngOnInit() {
		let email = this.router.snapshot.paramMap.get('email');
		let google = JSON.parse(this.router.snapshot.paramMap.get('google'));
        let routePrincipal = AppSettings.getString("_loginInit", "");
        if(routePrincipal.length > 0){
            this.signinAvailable = false;
            await this.updateUserInfo(routePrincipal);
        }
		if(google != null) {
			this.onRegisterSign(google.email);
		}
		if(email != null) {
		    this.signinAvailable = false;
            await this.updateUserInfo(email);
		}
		setTimeout(() => {
            let token = JSON.parse(AppSettings.getString("_sessionmail",null));
            if(token != null){
                this.onRegisterSign(token.email);
            }
        }, 2000)
	}

	onLoginOut() {
	    this.authService.tnsOauthLogout()
        .then(() => {
            AppSettings.remove("_loginInit");
            AppSettings.remove("_sessionmail");
            AppSettings.remove("_userInfo");
            AppSettings.remove("_mivehiculos");
            AppSettings.remove("_userId");
            AppSettings.remove("_valorMonedero")
            this.signinAvailable = true;
        })
        .catch((e) => console.log("Error: " + e));
	}

    async updateUserInfo(email: string) {
        this.usuarioService.Get(`usuarios/req/${email}`).subscribe(resp => {
            AppSettings.setString("_userId", `${resp.getOne.id}`);
            AppSettings.setString("_loginInit",resp.getOne.email);
            AppSettings.setString("_userInfo", JSON.stringify(resp.getOne));
            this.signinAvailable = false;
        });
        await this.onLoadData()
	}
	register() {
	    this.route.navigate(['/signin']);
    }

    onRegisterSign(email: string) {
        this.registerService.Post("account/google", { username: "GOOGLE", password: "GOOGLE", passwordConfirm: "GOOGLE", email: email }).subscribe(async (resp) => {
            AppSettings.setString("_userId", `${resp.getOne.id}`);
            AppSettings.setString("_loginInit",email);
            await this.updateUserInfo(email);
            this.signinAvailable = false;
        });
    }
    async onLoadData() {
	    let id = AppSettings.getString("_userId", "");
	    if(id.length > 0) {
            this.pagoService.Get(`ClickPark/Recargas/User/Recargas/${id}`).subscribe(resp => {
                AppSettings.setString("_valorMonedero",`${resp.valor}`);
            });
	    }
    }
}
