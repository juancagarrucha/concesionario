import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UsuariosService } from './usuarios.service';
import {MsnApiCategorias, ICategoria, IVehiculo, MsnApiVehiculos, MsnApiAgregarc} from '../interfaces/VehiculosInterface';
import { Subject } from 'rxjs';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private httpOptions: any ;
  public respuesta: MsnApiCategorias;
  private vehiculosStorage = new Subject <IVehiculo>();
  public vehiculosStorageObservable = this.vehiculosStorage.asObservable();
  public token: string = null;
  constructor(private http: HttpClient, private uService: UsuariosService, private storage:Storage) { }



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
      this.http.get<MsnApiCategorias>(ruta, httpOptions)
        .subscribe( data => {
            this.respuesta = data;
            this.vehiculosStorage.next(this.respuesta.data);
            resolve( this.respuesta );
        });
    })
    
  }
  async getCategorias(): Promise<MsnApiCategorias>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }categorias`;
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
  agregarc (categorias: ICategoria): Promise<MsnApiAgregarc>{
    console.log(categorias);
  
    const ruta = `${ URL }agregarc`;
    const data = categorias;
    console.log (ruta, data);
  
    return new Promise ( resolve => {
      this.http.post<MsnApiAgregarc>(ruta, data)
        .subscribe (respuesta => {
          if (respuesta.status == 'success'){
            resolve(respuesta)
          }else{
            this.token = null;
            this.storage.clear();
            resolve (respuesta);
          }
        });
    });
    } 
    
    }