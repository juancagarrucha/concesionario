import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';


import { CategoriasService } from './services/categorias.service';
import { UsuariosService } from './services/usuarios.service';
import { Router } from '@angular/router';
import { IUsuario } from './interfaces/UsuarioInterface';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  categorias: any;
  usuarios: IUsuario;
  constructor(
    private platform: Platform,
    
    private CategoriasService: CategoriasService,
    private uService: UsuariosService,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
     /* this.StatusBar.styleDefault();
      this.SplashScreen.hide();*/
    });
  }

  mostrarVehiculos(g){
    console.log(g);
    this.router.navigate(["categorias",{ outlets: {'primary': ["vehiculos", g] }} ]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });



  }

  ionViewWillEnter (){
    console.log('datos del usuario');
    this.uService.userStorageObservable
      .subscribe ( data => {
        this.usuarios = data;
        console.log (this.usuarios )
      })
  }
  async ngOnInit() {

    //this.usuario = await this.uService.getUsuarioStorage();
    this.uService.userStorageObservable
      .subscribe ( data => {
        this.usuarios = data;
        console.log (this.usuarios );
      })
  }

  async getUser() {
      // this.usuario = await this.uService.getUsuarioStorage();
      this.uService.userStorageObservable
      .subscribe ( data => {
        this.usuarios = data;
        console.log (this.usuarios );
      })
  }
}

