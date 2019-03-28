(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.api.ts":
/*!****************************!*\
  !*** ./src/app/app.api.ts ***!
  \****************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = 'http://localhost:3000/api';


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"fixed-nav sticky-footer bg-dark\" [class.sidenav-toggled]=\"navToggle\" id=\"page-top\">\r\n\r\n  <app-header (toggledSidebar)=\"toggled($event)\"></app-header>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <router-outlet></router-outlet>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n* {\n  font-family: 'Roboto', sans-serif; }\n.scrollbar {\n  float: left;\n  min-height: 48vh;\n  max-height: 48vh;\n  padding: none;\n  width: 100%;\n  overflow-y: scroll; }\n#style-1::-webkit-scrollbar {\n  width: 2px; }\n#style-1::-webkit-scrollbar-thumb {\n  background-color: #828282; }\n#style-1::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px #828282 214, 100, 199, 0.3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxmZWxpcGUuZnJhbmNpc2NoZXR0b1xcd29ya3NwYWNlXFxwb3J0YWwtbWVhdFxccG9ydGFsLW1lYXQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBWTtBQUVaO0VBQ0UsaUNBQWlDLEVBQUE7QUFHbkM7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsVUFBVSxFQUFBO0FBRVo7RUFDRSx5QkFBeUIsRUFBQTtBQUUzQjtFQUNFLDREQUE0RCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8nKTtcclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNjcm9sbGJhciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWluLWhlaWdodDogNDh2aDtcclxuICBtYXgtaGVpZ2h0OiA0OHZoO1xyXG4gIHBhZGRpbmc6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4jc3R5bGUtMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAycHg7XHJcbn1cclxuI3N0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyO1xyXG59XHJcbiNzdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICM4MjgyODIoMjE0LCAxMDAsIDE5OSwgMC4zKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.navToggle = true;
    }
    AppComponent.prototype.toggled = function () {
        return this.navToggle === true
            ? this.navToggle = false
            : this.navToggle = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_notification_card_notification_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/notification-card/notification-card.component */ "./src/app/pages/home/notification-card/notification-card.component.ts");
/* harmony import */ var _provideres_alimento_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./provideres/alimento.service */ "./src/app/provideres/alimento.service.ts");
/* harmony import */ var _provideres_cardapio_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./provideres/cardapio.service */ "./src/app/provideres/cardapio.service.ts");
/* harmony import */ var _pages_alimentos_alimentos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/alimentos/alimentos.component */ "./src/app/pages/alimentos/alimentos.component.ts");
/* harmony import */ var _pages_cardapios_cardapio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/cardapios/cardapio.component */ "./src/app/pages/cardapios/cardapio.component.ts");
/* harmony import */ var _pages_cardapios_novo_cardapio_novo_cardapio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/cardapios/novo-cardapio/novo-cardapio.component */ "./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.ts");
/* harmony import */ var _pages_usuarios_novo_novo_usuario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/usuarios/novo/novo-usuario.component */ "./src/app/pages/usuarios/novo/novo-usuario.component.ts");
/* harmony import */ var _provideres_usuario_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./provideres/usuario.service */ "./src/app/provideres/usuario.service.ts");
/* harmony import */ var _pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/home-user/home-user.component */ "./src/app/pages/home-user/home-user.component.ts");
/* harmony import */ var _provideres_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./provideres/auth.service */ "./src/app/provideres/auth.service.ts");
/* harmony import */ var _provideres_almoco_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./provideres/almoco.service */ "./src/app/provideres/almoco.service.ts");
/* harmony import */ var _pages_home_prato_do_dia_prato_do_dia_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/home/prato-do-dia/prato-do-dia..component */ "./src/app/pages/home/prato-do-dia/prato-do-dia..component.ts");
/* harmony import */ var _pages_usuarios_gerenciar_gerenciar_usuario_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/usuarios/gerenciar/gerenciar-usuario.component */ "./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.ts");
/* harmony import */ var _pages_home_metricas_card_metricas_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/home/metricas-card/metricas-card.component */ "./src/app/pages/home/metricas-card/metricas-card.component.ts");
/* harmony import */ var _pages_usuarios_editar_editar_usuario_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/usuarios/editar/editar-usuario.component */ "./src/app/pages/usuarios/editar/editar-usuario.component.ts");
/* harmony import */ var _pages_cardapios_gerenciar_cardapio_gerenciar_cardapio_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component */ "./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.ts");
/* harmony import */ var _provideres_agenda_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./provideres/agenda.service */ "./src/app/provideres/agenda.service.ts");
/* harmony import */ var _pages_cardapios_associar_cardapio_associar_cardapio_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/cardapios/associar-cardapio/associar-cardapio.component */ "./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pages_home_metricas_card_metricas_card_component__WEBPACK_IMPORTED_MODULE_25__["MetricasCardComponent"],
                _pages_home_prato_do_dia_prato_do_dia_component__WEBPACK_IMPORTED_MODULE_23__["PratoDoDiaComponent"],
                _pages_home_notification_card_notification_card_component__WEBPACK_IMPORTED_MODULE_12__["NotificationCardComponent"],
                _pages_cardapios_cardapio_component__WEBPACK_IMPORTED_MODULE_16__["CardapioComponent"],
                _pages_alimentos_alimentos_component__WEBPACK_IMPORTED_MODULE_15__["AlimentosComponent"],
                _pages_cardapios_novo_cardapio_novo_cardapio_component__WEBPACK_IMPORTED_MODULE_17__["NovoCardapioComponent"],
                _pages_usuarios_novo_novo_usuario_component__WEBPACK_IMPORTED_MODULE_18__["NovoUsuarioComponent"],
                _pages_usuarios_editar_editar_usuario_component__WEBPACK_IMPORTED_MODULE_26__["EditarUsuarioComponent"],
                _pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_20__["HomeUserComponent"],
                _pages_usuarios_gerenciar_gerenciar_usuario_component__WEBPACK_IMPORTED_MODULE_24__["GerenciarUsuarioComponent"],
                _pages_cardapios_gerenciar_cardapio_gerenciar_cardapio_component__WEBPACK_IMPORTED_MODULE_27__["GerenciarCardapioComponent"],
                _pages_cardapios_associar_cardapio_associar_cardapio_component__WEBPACK_IMPORTED_MODULE_29__["AssociarCardapioComponent"],
            ],
            entryComponents: [
                _pages_usuarios_editar_editar_usuario_component__WEBPACK_IMPORTED_MODULE_26__["EditarUsuarioComponent"],
                _pages_cardapios_associar_cardapio_associar_cardapio_component__WEBPACK_IMPORTED_MODULE_29__["AssociarCardapioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["ROUTES"]),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].production }),
            ],
            providers: [
                _provideres_alimento_service__WEBPACK_IMPORTED_MODULE_13__["AlimentoService"],
                _provideres_cardapio_service__WEBPACK_IMPORTED_MODULE_14__["CardapioService"],
                _provideres_usuario_service__WEBPACK_IMPORTED_MODULE_19__["UsuarioService"],
                _provideres_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                _provideres_almoco_service__WEBPACK_IMPORTED_MODULE_22__["AlmocoService"],
                _provideres_agenda_service__WEBPACK_IMPORTED_MODULE_28__["AgendaService"],
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_30__["APP_BASE_HREF"],
                    useValue: '/'
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_cardapios_cardapio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/cardapios/cardapio.component */ "./src/app/pages/cardapios/cardapio.component.ts");
/* harmony import */ var _pages_alimentos_alimentos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/alimentos/alimentos.component */ "./src/app/pages/alimentos/alimentos.component.ts");
/* harmony import */ var _pages_cardapios_novo_cardapio_novo_cardapio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cardapios/novo-cardapio/novo-cardapio.component */ "./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.ts");
/* harmony import */ var _pages_usuarios_novo_novo_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/usuarios/novo/novo-usuario.component */ "./src/app/pages/usuarios/novo/novo-usuario.component.ts");
/* harmony import */ var _pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-user/home-user.component */ "./src/app/pages/home-user/home-user.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_usuarios_gerenciar_gerenciar_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/usuarios/gerenciar/gerenciar-usuario.component */ "./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.ts");
/* harmony import */ var _pages_cardapios_gerenciar_cardapio_gerenciar_cardapio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component */ "./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.ts");









var ROUTES = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'cardapios', component: _pages_cardapios_cardapio_component__WEBPACK_IMPORTED_MODULE_1__["CardapioComponent"] },
    { path: 'cardapios/novo', component: _pages_cardapios_novo_cardapio_novo_cardapio_component__WEBPACK_IMPORTED_MODULE_3__["NovoCardapioComponent"] },
    { path: 'cardapios/gerenciar', component: _pages_cardapios_gerenciar_cardapio_gerenciar_cardapio_component__WEBPACK_IMPORTED_MODULE_8__["GerenciarCardapioComponent"] },
    { path: 'alimentos', component: _pages_alimentos_alimentos_component__WEBPACK_IMPORTED_MODULE_2__["AlimentosComponent"] },
    { path: 'alimentos/novo', component: _pages_alimentos_alimentos_component__WEBPACK_IMPORTED_MODULE_2__["AlimentosComponent"] },
    { path: 'usuarios/novo', component: _pages_usuarios_novo_novo_usuario_component__WEBPACK_IMPORTED_MODULE_4__["NovoUsuarioComponent"] },
    { path: 'usuarios/gerenciar', component: _pages_usuarios_gerenciar_gerenciar_usuario_component__WEBPACK_IMPORTED_MODULE_7__["GerenciarUsuarioComponent"] },
    { path: 'homeuser', component: _pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_5__["HomeUserComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
];


/***/ }),

