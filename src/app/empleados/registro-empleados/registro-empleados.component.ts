import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import { CargosService } from '../../services/cargos/cargos.service';
import { SexoService } from '../../services/sexo/sexo.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrl: './registro-empleados.component.css'
})
export class RegistroEmpleadosComponent {

  titulo = 'Agregar empleado';
    formEmpleado: FormGroup;
    id: any | null;
    botonGuardar: boolean = true;
    empleados: any[] = [];
    cargos: any[] = [];
    sexos: any[] = [];

    constructor(
        private fb: FormBuilder,
        private empleadosService: EmpleadosService,
        private cargosService: CargosService,
        private sexoService: SexoService,
        private router: Router,
        private route: ActivatedRoute
        
    ) {
        this.formEmpleado = this.fb.group({
            nombreEmpleado: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
            apellidoPaEmpleado: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
            apellidoMaEmpleado: ['', [Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
            idCargo: ['', [Validators.required]],
            fechaDeNacimiento: ['', [Validators.required, fechaDeNacimientoValidator()]],
            idSexo: ['', [Validators.required]],
            correoEmpleado: ['', [Validators.required, Validators.email, Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/)]],
            numeroEmpleado: ['', [Validators.required, Validators.minLength(12)]],
            direccionEmpleado: ['', [Validators.required]]
            
            
        });


        this.id = this.route.snapshot.paramMap.get('id');
    }
    

    ngOnInit(): void {
      this.obtenerEmpleados();
      this.obtenerCargos();
      this.obtenerSexos();
      this.esEditar();
    }

    obtenerEmpleados() {
      this.empleadosService.obtenerTodosLosEmpleados().subscribe(response => {
          this.empleados = response;
      });
    }

    obtenerCargos() {
      this.cargosService.obtenerTodosLosCargos().subscribe(response => {
          this.cargos = response;
      });
    }

    obtenerSexos() {
      this.sexoService.obtenerTodosLosSexos().subscribe(response => {
          this.sexos = response;
      });
    }

    esEditar() {
      if (this.id !== null) {
          this.titulo = 'Editar Empleado';
          this.empleadosService.buscarEmpleadoId(this.id).subscribe(response => {
              setTimeout(() => {
                  this.formEmpleado.patchValue(response);
                  
                  const cargoSeleccionado = this.cargos.find(cargo => cargo.idCargo === response.idCargo.idCargo);
                  const sexoSeleccionado = this.sexos.find(sexo => sexo.idSexo === response.idSexo.idSexo);
                  
                  if (cargoSeleccionado) {
                      this.formEmpleado.get('idCargo')?.setValue(cargoSeleccionado.idCargo);
                  }

                  if (sexoSeleccionado) {
                    this.formEmpleado.get('idSexo')?.setValue(sexoSeleccionado.idSexo);
                }
              }, 0);
          });
      }
  }

    agregarOEditar(): void {
        if (this.id === null) {
            this.agregar();
        } else {
            this.editar(this.id);
        }
    }

    agregar(): void {
        this.empleadosService.agregarEmpleado(this.formEmpleado.value).subscribe(
            response => {
                this.router.navigate(['/empleados/listado-empleados']);
            },
            error => {
                console.error(error);
            }
        );
    }

    editar(id: any): void {
        const empleado: any = this.formEmpleado.value;
        this.empleadosService.actualizarEmpleado(id, empleado).subscribe(
            response => {
                this.router.navigate(['/empleados/listado-empleados']);
            },
            error => {
                console.error(error);
            }
        );
    }

    onInput(event: any) {
      const inputValue = event.target.value;
      const newValue = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); 
      this.formEmpleado.get('nombreEmpleado')?.setValue(newValue, { emitEvent: false });
    }
    
    onInputPa(event: any) {
      const inputValue = event.target.value;
      const newValue = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); 
      this.formEmpleado.get('apellidoPaEmpleado')?.setValue(newValue, { emitEvent: false });
    } 
    onInputMa(event: any) {
      const inputValue = event.target.value;
      const newValue = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); 
      this.formEmpleado.get('apellidoMaEmpleado')?.setValue(newValue, { emitEvent: false });
    } 


    inTelefonoInput(event: any) {
      const inputValue = event.target.value;
      const newValue = inputValue.replace(/[^0-9]/g, '');

      // Limitar a 10 caracteres
      const limitedValue = newValue.slice(0, 10);

      // Aplicar formato de número de teléfono (000-000-0000)
      let formattedValue = '';
      for (let i = 0; i < limitedValue.length; i++) {
          if (i === 3 || i === 6) {
              formattedValue += '-';
          }
          formattedValue += limitedValue.charAt(i);
      }

      this.formEmpleado.get('numeroEmpleado')?.setValue(formattedValue, { emitEvent: false });

  }

}

function fechaDeNacimientoValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const fechaDeNacimiento = control.value;
    if (fechaDeNacimiento) {
      const fecha = new Date(fechaDeNacimiento);
      const limiteInferior = new Date('1964-01-01');
      const limiteSuperior = new Date('2006-12-31');
      if (isNaN(fecha.getTime()) || fecha < limiteInferior || fecha > limiteSuperior) {
        return { 'fechaInvalida': true };
      }
    }
    return null;
  };
}