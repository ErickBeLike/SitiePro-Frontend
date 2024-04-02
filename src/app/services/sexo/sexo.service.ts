import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  private apiUrl = 'http://localhost:8080/api/sexo';

  constructor(private http: HttpClient) { }

  obtenerTodosLosSexos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarSexoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
