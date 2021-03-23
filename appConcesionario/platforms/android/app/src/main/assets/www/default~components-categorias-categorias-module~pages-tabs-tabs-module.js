(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-categorias-categorias-module~pages-tabs-tabs-module"],{

/***/ "+1dx":
/*!***************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias.component.html */ "j6lq");
/* harmony import */ var _categorias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias.component.scss */ "YLc0");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/config.service */ "r4Kj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuarios.service */ "ESM5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/categorias.service */ "Xnfx");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");










const URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
let CategoriasComponent = class CategoriasComponent {
    constructor(uService, categoriasService, navCtrl, Router, route, configService) {
        this.uService = uService;
        this.categoriasService = categoriasService;
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.route = route;
        this.configService = configService;
        this.images = `${URL}/img/categorias`;
        this.categoria = this.route.snapshot.paramMap.get('id');
        console.log(this.categoria);
        this.Router.navigate(['/filters', { outlets: { secondary: ['categorias'] } }]);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let respuesta = yield this.categoriasService.getCategorias();
            console.log(respuesta);
            if (respuesta.status == 'success') {
                this.categorias = respuesta.data;
                console.log(this.categorias);
            }
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let respuesta = yield this.categoriasService.getCategorias();
            if (respuesta.status == 'success') {
                this.categorias = respuesta.data;
            }
        });
    }
    vehiculos(categoria) {
        console.log(categoria);
    }
};
CategoriasComponent.ctorParameters = () => [
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
CategoriasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-categorias',
        template: _raw_loader_categorias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasComponent);



/***/ }),

/***/ "+Ucd":
/*!****************************************************************************************!*\
  !*** ./src/app/components/categorias/detallevehiculos/detallevehiculos.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxldmVoaWN1bG9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "4ivB":
/*!*******************************************************************************!*\
  !*** ./src/app/components/categorias/detallevehiculos/edit/edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit.component.html */ "L9GJ");
/* harmony import */ var _edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.component.scss */ "rMF0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EditComponent = class EditComponent {
    constructor() { }
    ngOnInit() { }
};
EditComponent.ctorParameters = () => [];
EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditComponent);



/***/ }),

/***/ "5zdS":
/*!********************************************************************!*\
  !*** ./src/app/components/categorias/categorias-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CategoriasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasRoutingModule", function() { return CategoriasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _detallevehiculos_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detallevehiculos/edit/edit.component */ "4ivB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detallevehiculos_detallevehiculos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detallevehiculos/detallevehiculos.component */ "A/WY");
/* harmony import */ var _categorias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias.component */ "+1dx");
/* harmony import */ var _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehiculos/vehiculos.component */ "gz3b");








_detallevehiculos_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"];
_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"];
const routes = [
    {
        path: '', component: _categorias_component__WEBPACK_IMPORTED_MODULE_6__["CategoriasComponent"],
        children: []
    },
    { path: 'vehiculos/:id', component: _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_7__["VehiculosComponent"] },
    { path: 'detallevehiculos/:id', component: _detallevehiculos_detallevehiculos_component__WEBPACK_IMPORTED_MODULE_5__["DetallevehiculosComponent"] },
    { path: 'edit/:id', component: _detallevehiculos_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"] }
];
let CategoriasRoutingModule = class CategoriasRoutingModule {
};
CategoriasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], CategoriasRoutingModule);



/***/ }),

/***/ "A/WY":
/*!**************************************************************************************!*\
  !*** ./src/app/components/categorias/detallevehiculos/detallevehiculos.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DetallevehiculosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallevehiculosComponent", function() { return DetallevehiculosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detallevehiculos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detallevehiculos.component.html */ "cz6q");
/* harmony import */ var _detallevehiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detallevehiculos.component.scss */ "+Ucd");
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui-service.service */ "5egi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/categorias.service */ "Xnfx");
/* harmony import */ var src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/vehiculos.service */ "d/Xq");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");









