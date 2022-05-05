"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_rel-person_rel-person_module_ts"],{

/***/ 4114:
/*!*********************************************************!*\
  !*** ./src/app/rel-person/rel-person-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelPersonPageRoutingModule": () => (/* binding */ RelPersonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _rel_person_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rel-person.page */ 6311);




const routes = [
    {
        path: '',
        component: _rel_person_page__WEBPACK_IMPORTED_MODULE_0__.RelPersonPage
    },
    {
        path: 'detail-rel-person/:Id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_rel-person_detail-rel-person_detail-rel-person_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./detail-rel-person/detail-rel-person.module */ 6758)).then(m => m.DetailRelPersonPageModule)
    }
];
let RelPersonPageRoutingModule = class RelPersonPageRoutingModule {
};
RelPersonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RelPersonPageRoutingModule);



/***/ }),

/***/ 1340:
/*!*************************************************!*\
  !*** ./src/app/rel-person/rel-person.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelPersonPageModule": () => (/* binding */ RelPersonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _rel_person_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rel-person-routing.module */ 4114);
/* harmony import */ var _rel_person_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rel-person.page */ 6311);







let RelPersonPageModule = class RelPersonPageModule {
};
RelPersonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rel_person_routing_module__WEBPACK_IMPORTED_MODULE_0__.RelPersonPageRoutingModule
        ],
        declarations: [_rel_person_page__WEBPACK_IMPORTED_MODULE_1__.RelPersonPage]
    })
], RelPersonPageModule);



/***/ }),

/***/ 6311:
/*!***********************************************!*\
  !*** ./src/app/rel-person/rel-person.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelPersonPage": () => (/* binding */ RelPersonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rel_person_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rel-person.page.html */ 2460);
/* harmony import */ var _rel_person_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rel-person.page.scss */ 9894);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 7897);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







let RelPersonPage = class RelPersonPage {
    constructor(router, storage, alertController, loadingController) {
        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.relatedPersons = [{ Id: 0, Name: 'test' }];
        this.relPersonNull = false;
    }
    ngOnInit() {
    }
    closeSliding(slidingItem) {
        slidingItem.close();
    }
    ionViewWillEnter() {
    }
    deleterelatedPerson(slidingItem, id, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            slidingItem.close();
            console.log(id);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Remove Related Person',
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
                            /*   this.patientService.deleteRelatedPerson(id)
                              // tslint:disable-next-line: deprecation
                              .subscribe( (res: any) => {
                                this.ionViewWillEnter();
                              }, ( err) => {
                                  console.log(err);
                              }); */
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
RelPersonPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
RelPersonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-rel-person',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rel_person_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rel_person_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RelPersonPage);



/***/ }),

