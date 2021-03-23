(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "1vg1":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header seccion=\"Menú\"></app-header>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"categorias\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n      <ion-label>Categorias</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"perfil\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n    <ion-tab-button *ngIf=\"configService.isAdmin\" (click)=\"configService.edicion()\">\n      <ion-icon color=\"primary\" [name]=\"configService.iconEdit\">\n      </ion-icon>\n      <ion-label>Config</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "Gg5j":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "MM9G":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "TA0h");




const routes = [
    { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        outlet: 'primary',
        children: [
            { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../components/comunes/comunes.module */ "zpE2")).then(m => m.ComunesModule) },
            { path: 'categorias', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../components/categorias/categorias.module */ "RyM2")).then(m => m.CategoriasModule) },
            { path: 'vehiculos', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../components/categorias/categorias.module */ "RyM2")).then(m => m.CategoriasModule)
            },
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "TA0h":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "1vg1");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "Gg5j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "r4Kj");





let TabsPage = class TabsPage {
    constructor(configService) {
        this.configService = configService;
    }
    ngOnInit() {
        console.log(this.configService.isAdmin, this.configService.iconEdit);
        //this.configService.edicion();
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "qiIP":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "MM9G");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "TA0h");
/* harmony import */ var _components_comunes_comunes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/comunes/comunes.module */ "zpE2");
/* harmony import */ var _components_comunes_portada_portada_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/comunes/portada/portada.component */ "HVEI");
/* harmony import */ var _components_categorias_categorias_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/categorias/categorias.module */ "RyM2");










let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _components_comunes_comunes_module__WEBPACK_IMPORTED_MODULE_7__["ComunesModule"], _components_categorias_categorias_module__WEBPACK_IMPORTED_MODULE_9__["CategoriasModule"]
        ],
        exports: [_components_comunes_portada_portada_component__WEBPACK_IMPORTED_MODULE_8__["PortadaComponent"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map