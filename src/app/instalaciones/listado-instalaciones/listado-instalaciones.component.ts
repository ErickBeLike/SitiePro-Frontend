import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstalacionesService } from '../../services/instalaciones/instalaciones.service';

@Component({
  selector: 'app-listado-instalaciones',
  templateUrl: './listado-instalaciones.component.html',
  styleUrl: './listado-instalaciones.component.css'
})
export class ListadoInstalacionesComponent implements OnInit{
  instalaciones: any[] = []; 

  constructor(private instalacionesService: InstalacionesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodasLasInstalaciones();
  }

  obtenerTodasLasInstalaciones() {
    this.instalacionesService.obtenerTodasLasInstalaciones().subscribe(response => { 
      this.instalaciones = response;
    }, error => {
      console.error(error);
    });
  }

  eliminarInstalacion(instalacion: any) {
    const confirmar = confirm(`¿Estás seguro de eliminar la instalación con ID ${instalacion.idInstalacion}?`);
    if (confirmar) {
      this.instalacionesService.eliminarInstalacion(instalacion.idInstalacion).subscribe(response => { 
        this.obtenerTodasLasInstalaciones(); 
      }, error => {
        console.error(error);
      });
    }
  }

  editarInstalacion(id: any): void { 
    this.router.navigate(['/instalaciones/registro-instalaciones', id]); 
  }
}
