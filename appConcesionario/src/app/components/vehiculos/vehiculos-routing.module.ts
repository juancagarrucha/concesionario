import { VehiculosComponent } from './vehiculos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

const routes: Routes = [
  { path: '', component: VehiculosComponent },
  { path: 'categorias/:categoria', component: VehiculosComponent },

  { path: 'detalle/:id', component: VehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
