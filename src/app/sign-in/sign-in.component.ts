import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';
import { AuthService } from '../../services/authGoogle/auth-google.service';
import jwt_decode from "jwt-decode";
import * as AppSettings from '@nativescript/core/application-settings';
@Component({
	selector: 'sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

	result = null;
	recordUsPass: boolean = false;
	constructor(
		page: Page,
		private authService: AuthService,
		private route: RouterExtensions,
		private ngZone:NgZone
	) { 
		page.actionBarHidden = true;
	}
	ngOnInit(): void {
		setTimeout(() => {
			let token = AppSettings.getString("_userlogin",null);
			if(token){              
			   this.route.navigate(["/principal"]);
			}
		}, 2000);
	}

	googleSign() {
		this.ngZone.runTask(async () => {
			let data = await this.authService.tnsOauthLogin('google');
			AppSettings.setString("_userlogin", JSON.stringify(jwt_decode(data.idToken)));
		});
	}
}