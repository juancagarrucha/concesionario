import { Component, OnInit } from '@angular/core';
import { ICategoria } from 'src/app/interfaces/VehiculosInterface';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  public categorias: ICategoria;
  
  constructor(private categoriasService: CategoriasService) { 
    
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

  selectcategoria(nombre){}

  

}
