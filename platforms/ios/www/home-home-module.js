(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







// import {SidemenuModule} from '../SidemenuModule/sidemenu.module'
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                //SidemenuModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button id=\"myMenu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Dashboard\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <ion-card class=\"welcome-card\">\n      <ion-img src=\"/assets/shapes.svg\"></ion-img>\n      <ion-card-header>\n        <ion-card-title>Welcome to Ionic</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button color=\"primary\" (click)=\"screenNavigation()\">Screen Navigation</ion-button>\n        <ion-button color=\"primary\" (click)=\"userRegister()\">User Register</ion-button>\n        <ion-button color=\"primary\" (click)=\"locationUpdate()\">Location Update</ion-button>\n        <ion-button color=\"primary\" (click)=\"getNotification()\">Get Notification</ion-button>\n        <ion-button color=\"primary\" (click)=\"deleteNotification()\">Delete Notification</ion-button>\n        <ion-button color=\"primary\" (click)=\"customEvent()\">custom Event</ion-button>\n      </ion-card-content> -->\n      <div class=\"header_image_content\">\n        <ion-img src=\"assets/icon/dashboard.jpg\"></ion-img>\n      </div>\n      <div class=\"header_title_content\">\n          <h3 class=\"visiontel_dashboard\">VISION TEL</h3>\n      </div>\n      <div class=\"dashboard_content\">\n        <h6 class=\"vision_tel_details\">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        </h6>\n      </div>\n      <div>\n          <ion-grid>\n              <ion-row>\n                <ion-col>\n                  ion-col\n                </ion-col>\n                <ion-col>\n                  ion-col\n                </ion-col>\n                <ion-col>\n                  ion-col\n                </ion-col>\n                <ion-col>\n                  ion-col\n                </ion-col>\n              </ion-row>\n          </ion-grid>\n      </div>\n          \n    \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.header_image_content {\n  width: 100%;\n  height: 30%; }\n\n.header_title_content {\n  height: 5%;\n  margin-top: 40px;\n  margin-left: 15%;\n  margin-right: 15%; }\n\n.visiontel_dashboard {\n  text-align: center; }\n\n.dashboard_content {\n  height: 30%;\n  margin-left: 15%;\n  margin-right: 15%; }\n\n.vision_tel_details {\n  font-size: 14px;\n  font-style: normal;\n  height: 100%;\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWphcmFtL0Rlc2t0b3AvUmFqYXJhbS9Jb25pYy9pb25pYy00LXByZXR0eS1zaWRlbWVudS1tYXN0ZXIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFFRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBRWhCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaGVhZGVyX2ltYWdlX2NvbnRlbnR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiBcbn1cbi5oZWFkZXJfdGl0bGVfY29udGVudHtcbiAgIFxuICBoZWlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuIFxufVxuLnZpc2lvbnRlbF9kYXNoYm9hcmR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kYXNoYm9hcmRfY29udGVudHtcbiAgXG4gIGhlaWdodDogMzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcblxuIFxufVxuLnZpc2lvbl90ZWxfZGV0YWlsc3tcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var HomePage = /** @class */ (function () {
    function HomePage(menu) {
        // myPlugin.screenNavigation("Ionic Page").then(res =>{
        this.menu = menu;
        // })
        console.log("Home page Called");
    }
    HomePage.prototype.ngOnInit = function () {
        this.screenNavigation();
    };
    HomePage.prototype.screenNavigation = function () {
        var screenNavParam = {
            screenName: "Dashboard"
        };
        ReCordovaPlugin.screenNavigation(screenNavParam, function (res) {
            console.log("Screen Navigation callback is sucess" + res);
        });
    };
    HomePage.prototype.userRegister = function () {
        var userregisterParam = {
            uniqueId: "ABC123",
            name: "Rajaram",
            age: "29",
            email: "resul_rajaram.resulticksmail.com",
            phone: "9941107039",
            gender: "Male",
            token: "Result_token",
            profileUrl: 'Resulticks_profile'
        };
        ReCordovaPlugin.userRegister(userregisterParam);
    };
    HomePage.prototype.locationUpdate = function () {
        var location = {
            latitude: 13.067439,
            longitude: 80.237617
        };
        ReCordovaPlugin.locationUpdate(location);
    };
    HomePage.prototype.customEvent = function () {
        var customEventPara = {
            eventName: 'Product Purchased',
            data: {
                productId: 'P234234',
                productName: 'Mobile Phone'
            }
        };
        ReCordovaPlugin.customEvent(customEventPara);
    };
    HomePage.prototype.getNotification = function () {
        var _this = this;
        ReCordovaPlugin.getNotification('getNotification', function (res) {
            _this.notify_val = JSON.parse(res);
            alert(_this.notify_val);
        });
    };
    HomePage.prototype.deleteNotification = function () {
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map