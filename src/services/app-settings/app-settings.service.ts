import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MisVehiculosService {
    vehiculoSave = new EventEmitter<Boolean>()
}
