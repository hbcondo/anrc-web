"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 2355:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 65927);




const routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 20654:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 65927);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-routing.module */ 2355);







let AboutModule = class AboutModule {
};
AboutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutPageRoutingModule
        ],
        declarations: [_about__WEBPACK_IMPORTED_MODULE_0__.AboutPage],
        entryComponents: [],
        bootstrap: [_about__WEBPACK_IMPORTED_MODULE_0__.AboutPage],
    })
], AboutModule);



/***/ }),

/***/ 65927:
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_macbook_newdev_anrc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.html */ 14993);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.scss */ 39437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-popover/about-popover */ 94333);






let AboutPage = class AboutPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
            header: 'Select a Location'
        };
    }
    presentPopover(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_2__.PopoverPage,
                event
            });
            yield popover.present();
        });
    }
};
AboutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'page-about',
        template: _Users_macbook_newdev_anrc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 14993:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/about/about.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-header class=\"ion-no-border text-align-center\">  \n    <ion-toolbar>\n    \n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n   \n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"about-info\">\n    <h1>ABOUT ANRC</h1>\n    <h3 class=\"header ion-padding-top ion-padding-start\"> Publications:</h3>\n    <p class=\"ion-padding-start ion-padding-end\">\n       \n        This app is based on the National Survey on Treatment Effectiveness for Autism conducted by the Autism/Asperger’s Research Program at Arizona State University, led by Prof. James B. Adams.  \n        Some of this data has already been published in the following papers:\n    </p>\n    <ul>\n      <li>\n          Adams JB, Bhargava A, Coleman DM, Frye RE, Rossignol DA. <b>Ratings of the Effectiveness of Nutraceuticals for Autism Spectrum Disorders: Results of a National Survey.</b> J Pers Med. 2021 Aug 31;11(9):878. doi: 10.3390/jpm11090878. PMID: 34575655; PMCID: PMC8470413.\n          Available at:  <a href=\"https://pubmed.ncbi.nlm.nih.gov/34575655/\">https://pubmed.ncbi.nlm.nih.gov/34575655/</a>\n      </li>\n      <li>\n          Coleman DM, Adams JB, Anderson AL, Frye RE. <b>Rating of the Effectiveness of 26 Psychiatric and Seizure Medications for Autism Spectrum Disorder: Results of a National Survey. </b> Child Adolesc Psychopharmacol. 2019 Mar;29(2):107-123. doi: 10.1089/cap.2018.0121. Epub 2019 Feb 6. PMID: 30724573; PMCID: PMC6442266.\n          Available at:  <a href=\"https://pubmed.ncbi.nlm.nih.gov/30724573/\">https://pubmed.ncbi.nlm.nih.gov/30724573/</a>\n      </li>\n    </ul>\n      \n        \n   <p class=\"ion-padding-top ion-padding-start\">\n      We thank the over 1200 families who participated in the National Survey on Treatment Effectiveness for Autism\n   </p>\n   \n    <h3 class=\"header ion-padding-top ion-padding-start\">Bios:</h3>\n    <p class=\"ion-padding-start ion-padding-end\">\n        <b>Prof. James B. Adams  </b> – led the National Survey on Treatment Effectiveness for Autism\n        James B. Adams, Ph.D., is the Director of the Autism/Asperger's Research Program at Arizona State University. His research focuses on the medical causes of autism and how to treat and prevent it including the areas of nutrition (vitamins/minerals, essential fatty acids, carnitine, digestive enzymes, special diets), oxidative stress, gut problems, gut bacteria, toxic metals, and seizures.   He has published over 180 peer-reviewed scientific articles, including over 50 related to autism.  He is also the President of the Autism Society of Greater Phoenix, the President of the Autism Nutrition Research Center, the co-leader of the Scientific Advisory Committee of the Autism Research Institute, and chair of the Scientific Advisory Board of the Neurological Health Foundation.  He has an adult daughter with autism.\n        \n  </p>\n    <p class=\"ion-padding-start ion-padding-end\">\n  \n    <b>ASU Capstone Design Team:  </b>A beta version of this app was developed by a team of ASU computer science students as their senior capstone design project, under the guidance of Prof. Adams.  Those students are Hyunwoo Kang, Luis Luvia, Jason Xu, Cora Selzer.\n  \n    </p>\n    <h3 class=\"header ion-padding-top ion-padding-start\">Technical Advisors:</h3>\n    <p class=\"header ion-padding-start ion-padding-end\">\n     \n           <b>Jackie Leach</b> contributes knowledge in consulting in custom technical solutions, data analysis,  database management, code reviews, user experience, development of software enhancements, and technical training.  Most importantly, Jackie has 14 years experience as the parent of a child with Autism. \n        </p>\n        <p class=\"ion-padding-start ion-padding-end\">\n            <b>Lee Whitbeck’s</b> expertise includes establishing coding strategies, mobile and web application development, and leading development teams in the creation of web and mobile solutions. Lee also contributes 14 years of being an uncle to a child with Autism. \n        </p>\n        <h3 class=\"header ion-padding-top ion-padding-start\">Organizations:</h3>\n   <p class=\"header ion-padding-start ion-padding-end\">\n      We thank the over 50 autism organizations that helped us advertise the National Survey on Treatment Effectiveness for Autism, including:  \n   </p>\n      <ul>\n     <li>\n        Age of Autism, Autism/Asperger’s Research Program at Arizona State University,\n\n     </li>\n\n     <li>\n        Autism Academy for Education and Development, \n     </li>\n    <li>\n        Autism Canada,\n    </li>\n     <li>\n        Autism Conferences of America,\n      \n      </li>\n<li>\n    Autism File,\n</li>\n<li>\n    AutismFreeBrain\n</li>\n\n      <li>\n          Autism Nutrition Research Center,\n        </li>\n<li>\n    Autism Research Institute,\n</li>\n        <li>\n           Autism Society of Alabama, \n          </li>\n\n          <li>\n              Autism Society of Bayou\n            </li>\n\n            <li>\n                Autism Society of\n                Central Ohio\n                \n              </li>\n\n              <li>\n                  Autism Society of Central Texas\n                </li>\n\n                <li>\n                    Autism Society of\n                    Dayton\n                    \n                  </li>\n\n                  <li>\n                      Autism Society of El Paso,\n                    </li>\n\n                    <li>\n                        Autism Society of Emerald\n                        Coast\n                        \n                      </li>\n                      <li>\n                          Autism Society of Greater Akron,\n                      </li>\n                      <li>\n                          Autism Society of Greater\n                          Harrisburg,\n                          \n                        </li>\n                        <li>\n                            Autism Society of Greater New Orleans,\n                          </li>\n                          <li>\n                              Autism Society\n                              of Greater Phoenix\n                              \n                            </li>\n                            <li>\n                                Autism Society of Hawaii,\n                              </li>\n                              <li>\n                                  Autism Society\n                                  of Indiana,\n                                  \n                                </li>\n                                <li>\n                                    Autism Society of Inland Empire\n                                  </li>\n                                  <li>\n                                      Autism Society\n                                      of Iowa\n                                      \n                                    </li>\n                                    <li>\n                                        Autism Society—Kern Autism Network\n                                    </li>\n                                    <li>\n                                        Autism Society\n                                        of Massachusetts\n                                        \n                                      </li>\n                                      <li>\n                                          Autism Society of Michigan\n                                        </li>\n                                        <li>\n                                            Autism Society of\n                                            Minnesota\n                                            \n                                          </li>\n                                          <li>\n                                              Autism Society of Northern Virginia\n                                            </li>\n                                            <li>\n                                                Autism Society\n                                                of Northwestern Pennsylvania,\n                                                \n                                              </li>\n                                              <li>\n                                                  Autism Society of Oregon\n                                                </li>\n                                                <li>\n                                                    Autism\n                                                    Society of Pittsburgh\n                                                    \n                                                  </li>\n                                                  <li>\n                                                      Autism Society of Pennsylvania,\n                                                    </li>\n                                                    <li>\n                                                        Autism Society\n                                                        of San Diego\n                                                        \n                                                      </li>\n                                                      <li>\n                                                          Autism Society of Southern Arizona\n                                                        </li>\n                                                        <li>\n                                                            Autism\n                                                            Society of Southeastern Wisconsin\n                                                            \n                                                          </li>\n                                                          <li>\n                                                              Autism Society of Treasure\n                                                              Valley\n                                                              \n                                                            </li>\n                                                            <li>\n                                                                Autism Society of Western New York\n                                                              </li>\n                                                              <li>\n                                                                  Autism Society of\n                                                                  Westmoreland\n                                                                  \n                                                                </li>\n                                                                <li>\n                                                                    Autism Society of West Virginia\n                                                                  </li>\n                                                                  <li>\n                                                                      Autism Society\n                                                                      of Wisconsin\n                                                                      \n                                                                    </li>\n                                                                    <li>\n                                                                        Autism Speaks\n                                                                      </li>\n                                                                      <li>\n                                                                          Autism Spectrum Therapies\n                                                                        </li>\n                                                                        <li>\n                                                                            Autism\n                                                                            Tennessee\n                                                                            \n                                                                        </li>\n                                                                        <li>\n                                                                            Autism Treatment Network,\n                                                                          </li>\n                                                                          <li>\n                                                                              East Valley Autism Network\n                                                                            </li>\n                                                                            <li>\n                                                                                Generation Rescue\n                                                                              </li>\n                                                                              <li>\n                                                                                  GOALS for Autism, Inc.\n                                                                                </li>\n                                                                                <li>\n                                                                                    Guthrie\n                                                                                    Mainstream Services\n                                                                                    \n                                                                                  </li>\n                                                                                  <li>\n                                                                                      Hope Group\n                                                                                    </li>\n                                                                                    <li>\n                                                                                        Independent Living Experience\n                                                                                      </li>\n                                                                                      <li>\n                                                                                          National Autism Association\n                                                                                        </li>\n                                                                                        <li>\n                                                                                            NorthBridge College Success\n                                                                                            Program\n                                                                                            \n                                                                                          </li>\n                                                                                          <li>\n                                                                                              Organization for Autism Research\n                                                                                          </li>\n                                                                                          <li>\n                                                                                              Southwest Autism\n                                                                                              Research and Resource Center (SARRC)\n                                                                                              \n                                                                                            </li>\n                                                                                            <li>\n                                                                                                SEEDs for Autism\n                                                                                              </li>\n                                                                                              <li>\n                                                                                                  S.E.E.K Arizona\n                                                                                                </li>\n                                                                                                <li>\n                                                                                                    STARS\n                                                                                                  </li>\n                                                                                                  <li>\n                                                                                                      Talking About Curing Autism (TACA)\n                                                                                                    </li>\n                                                                                                    <li>\n                                                                                                        Unlocking Autism\n                                                                                                      </li>\n                                                                                                      <li>\n                                                                                                          US Autism and Asperger’s Association\n                                                                                                          (USAAA).                                                                                                          \n                                                                                                      </li>\n\n   </ul>\n      \n  \n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 39437:
/*!****************************************!*\
  !*** ./src/app/pages/about/about.scss ***!
  \****************************************/
/***/ ((module) => {

module.exports = "h1, h2, h3 {\n  text-align: center;\n}\n\nb {\n  font-weight: bolder;\n}\n\nh3.header {\n  font-size: 1.3rem;\n  text-align: center;\n  font-weight: 700;\n}\n\nion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .anrc {\n  background-image: url(/anrc-web/assets/img/about/anrc.png);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\nh5 {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  margin-inline-end: 32px;\n}\n\n#date-input-popover {\n  --offset-y: -var(--ion-safe-area-bottom);\n  --max-width: 90%;\n  --width: 336px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTs7O0VBR0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsVUFBQTtFQUVBLHFDQUFBO0FBSkY7O0FBT0E7RUFDRSxpREFBQTtBQUpGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUxGOztBQU9BO0VBQ0UsYUFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7QUFMRjs7QUFRQTtFQUNFLHdDQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7O0VBQUE7O0FBSUE7RUFDRSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7QUFQRiIsImZpbGUiOiJhYm91dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsIGgyLCBoMyB7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5oMy5oZWFkZXIge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hYm91dC1oZWFkZXIgLmFucmMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvYW5yYy5wbmcpO1xufVxuXG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xufVxuXG5oNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBsaW5lLWhlaWdodDogMTMwJTtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuXG4jZGF0ZS1pbnB1dC1wb3BvdmVyIHtcbiAgLS1vZmZzZXQteTogLXZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tKTtcblxuICAtLW1heC13aWR0aDogOTAlO1xuICAtLXdpZHRoOiAzMzZweDtcbn1cblxuLypcbiAqIGlPUyBPbmx5XG4gKi9cblxuLmlvcyAuYWJvdXQtaW5mbyB7XG4gIC0taW9uLXBhZGRpbmc6IDE5cHg7XG59XG5cbi5pb3MgLmFib3V0LWluZm8gaDMge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map