let DetallevehiculosComponent = class DetallevehiculosComponent {
    constructor(route, cServices, vehiculosService, configService, UiService) {
        this.route = route;
        this.cServices = cServices;
        this.vehiculosService = vehiculosService;
        this.configService = configService;
        this.UiService = UiService;
        this.read = true;
        console.log('detalle');
    }
    editar() {
        this.read = !this.read;
        if (this.read) {
            this.accion = 'readonly';
        }
        else {
            this.accion = null;
        }
        console.log(this.read, this.accion);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.codvehiculo = this.route.snapshot.paramMap.get('id');
            this.accion = this.route.snapshot.paramMap.get('accion');
            let respuesta = yield this.vehiculosService.showVehiculos(this.codvehiculo);
            console.log(this.codvehiculo);
            // let respuesta = await this.vehiculosService.showVehiculos(this.codvehiculo);
            console.log(respuesta);
            if (respuesta.status == 'success') {
                this.vehiculo = respuesta.data;
                console.log(this.vehiculo);
            }
        });
    }
    eliminarvehiculo(id) {
        this.UiService.alertaborrado(id);
    }
};
DetallevehiculosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasService"] },
    { type: src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_7__["VehiculosService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] },
    { type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__["UiServiceService"] }
];
DetallevehiculosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-detallevehiculos',
        template: _raw_loader_detallevehiculos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detallevehiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallevehiculosComponent);



/***/ }),

/***/ "F1xo":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorias/vehiculos/vehiculos.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header></app-header>\n</ion-header>\n<ion-content>\n  <ion-item *ngIf=\"filterPService.id\" >\n    <h3  >Listado de la categoría {{idcategoria}}</h3>\n    <ion-button slot=\"end\" *ngIf=\"configService.isClickConfig\">\n      Nuevo Vehiculo\n    </ion-button>\n  </ion-item>\n  \n   <ion-grid>\n    <ion-row>\n      <ion-col offset=\"6\" size=\"6\">\n        <ion-item id=\"bread\">\n          <span class=\"active\" [routerLink]=\"['/tabs' ,'categorias']\">\n              Categorias \n          </span>\n          <span > > </span>\n          <span > {{ idcategoria }} </span>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\"vehiculos\" >\n    <ion-card *ngFor=\"let vehiculo of vehiculos\">\n      <ion-card-header>\n      <!--  <img *ngIf=\"producto.imagen\"  src=\"{{ images }}/{{ producto.imagen }}\"> -->\n        <img *ngIf=\"vehiculo.img\" [src] = \"vehiculo.img | viewImage: 'vehiculos'\">\n        <ion-card-title [routerLink]=\"[ '/tabs/categorias/detallevehiculos', vehiculo.id]\" >\n            {{ vehiculo.nombre }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{ vehiculo.marca }} \n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n \n</ion-content>");

/***/ }),

/***/ "L9GJ":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorias/detallevehiculos/edit/edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  edit works!\n</p>\n");

/***/ }),

/***/ "RyM2":
/*!************************************************************!*\
  !*** ./src/app/components/categorias/categorias.module.ts ***!
  \************************************************************/
/*! exports provided: CategoriasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasModule", function() { return CategoriasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _categorias_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias.component */ "+1dx");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comunes_comunes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comunes/comunes.module */ "zpE2");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categorias-routing.module */ "5zdS");
/* harmony import */ var _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehiculos/vehiculos.component */ "gz3b");
/* harmony import */ var _detallevehiculos_detallevehiculos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detallevehiculos/detallevehiculos.component */ "A/WY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











