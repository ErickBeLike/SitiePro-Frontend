import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposServiciosService {

  private apiUrl = 'http://localhost:8080/api/tipos-servicios';

  constructor(private http: HttpClient) { }

  obtenerTodosLosTiposServicios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarTipoServicioPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }}
