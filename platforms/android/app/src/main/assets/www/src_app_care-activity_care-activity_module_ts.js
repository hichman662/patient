"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_care-activity_care-activity_module_ts"],{

/***/ 9928:
/*!***************************************************************!*\
  !*** ./src/app/care-activity/care-activity-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareActivityPageRoutingModule": () => (/* binding */ CareActivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _care_activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./care-activity.page */ 5335);




const routes = [
    {
        path: '',
        component: _care_activity_page__WEBPACK_IMPORTED_MODULE_0__.CareActivityPage
    },
    {
        path: 'detail-care-activity',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_care-activity_detail-care-activity_detail-care-activity_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./detail-care-activity/detail-care-activity.module */ 9427)).then(m => m.DetailCareActivityPageModule)
    },
    {
        path: 'nutrition/:Id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_nutrition_nutrition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../nutrition/nutrition.module */ 9568)).then(m => m.NutritionPageModule)
    },
    {
        path: 'appointment/:Id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_appointment_appointment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../appointment/appointment.module */ 2219)).then(m => m.AppointmentPageModule)
    },
    {
        path: 'communication/:Id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_communication_communication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../communication/communication.module */ 3423)).then(m => m.CommunicationPageModule)
    },
    {
        path: 'medication/:Id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_medication_medication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../medication/medication.module */ 5114)).then(m => m.MedicationPageModule)
    }
];
let CareActivityPageRoutingModule = class CareActivityPageRoutingModule {
};
CareActivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CareActivityPageRoutingModule);



/***/ }),

/***/ 2288:
/*!*******************************************************!*\
  !*** ./src/app/care-activity/care-activity.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareActivityPageModule": () => (/* binding */ CareActivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _care_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./care-activity-routing.module */ 9928);
/* harmony import */ var _care_activity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./care-activity.page */ 5335);







let CareActivityPageModule = class CareActivityPageModule {
};
CareActivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _care_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.CareActivityPageRoutingModule
        ],
        declarations: [_care_activity_page__WEBPACK_IMPORTED_MODULE_1__.CareActivityPage]
    })
], CareActivityPageModule);



/***/ }),

/***/ 5335:
/*!*****************************************************!*\
  !*** ./src/app/care-activity/care-activity.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareActivityPage": () => (/* binding */ CareActivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_care_activity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./care-activity.page.html */ 6145);
/* harmony import */ var _care_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./care-activity.page.scss */ 2248);
/* harmony import */ var _services_careplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/careplan.service */ 5523);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 7897);







let CareActivityPage = class CareActivityPage {
    constructor(carePlanService, router, storage) {
        this.carePlanService = carePlanService;
        this.router = router;
        this.storage = storage;
        this.careActivities = [];
        this.careActivityNull = false;
        this.nameCareActivity = '';
    }
    ngOnInit() {
    }
};
CareActivityPage.ctorParameters = () => [
    { type: _services_careplan_service__WEBPACK_IMPORTED_MODULE_2__.CarePlanService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
CareActivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-care-activity',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_care_activity_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_care_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CareActivityPage);



/***/ }),

