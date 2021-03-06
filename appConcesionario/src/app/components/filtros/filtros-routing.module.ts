import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltrosComponent } from './filtros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
  { path: '', redirectTo: '/categorias', pathMatch: 'full' },
  { path: 'categorias', component: CategoriasComponent, outlet: 'secondary' },
  { path: 'vehiculos', component: VehiculosComponent, outlet: 'secondary' },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrosRoutingModule { }
