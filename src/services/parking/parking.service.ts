import {Injectable} from "@angular/core";
import {HttpGenericService, messageGenericInterface} from "../generic-service/http-generic.service";
import {parking} from "../../models/parking/parking.model";

@Injectable({
    providedIn: "root"
})
export class ParkingService extends HttpGenericService<parking, messageGenericInterface<parking>>{}