/***/ "./src/app/pages/alimentos/alimentos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/alimentos/alimentos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb title=\"Alimentos\" titleParent=\"Alimentos\"></app-breadcrumb>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xl-3 col-sm-5 mb-12\" [formGroup]=\"novoForm\">\r\n    <div class=\"input-group mb-3\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Nome</span>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"nome\">\r\n    </div>\r\n\r\n    <div class=\"input-group mb-3\">\r\n      <div class=\"input-group-prepend\">\r\n        <label class=\"input-group-text\">Tipo</label>\r\n      </div>\r\n      <select class=\"custom-select\" formControlName=\"tipo\">\r\n        <option *ngFor=\"let tipo of tipoAlimentos\"\r\n                [value]=\"tipo\">{{ tipo }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"input-group mb-3\">\r\n      <button (click)=\"saveAlimento(novoForm.value)\" [disabled]=\"!novoForm.valid\" type=\"button\" class=\"btn btn-primary text-right\">\r\n        Salvar\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xl-9 col-sm-7 mb-12\">\r\n    <ngb-tabset [justify]=\"'justified'\">\r\n\r\n      <ngb-tab title=\"Proteínas\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"scroll list-group\">\r\n            <a *ngFor=\"let proteina of proteinas$ | async\" class=\"list-group-item d-flex justify-content-between\">\r\n              {{ proteina?.nome }}\r\n              <button type=\"button\" class=\"btn btn-danger text-right\" (click)=\"removerAlimento(proteina._id)\">\r\n                <i class=\"fa fa-remove danger\"></i>\r\n              </button>\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n\r\n      <ngb-tab title=\"Acompanhamentos\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"scroll list-group\">\r\n            <a *ngFor=\"let acompanhamento of acompanhamentos$ | async\" class=\"list-group-item d-flex justify-content-between\">\r\n              {{ acompanhamento?.nome }}\r\n              <button type=\"button\" class=\"btn btn-danger text-right\" (click)=\"removerAlimento(acompanhamento?._id)\">\r\n                <i class=\"fa fa-remove danger\"></i>\r\n              </button>\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n\r\n      <ngb-tab title=\"Saladas\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"scroll list-group\">\r\n            <a *ngFor=\"let salada of saladas$ | async\" class=\"list-group-item d-flex justify-content-between\">\r\n              {{ salada?.nome }}\r\n              <button type=\"button\" class=\"btn btn-danger text-right\" (click)=\"removerAlimento(salada?._id)\">\r\n                <i class=\"fa fa-remove danger\"></i>\r\n              </button>\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n\r\n      <ngb-tab title=\"Sobremesas\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"scroll list-group\">\r\n            <a *ngFor=\"let sobremesa of sobremesas$ | async\" class=\"list-group-item d-flex justify-content-between\">\r\n              {{ sobremesa?.nome }}\r\n              <button type=\"button\" class=\"btn btn-danger text-right\" (click)=\"removerAlimento(sobremesa?._id)\">\r\n                <i class=\"fa fa-remove danger\"></i>\r\n              </button>\r\n            </a>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n\r\n    </ngb-tabset>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/alimentos/alimentos.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/alimentos/alimentos.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsaW1lbnRvcy9hbGltZW50b3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/alimentos/alimentos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/alimentos/alimentos.component.ts ***!
  \********************************************************/
/*! exports provided: AlimentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlimentosComponent", function() { return AlimentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_mocks_tipo_alimentos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/mocks/tipo-alimentos */ "./src/app/shared/mocks/tipo-alimentos.ts");
/* harmony import */ var _provideres_alimento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../provideres/alimento.service */ "./src/app/provideres/alimento.service.ts");







var AlimentosComponent = /** @class */ (function () {
    function AlimentosComponent(modalService, alimentoSevice, fb) {
        this.modalService = modalService;
        this.alimentoSevice = alimentoSevice;
        this.fb = fb;
        this.tipoAlimentos = _shared_mocks_tipo_alimentos__WEBPACK_IMPORTED_MODULE_5__["TIPO_ALIMENTOS"];
    }
    AlimentosComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getAlimentos();
    };
    AlimentosComponent.prototype.initForm = function () {
        this.novoForm = this.fb.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AlimentosComponent.prototype.saveAlimento = function (alimento) {
        var _this = this;
        this.alimentoSevice.newAlimento(alimento)
            .subscribe(function (res) {
            _this.getAlimentos();
            _this.novoForm.reset();
        });
    };
    AlimentosComponent.prototype.removerAlimento = function (id) {
        var _this = this;
        this.alimentoSevice.removeAlimento(id)
            .subscribe(function () { return _this.getAlimentos(); });
    };
    AlimentosComponent.prototype.alertConfirm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    AlimentosComponent.prototype.getAlimentos = function () {
        var filterAlimentoByType = function (tipo) { return function (alimento) { return alimento.tipo === tipo; }; };
        var alimentos$ = this.alimentoSevice.getAlimentos();
        this.proteinas$ = alimentos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (alimentos) { return alimentos.filter(filterAlimentoByType('proteína')); }));
        this.acompanhamentos$ = alimentos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (alimentos) { return alimentos.filter(filterAlimentoByType('acompanhamento')); }));
        this.saladas$ = alimentos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (alimentos) { return alimentos.filter(filterAlimentoByType('salada')); }));
        this.sobremesas$ = alimentos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (alimentos) { return alimentos.filter(filterAlimentoByType('sobremesa')); }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], AlimentosComponent.prototype, "novoForm", void 0);
    AlimentosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alimentos',
            template: __webpack_require__(/*! ./alimentos.component.html */ "./src/app/pages/alimentos/alimentos.component.html"),
            styles: [__webpack_require__(/*! ./alimentos.component.scss */ "./src/app/pages/alimentos/alimentos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _provideres_alimento_service__WEBPACK_IMPORTED_MODULE_6__["AlimentoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AlimentosComponent);
    return AlimentosComponent;
}());



/***/ }),

/***/ "./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-7\">\r\n    <div class=\"list-group scrollbar m-3\" id=\"style-1\" *ngIf=\"(cardapios$ | async)?.length > 0\">\r\n      <h4 class=\"modal-title\">Associar Cardápio</h4>\r\n      <a class=\"list-group-item list-group-item-action\" *ngFor=\"let cardapio of cardapios$ | async\">\r\n        {{ cardapio?.nome }}\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-5 p-2 background\">\r\n    <h3>{{ diaSelecionado.diaDaSemana }}</h3>\r\n    <hr>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  width: 98%;\n  color: #fff;\n  background-color: #fff;\n  height: 1.5px; }\n\n.modal {\n  max-height: 400px; }\n\n.background {\n  padding: 40px;\n  border-radius: 0px 5px 5px 0px;\n  background-color: #c0bebe !important;\n  font-style: bold;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZGFwaW9zL2Fzc29jaWFyLWNhcmRhcGlvL0M6XFxVc2Vyc1xcZmVsaXBlLmZyYW5jaXNjaGV0dG9cXHdvcmtzcGFjZVxccG9ydGFsLW1lYXRcXHBvcnRhbC1tZWF0L3NyY1xcYXBwXFxwYWdlc1xcY2FyZGFwaW9zXFxhc3NvY2lhci1jYXJkYXBpb1xcYXNzb2NpYXItY2FyZGFwaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyZGFwaW9zL2Fzc29jaWFyLWNhcmRhcGlvL2Fzc29jaWFyLWNhcmRhcGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xyXG4gIHdpZHRoOiA5OCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDEuNXB4O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYmViZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AssociarCardapioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociarCardapioComponent", function() { return AssociarCardapioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _provideres_cardapio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../provideres/cardapio.service */ "./src/app/provideres/cardapio.service.ts");




var AssociarCardapioComponent = /** @class */ (function () {
    function AssociarCardapioComponent(modalActive, cardapioService) {
        this.modalActive = modalActive;
        this.cardapioService = cardapioService;
    }
    AssociarCardapioComponent.prototype.ngOnInit = function () {
        this.getCardapios();
    };
    AssociarCardapioComponent.prototype.getCardapios = function () {
        this.cardapios$ = this.cardapioService.getCardapios();
    };
    AssociarCardapioComponent.prototype.close = function () {
        this.modalActive.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssociarCardapioComponent.prototype, "diaSelecionado", void 0);
    AssociarCardapioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-associar-cardapio',
            template: __webpack_require__(/*! ./associar-cardapio.component.html */ "./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.html"),
            styles: [__webpack_require__(/*! ./associar-cardapio.component.scss */ "./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _provideres_cardapio_service__WEBPACK_IMPORTED_MODULE_3__["CardapioService"]])
    ], AssociarCardapioComponent);
    return AssociarCardapioComponent;
}());



/***/ }),

/***/ "./src/app/pages/cardapios/cardapio.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/cardapios/cardapio.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb title=\"Novo\" titleParent=\"Cardapio\"></app-breadcrumb>\r\n\r\n<div [formGroup]=\"cardapioForm\" class=\"form-row\">\r\n  <div class=\"col-4\">\r\n\r\n    <div class=\"form-group col-md-12\">\r\n      <label for=\"inputState\">Proteína</label>\r\n      <select formControlName=\"proteinas\" class=\"form-control\">\r\n        <option *ngFor=\"let proteina of proteinas\"\r\n                [value]=\"proteina.name\">{{ proteina.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-12\">\r\n      <label for=\"inputState\">Guarnição</label>\r\n      <select formControlName=\"acompanhamentos\" class=\"form-control\">\r\n        <option *ngFor=\"let acompanhamento of acompanhamentos\"\r\n                [value]=\"acompanhamento.name\">{{ acompanhamento.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-12\">\r\n      <label for=\"inputState\">Legume</label>\r\n      <select formControlName=\"legumes\" class=\"form-control\">\r\n        <option *ngFor=\"let legume of legumes\"\r\n                [value]=\"legume.name\">{{ legume.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-12\">\r\n      <label for=\"inputState\">Salada</label>\r\n      <select formControlName=\"saladas\" class=\"form-control\">\r\n        <option *ngFor=\"let salada of saladas\"\r\n                [value]=\"salada.name\">{{ salada.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-12\">\r\n      <label for=\"inputState\">Sobremesa</label>\r\n      <select  formControlName=\"sobremesas\" class=\"form-control\">\r\n        <option *ngFor=\"let sobremesa of sobremesas\"\r\n                [value]=\"sobremesa.name\">{{ sobremesa.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/cardapios/cardapio.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/cardapios/cardapio.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmRhcGlvcy9jYXJkYXBpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cardapios/cardapio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cardapios/cardapio.component.ts ***!
  \*******************************************************/
/*! exports provided: CardapioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapioComponent", function() { return CardapioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _provideres_alimento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provideres/alimento.service */ "./src/app/provideres/alimento.service.ts");




