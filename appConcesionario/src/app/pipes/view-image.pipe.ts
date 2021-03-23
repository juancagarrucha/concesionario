import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment.prod';
const URL = environment.url;

@Pipe({
  name: 'viewImage'
})
export class ViewImagePipe implements PipeTransform {

  transform(img: string, tipo: string): string {
    let rutaImg = `http://vehiculos.jcgg.es/vehiculos/public/img/${tipo}/${img}`;
    console.log (rutaImg);
    return rutaImg;
  }

}