let CategoriasModule = class CategoriasModule {
};
CategoriasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_categorias_component__WEBPACK_IMPORTED_MODULE_1__["CategoriasComponent"], _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_8__["VehiculosComponent"], _detallevehiculos_detallevehiculos_component__WEBPACK_IMPORTED_MODULE_9__["DetallevehiculosComponent"]],
        exports: [_categorias_component__WEBPACK_IMPORTED_MODULE_1__["CategoriasComponent"], _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_8__["VehiculosComponent"], _detallevehiculos_detallevehiculos_component__WEBPACK_IMPORTED_MODULE_9__["DetallevehiculosComponent"]],
        imports: [
            _comunes_comunes_module__WEBPACK_IMPORTED_MODULE_4__["ComunesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_7__["CategoriasRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"]
        ]
    })
], CategoriasModule);



/***/ }),

/***/ "U+JD":
/*!**************************************************************************!*\
  !*** ./src/app/components/categorias/vehiculos/vehiculos.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  display: flex;\n  flex-flow: row wrap;\n}\n\nion-card {\n  width: 47%;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\nion-grid span {\n  padding: 5px;\n}\n\nion-grid ion-item#bread {\n  text-align: right;\n}\n\nion-grid ion-item#bread span.active {\n  color: blue;\n}\n\nion-item.herramientas ion-icon {\n  transition: 1s all;\n}\n\nion-item.herramientas ion-icon:hover {\n  color: red !important;\n  transform: scale(1.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmVoaWN1bG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KOztBQUpBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtBQU9KIiwiZmlsZSI6InZlaGljdWxvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWdyaWQgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuaW9uLWdyaWQgaW9uLWl0ZW0jYnJlYWQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuaW9uLWdyaWQgaW9uLWl0ZW0jYnJlYWQgc3Bhbi5hY3RpdmUge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuaW9uLWl0ZW0uaGVycmFtaWVudGFzIGlvbi1pY29ue1xyXG4gICAgdHJhbnNpdGlvbjogMXMgYWxsO1xyXG59XHJcbmlvbi1pdGVtLmhlcnJhbWllbnRhcyBpb24taWNvbjpob3ZlcntcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "YLc0":
/*!*****************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  padding: 10px;\n}\n\nion-list {\n  display: flex;\n  flex-flow: row wrap;\n}\n\nion-card {\n  width: 47%;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\nion-card-header img {\n  height: 100px;\n}\n\nion-router-outlet {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXRlZ29yaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7QUFLSiIsImZpbGUiOiJjYXRlZ29yaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICB3aWR0aDogNDclO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1jYXJkLWhlYWRlciBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbmlvbi1yb3V0ZXItb3V0bGV0IHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "cz6q":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorias/detallevehiculos/detallevehiculos.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header ></app-header>\n</ion-header>\n<h3 *ngIf=\"vehiculo\"> Detalle del Vehiculo {{vehiculo.nombre}} </h3>\n<ion-row>\n  <ion-col offset=\"6\" size=\"6\">\n    <ion-item id=\"bread\">\n      <span class=\"active\" [routerLink]=\"['/tabs' ,'categorias']\">\n          Categorias \n      </span>\n    </ion-item>\n  </ion-col>\n</ion-row>\n<ion-content *ngIf=\"vehiculo\">\n  \n   \n    <ion-item  *ngIf=\"configService.isClickConfig\">\n     <!--  <ion-icon [routerLink]=\"[ '/tabs/categorias/detallevehiculos/edit/',vehiculo.id]\" color=\"primary\" slot=\"end\" name=\"create\"></ion-icon>   -->\n      <ion-icon (click)=\"eliminarvehiculo(vehiculo.id)\" color=\"primary\" slot=\"end\" name=\"trash-outline\"></ion-icon>\n    </ion-item> \n    <ion-card>\n      <ion-card-header>\n        <img *ngIf=\"vehiculo.img\" [src] = \"vehiculo.img | viewImage: 'vehiculos'\">\n        <ion-card-title>Nombre: {{ vehiculo.nombre }}</ion-card-title>\n        <ion-card-subtitle>Categoria: {{ vehiculo.categoria }}</ion-card-subtitle>\n        <ion-card-subtitle>Precio: {{ vehiculo.Precio }}€</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        Marca: {{ vehiculo.marca }} \n      </ion-card-content>\n    </ion-card>\n       <!-- \n    <ion-item>\n      <ion-input required readonly name=\"nombre\"  type=\"text\" [(ngModel)]=\"vehiculo.nombre\"></ion-input>\n    </ion-item> \n     -->\n\n</ion-content>\n");

/***/ }),

