(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/T01":
/*!*************************************************************!*\
  !*** ./src/app/components/comunes/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "1O0y");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "lue5");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/config.service */ "r4Kj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/usuarios.service */ "ESM5");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/ui-service.service */ "5egi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let LoginComponent = class LoginComponent {
    constructor(uService, navCtrl, uiService, route, router, configService) {
        this.uService = uService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.route = route;
        this.router = router;
        this.configService = configService;
        this.loginUser = {
            login: 'maria@gmail.es',
            password: 'maria'
        };
    }
    login(fLogin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.loginUser);
            if (fLogin.invalid) {
                return;
            }
            // recordemos que 'peticion' es una PROMESA 
            const peticion = yield this.uService.login(this.loginUser.login, this.loginUser.password);
            if (peticion.status == 'success') {
                if (peticion.user.rol == 'administrador') {
                    this.configService.isAdmin = true;
                }
                else {
                    this.configService.isAdmin = false;
                }
                // navegar al home
                this.router.navigate(['/', { outlets: {
                            primary: ['tabs', 'categorias'],
                        } }], { relativeTo: this.route.parent });
                //      this.navCtrl.navigateRoot('tabs', { animated: true } );
                //    this.router.navigate(['/filters', { outlets: { secondary: [ 'gamas'] } }]);
            }
            else {
                this.uiService.alertaInformativa('Usuario/Password no son válidos');
            }
        });
    }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_7__["UiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\appConcesionario\src\main.ts */"zUnb");


/***/ }),

/***/ "1O0y":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comunes/login/login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header seccion=\"Login\"></app-header>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <h2>Login</h2>\n    </ion-item>\n  \n    <ion-card-content>\n      <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\"> \n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input required name=\"login\" type=\"email\" [(ngModel)]=\"loginUser.login\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input required name=\"password\" type=\"password\" [(ngModel)]=\"loginUser.password\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-button slot=\"start\" type=\"submit\" color=\"tertiary\">Login</ion-button>\n          <ion-label routerLink=\"/signup\" slot=\"end\" color=\"primary\">Crear una cuenta</ion-label>\n        </ion-item>\n        \n       <!-- <ion-button routerLink=\"/home\" expand=\"full\" color=\"success\">Entrar</ion-button> -->\n\n      </form>\n      \n    </ion-card-content>\n  </ion-card>\n \n</ion-content>");

/***/ }),

/***/ "5egi":
/*!************************************************!*\
  !*** ./src/app/services/ui-service.service.ts ***!
  \************************************************/
/*! exports provided: UiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiServiceService", function() { return UiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vehiculos.service */ "d/Xq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let UiServiceService = class UiServiceService {
    constructor(alertController, vehiculosService, navCtrl) {
        this.alertController = alertController;
        this.vehiculosService = vehiculosService;
        this.navCtrl = navCtrl;
    }
    alertaInformativa(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    alertaborrado(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: '¿Desea eliminar el vehiculo ' + id + '?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancelar',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Aceptar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const peticion = yield this.vehiculosService.borrar(id);
                            this.alertaInformativa(peticion.message);
                            this.navCtrl.navigateRoot('/tabs/categorias', { animated: true });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
UiServiceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_1__["VehiculosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
UiServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UiServiceService);



/***/ }),

