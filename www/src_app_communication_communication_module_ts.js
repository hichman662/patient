"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_communication_communication_module_ts"],{

/***/ 1606:
/*!***************************************************************!*\
  !*** ./src/app/communication/communication-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationPageRoutingModule": () => (/* binding */ CommunicationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _communication_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./communication.page */ 9844);




const routes = [
    {
        path: '',
        component: _communication_page__WEBPACK_IMPORTED_MODULE_0__.CommunicationPage
    }
];
let CommunicationPageRoutingModule = class CommunicationPageRoutingModule {
};
CommunicationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommunicationPageRoutingModule);



/***/ }),

/***/ 3423:
/*!*******************************************************!*\
  !*** ./src/app/communication/communication.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationPageModule": () => (/* binding */ CommunicationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _communication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./communication-routing.module */ 1606);
/* harmony import */ var _communication_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication.page */ 9844);







let CommunicationPageModule = class CommunicationPageModule {
};
CommunicationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _communication_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommunicationPageRoutingModule
        ],
        declarations: [_communication_page__WEBPACK_IMPORTED_MODULE_1__.CommunicationPage]
    })
], CommunicationPageModule);



/***/ }),

/***/ 9844:
/*!*****************************************************!*\
  !*** ./src/app/communication/communication.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationPage": () => (/* binding */ CommunicationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_communication_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./communication.page.html */ 374);
/* harmony import */ var _communication_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication.page.scss */ 1151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let CommunicationPage = class CommunicationPage {
    constructor() {
        this.segmentModel = 'communication';
        this.idPassedByURL = null;
    }
    ngOnInit() {
    }
};
CommunicationPage.ctorParameters = () => [];
CommunicationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-communication',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_communication_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_communication_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommunicationPage);



/***/ }),

