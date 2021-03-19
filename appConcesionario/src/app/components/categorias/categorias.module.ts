
import { CategoriasComponent } from './categorias.component';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { DetallevehiculosComponent } from './detallevehiculos/detallevehiculos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriasComponent, VehiculosComponent, DetallevehiculosComponent],
  exports: [CategoriasComponent, VehiculosComponent, DetallevehiculosComponent],
  imports: [
    ComunesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasRoutingModule,
    PipesModule
    
  ]
})
export class CategoriasModule { }
