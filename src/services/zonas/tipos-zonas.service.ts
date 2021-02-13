import { Injectable } from '@angular/core';
import {HttpGenericService, messageGenericInterface} from '../generic-service/http-generic.service';
import {tiposZonas} from '../../models/zonas/tipos-zonas.model';

@Injectable({
  providedIn: 'root'
})
export class TiposZonasService extends HttpGenericService<tiposZonas, messageGenericInterface<tiposZonas>>{}
