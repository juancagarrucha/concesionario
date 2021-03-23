(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-filtros-filtros-module"],{

/***/ "/9Pi":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filtros/filtros.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  filtros works!\n</p>\n");

/***/ }),

/***/ "943k":
/*!***********************************************************************!*\
  !*** ./src/app/components/filtros/categorias/categorias.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias.component.html */ "kvTx");
/* harmony import */ var _categorias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias.component.scss */ "xNLC");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias.service */ "Xnfx");
/* harmony import */ var src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehiculos.service */ "d/Xq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CategoriasComponent = class CategoriasComponent {
    constructor(categoriasService, filterPService) {
        this.categoriasService = categoriasService;
        this.filterPService = filterPService;
        this.items = [];
        this.IFiltros = {
            // precio: { min: 0, max: 0 },
            categorias: []
        };
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let respuesta = yield this.categoriasService.getCategorias();
            if (respuesta.status == 'success') {
                this.categorias = respuesta.data;
                console.log('Hh', this.categorias);
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let respuesta = yield this.categoriasService.getCategorias();
            if (respuesta.status == 'success') {
                this.categorias = respuesta.data;
                console.log('Hh', this.categorias);
            }
        });
    }
    selectcategoria(categorias, pos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(categorias, pos);
            //
            let i = this.items.indexOf(categorias);
            if (i == -1) {
                this.items.push(categorias);
            }
            else {
                this.items.splice(i, 1);
            }
            console.log(this.items);
            // let respuesta = await this.gamasService.getProductosGama(gama);
        });
    }
    aplicar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.IFiltros.categorias = this.items;
            console.log(this.IFiltros);
            let respuesta = yield this.filterPService.getFilter(this.IFiltros);
            //  console.log(respuesta);
            this.items = [];
        });
    }
};
CategoriasComponent.ctorParameters = () => [
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"] },
    { type: src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_4__["VehiculosService"] }
];
CategoriasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-categorias',
        template: _raw_loader_categorias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasComponent);



/***/ }),

/***/ "HuX8":
/*!**************************************************************!*\
  !*** ./src/app/components/filtros/filtros-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: FiltrosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosRoutingModule", function() { return FiltrosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias/categorias.component */ "943k");
/* harmony import */ var _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehiculos/vehiculos.component */ "gUNm");





const routes = [
    { path: '', redirectTo: '/categorias', pathMatch: 'full' },
    { path: 'categorias', component: _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_3__["CategoriasComponent"], outlet: 'secondary' },
    { path: 'vehiculos', component: _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_4__["VehiculosComponent"], outlet: 'secondary' },
];
let FiltrosRoutingModule = class FiltrosRoutingModule {
};
FiltrosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FiltrosRoutingModule);



/***/ }),

/***/ "MXHS":
/*!***********************************************************!*\
  !*** ./src/app/components/filtros/filtros.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0cm9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "N72x":
/*!*********************************************************!*\
  !*** ./src/app/components/filtros/filtros.component.ts ***!
  \*********************************************************/
/*! exports provided: FiltrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosComponent", function() { return FiltrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filtros_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filtros.component.html */ "/9Pi");
/* harmony import */ var _filtros_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtros.component.scss */ "MXHS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FiltrosComponent = class FiltrosComponent {
    constructor() { }
    ngOnInit() { }
};
FiltrosComponent.ctorParameters = () => [];
FiltrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filtros',
        template: _raw_loader_filtros_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filtros_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FiltrosComponent);



/***/ }),

/***/ "PTQS":
/*!***********************************************************************!*\
  !*** ./src/app/components/filtros/vehiculos/vehiculos.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY3Vsb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gUNm":
/*!*********************************************************************!*\
  !*** ./src/app/components/filtros/vehiculos/vehiculos.component.ts ***!
  \*********************************************************************/
/*! exports provided: VehiculosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculosComponent", function() { return VehiculosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vehiculos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vehiculos.component.html */ "ni0G");
/* harmony import */ var _vehiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehiculos.component.scss */ "PTQS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categorias.service */ "Xnfx");
/* harmony import */ var src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vehiculos.service */ "d/Xq");







