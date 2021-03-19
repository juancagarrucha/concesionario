import { MsnApiCategorias } from './../../../interfaces/VehiculosInterface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../../../services/categorias.service';
import { IVehiculo, ICategoria } from '../../../interfaces/VehiculosInterface';
import { environment } from '../../../../environments/environment.prod';

const URL = environment.url;

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss'],
})
export class VehiculosComponent implements OnInit {

  public idcategoria: string;
  public categoria: ICategoria;
  public vehiculos: IVehiculo;
  public images = `${URL}img/vehiculos`;

  public bread: [
    {
      'nombre': 'Categorias', 'clase': 'active', 'link': [ '/', 'categorias']
    }
  ];
  constructor(private route: ActivatedRoute, 
              private cService: CategoriasService) { }

  async ngOnInit() {
    this.idcategoria = this.route.snapshot.paramMap.get('id');
    let respuesta= await this.cService.getVehiculos(this.idcategoria);
    
    if (respuesta.status == 'success'){
      console.log(respuesta.data);
      this.categoria = respuesta.data;
    }
  }

}