import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';


@NgModule({
  declarations: [FiltrosComponent, VehiculosComponent],
  exports: [FiltrosComponent, VehiculosComponent],
  imports: [
    CommonModule,
    FiltrosRoutingModule
  ]
})
export class FiltrosModule { }
