import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent {

  usuarios: any[] = [];
  contrasenasVisiblesPorFila: { [key: number]: boolean } = {};

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodosLosUsuarios();
  }

  obtenerTodosLosUsuarios() {
    this.usuariosService.obtenerTodosLosUsuario().subscribe(response => {
      this.usuarios = response;
    }, error => {
      console.error(error);
    });
  }

  eliminar(usuario: any) {
    const confirmar = confirm(`¿Estás seguro de eliminar el usuario con ID ${usuario.idUsuario}?`);
    if (confirmar) {
      this.usuariosService.eliminarUsuario(usuario.idUsuario).subscribe(response => {
        this.obtenerTodosLosUsuarios();
      }, error => {
        console.error(error);
      });
    }
  }

  editarUsuario(id: any): void {
    this.router.navigate(['/usuarios/registro-usuarios', id]);
  }

  ocultarContrasena(contrasena: string): string {
    return contrasena.replace(/./g, '*');
  }

  alternarVisibilidadContrasenas() {
    this.contrasenasVisiblesPorFila = {};
  }

  alternarVisibilidadContrasenaFila(idUsuario: number) {
    if (this.contrasenasVisiblesPorFila[idUsuario] === undefined) {
      this.contrasenasVisiblesPorFila[idUsuario] = true;
    } else {
      this.contrasenasVisiblesPorFila[idUsuario] = !this.contrasenasVisiblesPorFila[idUsuario];
    }
  }
}
