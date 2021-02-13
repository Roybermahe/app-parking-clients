import { Injectable } from '@angular/core';
import {HttpGenericService, messageGenericInterface} from '../generic-service/http-generic.service';
import {vehiculos} from '../../models/vehiculos/vehiculos.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService extends HttpGenericService<vehiculos, messageGenericInterface<vehiculos>> {}
