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

import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  //Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
    },

  //Login
  {
    path: 'login',
    component: LoginComponent
  },

  //Clientes
  {
    path: 'clientes/listado-clientes',
    component: ListadoClientesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes/registro-clientes',
    component: RegistroClientesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes/registro-clientes/:id',
    component: RegistroClientesComponent,
    canActivate: [AuthGuard]
  },

  // Empleados
  {
    path: 'empleados/listado-empleados',
    component: ListadoEmpleadosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'empleados/registro-empleados',
    component: RegistroEmpleadosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'empleados/registro-empleados/:id',
    component: RegistroEmpleadosComponent,
    canActivate: [AuthGuard]
  },

  // Usuarios
  {
    path: 'usuarios/listado-usuarios',
    component: ListadoUsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios/registro-usuarios',
    component: RegistroUsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios/registro-usuarios/:id',
    component: RegistroUsuariosComponent,
    canActivate: [AuthGuard]
  },

  // Servicios
  {
    path: 'servicios/listado-servicios',
    component: ListadoServiciosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicios/registro-servicios',
    component: RegistroServiciosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicios/registro-servicios/:id',
    component: RegistroServiciosComponent,
    canActivate: [AuthGuard]
  },

  // Ventas
  {
    path: 'ventas/listado-ventas',
    component: ListadoVentasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ventas/registro-ventas',
    component: RegistroVentasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ventas/registro-ventas/:id',
    component: RegistroVentasComponent,
    canActivate: [AuthGuard]
  },

  // Instalaciones
  {
    path: 'instalaciones/listado-instalaciones',
    component: ListadoInstalacionesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'instalaciones/registro-instalaciones',
    component: RegistroInstalacionesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'instalaciones/registro-instalaciones/:id',
    component: RegistroInstalacionesComponent,
    canActivate: [AuthGuard]
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
