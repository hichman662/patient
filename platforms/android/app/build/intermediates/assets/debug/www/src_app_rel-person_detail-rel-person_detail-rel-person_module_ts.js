"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_rel-person_detail-rel-person_detail-rel-person_module_ts"],{

/***/ 7484:
/*!**********************************************************************************!*\
  !*** ./src/app/rel-person/detail-rel-person/detail-rel-person-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailRelPersonPageRoutingModule": () => (/* binding */ DetailRelPersonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _detail_rel_person_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-rel-person.page */ 5641);




const routes = [
    {
        path: '',
        component: _detail_rel_person_page__WEBPACK_IMPORTED_MODULE_0__.DetailRelPersonPage
    }
];
let DetailRelPersonPageRoutingModule = class DetailRelPersonPageRoutingModule {
};
DetailRelPersonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailRelPersonPageRoutingModule);



/***/ }),

/***/ 6758:
/*!**************************************************************************!*\
  !*** ./src/app/rel-person/detail-rel-person/detail-rel-person.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailRelPersonPageModule": () => (/* binding */ DetailRelPersonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _detail_rel_person_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-rel-person-routing.module */ 7484);
/* harmony import */ var _detail_rel_person_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-rel-person.page */ 5641);







let DetailRelPersonPageModule = class DetailRelPersonPageModule {
};
DetailRelPersonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_rel_person_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailRelPersonPageRoutingModule
        ],
        declarations: [_detail_rel_person_page__WEBPACK_IMPORTED_MODULE_1__.DetailRelPersonPage]
    })
], DetailRelPersonPageModule);



/***/ }),

/***/ 5641:
/*!************************************************************************!*\
  !*** ./src/app/rel-person/detail-rel-person/detail-rel-person.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailRelPersonPage": () => (/* binding */ DetailRelPersonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_rel_person_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./detail-rel-person.page.html */ 4735);
/* harmony import */ var _detail_rel_person_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-rel-person.page.scss */ 379);
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/patient.service */ 2158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);






let DetailRelPersonPage = class DetailRelPersonPage {
    constructor(patientService, route) {
        this.patientService = patientService;
        this.route = route;
        this.segmentModel = 'details';
        this.idPassedByURL = null;
    }
    ngOnInit() {
        /* this.idPassedByURL = this.route.snapshot.params.Id;
        this.patientService.getRelatedPersonById(this.idPassedByURL)
        .subscribe((res: any ) => {
          console.log(res);
        if(res != null){
           this.relPersonName = res.Name;
           this.relPersonDescrip = res.Description;
           this.relPersonData = res.RpData;
    
        }
        }, (err) => {
          console.log(err);
        }); */
    }
};
DetailRelPersonPage.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__.PatientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
DetailRelPersonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-detail-rel-person',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_rel_person_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_rel_person_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailRelPersonPage);



/***/ }),