let VehiculosComponent = class VehiculosComponent {
    constructor(platform, categoriasService, filterPService) {
        this.platform = platform;
        this.categoriasService = categoriasService;
        this.filterPService = filterPService;
        this.items = [];
        this.precio = 50;
        this.IFiltros = {
            // precio: { min: 0, max: 0 },
            precios: [],
            categorias: []
        };
        this.platform.ready().then(() => {
            this.rangeVal = "50";
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let respuesta = yield this.categoriasService.getCategorias();
            this.categorias = respuesta.data;
            console.log(respuesta);
        });
    }
    changeRange(precio) {
        console.log(precio.detail.value.lower, ':', precio.detail.value.upper);
        // console.log(this.rangeVal);
        //this.IFiltros.precio.max = precio.detail.value.upper;
        //this.IFiltros.precio.min = precio.detail.value.lower;
        this.IFiltros.precios[0] = precio.detail.value.lower;
        this.IFiltros.precios[1] = precio.detail.value.upper;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let respuesta = yield this.categoriasService.getCategorias();
            this.categorias = respuesta.data;
            console.log(respuesta);
        });
    }
    selectcategoria(categoria, pos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(categoria, pos);
            //
            let i = this.items.indexOf(categoria);
            if (i == -1) {
                this.items.push(categoria);
            }
            else {
                this.items.splice(i, 1);
            }
            console.log(this.items);
            // let respuesta = await this.gamasService.getProductosGama(gama);
        });
    }
    aplicar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.IFiltros.categorias = this.items;
            console.log(this.IFiltros);
            let respuesta = yield this.filterPService.getFilter(this.IFiltros);
            this.filterPService.id = false;
            //  console.log(respuesta);
            //  this.items = [];
        });
    }
};
VehiculosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_5__["CategoriasService"] },
    { type: src_app_services_vehiculos_service__WEBPACK_IMPORTED_MODULE_6__["VehiculosService"] }
];
VehiculosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vehiculos',
        template: _raw_loader_vehiculos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vehiculos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VehiculosComponent);



/***/ }),

/***/ "kvTx":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filtros/categorias/categorias.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \n<!-- \n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Filtros de Categorias</ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content *ngIf=\"categorias\">\n    <ion-list>\n      <ion-item *ngFor=\"let c of categorias\"> \n        <ion-label>{{ c.nombre }}</ion-label>\n        <ion-checkbox slot=\"end\" (click)=\"selectcategoria(c.nombre)\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-button color=\"light\" (click)=\"aplicar()\">Aplicar</ion-button>\n\n  </ion-card-content>\n</ion-card>\n -->");

/***/ }),

/***/ "ni0G":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filtros/vehiculos/vehiculos.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Filtros de Vehiculos</ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content class=\"ion-padding\" *ngIf=\"categorias\">\n      <div id=\"datos\">\n        <ion-label id=\"min\"><span>min: </span>{{ IFiltros.precios[0] }}</ion-label>\n        <ion-label id=\"max\"><span>max: </span>{{ IFiltros.precios[1] }}</ion-label>\n      </div>\n      <ion-range  min=\"10\" max=\"100000\" pin=\"true\" dual-knobs  (ionChange)=\"changeRange($event)\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"remove-outline\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\n      </ion-range>\n    <ion-list>\n      <ion-item *ngFor=\"let c of categorias; let i = index\"> \n        <ion-label>{{c.nombre}}</ion-label>\n        <ion-checkbox value=false slot=\"end\" (click)=\"selectcategoria(c.nombre, i)\" ></ion-checkbox>\n    <!--    <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>-->\n      </ion-item>\n    </ion-list>\n    <ion-button color=\"light\" (click)=\"aplicar()\">Aplicar</ion-button>\n\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "xNLC":
/*!*************************************************************************!*\
  !*** ./src/app/components/filtros/categorias/categorias.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "yYci":
/*!******************************************************!*\
  !*** ./src/app/components/filtros/filtros.module.ts ***!
  \******************************************************/
/*! exports provided: FiltrosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosModule", function() { return FiltrosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _filtros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filtros-routing.module */ "HuX8");
/* harmony import */ var _filtros_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filtros.component */ "N72x");
/* harmony import */ var _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehiculos/vehiculos.component */ "gUNm");
/* harmony import */ var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categorias/categorias.component */ "943k");









let FiltrosModule = class FiltrosModule {
};
FiltrosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_filtros_component__WEBPACK_IMPORTED_MODULE_6__["FiltrosComponent"], _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_7__["VehiculosComponent"], _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_8__["CategoriasComponent"]],
        exports: [_filtros_component__WEBPACK_IMPORTED_MODULE_6__["FiltrosComponent"], _vehiculos_vehiculos_component__WEBPACK_IMPORTED_MODULE_7__["VehiculosComponent"], _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_8__["CategoriasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _filtros_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiltrosRoutingModule"]
        ]
    })
], FiltrosModule);



/***/ })

}]);
//# sourceMappingURL=components-filtros-filtros-module.js.map