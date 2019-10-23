(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page2-page2-module"],{

/***/ "./src/app/page2/page2.module.ts":
/*!***************************************!*\
  !*** ./src/app/page2/page2.module.ts ***!
  \***************************************/
/*! exports provided: Page2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2PageModule", function() { return Page2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page2.page */ "./src/app/page2/page2.page.ts");







var routes = [
    {
        path: '',
        component: _page2_page__WEBPACK_IMPORTED_MODULE_6__["Page2Page"]
    }
];
var Page2PageModule = /** @class */ (function () {
    function Page2PageModule() {
    }
    Page2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_page2_page__WEBPACK_IMPORTED_MODULE_6__["Page2Page"]]
        })
    ], Page2PageModule);
    return Page2PageModule;
}());



/***/ }),

/***/ "./src/app/page2/page2.page.html":
/*!***************************************!*\
  !*** ./src/app/page2/page2.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Page2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page2/page2.page.scss":
/*!***************************************!*\
  !*** ./src/app/page2/page2.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UyL3BhZ2UyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page2/page2.page.ts":
/*!*************************************!*\
  !*** ./src/app/page2/page2.page.ts ***!
  \*************************************/
/*! exports provided: Page2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Page", function() { return Page2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Page2Page = /** @class */ (function () {
    function Page2Page() {
    }
    Page2Page.prototype.ngOnInit = function () {
        var screenNavParam = {
            screenName: "Page2"
        };
        ReCordovaPlugin.screenNavigation(screenNavParam, function (res) {
            console.log("Screen Navigation callback is sucess" + res);
        });
    };
    Page2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page2',
            template: __webpack_require__(/*! ./page2.page.html */ "./src/app/page2/page2.page.html"),
            styles: [__webpack_require__(/*! ./page2.page.scss */ "./src/app/page2/page2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Page2Page);
    return Page2Page;
}());



/***/ })

}]);
//# sourceMappingURL=page2-page2-module.js.map