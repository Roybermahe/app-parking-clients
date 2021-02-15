import { Injectable } from "@angular/core";
import { Register } from "../../models/register/register.model";
import { HttpGenericService, messageGenericInterface } from "../generic-service/http-generic.service"

@Injectable({
    providedIn: "root"
})
export class RegisterService extends HttpGenericService<Register, messageGenericInterface<Register>> {}