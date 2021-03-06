import { IFiltrosVehiculos } from './../../../interfaces/FiltrosInterfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ICategoria } from 'src/app/interfaces/VehiculosInterface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss'],
})
export class VehiculosComponent implements OnInit {

  public categorias: ICategoria;
  public items: string[] = [];
  public precio = 50;
  public rangeVal: string;
  public IFiltros: IFiltrosVehiculos = {
   // precio: { min: 0, max: 0 },
    precios: [],
    categorias: []
  };
  constructor(public platform: Platform,
              private categoriasService: CategoriasService, private filterPService: VehiculosService) {
    this.platform.ready().then( () => {
      this.rangeVal = "50";
    });

  }
  async ionViewWillEnter(){
    let respuesta = await this.categoriasService.getCategorias();
    this.categorias = respuesta.data;
    console.log (respuesta);
  }
  changeRange(precio) {
    console.log(precio.detail.value.lower,':', precio.detail.value.upper);
   // console.log(this.rangeVal);
   //this.IFiltros.precio.max = precio.detail.value.upper;
   //this.IFiltros.precio.min = precio.detail.value.lower;
   this.IFiltros.precios[0] = precio.detail.value.lower;
   this.IFiltros.precios[1] = precio.detail.value.upper;

  }
  async ngOnInit() {
    let respuesta = await this.categoriasService.getCategorias();
    this.categorias = respuesta.data;
    console.log (respuesta);
  }

  async selectcategoria(categoria, pos){
    console.log(categoria, pos);
    //
    let i = this.items.indexOf(categoria);
    if ( i == -1 ){
      this.items.push(categoria);
    }else {
      this.items.splice( i, 1 );
    }
    console.log(this.items);
   // let respuesta = await this.gamasService.getProductosGama(gama);
  }

  async aplicar(){
     this.IFiltros.categorias = this.items;

      console.log (this.IFiltros);
      let respuesta = await this.filterPService.getFilter(this.IFiltros);
     //  console.log(respuesta);
       this.items = [];
  }
}
