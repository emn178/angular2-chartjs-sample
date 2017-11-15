webpackJsonp([1,4],{

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 200;


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(210);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.type = 'bar';
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: '#FF6384'
                },
                {
                    label: 'My Second dataset',
                    data: [60, 65, 75, 86, 49, 42, 35],
                    backgroundColor: '#36A2EB'
                }
            ]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        stacked: true
                    }
                ],
                yAxes: [
                    {
                        stacked: true
                    }
                ]
            },
            // Container for zoom options
            zoom: {
                // Boolean to enable zooming
                enabled: true,
                // Zooming directions. Remove the appropriate direction to disable 
                // Eg. 'y' would only allow zooming in the y direction
                mode: 'xy',
            }
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(316),
        styles: [__webpack_require__(313)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_chartjs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_chartjs__["ChartModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 73,
	"./af.js": 73,
	"./ar": 80,
	"./ar-dz": 74,
	"./ar-dz.js": 74,
	"./ar-kw": 75,
	"./ar-kw.js": 75,
	"./ar-ly": 76,
	"./ar-ly.js": 76,
	"./ar-ma": 77,
	"./ar-ma.js": 77,
	"./ar-sa": 78,
	"./ar-sa.js": 78,
	"./ar-tn": 79,
	"./ar-tn.js": 79,
	"./ar.js": 80,
	"./az": 81,
	"./az.js": 81,
	"./be": 82,
	"./be.js": 82,
	"./bg": 83,
	"./bg.js": 83,
	"./bn": 84,
	"./bn.js": 84,
	"./bo": 85,
	"./bo.js": 85,
	"./br": 86,
	"./br.js": 86,
	"./bs": 87,
	"./bs.js": 87,
	"./ca": 88,
	"./ca.js": 88,
	"./cs": 89,
	"./cs.js": 89,
	"./cv": 90,
	"./cv.js": 90,
	"./cy": 91,
	"./cy.js": 91,
	"./da": 92,
	"./da.js": 92,
	"./de": 95,
	"./de-at": 93,
	"./de-at.js": 93,
	"./de-ch": 94,
	"./de-ch.js": 94,
	"./de.js": 95,
	"./dv": 96,
	"./dv.js": 96,
	"./el": 97,
	"./el.js": 97,
	"./en-au": 98,
	"./en-au.js": 98,
	"./en-ca": 99,
	"./en-ca.js": 99,
	"./en-gb": 100,
	"./en-gb.js": 100,
	"./en-ie": 101,
	"./en-ie.js": 101,
	"./en-nz": 102,
	"./en-nz.js": 102,
	"./eo": 103,
	"./eo.js": 103,
	"./es": 105,
	"./es-do": 104,
	"./es-do.js": 104,
	"./es.js": 105,
	"./et": 106,
	"./et.js": 106,
	"./eu": 107,
	"./eu.js": 107,
	"./fa": 108,
	"./fa.js": 108,
	"./fi": 109,
	"./fi.js": 109,
	"./fo": 110,
	"./fo.js": 110,
	"./fr": 113,
	"./fr-ca": 111,
	"./fr-ca.js": 111,
	"./fr-ch": 112,
	"./fr-ch.js": 112,
	"./fr.js": 113,
	"./fy": 114,
	"./fy.js": 114,
	"./gd": 115,
	"./gd.js": 115,
	"./gl": 116,
	"./gl.js": 116,
	"./gom-latn": 117,
	"./gom-latn.js": 117,
	"./he": 118,
	"./he.js": 118,
	"./hi": 119,
	"./hi.js": 119,
	"./hr": 120,
	"./hr.js": 120,
	"./hu": 121,
	"./hu.js": 121,
	"./hy-am": 122,
	"./hy-am.js": 122,
	"./id": 123,
	"./id.js": 123,
	"./is": 124,
	"./is.js": 124,
	"./it": 125,
	"./it.js": 125,
	"./ja": 126,
	"./ja.js": 126,
	"./jv": 127,
	"./jv.js": 127,
	"./ka": 128,
	"./ka.js": 128,
	"./kk": 129,
	"./kk.js": 129,
	"./km": 130,
	"./km.js": 130,
	"./kn": 131,
	"./kn.js": 131,
	"./ko": 132,
	"./ko.js": 132,
	"./ky": 133,
	"./ky.js": 133,
	"./lb": 134,
	"./lb.js": 134,
	"./lo": 135,
	"./lo.js": 135,
	"./lt": 136,
	"./lt.js": 136,
	"./lv": 137,
	"./lv.js": 137,
	"./me": 138,
	"./me.js": 138,
	"./mi": 139,
	"./mi.js": 139,
	"./mk": 140,
	"./mk.js": 140,
	"./ml": 141,
	"./ml.js": 141,
	"./mr": 142,
	"./mr.js": 142,
	"./ms": 144,
	"./ms-my": 143,
	"./ms-my.js": 143,
	"./ms.js": 144,
	"./my": 145,
	"./my.js": 145,
	"./nb": 146,
	"./nb.js": 146,
	"./ne": 147,
	"./ne.js": 147,
	"./nl": 149,
	"./nl-be": 148,
	"./nl-be.js": 148,
	"./nl.js": 149,
	"./nn": 150,
	"./nn.js": 150,
	"./pa-in": 151,
	"./pa-in.js": 151,
	"./pl": 152,
	"./pl.js": 152,
	"./pt": 154,
	"./pt-br": 153,
	"./pt-br.js": 153,
	"./pt.js": 154,
	"./ro": 155,
	"./ro.js": 155,
	"./ru": 156,
	"./ru.js": 156,
	"./sd": 157,
	"./sd.js": 157,
	"./se": 158,
	"./se.js": 158,
	"./si": 159,
	"./si.js": 159,
	"./sk": 160,
	"./sk.js": 160,
	"./sl": 161,
	"./sl.js": 161,
	"./sq": 162,
	"./sq.js": 162,
	"./sr": 164,
	"./sr-cyrl": 163,
	"./sr-cyrl.js": 163,
	"./sr.js": 164,
	"./ss": 165,
	"./ss.js": 165,
	"./sv": 166,
	"./sv.js": 166,
	"./sw": 167,
	"./sw.js": 167,
	"./ta": 168,
	"./ta.js": 168,
	"./te": 169,
	"./te.js": 169,
	"./tet": 170,
	"./tet.js": 170,
	"./th": 171,
	"./th.js": 171,
	"./tl-ph": 172,
	"./tl-ph.js": 172,
	"./tlh": 173,
	"./tlh.js": 173,
	"./tr": 174,
	"./tr.js": 174,
	"./tzl": 175,
	"./tzl.js": 175,
	"./tzm": 177,
	"./tzm-latn": 176,
	"./tzm-latn.js": 176,
	"./tzm.js": 177,
	"./uk": 178,
	"./uk.js": 178,
	"./ur": 179,
	"./ur.js": 179,
	"./uz": 181,
	"./uz-latn": 180,
	"./uz-latn.js": 180,
	"./uz.js": 181,
	"./vi": 182,
	"./vi.js": 182,
	"./x-pseudo": 183,
	"./x-pseudo.js": 183,
	"./yo": 184,
	"./yo.js": 184,
	"./zh-cn": 185,
	"./zh-cn.js": 185,
	"./zh-hk": 186,
	"./zh-hk.js": 186,
	"./zh-tw": 187,
	"./zh-tw.js": 187
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 315;


/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(201);


/***/ })

},[348]);
//# sourceMappingURL=main.bundle.js.map