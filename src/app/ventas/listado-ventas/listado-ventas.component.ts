import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentasService } from '../../services/ventas/ventas.service';

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
}
