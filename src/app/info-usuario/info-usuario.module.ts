import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {ModalDialogService, NativeScriptCommonModule, NativeScriptFormsModule} from "@nativescript/angular";
import { InfoUsuarioComponent } from "./info-usuario.component";
import { InfoUsuarioRoutingModule } from "./info-usuario.routes"
import {updateFormComponent} from "../components/update-form/update-form.component";
import {ComponentsModule} from "../components/components.module";


@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        InfoUsuarioRoutingModule,
        ComponentsModule,
    ],
    declarations: [
        InfoUsuarioComponent
    ],
    providers: [
        ModalDialogService
    ],
    entryComponents: [
        updateFormComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InfoUsuarioModule { }
