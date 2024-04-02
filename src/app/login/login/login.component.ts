import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    correo: '',
    contrasena: '',
  };

  error: string = ''; 
  showPassword: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login exitoso', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
        this.error = 'Credenciales inválidas';
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
