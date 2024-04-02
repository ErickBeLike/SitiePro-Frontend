import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../../services/servicios/servicios.service';

@Component({
  selector: 'app-listado-servicios',
  templateUrl: './listado-servicios.component.html',
  styleUrl: './listado-servicios.component.css'
})
export class ListadoServiciosComponent implements OnInit{
  servicios: any[] = [];

  constructor(private serviciosService: ServiciosService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodosLosServicios();
  }

  obtenerTodosLosServicios() {
    this.serviciosService.obtenerTodosLosServicios().subscribe(response => {
      this.servicios = response;
    }, error => {
      console.error(error);
    });
  }

  eliminar(servicio: any) {
    const confirmar = confirm(`¿Estás seguro de eliminar el servicio con ID ${servicio.idServicio}?`);
    if (confirmar) {
      this.serviciosService.eliminarServicio(servicio.idServicio).subscribe(response => {
        this.obtenerTodosLosServicios();
      }, error => {
        console.error(error);
      });
    }
  }

  editarServicio(id: any): void {
    this.router.navigate(['/servicios/registro-servicios', id]);
  }
}
