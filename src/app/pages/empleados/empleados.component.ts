import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { EditEmpleadoComponent } from '../edit-empleado/edit-empleado.component';
import { EmpleadoModelo } from 'src/model/empleado';
import { CapturaMesComponent } from '../captura-mes/captura-mes.component';



@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})

export class EmpleadosComponent {
  empleados: EmpleadoModelo[] = [
  ];

  constructor(
    private api: EmpleadoService,
    public dialog: MatDialog
    ) { }

  editarEmpleado(row: any) {
    // Lógica para editar un empleado con el id especificado
    const dialogRef = this.dialog.open(EditEmpleadoComponent, {
      width: '400px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminarEmpleado(id: number) {
    // Lógica para eliminar un empleado con el id especificado
  }

  nuevoEmpleado() {
    // Lógica para agregar un nuevo empleado
    const dialogRef = this.dialog.open(EditEmpleadoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  calculaEmpleado(row:any){
    const dialogRef = this.dialog.open(CapturaMesComponent, {
      width: '600px',
      data:row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.api.getEmpleados().subscribe(
      (empleados) => {
        this.empleados = empleados;
        console.log("empleaodos: ", this.empleados)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
