import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

  private apiUrl = 'http://localhost:8080/api/instalaciones';

  constructor(private http: HttpClient) { }

  obtenerTodasLasInstalaciones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarInstalacionId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  agregarInstalacion(instalacion: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, instalacion);
  }

  actualizarInstalacion(id: number, instalacion: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, instalacion);
  }

  eliminarInstalacion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }}