var CardapioComponent = /** @class */ (function () {
    function CardapioComponent(fb, alimentoService) {
        this.fb = fb;
        this.alimentoService = alimentoService;
    }
    CardapioComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getAlimentos();
    };
    CardapioComponent.prototype.initForm = function () {
        this.cardapioForm = this.fb.group({
            proteinas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sobremesas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            acompanhamentos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            legumes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            saladas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CardapioComponent.prototype.getAlimentos = function () {
        var _this = this;
        this.alimentoService.getAlimentos()
            .subscribe(function (alimentos) {
            _this.proteinas = alimentos.filter(function (alimento) { return alimento.tipo === 'proteina'; });
            _this.acompanhamentos = alimentos.filter(function (alimento) { return alimento.tipo === 'acompanhamento'; });
            _this.legumes = alimentos.filter(function (alimento) { return alimento.tipo === 'legume'; });
            _this.saladas = alimentos.filter(function (alimento) { return alimento.tipo === 'salada'; });
            _this.sobremesas = alimentos.filter(function (alimento) { return alimento.tipo === 'sobremesa'; });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], CardapioComponent.prototype, "cardapioForm", void 0);
    CardapioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cardapio',
            template: __webpack_require__(/*! ./cardapio.component.html */ "./src/app/pages/cardapios/cardapio.component.html"),
            styles: [__webpack_require__(/*! ./cardapio.component.scss */ "./src/app/pages/cardapios/cardapio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _provideres_alimento_service__WEBPACK_IMPORTED_MODULE_3__["AlimentoService"]])
    ], CardapioComponent);
    return CardapioComponent;
}());



/***/ }),

/***/ "./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb title=\"Gerenciar\" titleParent=\"Cardápios\"></app-breadcrumb>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-9\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"fa fa-edit\"></i> Cardapios\r\n      </div>\r\n      <div class=\"scrollbar mt-3\" id=\"style-1\">\r\n        <div class=\"pt-4 list-group-item text-center\" *ngIf=\"(cardapios$ | async)?.length < 1\">\r\n          <p class=\"text-secondary\">Não há cardápio cadastrado!</p>\r\n        </div>\r\n        <div class=\" list-group\" *ngIf=\"(cardapios$ | async)?.length > 0\">\r\n          <a *ngFor=\"let cardapio of cardapios$ | async\" class=\"list-group-item d-flex justify-content-between\">\r\n            {{ cardapio?.nome }}\r\n            <button type=\"button\" class=\"btn btn-light text-right\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"fa fa-edit\"></i> Dias da Semana\r\n      </div>\r\n      <div class=\"mt-3\">\r\n        <div class=\" list-group\" *ngIf=\"(cardapios$ | async)?.length > 0\">\r\n          <a *ngFor=\"let agendado of agendados$ | async\" class=\"list-group-item d-flex justify-content-between\">\r\n            {{ agendado.diaDaSemana }}\r\n            <p>{{ agendado.cardapio }}</p>\r\n            <button type=\"button\" class=\"btn btn-light text-right\" (click)=\"openEditar(agendado)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  max-height: 60vh !important;\n  min-height: 60vh !important; }\n\n.scrollbar {\n  float: left;\n  min-height: 48vh;\n  max-height: 48vh;\n  padding: none;\n  width: 100%;\n  overflow-y: scroll; }\n\n#style-1::-webkit-scrollbar {\n  width: 2px; }\n\n#style-1::-webkit-scrollbar-thumb {\n  background-color: #828282; }\n\n#style-1::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px #828282 214, 100, 199, 0.3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZGFwaW9zL2dlcmVuY2lhci1jYXJkYXBpby9DOlxcVXNlcnNcXGZlbGlwZS5mcmFuY2lzY2hldHRvXFx3b3Jrc3BhY2VcXHBvcnRhbC1tZWF0XFxwb3J0YWwtbWVhdC9zcmNcXGFwcFxccGFnZXNcXGNhcmRhcGlvc1xcZ2VyZW5jaWFyLWNhcmRhcGlvXFxnZXJlbmNpYXItY2FyZGFwaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSw0REFBNEQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmRhcGlvcy9nZXJlbmNpYXItY2FyZGFwaW8vZ2VyZW5jaWFyLWNhcmRhcGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1pbi1oZWlnaHQ6IDQ4dmg7XHJcbiAgbWF4LWhlaWdodDogNDh2aDtcclxuICBwYWRkaW5nOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4jc3R5bGUtMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAycHg7XHJcbn1cclxuI3N0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyO1xyXG59XHJcbiNzdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICM4MjgyODIoMjE0LCAxMDAsIDE5OSwgMC4zKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.ts ***!
  \************************************************************************************/
/*! exports provided: GerenciarCardapioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerenciarCardapioComponent", function() { return GerenciarCardapioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provideres_cardapio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../provideres/cardapio.service */ "./src/app/provideres/cardapio.service.ts");
/* harmony import */ var _provideres_agenda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../provideres/agenda.service */ "./src/app/provideres/agenda.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _associar_cardapio_associar_cardapio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../associar-cardapio/associar-cardapio.component */ "./src/app/pages/cardapios/associar-cardapio/associar-cardapio.component.ts");






var GerenciarCardapioComponent = /** @class */ (function () {
    function GerenciarCardapioComponent(cardapioService, agendaService, modalService) {
        this.cardapioService = cardapioService;
        this.agendaService = agendaService;
        this.modalService = modalService;
        this.optionsModal = {
            size: 'lg'
        };
    }
    GerenciarCardapioComponent.prototype.ngOnInit = function () {
        this.getCardapios();
        this.getAgendados();
    };
    GerenciarCardapioComponent.prototype.getAgendados = function () {
        this.agendados$ = this.agendaService.getAgendados();
    };
    GerenciarCardapioComponent.prototype.getCardapios = function () {
        this.cardapios$ = this.cardapioService.getCardapios();
    };
    GerenciarCardapioComponent.prototype.openEditar = function (dia) {
        this.diaDaSemanaSelecionado = dia;
        var instance = this.modalService.open(_associar_cardapio_associar_cardapio_component__WEBPACK_IMPORTED_MODULE_5__["AssociarCardapioComponent"], this.optionsModal);
        instance.componentInstance.diaSelecionado = dia;
    };
    GerenciarCardapioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gerenciar-cardapio',
            template: __webpack_require__(/*! ./gerenciar-cardapio.component.html */ "./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.html"),
            styles: [__webpack_require__(/*! ./gerenciar-cardapio.component.scss */ "./src/app/pages/cardapios/gerenciar-cardapio/gerenciar-cardapio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provideres_cardapio_service__WEBPACK_IMPORTED_MODULE_2__["CardapioService"],
            _provideres_agenda_service__WEBPACK_IMPORTED_MODULE_3__["AgendaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], GerenciarCardapioComponent);
    return GerenciarCardapioComponent;
}());



/***/ }),

/***/ "./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb titleParent=\"Cardapio\" title=\"Novo\"></app-breadcrumb>\r\n\r\n<div [formGroup]=\"cardapioForm\" class=\"row\">\r\n\r\n  <!--Início cadastro de Cardápios-->\r\n  <div class=\"col-xl-9 mb-3\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header mb-3\">\r\n        <i class=\"fa fa-bar-chart\"></i> Novo Carádpio\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n        <div formArrayName=\"proteinas\" class=\"col-xl-6 col-sm-6 mb-3\">\r\n          <div class=\"col-12\">\r\n            <label class=\"mt-2\" for=\"inputState\">Proteína</label>\r\n            <button class=\"btn btn-success pull-right mb-2\" (click)=\"addAlimento('proteinas')\">\r\n              <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"pt-2\" *ngFor=\"let item of cardapioForm.controls['proteinas'].controls; index as i\">\r\n            <div>\r\n              <div class=\"input-group col-md-12\">\r\n                <select class=\"form-control\" [formControlName]='i'>\r\n                  <option *ngFor=\"let proteina of proteinas$ | async\" [ngValue]=\"proteina\">\r\n                    {{ proteina.nome }}\r\n                  </option>\r\n                </select>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-danger\" (click)=\"removeAlimento('proteinas', i)\">\r\n                    <i class=\"fa fa-close\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div formArrayName=\"acompanhamentos\" class=\"col-xl-6 col-sm-6 mb-3\">\r\n          <div class=\"col-12\">\r\n            <label class=\"mt-2\" for=\"inputState\">Acompanhamento</label>\r\n            <button class=\"btn btn-success pull-right mb-2\" (click)=\"addAlimento('acompanhamentos')\">\r\n              <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"pt-2\" *ngFor=\"let item of cardapioForm.controls['acompanhamentos'].controls; index as i\">\r\n            <div>\r\n              <div class=\"input-group col-md-12\">\r\n                <select class=\"form-control\" [formControlName]='i'>\r\n                  <option *ngFor=\"let acompanhamento of acompanhamentos$ | async\" [ngValue]=\"acompanhamento\">\r\n                    {{ acompanhamento.nome }}\r\n                  </option>\r\n                </select>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-danger\" (click)=\"removeAlimento('acompanhamentos', i)\">\r\n                    <i class=\"fa fa-close\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div formArrayName=\"saladas\" class=\"col-xl-6 col-sm-6 mb-3\">\r\n          <div class=\"col-12\">\r\n            <label class=\"mt-2\" for=\"inputState\">Salada</label>\r\n            <button class=\"btn btn-success pull-right mb-2\" (click)=\"addAlimento('saladas')\">\r\n              <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"pt-2\" *ngFor=\"let item of cardapioForm.controls['saladas'].controls; index as i\">\r\n            <div>\r\n              <div class=\"input-group col-md-12\">\r\n                <select class=\"form-control\" [formControlName]='i'>\r\n                  <option *ngFor=\"let salada of saladas$ | async\" [ngValue]=\"salada\">\r\n                    {{ salada.nome }}\r\n                  </option>\r\n                </select>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-danger\" (click)=\"removeAlimento('saladas', i)\">\r\n                    <i class=\"fa fa-close\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div formArrayName=\"sobremesas\" class=\"col-xl-6 col-sm-6 mb-3\">\r\n          <div class=\"col-12\">\r\n            <label class=\"mt-2\" for=\"inputState\">Sobremesas</label>\r\n            <button class=\"btn btn-success pull-right mb-2\" (click)=\"addAlimento('sobremesas')\">\r\n              <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"pt-2\" *ngFor=\"let item of cardapioForm.controls['sobremesas'].controls; index as i\">\r\n            <div>\r\n              <div class=\"input-group col-md-12\">\r\n                <select class=\"form-control\" [formControlName]='i'>\r\n                  <option *ngFor=\"let sobremesa of sobremesas$ | async\" [ngValue]=\"sobremesa\">\r\n                    {{ sobremesa.nome }}\r\n                  </option>\r\n                </select>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-danger\" (click)=\"removeAlimento('sobremesas', i)\">\r\n                    <i class=\"fa fa-close\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n          <button class=\"btn btn-success mt-2 ml-3\" (click)=\"saveCardapio(cardapioForm.value)\">Salvar</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--Fim cadastro de Cardápios-->\r\n\r\n  <!--Início lista de Cardápios-->\r\n  <div class=\"col-xl-3 mb-3\">\r\n    <div class=\"card mb-3\">\r\n      <div class=\"card-header\">\r\n        <i class=\"fa fa-bar-chart\"></i> Cardapios</div>\r\n      <div class=\"list-group list-group-flush small scrollbar\" id=\"style-1\">\r\n        <div *ngIf=\"(cardapios$ | async)?.length < 1\" class=\"text-center m-5\">\r\n          CARREGANDO...\r\n        </div>\r\n        <div *ngFor=\"let cardapio of cardapios$ | async\">\r\n          <a class=\"list-group-item list-group-item-action\">\r\n            {{ cardapio.nome }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--Fim lista de Cardápios-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  font-style: bold;\n  text-transform: uppercase; }\n\n.card {\n  max-height: 60vh !important;\n  min-height: 60vh !important; }\n\n.scrollbar {\n  float: left;\n  min-height: 48vh;\n  max-height: 48vh;\n  padding: none;\n  width: 100%;\n  overflow-y: scroll; }\n\n#style-1::-webkit-scrollbar {\n  width: 2px; }\n\n#style-1::-webkit-scrollbar-thumb {\n  background-color: #828282; }\n\n#style-1::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px #828282 214, 100, 199, 0.3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZGFwaW9zL25vdm8tY2FyZGFwaW8vQzpcXFVzZXJzXFxmZWxpcGUuZnJhbmNpc2NoZXR0b1xcd29ya3NwYWNlXFxwb3J0YWwtbWVhdFxccG9ydGFsLW1lYXQvc3JjXFxhcHBcXHBhZ2VzXFxjYXJkYXBpb3NcXG5vdm8tY2FyZGFwaW9cXG5vdm8tY2FyZGFwaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsMkJBQTJCO0VBQzNCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsNERBQTRELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJkYXBpb3Mvbm92by1jYXJkYXBpby9ub3ZvLWNhcmRhcGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1pbi1oZWlnaHQ6IDQ4dmg7XHJcbiAgbWF4LWhlaWdodDogNDh2aDtcclxuICBwYWRkaW5nOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4jc3R5bGUtMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAycHg7XHJcbn1cclxuI3N0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyO1xyXG59XHJcbiNzdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICM4MjgyODIoMjE0LCAxMDAsIDE5OSwgMC4zKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.ts ***!
  \**************************************************************************/
/*! exports provided: NovoCardapioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoCardapioComponent", function() { return NovoCardapioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _provideres_alimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../provideres/alimento.service */ "./src/app/provideres/alimento.service.ts");
/* harmony import */ var _provideres_cardapio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../provideres/cardapio.service */ "./src/app/provideres/cardapio.service.ts");






