import { Injectable } from '@angular/core';
import { RolModelo } from 'src/model/rol';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private apiUrl = 'https://localhost:7095/api';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<RolModelo[]> {
    const url = `${this.apiUrl}/roles`;
    return this.http.get<RolModelo[]>(url);
  }
}
