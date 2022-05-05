"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_patient-access_patient-access_module_ts"],{

/***/ 8497:
/*!*****************************************************************!*\
  !*** ./src/app/patient-access/patient-access-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientAccessPageRoutingModule": () => (/* binding */ PatientAccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _patient_access_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient-access.page */ 6689);




const routes = [
    {
        path: '',
        component: _patient_access_page__WEBPACK_IMPORTED_MODULE_0__.PatientAccessPage
    },
    {
        path: 'detail-patient-access',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("src_app_patient-access_detail-patient-access_detail-patient-access_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./detail-patient-access/detail-patient-access.module */ 6850)).then(m => m.DetailPatientAccessPageModule)
    },
];
let PatientAccessPageRoutingModule = class PatientAccessPageRoutingModule {
};
PatientAccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PatientAccessPageRoutingModule);



/***/ }),

/***/ 1438:
/*!*********************************************************!*\
  !*** ./src/app/patient-access/patient-access.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientAccessPageModule": () => (/* binding */ PatientAccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _patient_access_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient-access-routing.module */ 8497);
/* harmony import */ var _patient_access_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-access.page */ 6689);







let PatientAccessPageModule = class PatientAccessPageModule {
};
PatientAccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _patient_access_routing_module__WEBPACK_IMPORTED_MODULE_0__.PatientAccessPageRoutingModule
        ],
        declarations: [_patient_access_page__WEBPACK_IMPORTED_MODULE_1__.PatientAccessPage]
    })
], PatientAccessPageModule);



/***/ }),

/***/ 6689:
/*!*******************************************************!*\
  !*** ./src/app/patient-access/patient-access.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientAccessPage": () => (/* binding */ PatientAccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_patient_access_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./patient-access.page.html */ 1718);
/* harmony import */ var _patient_access_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-access.page.scss */ 409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/patient.service */ 2158);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 7897);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);








let PatientAccessPage = class PatientAccessPage {
    constructor(patientService, router, storage, alertController, loadingController) {
        this.patientService = patientService;
        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.patientAccess = [];
        this.patientAccessNull = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.get('idScenario').then((val) => {
            this.idScenario = val;
            if (this.idScenario != null) {
                this.callPatientAccess();
            }
        });
    }
    callPatientAccess() {
        this.patientService.getPatientAccessByIdScenario(this.idScenario)
            .subscribe((res) => {
            if (res != null) {
                this.patientAccess = res;
                this.patientAccessNull = false;
            }
            else {
                this.patientAccess = null;
                this.patientAccessNull = true;
            }
        }, (err) => {
            console.log(err);
        });
    }
    closeSliding(slidingItem) {
        slidingItem.close();
    }
    deletePatientAccess(slidingItem, id, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            slidingItem.close();
            console.log(id);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Remove Patient Access',
                message: `Are you sure you want remove ${name}?`,
                buttons: [{
                        text: 'Cancel',
                        handler: () => {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Agree',
                        handler: () => {
                            console.log('Agree clicked');
                            this.patientService.deletePatientAccess(id)
                                // tslint:disable-next-line: deprecation
                                .subscribe((res) => {
                                this.ionViewWillEnter();
                            }, (err) => {
                                console.log(err);
                            });
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
PatientAccessPage.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__.PatientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
PatientAccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-patient-access',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_patient_access_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_patient_access_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PatientAccessPage);



/***/ }),

/***/ 1718:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/patient-access/patient-access.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Patient Dashboard\" defaultHref=\"/tabs/tab1\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n    <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\r\n                <ion-img src='assets/icon/access.png'></ion-img>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n                <ion-label class=\"text-top\">Patient Access</ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-card-header>\r\n\r\n    </ion-card-header>\r\n    <ion-list>\r\n        <ion-item class=\"item\" detail [routerLink]=\"['detail-patient-access']\">\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"assets/icon/access.png\">\r\n            </ion-avatar>\r\n        </ion-item>\r\n        <div class=\"patient\" *ngFor=\"let patientAcces of patientAccess\">\r\n\r\n            <ion-item-sliding #slidingItem>\r\n\r\n                <ion-item class=\"item\" detail [routerLink]=\"['detail-patient-access',patientAcces['Id']]\">\r\n                    <ion-avatar slot=\"start\">\r\n                        <img src=\"assets/icon/access.png\">\r\n\r\n                    </ion-avatar>\r\n\r\n                    <ion-label> {{patientAcces['Name']}}</ion-label>\r\n\r\n\r\n                </ion-item>\r\n\r\n\r\n                <ion-item-options side=\"end\" (ionSwipe)=\"deletePatientAccess(slidingItem,patientAcces['Id'], patientAcces['Name'])\">\r\n                    <ion-item-option color=\"danger\" expandable (click)=\"deletePatientAccess(slidingItem,patientAcces['Id'], patientAcces['Name'])\">\r\n\r\n                        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n\r\n                    </ion-item-option>\r\n\r\n                </ion-item-options>\r\n\r\n                <ion-item-options side=\"start\">\r\n\r\n                    <ion-item-option color=\"success\" expandable (click)=\"closeSliding(slidingItem)\" [routerLink]=\"['edit-practitioner',patientAcces['Id']]\">\r\n\r\n                        <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\r\n\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </div>\r\n    </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 409:
/*!*********************************************************!*\
  !*** ./src/app/patient-access/patient-access.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgba(207, 218, 182, 0.658) !important;\n}\nion-header {\n  background-color: rgba(180, 199, 136, 0.658);\n}\n.text-top {\n  text-align: center;\n  margin-top: -18px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-center {\n  margin-top: -15px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 10px;\n}\napp-component-telemetry {\n  width: 100%;\n}\n.deviceTemplate-card > ion-img {\n  margin-left: 14px;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 2px;\n  margin-left: 4px;\n  margin-right: 4px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtYWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBQTtBQUdBLHVFQUFBO0FBRUE7RUFDSSxZQUFBO0FBRko7QUFLQTtFQUNJLDJCQUFBO0FBRko7QUFLQTtFQUNJLG1EQUFBO0FBRko7QUFLQTtFQUNJLDRDQUFBO0FBRko7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQU9RO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQUpaO0FBUVE7RUFDSSw0Q0FBQTtFQUNBLDZEQUFBO0FBTlo7QUFXQTtFQUNJLFlBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7QUFSSjtBQVdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJKO0FBV0E7RUFDSSxXQUFBO0FBUko7QUFXQTtFQUNJLGlCQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVJKIiwiZmlsZSI6InBhdGllbnQtYWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcblxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIwNywgMjE4LCAxODIsIDAuNjU4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxOTksIDEzNiwgMC42NTgpO1xyXG59XHJcblxyXG4udGV4dC10b3Age1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbG9hZGluZyB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYXBwLWNvbXBvbmVudC10ZWxlbWV0cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kZXZpY2VUZW1wbGF0ZS1jYXJkPmlvbi1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_patient-access_patient-access_module_ts.js.map