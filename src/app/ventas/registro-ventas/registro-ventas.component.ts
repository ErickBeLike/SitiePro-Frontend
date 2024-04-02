import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VentasService } from '../../services/ventas/ventas.service';
import { ServiciosService } from '../../services/servicios/servicios.service';
import { ClientesService } from '../../services/clientes/clientes.service';
import { EmpleadosService } from '../../services/empleados/empleados.service';

@Component({
  selector: 'app-registro-ventas',
  templateUrl: './registro-ventas.component.html',
  styleUrl: './registro-ventas.component.css'
})
export class RegistroVentasComponent {
  titulo = 'Agregar venta';
  formVenta: FormGroup;
  id: any | null;
  botonGuardar: boolean = true;

  clientes: any[] = [];
  servicios: any[] = [];
  empleados: any[] = [];

  constructor(
      private fb: FormBuilder,
      private ventasService: VentasService,
      private clientesService: ClientesService,
      private serviciosService: ServiciosService,
      private empleadosService: EmpleadosService,
      private router: Router,
      private route: ActivatedRoute
  ) {
      this.formVenta = this.fb.group({
        idCliente: ['', Validators.required],
        idServicio: ['', Validators.required],
        idEmpleado: ['', Validators.required],
      });

      this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerEmpleados();
    this.obtenerServicios();
      this.esEditar(); 
  }

  obtenerClientes() {
    this.clientesService.obtenerTodosLosClientes().subscribe(response => {
      this.clientes = response;
    });
  }

  obtenerServicios() {
    this.serviciosService.obtenerTodosLosServicios().subscribe(response => {
      this.servicios = response;
    });
  }

  obtenerEmpleados() {
    this.empleadosService.obtenerTodosLosEmpleados().subscribe(response => {
      this.empleados = response;
    });
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Venta';
      this.ventasService.buscarVentaId(this.id).subscribe(response => {
        setTimeout(() => {
          this.formVenta.patchValue(response);

          const clienteSeleccionado = this.clientes.find(cliente => cliente.idCliente === response.idCliente.idCliente);
          const servicioSeleccionado = this.servicios.find(servicio => servicio.idServicio === response.idServicio.idServicio);
          const empleadoSeleccionado = this.empleados.find(empleado => empleado.idEmpleado === response.idEmpleado.idEmpleado);

          if (clienteSeleccionado) {
            this.formVenta.get('idCliente')?.setValue(clienteSeleccionado.idCliente);
          }
          if (servicioSeleccionado) {
            this.formVenta.get('idServicio')?.setValue(servicioSeleccionado.idServicio);
          }
          if (empleadoSeleccionado) {
            this.formVenta.get('idEmpleado')?.setValue(empleadoSeleccionado.idEmpleado);
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
      this.ventasService.agregarVenta(this.formVenta.value).subscribe(
          response => {
              this.router.navigate(['/ventas/listado-ventas']);
          },
          error => {
              console.error(error);
          }
      );
  }

  editar(id: any): void {
      const venta: any = this.formVenta.value;
      this.ventasService.actualizarVenta(id, venta).subscribe(
          response => {
              this.router.navigate(['/ventas/listado-ventas']);
          },
          error => {
              console.error(error);
          }
      );
  }
}