/***/ "7iE4":
/*!*************************************************************!*\
  !*** ./src/app/components/agregarc/agregarc.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://vehiculos.jcgg.es/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ESM5":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
let UsuariosService = class UsuariosService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.token = null;
        this.userStorage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userStorageObservable = this.userStorage.asObservable();
    }
    getUsuarios() {
        return this.http.get('http://apivehiculos.test/api/usuarios');
    }
    login(login, password) {
        const data = { login, password };
        const ruta = `${URL}login`;
        console.log(ruta, data);
        return new Promise(resolve => {
            this.http.post(ruta, data)
                .subscribe(respuesta => {
                console.log(respuesta); //hemos de hacer el TIPADO con INTERFACES
                if (respuesta.status == 'success') {
                    this.saveToken(respuesta.token.access_token);
                    this.saveUser(respuesta.user);
                    //si llega aquí la promesa devuelve true indicando que todo ha sido OK
                    resolve(respuesta);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    //la promesa devuelve false indicando que ha habido un ERROR
                    resolve(respuesta);
                }
            });
        });
    }
    //devuelve una promesa (async)
    saveToken(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.token = token;
            //espero (await) a que se guarde el token en el storage antes de continuar
            yield this.storage.set('token', token);
        });
    }
    saveUser(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.usuario = user;
            yield this.storage.set('usuario', user);
            this.rol = user.rol;
            this.userStorage.next(this.usuario);
            //next emite this.usuario a todos los componentes subscritos a este dato
        });
    }
    registro(usuario) {
        const ruta = `${URL}registro`;
        const data = usuario;
        console.log(ruta, data);
        return new Promise(resolve => {
            this.http.post(ruta, data)
                .subscribe(respuesta => {
                if (respuesta.status == 'success') {
                    resolve(respuesta);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    resolve(respuesta);
                }
            });
        });
    }
    getUsuarioStorage() {
        return new Promise(resolve => {
            this.storage.get('usuario')
                .then(user => {
                resolve(user);
            });
        });
    }
    getToken() {
        return new Promise(resolve => {
            this.storage.get('token')
                .then(token => {
                resolve(token);
            });
        });
    }
    getPerfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.getToken();
            console.log(token);
        });
    }
};
UsuariosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
UsuariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UsuariosService);



/***/ }),

/***/ "FvXd":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comunes/header/header.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n      <ion-buttons slot=\"start\" >\n        <ion-menu-button menu=\"first\" color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"light\" size=\"Large\">{{seccion}}</ion-title>\n      <ion-buttons slot=\"secondary\">\n        <ion-back-button defaultHref=\"/\" text=\"\" color=\"light\"></ion-back-button>\n        <ion-img routerLink=\"/home\" src=\"http://apivehiculos.test/img/logo2.png\"></ion-img>\n        <ion-button expand=\"full\" routerLink=\"/login\">\n          <ion-icon  name=\"log-in-outline\"></ion-icon>\n          Login \n        </ion-button>\n      </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "HVEI":
/*!*****************************************************************!*\
  !*** ./src/app/components/comunes/portada/portada.component.ts ***!
  \*****************************************************************/
/*! exports provided: PortadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortadaComponent", function() { return PortadaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_portada_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./portada.component.html */ "hx/G");
/* harmony import */ var _portada_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portada.component.scss */ "jOyI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PortadaComponent = class PortadaComponent {
    constructor() { }
    login() {
        console.log('entrar...');
    }
    ngOnInit() { }
};
PortadaComponent.ctorParameters = () => [];
PortadaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-portada',
        template: _raw_loader_portada_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_portada_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PortadaComponent);



/***/ }),

/***/ "IqcT":
/*!*****************************************************************!*\
  !*** ./src/app/components/comunes/perfil/perfil.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Mgb5":
/*!*****************************************************************!*\
  !*** ./src/app/components/comunes/signup/signup.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "NUB8":
/*!***********************************************************!*\
  !*** ./src/app/components/agregarc/agregarc.component.ts ***!
  \***********************************************************/
/*! exports provided: AgregarcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarcComponent", function() { return AgregarcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agregarc_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agregarc.component.html */ "Qdmt");
/* harmony import */ var _agregarc_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregarc.component.scss */ "7iE4");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/ui-service.service */ "5egi");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/categorias.service */ "Xnfx");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let AgregarcComponent = class AgregarcComponent {
    constructor(cService, navController, mService) {
        this.cService = cService;
        this.navController = navController;
        this.mService = mService;
        this.newcategoria = {
            nombre: 'otros',
            descripcion: 'otros',
            img: 'otros.png'
        };
    }
    ngOnInit() { }
    agregarc(fAgregarc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fAgregarc.invalid) {
                return;
            }
            //console.log('error en datos');
            const peticion = yield this.cService.agregarc(this.newcategoria);
            if (peticion.status == 'Correcto.') {
                this.mService.alertaInformativa(peticion.message);
                this.navController.navigateRoot('agregarc', { animated: true });
            }
            else {
                console.log(peticion);
                this.mService.alertaInformativa(JSON.stringify(peticion.errors));
            }
        });
    }
};
AgregarcComponent.ctorParameters = () => [
    { type: _services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__["UiServiceService"] }
];
AgregarcComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-agregarc',
        template: _raw_loader_agregarc_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agregarc_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgregarcComponent);



