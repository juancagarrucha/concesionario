import { CategoriasComponent } from './categorias.component';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { VehiculosComponent } from './vehiculos/vehiculos.component';


@NgModule({
  declarations: [CategoriasComponent, VehiculosComponent],
  exports: [CategoriasComponent, VehiculosComponent],
  imports: [
    ComunesModule,
    CommonModule,
    IonicModule,
    CategoriasRoutingModule,
    PipesModule
    
  ]
})
export class CategoriasModule { }
