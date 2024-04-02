import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  clientes: any[] = [];

  constructor(private clientesService: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodosLosClientes();
  }

  obtenerTodosLosClientes() {
    this.clientesService.obtenerTodosLosClientes().subscribe(response => {
      this.clientes = response;
    }, error => {
      console.error(error);
    });
  }

  eliminar(cliente: any) {
    const confirmar = confirm(`¿Estás seguro de eliminar el cliente con ID ${cliente.idCliente}?`);
    if (confirmar) {
      this.clientesService.eliminarCliente(cliente.idCliente).subscribe(response => {
        this.obtenerTodosLosClientes();
      }, error => {
        console.error(error);
      });
    }
  }

  editarCliente(id: any): void {
    this.router.navigate(['/clientes/registro-clientes', id]);
  }

}