/***/ }),

/***/ "Oyo3":
/*!***************************************************************!*\
  !*** ./src/app/components/comunes/signup/signup.component.ts ***!
  \***************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "dtnS");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.scss */ "Mgb5");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/usuarios.service */ "ESM5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ui-service.service */ "5egi");







let SignupComponent = class SignupComponent {
    constructor(uService, navCtrl, uiService) {
        this.uService = uService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.registerUser = {
            id: 1,
            nombre: 'antonio',
            apellidos: 'sanchez',
            rol: 'usuario',
            login: 'antonio@gmail.com',
            password: '1234',
            img: 'antonio.jpg'
        };
    }
    ngOnInit() { }
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
    registro(fRegistro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fRegistro.invalid) {
                return;
            }
            const peticion = yield this.uService.registro(this.registerUser);
            if (peticion.status == 'success') {
                console.log(peticion);
                this.uiService.alertaInformativa(peticion.message);
                this.navCtrl.navigateRoot('login', { animated: true });
            }
            else {
                console.log(peticion);
                this.uiService.alertaInformativa(JSON.stringify(peticion.errors));
            }
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_6__["UiServiceService"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupComponent);



/***/ }),

/***/ "Qdmt":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/agregarc/agregarc.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><h1>Agregar Categoria</h1></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Volver\" defaultHref=\"/categorias\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <form (ngSubmit)=\"agregarc(fAgregarc)\" #fAgregarc=\"ngForm\"> \n            <ion-item>\n              <ion-label position=\"floating\">Nombre</ion-label>\n              <ion-input required name=\"nombre\" type=\"text\" [(ngModel)]=\"newcategoria.nombre\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Descripcion</ion-label>\n              <ion-input required name=\"descripcion\" type=\"text\" [(ngModel)]=\"newcategoria.descripcion\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Imagen</ion-label>\n              <ion-input required name=\"img\" type=\"text\" [(ngModel)]=\"newcategoria.img\"></ion-input>\n            </ion-item>\n\n          <ion-button expand=\"full\" type=\"submit\">Añadir Categoria</ion-button>\n     </form>\n  </ion-card-content>\n</ion-content>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/categorias.service */ "Xnfx");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/usuarios.service */ "ESM5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/config.service */ "r4Kj");









let AppComponent = class AppComponent {
    constructor(platform, CategoriasService, uService, navCtrl, router, configService) {
        this.platform = platform;
        this.CategoriasService = CategoriasService;
        this.uService = uService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.configService = configService;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            /* this.StatusBar.styleDefault();
             this.SplashScreen.hide();*/
        });
    }
    mostrarVehiculos(c) {
        console.log(c);
        this.router.navigate(["categorias", { outlets: { 'primary': ["vehiculos", c] } }]).then(nav => {
            console.log(nav); // true if navigation is successful
        }, err => {
            console.log(err); // when there's an error
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('datos del usuario');
            this.uService.userStorageObservable
                .subscribe(data => {
                this.usuarios = data;
                console.log(this.usuarios);
            });
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.usuario = await this.uService.getUsuarioStorage();
            this.uService.userStorageObservable
                .subscribe(data => {
                this.usuarios = data;
                console.log(this.usuarios);
            });
        });
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.usuario = await this.uService.getUsuarioStorage();
            this.uService.userStorageObservable
                .subscribe(data => {
                this.usuarios = data;
                console.log(this.usuarios);
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_categorias_service__WEBPACK_IMPORTED_MODULE_5__["CategoriasService"] },
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["UsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" menuId=\"first\" (click)=\"getUser()\">\n      <ion-header>\n        <ion-list-header *ngIf=\"usuarios\">\n            <img  routerLink=\"/perfil\" src=\"http://apiVehiculos.test/img/usuarios/{{usuarios.img}}\">\n          <div id=\"datos\"  >\n            <div id=\"clientes\">\n              <p>{{ usuarios.clientes.Nombre }}</p>\n              <p></p>\n            </div>\n            <div id=\"usuario\">\n              <p>{{usuarios.nombre}} {{usuarios.apellidos}}</p> \n              <p>{{ usuarios.login }}</p>\n              <p>{{ usuarios.rol }}</p>\n            </div>    \n          </div>\n        </ion-list-header>\n      </ion-header>\n      <ion-content>   \n        <ion-router-outlet name=\"secondary\">\n          \n        </ion-router-outlet>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet name=\"primary\" id=\"main-content\">\n      \n    </ion-router-outlet>\n\n  </ion-split-pane>\n  \n</ion-app>\n");

/***/ }),

