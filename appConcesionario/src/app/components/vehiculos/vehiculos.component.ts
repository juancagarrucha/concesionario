import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoria, IVehiculo, MsnApiCategorias } from 'src/app/interfaces/VehiculosInterface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UsuariosService } from '../../services/usuarios.service';
import { ConfigService } from '../../services/config.service';
import { VehiculosService } from '../../services/filters/vehiculos.service';
import { MsnApiVehiculos } from '../../interfaces/VehiculosInterface';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss'],
})
export class VehiculosComponent implements OnInit {
  public respuesta: MsnApiCategorias;
  public categoria: ICategoria;
  public idcategoria: string;
  public vehiculos: IVehiculo[];
  public images = `${URL}/img/vehiculos`;
   rol: string;
  // tslint:disable-next-line:no-input-rename
 // @Input('idGama') idgama: string;

  constructor(private route: ActivatedRoute,  private router: Router,
              private gService: CategoriasService, public uService: UsuariosService,
              public configService: ConfigService ) { 
    this.idcategoria = this.route.snapshot.paramMap.get('categoria');
    console.log(this.idcategoria);
    this.router.navigate(['/filters', { outlets: { rfiltros: ['vehiculos'] } }]);


  }

  async ngOnInit() {
    this.respuesta = await this.gService.getVehiculos(this.idcategoria);
    if (this.respuesta.status == 'success'){
      this.categoria = this.respuesta.data;
    }

    this.gService.vehiculosStorageObservable
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
