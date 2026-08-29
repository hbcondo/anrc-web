"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_donate_donate_module_ts"],{

/***/ 13304:
/*!*******************************************************!*\
  !*** ./src/app/pages/donate/donate-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePageRoutingModule": () => (/* binding */ DonatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _donate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donate.component */ 88608);




const routes = [
    {
        path: '',
        component: _donate_component__WEBPACK_IMPORTED_MODULE_0__.DonateComponent
    }
];
let DonatePageRoutingModule = class DonatePageRoutingModule {
};
DonatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], DonatePageRoutingModule);



/***/ }),

/***/ 88608:
/*!**************************************************!*\
  !*** ./src/app/pages/donate/donate.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonateComponent": () => (/* binding */ DonateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_macbook_newdev_anrc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_donate_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./donate.component.html */ 47398);
/* harmony import */ var _donate_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate.component.scss */ 30939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let DonateComponent = class DonateComponent {
    constructor() {
        this.img1 = "https://www.paypalobjects.com/images/Cause/ic_trust@2x.png";
        this.img2 = "https://www.paypalobjects.com/images/Cause/ic_trust@2x.png";
    }
    ngOnInit() { }
};
DonateComponent.ctorParameters = () => [];
DonateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-donate',
        template: _Users_macbook_newdev_anrc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_donate_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_donate_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DonateComponent);



/***/ }),

/***/ 67618:
/*!***********************************************!*\
  !*** ./src/app/pages/donate/donate.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonateModule": () => (/* binding */ DonateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _donate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donate.component */ 88608);
/* harmony import */ var _donate_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate-routing.module */ 13304);







let DonateModule = class DonateModule {
    constructor() {
        this.img1Src = "https://www.paypalobjects.com/images/Cause/ic_trust@2x.png";
    }
};
DonateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _donate_routing_module__WEBPACK_IMPORTED_MODULE_1__.DonatePageRoutingModule
        ],
        declarations: [_donate_component__WEBPACK_IMPORTED_MODULE_0__.DonateComponent],
        entryComponents: [],
        bootstrap: [_donate_component__WEBPACK_IMPORTED_MODULE_0__.DonateComponent],
    })
], DonateModule);



/***/ }),

/***/ 47398:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/donate/donate.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n\n    <h1>Please Donate</h1>\n    <div id=\"warning\" >\n      \n    \n         \n          <ion-note color=\"accent\">   This app is provided for free.  Please donate to help support its continued development!</ion-note>\n          \n    \n          \n    \n    </div>\n      <p>\n        ANRC (a non-profit) researches new dietary and nutritional supports for Autism Spectrum Disorders. We provide expert information and advice on nutritional issues. We also provide the ANRC Protocol, a set of comprehensive guidelines for nutritional support.\n      </p>\n    <p>\n\n\n        Health & Medicine, Science & Research\n        EIN: 46-2932161\n      <br/>\n        Tempe, AZ\n      <br/>\n        <b>Source: </b> PayPal Giving Fund charity profile\n      </p>\n   \n      <ion-button href=\"https://www.paypal.com/us/fundraiser/charity/1258464\">DONATE NOW</ion-button>\n      <ion-divider></ion-divider>\n\n     \n      <!-- <h1>100% will go to the charity</h1>\n      <section>\n        <div class=\"img\">\n            <ion-img [src]=\"img1\"></ion-img>\n          \n        </div>\n        <div class=\"item\">\n          <h5>We work to ensure charities are in good standing</h5>\n          <p>We verify that receiving charities have tax-exempt status with the IRS and are not on recognized economic sanctions lists.</p>\n        </div>\n        <br/>\n        <div class=\"img\">\n            <ion-img [src]=\"img2\"></ion-img>\n          \n        </div>\n        <div class=\"item\">\n           \n          \n          <h5> All fees are on us/h5>\n          <p>  When you donate through PayPal Giving Fund, all fees are on us.</p>\n        </div>\n      </section> -->\n      \n       \n</ion-content>\n");

/***/ }),

/***/ 30939:
/*!****************************************************!*\
  !*** ./src/app/pages/donate/donate.component.scss ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ":host {\n  margin: 30px;\n}\n\nion-content {\n  display: flex;\n  justify-content: center;\n}\n\nion-content ion-button {\n  background: var(ion-color-primary);\n  color: white;\n  font-weight: bold;\n}\n\nion-content p b.warn {\n  color: var(--ion-color-danger);\n}\n\nion-content #warning {\n  background: #e2eeff;\n  padding: 20px;\n  align-self: center;\n  margin: 20px auto;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n}\n\nion-content #warning ion-icon {\n  font-size: 40px;\n  color: var(--ion-color-warning);\n  padding: 0 5px;\n}\n\nion-content #warning ion-icon.closeBtn {\n  color: black;\n  position: absolute;\n  top: 0;\n  right: 5px;\n  font-size: 25px;\n}\n\nion-content #warning:before {\n  background: var(--ion-color-primary);\n  border-radius: 4px 0 0 4px;\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  z-index: 2;\n}\n\nion-content section {\n  display: flex;\n  flex-direction: row;\n}\n\nion-content section .item {\n  flex: 2;\n  margin: 10px;\n}\n\nion-content section .img, ion-content section ion-img {\n  width: 90px;\n  height: 90px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFJO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFFWTtFQUNJLDhCQUFBO0FBQWhCOztBQU1JO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTFI7O0FBT1E7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBTFY7O0FBT1U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFMWjs7QUFTUTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQVBWOztBQVVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBUlI7O0FBVVE7RUFDSSxPQUFBO0VBQ0EsWUFBQTtBQVJaOztBQVVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBUloiLCJmaWxlIjoiZG9uYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIG1hcmdpbjogMzBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcihpb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGJ7XG4gICAgICAgICAgICAmLndhcm4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgICN3YXJuaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2UyZWVmZjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgLy8gd2lkdGg6IDkwJTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIFxuICAgICAgICAgICYuY2xvc2VCdG4ge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgZmxleDoyO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWcsIGlvbi1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_donate_donate_module_ts.js.map