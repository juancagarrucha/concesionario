import { CategoriasService } from 'src/app/services/categorias.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { Component, OnInit } from '@angular/core';
import { IFiltrosVehiculos } from 'src/app/interfaces/FiltrosInterfaces';
import { ICategoria } from 'src/app/interfaces/VehiculosInterface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  public categorias: ICategoria;
  public items: string[] = [];
  public IFiltros: IFiltrosVehiculos = {
    // precio: { min: 0, max: 0 },
     
     categorias: []
   };
  constructor(private categoriasService: CategoriasService,private filterPService: VehiculosService) { 
    
  }
  async ionViewWillEnter(){
    let respuesta = await this.categoriasService.getCategorias();
    if (respuesta.status == 'success'){
      this.categorias = respuesta.data;
      console.log('Hh',this.categorias);
    }
  }
  async ngOnInit() {
    let respuesta = await this.categoriasService.getCategorias();
    if (respuesta.status == 'success'){
      this.categorias = respuesta.data;
      console.log('Hh',this.categorias);
    }
  }

  async selectcategoria(categorias, pos){
    console.log(categorias, pos);
    //
    let i = this.items.indexOf(categorias);
    if ( i == -1 ){
      this.items.push(categorias);
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
