"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab0_tab0_module_ts"],{

/***/ 1743:
/*!*********************************************!*\
  !*** ./src/app/tab0/tab0-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab0PageRoutingModule": () => (/* binding */ Tab0PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab0_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab0.page */ 17);




const routes = [
    {
        path: '',
        component: _tab0_page__WEBPACK_IMPORTED_MODULE_0__.Tab0Page
    }
];
let Tab0PageRoutingModule = class Tab0PageRoutingModule {
};
Tab0PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab0PageRoutingModule);



/***/ }),

/***/ 1563:
/*!*************************************!*\
  !*** ./src/app/tab0/tab0.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab0PageModule": () => (/* binding */ Tab0PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../explore-container/explore-container.module */ 456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _tab0_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab0-routing.module */ 1743);
/* harmony import */ var _tab0_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab0.page */ 17);








let Tab0PageModule = class Tab0PageModule {
};
Tab0PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tab0_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab0PageRoutingModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponentModule
        ],
        declarations: [_tab0_page__WEBPACK_IMPORTED_MODULE_2__.Tab0Page]
    })
], Tab0PageModule);



/***/ }),

/***/ 17:
/*!***********************************!*\
  !*** ./src/app/tab0/tab0.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab0Page": () => (/* binding */ Tab0Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab0_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab0.page.html */ 5664);
/* harmony import */ var _tab0_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab0.page.scss */ 1667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Tab0Page = class Tab0Page {
    constructor() {
        this.textByValue = false;
    }
    ngOnInit() {
    }
};
Tab0Page.ctorParameters = () => [];
Tab0Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab0',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab0_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab0_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab0Page);



/***/ }),

