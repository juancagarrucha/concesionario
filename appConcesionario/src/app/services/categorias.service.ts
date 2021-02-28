import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UsuariosService } from './usuarios.service';
import {MsnApiCategorias} from '../interfaces/VehiculosInterface';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private httpOptions: any ;

  constructor(private http: HttpClient, private uService: UsuariosService) { }

  cabecera (token) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
  }

  async getVehiculos(id): Promise<MsnApiCategorias>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }categorias/${id}/vehiculos`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiCategorias>(ruta, this.httpOptions)
        .subscribe( respuesta => {
         // console.log( respuesta );
      //    resolve( respuesta );
        });
    })
    
  }
  async getCategorias(): Promise<MsnApiCategorias>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }categorias/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiCategorias>(ruta, httpOptions)
        .subscribe ( respuesta => {
          console.log( respuesta );
          resolve( respuesta );
        })
    })
  }
}
