"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nutrition_nutrition_module_ts"],{

/***/ 7537:
/*!*******************************************************!*\
  !*** ./src/app/nutrition/nutrition-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NutritionPageRoutingModule": () => (/* binding */ NutritionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _nutrition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nutrition.page */ 485);




const routes = [
    {
        path: '',
        component: _nutrition_page__WEBPACK_IMPORTED_MODULE_0__.NutritionPage
    }
];
let NutritionPageRoutingModule = class NutritionPageRoutingModule {
};
NutritionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NutritionPageRoutingModule);



/***/ }),

/***/ 9568:
/*!***********************************************!*\
  !*** ./src/app/nutrition/nutrition.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NutritionPageModule": () => (/* binding */ NutritionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nutrition-routing.module */ 7537);
/* harmony import */ var _nutrition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nutrition.page */ 485);







let NutritionPageModule = class NutritionPageModule {
};
NutritionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_0__.NutritionPageRoutingModule
        ],
        declarations: [_nutrition_page__WEBPACK_IMPORTED_MODULE_1__.NutritionPage]
    })
], NutritionPageModule);



/***/ }),

/***/ 485:
/*!*********************************************!*\
  !*** ./src/app/nutrition/nutrition.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NutritionPage": () => (/* binding */ NutritionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nutrition_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./nutrition.page.html */ 4729);
/* harmony import */ var _nutrition_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nutrition.page.scss */ 9193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let NutritionPage = class NutritionPage {
    constructor() {
        this.segmentModel = 'nutrition';
        this.idPassedByURL = null;
    }
    ngOnInit() {
    }
};
NutritionPage.ctorParameters = () => [];
NutritionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nutrition',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nutrition_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nutrition_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NutritionPage);



/***/ }),

/***/ 4729:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/nutrition/nutrition.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Care Activities\" defaultHref=\"tabs/tab2/careActivity\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n    <ion-row>\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\n                <ion-img src='assets/icon/nutritionW.png'></ion-img>\n\n            </ion-card>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\n\n            <ion-list-header>\n                <!-- <ion-label class=\"text-top\">{{ nutritionName}}</ion-label> -->\n                <ion-label class=\"text-top\">nutritionName</ion-label>\n\n            </ion-list-header>\n\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\n\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\n\n            <ion-list-header>\n\n                <ion-label class=\"text-top\">\n                    <!-- <h4>{{ nutritionDescrip}}</h4> -->\n                    <h4>nutrition Descrip</h4>\n                </ion-label>\n            </ion-list-header>\n\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\n\n        </ion-col>\n\n    </ion-row>\n    <ion-segment value=\"all\" color=\"tertiary\" class=\"animate__animated animate__slideInUp animate__fast\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\" lines=\"none\">\n        <ion-segment-button value=\"nutrition\">\n            <ion-icon name=\"restaurant-outline\"></ion-icon>\n            <ion-label>Nutrition Detail</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"details\">\n            <ion-icon name=\"receipt-outline\"></ion-icon>\n            <ion-label>Activity Detail</ion-label>\n        </ion-segment-button>\n\n\n    </ion-segment>\n</ion-header>\n<ion-content>\n\n\n\n    <div class=\"segment\" *ngIf=\"segmentModel === 'nutrition'\">\n\n        <ion-list>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"document-outline\"></ion-icon>Name</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(nutritionDetail)?.Name}}</ion-label> -->\n                <ion-label>Name</ion-label>\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"create-outline\"></ion-icon>Description</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(nutritionDetail)?.Description}}</ion-label> -->\n                <ion-label> Description</ion-label>\n\n            </ion-item>\n\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"barcode-outline\"></ion-icon>Diet Code</ion-list-header>\n            <ion-item>\n                <ion-label> DietCode</ion-label>\n                <!-- <ion-label> {{$any(nutritionDetail)?.DietCode}}</ion-label> -->\n\n            </ion-item>\n\n\n        </ion-list>\n    </div>\n    <div class=\"segment\" *ngIf=\"segmentModel === 'details'\">\n        <ion-list>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"timer-outline\"></ion-icon>Periodicity</ion-list-header>\n            <ion-item>\n                <ion-label> Daily</ion-label>\n                <!-- <ion-label *ngIf=\"$any(valueCareActivity)?.Periodicity === 1\"> Daily</ion-label>\n              <ion-label *ngIf=\"$any(valueCareActivity)?.Periodicity === 2\"> Monthly</ion-label>\n              <ion-label *ngIf=\"$any(valueCareActivity)?.Periodicity === 3\"> Per Hour</ion-label>\n              <ion-label *ngIf=\"$any(valueCareActivity)?.Periodicity === 4\"> Weekly</ion-label> -->\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"alarm-outline\"></ion-icon>Duration</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(valueCareActivity)?.Duration}}</ion-label> -->\n                <ion-label>Duration</ion-label>\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"pin-outline\"></ion-icon>Location</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(valueCareActivity)?.Location}}</ion-label> -->\n                <ion-label> Location</ion-label>\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"code-outline\"></ion-icon>Outcome Code</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(valueCareActivity)?.OutcomeCode}}</ion-label> -->\n                <ion-label>OutcomeCode</ion-label>\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"code-working-outline\"></ion-icon>Activity Code</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(valueCareActivity)?.ActivityCode}}</ion-label> -->\n                <ion-label>ActivityCode</ion-label>\n\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ 9193:
/*!***********************************************!*\
  !*** ./src/app/nutrition/nutrition.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgb(167, 195, 236) !important;\n}\nion-header {\n  background-color: #a7c3ec;\n}\n.text-top {\n  text-align: center;\n  margin-top: -16px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-center {\n  margin-top: -15px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 14px;\n}\n.segmentIcon {\n  margin-right: 7px;\n  height: 14px;\n}\nion-list-header {\n  margin-bottom: -9px;\n}\napp-component-telemetry {\n  width: 100%;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51dHJpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQUE7QUFHQSx1RUFBQTtBQUVBO0VBQ0ksWUFBQTtBQUZKO0FBS0E7RUFDSSwyQkFBQTtBQUZKO0FBS0E7RUFDSSwyQ0FBQTtBQUZKO0FBS0E7RUFDSSx5QkFBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBRko7QUFLQTtFQUNJLGlCQUFBO0FBRko7QUFPUTtFQUNJLDRDQUFBO0VBQ0EsNkRBQUE7QUFKWjtBQVFRO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQU5aO0FBV0E7RUFDSSxZQUFBO0FBUko7QUFXQTtFQUNJLGlCQUFBO0FBUko7QUFXQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBUko7QUFXQTtFQUNJLG1CQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBUkoiLCJmaWxlIjoibnV0cml0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcblxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTY3LCAxOTUsIDIzNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxOTUsIDIzNik7XHJcbn1cclxuXHJcbi50ZXh0LXRvcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICBpb24tdGFiLWJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1sb2FkaW5nIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmljb25UZXh0Pmlvbi1jb2w+aW9uLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcblxyXG4uc2VnbWVudEljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOXB4O1xyXG59XHJcblxyXG5hcHAtY29tcG9uZW50LXRlbGVtZXRyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_nutrition_nutrition_module_ts.js.map