import { ConfigService } from './../../services/config.service';
import { NavController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ICategoria } from '../../interfaces/VehiculosInterface';
import { environment } from '../../../environments/environment.prod';
const URL = environment.url;

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  categorias: ICategoria;
  categoria: any;
  public images = `${URL}/img/categorias`;
  constructor(
    public uService: UsuariosService,
    private categoriasService: CategoriasService,
    private navCtrl: NavController,
    private Router: Router,
    private route: ActivatedRoute,
    public configService: ConfigService
    ) {

    this.categoria = this.route.snapshot.paramMap.get('id');
    console.log (this.categoria);
    console.log(this.categoriasService.getCategorias());
   }

  async ngOnInit() {
    let respuesta = await this.categoriasService.getCategorias();
    console.log(respuesta);
    if (respuesta.status == 'success'){
      this.categorias = respuesta.data;
      console.log(this.categorias);
    }
  }
  
  async ionViewWillEnter (){
    let respuesta = await this.categoriasService.getCategorias();
    if (respuesta.status == 'success'){
      this.categorias = respuesta.data;
    }
  }

  vehiculos (categoria){
    console.log (categoria);
  }


}
