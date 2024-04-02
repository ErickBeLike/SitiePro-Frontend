import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { RolesService } from '../../services/roles/roles.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  titulo = 'Agregar usuario';
  formUsuario: FormGroup;
  id: any | null;
  botonGuardar: boolean = true;
  roles: any[] = [];
  showPassword: boolean = false;

  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formUsuario = this.fb.group({
      idRol: ['', [Validators.required]],
      nombreUsuario: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      correoUsuario: ['', [Validators.required, Validators.email, Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/)]],
      contrasenaUsuario: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerRoles();
    this.esEditar();
  }

  obtenerRoles() {
    this.rolesService.obtenerTodosLosRoles().subscribe(response => {
      this.roles = response;
    });
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Usuario';
      this.usuariosService.buscarUsuarioId(this.id).subscribe(response => {
        setTimeout(() => {
          this.formUsuario.patchValue(response);
          const rolSeleccionado = this.roles.find(rol => rol.idRol === response.idRol.idRol);
          if (rolSeleccionado) {
            this.formUsuario.get('idRol')?.setValue(rolSeleccionado.idRol);
          }
        }, 0);
      });
    }
  }

  agregarOEditar(): void {
    if (this.id === null) {
      this.agregar();
    } else {
      this.editar(this.id);
    }
  }

  agregar(): void {
    this.usuariosService.agregarUsuario(this.formUsuario.value).subscribe(
      response => {
        this.router.navigate(['/usuarios/listado-usuarios']);
      },
      error => {
        console.error(error);
      }
    );
  }

  editar(id: any): void {
    const usuario: any = this.formUsuario.value;
    this.usuariosService.actualizarUsuario(id, usuario).subscribe(
      response => {
        this.router.navigate(['/usuarios/listado-usuarios']);
      },
      error => {
        console.error(error);
      }
    );
  }

  onInput(event: any) {
    const inputValue = event.target.value;
    const newValue = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); 
    this.formUsuario.get('nombreUsuario')?.setValue(newValue, { emitEvent: false });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const passwordInputEl: HTMLInputElement = this.passwordInput.nativeElement;
    passwordInputEl.type = this.showPassword ? 'text' : 'password';
  }
}
