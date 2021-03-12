import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**
 * T Representa el body que será procesado
 * M Representa la respuesta que se va a recibir
 * */
export class HttpGenericService<T, M> {

  private readonly END_POINT: string;

  constructor(
    private readonly http: HttpClient
  ) {
    this.END_POINT = "https://apiclickpark.redlandsandwhales.com/api";
  }

  Get(route: string): Observable<M> {
    return this.http.get<M>(`${this.END_POINT}/${route}`);
  }

  Post(route: string, body: T): Observable<M> {
    return this.http.post<M>(`${this.END_POINT}/${route}`, body);
  }

  Put(route: string, body: T): Observable<M> {
    return this.http.put<M>(`${this.END_POINT}/${route}`, body);
  }

  Delete(route: string, id: number): Observable<M> {
    return this.http.delete<M>(`${this.END_POINT}/${route}/${id}`);
  }
}

export interface messageGenericInterface<T> {
  message?: string;
  getAll?: T[];
  getOne?: T;
}