/***/ "Xnfx":
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios.service */ "ESM5");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
let CategoriasService = class CategoriasService {
    constructor(http, uService, storage) {
        this.http = http;
        this.uService = uService;
        this.storage = storage;
        this.vehiculosStorage = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.vehiculosStorageObservable = this.vehiculosStorage.asObservable();
        this.token = null;
    }
    getVehiculos(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.uService.getToken();
            const ruta = `${URL}categorias/${id}/vehiculos`;
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                })
            };
            return new Promise(resolve => {
                this.http.get(ruta, httpOptions)
                    .subscribe(data => {
                    this.respuesta = data;
                    this.vehiculosStorage.next(this.respuesta.data);
                    resolve(this.respuesta);
                });
            });
        });
    }
    getCategorias() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.uService.getToken();
            const ruta = `${URL}categorias`;
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                })
            };
            return new Promise(resolve => {
                this.http.get(ruta, httpOptions)
                    .subscribe(respuesta => {
                    console.log(respuesta);
                    resolve(respuesta);
                });
            });
        });
    }
    agregarc(categorias) {
        console.log(categorias);
        const ruta = `${URL}agregarc`;
        const data = categorias;
        console.log(ruta, data);
        return new Promise(resolve => {
            this.http.post(ruta, data)
                .subscribe(respuesta => {
                if (respuesta.status == 'success') {
                    resolve(respuesta);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    resolve(respuesta);
                }
            });
        });
    }
};
CategoriasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
];
CategoriasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], CategoriasService);



/***/ }),

/***/ "Y537":
/*!***************************************************************!*\
  !*** ./src/app/components/comunes/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "FvXd");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "yZSF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    seccion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['seccion',] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "Ybv9":
/*!******************************************!*\
  !*** ./src/app/pipes/view-image.pipe.ts ***!
  \******************************************/
/*! exports provided: ViewImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImagePipe", function() { return ViewImagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");



const URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
let ViewImagePipe = class ViewImagePipe {
    transform(img, tipo) {
        let rutaImg = `http://apivehiculos.test/img/${tipo}/${img}`;
        console.log(rutaImg);
        return rutaImg;
    }
};
ViewImagePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'viewImage'
    })
], ViewImagePipe);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_comunes_comunes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/comunes/comunes.module */ "zpE2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _pipes_view_image_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/view-image.pipe */ "Ybv9");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/truncate.pipe */ "h/Hl");





/*import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';*/








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pipes_view_image_pipe__WEBPACK_IMPORTED_MODULE_11__["ViewImagePipe"], _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_12__["TruncatePipe"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _components_comunes_comunes_module__WEBPACK_IMPORTED_MODULE_8__["ComunesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot()
        ],
        providers: [
            /*StatusBar,
            SplashScreen,*/
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "a9UI":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comunes/perfil/perfil.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header seccion=\"Perfil\"></app-header>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <h2>Datos del Perfil</h2>\n    </ion-item>\n  \n    <ion-card-content>\n      <ion-grid *ngIf=\"usuario\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>Nombre </ion-label>\n            <h4>{{ usuario.nombre }} {{ usuario.apellidos }}</h4>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>Email </ion-label>\n            <h4>{{ usuario.login }} </h4>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>Rol </ion-label>\n            <h4>{{ usuario.rol }} </h4>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <h3>{{ usuario.clientes.Nombre }}</h3>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>Crédito </ion-label>\n            <h3>{{ usuario.clientes.LimiteCredito }}</h3>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>Pais </ion-label>\n            <h3>{{ usuario.clientes.Ciudad }} ({{ usuario.clientes.Pais }})</h3>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>Teléfono </ion-label>\n            <h3>{{ usuario.clientes.Telefono }}</h3>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>imagen </ion-label>\n            <h3><img  routerLink=\"/perfil\" src=\"http://apiVehiculos.test/img/usuarios/{{usuario.img}}\"></h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n \n</ion-content>");

/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    url: 'http://vehiculos.jcgg.es/api/'
};


