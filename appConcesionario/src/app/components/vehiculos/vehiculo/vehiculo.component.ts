import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss'],
})
export class VehiculoComponent implements OnInit {

  public codvehiculo: string;
  constructor(private route: ActivatedRoute, private gServices: CategoriasService ) { }

  ngOnInit() {
    this.codvehiculo = this.route.snapshot.paramMap.get('id');
    console.log(this.codvehiculo);
  }

}
