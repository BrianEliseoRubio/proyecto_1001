import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { RolesService } from 'src/app/service/roles.service';
import { EmpleadoModelo } from 'src/model/empleado';
import { NominaModelo } from 'src/model/nomina';

@Component({
  selector: 'app-captura-mes',
  templateUrl: './captura-mes.component.html',
  styleUrls: ['./captura-mes.component.scss']
})
export class CapturaMesComponent {

  @ViewChild(MatTable) table!: MatTable<NominaModelo>;

  value = 'Borrar';
  nombre!: string;
  cantidadEntregas!: number;

  columnasTabla = ['totalSueldo', 'totalSueldoEntregas', 'totalBonus', 'isrRetencion', 'vales'];

  

  datosTabla: NominaModelo[] = [
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CapturaMesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmpleadoModelo ,
    private api: EmpleadoService,
    private apiroles: RolesService,
  ) { }


  ngOnInit(): void {
    console.log("data",this.data);

    if(this.data){
      this.nombre = this.data.nombre;
    }
  }

  cancelar() {
    // Lógica para cancelar el formulario
  }
  
  enviar() {
    // Lógica para enviar el formulario
    let empleadoclase = new EmpleadoModelo();
    empleadoclase.idEmpleado = this.data.idEmpleado;
    empleadoclase.nombre = "";
    empleadoclase.apellido = "";
    empleadoclase.direccion = ""; 
    empleadoclase.salario = "0";
    empleadoclase.telefono = "";
    empleadoclase.idrol = this.cantidadEntregas;

    this.api.nominaEmpleado(empleadoclase).subscribe((NominaModelo) => {
      console.log('Empleado agregado correctamente',NominaModelo);
      this.datosTabla.push(NominaModelo);
      this.table.renderRows();
      //this.datosTabla = NominaModelo;
    }, error => {
      console.error('Error al agregar empleado: ', error);
    });
  }

}
