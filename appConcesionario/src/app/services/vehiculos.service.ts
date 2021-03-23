import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { environment } from '../../environments/environment';
import { IFiltrosVehiculos } from '../interfaces/FiltrosInterfaces';
import { IVehiculo, MsnApiVehiculos,MsnApiAgregarvehiculo } from '../interfaces/VehiculosInterface';
import { UsuariosService } from './usuarios.service';
import { Storage } from '@ionic/storage';
const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  
  
  private vehiculosStorage = new Subject <IVehiculo>();
  public vehiculosStorageObservable = this.vehiculosStorage.asObservable();
  private httpOptions: any ;
  public respuesta: MsnApiVehiculos;
  public id:boolean=true;
  public token: string = null;

  constructor(private http: HttpClient, private uService: UsuariosService, private storage:Storage) { }
  getFilter(filtros: IFiltrosVehiculos): Promise<MsnApiVehiculos>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json'
      })
    };
    let data = JSON.stringify(filtros) ;
    const ruta = `${ URL }vehiculos/filters`;
    console.log(ruta, data);
    return new Promise (resolve => {
   //   this.http.post<MsnApiProductos>(ruta, {data})
      this.http.post<MsnApiVehiculos>( ruta, {data} )
        .subscribe(datos => {
          console.log(datos);
          this.vehiculosStorage.next(datos.data);
           this.respuesta = datos;
            resolve(this.respuesta);
      });
    });
  }

  async showVehiculos(id): Promise<MsnApiVehiculos>{
    console.log('Id = ', id);
    const token = await this.uService.getToken();
    const ruta = `${ URL }vehiculos/${id}/detalle`;
    console.log(ruta)
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiVehiculos>(ruta, httpOptions)
        .subscribe(data => {
          this.respuesta = data;
          console.log(this.respuesta);
          resolve(this.respuesta);
        });
    });
    
  }
  async borrar(id):Promise<MsnApiVehiculos>{
    const token = await this.uService.getToken();
    const ruta = `${ URL }vehiculos/${id}/remove`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiVehiculos>(ruta, httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
  }
  agregarvehiculo (vehiculos: IVehiculo): Promise<MsnApiAgregarvehiculo>{
    console.log(vehiculos);
  
    const ruta = `${ URL }agregarvehiculo`;
    const data = vehiculos;
    console.log (ruta, data);
  
    return new Promise ( resolve => {
      this.http.post<MsnApiAgregarvehiculo>(ruta, data)
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

