import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentasService } from '../../services/ventas/ventas.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrl: './listado-ventas.component.css'
})
export class ListadoVentasComponent implements OnInit{
  ventas: any[] = []; 

  constructor(private ventasService: VentasService, private router: Router) {} 

  ngOnInit(): void {
    this.obtenerTodasLasVentas(); 
  }

  obtenerTodasLasVentas() { 
    this.ventasService.obtenerTodasLasVentas().subscribe(response => { 
      this.ventas = response;
    }, error => {
      console.error(error);
    });
  }

  eliminarVenta(venta: any) { 
    const confirmar = confirm(`¿Estás seguro de eliminar la venta con ID ${venta.idVenta}?`); 
    if (confirmar) {
      this.ventasService.eliminarVenta(venta.idVenta).subscribe(response => { 
        this.obtenerTodasLasVentas(); 
      }, error => {
        console.error(error);
      });
    }
  }

  editarVenta(id: any): void { 
    this.router.navigate(['/ventas/registro-ventas', id]); 
  }

  generarPDF(idVenta: any): void {
    const ventaSeleccionada = this.ventas.find(venta => venta.idVenta === idVenta);
    if (ventaSeleccionada) {
      const doc = new jsPDF();
      doc.text(`Venta ID: ${ventaSeleccionada.idVenta}`, 10, 10);
      doc.text(`Fecha de Venta: ${ventaSeleccionada.fechaVenta}`, 10, 20);
      doc.text(`Cliente: ${ventaSeleccionada.idCliente.nombreCliente} ${ventaSeleccionada.idCliente.apellidoPaCliente}`, 10, 30);
      doc.text(`Servicio: ${ventaSeleccionada.idServicio.nombreServicio}`, 10, 40);
      doc.text(`Empleado: ${ventaSeleccionada.idEmpleado.nombreEmpleado} ${ventaSeleccionada.idEmpleado.apellidoPaEmpleado}`, 10, 50);
      doc.text(`Total: ${ventaSeleccionada.total}`, 10, 60);
      doc.save(`Venta_${idVenta}.pdf`);
    }
  }
  
}