var NovoCardapioComponent = /** @class */ (function () {
    function NovoCardapioComponent(fb, alimentoService, cardapioService) {
        this.fb = fb;
        this.alimentoService = alimentoService;
        this.cardapioService = cardapioService;
    }
    NovoCardapioComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getAlimentos();
        this.getCardapios();
    };
    NovoCardapioComponent.prototype.initForm = function () {
        this.cardapioForm = this.fb.group({
            acompanhamentos: this.fb.array([this.createAlimento()], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            proteinas: this.fb.array([this.createAlimento()], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sobremesas: this.fb.array([this.createAlimento()]),
            saladas: this.fb.array([this.createAlimento()]),
        });
    };
    NovoCardapioComponent.prototype.addAlimento = function (tipo) {
        var formArray = this.cardapioForm.get(tipo);
        formArray.push(this.createAlimento());
    };
    NovoCardapioComponent.prototype.removeAlimento = function (tipo, index) {
        var formArray = this.cardapioForm.get(tipo);
        formArray.removeAt(index);
    };
    NovoCardapioComponent.prototype.createAlimento = function () {
        return this.fb.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    };
    NovoCardapioComponent.prototype.getAlimentos = function () {
        var filterAlimentoByType = function (tipo) { return function (alimento) { return alimento.tipo === tipo; }; };
        var alimentos$ = this.alimentoService.getAlimentos();
        this.proteinas$ = alimentos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (alimentos) { return alimentos.filter(filterAlimentoByType('proteína')); }));
        this.acompanhamentos$ = alimentos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (alimentos) { return alimentos.filter(filterAlimentoByType('acompanhamento')); }));
        this.saladas$ = alimentos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (alimentos) { return alimentos.filter(filterAlimentoByType('salada')); }));
        this.sobremesas$ = alimentos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (alimentos) { return alimentos.filter(filterAlimentoByType('sobremesa')); }));
    };
    NovoCardapioComponent.prototype.getCardapios = function () {
        this.cardapios$ = this.cardapioService.getCardapios();
    };
    NovoCardapioComponent.prototype.parseCardapio = function (cardapio) {
        var cardapios = {
            nome: cardapio.proteinas[0].nome,
            alimentos: cardapio.proteinas.concat(cardapio.acompanhamentos, cardapio.saladas, cardapio.sobremesas)
        };
        return cardapios;
    };
    NovoCardapioComponent.prototype.saveCardapio = function (cardapio) {
        var _this = this;
        var cardapioParse = this.parseCardapio(cardapio);
        this.cardapioService.newCardapio(cardapioParse).subscribe(function () { return _this.cardapioService.getCardapios(); });
        this.getCardapios();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], NovoCardapioComponent.prototype, "cardapioForm", void 0);
    NovoCardapioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-novo-cardapio',
            template: __webpack_require__(/*! ./novo-cardapio.component.html */ "./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.html"),
            styles: [__webpack_require__(/*! ./novo-cardapio.component.scss */ "./src/app/pages/cardapios/novo-cardapio/novo-cardapio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _provideres_alimento_service__WEBPACK_IMPORTED_MODULE_4__["AlimentoService"],
            _provideres_cardapio_service__WEBPACK_IMPORTED_MODULE_5__["CardapioService"]])
    ], NovoCardapioComponent);
    return NovoCardapioComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-user/home-user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-user/home-user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb title=\"Home\" titleParent=\"Home\"></app-breadcrumb>\r\n\r\n<p>\r\n  <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseToggle\" aria-expanded=\"false\"\r\n    aria-controls=\"collapseToggle\">\r\n    Outra Proteína\r\n  </button>\r\n</p>\r\n\r\n<div class=\"collapse\" id=\"collapseToggle\">\r\n  <div class=\"col-3\">\r\n    <div class=\"input-group\">\r\n      <select class=\"form-control\">\r\n        <option *ngFor=\"let proteina of opcoesProteina\">\r\n          {{ proteina }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row pt-3\">\r\n  <div class=\"col-lg-8\">\r\n    <div class=\"card mb-3\">\r\n      <div class=\"card-header\">\r\n        <i class=\"fa fa-bar-chart\"></i> Prato do dia - Segunda\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12  my-auto\">\r\n            <div class=\"h4 mb-0 text-danger\">Proteína</div>\r\n            <div class=\"small text-muted pl-2\">Bife Acebolado</div>\r\n            <hr>\r\n            <div class=\"h4 mb-0 text-primary\">Acompanhamento</div>\r\n            <div class=\"small text-muted pl-2\">Arroz, Feijão e Purê de batata</div>\r\n            <hr>\r\n            <div class=\"h4 mb-0 text-warning\">Legumes</div>\r\n            <div class=\"small text-muted pl-2\">Vagem, Cenoura e Brócolis</div>\r\n            <hr>\r\n            <div class=\"h4 mb-0 text-success\">Salada</div>\r\n            <div class=\"small text-muted pl-2\">Alface, Tomate, Cebola</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer small text-muted\">Atualizado hoje as 14:59 PM</div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"col-lg-4\">\r\n  <div class=\"card mb-3\">\r\n    <div class=\"card-header\">\r\n      <i class=\"fa fa-bell-o\"></i> Cardapios</div>\r\n    <div class=\"list-group list-group-flush small\">\r\n      <a class=\"list-group-item list-group-item-action\" href=\"#\">\r\n        <div class=\"media\">\r\n          <div class=\"media-body\">\r\n            <strong>Segunda</strong> - Omelete\r\n            <div class=\"text-muted smaller\">Hoje as 8:43 - 7m atrás</div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <a class=\"list-group-item list-group-item-action\" href=\"#\">\r\n        <div class=\"media\">\r\n          <div class=\"media-body\">\r\n            <strong>Terça</strong> - Filé de Frango\r\n            <div class=\"text-muted smaller\">Hoje as 8:43 - 7m atrás</div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <a class=\"list-group-item list-group-item-action\" href=\"#\">\r\n        <div class=\"media\">\r\n          <div class=\"media-body\">\r\n            <strong>Quarta</strong> - Bife Acebolado\r\n            <div class=\"text-muted smaller\">Hoje as 8:43 - 7m atrás</div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <a class=\"list-group-item list-group-item-action\" href=\"#\">\r\n        <div class=\"media\">\r\n          <div class=\"media-body\">\r\n            <strong>Quinta</strong> - Macarronada\r\n            <div class=\"text-muted smaller\">Hoje as 8:43 - 7m atrás</div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <a class=\"list-group-item list-group-item-action\" href=\"#\">\r\n        <div class=\"media\">\r\n          <div class=\"media-body\">\r\n            <strong>Sexta</strong> - Strogonoff de Frango\r\n            <div class=\"text-muted smaller\">Hoje as 8:43 - 7m atrás</div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <div class=\"card-footer small text-muted\">Atualizado hoje as 14:59 PM</div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home-user/home-user.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-user/home-user.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtdXNlci9ob21lLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/home-user/home-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-user/home-user.component.ts ***!
  \********************************************************/
