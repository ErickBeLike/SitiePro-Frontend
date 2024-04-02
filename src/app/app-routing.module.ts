import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login/login.component';

import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { RegistroClientesComponent } from './clientes/registro-clientes/registro-clientes.component';

import { ListadoEmpleadosComponent } from './empleados/listado-empleados/listado-empleados.component';
import { RegistroEmpleadosComponent } from './empleados/registro-empleados/registro-empleados.component';

import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { RegistroUsuariosComponent } from './usuarios/registro-usuarios/registro-usuarios.component';

import { ListadoServiciosComponent } from './servicios/listado-servicios/listado-servicios.component';
import { RegistroServiciosComponent } from './servicios/registro-servicios/registro-servicios.component';

import { ListadoVentasComponent } from './ventas/listado-ventas/listado-ventas.component';
import { RegistroVentasComponent } from './ventas/registro-ventas/registro-ventas.component';

import { ListadoInstalacionesComponent } from './instalaciones/listado-instalaciones/listado-instalaciones.component';
import { RegistroInstalacionesComponent } from './instalaciones/registro-instalaciones/registro-instalaciones.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  //Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  //Login
  {
    path: 'login',
    component: LoginComponent
  },

  //Clientes
  {
    path: 'clientes/listado-clientes',
    component: ListadoClientesComponent
  },
  {
    path: 'clientes/registro-clientes',
    component: RegistroClientesComponent
  },
  {
    path: 'clientes/registro-clientes/:id',
    component: RegistroClientesComponent
  },

  // Empleados
  {
    path: 'empleados/listado-empleados',
    component: ListadoEmpleadosComponent
  },
  {
    path: 'empleados/registro-empleados',
    component: RegistroEmpleadosComponent
  },
  {
    path: 'empleados/registro-empleados/:id',
    component: RegistroEmpleadosComponent
  },

  // Usuarios
  {
    path: 'usuarios/listado-usuarios',
    component: ListadoUsuariosComponent
  },
  {
    path: 'usuarios/registro-usuarios',
    component: RegistroUsuariosComponent
  },
  {
    path: 'usuarios/registro-usuarios/:id',
    component: RegistroUsuariosComponent
  },

  // Servicios
  {
    path: 'servicios/listado-servicios',
    component: ListadoServiciosComponent
  },
  {
    path: 'servicios/registro-servicios',
    component: RegistroServiciosComponent
  },
  {
    path: 'servicios/registro-servicios/:id',
    component: RegistroServiciosComponent
  },

  // Ventas
  {
    path: 'ventas/listado-ventas',
    component: ListadoVentasComponent
  },
  {
    path: 'ventas/registro-ventas',
    component: RegistroVentasComponent
  },
  {
    path: 'ventas/registro-ventas/:id',
    component: RegistroVentasComponent
  },

  // Instalaciones
  {
    path: 'instalaciones/listado-instalaciones',
    component: ListadoInstalacionesComponent
  },
  {
    path: 'instalaciones/registro-instalaciones',
    component: RegistroInstalacionesComponent
  },
  {
    path: 'instalaciones/registro-instalaciones/:id',
    component: RegistroInstalacionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
            ／＞　 フ
            | 　_　_| 
          ／` ミ＿xノ 
         /　　　　 |
        /　 ヽ　　 ﾉ
        │　　|　|　|
      ／￣|　　 |　|　|
      (￣ヽ＿_ヽ_)__)
      ＼二) att. Ximena
*/
