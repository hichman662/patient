"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_patient-access_detail-patient-access_detail-patient-access_module_ts"],{

/***/ 9534:
/*!***********************************************************************************!*\
  !*** ./src/app/patient-access/detail-access-mode/detail-access-mode.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailAccessModeComponent": () => (/* binding */ DetailAccessModeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_access_mode_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./detail-access-mode.component.html */ 4578);
/* harmony import */ var _detail_access_mode_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-access-mode.component.scss */ 9099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);



/* eslint-disable @typescript-eslint/naming-convention */

let DetailAccessModeComponent = class DetailAccessModeComponent {
    constructor() {
        this.AdaptationRequests = [];
        this.AdaptationTypes = [];
        this.AdaptationDetails = [];
        this.segmentModel = 'AdaptationRequest';
        this.idPassedByURL = null;
    }
    ngOnInit() { }
};
DetailAccessModeComponent.ctorParameters = () => [];
DetailAccessModeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-detail-access-mode',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_access_mode_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_access_mode_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailAccessModeComponent);



/***/ }),

/***/ 6852:
/*!**********************************************************************************************!*\
  !*** ./src/app/patient-access/detail-patient-access/detail-patient-access-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPatientAccessPageRoutingModule": () => (/* binding */ DetailPatientAccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _detail_patient_access_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-patient-access.page */ 4147);




const routes = [
    {
        path: '',
        component: _detail_patient_access_page__WEBPACK_IMPORTED_MODULE_0__.DetailPatientAccessPage
    }
];
let DetailPatientAccessPageRoutingModule = class DetailPatientAccessPageRoutingModule {
};
DetailPatientAccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailPatientAccessPageRoutingModule);



/***/ }),

/***/ 6850:
/*!**************************************************************************************!*\
  !*** ./src/app/patient-access/detail-patient-access/detail-patient-access.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPatientAccessPageModule": () => (/* binding */ DetailPatientAccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _detail_access_mode_detail_access_mode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../detail-access-mode/detail-access-mode.component */ 9534);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 5082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _detail_patient_access_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-patient-access-routing.module */ 6852);
/* harmony import */ var _detail_patient_access_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-patient-access.page */ 4147);









let DetailPatientAccessPageModule = class DetailPatientAccessPageModule {
};
DetailPatientAccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _detail_patient_access_routing_module__WEBPACK_IMPORTED_MODULE_1__.DetailPatientAccessPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule
        ],
        declarations: [_detail_patient_access_page__WEBPACK_IMPORTED_MODULE_2__.DetailPatientAccessPage, _detail_access_mode_detail_access_mode_component__WEBPACK_IMPORTED_MODULE_0__.DetailAccessModeComponent]
    })
], DetailPatientAccessPageModule);



/***/ }),

/***/ 4147:
/*!************************************************************************************!*\
  !*** ./src/app/patient-access/detail-patient-access/detail-patient-access.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPatientAccessPage": () => (/* binding */ DetailPatientAccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_patient_access_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./detail-patient-access.page.html */ 411);
/* harmony import */ var _detail_patient_access_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-patient-access.page.scss */ 2907);
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/patient.service */ 2158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 7897);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);









