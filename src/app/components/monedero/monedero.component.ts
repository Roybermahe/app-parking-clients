import {Component, OnInit} from "@angular/core";
import {inAppBrowserService} from "../../../services/app-settings/inAppBrowser.service";
import {ModalDialogParams, RouterExtensions} from "@nativescript/angular";
const sign = require('jwt-encode');
import * as AppSetting from "@nativescript/core/application-settings";
import {messageGenericInterface} from "../../../services/generic-service/http-generic.service";
import {pagoPayments} from "../../../services/generic-service/pagos-gen.service";
@Component({
    selector: 'monedero',
    templateUrl: './monedero.component.html',
    styleUrls: ['./monedero.component.css']
})
export class monederoFormComponent {
    private userId = AppSetting.getString("_userId","");
    valor:number = 5;
    constructor(
        private InAppBrowser: inAppBrowserService,
        private _params: ModalDialogParams,
        private router: RouterExtensions,
        private pagoService: pagoPayments<any, messageGenericInterface<any>>
    ) {
    }
    onMinor() {
        if(this.valor > 5) {
            this.valor -= 3;
        } else {
            this.valor = 5;
        }
    }

    onMore() {
        if(this.valor >= 50) {
            this.valor = 50
        } else {
            this.valor += 3;
        }
    }

    async onConfirm() {
        try {
            let jwt = sign({
                userId: +AppSetting.getString("_userId", ""),
                valorRecarga: this.valor
            }, 'secret');
            await this.InAppBrowser.openUrl( `https://paymentsclickpark.redlandsandwhales.com/ClickPark/Recargas/${jwt}`);
            this._params.closeCallback();
        } catch (e) {
            console.log(e);
        }
    }

}