/***/ 374:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/communication/communication.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Care Activities\" defaultHref=\"tabs/tab2/careActivity\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n    <ion-row>\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\n                <ion-img src='assets/icon/communicationW.png'></ion-img>\n\n            </ion-card>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\n\n            <ion-list-header>\n                <!-- <ion-label class=\"text-top\">{{ careActivityName}}</ion-label> -->\n                <ion-label class=\"text-top\"> careActivityName</ion-label>\n\n            </ion-list-header>\n\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\n\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\n\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\n\n            <ion-list-header>\n\n                <ion-label class=\"text-top-desc\">\n                    <!-- <h4>{{ careActivityDescrip}}</h4> -->\n                    <h4>careActivityDescrip</h4>\n                </ion-label>\n            </ion-list-header>\n\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\n\n        </ion-col>\n\n    </ion-row>\n    <ion-segment value=\"all\" color=\"tertiary\" class=\"animate__animated animate__slideInUp animate__fast\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\" lines=\"none\">\n        <ion-segment-button value=\"communication\">\n            <ion-icon name=\"repeat-outline\"></ion-icon>\n            <ion-label>Communication</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"details\">\n            <ion-icon name=\"receipt-outline\"></ion-icon>\n            <ion-label>Activity Detail</ion-label>\n        </ion-segment-button>\n\n\n    </ion-segment>\n</ion-header>\n<ion-content>\n    <div class=\"segment\" *ngIf=\"segmentModel === 'communication'\">\n        <ion-list>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"clipboard-outline\"></ion-icon>Name</ion-list-header>\n            <ion-item>\n                <!-- <ion-label> {{communicationName}}</ion-label> -->\n                <ion-label> communicationName</ion-label>\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"receipt-outline\"></ion-icon>Description</ion-list-header>\n            <ion-item>\n                <ion-label> Description</ion-label>\n                <!-- <ion-label> {{communicationDescrip}}</ion-label> -->\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"calendar-outline\"></ion-icon>Send Date</ion-list-header>\n            <ion-item>\n\n                <ion-label> send Date:2022</ion-label>\n                <!-- <ion-label> {{$any(communicationDetail)?.SendDate |date}}</ion-label> -->\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"wifi-outline\"></ion-icon>Severity</ion-list-header>\n            <ion-item>\n                <ion-label> Warning</ion-label>\n\n                <!--  <ion-label *ngIf=\"$any(communicationDetail)?.Severity === 1\"> Warning</ion-label>\n                <ion-label *ngIf=\"$any(communicationDetail)?.Severity === 2\"> Error</ion-label>\n                <ion-label *ngIf=\"$any(communicationDetail)?.Severity === 3\"> Info</ion-label> -->\n\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"mail-outline\"></ion-icon>Message</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(communicationDetail)?.Message}}</ion-label> -->\n                <ion-label> communicationDetailMessage</ion-label>\n\n            </ion-item>\n\n\n        </ion-list>\n    </div>\n    <div class=\"segment\" *ngIf=\"segmentModel === 'details'\">\n        <ion-list>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"timer-outline\"></ion-icon>Periodicity</ion-list-header>\n            <ion-item>\n                <ion-label> Daily</ion-label>\n                <!-- <ion-label *ngIf=\"$any(valueCareActivity)?.Periodicity === 1\"> Daily</ion-label>\n                <ion-label *ngIf=\"$any(valueCareActivity)?.Periodicity === 2\"> Monthly</ion-label>\n                <ion-label *ngIf=\"$any(valueCareActivity)?.Periodicity === 3\"> Per Hour</ion-label>\n                <ion-label *ngIf=\"$any(valueCareActivity)?.Periodicity === 4\"> Weekly</ion-label> -->\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"alarm-outline\"></ion-icon>Duration</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(valueCareActivity)?.Duration}}</ion-label> -->\n                <ion-label>Duration</ion-label>\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"pin-outline\"></ion-icon>Location</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(valueCareActivity)?.Location}}</ion-label> -->\n                <ion-label>Location</ion-label>\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"code-outline\"></ion-icon>Outcome Code</ion-list-header>\n            <ion-item>\n\n                <!-- <ion-label> {{$any(valueCareActivity)?.OutcomeCode}}</ion-label> -->\n                <ion-label> OutcomeCode</ion-label>\n\n            </ion-item>\n            <ion-list-header>\n                <ion-icon class=\"segmentIcon\" name=\"code-working-outline\"></ion-icon>Activity Code</ion-list-header>\n            <ion-item>\n                <!-- <ion-label> {{$any(valueCareActivity)?.ActivityCode}}</ion-label> -->\n                <ion-label>ActivityCode</ion-label>\n\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ 1151:
/*!*******************************************************!*\
  !*** ./src/app/communication/communication.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgb(167, 195, 236) !important;\n}\nion-header {\n  background-color: #a7c3ec;\n}\n.text-top {\n  text-align: center;\n  margin-top: -10px;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.text-top-desc {\n  text-align: center;\n  margin-top: 5px;\n  font-size: 14px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-center {\n  margin-top: -15px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 14px;\n}\n.segmentIcon {\n  margin-right: 7px;\n  height: 14px;\n}\nion-list-header {\n  margin-bottom: -9px;\n}\napp-component-telemetry {\n  width: 100%;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBR0EsdUVBQUE7QUFFQTtFQUNJLFlBQUE7QUFGSjtBQUtBO0VBQ0ksMkJBQUE7QUFGSjtBQUtBO0VBQ0ksMkNBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQU9RO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQUpaO0FBUVE7RUFDSSw0Q0FBQTtFQUNBLDZEQUFBO0FBTlo7QUFXQTtFQUNJLFlBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7QUFSSjtBQVdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJKO0FBV0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFSSjtBQVdBO0VBQ0ksbUJBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtBQVJKO0FBV0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFSSiIsImZpbGUiOiJjb21tdW5pY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcblxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTY3LCAxOTUsIDIzNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxOTUsIDIzNik7XHJcbn1cclxuXHJcbi50ZXh0LXRvcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGV4dC10b3AtZGVzYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbG9hZGluZyB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG5cclxuLnNlZ21lbnRJY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTlweDtcclxufVxyXG5cclxuYXBwLWNvbXBvbmVudC10ZWxlbWV0cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_communication_communication_module_ts.js.map