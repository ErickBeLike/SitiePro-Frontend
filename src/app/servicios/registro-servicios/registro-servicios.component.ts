import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../services/servicios/servicios.service';
import { TiposServiciosService } from '../../services/tipos-servicios/tipos-servicios.service';

@Component({
  selector: 'app-registro-servicios',
  templateUrl: './registro-servicios.component.html',
  styleUrl: './registro-servicios.component.css'
})
export class RegistroServiciosComponent implements OnInit{
  titulo = 'Agregar servicio';
  formServicio: FormGroup;
  id: any | null;
  botonGuardar: boolean = true;
  tipos: any[] = [];

  constructor(
      private fb: FormBuilder,
      private serviciosService: ServiciosService,
      private tiposServiciosService: TiposServiciosService,
      private router: Router,
      private route: ActivatedRoute
  ) {
      this.formServicio = this.fb.group({
        nombreServicio: ['', [Validators.required]],
        idTipoServicio: ['', [Validators.required]],
        precioServicio: [0, [Validators.required]],
        descripcion: ['', [Validators.required]]
      });

      this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerTipos();
      this.esEditar();
  }

  obtenerTipos() {
    this.tiposServiciosService.obtenerTodosLosTiposServicios().subscribe(response => {
        this.tipos = response;
    });
  }

  esEditar() {
    if (this.id !== null) {
        this.titulo = 'Editar Servicio';
        this.serviciosService.buscarServicioId(this.id).subscribe(response => {
            setTimeout(() => {
                this.formServicio.patchValue(response);
                
                const tipoSeleccionado = this.tipos.find(tipo => tipo.idTipoServicio === response.idTipoServicio.idTipoServicio);
                
                if (tipoSeleccionado) {
                  this.formServicio.get('idTipoServicio')?.setValue(tipoSeleccionado.idTipoServicio);
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
      this.serviciosService.agregarServicio(this.formServicio.value).subscribe(
          response => {
              this.router.navigate(['/servicios/listado-servicios']);
          },
          error => {
              console.error(error);
          }
      );
  }

  editar(id: any): void {
      const servicio: any = this.formServicio.value;
      this.serviciosService.actualizarServicio(id, servicio).subscribe(
          response => {
              this.router.navigate(['/servicios/listado-servicios']);
          },
          error => {
              console.error(error);
          }
      );
  }

  onInput(event: any) {
      const inputValue = event.target.value;
      const newValue = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); 
      this.formServicio.get('nombreServicio')?.setValue(newValue, { emitEvent: false });
  }
}
