import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {ModalDialogService, RouterExtensions} from "@nativescript/angular";
import {inAppBrowserService} from "../../services/app-settings/inAppBrowser.service";
import {monederoFormComponent} from "../components/monedero/monedero.component";
import {pagoPayments} from "../../services/generic-service/pagos-gen.service";
import {messageGenericInterface} from "../../services/generic-service/http-generic.service";
import {ObservableArray} from "@nativescript/core";
import * as AppSetting from "@nativescript/core/application-settings";

@Component({
    selector: 'monedero',
    styleUrls: ['./monedero.component.css'],
    templateUrl: './monedero.component.html'
})
export class monederoComponent implements OnInit{
    private userId = AppSetting.getString("_userId","");
    monederoActual: number = 0.00;
    listHistory = new ObservableArray<any>();
    constructor(
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private route: RouterExtensions,
        private pagoService: pagoPayments<any, any>
    ) {
    }

    onBack() {
        this.route.back();
    }

    onRecargar() {
        this.modalService.showModal(monederoFormComponent, {
            animated: true,
            cancelable: true,
            viewContainerRef: this.viewContainerRef,
            fullscreen: false
        }).then(async () => {
            await this.onLoadData();
        });
    }

    async onLoadData() {
        this.pagoService.Get(`ClickPark/Recargas/User/Recargas/${this.userId}`).subscribe(resp => {
            this.monederoActual = resp.valor;
            this.listHistory = new ObservableArray<any>();
            this.listHistory.push(<any[]>resp.historial);
        });
    }

    async ngOnInit() {
       await  this.onLoadData()
    }

}
