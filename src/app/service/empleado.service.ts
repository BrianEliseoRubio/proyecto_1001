import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoModelo } from 'src/model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'https://localhost:7095/api';
  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<EmpleadoModelo[]> {
    const url = `${this.apiUrl}/empleados`;
    return this.http.get<EmpleadoModelo[]>(url);
  }

  agregarEmpleado(empleado: EmpleadoModelo): Observable<any> {
    const url = `${this.apiUrl}/empleados`;
    return this.http.post<any>(url, empleado);
  }


  updateEmpleado(empleado: EmpleadoModelo): Observable<any> {
    const url = `${this.apiUrl}/empleados`;
    return this.http.put<any>(url, empleado);
  }

  nominaEmpleado(empleado: EmpleadoModelo): Observable<any> {
    const url = `${this.apiUrl}/empleados/api/nomina`;
    return this.http.post<any>(url, empleado);
  }
}
