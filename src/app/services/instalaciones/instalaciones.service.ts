import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

  private apiUrl = 'http://localhost:8080/api/instalaciones';

  constructor(private http: HttpClient) { }

  obtenerTodasLasInstalaciones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.getHttpOptions());
  }

  buscarInstalacionId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  agregarInstalacion(instalacion: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, instalacion, this.getHttpOptions());
  }

  actualizarInstalacion(id: number, instalacion: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, instalacion, this.getHttpOptions());
  }

  eliminarInstalacion(id: number): Observable<any> {
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
