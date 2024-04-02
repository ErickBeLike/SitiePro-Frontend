import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrl: './registro-clientes.component.css'
})
export class RegistroClientesComponent {

  titulo = 'Agregar cliente';
    formCliente: FormGroup;
    id: any | null;
    botonGuardar: boolean = true;

    constructor(
        private fb: FormBuilder,
        private clientesService: ClientesService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.formCliente = this.fb.group({
            nombreCliente: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
            apellidoPaCliente: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
            apellidoMaCliente: ['', [Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
            correoCliente: ['', [Validators.required, Validators.email, Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/)]],
            telefonoCliente: ['', [Validators.required, Validators.minLength(12)]],
            direccionCliente: ['', Validators.required]
        });

        this.id = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.esEditar();
    }

    esEditar() {
        if (this.id !== null) {
            this.titulo = 'Editar cliente';
            this.clientesService.buscarClienteId(this.id).subscribe(response => {
                this.formCliente.patchValue(response);
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
        this.clientesService.agregarCliente(this.formCliente.value).subscribe(
            response => {
                this.router.navigate(['/clientes/listado-clientes']);
            },
            error => {
                console.error(error);
            }
        );
    }

    editar(id: any): void {
        const cliente: any = this.formCliente.value;
        this.clientesService.actualizarCliente(id, cliente).subscribe(
            response => {
                this.router.navigate(['/clientes/listado-clientes']);
            },
            error => {
                console.error(error);
            }
        );
    }

    onInput(event: any) {
        const inputValue = event.target.value;
        const newValue = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); 
        this.formCliente.get('nombreCliente')?.setValue(newValue, { emitEvent: false });
    }

    onInputPa(event: any) {
      const inputValue = event.target.value;
      const newValue = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); 
      this.formCliente.get('apellidoPaCliente')?.setValue(newValue, { emitEvent: false });
    }

    onInputMa(event: any) {
      const inputValue = event.target.value;
      const newValue = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); 
      this.formCliente.get('apellidoMaCliente')?.setValue(newValue, { emitEvent: false });
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

        this.formCliente.get('telefonoCliente')?.setValue(formattedValue, { emitEvent: false });

    }

}