/***/ "gz3b":
/*!************************************************************************!*\
  !*** ./src/app/components/categorias/vehiculos/vehiculos.component.ts ***!
  \************************************************************************/
/*! exports provided: VehiculosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculosComponent", function() { return VehiculosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vehiculos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vehiculos.component.html */ "F1xo");
/* harmony import */ var _vehiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehiculos.component.scss */ "U+JD");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarios.service */ "ESM5");
/* harmony import */ var src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vehiculos.service */ "d/Xq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/categorias.service */ "Xnfx");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "cxbk");










const URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
let VehiculosComponent = class VehiculosComponent {
    constructor(route, router, cService, filterPService, uService, configService) {
        this.route = route;
        this.router = router;
        this.cService = cService;
        this.filterPService = filterPService;
        this.uService = uService;
        this.configService = configService;
        this.images = `${URL}img/vehiculos`;
        this.vehiculo = {
            nombre: '',
            Precio: 0
        };
        this.idcategoria = this.route.snapshot.paramMap.get('id');
        console.log(this.idcategoria);
        this.router.navigate(['/filters', { outlets: { secondary: ['vehiculos'] } }]);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.respuesta = yield this.cService.getVehiculos(this.idcategoria);
            console.log(this.respuesta);
            if (this.respuesta.status == 'success') {
                this.vehiculos = this.respuesta.data;
                console.log(this.vehiculos);
            }
            this.cService.vehiculosStorageObservable
                .subscribe(respuesta => {
                this.vehiculos = respuesta;
                console.log(this.vehiculos);
            });
            this.filterPService.vehiculosStorageObservable
                .subscribe(respuesta => {
                this.vehiculos = respuesta;
                console.log(this.vehiculos);
            });
            this.uService.userStorageObservable
                .subscribe(data => {
                //    this.rol = data.rol;
            });
        });
    }
    editar() {
        console.log(this.vehiculos);
    }
};
VehiculosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_categorias_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasService"] },
    { type: src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_5__["VehiculosService"] },
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
VehiculosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-vehiculos',
        template: _raw_loader_vehiculos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vehiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VehiculosComponent);



/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_image_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-image.pipe */ "Ybv9");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncate.pipe */ "h/Hl");





let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_view_image_pipe__WEBPACK_IMPORTED_MODULE_3__["ViewImagePipe"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _view_image_pipe__WEBPACK_IMPORTED_MODULE_3__["ViewImagePipe"],
            _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "j6lq":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorias/categorias.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header></app-header>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-button *ngIf=\"configService.isClickConfig\" routerLink= \"/agregarc\">\n      Nueva Categoria\n    </ion-button>\n  </ion-item>\n  <h3>Categorias de nuestros vehiculos</h3>\n  \n  <ion-list >\n      <ion-card *ngFor=\"let c of categorias\">\n        <ion-card-header [routerLink]=\"['/tabs/categorias/vehiculos/', c.nombre]\" >\n        <!--  <img src=\"{{ images }}/{{ g.Imagen }}\"> -->\n          <img [src] = \"c.img | viewImage: 'categorias'\">\n          <ion-card-title >{{ c.nombre }}</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          {{ c.descripcion}}\n        </ion-card-content>\n      </ion-card>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "rMF0":
/*!*********************************************************************************!*\
  !*** ./src/app/components/categorias/detallevehiculos/edit/edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=default~components-categorias-categorias-module~pages-tabs-tabs-module.js.map