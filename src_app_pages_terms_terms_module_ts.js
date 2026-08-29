"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_terms_terms_module_ts"],{

/***/ 85141:
/*!********************************************!*\
  !*** ./src/app/pages/terms/terms-route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsRoutingModule": () => (/* binding */ TermsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.component */ 44423);




const routes = [
    {
        path: '',
        component: _terms_component__WEBPACK_IMPORTED_MODULE_0__.TermsComponent
    }
];
let TermsRoutingModule = class TermsRoutingModule {
};
TermsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TermsRoutingModule);



/***/ }),

/***/ 44423:
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsComponent": () => (/* binding */ TermsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_macbook_newdev_anrc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_terms_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./terms.component.html */ 60481);
/* harmony import */ var _terms_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms.component.scss */ 22828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let TermsComponent = class TermsComponent {
    constructor() { }
    ngOnInit() { }
};
TermsComponent.ctorParameters = () => [];
TermsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms',
        template: _Users_macbook_newdev_anrc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_terms_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_terms_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsComponent);



/***/ }),

/***/ 45426:
/*!*********************************************!*\
  !*** ./src/app/pages/terms/terms.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsModule": () => (/* binding */ TermsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.component */ 44423);
/* harmony import */ var _terms_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-route */ 85141);






let TermsModule = class TermsModule {
};
TermsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _terms_route__WEBPACK_IMPORTED_MODULE_1__.TermsRoutingModule
        ],
        declarations: [_terms_component__WEBPACK_IMPORTED_MODULE_0__.TermsComponent],
    })
], TermsModule);



/***/ }),

/***/ 60481:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/terms/terms.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <ion-header class=\"ion-no-border text-align-center\">  \n      <ion-toolbar>\n      \n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n     \n      </ion-toolbar>\n    </ion-header>\n  \n    <div class=\"about-info\">\n      <h1 style=\"text-align: center; font-weight: 700;\">Disclaimer</h1>\n    \n      <p class=\"ion-padding-start ion-padding-end\">\n      \n          The information provided by the Autism Nutrition Research Center on the ANRC app is intended to be used as an informational and educational resource.  This content is not meant to substitute a medical professional's advice or act to diagnose or treat an illness or medical condition. Users should seek the advice of their qualified medical physician before making medical decisions. The ratings are from the National Survey on Treatment Effectiveness for Autism, and the Autism Nutrition Research Center cannot guarantee the accuracy of the information included. The Autism Nutrition Research Center strives for the accuracy of the provided information and will update information on an as-needed basis. The Autism Nutrition Research Center  does not take responsibility for any decisions taken by users of the ANRC app.  \n          \n         \n          \n          \n      </p>\n      <p class=\"ion-padding-start ion-padding-end\">\n          By downloading, or using this app, you assent to this medical disclaimer and agree to hold the Autism Nutrition Research Center legally harmless, understanding that use of the ANRC app does not guarantee that any treatment will be helpful for an individual.  \n      </p>\n     \n     \n   \n  \n    </div>\n  </ion-content>\n  ");

/***/ }),

/***/ 22828:
/*!**************************************************!*\
  !*** ./src/app/pages/terms/terms.component.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_terms_terms_module_ts.js.map