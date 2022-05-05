"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 8383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 4404)).then(m => m.ProfilePageModule)
    },
    {
        path: 'patientAccess',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_patient-access_patient-access_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../patient-access/patient-access.module */ 1438)).then(m => m.PatientAccessPageModule)
    },
    {
        path: 'relatedPerson',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_rel-person_rel-person_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../rel-person/rel-person.module */ 1340)).then(m => m.RelPersonPageModule)
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 4265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8383);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 2817);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 8443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab1',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 2817:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n    <ion-toolbar color=\"primary\">\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Home\" defaultHref=\"/tabs\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-row class=\"topRow\">\r\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n            <ion-card color=\"transparent\" class=\"pati-card\">\r\n                <ion-img src='assets/icon/patientN.png'></ion-img>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row class=\"bottomRow\">\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n                <ion-label class=\"text-top\">Patient Section</ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <section id=\"dashboardSection\">\r\n        <ion-grid>\r\n            <ion-row>\r\n\r\n                <ion-col size=\"6\" class=\"ion-align-self-start\" [routerLink]=\"['profile']\">\r\n                    <ion-card color=\"transparent\" class=\"disability-card\">\r\n                        <ion-img src='assets/icon/pati.png'></ion-img>\r\n                        <ion-label>Patient Data</ion-label>\r\n                    </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-align-self-end\" [routerLink]=\"['patientAccess']\">\r\n                    <ion-card text-center color=\"transparent\" class=\"vital-card\">\r\n                        <ion-img src='assets/icon/access.png'></ion-img>\r\n                        <ion-label>Patient Access</ion-label>\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"6\" class=\"ion-align-self-start\" [routerLink]=\"['relatedPerson']\">\r\n                    <ion-card color=\"transparent\" class=\"nurse-card\">\r\n                        <ion-img src='assets/icon/family.png'></ion-img>\r\n                        <ion-label>Related Persons</ion-label>\r\n                    </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-align-self-end\">\r\n\r\n                </ion-col>\r\n\r\n\r\n            </ion-row>\r\n\r\n\r\n        </ion-grid>\r\n    </section>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 8443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: url(\"/\") 0 0/100% 100% no-repeat;\n  border-radius: 20px;\n}\n\nion-menu-button {\n  color: #002fff;\n}\n\nion-title {\n  text-align: left;\n  font-size: 18px;\n}\n\n.text-top {\n  font-weight: bold;\n  font-size: 22px;\n  margin-right: 10px;\n}\n\n.bottomRow {\n  margin-top: -30px;\n}\n\n.topRow {\n  margin-top: -20px;\n}\n\n#dashboardSection {\n  max-width: 100%;\n  max-height: auto;\n  text-align: center;\n  background-color: rgba(221, 230, 225, 0.24);\n  margin-top: 2px;\n  margin-left: 3px;\n  margin-bottom: 6px;\n  margin-right: 3px;\n  border-radius: 20px;\n  box-shadow: 10px;\n}\n\nion-header {\n  text-align: center;\n  align-content: center;\n  background-color: #b4c788 !important;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n\nion-card {\n  align-content: center;\n  --ion-background-color: transparent !important;\n  --ion-border-color: transparent !important;\n  box-shadow: none;\n  width: 60%;\n  height: 60%;\n  margin-left: 30px;\n}\n\nion-label {\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  font-size: 16px;\n  color: black;\n}\n\n.pati-card {\n  margin-left: 10px;\n  width: 90%;\n  height: 90%;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\nion-card {\n  box-shadow: none !important;\n}\n\nion-toolbar {\n  --background: rgba(180, 199, 136) !important;\n}\n\n.text-top {\n  text-align: center;\n  margin-top: -11px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.ion-align-self-end {\n  margin-top: 2px;\n}\n\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n\nion-loading {\n  color: green;\n}\n\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 20px;\n  margin-left: 10px;\n}\n\napp-component-telemetry {\n  width: 100%;\n}\n\nion-segment-button {\n  width: 10px;\n  margin-top: 2px;\n  margin-left: 4px;\n  margin-right: 4px;\n  font-size: 10px;\n  border: none;\n  background-color: #1b1919;\n  border-radius: 50%;\n}\n\n.my-custom-menu {\n  --width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsOENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQSx3Q0FBQTs7QUFHQSx1RUFBQTs7QUFFQTtFQUNJLDJCQUFBO0FBSEo7O0FBTUE7RUFDSSw0Q0FBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQVFRO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQUxaOztBQVNRO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQVBaOztBQVlBO0VBQ0ksWUFBQTtBQVRKOztBQVlBO0VBQ0ksaUJBQUE7QUFUSjs7QUFZQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFUSjs7QUFZQTtFQUNJLFdBQUE7QUFUSjs7QUFZQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVlBO0VBQ0ksY0FBQTtBQVRKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy8nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDQ3LCAyNTUpO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRleHQtdG9wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYm90dG9tUm93IHtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4udG9wUm93IHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4jZGFzaGJvYXJkU2VjdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIzMCwgMjI1LCAwLjI0KTtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxOTksIDEzNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBhdGktY2FyZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuXHJcbi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcblxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTgwLCAxOTksIDEzNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtdG9wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1lbmQge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICBpb24tdGFiLWJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1sb2FkaW5nIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmljb25UZXh0Pmlvbi1jb2w+aW9uLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5hcHAtY29tcG9uZW50LXRlbGVtZXRyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAyNSwgMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubXktY3VzdG9tLW1lbnUge1xyXG4gICAgLS13aWR0aDogNTAwcHg7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map