let DetailPatientAccessPage = class DetailPatientAccessPage {
    constructor(patientService, route, storage, alertController) {
        this.patientService = patientService;
        this.route = route;
        this.storage = storage;
        this.alertController = alertController;
        this.segmentModel = 'details';
        this.allAccessMode = [];
        this.patientAccessDetailNull = false;
        this.idPassedByURL = null;
        this.name = '';
        this.patientAccessForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            idPatientProfile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(Number, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])
        });
    }
    ngOnInit() {
        this.idPassedByURL = this.route.snapshot.params.Id;
        this.callingAccessdatil();
    }
    callingAccessdatil() {
        this.patientService.getPatientAccessById(this.idPassedByURL)
            .subscribe((res) => {
            console.log(res);
            this.patientAccessDetailNull = false;
            this.patientAccessDescrip = res.Description;
            this.patientAccessName = res.Name;
            if (res.AccessMode != null) {
                this.accessMode = res.AccessMode;
                this.patientAccessDetailNull = false;
            }
            else {
                this.patientAccessDetailNull = true;
                this.accessMode = null;
            }
        }, (err) => {
            console.log(err);
        });
        this.storage.get('idPatientProfile').then((val) => {
            if (val != null) {
                this.patientProfileId = val;
                this.accessModeId();
            }
        });
    }
    accessModeId() {
        this.patientService.getAccessModeByIdPatientprofile(this.patientProfileId)
            .subscribe((res) => {
            this.allAccessMode = res;
        }, (err) => {
            console.log(err);
        });
    }
    onSubmit() {
        this.idAccessMode = this.patientAccessForm.get('idPatientProfile').value;
        this.patientService.assignAccessModeToPatientAccess(this.idPassedByURL, this.idAccessMode)
            .subscribe((res) => {
            this.presentAlert();
        }, (err) => {
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'SUCCESS!',
                message: `The Access Profile has been assigned successfully`,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.callingAccessdatil();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
DetailPatientAccessPage.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__.PatientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
DetailPatientAccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-detail-patient-access',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_patient_access_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_patient_access_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailPatientAccessPage);



/***/ }),

/***/ 4578:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/patient-access/detail-access-mode/detail-access-mode.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-segment value=\"all\" color=\"tertiary\" class=\"animate__animated animate__slideInUp animate__fast\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\" lines=\"none\">\r\n    <ion-segment-button value=\"AdaptationRequest\">\r\n        <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\r\n        <ion-label>Adaptation Request</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"AdaptationType\">\r\n        <ion-icon name=\"star-half-outline\"></ion-icon>\r\n        <ion-label>Adaptation Type</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"AdaptationDetail\">\r\n        <ion-icon name=\"telescope-outline\"></ion-icon>\r\n        <ion-label>Adaptation Detail</ion-label>\r\n    </ion-segment-button>\r\n</ion-segment>\r\n<div *ngIf=\"segmentModel === 'AdaptationRequest'\">\r\n    <!--<div class=\"container\" *ngFor=\"let AdaptationRequest of AdaptationRequests|keyvalue\">-->\r\n    <div class=\"container\">\r\n        <mat-expansion-panel details>\r\n            <mat-expansion-panel-header slot=\"start\">\r\n                <mat-panel-title>\r\n                    <ion-item>\r\n                        <ion-icon class=\"segmentIcon\" name=\"list-circle-outline\"></ion-icon>\r\n                        <ion-label>VALUE</ion-label>\r\n                        <!-- <ion-label>{{AdaptationRequest.value['Description']}}</ion-label> -->\r\n                    </ion-item>\r\n                </mat-panel-title>\r\n\r\n            </mat-expansion-panel-header>\r\n\r\n            <ion-item-sliding>\r\n                <ion-item-options side=\"start\">\r\n                    <ion-item-option color=\"danger\" (click)=\"null\" expandable>\r\n                        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n\r\n            <ion-card>\r\n                <ion-item>\r\n\r\n                    <ion-label>Access Mode Target</ion-label>\r\n                    <ion-badge> Auditory</ion-badge>\r\n                    <!-- <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 1\"> Auditory</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 2\"> Colour</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 3\"> ItemSize</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 4\"> Olfactory</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 5\"> Orientation</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 6\"> Position</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 7\"> Tactile</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 8\"> Text on image</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 9\"> Textual</ion-badge>\r\n                    <ion-badge *ngIf=\"$any(AdaptationRequest).value.AccessModeTarget === 10\"> Visual</ion-badge> -->\r\n\r\n                </ion-item>\r\n                <ion-item>\r\n\r\n                    <ion-label>Language Of Adaptation</ion-label>\r\n\r\n                    <ion-badge>ES</ion-badge>\r\n                    <!--  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 1\">ES</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 2\">EN</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 3\">FR</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 4\">IT</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 5\">PR</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 6\">DE</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 7\">JA</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 8\">KO</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationRequest).value.LanguageOfAdaptation === 9\">ZH</ion-badge> -->\r\n\r\n\r\n                </ion-item>\r\n\r\n            </ion-card>\r\n\r\n        </mat-expansion-panel>\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n<div *ngIf=\"segmentModel === 'AdaptationType'\">\r\n    <!-- <div class=\"container\" *ngFor=\"let AdaptationType of AdaptationTypes|keyvalue\"> -->\r\n    <div class=\"container\">\r\n        <mat-expansion-panel details>\r\n            <mat-expansion-panel-header slot=\"start\">\r\n                <mat-panel-title>\r\n                    <ion-item>\r\n                        <ion-icon class=\"segmentIcon\" name=\"list-circle-outline\"></ion-icon>\r\n                        <!-- <ion-label>{{AdaptationType.value['Description']}}</ion-label> -->\r\n                        <ion-label>VALUE</ion-label>\r\n                    </ion-item>\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <ion-item-sliding>\r\n                <ion-item-options side=\"start\">\r\n                    <ion-item-option color=\"danger\" (click)=\"null\" expandable>\r\n                        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n            <ion-card>\r\n                <ion-item>\r\n                    <ion-label>Adaption Request</ion-label>\r\n                    <ion-badge>Alternative Text</ion-badge>\r\n                    <!--  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 1\"> Alternative Text</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 2\"> Audio description</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 3\"> Captions</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 4\"> E_book</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 5\"> Haptic</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 6\"> HighContrast</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 7\"> LongDescription</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 8\"> Sign Language</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationType).value.AdaptionRequest === 9\"> Transcript</ion-badge> -->\r\n                </ion-item>\r\n            </ion-card>\r\n        </mat-expansion-panel>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"segmentModel === 'AdaptationDetail'\">\r\n    <!-- <div class=\"container\" *ngFor=\"let AdaptationDetail of AdaptationDetails|keyvalue\"> -->\r\n    <div class=\"container\">\r\n        <mat-expansion-panel details>\r\n            <mat-expansion-panel-header slot=\"start\">\r\n                <mat-panel-title>\r\n                    <ion-item>\r\n                        <ion-icon class=\"segmentIcon\" name=\"list-circle-outline\"></ion-icon>\r\n                        <!-- <ion-label>{{AdaptationDetail.value['Description']}}</ion-label> -->\r\n                        <ion-label>VALUE</ion-label>\r\n                    </ion-item>\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <ion-item-sliding>\r\n                <ion-item-options side=\"start\">\r\n                    <ion-item-option color=\"danger\" (click)=\"null\" expandable>\r\n                        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n            <ion-card>\r\n                <ion-item>\r\n                    <ion-label>Adaptation Request</ion-label>\r\n                    <ion-badge> Enhanced</ion-badge>\r\n                    <!--  <ion-badge *ngIf=\"$any(AdaptationDetail).value.AdaptationRequest === 1\"> Enhanced</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationDetail).value.AdaptationRequest === 2\"> RealTime</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationDetail).value.AdaptationRequest === 3\"> Record</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationDetail).value.AdaptationRequest === 4\"> Symbolic</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationDetail).value.AdaptationRequest === 5\"> Synthesized</ion-badge>\r\n                  <ion-badge *ngIf=\"$any(AdaptationDetail).value.AdaptationRequest === 6\"> Verbatim</ion-badge> -->\r\n\r\n                </ion-item>\r\n            </ion-card>\r\n        </mat-expansion-panel>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ 411:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/patient-access/detail-patient-access/detail-patient-access.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Patient Access\" defaultHref=\"/tabs/tab1/patientAccess\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n    <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\r\n                <ion-img src='assets/icon/accessW.png'></ion-img>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n                <ion-label class=\"text-top\">{{ patientAccessName}}</ion-label>\r\n\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n\r\n                <ion-label class=\"text-top\">\r\n                    <h4>{{ patientAccessDescrip}}</h4>\r\n                </ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-segment [hidden]=\"patientAccessDetailNull\" value=\"all\" color=\"tertiary\" class=\"animate__animated animate__slideInUp animate__fast\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\" lines=\"none\">\r\n        <ion-segment-button value=\"details\">\r\n            <ion-icon name=\"analytics\"></ion-icon>\r\n            <ion-label>Access Mode</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"accessModeDetail\">\r\n            <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n            <ion-label>Detail Access Mode</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-card-header [hidden]=\"!patientAccessDetailNull\" color=\"warning\" class=\"animate__animated animate__fadeInLeft animate__slow\">\r\n        <ion-icon size=\"large\" name=\"warning-outline\"></ion-icon>No Profile Access has been added to this Access mode. To add Patient Access, select one.\r\n    </ion-card-header>\r\n    <div class=\"segment\" *ngIf=\"segmentModel === 'details'\" [hidden]=\"patientAccessDetailNull\">\r\n        <ion-list>\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"accessibility-outline\"></ion-icon>Access Mode Name</ion-list-header>\r\n            <ion-item>\r\n\r\n                <ion-label text-wrap> {{$any(accessMode)?.Name}}</ion-label>\r\n            </ion-item>\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"clipboard-outline\"></ion-icon>Description</ion-list-header>\r\n            <ion-item>\r\n\r\n                <ion-label text-wrap> {{$any(accessMode)?.Description}}</ion-label>\r\n\r\n            </ion-item>\r\n            <ion-list-header>\r\n\r\n                <ion-icon class=\"segmentIcon\" name=\"qr-code-outline\"></ion-icon>Access Mode Type</ion-list-header>\r\n            <ion-item>\r\n\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 1\"> Auditory</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 2\"> Colour</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 3\"> ItemSize</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 4\"> Olfactory</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 5\"> Orientation</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 6\"> Position</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 7\"> Tactile</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 8\"> Text on image</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 9\"> Textual</ion-label>\r\n                <ion-label *ngIf=\"$any(accessMode)?.TypeAccessMode === 10\"> Visual</ion-label>\r\n\r\n\r\n\r\n                <!-- <ion-label> {{$any(patientData)?.IsActive}}</ion-label> -->\r\n\r\n            </ion-item>\r\n\r\n\r\n        </ion-list>\r\n    </div>\r\n    <div class=\"segment\" *ngIf=\"segmentModel === 'accessModeDetail'\">\r\n        <app-detail-access-mode></app-detail-access-mode>\r\n    </div>\r\n    <form [formGroup]=\"patientAccessForm\" (ngSubmit)=\"onSubmit()\" [hidden]=\"!patientAccessDetailNull\">\r\n\r\n        <ion-item lines=\"full\">\r\n            <ion-label position=\"stacked\">Profile Access</ion-label>\r\n\r\n            <ion-select multiple=\"false\" okText=\"Okay\" cancelText=\"Dismiss\" formControlName=\"idPatientProfile\">\r\n\r\n                <div class=\"error\" *ngIf=\"patientAccessForm.controls.idPatientProfile.errors && patientAccessForm.controls.idPatientProfile.touched\">\r\n                    Please fill out this field\r\n                </div>\r\n\r\n                <div>\r\n                    <ion-select-option *ngFor=\"let accessMode of allAccessMode\" [value]=\"accessMode['Id']\">{{accessMode['Name']}}</ion-select-option>\r\n\r\n                </div>\r\n\r\n            </ion-select>\r\n\r\n        </ion-item>\r\n        <br>\r\n        <br>\r\n\r\n        <ion-button expand=\"block \" class=\"save\" size=\"small\" fill=\"solid\" type=\"submit\" color=\"light\" [disabled]=\"!patientAccessForm.valid\">Done</ion-button>\r\n    </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ 9099:
/*!*************************************************************************************!*\
  !*** ./src/app/patient-access/detail-access-mode/detail-access-mode.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgba(207, 218, 182, 0.658) !important;\n}\nion-header {\n  background-color: #f8f8f8;\n}\nion-badge {\n  background-color: #f8f8f8;\n  color: black;\n}\n.text-top {\n  text-align: center;\n  margin-top: -18px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-end {\n  margin-top: -18px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 14px;\n}\n.segmentIcon {\n  margin-right: 7px;\n  height: 14px;\n}\nion-list-header {\n  margin-bottom: -9px;\n}\napp-component-telemetry {\n  width: 100%;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 2px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1hY2Nlc3MtbW9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBQTtBQUdBLHVFQUFBO0FBRUE7RUFDSSxZQUFBO0FBRko7QUFLQTtFQUNJLDJCQUFBO0FBRko7QUFLQTtFQUNJLG1EQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBRko7QUFLQTtFQUNJLGlCQUFBO0FBRko7QUFPUTtFQUNJLDRDQUFBO0VBQ0EsNkRBQUE7QUFKWjtBQVFRO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQU5aO0FBV0E7RUFDSSxZQUFBO0FBUko7QUFXQTtFQUNJLGlCQUFBO0FBUko7QUFXQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBUko7QUFXQTtFQUNJLG1CQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFSSiIsImZpbGUiOiJkZXRhaWwtYWNjZXNzLW1vZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG5cclxuXHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMDcsIDIxOCwgMTgyLCAwLjY1OCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50ZXh0LXRvcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMThweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW9uLWFsaWduLXNlbGYtZW5kIHtcclxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICBpb24tdGFiLWJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1sb2FkaW5nIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmljb25UZXh0Pmlvbi1jb2w+aW9uLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcblxyXG4uc2VnbWVudEljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOXB4O1xyXG59XHJcblxyXG5hcHAtY29tcG9uZW50LXRlbGVtZXRyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2907:
/*!**************************************************************************************!*\
  !*** ./src/app/patient-access/detail-patient-access/detail-patient-access.page.scss ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgba(207, 218, 182, 0.658) !important;\n}\nion-header {\n  background-color: rgba(180, 199, 136, 0.658);\n}\n.text-top {\n  text-align: center;\n  margin-top: -16px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-center {\n  margin-top: -15px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 14px;\n}\n.segmentIcon {\n  margin-right: 7px;\n  height: 14px;\n}\nion-list-header {\n  margin-bottom: -9px;\n}\napp-component-telemetry {\n  width: 100%;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1wYXRpZW50LWFjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQUE7QUFHQSx1RUFBQTtBQUVBO0VBQ0ksWUFBQTtBQUZKO0FBS0E7RUFDSSwyQkFBQTtBQUZKO0FBS0E7RUFDSSxtREFBQTtBQUZKO0FBS0E7RUFDSSw0Q0FBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBRko7QUFLQTtFQUNJLGlCQUFBO0FBRko7QUFPUTtFQUNJLDRDQUFBO0VBQ0EsNkRBQUE7QUFKWjtBQVFRO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQU5aO0FBV0E7RUFDSSxZQUFBO0FBUko7QUFXQTtFQUNJLGlCQUFBO0FBUko7QUFXQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBUko7QUFXQTtFQUNJLG1CQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBUkoiLCJmaWxlIjoiZGV0YWlsLXBhdGllbnQtYWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcblxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIwNywgMjE4LCAxODIsIDAuNjU4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxOTksIDEzNiwgMC42NTgpO1xyXG59XHJcblxyXG4udGV4dC10b3Age1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbG9hZGluZyB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG5cclxuLnNlZ21lbnRJY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTlweDtcclxufVxyXG5cclxuYXBwLWNvbXBvbmVudC10ZWxlbWV0cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_patient-access_detail-patient-access_detail-patient-access_module_ts.js.map