/*! exports provided: HomeUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeUserComponent", function() { return HomeUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_mocks_opcao_proteina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/mocks/opcao-proteina */ "./src/app/shared/mocks/opcao-proteina.ts");



var HomeUserComponent = /** @class */ (function () {
    function HomeUserComponent() {
        this.opcoesProteina = _shared_mocks_opcao_proteina__WEBPACK_IMPORTED_MODULE_2__["OPCOES_PROTEINAS"];
    }
    HomeUserComponent.prototype.ngOnInit = function () {
        console.log(this.opcoesProteina);
    };
    HomeUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-user',
            template: __webpack_require__(/*! ./home-user.component.html */ "./src/app/pages/home-user/home-user.component.html"),
            styles: [__webpack_require__(/*! ./home-user.component.scss */ "./src/app/pages/home-user/home-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeUserComponent);
    return HomeUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb title=\"Home\" titleParent=\"Home\"></app-breadcrumb>\r\n\r\n<app-metricas-card></app-metricas-card>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-8\">\r\n    <app-prato-do-dia [cardapio]=\"cardapioAssociado\"></app-prato-do-dia>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <app-notification-card></app-notification-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provideres_almoco_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provideres/almoco.service */ "./src/app/provideres/almoco.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(almocoService) {
        this.almocoService = almocoService;
        this.hoje = new Date();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCardapioAssociado()
            .subscribe(function (res) {
            _this.cardapioAssociado = _this.parseCardapio(res);
        });
    };
    HomeComponent.prototype.getCardapioAssociado = function () {
        return this.almocoService
            .getCardapioDoDia(this.hoje.getDay().toString());
    };
    HomeComponent.prototype.parseCardapio = function (cardapio) {
        var filterAlimentoByType = function (tipo) { return function (alimento) { return alimento.tipo === tipo; }; };
        var parse = {
            diaSemana: cardapio.diaSemana,
            proteinas: cardapio.cardapio.alimentos.filter(filterAlimentoByType('proteína')),
            acompanhamentos: cardapio.cardapio.alimentos.filter(filterAlimentoByType('acompanhamento')),
            saladas: cardapio.cardapio.alimentos.filter(filterAlimentoByType('salada')),
            sobremesas: cardapio.cardapio.alimentos.filter(filterAlimentoByType('sobremesa')),
        };
        return parse;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provideres_almoco_service__WEBPACK_IMPORTED_MODULE_2__["AlmocoService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/metricas-card/metricas-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/home/metricas-card/metricas-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n    <div class=\"card text-white bg-success o-hidden h-100\">\r\n      <div class=\"card-body\">\r\n        <div class=\"mr-5\">{{ (funcioariosAtivos$ | async)?.length }} Almoços</div>\r\n      </div>\r\n      <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n        <span class=\"float-left\">View Details</span>\r\n        <span class=\"float-right\">\r\n          <i class=\"fa fa-angle-right\"></i>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n    <div class=\"card text-white bg-primary o-hidden h-100\">\r\n      <div class=\"card-body\">\r\n        <div class=\"mr-5\">{{ (outraProteina$ | async)?.length }} Outra Proteína</div>\r\n      </div>\r\n      <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n        <span class=\"float-left\">View Details</span>\r\n        <span class=\"float-right\">\r\n          <i class=\"fa fa-angle-right\"></i>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n    <div class=\"card text-white bg-warning o-hidden h-100\">\r\n      <div class=\"card-body\">\r\n        <div class=\"mr-5\">{{ (semProteina$ | async)?.length }} Sem Proteína</div>\r\n      </div>\r\n      <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n        <span class=\"float-left\">View Details</span>\r\n        <span class=\"float-right\">\r\n          <i class=\"fa fa-angle-right\"></i>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n    <div class=\"card text-white bg-danger o-hidden h-100\">\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"mr-5\">{{ (naoAlmocaram$ | async)?.length }} Não Vão Almoçar</div>\r\n      </div>\r\n      <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n        <span class=\"float-left\">View Details</span>\r\n        <span class=\"float-right\">\r\n          <i class=\"fa fa-angle-right\"></i>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/metricas-card/metricas-card.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/home/metricas-card/metricas-card.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbWV0cmljYXMtY2FyZC9tZXRyaWNhcy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/metricas-card/metricas-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/metricas-card/metricas-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: MetricasCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricasCardComponent", function() { return MetricasCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _provideres_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../provideres/usuario.service */ "./src/app/provideres/usuario.service.ts");
/* harmony import */ var _provideres_almoco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../provideres/almoco.service */ "./src/app/provideres/almoco.service.ts");





var MetricasCardComponent = /** @class */ (function () {
    function MetricasCardComponent(usuarioService, almocoService) {
        this.usuarioService = usuarioService;
        this.almocoService = almocoService;
    }
    MetricasCardComponent.prototype.ngOnInit = function () {
        this.getDataHoje();
        this.getFuncionarios();
        this.getFuncionariosAtivos();
        this.getAlteracoes();
    };
    MetricasCardComponent.prototype.getFuncionarios = function () {
        this.funcionarios$ = this.usuarioService.getUsuarios();
    };
    MetricasCardComponent.prototype.getFuncionariosAtivos = function () {
        var filtroPorEstado = function (tipo) { return function (usuario) { return usuario.estado === tipo; }; };
        this.funcioariosAtivos$ = this.funcionarios$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (usuario) { return usuario.filter(filtroPorEstado('ativo')); }));
    };
    MetricasCardComponent.prototype.getAlteracoes = function () {
        this.alteracoes$ = this.almocoService.getAlteracoesPorData(this.getDataHoje());
        this.alteracoes$.subscribe(function (res) { return console.log(res); });
    };
    MetricasCardComponent.prototype.getDataHoje = function () {
        this.hoje = new Date();
    };
    MetricasCardComponent.prototype.getAlteracoesPorTipo = function () {
        var filtroPorTipo = function (opcao) { return function (alteracao) { return alteracao.opcao === opcao; }; };
        this.outraProteina$ = this.alteracoes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (alteracao) { return alteracao.filter(filtroPorTipo('outra proteína')); }));
        this.semProteina$ = this.alteracoes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (alteracao) { return alteracao.filter(filtroPorTipo('sem proteína')); }));
        this.naoAlmocaram$ = this.alteracoes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (alteracao) { return alteracao.filter(filtroPorTipo('não almoçaram')); }));
    };
    MetricasCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metricas-card',
            template: __webpack_require__(/*! ./metricas-card.component.html */ "./src/app/pages/home/metricas-card/metricas-card.component.html"),
            styles: [__webpack_require__(/*! ./metricas-card.component.scss */ "./src/app/pages/home/metricas-card/metricas-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provideres_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _provideres_almoco_service__WEBPACK_IMPORTED_MODULE_4__["AlmocoService"]])
    ], MetricasCardComponent);
    return MetricasCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/notification-card/notification-card.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/home/notification-card/notification-card.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n  <div class=\"card-header\">\r\n    <i class=\"fa fa-bell-o\"></i> Notificações</div>\r\n  <div class=\"list-group list-group-flush small\">\r\n    <a class=\"list-group-item list-group-item-action\" href=\"#\">\r\n      <div class=\"media\">\r\n        <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/45x45\" alt=\"\">\r\n        <div class=\"media-body\">\r\n          <strong>Maria</strong> ovo frito por favor!\r\n          <div class=\"text-muted smaller\">Hoje as 8:43 - 7m atrás</div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n    <a class=\"list-group-item list-group-item-action\" href=\"#\">\r\n      <div class=\"media\">\r\n        <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/45x45\" alt=\"\">\r\n        <div class=\"media-body\">\r\n          <strong>Leandro</strong> ovo frito por favor!\r\n          <div class=\"text-muted smaller\">Hoje as 8:43 - 7m atrás</div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n    <a class=\"list-group-item list-group-item-action\" href=\"#\">\r\n      <div class=\"media\">\r\n        <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/45x45\" alt=\"\">\r\n        <div class=\"media-body\">\r\n          <strong>Natali</strong> não quero mistura!\r\n          <div class=\"text-muted smaller\">Hoje as 8:43 - 7m atrás</div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n\r\n    <a class=\"list-group-item list-group-item-action\" href=\"#\">Ver mais atividades...</a>\r\n\r\n  </div>\r\n  <div class=\"card-footer small text-muted\">Atualizado hoje as 14:59 PM</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/notification-card/notification-card.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/home/notification-card/notification-card.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbm90aWZpY2F0aW9uLWNhcmQvbm90aWZpY2F0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/home/notification-card/notification-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/home/notification-card/notification-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NotificationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCardComponent", function() { return NotificationCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationCardComponent = /** @class */ (function () {
    function NotificationCardComponent() {
    }
    NotificationCardComponent.prototype.ngOnInit = function () {
    };
    NotificationCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-card',
            template: __webpack_require__(/*! ./notification-card.component.html */ "./src/app/pages/home/notification-card/notification-card.component.html"),
            styles: [__webpack_require__(/*! ./notification-card.component.scss */ "./src/app/pages/home/notification-card/notification-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationCardComponent);
    return NotificationCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/prato-do-dia/prato-do-dia..component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/home/prato-do-dia/prato-do-dia..component.ts ***!
  \********************************************************************/
/*! exports provided: PratoDoDiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PratoDoDiaComponent", function() { return PratoDoDiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PratoDoDiaComponent = /** @class */ (function () {
    // alterar o nome da classe por prato do dia!
    function PratoDoDiaComponent() {
    }
    PratoDoDiaComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PratoDoDiaComponent.prototype, "cardapio", void 0);
    PratoDoDiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prato-do-dia',
            template: __webpack_require__(/*! ./prato-do-dia.component.html */ "./src/app/pages/home/prato-do-dia/prato-do-dia.component.html"),
            styles: [__webpack_require__(/*! ./prato-do-dia.component.scss */ "./src/app/pages/home/prato-do-dia/prato-do-dia.component.scss")]
        })
        // alterar o nome da classe por prato do dia!
    ], PratoDoDiaComponent);
    return PratoDoDiaComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/prato-do-dia/prato-do-dia.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/prato-do-dia/prato-do-dia.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n  <div class=\"card-header\">\r\n    <i class=\"fa fa-bar-chart\"></i> Prato do dia - {{ cardapio?.diaSemana }}</div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12  my-auto\">\r\n        <div class=\"h4 mb-0 text-danger\">Proteina</div>\r\n        <div class=\"small text-muted pl-2\" *ngFor=\"let proteina of cardapio?.proteinas\">\r\n          - {{ proteina.nome }}\r\n        </div>\r\n        <hr>\r\n        <div class=\"h4 mb-0 text-primary\">Acompanhamento</div>\r\n        <div class=\"small text-muted pl-2\" *ngFor=\"let acompanhamento of cardapio?.acompanhamentos\">\r\n          - {{ acompanhamento.nome }}\r\n        </div>\r\n        <hr>\r\n        <div class=\"h4 mb-0 text-warning\">Salada</div>\r\n        <div class=\"small text-muted pl-2\" *ngFor=\"let salada of cardapio?.saladas\">\r\n          - {{ salada.nome }}\r\n        </div>\r\n        <hr>\r\n        <div class=\"h4 mb-0 text-success\">Sobremesa</div>\r\n        <div class=\"small text-muted pl-2\" *ngFor=\"let sobremesa of cardapio?.sobremesas\" >\r\n          - {{ sobremesa.nome }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer small text-muted\">Atualizado hoje as 14:59 PM</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/prato-do-dia/prato-do-dia.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/prato-do-dia/prato-do-dia.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcHJhdG8tZG8tZGlhL3ByYXRvLWRvLWRpYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-dark\">\r\n  <div class=\"card card-login mx-auto mt-5\">\r\n    <div class=\"card-header\">Login</div>\r\n    <div class=\"card-body\">\r\n\r\n      <div [formGroup]=\"loginForm\">\r\n        <div class=\"form-group\">\r\n          <label>Usuário</label>\r\n          <input class=\"form-control\" formControlName=\"username\" type=\"email\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Senha</label>\r\n          <input class=\"form-control\" formControlName=\"password\" type=\"password\">\r\n        </div>\r\n      </div>\r\n\r\n      <a class=\"btn btn-primary btn-block\" (click)=\"login()\">Entrar</a>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: auto !important;\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxmZWxpcGUuZnJhbmNpc2NoZXR0b1xcd29ya3NwYWNlXFxwb3J0YWwtbWVhdFxccG9ydGFsLW1lYXQvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _provideres_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provideres/auth.service */ "./src/app/provideres/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginComponent.prototype.initForm = function () {
        this.loginForm = this.fb.group({
            username: '',
            password: '',
        });
    };
    LoginComponent.prototype.login = function () {
        this.authService.fazerLogin(this.loginForm.value);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _provideres_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/usuarios/editar/editar-usuario.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/usuarios/editar/editar-usuario.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Editar</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n\r\n<div class=\"modal-body\">\r\n  <div [formGroup]=\"editarForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputName\">Nome</label>\r\n      <input formControlName=\"nome\" class=\"form-control\" type=\"text\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-6\">\r\n          <label for=\"exampleInputEmail1\">E-mail</label>\r\n          <input formControlName=\"email\" class=\"form-control\" type=\"email\">\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label for=\"exampleInputEmail1\">Estado</label>\r\n          <select formControlName=\"estado\" class=\"form-control\">\r\n            <option value=\"ATIVO\">Ativo</option>\r\n            <option value=\"FERIAS\">Férias</option>\r\n            <option value=\"AFASTADO\">Afastado</option>\r\n            <option value=\"DESLIGADO\">Desligado</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-6\">\r\n          <label for=\"exampleInputLastName\">Usuario</label>\r\n          <input formControlName=\"username\" class=\"form-control\" type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <label for=\"exampleInputEmail1\">Tipo</label>\r\n          <select formControlName=\"tipo\" class=\"form-control\">\r\n            <option value=\"ADMIN\">Administrador</option>\r\n            <option value=\"USER\">Usuário</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-6\">\r\n          <label for=\"exampleInputPassword1\">Senha</label>\r\n          <input formControlName=\"password\" class=\"form-control\" type=\"password\">\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label for=\"exampleConfirmPassword\">Confirme sua senha</label>\r\n          <input formControlName=\"confirmPassword\" class=\"form-control\" type=\"password\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"salvar(editarForm.value)\">Salvar</button>\r\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"close()\">Cancelar</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/usuarios/editar/editar-usuario.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/usuarios/editar/editar-usuario.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarUsuarioComponent", function() { return EditarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _provideres_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../provideres/usuario.service */ "./src/app/provideres/usuario.service.ts");






var EditarUsuarioComponent = /** @class */ (function () {
    function EditarUsuarioComponent(fb, modalActive, usuarioService, router) {
        this.fb = fb;
        this.modalActive = modalActive;
        this.usuarioService = usuarioService;
        this.router = router;
        this.isUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditarUsuarioComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    EditarUsuarioComponent.prototype.initForm = function () {
        this.editarForm = this.fb.group({
            nome: this.usuarioSelecionado.nome,
            email: this.usuarioSelecionado.email,
            tipo: this.usuarioSelecionado.tipo,
            estado: this.usuarioSelecionado.estado,
            username: this.usuarioSelecionado.username,
            password: '',
            confirmPassword: '',
        });
    };
    EditarUsuarioComponent.prototype.parseUsuario = function (usuario) {
        var parse = {
            _id: this.usuarioSelecionado._id,
            nome: usuario.nome,
            email: usuario.email,
            tipo: usuario.tipo,
            estado: usuario.estado,
            username: usuario.username,
            password: this.updatePassword(usuario.password),
        };
        return parse;
    };
    EditarUsuarioComponent.prototype.updatePassword = function (password) {
        return password === '' || undefined || null
            ? this.usuarioSelecionado.password
            : password;
    };
    EditarUsuarioComponent.prototype.salvar = function (usuario) {
        this.usuarioService.updateUsuario(this.parseUsuario(usuario))
            .subscribe(function (res) { return res; });
        this.modalActive.close();
    };
    EditarUsuarioComponent.prototype.close = function () {
        this.modalActive.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditarUsuarioComponent.prototype, "usuarioSelecionado", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditarUsuarioComponent.prototype, "isUpdate", void 0);
    EditarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-usuario',
            template: __webpack_require__(/*! ./editar-usuario.component.html */ "./src/app/pages/usuarios/editar/editar-usuario.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            _provideres_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditarUsuarioComponent);
    return EditarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb title=\"Gerenciar\" titleParent=\"Funcionarios\"></app-breadcrumb>\r\n\r\n\r\n<div class=\"col-12\">\r\n\r\n  <ngb-tabset [justify]=\"'justified'\">\r\n    <ngb-tab title=\"Ativos\">\r\n      <ng-template ngbTabContent>\r\n        <div class=\"pt-4 scroll list-group-item text-center\" *ngIf=\"(usuariosAtivos$ | async)?.length < 1\">\r\n          <p class=\"text-secondary\">Não há funcionário Ativo!</p>\r\n        </div>\r\n        <div class=\"scroll list-group\" *ngIf=\"(usuariosAtivos$ | async)?.length > 0\">\r\n          <a *ngFor=\"let usuario of usuariosAtivos$ | async\" class=\"list-group-item d-flex justify-content-between\">\r\n            {{ usuario?.nome }}\r\n            <button type=\"button\" class=\"btn btn-light text-right\" (click)=\"openEditar(usuario)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n          </a>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab title=\"Inativos\">\r\n      <ng-template ngbTabContent>\r\n        <div class=\"pt-4 scroll list-group-item text-center\" *ngIf=\"(usuariosInativos$ | async)?.length < 1\">\r\n          <p class=\"text-secondary\">Não há funcionário Inativo!</p>\r\n        </div>\r\n        <div class=\"scroll list-group\" *ngIf=\"(usuariosInativos$ | async)?.length > 0\">\r\n          <a *ngFor=\"let usuario of usuariosInativos$ | async\" class=\"list-group-item d-flex justify-content-between\">\r\n            {{ usuario?.nome }}\r\n            <button type=\"button\" class=\"btn btn-light text-right\" (click)=\"openEditar(usuario)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n          </a>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n\r\n  </ngb-tabset>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW9zL2dlcmVuY2lhci9nZXJlbmNpYXItdXN1YXJpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.ts ***!
  \*************************************************************************/
/*! exports provided: GerenciarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerenciarUsuarioComponent", function() { return GerenciarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _provideres_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../provideres/usuario.service */ "./src/app/provideres/usuario.service.ts");
/* harmony import */ var _editar_editar_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editar/editar-usuario.component */ "./src/app/pages/usuarios/editar/editar-usuario.component.ts");






var GerenciarUsuarioComponent = /** @class */ (function () {
    function GerenciarUsuarioComponent(usuarioService, modalService) {
        this.usuarioService = usuarioService;
        this.modalService = modalService;
        this.editarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.optionsModal = {
            size: 'lg'
        };
    }
    GerenciarUsuarioComponent.prototype.ngOnInit = function () {
        this.getUsuarios();
    };
    GerenciarUsuarioComponent.prototype.getUsuarios = function () {
        var filtroPorEstado = function (tipo) { return function (usuario) { return usuario.estado === tipo; }; };
        var usuarios$ = this.usuarioService.getUsuarios();
        this.usuariosAtivos$ = usuarios$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (usuario) { return usuario.filter(filtroPorEstado('ATIVO')); }));
        this.usuariosInativos$ = usuarios$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (usuario) { return usuario.filter(filtroPorEstado('INATIVO')); }));
    };
    GerenciarUsuarioComponent.prototype.openEditar = function (usuario) {
        var instance = this.modalService.open(_editar_editar_usuario_component__WEBPACK_IMPORTED_MODULE_5__["EditarUsuarioComponent"], this.optionsModal);
        instance.componentInstance.usuarioSelecionado = usuario;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GerenciarUsuarioComponent.prototype, "editarEvent", void 0);
    GerenciarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gerenciar-usuario',
            template: __webpack_require__(/*! ./gerenciar-usuario.component.html */ "./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./gerenciar-usuario.component.scss */ "./src/app/pages/usuarios/gerenciar/gerenciar-usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provideres_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], GerenciarUsuarioComponent);
    return GerenciarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/pages/usuarios/novo/novo-usuario.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/usuarios/novo/novo-usuario.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb titleParent=\"Funcionarios\" title=\"Novo\"></app-breadcrumb>\r\n\r\n  <div class=\"card mx-auto\">\r\n    <div class=\"card-header\">Cadastrar usuário</div>\r\n    <div class=\"card-body\">\r\n      <div [formGroup]=\"usuarioForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputName\">Nome</label>\r\n          <input class=\"form-control\" formControlName=\"nome\" type=\"text\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">E-mail</label>\r\n          <input class=\"form-control\" formControlName=\"email\" type=\"email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6\">\r\n              <label for=\"exampleInputLastName\">Usuario</label>\r\n              <input class=\"form-control\" formControlName=\"username\" type=\"text\">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label for=\"exampleInputName\">Tipo</label>\r\n              <input class=\"form-control\" formControlName=\"tipo\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6\">\r\n              <label for=\"exampleInputPassword1\">Senha</label>\r\n              <input class=\"form-control\" formControlName=\"password\" type=\"password\">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label for=\"exampleConfirmPassword\">Confirme sua senha</label>\r\n              <input class=\"form-control\" formControlName=\"confirmPassword\" type=\"password\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-success mt-3 btn-block\" (click)=\"saveUsuario(usuarioForm.value)\">Salvar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/usuarios/novo/novo-usuario.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/usuarios/novo/novo-usuario.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW9zL25vdm8vbm92by11c3VhcmlvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/usuarios/novo/novo-usuario.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/usuarios/novo/novo-usuario.component.ts ***!
  \***************************************************************/
/*! exports provided: NovoUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoUsuarioComponent", function() { return NovoUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _provideres_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../provideres/usuario.service */ "./src/app/provideres/usuario.service.ts");




var NovoUsuarioComponent = /** @class */ (function () {
    function NovoUsuarioComponent(fb, usuarioService) {
        this.fb = fb;
        this.usuarioService = usuarioService;
    }
    NovoUsuarioComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NovoUsuarioComponent.prototype.initForm = function () {
        this.usuarioForm = this.fb.group({
            nome: '',
            email: '',
            tipo: '',
            username: '',
            password: '',
            confirmPassword: '',
        });
    };
    NovoUsuarioComponent.prototype.saveUsuario = function (usuario) {
        this.usuarioService.newUsuario(usuario)
            .subscribe(function (res) { return console.log(res); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], NovoUsuarioComponent.prototype, "usuarioForm", void 0);
    NovoUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-novo-usuario',
            template: __webpack_require__(/*! ./novo-usuario.component.html */ "./src/app/pages/usuarios/novo/novo-usuario.component.html"),
            styles: [__webpack_require__(/*! ./novo-usuario.component.scss */ "./src/app/pages/usuarios/novo/novo-usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _provideres_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], NovoUsuarioComponent);
    return NovoUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/provideres/agenda.service.ts":
/*!**********************************************!*\
  !*** ./src/app/provideres/agenda.service.ts ***!
  \**********************************************/
/*! exports provided: AgendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaService", function() { return AgendaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.api */ "./src/app/app.api.ts");




var AgendaService = /** @class */ (function () {
    function AgendaService(http) {
        this.http = http;
    }
    AgendaService.prototype.getAgendados = function () {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/agendados");
    };
    AgendaService.prototype.agendadoById = function (_id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/agendados/" + _id);
    };
    AgendaService.prototype.agendar = function (agenda) {
        return this.http.put(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/agendados" + agenda._id, agenda);
    };
    AgendaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AgendaService);
    return AgendaService;
}());



/***/ }),

/***/ "./src/app/provideres/alimento.service.ts":
/*!************************************************!*\
  !*** ./src/app/provideres/alimento.service.ts ***!
  \************************************************/
/*! exports provided: AlimentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlimentoService", function() { return AlimentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.api */ "./src/app/app.api.ts");




var AlimentoService = /** @class */ (function () {
    function AlimentoService(http) {
        this.http = http;
    }
    AlimentoService.prototype.getAlimentos = function () {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/alimentos");
    };
    AlimentoService.prototype.alimentoById = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/alimentos/" + id);
    };
    AlimentoService.prototype.newAlimento = function (alimento) {
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/alimentos", alimento);
    };
    AlimentoService.prototype.removeAlimento = function (id) {
        return this.http.delete(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/alimentos/" + id);
    };
    AlimentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlimentoService);
    return AlimentoService;
}());



/***/ }),

