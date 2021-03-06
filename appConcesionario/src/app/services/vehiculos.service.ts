import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IFiltrosVehiculos } from '../interfaces/FiltrosInterfaces';
import { IVehiculo, MsnApiVehiculos } from '../interfaces/VehiculosInterface';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  
  
  private vehiculosStorage = new Subject <IVehiculo>();
  public vehiculosStorageObservable = this.vehiculosStorage.asObservable();
  private httpOptions: any ;
  public respuesta: MsnApiVehiculos;

  constructor(private http: HttpClient, private uService: UsuariosService) { }
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

  async showVehiculos(id): Promise<MsnApiVehiculos>{
    console.log('Id = ', id);
    const token = await this.uService.getToken();
    const ruta = `${ URL }vehiculos/${id}/detalle`;
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
          resolve(this.respuesta);
        });
    });
    
  }
}
