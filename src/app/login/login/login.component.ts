import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    correoUsuario: '',
    contrasenaUsuario: '',
  };

  error: string = ''; 
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      () => {
        console.log('Login exitoso');
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
