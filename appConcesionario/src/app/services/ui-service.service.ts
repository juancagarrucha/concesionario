import { VehiculosService } from 'src/app/services/vehiculos.service';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertController: AlertController, public vehiculosService: VehiculosService, public navCtrl: NavController) { }

  async alertaInformativa( message: string ) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
  async alertaborrado( id: number ) {
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: '¿Desea eliminar el vehiculo ' + id +'?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
          }
        }, {
          text: 'Aceptar',
          handler: async () => {
            const peticion = await this.vehiculosService.borrar(id);
            this.alertaInformativa(peticion.message);
            this.navCtrl.navigateRoot('/tabs/categorias', { animated: true });
          }
        }
      ]
    });

    await alert.present();
  }
}
