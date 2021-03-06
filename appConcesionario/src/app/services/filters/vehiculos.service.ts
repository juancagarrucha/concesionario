import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IVehiculo, MsnApiVehiculos } from '../../interfaces/VehiculosInterface';
import { Subject } from 'rxjs';
import { IFiltrosVehiculos } from '../../interfaces/FiltrosInterfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  
  respuesta : MsnApiVehiculos;
  private vehiculosStorage = new Subject <IVehiculo>();
  public vehiculosStorageObservable = this.vehiculosStorage.asObservable();


  constructor(private http: HttpClient) { }

  getFilter(filtros: IFiltrosVehiculos): Promise<MsnApiVehiculos>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json'
      })
    };
    let data = JSON.stringify(filtros) ;
    const ruta = `${ URL }/vehiculos/filters`;
    console.log(data);
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

}
