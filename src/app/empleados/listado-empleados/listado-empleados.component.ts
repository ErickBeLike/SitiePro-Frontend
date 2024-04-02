import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import { CargosService } from '../../services/cargos/cargos.service';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})
export class ListadoEmpleadosComponent {

  empleados: any[] = [];
  cargos: any[] = [];

  constructor(private empleadosService: EmpleadosService, private cargosService: CargosService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodosLosEmpleados();
    this.obtenerTodosLosCargos();
  }

  obtenerTodosLosEmpleados() {
    this.empleadosService.obtenerTodosLosEmpleados().subscribe(response => {
      this.empleados = response;
    }, error => {
      console.error(error);
    });
  }

  obtenerTodosLosCargos() {
    this.cargosService.obtenerTodosLosCargos().subscribe(response => {
      this.cargos = response;
    }, error => {
      console.error(error);
    });
  }

  eliminar(empleado: any) {
    const confirmar = confirm(`¿Estás seguro de eliminar el empleado con ID ${empleado.idEmpleado}?`);
    if (confirmar) {
      this.empleadosService.eliminarEmpleado(empleado.idEmpleado).subscribe(response => {
        this.obtenerTodosLosEmpleados();
      }, error => {
        console.error(error);
      });
    }
  }

  editarEmpleado(id: any): void {
    this.router.navigate(['/empleados/registro-empleados', id]);
  }

}
