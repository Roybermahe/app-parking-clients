import { Injectable } from '@angular/core';
import {HttpGenericService, messageGenericInterface} from '../generic-service/http-generic.service';
import {ZonasHorarios} from '../../models/zonas/zonas.horarios';

@Injectable({
  providedIn: 'root'
})
export class HorariosZonasService extends HttpGenericService<ZonasHorarios, messageGenericInterface<ZonasHorarios>>{}
