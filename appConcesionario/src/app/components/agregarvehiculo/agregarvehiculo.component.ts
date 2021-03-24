import { CategoriasService } from 'src/app/services/categorias.service';
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
    Precio: 30,
    img: 'otros.png'
  }
public categoria: string;
public categorias: ICategoria;
  constructor(private cService: VehiculosService,
              private navController: NavController,
              private CatService: CategoriasService,
              private mService: UiServiceService) { }
async ngOnInit() {
  const categorias = await this.CatService.getCategorias();
  //this.categorias=categorias.data;
  if ( categorias.status == 'success' ){
  console.log(categorias.data);
this.categorias= categorias.data
}

 }

   async agregarvehiculo(fAgregarvehiculo) {
     console.log(fAgregarvehiculo);

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