/***/ 2460:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/rel-person/rel-person.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Patient Dashboard\" defaultHref=\"/tabs/tab1\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-icon size=\"large\" class=\"ionadd\" name=\"add-outline\" slot=\"end\" [routerLink]=\"['add-rel-person']\"></ion-icon>\r\n            <ion-button>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n    <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n            <ion-card color=\"transparent\" class=\"deviceTemplate-card\">\r\n                <ion-img src='assets/icon/family.png'></ion-img>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-end\">\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"1\" class=\"ion-align-self-start\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center\">\r\n\r\n            <ion-list-header>\r\n                <ion-label class=\"text-top\">Related Persons</ion-label>\r\n            </ion-list-header>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"1\" class=\"ion-align-self-end\">\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-card-header [hidden]=\"!relPersonNull\" color=\"warning\" class=\"animate__animated animate__fadeInLeft animate__slow\">\r\n        <ion-icon size=\"large\" name=\"warning-outline\"></ion-icon> No Related Person has been added to this scenario. To add a Related Person, press the Add button.\r\n    </ion-card-header>\r\n\r\n    <ion-list>\r\n        <div class=\"patient\" *ngFor=\"let relatedPerson of relatedPersons\">\r\n\r\n            <ion-item-sliding #slidingItem>\r\n\r\n                <ion-item class=\"item\" detail [routerLink]=\"['detail-rel-person',relatedPerson['0']]\">\r\n                    <ion-avatar slot=\"start\">\r\n                        <img src=\"assets/icon/family.png\">\r\n\r\n                    </ion-avatar>\r\n\r\n                    <ion-label> {{relatedPerson['Name']}}</ion-label>\r\n\r\n\r\n                </ion-item>\r\n\r\n\r\n                <ion-item-options side=\"end\" (ionSwipe)=\"deleterelatedPerson(slidingItem,relatedPerson['Id'], relatedPerson['Name'])\">\r\n                    <ion-item-option color=\"danger\" expandable (click)=\"deleterelatedPerson(slidingItem,relatedPerson['Id'], relatedPerson['Name'])\">\r\n\r\n                        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n\r\n                    </ion-item-option>\r\n\r\n                </ion-item-options>\r\n\r\n                <ion-item-options side=\"start\">\r\n\r\n                    <ion-item-option color=\"success\" expandable (click)=\"closeSliding(slidingItem)\" [routerLink]=\"['edit-device-template',relatedPerson['Id']]\">\r\n\r\n                        <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\r\n\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </div>\r\n    </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 9894:
/*!*************************************************!*\
  !*** ./src/app/rel-person/rel-person.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "/* DOES NOT WORK - not specific enough */\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class {\n  color: green;\n}\nion-card {\n  box-shadow: none !important;\n}\nion-toolbar {\n  --background: rgba(207, 218, 182, 0.658) !important;\n}\nion-header {\n  background-color: rgba(180, 199, 136, 0.658);\n}\n.text-top {\n  text-align: center;\n  margin-top: -18px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ion-align-self-center {\n  margin-top: -15px;\n}\n:root ion-tab-button:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n:root ion-tab-button.tab-selected:nth-child(1) ion-icon {\n  color: var(--ion-color-secondary) !important;\n  /* --ion-color-base: var(--ion-color-secondary) !important; */\n}\n.ionadd {\n  margin-right: 20px;\n  margin-top: 10px;\n}\nion-loading {\n  color: green;\n}\n.iconText > ion-col > ion-icon {\n  margin-left: 25px;\n}\n.iconText > ion-col > ion-label {\n  position: flex;\n  font-size: 12px;\n  margin-left: 10px;\n}\napp-component-telemetry {\n  width: 100%;\n}\n.deviceTemplate-card > ion-img {\n  margin-left: 14px;\n}\nion-segment-button {\n  width: 40px;\n  margin-top: 2px;\n  margin-left: 4px;\n  margin-right: 4px;\n  font-size: 10px;\n  border: none;\n  background-color: #f8f8f8;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbC1wZXJzb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBR0EsdUVBQUE7QUFFQTtFQUNJLFlBQUE7QUFGSjtBQUtBO0VBQ0ksMkJBQUE7QUFGSjtBQUtBO0VBQ0ksbURBQUE7QUFGSjtBQUtBO0VBQ0ksNENBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUZKO0FBS0E7RUFDSSxpQkFBQTtBQUZKO0FBT1E7RUFDSSw0Q0FBQTtFQUNBLDZEQUFBO0FBSlo7QUFRUTtFQUNJLDRDQUFBO0VBQ0EsNkRBQUE7QUFOWjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVJKO0FBV0E7RUFDSSxZQUFBO0FBUko7QUFXQTtFQUNJLGlCQUFBO0FBUko7QUFXQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtBQVJKO0FBV0E7RUFDSSxpQkFBQTtBQVJKO0FBV0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFSSiIsImZpbGUiOiJyZWwtcGVyc29uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcblxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIwNywgMjE4LCAxODIsIDAuNjU4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxOTksIDEzNiwgMC42NTgpO1xyXG59XHJcblxyXG4udGV4dC10b3Age1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvKiAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaW9uYWRkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1sb2FkaW5nIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmljb25UZXh0Pmlvbi1jb2w+aW9uLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5pY29uVGV4dD5pb24tY29sPmlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5hcHAtY29tcG9uZW50LXRlbGVtZXRyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRldmljZVRlbXBsYXRlLWNhcmQ+aW9uLWltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_rel-person_rel-person_module_ts.js.map