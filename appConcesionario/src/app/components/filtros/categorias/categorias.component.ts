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
  
  constructor(private gamasService: CategoriasService) { 
    
  }
  async ionViewWillEnter(){
    
  }
  async ngOnInit() {
    
  }

  

}
