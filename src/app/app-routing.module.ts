import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';

const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },

  {
    path: '',
    redirectTo: 'empleados',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