/***/ "./src/app/provideres/almoco.service.ts":
/*!**********************************************!*\
  !*** ./src/app/provideres/almoco.service.ts ***!
  \**********************************************/
/*! exports provided: AlmocoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmocoService", function() { return AlmocoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.api */ "./src/app/app.api.ts");




var AlmocoService = /** @class */ (function () {
    function AlmocoService(http) {
        this.http = http;
    }
    AlmocoService.prototype.getAlmocos = function () {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/almocos");
    };
    AlmocoService.prototype.getCardapiosAssociados = function () {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/cardapiosAssociados");
    };
    AlmocoService.prototype.getCardapioDoDia = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/cardapiosAssociados/" + id);
    };
    AlmocoService.prototype.getAlteracoes = function () {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/alteracoes");
    };
    AlmocoService.prototype.getAlteracoesPorData = function (data) {
        var params;
        if (data) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('data', data);
        }
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/alteracoes", { params: data });
    };
    AlmocoService.prototype.newAlteracao = function (alteracao) {
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/alteracoes", alteracao);
    };
    AlmocoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlmocoService);
    return AlmocoService;
}());



/***/ }),

/***/ "./src/app/provideres/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/provideres/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.usuarioAutenticado = false;
    }
    AuthService.prototype.fazerLogin = function (usuario) {
        if (usuario.username === 'connecta' &&
            usuario.password === 'connecta') {
            this.router.navigate(['/']);
            return this.usuarioAutenticado = true;
        }
        // this.router.navigate(['/']);
        return this.usuarioAutenticado = false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/provideres/cardapio.service.ts":
/*!************************************************!*\
  !*** ./src/app/provideres/cardapio.service.ts ***!
  \************************************************/
/*! exports provided: CardapioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapioService", function() { return CardapioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.api */ "./src/app/app.api.ts");




