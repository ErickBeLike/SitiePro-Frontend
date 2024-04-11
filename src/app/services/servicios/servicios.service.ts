import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'http://localhost:8080/api/servicios';

  constructor(private http: HttpClient) { }

  obtenerTodosLosServicios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.getHttpOptions());
  }

  buscarServicioId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  agregarServicio(servicio: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, servicio, this.getHttpOptions());
  }

  actualizarServicio(id: number, servicio: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, servicio, this.getHttpOptions());
  }

  eliminarServicio(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
}