/***/ }),

/***/ "d/Xq":
/*!***********************************************!*\
  !*** ./src/app/services/vehiculos.service.ts ***!
  \***********************************************/
/*! exports provided: VehiculosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculosService", function() { return VehiculosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios.service */ "ESM5");






const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
let VehiculosService = class VehiculosService {
    constructor(http, uService) {
        this.http = http;
        this.uService = uService;
        this.vehiculosStorage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.vehiculosStorageObservable = this.vehiculosStorage.asObservable();
        this.id = true;
    }
    getFilter(filtros) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': 'application/json'
            })
        };
        let data = JSON.stringify(filtros);
        const ruta = `${URL}vehiculos/filters`;
        console.log(ruta, data);
        return new Promise(resolve => {
            //   this.http.post<MsnApiProductos>(ruta, {data})
            this.http.post(ruta, { data })
                .subscribe(datos => {
                console.log(datos);
                this.vehiculosStorage.next(datos.data);
                this.respuesta = datos;
                resolve(this.respuesta);
            });
        });
    }
    showVehiculos(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Id = ', id);
            const token = yield this.uService.getToken();
            const ruta = `${URL}vehiculos/${id}/detalle`;
            console.log(ruta);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                })
            };
            return new Promise(resolve => {
                this.http.get(ruta, httpOptions)
                    .subscribe(data => {
                    this.respuesta = data;
                    console.log(this.respuesta);
                    resolve(this.respuesta);
                });
            });
        });
    }
    borrar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.uService.getToken();
            const ruta = `${URL}vehiculos/${id}/remove`;
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                })
            };
            return new Promise(resolve => {
                this.http.get(ruta, httpOptions)
                    .subscribe(data => {
                    console.log(data);
                    resolve(data);
                });
            });
        });
    }
};
VehiculosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] }
];
VehiculosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], VehiculosService);



/***/ }),

/***/ "dtnS":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comunes/signup/signup.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header seccion=\"Registro\"></app-header>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <h2>Registro</h2>\n    </ion-item>\n  \n    <ion-card-content>\n      <form (ngSubmit)=\"registro(fRegistro)\" #fRegistro=\"ngForm\"> \n              <ion-item>\n                <ion-label position=\"floating\">Id</ion-label>\n                <ion-input required name=\"id\" type=\"number\" [(ngModel)]=\"registerUser.id\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input required name=\"login\" type=\"email\" [(ngModel)]=\"registerUser.login\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input required name=\"password\" type=\"password\" [(ngModel)]=\"registerUser.password\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Nombre</ion-label>\n                <ion-input required name=\"nombre\" type=\"text\" [(ngModel)]=\"registerUser.nombre\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Apellidos</ion-label>\n                <ion-input required name=\"apellidos\" type=\"text\" [(ngModel)]=\"registerUser.apellidos\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Rol</ion-label>\n                <ion-input required name=\"rol\" type=\"text\" [(ngModel)]=\"registerUser.rol\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Imagen</ion-label>\n                <ion-input  name=\"img\" type=\"text\" [(ngModel)]=\"registerUser.img\"></ion-input>\n              </ion-item>\n            <ion-button expand=\"full\" type=\"submit\" color=\"tertiary\">Sing Up</ion-button>\n       </form>\n      \n    </ion-card-content>\n  </ion-card>\n \n</ion-content>\n");

/***/ }),

/***/ "h/Hl":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TruncatePipe = class TruncatePipe {
    transform(value, limite) {
        let limit = parseInt(limite);
        if (value.length > limit) {
            return value.substring(0, limit) + '...';
        }
        else {
            return value;
        }
    }
};
TruncatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);



/***/ }),

