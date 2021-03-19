import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { CategoriasComponent } from './categorias/categorias.component';



@NgModule({
  declarations: [FiltrosComponent, VehiculosComponent, CategoriasComponent],
  exports: [FiltrosComponent, VehiculosComponent, CategoriasComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FiltrosRoutingModule
  ]
})
export class FiltrosModule { }
