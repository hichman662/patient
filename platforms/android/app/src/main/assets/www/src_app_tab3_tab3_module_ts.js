"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 8058:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 2308);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 7586:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 2308);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 8058);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 2308:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab3.page.html */ 8752);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 4170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab3',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 8752:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/tab3.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header [translucent]=\"true\"> -->\r\n<ion-header>\r\n\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Home\" defaultHref=\"/tabs\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-row class=\"topRow\">\r\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\r\n            <ion-card color=\"transparent\" class=\"pati-card\">\r\n                <ion-img src='assets/icon/device.png'></ion-img>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row class=\"bottomRow\">\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n                <ion-label class=\"text-top\">Device Section</ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n    <section id=\"dashboardSection\">\r\n        <ion-grid>\r\n            <ion-row>\r\n\r\n                <ion-col size=\"6\" class=\"ion-align-self-center\" [routerLink]=\"['device']\">\r\n                    <ion-card color=\"transparent\" class=\"disability-card\">\r\n                        <ion-img src='assets/icon/devices.png'></ion-img>\r\n                        <ion-label>Devices</ion-label>\r\n                    </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-align-self-end\" [routerLink]=\"['telemetry']\">\r\n                    <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\r\n                        <ion-img src='assets/icon/telemetries.png'></ion-img>\r\n                        <ion-label>Telemetries</ion-label>\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <!--  <ion-col size=\"6\" class=\"ion-align-self-start\" [routerLink]=\"['relatedPerson']\">\r\n                    <ion-card color=\"transparent\" class=\"nurse-card\">\r\n                        <ion-img src='assets/icon/family.png'></ion-img>\r\n                        <ion-label>Related Persons</ion-label>\r\n                    </ion-card>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"6\" class=\"ion-align-self-end\" [routerLink]=\"['patientAccess']\">\r\n                    <ion-card text-center color=\"transparent\" class=\"vital-card\">\r\n                        <ion-img src='assets/icon/access.png'></ion-img>\r\n                        <ion-label>Patient Access</ion-label>\r\n                    </ion-card>\r\n                </ion-col> -->\r\n\r\n            </ion-row>\r\n\r\n\r\n        </ion-grid>\r\n    </section>\r\n\r\n</ion-content>");

/***/ }),

/***/ 4170:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: url(\"/\") 0 0/100% 100% no-repeat;\n  border-radius: 20px;\n}\n\nion-menu-button {\n  color: #002fff;\n}\n\nion-title {\n  text-align: left;\n  font-size: 18px;\n}\n\n.text-top {\n  font-weight: bold;\n  font-size: 22px;\n  margin-right: 10px;\n}\n\n#dashboardSection {\n  max-width: 100%;\n  max-height: auto;\n  text-align: center;\n  background-color: rgba(221, 230, 225, 0.24);\n  margin-top: 2px;\n  margin-left: 3px;\n  margin-bottom: 6px;\n  margin-right: 3px;\n  border-radius: 20px;\n  box-shadow: 10px;\n}\n\nion-header {\n  text-align: center;\n  align-content: center;\n  background-color: #f08585 !important;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n\nion-card {\n  align-content: center;\n  --ion-background-color: transparent !important;\n  --ion-border-color: transparent !important;\n  box-shadow: none;\n  width: 60%;\n  height: 60%;\n  margin-left: 30px;\n}\n\nion-label {\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  font-size: 16px;\n  color: black;\n}\n\n.pati-card {\n  margin-left: 10px;\n  width: 90%;\n  height: 90%;\n}\n\n.bottomRow {\n  margin-top: -30px;\n}\n\n.topRow {\n  margin-top: -20px;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\nion-card {\n  box-shadow: none !important;\n}\n\nion-toolbar {\n  --background: rgb(240, 133, 133) !important;\n}\n\n.text-top {\n  text-align: center;\n  margin-top: -11px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.ion-align-self-end {\n  margin-top: 2px;\n}\n\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n\nion-loading {\n  color: green;\n}\n\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 10px;\n}\n\napp-component-telemetry {\n  width: 100%;\n}\n\nion-segment-button {\n  width: 10px;\n  margin-top: 2px;\n  margin-left: 4px;\n  margin-right: 4px;\n  font-size: 10px;\n  border: none;\n  background-color: #1b1919;\n  border-radius: 50%;\n}\n\n.my-custom-menu {\n  --width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFHQSx3Q0FBQTs7QUFHQSx1RUFBQTs7QUFFQTtFQUNJLDJCQUFBO0FBSEo7O0FBTUE7RUFDSSwyQ0FBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQVFRO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQUxaOztBQVNRO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQVBaOztBQVlBO0VBQ0ksWUFBQTtBQVRKOztBQVlBO0VBQ0ksaUJBQUE7QUFUSjs7QUFZQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFUSjs7QUFZQTtFQUNJLFdBQUE7QUFUSjs7QUFZQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVlBO0VBQ0ksY0FBQTtBQVRKIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy8nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDQ3LCAyNTUpO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRleHQtdG9wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jZGFzaGJvYXJkU2VjdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIzMCwgMjI1LCAwLjI0KTtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDEzMywgMTMzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGF0aS1jYXJkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uYm90dG9tUm93IHtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4udG9wUm93IHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG5cclxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuXHJcblxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MCwgMTMzLCAxMzMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXRvcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW9uLWFsaWduLXNlbGYtZW5kIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbG9hZGluZyB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYXBwLWNvbXBvbmVudC10ZWxlbWV0cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjUsIDI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm15LWN1c3RvbS1tZW51IHtcclxuICAgIC0td2lkdGg6IDUwMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map