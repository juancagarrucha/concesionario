import { UsuariosService } from './../../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { IUsuario } from '../../../interfaces/UsuarioInterface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  
  registerUser: IUsuario = {
    id: 1,
    nombre: 'antonio',
    apellidos: 'sanchez',
    rol: 'usuario',
    login: 'antonio@gmail.com',
    password: '1234',
    img: 'antonio.jpg'
  }
  constructor(private uService: UsuariosService,
              private navCtrl: NavController, 
              private uiService: UiServiceService) {

 }

  ngOnInit() {}

/* async registro(fRegistro){
    console.log (this.registerUser);
     const peticion = await this.uService.registro( this.registerUser);
     if (peticion.status == 'success'){
       console.log (peticion.message);
     }else{
       console.log (peticion.errors);
     }
    }
    this.uService.registro(this.registerUser). 
    subscribe(data => {
      console.log(data.)
     });*/
  

  async registro(fRegistro) {

    if (fRegistro.invalid) { return; }

    const peticion = await this.uService.registro( this.registerUser );

    if ( peticion.status == 'success' ){
      console.log(peticion);
      this.uiService.alertaInformativa( peticion.message );
      this.navCtrl.navigateRoot('login', { animated: true });
    }else {
      console.log(peticion);
      this.uiService.alertaInformativa( JSON.stringify(peticion.errors) );
    }
  }
  }
