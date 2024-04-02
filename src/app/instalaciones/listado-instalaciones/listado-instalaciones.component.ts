import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstalacionesService } from '../../services/instalaciones/instalaciones.service';
import { jsPDF } from 'jspdf';

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

  generarPDF(idInstalacion: any): void {
    const instalacionSeleccionada = this.instalaciones.find(instalacion => instalacion.idInstalacion === idInstalacion);
    if (instalacionSeleccionada) {
      const doc = new jsPDF();
      doc.text(`Instalación ID: ${instalacionSeleccionada.idInstalacion}`, 10, 10);
      doc.text(`Venta ID: ${instalacionSeleccionada.idVenta.idVenta}`, 10, 20);
      doc.text(`Empleado: ${instalacionSeleccionada.idEmpleadoRegistro.nombreEmpleado} ${instalacionSeleccionada.idEmpleadoRegistro.apellidoPaEmpleado}`, 10, 30);
      doc.text(`Instalador: ${instalacionSeleccionada.idEmpleadoInstalador.nombreEmpleado} ${instalacionSeleccionada.idEmpleadoInstalador.apellidoPaEmpleado}`, 10, 40);
      doc.text(`Fecha de Instalación: ${instalacionSeleccionada.fechaInstalacion}`, 10, 50);
      doc.save(`Instalacion_${idInstalacion}.pdf`);
    }
  }
}