/***/ "hx/G":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comunes/portada/portada.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header seccion=\"Portada\"></app-header>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-img src=\"http://apivehiculos.test/img/portada1.png\"></ion-img>\n      <ion-card-title>Concesionario</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Concesionario líder en compra y venta de coches a nivel nacional en 25 centros en España.    </ion-card-content>\n  </ion-card>\n\n  \n  \n  \n</ion-content>\n");

/***/ }),

/***/ "jOyI":
/*!*******************************************************************!*\
  !*** ./src/app/components/comunes/portada/portada.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0YWRhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lpYt":
/*!**************************************************************!*\
  !*** ./src/app/components/comunes/comunes-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ComunesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunesRoutingModule", function() { return ComunesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _portada_portada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portada/portada.component */ "HVEI");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil/perfil.component */ "mmHh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "/T01");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "Oyo3");







const routes = [
    { path: 'home', component: _portada_portada_component__WEBPACK_IMPORTED_MODULE_3__["PortadaComponent"] },
    { path: 'perfil', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__["PerfilComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'registro', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
];
let ComunesRoutingModule = class ComunesRoutingModule {
};
ComunesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComunesRoutingModule);



/***/ }),

/***/ "lue5":
/*!***************************************************************!*\
  !*** ./src/app/components/comunes/login/login.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "mmHh":
/*!***************************************************************!*\
  !*** ./src/app/components/comunes/perfil/perfil.component.ts ***!
  \***************************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.component.html */ "a9UI");
/* harmony import */ var _perfil_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.component.scss */ "IqcT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarios.service */ "ESM5");





let PerfilComponent = class PerfilComponent {
    constructor(uService) {
        this.uService = uService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.usuario = await this.uService.getUsuarioStorage();
            // console.log (this.usuario);
            this.uService.userStorageObservable
                .subscribe(data => {
                this.usuario = data;
                console.log(this.usuario);
            });
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('entra');
            /*
            this.uService.userStorageObservable
              .subscribe ( data => {
                this.usuario = data;
                console.log (this.usuario );
              })
          */
            this.usuario = yield this.uService.getUsuarioStorage();
            console.log(this.usuario);
        });
    }
};
PerfilComponent.ctorParameters = () => [
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] }
];
PerfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilComponent);



/***/ }),

/***/ "r4Kj":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.service */ "ESM5");



let ConfigService = class ConfigService {
    constructor(usService) {
        this.usService = usService;
        this.isClickConfig = false;
        this.iconFing = ['settings', 'settings-outline'];
        this.isAdmin = false;
        this.iconEdit = 'settings-outline';
    }
    edicion() {
        this.isClickConfig = !this.isClickConfig;
        if (this.isClickConfig) {
            this.iconEdit = this.iconFing[0];
        }
        else {
            this.iconEdit = this.iconFing[1];
        }
    }
};
ConfigService.ctorParameters = () => [
    { type: _usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] }
];
ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfigService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_agregarc_agregarc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/agregarc/agregarc.component */ "NUB8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_comunes_portada_portada_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/comunes/portada/portada.component */ "HVEI");
/* harmony import */ var _components_comunes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/comunes/perfil/perfil.component */ "mmHh");
/* harmony import */ var _components_comunes_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/comunes/login/login.component */ "/T01");
/* harmony import */ var _components_comunes_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/comunes/signup/signup.component */ "Oyo3");








