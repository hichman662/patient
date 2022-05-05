"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_care-activity_detail-care-activity_detail-care-activity_module_ts"],{

/***/ 7464:
/*!*******************************************************************************************!*\
  !*** ./src/app/care-activity/detail-care-activity/detail-care-activity-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailCareActivityPageRoutingModule": () => (/* binding */ DetailCareActivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _detail_care_activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-care-activity.page */ 5389);




const routes = [
    {
        path: '',
        component: _detail_care_activity_page__WEBPACK_IMPORTED_MODULE_0__.DetailCareActivityPage
    }
];
let DetailCareActivityPageRoutingModule = class DetailCareActivityPageRoutingModule {
};
DetailCareActivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailCareActivityPageRoutingModule);



/***/ }),

/***/ 9427:
/*!***********************************************************************************!*\
  !*** ./src/app/care-activity/detail-care-activity/detail-care-activity.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailCareActivityPageModule": () => (/* binding */ DetailCareActivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _detail_care_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-care-activity-routing.module */ 7464);
/* harmony import */ var _detail_care_activity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-care-activity.page */ 5389);







let DetailCareActivityPageModule = class DetailCareActivityPageModule {
};
DetailCareActivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_care_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailCareActivityPageRoutingModule
        ],
        declarations: [_detail_care_activity_page__WEBPACK_IMPORTED_MODULE_1__.DetailCareActivityPage]
    })
], DetailCareActivityPageModule);



/***/ }),

/***/ 5389:
/*!*********************************************************************************!*\
  !*** ./src/app/care-activity/detail-care-activity/detail-care-activity.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailCareActivityPage": () => (/* binding */ DetailCareActivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_care_activity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./detail-care-activity.page.html */ 8413);
/* harmony import */ var _detail_care_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-care-activity.page.scss */ 3143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let DetailCareActivityPage = class DetailCareActivityPage {
    constructor() {
        this.segmentModel = 'details';
    }
    ngOnInit() {
    }
};
DetailCareActivityPage.ctorParameters = () => [];
DetailCareActivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-detail-care-activity',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_care_activity_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_care_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailCareActivityPage);



/***/ }),

/***/ 8413:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/care-activity/detail-care-activity/detail-care-activity.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Patient Dashboard\" defaultHref=\"/tabs/tab2\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n    <ion-row>\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\n                <ion-img src='assets/icon/patiW.png'></ion-img>\n\n            </ion-card>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\n\n            <ion-list-header>\n                <!-- <ion-label class=\"text-top\">{{ patientName}}</ion-label> -->\n                <ion-label class=\"text-top\">Name</ion-label>\n\n            </ion-list-header>\n\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\n\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\n\n            <ion-list-header>\n\n                <ion-label class=\"text-top\">\n                    <h4>Patient Description</h4>\n                    <!-- <h4>{{ patientDescrip}}</h4> -->\n                </ion-label>\n            </ion-list-header>\n\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\n\n        </ion-col>\n\n    </ion-row>\n    <ion-segment value=\"all\" color=\"tertiary\" class=\"animate__animated animate__slideInUp animate__fast\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\" lines=\"none\">\n        <ion-segment-button value=\"details\">\n            <ion-icon name=\"receipt-outline\"></ion-icon>\n            <ion-label>User Data</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"profile\">\n            <ion-icon name=\"receipt-outline\"></ion-icon>\n            <ion-label>Patient Profile</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content>\n\n    <div class=\"segment\" *ngIf=\"segmentModel === 'details'\">\n        <ion-list>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"person-outline\"></ion-icon>Surname</ion-list-header>\n            <ion-item>\n                <ion-label text-wrap>Patient surenames</ion-label>\n                <!-- <ion-label text-wrap> {{$any(patientData)?.Surnames}}</ion-label> -->\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"at-outline\"></ion-icon>Email</ion-list-header>\n            <ion-item>\n\n                <ion-label> patient email</ion-label>\n                <!-- <ion-label> {{$any(patientData)?.Email}}</ion-label> -->\n\n            </ion-item>\n            <ion-list-header>\n\n                <ion-icon class=\"segmentIcon\" name=\"power-outline\"></ion-icon>Active Status</ion-list-header>\n            <ion-item>\n                <ion-item>\n                    <ion-label>Disactive</ion-label>\n                </ion-item>\n                <!--  <ion-item [hidden]=\"$any(patientData)?.IsActive===t rue \">\n                    <ion-label>Disactive</ion-label>\n                </ion-item>\n                <ion-item [hidden]=\"$any(patientData)?.IsActive===f alse \">\n                    <ion-label>Active</ion-label>\n                </ion-item> -->\n\n                <!-- <ion-label> {{$any(patientData)?.IsActive}}</ion-label> -->\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon \" name=\"heart-half-outline \"></ion-icon>Is Diseased</ion-list-header>\n            <ion-item>\n                <!--\n                <ion-item [hidden]=\"$any(patientData)?.IsDiseased===false \">\n                    <ion-label>Yes</ion-label>\n                </ion-item>\n                <ion-item [hidden]=\"$any(patientData)?.IsDiseased===true \">\n                    <ion-label>No</ion-label>\n                </ion-item>\n                 -->\n                <ion-item>\n                    <ion-label>No</ion-label>\n                </ion-item>\n\n            </ion-item>\n\n\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon \" name=\"male-female-outline \"></ion-icon>Gender</ion-list-header>\n            <ion-item>\n                <ion-label> Male</ion-label>\n                <!-- <ion-label *ngIf=\"$any(patientData)?.Type===1 \"> Male</ion-label>\n                <ion-label *ngIf=\"$any(patientData)?.Type===2 \"> Female</ion-label>\n                <ion-label *ngIf=\"$any(patientData)?.Type===3 \"> Other</ion-label>\n                <ion-label *ngIf=\"$any(patientData)?.Type===4 \"> Unknown</ion-label> -->\n            </ion-item>\n\n\n        </ion-list>\n    </div>\n    <div class=\"segment \" *ngIf=\"segmentModel==='profile' \">\n        <!--  <app-detail-profile></app-detail-profile> -->\n    </div>\n</ion-content>\n");

/***/ }),

/***/ 3143:
/*!***********************************************************************************!*\
  !*** ./src/app/care-activity/detail-care-activity/detail-care-activity.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtY2FyZS1hY3Rpdml0eS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_care-activity_detail-care-activity_detail-care-activity_module_ts.js.map