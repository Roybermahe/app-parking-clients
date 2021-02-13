import { Injectable } from '@angular/core';
import {HttpGenericService, messageGenericInterface} from '../generic-service/http-generic.service';
import {vigilante} from '../../models/vigilantes/vigilante.model';

@Injectable({
  providedIn: 'root'
})
export class VigilanteService extends HttpGenericService<vigilante, messageGenericInterface<vigilante>> {}

