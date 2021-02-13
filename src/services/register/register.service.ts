import { Injectable } from "@angular/core";
import { register } from "../../models/register/register.model";
import { HttpGenericService, messageGenericInterface } from "../generic-service/http-generic.service"

@Injectable({
    providedIn: "root"
})
export class RegisterService extends HttpGenericService<register, messageGenericInterface<register>> {}