const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_comunes_portada_portada_component__WEBPACK_IMPORTED_MODULE_4__["PortadaComponent"] },
    { path: 'perfil', component: _components_comunes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"] },
    { path: 'login', component: _components_comunes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'agregarc', component: _components_agregarc_agregarc_component__WEBPACK_IMPORTED_MODULE_1__["AgregarcComponent"] },
    { path: 'signup', component: _components_comunes_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    {
        path: 'categorias', outlet: 'primary',
        loadChildren: () => __webpack_require__.e(/*! import() | components-categorias-categorias-module */ "default~components-categorias-categorias-module~pages-tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./components/categorias/categorias.module */ "RyM2")).then(m => m.CategoriasModule)
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() | pages-tabs-tabs-module */[__webpack_require__.e("default~components-categorias-categorias-module~pages-tabs-tabs-module"), __webpack_require__.e("pages-tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./pages/tabs/tabs.module */ "qiIP")).then(m => m.TabsPageModule)
    },
    {
        path: 'filters',
        loadChildren: () => __webpack_require__.e(/*! import() | components-filtros-filtros-module */ "components-filtros-filtros-module").then(__webpack_require__.bind(null, /*! ./components/filtros/filtros.module */ "yYci")).then(m => m.FiltrosModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"], useHash: true, enableTracing: false })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yZSF":
/*!*****************************************************************!*\
  !*** ./src/app/components/comunes/header/header.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background:none;\n  background-color: #043edd !important;\n  color: white;\n}\n\nion-img {\n  height: 50px;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgNjIsIDIyMSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweFxyXG59Il19 */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item img {\n  width: 10% !important;\n}\n\nion-list-header {\n  display: flex;\n  flex-flow: row nowrap;\n  background-color: rgba(10, 135, 238, 0.7);\n  color: white;\n}\n\nion-list-header img {\n  width: 20%;\n}\n\nion-list-header #datos {\n  width: 80%;\n}\n\nion-list-header #datos {\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 10px;\n}\n\nion-list-header #datos p {\n  margin: 0;\n}\n\nion-list-header #usuario {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-end;\n  color: white;\n  font-style: italic;\n  padding: 3px;\n}\n\nion-list-header #datos #cliente p {\n  font-weight: bold;\n}\n\nion-list-header #datos #usuario p {\n  font-size: 12px;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsVUFBQTtBQUVKOztBQUNFO0VBQ0UsVUFBQTtBQUVKOztBQUFFO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURFO0VBQ0UsU0FBQTtBQUlKOztBQURFO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtBQU1KOztBQUFFO0VBQ0UsMkVBQUE7QUFHSjs7QUFBRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBR0o7O0FBQUU7RUFDRSxlQUFBO0FBR0o7O0FBQUU7RUFDRSxtQkFBQTtBQUdKOztBQUFFOztFQUVFLGtCQUFBO0FBR0o7O0FBQUU7RUFDRSwyREFBQTtBQUdKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxzREFBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7QUFESjs7QUFJRTtFQUNFLGNBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxzQkFBQTtBQURKOztBQUlFO0VBQ0UsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtBQURKOztBQUlFOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUZKOztBQUtFO0VBQ0UsaUNBQUE7QUFGSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSBpbWd7XHJcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1saXN0LWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMzUsIDIzOCwgMC43KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWxpc3QtaGVhZGVyIGltZyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICBcclxuICBpb24tbGlzdC1oZWFkZXIgI2RhdG9ze1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgaW9uLWxpc3QtaGVhZGVyICNkYXRvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgaW9uLWxpc3QtaGVhZGVyICNkYXRvcyAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1saXN0LWhlYWRlciAjdXN1YXJpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gIH1cclxuICBpb24tbGlzdC1oZWFkZXIgI2RhdG9zICNjbGllbnRlIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGlvbi1saXN0LWhlYWRlciAjZGF0b3MgI3VzdWFyaW8gcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICBcclxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM2MTZlN2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjNzM4NDlhO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW5vdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIFxyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zpE2":
/*!******************************************************!*\
  !*** ./src/app/components/comunes/comunes.module.ts ***!
  \******************************************************/
/*! exports provided: ComunesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunesModule", function() { return ComunesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _agregarc_agregarc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../agregarc/agregarc.component */ "NUB8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comunes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comunes-routing.module */ "lpYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "Y537");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _portada_portada_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portada/portada.component */ "HVEI");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./perfil/perfil.component */ "mmHh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "/T01");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "Oyo3");












let ComunesModule = class ComunesModule {
};
ComunesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _agregarc_agregarc_component__WEBPACK_IMPORTED_MODULE_1__["AgregarcComponent"], _portada_portada_component__WEBPACK_IMPORTED_MODULE_8__["PortadaComponent"], _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_9__["PerfilComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _agregarc_agregarc_component__WEBPACK_IMPORTED_MODULE_1__["AgregarcComponent"], _portada_portada_component__WEBPACK_IMPORTED_MODULE_8__["PortadaComponent"], _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_9__["PerfilComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _comunes_routing_module__WEBPACK_IMPORTED_MODULE_4__["ComunesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]
    })
], ComunesModule);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map