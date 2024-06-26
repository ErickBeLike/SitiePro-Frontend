import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroEmpleadosComponent } from './empleados/registro-empleados/registro-empleados.component';
import { ListadoEmpleadosComponent } from './empleados/listado-empleados/listado-empleados.component';
import { RegistroClientesComponent } from './clientes/registro-clientes/registro-clientes.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { RegistroServiciosComponent } from './servicios/registro-servicios/registro-servicios.component';
import { ListadoServiciosComponent } from './servicios/listado-servicios/listado-servicios.component';
import { RegistroUsuariosComponent } from './usuarios/registro-usuarios/registro-usuarios.component';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { RegistroInstalacionesComponent } from './instalaciones/registro-instalaciones/registro-instalaciones.component';
import { ListadoInstalacionesComponent } from './instalaciones/listado-instalaciones/listado-instalaciones.component';
import { RegistroVentasComponent } from './ventas/registro-ventas/registro-ventas.component';
import { ListadoVentasComponent } from './ventas/listado-ventas/listado-ventas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroEmpleadosComponent,
    ListadoEmpleadosComponent,
    RegistroClientesComponent,
    ListadoClientesComponent,
    RegistroServiciosComponent,
    ListadoServiciosComponent,
    RegistroUsuariosComponent,
    ListadoUsuariosComponent,
    RegistroInstalacionesComponent,
    ListadoInstalacionesComponent,
    RegistroVentasComponent,
    ListadoVentasComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░████░░░░░░░░░░░░░░░Att. Erick░░░░░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░██▓▓▓▓▓▓██▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████▓▓▓▓▓▓██░░░░░░░░░░░░░░
░░░░░░░░░░░░░░▓▓██▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓▓▓██▓▓░░░░░░░░░░░░
░░░░░░░░░░░░████▓▓▓▓  ▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓  ▓▓▓▓████░░░░░░░░░░
░░░░░░░░░░░░████▓▓▓▓  ▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓  ▓▓▓▓████░░░░░░░░░░
░░░░░░░░░░▒▒██▓▓▓▓░░  ▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓  ░░▓▓▓▓██▒▒░░░░░░░░
░░░░░░░░░░████▓▓▒▒    ▓▓▓▓██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓    ▓▓▓▓████░░░░░░░░
░░░░░░░░░░██▓▓▓▓      ▓▓▓▓████░░░░░░░░░░░░░░░░░░░░░░░░░░░░████▓▓▓▓      ▓▓▓▓██░░░░░░░░
░░░░░░░░░░██▓▓▓▓      ▓▓▓▓▓▓██░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓      ▓▓▓▓██░░░░░░░░
░░░░░░░░░░██▓▓▓▓      ▓▓▓▓▓▓██░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓      ▓▓▓▓██░░░░░░░░
░░░░░░░░████▓▓▓▓      ▓▓▓▓▓▓████░░░░░░░░░░░░░░░░░░░░░░░░████▓▓▓▓▓▓      ▓▓▓▓████░░░░░░
░░░░░░░░██▓▓▓▓        ▓▓▓▓▓▓▓▓██░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓▓▓        ▓▓▓▓██░░░░░░
░░░░░░░░██▓▓▓▓            ▓▓▓▓▓▓██░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓            ▓▓▓▓██░░░░░░
░░░░░░░░██▓▓▓▓          ░░▓▓▓▓▓▓██░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓░░          ▓▓▓▓██░░░░░░
░░░░░░░░██▓▓▓▓        ░░  ▓▓▓▓▓▓██░░████████████████░░██▓▓▓▓██  ░░        ▓▓▓▓██░░░░░░
░░░░░░░░██▓▓        ░░  ░░░░▓▓▓▓▓▓▓▓▒▒▒▒▒▒░░░░▒▒▒▒▒▒██▓▓▓▓▓▓  ░░  ░░        ▓▓██░░░░░░
░░░░░░██████      ░░  ░░  ▒▒▓▓▓▓▓▓▒▒▒▒▒▒░░░░░░░░▒▒▒▒░░▓▓▓▓▓▓▒▒  ░░  ░░      ▓▓████░░░░
░░░░██████▓▓▒▒▒▒▒▒  ▒▒  ▒▒░░░░▓▓░░░░░░░░░░░░░░░░░░░░░░░░▓▓░░▒▒▒▒  ▒▒  ▒▒▒▒▒▒▓▓██████░░
░░░░██░░▒▒▒▒▒▒▒▒▒▒░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒░░▒▒▒▒▒▒▒▒▒▒░░██░░
░░░░██░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░██░░
░░░░██░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░██░░
░░░░░░██░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░██░░░░
░░░░░░██░░▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒░░██░░░░
░░████░░▓▓░░▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒  ██░░████
░░██░░██░░░░▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒░░░░██░░██
░░██░░░░▒▒░░░░▒▒▒▒░░░░░░░░░░░░░░░░  ░░░░░░░░░░░░░░░░  ░░░░░░░░░░░░░░░░▒▒▒▒░░░░▓▓░░░░██
░░██░░░░░░░░▒▒░░▒▒▒▒░░░░██░░░░░░      ░░░░░░░░░░░░      ░░░░░░██░░░░▒▒▒▒░░▒▒░░░░░░░░██
░░░░██░░░░░░▒▒░░▒▒▒▒░░░░██░░░░░░░░  ░░░░░░░░░░░░░░░░  ░░░░░░░░██░░░░▒▒▒▒▒▒▒▒░░░░░░██░░
░░░░▒▒██░░░░░░▒▒▒▒▒▒░░░░██▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓██░░░░▒▒▒▒▒▒░░░░░░██▒▒░░
░░░░░░░░▓▓░░░░░░▒▒▒▒▒▒▒▒██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░██████▒▒▒▒▒▒▒▒░░░░░░██░░░░░░
░░░░██████████░░░░▒▒░░▒▒░░████░░░░░░░░░░░░░░░░░░░░░░░░░░░░████░░▒▒░░▒▒░░░░██████████░░
░░░░██░░░░░░░░▓▓░░░░░░▒▒▒▒▒▒██▓▓░░░░░░░░░░░░░░░░░░░░░░░░▓▓██▒▒▒▒▒▒░░░░░░▓▓░░░░░░░░██░░
░░░░░░██░░░░░░░░░░░░░░▒▒▒▒▒▒░░██░░▒▒▒▒░░░░░░░░░░░░▒▒▒▒░░██░░▒▒▒▒▒▒░░░░░░░░░░░░░░██░░░░
░░░░░░░░██████░░░░░░░░▒▒▒▒▒▒░░▓▓▒▒▒▒▒▒░░░░░░░░░░░░▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒░░░░░░░░██████░░░░░░
░░░░░░░░░░░░████░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░████░░░░░░░░░░
░░░░░░░░░░░░██████████░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░██████████░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓░░▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒░░▓▓▓▓░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒░░▒▒▒▒▒▒▒▒░░░░░░░░░░░░▒▒▒▒▒▒▒▒░░▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░▒▒▒▒▒▒▒▒░░░░░░░░▒▒▒▒▒▒▒▒░░██░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░▒▒▒▒▒▒░░░░░░░░▒▒▒▒▒▒░░██░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓░░▒▒▒▒░░░░░░░░▒▒▒▒░░▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░▒▒▒▒▒▒░░░░▒▒▒▒▒▒░░██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░▒▒▒▒▒▒▒▒▒▒▒▒░░██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░░░▓▓▓▓▓▓▒▒░░░░██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░▓▓▓▓▓▓▓▓░░██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░░██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/