/***/ 6145:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/care-activity/care-activity.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Care plan dashboard\" defaultHref=\"/tabs/tab2\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n\n\n    </ion-toolbar>\n    <ion-row>\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\n                <ion-img src='assets/icon/careActivity.png'></ion-img>\n\n            </ion-card>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\n\n            <ion-list-header>\n                <ion-label class=\"text-top\">Care Activities</ion-label>\n            </ion-list-header>\n\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\n            <ion-label class=\"text-top\">{{nameCareActivity}}</ion-label>\n        </ion-col>\n\n    </ion-row>\n</ion-header>\n<ion-content>\n    <ion-card-header [hidden]=\"!careActivityNull\" color=\"warning\" class=\"animate__animated animate__fadeInLeft animate__slow\">\n        <ion-icon size=\"large\" name=\"warning-outline\"></ion-icon> No Care Activity has been added to this scenario. To add Care Actiity, press the Add button.\n    </ion-card-header>\n    <ion-list>\n        <!-- <div class=\"carePlan\" *ngFor=\"let careActivitie of careActivities\"> -->\n        <div class=\"carePlan\">\n            <ion-item-sliding #slidingItem>\n                <!-- <div *ngIf=\"careActivitie.ValueCareActivity['TypeActivity'] === 1\"> -->\n                <div>\n                    <ion-item class=\"item\" detail [routerLink]=\"['medication',0]\">\n                        <ion-avatar slot=\"start\">\n                            <img src=\"assets/icon/medication.png\">\n                        </ion-avatar>\n                        <ion-label text-wrap>\n                            <h5>Medication</h5>\n                            <!-- <h4> {{careActivitie['Name']}}</h4> -->\n                            <h4> Careactivity name</h4>\n                        </ion-label>\n                    </ion-item>\n                </div>\n                <!-- <div *ngIf=\"careActivitie.ValueCareActivity['TypeActivity'] === 2\"> -->\n                <div>\n                    <ion-item class=\"item\" detail [routerLink]=\"['nutrition',0]\">\n                        <ion-avatar slot=\"start\">\n                            <img src=\"assets/icon/nutrition.png\">\n                        </ion-avatar>\n                        <ion-label text-wrap>\n                            <h5>Nutrition</h5>\n                            <h4> Name Care activity</h4>\n                            <!-- <h4> {{careActivitie['Name']}}</h4> -->\n                        </ion-label>\n                    </ion-item>\n                </div>\n                <!-- <div *ngIf=\"careActivitie.ValueCareActivity['TypeActivity'] === 3\"> -->\n                <div>\n                    <!-- <ion-item class=\"item\" detail [routerLink]=\"['communication',careActivitie['0']]\"> -->\n                    <ion-item class=\"item\" detail [routerLink]=\"['communication',0]\">\n                        <ion-avatar slot=\"start\">\n                            <img src=\"assets/icon/communication.png\">\n                        </ion-avatar>\n                        <ion-label text-wrap>\n                            <h5>Communication</h5>\n                            <h4>Name careactivities</h4>\n                            <!-- <h4> {{careActivitie['Name']}}</h4> -->\n                        </ion-label>\n                    </ion-item>\n                </div>\n                <!-- <div *ngIf=\"careActivitie.ValueCareActivity['TypeActivity'] === 4\"> -->\n                <div>\n                    <ion-item class=\"item\" detail [routerLink]=\"['appointment',0]\">\n                        <ion-avatar slot=\"start\">\n                            <img src=\"assets/icon/appointment.png\">\n                        </ion-avatar>\n                        <ion-label text-wrap>\n                            <h5>Appointment</h5>\n                            <!-- <h4> {{careActivitie['Name']}}</h4> -->\n                            <h4> Name</h4>\n                        </ion-label>\n                    </ion-item>\n                </div>\n\n                <!--  <ion-item-options side=\"end\" (ionSwipe)=\"deletePatientProfile(slidingItem,patientProfile['Id'], patientProfile['Name'])\">\n            <ion-item-option color=\"danger\" expandable (click)=\"deletePatientProfile(slidingItem,patientProfile['Id'], patientProfile['Name'])\">\n\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n\n            </ion-item-option>\n\n        </ion-item-options>\n\n        <ion-item-options side=\"start\">\n\n            <ion-item-option color=\"success\" expandable (click)=\"closeSliding(slidingItem)\" [routerLink]=\"['edit-patient-profile',patientProfile['Id']]\">\n\n                <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n\n            </ion-item-option>\n        </ion-item-options> -->\n            </ion-item-sliding>\n        </div>\n    </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ 2248:
/*!*******************************************************!*\
  !*** ./src/app/care-activity/care-activity.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgb(167, 195, 236) !important;\n}\nion-header {\n  background-color: #a7c3ec;\n}\n.text-top {\n  text-align: center;\n  margin-top: -18px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-center {\n  margin-top: -15px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 10px;\n}\napp-component-telemetry {\n  width: 100%;\n}\n.deviceTemplate-card > ion-img {\n  margin-left: 14px;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 2px;\n  margin-left: 4px;\n  margin-right: 4px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmUtYWN0aXZpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBR0EsdUVBQUE7QUFFQTtFQUNJLFlBQUE7QUFGSjtBQUtBO0VBQ0ksMkJBQUE7QUFGSjtBQUtBO0VBQ0ksMkNBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUZKO0FBS0E7RUFDSSxpQkFBQTtBQUZKO0FBT1E7RUFDSSw0Q0FBQTtFQUNBLDZEQUFBO0FBSlo7QUFRUTtFQUNJLDRDQUFBO0VBQ0EsNkRBQUE7QUFOWjtBQVdBO0VBQ0ksWUFBQTtBQVJKO0FBV0E7RUFDSSxpQkFBQTtBQVJKO0FBV0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBUkoiLCJmaWxlIjoiY2FyZS1hY3Rpdml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG5cclxuXHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDE2NywgMTk1LCAyMzYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMTk1LCAyMzYpO1xyXG59XHJcblxyXG4udGV4dC10b3Age1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbG9hZGluZyB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYXBwLWNvbXBvbmVudC10ZWxlbWV0cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kZXZpY2VUZW1wbGF0ZS1jYXJkPmlvbi1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_care-activity_care-activity_module_ts.js.map