import { UiServiceService } from 'src/app/services/ui-service.service';
import { ICategoria } from './../../../interfaces/VehiculosInterface';
import { IVehiculo } from 'src/app/interfaces/VehiculosInterface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-detallevehiculos',
  templateUrl: './detallevehiculos.component.html',
  styleUrls: ['./detallevehiculos.component.scss'],
})
export class DetallevehiculosComponent implements OnInit {
  public read: boolean = true;
  public codvehiculo: string;
  public accion: string;
  public vehiculo: IVehiculo;
  categorias: ICategoria;
  
  constructor(private route: ActivatedRoute, private cServices: CategoriasService,
              private vehiculosService:VehiculosService,
              public configService: ConfigService, public UiService: UiServiceService) {
                console.log('detalle');
               }

  public editar(){
    this.read = !this.read;
    if (this.read) {
      this.accion = 'readonly';
    }else{
      this.accion = null;
    }

    console.log(this.read, this.accion);
  }
  async ngOnInit() {
    this.codvehiculo = this.route.snapshot.paramMap.get('id');
    this.accion = this.route.snapshot.paramMap.get('accion');
    let respuesta= await this.vehiculosService.showVehiculos(this.codvehiculo);
    console.log(this.codvehiculo);
    // let respuesta = await this.vehiculosService.showVehiculos(this.codvehiculo);
    console.log(respuesta);
    if (respuesta.status == 'success'){
      this.vehiculo = respuesta.data;
      console.log(this.vehiculo);
    }
  }
  public eliminarvehiculo(id){
    this.UiService.alertaborrado(id);
  }

}