var CardapioService = /** @class */ (function () {
    function CardapioService(http) {
        this.http = http;
    }
    CardapioService.prototype.getCardapios = function () {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/cardapios");
    };
    CardapioService.prototype.cardapioById = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/cardapios" + id);
    };
    CardapioService.prototype.newCardapio = function (cardapio) {
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/cardapios", cardapio);
    };
    CardapioService.prototype.removeCardapio = function (id) {
        return this.http.delete(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/cardapios/" + id);
    };
    CardapioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardapioService);
    return CardapioService;
}());



/***/ }),

/***/ "./src/app/provideres/usuario.service.ts":
/*!***********************************************!*\
  !*** ./src/app/provideres/usuario.service.ts ***!
  \***********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.api */ "./src/app/app.api.ts");




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
    }
    UsuarioService.prototype.getUsuarios = function () {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/usuarios");
    };
    UsuarioService.prototype.newUsuario = function (usuario) {
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/usuarios", usuario);
    };
    UsuarioService.prototype.updateUsuario = function (usuario) {
        return this.http.put(_app_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/usuarios/" + usuario._id, usuario);
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item pull-right\">\r\n    <a href=\"#\">{{ titleParent }}</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item active\">{{ title }}</li>\r\n</ol>\r\n\r\n<hr>\r\n"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.toggledSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent.prototype.emitToggleEvent = function () {
        this.toggledSidebar.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbComponent.prototype, "toggledSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbComponent.prototype, "titleParent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbComponent.prototype, "title", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"sticky-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"text-center\">\r\n      <small>Copyright © Realponto 2018</small>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\" id=\"mainNav\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n    <img src=\"assets/icons/logo-realponto.svg\">\r\n  </a>\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n    aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n    <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\r\n\r\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Almoço\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\">\r\n          <i class=\"fa fa-fw fa-th-list\"></i>\r\n          <span class=\"nav-link-text\">Dashboard</span>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Alimentos\">\r\n        <a class=\"nav-link\" [routerLink]=\"['alimentos/novo']\">\r\n          <i class=\"fa fa-fw fa-shopping-cart\"></i>\r\n          <span class=\"nav-link-text\">Alimentos</span>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Cardapios\">\r\n        <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseComponents\" data-parent=\"#exampleAccordion\">\r\n          <i class=\"fa fa-fw fa-wpforms\"></i>\r\n          <span class=\"nav-link-text\">Cardápios</span>\r\n        </a>\r\n        <ul class=\"sidenav-second-level collapse\" id=\"collapseComponents\">\r\n          <li>\r\n            <a [routerLink]=\"['/cardapios/novo']\">\r\n              <i class=\"fa fa-plus\"></i> Novo\r\n            </a>\r\n          </li>\r\n\r\n          <li>\r\n            <a [routerLink]=\"['/cardapios/gerenciar']\">\r\n              <i class=\"fa fa-edit\"></i> Gerenciar\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Funcionarios\">\r\n        <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseAlimentos\" data-parent=\"#exampleAccordion\">\r\n          <i class=\"fa fa-fw fa-user\"></i>\r\n          <span class=\"nav-link-text\">Funcionarios</span>\r\n        </a>\r\n        <ul class=\"sidenav-second-level collapse\" id=\"collapseAlimentos\">\r\n          <li>\r\n            <a [routerLink]=\"['usuarios/novo']\">\r\n              <i class=\"fa fa-plus\"></i> Novo\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['usuarios/gerenciar']\">\r\n              <i class=\"fa fa-edit\"></i> Gerenciar\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav sidenav-toggler\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link text-center\" id=\"sidenavToggler\" (click)=\"emitToggleEvent()\">\r\n          <i class=\"fa fa-fw fa-angle-left\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\" [routerLink]=\"['/login']\">\r\n        <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n          <i class=\"fa fa-fw fa-sign-out\"></i>\r\n          Logout\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand img {\n  height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcZmVsaXBlLmZyYW5jaXNjaGV0dG9cXHdvcmtzcGFjZVxccG9ydGFsLW1lYXRcXHBvcnRhbC1tZWF0L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.toggledSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.emitToggleEvent = function () {
        this.toggledSidebar.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "toggledSidebar", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: BreadcrumbComponent, FooterComponent, HeaderComponent, LoadingComponent, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]; });

/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]; });

/* harmony import */ var _siderbar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./siderbar/sidebar.component */ "./src/app/shared/components/siderbar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _siderbar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]; });








