import {Component} from "@angular/core";
import {RouterExtensions} from "@nativescript/angular";

@Component({
    selector: "about-component",
    templateUrl: "./about.component.html",
    styleUrls: [ "./about.component.css"]
})
export class AboutComponent {

    constructor(
        private routeExt: RouterExtensions
    ) { }

    ngOnInit() { }

    onBack() {
        this.routeExt.back();
    }

}
