import {format} from '../../types/format.type';

export class ZonasHorarios {
  id?: number;
  tiempo?: number;
  formato: format;
  formatoTiempo?: format;
  tarifa: number;
  descuento: number;
  zona?: number;
  idZona?: number;
}
