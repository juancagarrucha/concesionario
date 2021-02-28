import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltrosComponent } from './filtros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent, outlet: 'rfiltros' },
  { path: 'vehiculos', component: VehiculosComponent, outlet: 'rfiltros' },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrosRoutingModule { }
