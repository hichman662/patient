"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 5862:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};




/***/ }),

/***/ 3014:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 5159:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3f6412b6.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowDown),
/* harmony export */   "b": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "c": () => (/* binding */ caretBackSharp),
/* harmony export */   "d": () => (/* binding */ chevronBack),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ chevronForward),
/* harmony export */   "g": () => (/* binding */ chevronDown),
/* harmony export */   "h": () => (/* binding */ caretUpSharp),
/* harmony export */   "i": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 4551:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./explore-container.component.html */ 9651);
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss */ 6732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _C_Users_hichm_Desktop_patient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 456:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 4551);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 5523:
/*!**********************************************!*\
  !*** ./src/app/services/careplan.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarePlanService": () => (/* binding */ CarePlanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);

/* eslint-disable @typescript-eslint/ban-types */



let CarePlanService = class CarePlanService {
    constructor(http) {
        this.http = http;
    }
    // Care Plan Template By id PatientProfile
    /* public getCarePlantemplateByIdPatientProfile( uid: number): Observable<object>{
      if (!uid) { uid = null; }
      return this.http.get <CarePlanTemplate>(`${environment.base_url}/CarePlanTemplate/PatientProfileCarePlanTemplate?idPatientProfile=${uid}` );
    } */
    // Care Plan
    getAllCarePlan() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/CarePlan/ReadAll`);
    }
    getCarePlanById(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/CarePlan/${uid}`);
    }
    getCarePlanByIdScenario(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/CarePlan/CarePlanScenario?idIoTScenario=${uid}`);
    }
    /* public createCarePlan( data: CarePlan ): Observable<object> {
      return this.http.post(`${environment.base_url}/CarePlan/New_`, data);
    } */
    deleteCarePlan(uid) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/CarePlan/Destroy?p_careplan_oid=${uid}`);
    }
    // Vital Signs
    getAllVitalSign() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/VitalSign/ReadAll`);
    }
    getVitalSignById(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/VitalSign/${uid}`);
    }
    getVitalSignByIdScenario(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/VitalSign/VitalSignsScenario?idIoTScenario=${uid}`);
    }
    /* public createVitalSign( data: CarePlan ): Observable<object> {
      return this.http.post(`${environment.base_url}/VitalSign/New_`, data);
    } */
    deleteVitalSign(uid) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/VitalSign/Destroy?p_vitalsign_oid=${uid}`);
    }
    // Care Activities
    getAllCareActivities() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMCareActivity/ReadAll`);
    }
    getCareActivityById(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMCareActivity/${uid}`);
    }
    getCareActivityByIdScenario(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMCareActivity/CareActivitiesScenario?idIoTScenario=${uid}`);
    }
    /* public createCareActivity( data: CareActivity ): Observable<object> {
      return this.http.post(`${environment.base_url}/IMCareActivity/New_`, data);
    }
     */
    // Appointment
    getAppointmentByIdCareActivity(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMAppointment/AppointmentCareActitivy?idIMCareActivity=${uid}`);
    }
    // Medication
    getMedicationByIdCareActivity(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMMedication/MedicationCareActivity?idIMCareActivity=${uid}`);
    }
    //Nutrition Order
    getNutritionyByIdCareActivity(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMNutritionOrder/NutritionOrderCareActivity?idIMCareActivity=${uid}`);
    }
    //Communication
    getCommunicationByIdCareActivity(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMCommunication/CommunicationCareActivity?idIMCareActivity=${uid}`);
    }
    // Goal
    getGoalByIdCarePlan(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMGoal/GoalsCarePlan?idCarePlan=${uid}`);
    }
    //Target
    getTargetByIdCarePlan(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/IMTarget/TargetsCarePlan?idCarePlan=${uid}`);
    }
};
CarePlanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CarePlanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CarePlanService);



/***/ }),

/***/ 2158:
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientService": () => (/* binding */ PatientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);




let PatientService = class PatientService {
    constructor(http) {
        this.http = http;
    }
    // Patient
    getAllPatient() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/Patient/ReadAll`);
    }
    getPatientById(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/Patient/${uid}`);
    }
    getPatientByIdScenario(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/Patient/PatientScenario?idIoTScenario=${uid}`);
    }
    createPatient(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/Patient/New_`, data);
    }
    // Get All PATIENT PROFILE
    getAllPatientProfile() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/PatientProfile/ReadAll`);
    }
    // Assign Patient profile to patient
    assignPatientProfile(patientId, patientProfileId) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/Patient/AssignPatientProfile?p_patient_oid=${patientId}&p_patientprofile_oid=${patientProfileId}`, null);
    }
    // Practitioner
    getAllPractitioner() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/Practitioner/ReadAll`);
    }
    deletePractitioner(uid) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/Practitioner/Destroy?p_practitioner_oid=${uid}`);
    }
    // Related Person
    getAllRelatedPerson() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/RelatedPerson/ReadAll`);
    }
    getRelatedPersonById(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/RelatedPerson/${uid}`);
    }
    getRelatedPersonByIdScenario(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/RelatedPerson/RelatedPeople?idIoTScenario=${uid}`);
    }
    createRelatedPerson(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/RelatedPerson/New_`, data);
    }
    deleteRelatedPerson(uid) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/RelatedPerson/Destroy?p_relatedperson_oid=${uid}`);
    }
    // Patient Access
    getAllPatientAccess() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/PatientAccess/ReadAll`);
    }
    getPatientAccessById(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/PatientAccess/${uid}`);
    }
    getPatientAccessByIdScenario(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/PatientAccess/PatientAccessScenario?idIoTScenario=${uid}`);
    }
    createPatientAccess(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/PatientAccess/New_`, data);
    }
    deletePatientAccess(uid) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/PatientAccess/Destroy?p_patientaccess_oid=${uid}`);
    }
    getAccessModeByIdPatientprofile(uid) {
        if (!uid) {
            uid = null;
        }
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/AccessMode/ProfileAccessMode?idPatientProfile=${uid}`);
    }
    // Assign Access mode to Patient Access
    assignAccessModeToPatientAccess(patientAccess, accessMode) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url}/PatientAccess/AssignAccessMode?p_patientaccess_oid=${patientAccess}&p_accessmode_oid=${accessMode}`, null);
    }
};
PatientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PatientService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PatientService);



/***/ }),

/***/ 9651:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/explore-container/explore-container.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ 6732:
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=common.js.map