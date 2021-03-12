import {Component} from "@angular/core";
import {ModalDialogParams, RouterExtensions} from "@nativescript/angular";

@Component({
    moduleId: module.id,
    selector: "select-time",
    templateUrl: "./select-time.component.html",
    styleUrls: [ "./select-time.component.css"]
})
export class SelectTimeComponent {
    time:number = 30;
    constructor(
        private _params: ModalDialogParams,
        private router: RouterExtensions,
    ) {
    }

    onMinor() {
        if(this.time > 15) {
          this.time -= 3;
        } else {
            this.time = 15;
        }
    }

    onMore() {
        if(this.time >= 116) {
            this.time = 120
        } else {
            this.time += 3;
        }
    }

    onConfirmTime() {
        this._params.closeCallback(this.time);
    }
}
