import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private apiUrl = 'http://localhost:8080/api/ventas';

  constructor(private http: HttpClient) { }

  obtenerTodasLasVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.getHttpOptions());
  }

  buscarVentaId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  agregarVenta(venta: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, venta, this.getHttpOptions());
  }

  actualizarVenta(id: number, venta: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, venta, this.getHttpOptions());
  }

  eliminarVenta(id: number): Observable<any> {
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
