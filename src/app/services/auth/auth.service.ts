import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface MyTokenPayload extends JwtPayload {
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: {correoUsuario: string, contrasenaUsuario: string}): Observable<boolean> {
    return this.http.post<{token: string}>('http://localhost:8080/login', credentials)
      .pipe(
        tap(({token}) => localStorage.setItem('token', token)),
        mapTo(true),
        catchError(error => {
          console.error(error);
          return of(false);
        })
      );
  }

  register(user: {nombreUsuario: string, correoUsuario: string, contrasenaUsuario: string, role: string}): Observable<boolean> {
    return this.http.post<{token: string}>('http://localhost:8080/register', user)
      .pipe(
        tap(({token}) => localStorage.setItem('token', token)),
        mapTo(true),
        catchError(error => {
          console.error(error);
          return of(false);
        })
      );
  }

  updateUser(id: number, user: {nombreUsuario: string, correoUsuario: string, contrasenaUsuario: string, role: string}): Observable<any> {
    return this.http.put(`http://localhost:8080/usuarios/${id}`, user)
      .pipe(
        catchError(error => {
          console.error(error);
          return of(null);
        })
      );
  }

  logout() {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Comprueba si el token es válido
    // ...
    return !!token;
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
  
    try {
      const decodedToken = jwtDecode<MyTokenPayload>(token);
      const role = decodedToken.role;  // Obtiene el rol del claim
  
      console.log('Role:', role);
  
      return role === 'ADMIN';
    } catch (error) {
      console.error('Error decoding token', error);
      return false;
    }
  }
}