/***/ 4735:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rel-person/detail-rel-person/detail-rel-person.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Related Persons\" defaultHref=\"tabs/tab1/relatedPerson\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n    <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\r\n                <ion-img src='assets/icon/familyW.png'></ion-img>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n                <ion-label class=\"text-top\">{{ relPersonName}}</ion-label>\r\n\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n\r\n                <ion-label class=\"text-top\">\r\n                    <h4>{{ relPersonDescrip}}</h4>\r\n                </ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-segment value=\"all\" color=\"tertiary\" class=\"animate__animated animate__slideInUp animate__fast\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\" lines=\"none\">\r\n        <ion-segment-button value=\"details\">\r\n            <ion-icon name=\"receipt-outline\"></ion-icon>\r\n            <ion-label>Related Person Data</ion-label>\r\n        </ion-segment-button>\r\n\r\n    </ion-segment>\r\n</ion-header>\r\n<ion-content>\r\n\r\n    <div class=\"segment\" *ngIf=\"segmentModel === 'details'\">\r\n        <ion-list>\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"person-outline\"></ion-icon>Surname</ion-list-header>\r\n            <ion-item>\r\n\r\n                <ion-label text-wrap> {{$any(relPersonData)?.Surnames}}</ion-label>\r\n            </ion-item>\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"at-outline\"></ion-icon>Email</ion-list-header>\r\n            <ion-item>\r\n\r\n                <ion-label> {{$any(relPersonData)?.Email}}</ion-label>\r\n\r\n            </ion-item>\r\n            <ion-list-header>\r\n\r\n                <ion-icon class=\"segmentIcon\" name=\"power-outline\"></ion-icon>Active Status</ion-list-header>\r\n            <ion-item>\r\n                <ion-item [hidden]=\"$any(relPersonData)?.IsActive === true\">\r\n                    <ion-label>Disactive</ion-label>\r\n                </ion-item>\r\n                <ion-item [hidden]=\"$any(relPersonData)?.IsActive === false\">\r\n                    <ion-label>Active</ion-label>\r\n                </ion-item>\r\n\r\n                <!-- <ion-label> {{$any(patientData)?.IsActive}}</ion-label> -->\r\n\r\n            </ion-item>\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"heart-half-outline\"></ion-icon>Is Diseased</ion-list-header>\r\n            <ion-item>\r\n\r\n                <ion-item [hidden]=\"$any(relPersonData)?.IsDiseased === false\">\r\n                    <ion-label>Yes</ion-label>\r\n                </ion-item>\r\n                <ion-item [hidden]=\"$any(relPersonData)?.IsDiseased === true\">\r\n                    <ion-label>No</ion-label>\r\n                </ion-item>\r\n\r\n            </ion-item>\r\n\r\n            <ion-list-header>\r\n                <ion-icon class=\"segmentIcon\" name=\"male-female-outline\"></ion-icon>Gender</ion-list-header>\r\n            <ion-item>\r\n                <ion-label *ngIf=\"$any(relPersonData)?.Type === 1\"> Male</ion-label>\r\n                <ion-label *ngIf=\"$any(relPersonData)?.Type === 2\"> Female</ion-label>\r\n                <ion-label *ngIf=\"$any(relPersonData)?.Type === 3\"> Other</ion-label>\r\n                <ion-label *ngIf=\"$any(relPersonData)?.Type === 4\"> Unknown</ion-label>\r\n            </ion-item>\r\n\r\n\r\n        </ion-list>\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 379:
/*!**************************************************************************!*\
  !*** ./src/app/rel-person/detail-rel-person/detail-rel-person.page.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgba(207, 218, 182, 0.658) !important;\n}\nion-header {\n  background-color: rgba(180, 199, 136, 0.658);\n}\n.text-top {\n  text-align: center;\n  margin-top: -16px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-center {\n  margin-top: -15px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 14px;\n}\n.segmentIcon {\n  margin-right: 7px;\n  height: 14px;\n}\nion-list-header {\n  margin-bottom: -9px;\n}\napp-component-telemetry {\n  width: 100%;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1yZWwtcGVyc29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBQTtBQUdBLHVFQUFBO0FBRUE7RUFDSSxZQUFBO0FBRko7QUFLQTtFQUNJLDJCQUFBO0FBRko7QUFLQTtFQUNJLG1EQUFBO0FBRko7QUFLQTtFQUNJLDRDQUFBO0FBRko7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQU9RO0VBQ0ksNENBQUE7RUFDQSw2REFBQTtBQUpaO0FBUVE7RUFDSSw0Q0FBQTtFQUNBLDZEQUFBO0FBTlo7QUFXQTtFQUNJLFlBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7QUFSSjtBQVdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJKO0FBV0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFSSjtBQVdBO0VBQ0ksbUJBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtBQVJKO0FBV0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFSSiIsImZpbGUiOiJkZXRhaWwtcmVsLXBlcnNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG5cclxuXHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMDcsIDIxOCwgMTgyLCAwLjY1OCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTk5LCAxMzYsIDAuNjU4KTtcclxufVxyXG5cclxuLnRleHQtdG9wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIGlvbi10YWItYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxvYWRpbmcge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uaWNvblRleHQ+aW9uLWNvbD5pb24taWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmljb25UZXh0Pmlvbi1jb2w+aW9uLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5zZWdtZW50SWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIGhlaWdodDogMTRweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC05cHg7XHJcbn1cclxuXHJcbmFwcC1jb21wb25lbnQtdGVsZW1ldHJ5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_rel-person_detail-rel-person_detail-rel-person_module_ts.js.map