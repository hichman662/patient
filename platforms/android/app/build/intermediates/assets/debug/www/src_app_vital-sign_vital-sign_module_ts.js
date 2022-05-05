"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vital-sign_vital-sign_module_ts"],{

/***/ 1338:
/*!*********************************************************!*\
  !*** ./src/app/vital-sign/vital-sign-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VitalSignPageRoutingModule": () => (/* binding */ VitalSignPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _vital_sign_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vital-sign.page */ 9449);




const routes = [
    {
        path: '',
        component: _vital_sign_page__WEBPACK_IMPORTED_MODULE_0__.VitalSignPage
    }
];
let VitalSignPageRoutingModule = class VitalSignPageRoutingModule {
};
VitalSignPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VitalSignPageRoutingModule);



/***/ }),

/***/ 6166:
/*!*************************************************!*\
  !*** ./src/app/vital-sign/vital-sign.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VitalSignPageModule": () => (/* binding */ VitalSignPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _vital_sign_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vital-sign-routing.module */ 1338);
/* harmony import */ var _vital_sign_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vital-sign.page */ 9449);







let VitalSignPageModule = class VitalSignPageModule {
};
VitalSignPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vital_sign_routing_module__WEBPACK_IMPORTED_MODULE_0__.VitalSignPageRoutingModule
        ],
        declarations: [_vital_sign_page__WEBPACK_IMPORTED_MODULE_1__.VitalSignPage]
    })
], VitalSignPageModule);



/***/ }),

/***/ 9449:
/*!***********************************************!*\
  !*** ./src/app/vital-sign/vital-sign.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VitalSignPage": () => (/* binding */ VitalSignPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_vital_sign_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./vital-sign.page.html */ 5580);
/* harmony import */ var _vital_sign_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vital-sign.page.scss */ 3659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let VitalSignPage = class VitalSignPage {
    constructor() { }
    ngOnInit() {
    }
};
VitalSignPage.ctorParameters = () => [];
VitalSignPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vital-sign',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_vital_sign_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vital_sign_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VitalSignPage);



/***/ }),

/***/ 5580:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/vital-sign/vital-sign.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>vital-sign</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 3659:
/*!*************************************************!*\
  !*** ./src/app/vital-sign/vital-sign.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXRhbC1zaWduLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_vital-sign_vital-sign_module_ts.js.map