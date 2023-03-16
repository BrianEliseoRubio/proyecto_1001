import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadoModelo } from 'src/model/empleado';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { RolModelo } from 'src/model/rol';
import { RolesService } from 'src/app/service/roles.service';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.scss']
})
export class EditEmpleadoComponent {

  roles: RolModelo[] = [
  ];

  rolSelect:any;
  empleado = new EmpleadoModelo();
  form!: FormGroup;

  empleadoSeleccionado: any;

  idEmpleado:any;
  nombre:any;
  apellido:any;
  direccion:any;
  telefono:any;
  salario:any;
	idRol:any;

  value = 'Borrar';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditEmpleadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmpleadoModelo ,
    private api: EmpleadoService,
    private apiroles: RolesService,
  ) { }

  ngOnInit(): void {
    console.log("datas," ,this.data);
    this.obtenerroles();
  }

  obtenerroles(){
    this.apiroles.getEmpleados().subscribe(
      (empleados) => {
        this.roles = empleados;
        console.log("empleaodos: ", this.roles)
      },
      (error) => {
        console.error(error);
      }
    );
  }
  cancel(){
    this.dialogRef.close();
  }

  save(){
    console.log("datps",this.rolSelect);
    let empleadoclase = new EmpleadoModelo();
    empleadoclase.nombre = this.nombre;
    empleadoclase.apellido = this.apellido;
    empleadoclase.direccion = this.direccion; 
    empleadoclase.salario = this.salario;
    empleadoclase.telefono = this.telefono;
    empleadoclase.idrol = this.rolSelect;

    this.api.agregarEmpleado(empleadoclase).subscribe(response => {
      console.log('Empleado agregado correctamente');
    }, error => {
      console.error('Error al agregar empleado: ', error);
    });
  }
}