/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-overlay\">\r\n    <div class=\"loader\">\r\n      <div class=\"dot accent-pink\"></div>\r\n      <div class=\"dot accent-orange\"></div>\r\n      <div class=\"dot accent-green\"></div>\r\n      <div class=\"dot accent-cyan\"></div>\r\n      <div class=\"dot accent-blue\"></div>\r\n      <div class=\"dot accent-purple\"></div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .loader-overlay .loader {\n    position: relative;\n    width: 100px;\n    height: 100px;\n    /* 4 x 6 = 24 */ }\n  .loader-overlay .loader .accent-pink {\n      background-color: #ee8ebc; }\n  .loader-overlay .loader .accent-orange {\n      background-color: #eec08e; }\n  .loader-overlay .loader .accent-green {\n      background-color: #bcee8e; }\n  .loader-overlay .loader .accent-cyan {\n      background-color: #8eeec0; }\n  .loader-overlay .loader .accent-blue {\n      background-color: #8ebcee; }\n  .loader-overlay .loader .accent-purple {\n      background-color: #c08eee; }\n  .loader-overlay .loader .dot {\n      position: absolute;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      border-radius: 50%; }\n  .loader-overlay .loader .dot:before {\n        content: '';\n        display: block;\n        width: 5px;\n        height: 5px; }\n  .loader-overlay .loader .dot:nth-child(1) {\n      -webkit-animation: animate-loader-dots 2.4s linear -0.4s infinite backwards;\n              animation: animate-loader-dots 2.4s linear -0.4s infinite backwards; }\n  .loader-overlay .loader .dot:nth-child(2) {\n      -webkit-animation: animate-loader-dots 2.4s linear -0.8s infinite backwards;\n              animation: animate-loader-dots 2.4s linear -0.8s infinite backwards; }\n  .loader-overlay .loader .dot:nth-child(3) {\n      -webkit-animation: animate-loader-dots 2.4s linear -1.2s infinite backwards;\n              animation: animate-loader-dots 2.4s linear -1.2s infinite backwards; }\n  .loader-overlay .loader .dot:nth-child(4) {\n      -webkit-animation: animate-loader-dots 2.4s linear -1.6s infinite backwards;\n              animation: animate-loader-dots 2.4s linear -1.6s infinite backwards; }\n  .loader-overlay .loader .dot:nth-child(5) {\n      -webkit-animation: animate-loader-dots 2.4s linear -2s infinite backwards;\n              animation: animate-loader-dots 2.4s linear -2s infinite backwards; }\n  .loader-overlay .loader .dot:nth-child(6) {\n      -webkit-animation: animate-loader-dots 2.4s linear -2.4s infinite backwards;\n              animation: animate-loader-dots 2.4s linear -2.4s infinite backwards; }\n  @-webkit-keyframes animate-loader-dots {\n  0% {\n    top: 20%;\n    left: 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  16% {\n    top: 35%;\n    left: 75%;\n    -webkit-transform: scale(3);\n            transform: scale(3); }\n  33% {\n    top: 65%;\n    left: 75%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    top: 80%;\n    left: 50%;\n    -webkit-transform: scale(3);\n            transform: scale(3); }\n  66% {\n    top: 65%;\n    left: 25%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  83% {\n    top: 35%;\n    left: 25%;\n    -webkit-transform: scale(3);\n            transform: scale(3); }\n  100% {\n    top: 20%;\n    left: 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes animate-loader-dots {\n  0% {\n    top: 20%;\n    left: 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  16% {\n    top: 35%;\n    left: 75%;\n    -webkit-transform: scale(3);\n            transform: scale(3); }\n  33% {\n    top: 65%;\n    left: 75%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    top: 80%;\n    left: 50%;\n    -webkit-transform: scale(3);\n            transform: scale(3); }\n  66% {\n    top: 65%;\n    left: 25%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  83% {\n    top: 35%;\n    left: 25%;\n    -webkit-transform: scale(3);\n            transform: scale(3); }\n  100% {\n    top: 20%;\n    left: 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9DOlxcVXNlcnNcXGZlbGlwZS5mcmFuY2lzY2hldHRvXFx3b3Jrc3BhY2VcXHBvcnRhbC1tZWF0XFxwb3J0YWwtbWVhdC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsb2FkaW5nXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTtFQVJ6QjtJQVlJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQWNiLGVBQUEsRUFBZ0I7RUFsQ2hCO01BQ0UseUJBVmlDLEVBQUE7RUFTbkM7TUFDRSx5QkFUbUMsRUFBQTtFQVFyQztNQUNFLHlCQVJpQyxFQUFBO0VBT25DO01BQ0UseUJBWmUsRUFBQTtFQVdqQjtNQUNFLHlCQU4rQixFQUFBO0VBS2pDO01BQ0UseUJBTGtDLEVBQUE7RUFVeEM7TUFpQk0sa0JBQWtCO01BQ2xCLHdDQUFnQztjQUFoQyxnQ0FBZ0M7TUFDaEMsa0JBQWtCLEVBQUE7RUFuQnhCO1FBc0JRLFdBQVc7UUFDWCxjQUFjO1FBQ2QsVUFBVTtRQUNWLFdBQVcsRUFBQTtFQXpCbkI7TUFnQ1EsMkVBQTBFO2NBQTFFLG1FQUEwRSxFQUFBO0VBaENsRjtNQWdDUSwyRUFBMEU7Y0FBMUUsbUVBQTBFLEVBQUE7RUFoQ2xGO01BZ0NRLDJFQUEwRTtjQUExRSxtRUFBMEUsRUFBQTtFQWhDbEY7TUFnQ1EsMkVBQTBFO2NBQTFFLG1FQUEwRSxFQUFBO0VBaENsRjtNQWdDUSx5RUFBMEU7Y0FBMUUsaUVBQTBFLEVBQUE7RUFoQ2xGO01BZ0NRLDJFQUEwRTtjQUExRSxtRUFBMEUsRUFBQTtFQVFsRjtFQUNFO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUEsRUFBQTtFQWxDdkI7RUFDRTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYWNjZW50LWJhc2U6ICM4ZWVlYzA7XHJcbiRhY2NlbnRzOiAoXHJcbiAgcGluazogYWRqdXN0LWh1ZSgkYWNjZW50LWJhc2UsIC0xODAlKSxcclxuICBvcmFuZ2U6IGFkanVzdC1odWUoJGFjY2VudC1iYXNlLCAtMTIwJSksXHJcbiAgZ3JlZW46IGFkanVzdC1odWUoJGFjY2VudC1iYXNlLCAtNjAlKSxcclxuICBjeWFuOiAkYWNjZW50LWJhc2UsXHJcbiAgYmx1ZTogYWRqdXN0LWh1ZSgkYWNjZW50LWJhc2UsIDYwJSksXHJcbiAgcHVycGxlOiBhZGp1c3QtaHVlKCRhY2NlbnQtYmFzZSwgMTIwJSksXHJcbik7XHJcbkBtaXhpbiBnZW5lcmF0ZS1hY2NlbnRzIHtcclxuICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluICRhY2NlbnRzIHtcclxuICAgIC5hY2NlbnQtI3skbmFtZX0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGVyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAubG9hZGVyIHtcclxuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWFjY2VudHM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgIC5kb3Qge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogNCB4IDYgPSAyNCAqL1xyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcclxuICAgICAgLmRvdDpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAkZGVsYXk6IDAuNCAqICRpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS1sb2FkZXItZG90cyAyLjRzIGxpbmVhciAtI3skZGVsYXl9cyBpbmZpbml0ZSBiYWNrd2FyZHM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRPRE86IFdyaXRlIHRoaXMgaW4gYSBuaWNlciB3YXlcclxuLy8gMTAwLzYgKiAoMSwyLDMsNCw1LDYpXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZS1sb2FkZXItZG90c3tcclxuICAwJSB7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDE2JSB7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDc1JTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgfVxyXG4gIDMzJSB7XHJcbiAgICB0b3A6IDY1JTtcclxuICAgIGxlZnQ6IDc1JTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgfVxyXG4gIDY2JSB7XHJcbiAgICB0b3A6IDY1JTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDgzJSB7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/components/loading/loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/siderbar/sidebar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/siderbar/sidebar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\r\n  <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\r\n    <a class=\"nav-link\" href=\"index.html\">\r\n      <i class=\"fa fa-fw fa-dashboard\"></i>\r\n      <span class=\"nav-link-text\">Dashboard</span>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Components\">\r\n    <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseComponents\" data-parent=\"#exampleAccordion\">\r\n      <i class=\"fa fa-fw fa-wrench\"></i>\r\n      <span class=\"nav-link-text\">Components</span>\r\n    </a>\r\n    <ul class=\"sidenav-second-level collapse\" id=\"collapseComponents\">\r\n      <li>\r\n        <a href=\"navbar.html\">Navbar</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"cards.html\">Cards</a>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<ul class=\"navbar-nav sidenav-toggler\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link text-center\" id=\"sidenavToggler\" (click)=\"emitToggleEvent()\">\r\n      <i class=\"fa fa-fw fa-angle-left\"></i>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/components/siderbar/sidebar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/siderbar/sidebar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGVyYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/siderbar/sidebar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/siderbar/sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.toggledSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.emitToggleEvent = function () {
        this.toggledSidebar.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "toggledSidebar", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/components/siderbar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/siderbar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/mocks/opcao-proteina.ts":
/*!************************************************!*\
  !*** ./src/app/shared/mocks/opcao-proteina.ts ***!
  \************************************************/
/*! exports provided: OPCOES_PROTEINAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPCOES_PROTEINAS", function() { return OPCOES_PROTEINAS; });
var OPCOES_PROTEINAS = [
    'Ovo Frito',
    'Ovo Cozido',
    'Sem Proteína',
];


/***/ }),

/***/ "./src/app/shared/mocks/tipo-alimentos.ts":
/*!************************************************!*\
  !*** ./src/app/shared/mocks/tipo-alimentos.ts ***!
  \************************************************/
/*! exports provided: TIPO_ALIMENTOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPO_ALIMENTOS", function() { return TIPO_ALIMENTOS; });
var TIPO_ALIMENTOS = [
    'proteína',
    'acompanhamento',
    'salada',
    'sobremesa',
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
            exports: [
                _components__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\felipe.francischetto\workspace\portal-meat\portal-meat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map