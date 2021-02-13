import {Injectable} from '@angular/core';
import {HttpGenericService, messageGenericInterface} from '../generic-service/http-generic.service';
import {Zonas} from '../../models/zonas/zonas.model';

@Injectable({
  providedIn: 'root'
})
export class zonasService extends HttpGenericService<Zonas, messageGenericInterface<Zonas>> {}
