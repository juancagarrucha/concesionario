import { EditComponent } from './detallevehiculos/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallevehiculosComponent } from './detallevehiculos/detallevehiculos.component';
import { CategoriasComponent } from './categorias.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
EditComponent
FormsModule
const routes: Routes = [
  {
    path: '', component: CategoriasComponent,
      children: [
        
      ]
  },
  {path: 'vehiculos/:id', component: VehiculosComponent},
  {path: 'detallevehiculos/:id', component: DetallevehiculosComponent},
  { path: 'edit/:id', component: EditComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
