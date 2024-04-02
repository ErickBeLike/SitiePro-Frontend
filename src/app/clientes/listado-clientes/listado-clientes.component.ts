import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes/clientes.service';
import * as jspdf from 'jspdf';

// @ts-ignore
import 'jspdf-autotable';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {
  clientes: any[] = [];

  constructor(private clientesService: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodosLosClientes();
  }

  @ViewChild('content') content!: ElementRef;

  obtenerTodosLosClientes() {
    this.clientesService.obtenerTodosLosClientes().subscribe(response => {
      this.clientes = response;
    }, error => {
      console.error(error);
    });
  }

  eliminar(cliente: any) {
    const confirmar = confirm(`¿Estás seguro de eliminar el cliente con ID ${cliente.id}?`);
    if (confirmar) {
      this.clientesService.eliminarCliente(cliente.id).subscribe(response => {
        this.obtenerTodosLosClientes();
      }, error => {
        console.error(error);
      });
    }
  }

  editarCliente(id: any): void {
    this.router.navigate(['/clientes/registro-clientes', id]);
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
    pdf.text(`Registro de clientes - ${fechaFormateada}`, 10, 15); // Título con fecha
  
    const header = [['Id', 'Nombre(s) Cliente', 'Apellido paterno', 'Apellido materno', 'Dirección', 'Correo', 'Teléfono']];
  
    const data = this.clientes.map(obj => [obj.idCliente, obj.nombreCliente, obj.apellidoPaCliente, obj.apellidoMaCliente, obj.direccionCliente, obj.correoCliente, obj.telefonoCliente]);
  
    // @ts-ignore
    pdf.autoTable({
      head: header,
      body: data,
      startY: 30 // Ajustar posición vertical de la tabla para que comience más abajo
    });
  
    // Guardar PDF con nombre personalizado
    pdf.save(`registro_clientes_${fechaFormateada}.pdf`);
  }
  
  
  
  
  
}
