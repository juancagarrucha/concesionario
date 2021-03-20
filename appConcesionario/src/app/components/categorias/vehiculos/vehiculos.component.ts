import { ConfigService } from 'src/app/services/config.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { MsnApiCategorias, MsnApiVehiculos } from './../../../interfaces/VehiculosInterface';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public respuesta: MsnApiVehiculos;
  public vehiculo: IVehiculo = {
    nombre: '',
    Precio: 0
  };
  public bread: [
    {
      'nombre': 'Categorias', 'clase': 'active', 'link': [ '/', 'categorias']
    }
  ];
  constructor(private route: ActivatedRoute, private router: Router,
              private cService: CategoriasService, public filterPService: VehiculosService,
              public uService: UsuariosService, public configService: ConfigService) { 
                this.idcategoria = this.route.snapshot.paramMap.get('id');
                console.log(this.idcategoria);
                this.router.navigate(['/filters', { outlets: { secondary: ['vehiculos'] } }]);
              }

 async ngOnInit() {
    this.respuesta = await this.cService.getVehiculos(this.idcategoria);
    console.log(this.respuesta);
    if (this.respuesta.status == 'success'){
      this.vehiculos = this.respuesta.data;
      console.log(this.vehiculos);
    }

    this.cService.vehiculosStorageObservable
      .subscribe (respuesta => {
        this.vehiculos = respuesta;
        console.log (this.vehiculos);
    });
      
    this.filterPService.vehiculosStorageObservable
    .subscribe (respuesta => {
      this.vehiculos = respuesta;
      console.log (this.vehiculos);
    });

    this.uService.userStorageObservable
      .subscribe ( data => {
    //    this.rol = data.rol;
        
      });
  }

  editar(){
    console.log(this.vehiculos);
  }

}
