import { Injectable } from '@angular/core';
import {HttpGenericService, messageGenericInterface} from '../generic-service/http-generic.service';
import {Usuario} from '../../models/usuarios/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends HttpGenericService<Usuario,messageGenericInterface<Usuario>> {}
