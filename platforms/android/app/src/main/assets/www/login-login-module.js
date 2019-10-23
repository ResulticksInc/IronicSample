(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<ion-content padding>\n \n      <div class=\"logo_content\">\n          <ion-img class=\"image_content\" src=\"assets/icon/logo_visiontel.png\"></ion-img>\n      </div>\n      <div>\n          <ion-item class=\"login-fields\">\n            \n              <ion-input [(ngModel)]='email' placeholder=\"Email\"></ion-input>\n            </ion-item>\n          <ion-item class=\"login-fields\">\n             \n              <ion-input type=\"password\"  placeholder=\"Password\" [(ngModel)]='password'></ion-input>\n            </ion-item>\n\n              <div class=\"btn_content\">\n                  <ion-button color='#f25254' class=\"login_btn\" (click)=\"loginBtn_clicked()\">Login</ion-button>\n              </div>\n               \n            \n      </div>\n  \n   \n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-left: 40px;\n  margin-right: 40px; }\n\n.logo_content {\n  height: 40%;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n.image_content {\n  justify-content: center;\n  height: 100%; }\n\n.login_btn {\n  background-color: #f25454;\n  color: white;\n  -webkit-text-emphasis-color: white;\n          text-emphasis-color: white;\n  height: 60;\n  margin-left: 10%;\n  margin-right: 10%; }\n\n.text_content {\n  /* background-color: greenyellow; */\n  /* margin-left: 10%;\r\n    margin-right: 10%; */ }\n\n.forgot_content {\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  height: 40;\n  margin-left: 10%;\n  margin-right: 10%; }\n\n.forgot_label {\n  justify-content: center;\n  height: 100%;\n  widows: 100%;\n  text-align: center; }\n\n.email_image {\n  width: 30;\n  height: 30;\n  margin-left: 70%;\n  padding-top: 150px; }\n\n.pass_image {\n  width: 30;\n  height: 30;\n  margin-left: 70%;\n  padding-top: 150px; }\n\n.form .input {\n  height: 40; }\n\n.form .m-10 {\n  margin: 2;\n  padding: 1; }\n\n.form .input-border {\n  border-width: 0;\n  border-color: transparent;\n  border-bottom-width: 1;\n  border-bottom-color: orangered; }\n\n.btn_content {\n  margin-left: 30%;\n  margin-right: 30%;\n  margin-top: 10px;\n  height: 50px;\n  justify-content: center;\n  align-items: center; }\n\n.button-solid {\n  background-color: #f25454; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CdXZhbmVzd2FyYW4vRG9jdW1lbnRzL0dpdEh1Yi9JbmRpSG9tZS9Jcm9uaWNTYW1wbGUvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDRyx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUVmO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksbUNBQUE7RUFDQTt3QkNEb0IsRURFQzs7QUFFekI7RUFDSSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUVuQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBRVYsZ0JBQWdCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVyQjtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBRVYsZ0JBQWdCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUlyQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUFZLFNBQVE7RUFBQyxVQUFVLEVBQUE7O0FBRS9CO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBcclxufVxyXG4ubG9nb19jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuLmltYWdlX2NvbnRlbnR7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmxvZ2luX2J0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjU0NTQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWVtcGhhc2lzLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuLnRleHRfY29udGVudHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93OyAqL1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlOyAqL1xyXG59XHJcbi5mb3Jnb3RfY29udGVudHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgIGhlaWdodDogNDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuLmZvcmdvdF9sYWJlbHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkb3dzOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5lbWFpbF9pbWFnZXtcclxuICAgIHdpZHRoOiAzMDtcclxuICAgIGhlaWdodDogMzA7XHJcbiAgXHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuLnBhc3NfaW1hZ2V7XHJcbiAgICB3aWR0aDogMzA7XHJcbiAgICBoZWlnaHQ6IDMwO1xyXG4gICBcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbiAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuXHJcbn1cclxuXHJcbi5mb3JtIC5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQwO1xyXG59XHJcbi5mb3JtIC5tLTEwe21hcmdpbjoyO3BhZGRpbmc6IDF9XHJcblxyXG4uZm9ybSAuaW5wdXQtYm9yZGVyIHtcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbi5idG5fY29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgXHJcbiAgXHJcbn1cclxuLmJ1dHRvbi1zb2xpZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjU0NTQ7XHJcbn0iLCIuY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7IH1cblxuLmxvZ29fY29udGVudCB7XG4gIGhlaWdodDogNDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5pbWFnZV9jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4ubG9naW5fYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNTQ1NDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWVtcGhhc2lzLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA2MDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7IH1cblxuLnRleHRfY29udGVudCB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93OyAqL1xuICAvKiBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7ICovIH1cblxuLmZvcmdvdF9jb250ZW50IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7IH1cblxuLmZvcmdvdF9sYWJlbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZG93czogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5lbWFpbF9pbWFnZSB7XG4gIHdpZHRoOiAzMDtcbiAgaGVpZ2h0OiAzMDtcbiAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgcGFkZGluZy10b3A6IDE1MHB4OyB9XG5cbi5wYXNzX2ltYWdlIHtcbiAgd2lkdGg6IDMwO1xuICBoZWlnaHQ6IDMwO1xuICBtYXJnaW4tbGVmdDogNzAlO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7IH1cblxuLmZvcm0gLmlucHV0IHtcbiAgaGVpZ2h0OiA0MDsgfVxuXG4uZm9ybSAubS0xMCB7XG4gIG1hcmdpbjogMjtcbiAgcGFkZGluZzogMTsgfVxuXG4uZm9ybSAuaW5wdXQtYm9yZGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBvcmFuZ2VyZWQ7IH1cblxuLmJ0bl9jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmJ1dHRvbi1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjU0NTQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menu, device) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.device = device;
        this.email = 'admin';
        this.password = 'admin';
    }
    LoginPage.prototype.ngOnInit = function () {
        var screenNavParam = {
            screenName: 'Login Page'
        };
        // ReCordovaPlugin.screenNavigation(screenNavParam,(res) => {
        //   console.log("Screen Navigation callback is sucess" + res);
        // })
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        //this.menu.enable(false);
        // If you have more than one side menu, use the id like below
        // this.menu.swipeEnable(false, 'menu1');
    };
    LoginPage.prototype.loginBtn_clicked = function () {
        if (this.email != '' && this.password != '') {
            if (this.email == 'admin' && this.password == 'admin') {
                this.navCtrl.navigateRoot('home', { queryParams: { param1: 'Rajaram' } });
                var userregisterParam = {
                    uniqueId: '',
                    name: 'Rajaram',
                    age: '29',
                    email: this.email,
                    phone: '9941107039',
                    gender: 'Male',
                    token: localStorage.getItem('fcm_token'),
                    profileUrl: ''
                };
                ReCordovaPlugin.userRegister(userregisterParam);
            }
            else {
                alert('Please enter the vaild login details');
            }
        }
        else if (this.email == '') {
            alert('Plese enter your email');
        }
        else if (this.password == '') {
            alert('Please enter your password');
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map