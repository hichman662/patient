"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 2742:
/*!********************************************************************!*\
  !*** ./src/app/profile/detail-profile/detail-profile.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailProfileComponent": () => (/* binding */ DetailProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./detail-profile.component.html */ 4820);
/* harmony import */ var _detail_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-profile.component.scss */ 4416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let DetailProfileComponent = class DetailProfileComponent {
    constructor() {
        this.name = '';
        this.diseases = [];
        this.disabilities = [];
        this.patientProfileNull = false;
        this.allPatientProfile = [];
        this.segmentModel = 'details';
    }
    ngOnInit() { }
};
DetailProfileComponent.ctorParameters = () => [];
DetailProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-detail-profile',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailProfileComponent);



/***/ }),

/***/ 4084:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4434);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4404:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _detail_profile_detail_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-profile/detail-profile.component */ 2742);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 5082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-routing.module */ 4084);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page */ 4434);









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfilePageRoutingModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_2__.ProfilePage, _detail_profile_detail_profile_component__WEBPACK_IMPORTED_MODULE_0__.DetailProfileComponent]
    })
], ProfilePageModule);



/***/ }),

/***/ 4434:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 259);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);



/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/type-annotation-spacing */

let ProfilePage = class ProfilePage {
    constructor() {
        this.segmentModel = 'details';
        this.patientNull = false;
    }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 4820:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/detail-profile/detail-profile.component.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-segment value=\"all\" color=\"tertiary\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\" lines=\"none\">\r\n    <ion-segment-button value=\"details\">\r\n        <ion-icon name=\"receipt-outline\"></ion-icon>\r\n        <ion-label>Details</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"diseases\">\r\n        <ion-icon name=\"heart-half-outline\"></ion-icon>\r\n        <ion-label>Diseases</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"disabilities\">\r\n        <ion-icon name=\"body-outline\"></ion-icon>\r\n        <ion-label>Disabilities</ion-label>\r\n    </ion-segment-button>\r\n</ion-segment>\r\n<div *ngIf=\"segmentModel === 'details'\">\r\n    <ion-list>\r\n        <ion-list-header>\r\n            <ion-icon class=\"segmentIcon\" name=\"clipboard-outline\"></ion-icon>Profile Name</ion-list-header>\r\n        <ion-item>\r\n            <ion-label text-wrap>profile name</ion-label>\r\n            <!-- <ion-label text-wrap> {{$any(patientProfile)?.Name}}</ion-label> -->\r\n        </ion-item>\r\n        <ion-list-header>\r\n            <ion-icon class=\"segmentIcon\" name=\"clipboard-outline\"></ion-icon>Profile Description</ion-list-header>\r\n        <ion-item>\r\n            <ion-label text-wrap> description</ion-label>\r\n            <!-- <ion-label text-wrap> {{$any(patientProfile)?.Description}}</ion-label> -->\r\n        </ion-item>\r\n        <ion-list-header>\r\n            <ion-icon class=\"segmentIcon\" name=\"warning-outline\"></ion-icon>Hazard value</ion-list-header>\r\n        <ion-item>\r\n            <ion-label> Flashing</ion-label>\r\n            <!-- <ion-label *ngIf=\"$any(patientProfile)?.HazardAvoidance === 0\"> Undefined</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.HazardAvoidance === 1\"> Flashing</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.HazardAvoidance === 2\"> Motion Simulation</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.HazardAvoidance === 3\"> Olfatory Hazard</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.HazardAvoidance === 4\"> Sound</ion-label> -->\r\n        </ion-item>\r\n        <ion-list-header>\r\n            <ion-icon class=\"segmentIcon\" name=\"globe-outline\"></ion-icon>Region</ion-list-header>\r\n        <ion-item>\r\n            <ion-label> Spain</ion-label>\r\n            <!--  <ion-label> {{$any(patientProfile)?.Region}}</ion-label> -->\r\n\r\n        </ion-item>\r\n\r\n\r\n        <ion-list-header>\r\n            <ion-icon class=\"segmentIcon\" name=\"language-outline\"></ion-icon>Preferred language</ion-list-header>\r\n        <ion-item>\r\n            <ion-label> ZH</ion-label>\r\n            <!-- <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 1\"> ES</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 2\"> EN</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 3\"> FR</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 4\"> IT</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 5\"> PR</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 6\"> DE</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 7\"> JA</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 8\"> KO</ion-label>\r\n            <ion-label *ngIf=\"$any(patientProfile)?.PreferredLanguage === 9\"> ZH</ion-label> -->\r\n\r\n\r\n        </ion-item>\r\n    </ion-list>\r\n</div>\r\n<div *ngIf=\"segmentModel === 'diseases'\">\r\n\r\n    <!-- <div class=\"container\" *ngFor=\"let disease of diseases|keyvalue\"> -->\r\n    <div class=\"container\">\r\n        <mat-expansion-panel details>\r\n            <mat-expansion-panel-header slot=\"start\">\r\n                <mat-panel-title>\r\n                    <ion-item>\r\n                        <ion-icon class=\"segmentIcon\" name=\"list-circle-outline\"></ion-icon>\r\n                        <!--   <ion-label>{{disease.value['Name']}}</ion-label> -->\r\n                        <ion-label>Disease name</ion-label>\r\n                    </ion-item>\r\n                </mat-panel-title>\r\n\r\n            </mat-expansion-panel-header>\r\n\r\n            <ion-item-sliding>\r\n                <ion-item-options side=\"start\">\r\n                    <ion-item-option color=\"danger\" (click)=\"null\" expandable>\r\n                        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n\r\n            <ion-card>\r\n                <ion-item>\r\n\r\n                    <ion-label>Disease</ion-label>\r\n                    <ion-badge> Parkinson</ion-badge>\r\n                    <!-- <ion-badge *ngIf=\"disease.value['Disease'] === 1\"> Alzheimer</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 2\"> Parkinson</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 3\"> Cancer</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 4\"> Heart Disease</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 5\"> Obesity</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 6\"> Diabetes</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 7\"> Epilepsy</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 8\"> Apnea Sleep</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 9\"> Narcolepsy</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 10\"> Eating disorders</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 11\"> Osteoporosis</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 12\"> Asthma</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 13\"> Fibrosis</ion-badge>\r\n                    <ion-badge *ngIf=\"disease.value['Disease'] === 14\"> Oral_Health</ion-badge> -->\r\n                </ion-item>\r\n\r\n            </ion-card>\r\n\r\n        </mat-expansion-panel>\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"segmentModel === 'disabilities'\">\r\n    <div class=\"container\">\r\n        <!-- <div class=\"container\" *ngFor=\"let disability of disabilities|keyvalue\"> -->\r\n        <mat-expansion-panel details>\r\n            <mat-expansion-panel-header slot=\"start\">\r\n                <mat-panel-title>\r\n                    <ion-item>\r\n                        <ion-icon class=\"segmentIcon\" name=\"list-circle-outline\"></ion-icon>\r\n                        <!-- <ion-label>{{disability.value['Name']}}</ion-label> -->\r\n                        <ion-label>Disability value</ion-label>\r\n                    </ion-item>\r\n                </mat-panel-title>\r\n\r\n            </mat-expansion-panel-header>\r\n\r\n            <ion-item-sliding>\r\n                <ion-item-options side=\"start\">\r\n                    <ion-item-option color=\"danger\" (click)=\"null\" expandable>\r\n                        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n\r\n            <ion-card>\r\n                <ion-item>\r\n\r\n                    <ion-label>Disability type</ion-label>\r\n                    <!--\r\n                    <ion-badge *ngIf=\"$any(disability).value.Type === 1\"> Auditory</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(disability).value.Type === 2\"> Cognitive</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(disability).value.Type === 3\"> Physical</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(disability).value.Type === 4\"> Speech</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(disability).value.Type === 5\"> Visual</ion-badge> -->\r\n                    <ion-badge> Visual</ion-badge>\r\n\r\n                </ion-item>\r\n                <ion-item>\r\n\r\n                    <ion-label>Severity</ion-label>\r\n\r\n                    <!-- <ion-badge *ngIf=\"$any(disability).value.Severity === 1\"> Severe</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(disability).value.Severity === 2\"> Moderate</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(disability).value.Severity === 3\"> Mild</ion-badge> -->\r\n                    <ion-badge> Mild</ion-badge>\r\n\r\n                </ion-item>\r\n\r\n            </ion-card>\r\n\r\n        </mat-expansion-panel>\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ 259:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/profile.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Patient Section\" defaultHref=\"/tabs/tab1\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n\r\n    </ion-toolbar>\r\n    <ion-row class=\"topRow\">\r\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\r\n                <ion-img src='assets/icon/patiW.png'></ion-img>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row class=\"bottomRow\">\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n                <!-- <ion-label class=\"text-top\">{{ patientName}}</ion-label> -->\r\n                <ion-label class=\"text-top\">Shahab</ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n\r\n                <ion-label class=\"text-top\">\r\n                    <!-- <h4>{{ patientDescrip}}</h4> -->\r\n\r\n                </ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-segment value=\"all\" color=\"tertiary\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\" lines=\"none\">\r\n        <ion-segment-button value=\"details\">\r\n            <ion-icon name=\"receipt-outline\"></ion-icon>\r\n            <ion-label>User Data</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"profile\">\r\n            <ion-icon name=\"receipt-outline\"></ion-icon>\r\n            <ion-label>Patient Profile</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n</ion-header>\r\n<ion-content>\r\n    <!--  <div [hidden]=\"patientNull\" class=\"segment\" *ngIf=\"segmentModel === 'details'\"> -->\r\n    <div *ngIf=\"segmentModel === 'details'\">\r\n        <ion-list>\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"person-outline\"></ion-icon>Surname</ion-list-header>\r\n            <ion-item>\r\n\r\n                <!-- <ion-label text-wrap> {{$any(patientData)?.Surnames}}</ion-label> -->\r\n                <ion-label text-wrap> Nasabeh</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"call-outline\"></ion-icon>Telephone</ion-list-header>\r\n            <ion-item>\r\n\r\n                <!--  <ion-label> {{$any(patientData)?.Email}}</ion-label> -->\r\n                <ion-label> +34 685745555</ion-label>\r\n                <div class=\"phone\">Change phone number</div>\r\n            </ion-item>\r\n\r\n\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"at-outline\"></ion-icon>Email</ion-list-header>\r\n            <ion-item>\r\n\r\n                <!--  <ion-label> {{$any(patientData)?.Email}}</ion-label> -->\r\n                <ion-label> patient@ua.es</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"key-outline\"></ion-icon>\r\n                <div class=\"password\">Change password</div>\r\n            </ion-list-header>\r\n            <ion-item>\r\n\r\n            </ion-item>\r\n\r\n\r\n            <ion-list-header>\r\n\r\n                <ion-icon class=\"segmentIcon\" name=\"power-outline\"></ion-icon>Active Status</ion-list-header>\r\n            <ion-item>\r\n                <!--  <ion-item [hidden]=\"$any(patientData)?.IsActive === true\">\r\n                    <ion-label>Disactive</ion-label>\r\n                </ion-item>\r\n                <ion-item [hidden]=\"$any(patientData)?.IsActive === false\">\r\n                    <ion-label>Active</ion-label>\r\n                </ion-item> -->\r\n                <ion-item>\r\n                    <ion-label>Active</ion-label>\r\n                </ion-item>\r\n\r\n                <!-- <ion-label> {{$any(patientData)?.IsActive}}</ion-label> -->\r\n\r\n            </ion-item>\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"heart-half-outline\"></ion-icon>Is Diseased</ion-list-header>\r\n            <ion-item>\r\n\r\n                <!-- <ion-item [hidden]=\"$any(patientData)?.IsDiseased === false\">\r\n                    <ion-label>Yes</ion-label>\r\n                </ion-item>\r\n                <ion-item [hidden]=\"$any(patientData)?.IsDiseased === true\">\r\n                    <ion-label>No</ion-label>\r\n                </ion-item> -->\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                </ion-item>\r\n            </ion-item>\r\n\r\n\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"male-female-outline\"></ion-icon>Gender</ion-list-header>\r\n            <ion-item>\r\n                <ion-label> Male</ion-label>\r\n                <!-- <ion-label *ngIf=\"$any(patientData)?.Type === 1\"> Male</ion-label>\r\n                 <ion-label *ngIf=\"$any(patientData)?.Type === 2\"> Female</ion-label>\r\n                <ion-label *ngIf=\"$any(patientData)?.Type === 3\"> Other</ion-label>\r\n                <ion-label *ngIf=\"$any(patientData)?.Type === 4\"> Unknown</ion-label> -->\r\n            </ion-item>\r\n\r\n\r\n        </ion-list>\r\n    </div>\r\n    <div class=\"segment\" *ngIf=\"segmentModel === 'profile'\">\r\n        <app-detail-profile></app-detail-profile>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 4416:
/*!**********************************************************************!*\
  !*** ./src/app/profile/detail-profile/detail-profile.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgba(207, 218, 182, 0.658) !important;\n}\nion-header {\n  background-color: #f8f8f8;\n}\nion-badge {\n  background-color: #f8f8f8;\n  color: black;\n}\n.text-top {\n  text-align: center;\n  margin-top: -18px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-end {\n  margin-top: -18px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 14px;\n}\n.segmentIcon {\n  margin-right: 7px;\n  height: 14px;\n}\nion-list-header {\n  margin-bottom: 1px;\n  font-size: 14px;\n}\napp-component-telemetry {\n  width: 100%;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 2px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBR0EsdUVBQUE7QUFFQTtFQUNJLFlBQUE7QUFGSjtBQUtBO0VBQ0ksMkJBQUE7QUFGSjtBQUtBO0VBQ0ksbURBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBRko7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQU9RO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQUpaO0FBUVE7RUFDSSw0Q0FBQTtFQUNBLDZEQUFBO0FBTlo7QUFXQTtFQUNJLFlBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7QUFSSjtBQVdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJKO0FBV0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFSSjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFSSiIsImZpbGUiOiJkZXRhaWwtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcblxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIwNywgMjE4LCAxODIsIDAuNjU4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxufVxyXG5cclxuaW9uLWJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnRleHQtdG9wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1lbmQge1xyXG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIGlvbi10YWItYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxvYWRpbmcge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24taWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmljb25UZXh0Pmlvbi1jb2w+aW9uLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5zZWdtZW50SWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuYXBwLWNvbXBvbmVudC10ZWxlbWV0cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 430:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\n.ionadd {\n  margin-right: 20px;\n  margin-top: 10px;\n}\n.bottomRow {\n  margin-top: -1px;\n  margin-left: -30px;\n}\n.topRow {\n  margin-top: -2px;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgba(207, 218, 182, 0.658) !important;\n}\nion-header {\n  background-color: rgba(180, 199, 136, 0.658);\n}\n.text-top {\n  text-align: center;\n  margin-top: -16px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-center {\n  margin-top: -15px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.password,\n.phone {\n  color: blue;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 14px;\n}\n.segmentIcon {\n  margin-right: 7px;\n  height: 14px;\n}\nion-list-header {\n  margin-bottom: 1px;\n  font-size: 14px;\n}\napp-component-telemetry {\n  width: 100%;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBR0EsdUVBQUE7QUFFQTtFQUNJLFlBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLQTtFQUNJLGdCQUFBO0FBRko7QUFLQTtFQUNJLDJCQUFBO0FBRko7QUFLQTtFQUNJLG1EQUFBO0FBRko7QUFLQTtFQUNJLDRDQUFBO0FBRko7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQU9RO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQUpaO0FBUVE7RUFDSSw0Q0FBQTtFQUNBLDZEQUFBO0FBTlo7QUFXQTtFQUNJLFlBQUE7QUFSSjtBQVdBOztFQUVJLFdBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7QUFSSjtBQVdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJKO0FBV0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFSSjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBUkoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG5cclxuXHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmlvbmFkZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYm90dG9tUm93IHtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbn1cclxuXHJcbi50b3BSb3cge1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMDcsIDIxOCwgMTgyLCAwLjY1OCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTk5LCAxMzYsIDAuNjU4KTtcclxufVxyXG5cclxuLnRleHQtdG9wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIGlvbi10YWItYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxvYWRpbmcge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucGFzc3dvcmQsXHJcbi5waG9uZSB7XHJcbiAgICBjb2xvcjogYmx1ZVxyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24taWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmljb25UZXh0Pmlvbi1jb2w+aW9uLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5zZWdtZW50SWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuYXBwLWNvbXBvbmVudC10ZWxlbWV0cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map