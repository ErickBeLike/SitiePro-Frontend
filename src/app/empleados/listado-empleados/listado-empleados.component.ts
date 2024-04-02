import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent {

  empleados: any[] = [];

  constructor(private empleadosService: EmpleadosService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodosLosEmpleados();
  }

  @ViewChild('content') content!: ElementRef;

  obtenerTodosLosEmpleados() {
    this.empleadosService.obtenerTodosLosEmpleados().subscribe(response => {
      this.empleados = response;
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

  generarReporte() {
    const pdf = new jspdf.jsPDF('landscape');
    
    // Obtener fecha actual
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, '0'); // Agregar ceros al día si es necesario
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Agregar ceros al mes si es necesario
    const año = fechaActual.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;
  
    // Agregar título con fecha y fuente más grande
    pdf.setFontSize(24); // Tamaño de fuente 24
    pdf.text(`Registro de empleados - ${fechaFormateada}`, 10, 15); // Título con fecha
  
    const header = [['Id', 'Nombre', 'Apellido paterno', 'Apellido materno', 'Cargo', 'Fecha de nacimiento', 'Sexo', 'Correo', 'Teléfono', 'Dirección']];
  
    const data = this.empleados.map(obj => [obj.idEmpleado, obj.nombreEmpleado, obj.apellidoPaEmpleado, obj.apellidoMaEmpleado, obj.idCargo.nombreCargo, obj.fechaDeNacimiento, obj.idSexo.nombreSexo, obj.correoEmpleado, obj.numeroEmpleado, obj.direccionEmpleado]);
  
    // @ts-ignore
    pdf.autoTable({
      head: header,
      body: data,
      startY: 30 // Ajustar posición vertical de la tabla para que comience más abajo
    });
  
    // Guardar PDF con nombre personalizado
    pdf.save(`registro_empleados_${fechaFormateada}.pdf`);
  }
}
