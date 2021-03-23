import {Injectable} from "@angular/core";
import {HttpGenericService, messageGenericInterface} from "../generic-service/http-generic.service";
import {horariosModel} from "../../models/parking/horarios.model";

@Injectable({
    providedIn: "root"
})
export class horariosService extends HttpGenericService<horariosModel, messageGenericInterface<horariosModel>>{}
