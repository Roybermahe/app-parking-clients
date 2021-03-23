import {Injectable} from "@angular/core";
import { InAppBrowser } from "nativescript-inappbrowser";
import {Utils} from "@nativescript/core";
@Injectable({
    providedIn: 'root'
})
export class inAppBrowserService {
    async  openUrl(url: string) {
        try {
            if(await InAppBrowser.isAvailable()) {
                const result = await InAppBrowser.open(url,{
                    hasBackButton: true,
                    showTitle: false,
                    toolbarColor: '#0155D2',
                    enableUrlBarHiding: true,
                    enableDefaultShare: true,
                });
            }
        } catch (e) {
            Utils.openUrl(url);
        }
    }
}
