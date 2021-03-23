import { VehiculosService } from 'src/app/services/vehiculos.service';
import { IVehiculo, ICategoria } from 'src/app/interfaces/VehiculosInterface';
import { NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-agregarvehiculo',
  templateUrl: './agregarvehiculo.component.html',
  styleUrls: ['./agregarvehiculo.component.scss'],
})
export class AgregarvehiculoComponent implements OnInit {

  newvehiculo: IVehiculo ={
    id: 20,
    nombre: 'otros',
    marca: 'otros',
    //categoria: '4x4',
    Precio: 30,
    img: 'otros.png'
  }

  constructor(private cService: VehiculosService,
              private navController: NavController,
              private mService: UiServiceService) { }
ngOnInit() { }

   async agregarvehiculo(fAgregarvehiculo) {

    if (fAgregarvehiculo.invalid) { return; }
      //console.log('error en datos');
    
    const peticion = await this.cService.agregarvehiculo( this.newvehiculo);
    
    if ( peticion.status == 'Correcto.' ){
     this.mService.alertaInformativa( peticion.message );
     this.navController.navigateRoot('agregarvehiculo', { animated: true });
      } 
    else {
    console.log(peticion);
    this.mService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    
    }

  }