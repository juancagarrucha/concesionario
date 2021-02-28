import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { VehiculosComponent } from './vehiculos.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ComunesModule } from '../comunes/comunes.module';


@NgModule({
  declarations: [VehiculosComponent, VehiculoComponent ],
  exports: [VehiculosComponent, VehiculoComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    ComunesModule,
    VehiculosRoutingModule,
    FormsModule
  ]
})
export class VehiculosModule {
  // tslint:disable-next-line:no-input-rename
  
 }
