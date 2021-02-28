import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallevehiculosComponent } from './detallevehiculos/detallevehiculos.component';
import { CategoriasComponent } from './categorias.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
  {
    path: '', component: CategoriasComponent,
      children: [
        
      ]
  },
  {path: 'vehiculos/:id', component: VehiculosComponent},
  {path: 'detallevehiculos/:id', component: DetallevehiculosComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