/***/ 5664:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab0/tab0.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-menu-button slot=\"start\" autoHide=\"false\"></ion-menu-button>\r\n        <ion-title class=\"text-center\">\r\n            Notification\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<!--\r\n  ////\r\n -->\r\n<ion-header>\r\n\r\n    <ion-toolbar id=\"mainToolbar\">\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button slot=\"start\" autoHide=\"false\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-row class=\"topRow\">\r\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n            <ion-card color=\"transparent\" class=\"pati-card\">\r\n                <ion-img src='assets/icon/notification.png'></ion-img>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row class=\"bottomRow\">\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n                <ion-label class=\"text-top\">Notification</ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-header collapse=\"condense\">\r\n        <ion-toolbar class=\"toolbarNotification\">\r\n            <ion-title class=\"text-center\" size=\"midium\">Today-Wed Feb 9</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-list>\r\n        <ion-row>\r\n            <ion-item>\r\n                <ion-col size=\"3\">\r\n                    11:00 AM <br> 45 m\r\n                    <br>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                    <ion-img src='assets/icon/appointment.png'></ion-img>\r\n                    <br>\r\n                </ion-col>\r\n                <ion-col size=\"7\">\r\n\r\n                    <ion-item><strong>Appointment</strong></ion-item>\r\n                    <ion-item class=\"h6\">Alicante Hospital</ion-item>\r\n                    <ion-select class=\"align-left\">\r\n                        <ion-select-option value=\"u\">Discard</ion-select-option>\r\n                        <ion-select-option value=\"c\">Complete</ion-select-option>\r\n                        <ion-select-option value=\"r\">Pendent</ion-select-option>\r\n\r\n\r\n                    </ion-select>\r\n                    <!-- <ion-toggle class=\"\" toggle-class=\"toggle-assertive\" color=\"danger\"> </ion-toggle>-->\r\n\r\n                </ion-col>\r\n            </ion-item>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-item>\r\n                <ion-col size=\"3\">\r\n                    12:00 AM <br> 20 m\r\n\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                    <ion-img src='assets/icon/nutrition.png'></ion-img>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"7\">\r\n                    <ion-item><strong>Nutrition</strong></ion-item>\r\n                    <ion-item class=\"h6\">Nuts - 1 Apple</ion-item>\r\n                    <ion-select class=\"w-100\">\r\n                        <ion-select-option value=\"u\">Discard</ion-select-option>\r\n                        <ion-select-option value=\"c\">Complete</ion-select-option>\r\n                        <ion-select-option value=\"r\">Pendent</ion-select-option>\r\n\r\n                    </ion-select>\r\n                    <!--<ion-toggle class=\"\" toggle-class=\"toggle-assertive\" color=\"danger\"> </ion-toggle>-->\r\n                </ion-col>\r\n            </ion-item>\r\n        </ion-row>\r\n\r\n    </ion-list>\r\n    <ion-toolbar>\r\n        <ion-title class=\"toolbarNotification\">Tomorrow-Thu Feb 10</ion-title>\r\n    </ion-toolbar>\r\n    <ion-list>\r\n        <ion-row>\r\n            <ion-item>\r\n                <ion-col size=\"3\">\r\n                    11:00 AM <br> 45 m\r\n\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                    <ion-img src='assets/icon/appointment.png'></ion-img>\r\n                </ion-col>\r\n                <ion-col size=\"7\">\r\n                    <ion-item><strong>Appointment</strong></ion-item>\r\n                    <ion-item class=\"h6\">Alicante Hospital</ion-item>\r\n\r\n                </ion-col>\r\n            </ion-item>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-item>\r\n                <ion-col size=\"3\">\r\n                    12:00 AM <br> 20 m\r\n                    <br>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                    <ion-img src='assets/icon/nutrition.png'></ion-img>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"7\">\r\n                    <ion-item><strong>Nutrition</strong></ion-item>\r\n                    <ion-item class=\"h6\">Nuts - 1 Apple</ion-item>\r\n\r\n                </ion-col>\r\n            </ion-item>\r\n        </ion-row>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 1667:
/*!*************************************!*\
  !*** ./src/app/tab0/tab0.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: url(\"/\") 0 0/100% 100% no-repeat;\n  border-radius: 20px;\n}\n\nion-menu-button {\n  color: #002fff;\n}\n\nion-title {\n  text-align: left;\n  font-size: 18px;\n  color: black;\n  background-color: rgba(192, 219, 96, 0.938);\n}\n\n.text-top {\n  font-weight: bold;\n  font-size: 22px;\n  margin-right: 10px;\n}\n\n#dashboardSection {\n  max-width: 100%;\n  max-height: auto;\n  text-align: center;\n  background-color: rgba(192, 219, 96, 0.938);\n  margin-top: 2px;\n  margin-left: 3px;\n  margin-bottom: 6px;\n  margin-right: 3px;\n  border-radius: 20px;\n  box-shadow: 10px;\n}\n\nion-header {\n  text-align: center;\n  align-content: center;\n  background-color: #db7d60 !important;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n\nion-card {\n  align-content: center;\n  --ion-background-color: transparent !important;\n  --ion-border-color: transparent !important;\n  box-shadow: none;\n  width: 60%;\n  height: 60%;\n  margin-left: 30px;\n}\n\nion-label {\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n  font-size: 16px;\n  color: black;\n}\n\n.pati-card {\n  margin-left: 10px;\n  width: 90%;\n  height: 90%;\n}\n\n.bottomRow {\n  margin-top: -30px;\n}\n\n.topRow {\n  margin-top: -20px;\n}\n\nion-toggle {\n  width: 60px;\n  height: 30px;\n  margin-top: 5px;\n  margin-left: 50px;\n  --background: rgb(238, 207, 207);\n}\n\nion-toggle[aria-checked=false] {\n  width: 85px;\n}\n\nion-toggle[aria-checked=false]::before {\n  top: 12px;\n  left: 50px;\n}\n\nion-toggle[aria-checked=false]::after {\n  position: absolute;\n  content: \"Complete\";\n  font-size: 10px;\n  line-height: 31px;\n  top: 12px;\n  left: 50px;\n  color: black;\n}\n\nion-toggle[aria-checked=true] {\n  width: 85px;\n}\n\nion-toggle[aria-checked=true]::before {\n  position: absolute;\n  content: \"\";\n}\n\nion-toggle[aria-checked=true]::after {\n  position: absolute;\n  content: \"Descard\";\n  font-size: 10px;\n  line-height: 32px;\n  top: 12px;\n  left: 25px;\n  color: #fff;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\nion-card {\n  box-shadow: none !important;\n}\n\nion-toolbar {\n  --background: rgba(192, 219, 96, 0.938);\n}\n\n#mainToolbar {\n  --background: rgba(219, 125, 96, 0.938) !important;\n}\n\n.text-top {\n  text-align: center;\n  margin-top: -11px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.ion-align-self-end {\n  margin-top: 2px;\n}\n\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n\nion-loading {\n  color: green;\n}\n\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 20px;\n  margin-left: 10px;\n}\n\napp-component-telemetry {\n  width: 100%;\n}\n\nion-segment-button {\n  width: 10px;\n  margin-top: 2px;\n  margin-left: 4px;\n  margin-right: 4px;\n  font-size: 10px;\n  border: none;\n  background-color: #1b1919;\n  border-radius: 50%;\n}\n\n.my-custom-menu {\n  --width: 500px;\n}\n\nion-select {\n  --width: 500%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFBSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRVI7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFFUjs7QUFBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFUjs7QUFHQSx3Q0FBQTs7QUFHQSx1RUFBQTs7QUFFQTtFQUNJLDJCQUFBO0FBSEo7O0FBTUE7RUFDSSx1Q0FBQTtBQUhKOztBQU1BO0VBQ0ksa0RBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7QUFISjs7QUFRUTtFQUNJLDRDQUFBO0VBQ0EsNkRBQUE7QUFMWjs7QUFTUTtFQUNJLDRDQUFBO0VBQ0EsNkRBQUE7QUFQWjs7QUFZQTtFQUNJLFlBQUE7QUFUSjs7QUFZQTtFQUNJLGlCQUFBO0FBVEo7O0FBWUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBWUE7RUFDSSxXQUFBO0FBVEo7O0FBWUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFZQTtFQUNJLGNBQUE7QUFUSjs7QUFZQTtFQUNJLGFBQUE7QUFUSiIsImZpbGUiOiJ0YWIwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHJnYigwLCA0NywgMjU1KTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMjE5LCA5NiwgMC45MzgpO1xyXG59XHJcblxyXG4udGV4dC10b3Age1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNkYXNoYm9hcmRTZWN0aW9uIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMjE5LCA5NiwgMC45MzgpO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTksIDEyNSwgOTYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wYXRpLWNhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5ib3R0b21Sb3cge1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbn1cclxuXHJcbi50b3BSb3cge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDIzOCwgMjA3LCAyMDcpO1xyXG59XHJcblxyXG5pb24tdG9nZ2xlW2FyaWEtY2hlY2tlZD1cImZhbHNlXCJdIHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2tcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvZ2dsZVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdIHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJEZXNjYXJkXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuXHJcblxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgxOTIsIDIxOSwgOTYsIDAuOTM4KTtcclxufVxyXG5cclxuI21haW5Ub29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMTksIDEyNSwgOTYsIDAuOTM4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC10b3Age1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTExcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWVuZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIGlvbi10YWItYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxvYWRpbmcge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24taWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmljb25UZXh0Pmlvbi1jb2w+aW9uLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmFwcC1jb21wb25lbnQtdGVsZW1ldHJ5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjcsIDI1LCAyNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tbWVudSB7XHJcbiAgICAtLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICAtLXdpZHRoOiA1MDAlO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab0_tab0_module_ts.js.map