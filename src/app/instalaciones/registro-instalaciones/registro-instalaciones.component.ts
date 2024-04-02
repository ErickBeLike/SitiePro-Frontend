import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InstalacionesService } from '../../services/instalaciones/instalaciones.service';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import { VentasService } from '../../services/ventas/ventas.service';

@Component({
  selector: 'app-registro-instalaciones',
  templateUrl: './registro-instalaciones.component.html',
  styleUrl: './registro-instalaciones.component.css'
})
export class RegistroInstalacionesComponent implements OnInit{
  titulo = 'Agregar instalación';
  formInstalacion: FormGroup;
  id: any | null;
  botonGuardar: boolean = true;

  ventas: any[] = [];
  empleados: any[] = [];
  instalador: any[] = [];

  constructor(
      private fb: FormBuilder,
      private instalacionesService: InstalacionesService,
      private ventasService: VentasService,
      private empleadosService: EmpleadosService,
      private router: Router,
      private route: ActivatedRoute
  ) {
      this.formInstalacion = this.fb.group({
        idVenta: ['', Validators.required],
        idEmpleadoRegistro: ['', Validators.required],
        idEmpleadoInstalador: ['', Validators.required],
        fechaInstalacion: ['', Validators.required],
      });

      this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
    this.obtenerVentas();
      this.esEditar();
  }

  obtenerEmpleados() {
    this.empleadosService.obtenerTodosLosEmpleados().subscribe(response => {
      this.empleados = response;
    });
  }
  

  obtenerVentas() {
    this.ventasService.obtenerTodasLasVentas().subscribe(response => {
      this.ventas = response;
    });
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Instalacion';
      this.instalacionesService.buscarInstalacionId(this.id).subscribe(response => {
        setTimeout(() => {
          const { idVenta, idEmpleadoRegistro, idEmpleadoInstalador, fechaInstalacion } = response;
          this.formInstalacion.patchValue({
            idVenta: idVenta.idVenta,
            idEmpleadoRegistro: idEmpleadoRegistro.idEmpleado,
            idEmpleadoInstalador: idEmpleadoInstalador.idEmpleado,
            fechaInstalacion: fechaInstalacion
          });
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
      this.instalacionesService.agregarInstalacion(this.formInstalacion.value).subscribe(
          response => {
              this.router.navigate(['/instalaciones/listado-instalaciones']);
          },
          error => {
              console.error(error);
          }
      );
  }

  editar(id: any): void {
      const instalacion: any = this.formInstalacion.value;
      this.instalacionesService.actualizarInstalacion(id, instalacion).subscribe(
          response => {
              this.router.navigate(['/instalaciones/listado-instalaciones']);
          },
          error => {
              console.error(error);
          }
      );
  }
}
