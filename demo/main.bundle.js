webpackJsonp([1,4],{

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 189;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(199);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
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
        this.type = 'line';
        this.data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
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
        template: __webpack_require__(305),
        styles: [__webpack_require__(302)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_chartjs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(197);
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

/***/ 199:
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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 64,
	"./af.js": 64,
	"./ar": 71,
	"./ar-dz": 65,
	"./ar-dz.js": 65,
	"./ar-kw": 66,
	"./ar-kw.js": 66,
	"./ar-ly": 67,
	"./ar-ly.js": 67,
	"./ar-ma": 68,
	"./ar-ma.js": 68,
	"./ar-sa": 69,
	"./ar-sa.js": 69,
	"./ar-tn": 70,
	"./ar-tn.js": 70,
	"./ar.js": 71,
	"./az": 72,
	"./az.js": 72,
	"./be": 73,
	"./be.js": 73,
	"./bg": 74,
	"./bg.js": 74,
	"./bn": 75,
	"./bn.js": 75,
	"./bo": 76,
	"./bo.js": 76,
	"./br": 77,
	"./br.js": 77,
	"./bs": 78,
	"./bs.js": 78,
	"./ca": 79,
	"./ca.js": 79,
	"./cs": 80,
	"./cs.js": 80,
	"./cv": 81,
	"./cv.js": 81,
	"./cy": 82,
	"./cy.js": 82,
	"./da": 83,
	"./da.js": 83,
	"./de": 86,
	"./de-at": 84,
	"./de-at.js": 84,
	"./de-ch": 85,
	"./de-ch.js": 85,
	"./de.js": 86,
	"./dv": 87,
	"./dv.js": 87,
	"./el": 88,
	"./el.js": 88,
	"./en-au": 89,
	"./en-au.js": 89,
	"./en-ca": 90,
	"./en-ca.js": 90,
	"./en-gb": 91,
	"./en-gb.js": 91,
	"./en-ie": 92,
	"./en-ie.js": 92,
	"./en-nz": 93,
	"./en-nz.js": 93,
	"./eo": 94,
	"./eo.js": 94,
	"./es": 96,
	"./es-do": 95,
	"./es-do.js": 95,
	"./es.js": 96,
	"./et": 97,
	"./et.js": 97,
	"./eu": 98,
	"./eu.js": 98,
	"./fa": 99,
	"./fa.js": 99,
	"./fi": 100,
	"./fi.js": 100,
	"./fo": 101,
	"./fo.js": 101,
	"./fr": 104,
	"./fr-ca": 102,
	"./fr-ca.js": 102,
	"./fr-ch": 103,
	"./fr-ch.js": 103,
	"./fr.js": 104,
	"./fy": 105,
	"./fy.js": 105,
	"./gd": 106,
	"./gd.js": 106,
	"./gl": 107,
	"./gl.js": 107,
	"./gom-latn": 108,
	"./gom-latn.js": 108,
	"./he": 109,
	"./he.js": 109,
	"./hi": 110,
	"./hi.js": 110,
	"./hr": 111,
	"./hr.js": 111,
	"./hu": 112,
	"./hu.js": 112,
	"./hy-am": 113,
	"./hy-am.js": 113,
	"./id": 114,
	"./id.js": 114,
	"./is": 115,
	"./is.js": 115,
	"./it": 116,
	"./it.js": 116,
	"./ja": 117,
	"./ja.js": 117,
	"./jv": 118,
	"./jv.js": 118,
	"./ka": 119,
	"./ka.js": 119,
	"./kk": 120,
	"./kk.js": 120,
	"./km": 121,
	"./km.js": 121,
	"./kn": 122,
	"./kn.js": 122,
	"./ko": 123,
	"./ko.js": 123,
	"./ky": 124,
	"./ky.js": 124,
	"./lb": 125,
	"./lb.js": 125,
	"./lo": 126,
	"./lo.js": 126,
	"./lt": 127,
	"./lt.js": 127,
	"./lv": 128,
	"./lv.js": 128,
	"./me": 129,
	"./me.js": 129,
	"./mi": 130,
	"./mi.js": 130,
	"./mk": 131,
	"./mk.js": 131,
	"./ml": 132,
	"./ml.js": 132,
	"./mr": 133,
	"./mr.js": 133,
	"./ms": 135,
	"./ms-my": 134,
	"./ms-my.js": 134,
	"./ms.js": 135,
	"./my": 136,
	"./my.js": 136,
	"./nb": 137,
	"./nb.js": 137,
	"./ne": 138,
	"./ne.js": 138,
	"./nl": 140,
	"./nl-be": 139,
	"./nl-be.js": 139,
	"./nl.js": 140,
	"./nn": 141,
	"./nn.js": 141,
	"./pa-in": 142,
	"./pa-in.js": 142,
	"./pl": 143,
	"./pl.js": 143,
	"./pt": 145,
	"./pt-br": 144,
	"./pt-br.js": 144,
	"./pt.js": 145,
	"./ro": 146,
	"./ro.js": 146,
	"./ru": 147,
	"./ru.js": 147,
	"./sd": 148,
	"./sd.js": 148,
	"./se": 149,
	"./se.js": 149,
	"./si": 150,
	"./si.js": 150,
	"./sk": 151,
	"./sk.js": 151,
	"./sl": 152,
	"./sl.js": 152,
	"./sq": 153,
	"./sq.js": 153,
	"./sr": 155,
	"./sr-cyrl": 154,
	"./sr-cyrl.js": 154,
	"./sr.js": 155,
	"./ss": 156,
	"./ss.js": 156,
	"./sv": 157,
	"./sv.js": 157,
	"./sw": 158,
	"./sw.js": 158,
	"./ta": 159,
	"./ta.js": 159,
	"./te": 160,
	"./te.js": 160,
	"./tet": 161,
	"./tet.js": 161,
	"./th": 162,
	"./th.js": 162,
	"./tl-ph": 163,
	"./tl-ph.js": 163,
	"./tlh": 164,
	"./tlh.js": 164,
	"./tr": 165,
	"./tr.js": 165,
	"./tzl": 166,
	"./tzl.js": 166,
	"./tzm": 168,
	"./tzm-latn": 167,
	"./tzm-latn.js": 167,
	"./tzm.js": 168,
	"./uk": 169,
	"./uk.js": 169,
	"./ur": 170,
	"./ur.js": 170,
	"./uz": 172,
	"./uz-latn": 171,
	"./uz-latn.js": 171,
	"./uz.js": 172,
	"./vi": 173,
	"./vi.js": 173,
	"./x-pseudo": 174,
	"./x-pseudo.js": 174,
	"./yo": 175,
	"./yo.js": 175,
	"./zh-cn": 176,
	"./zh-cn.js": 176,
	"./zh-hk": 177,
	"./zh-hk.js": 177,
	"./zh-tw": 178,
	"./zh-tw.js": 178
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
webpackContext.id = 304;


/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<chart [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n"

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);


/***/ })

},[331]);
//# sourceMappingURL=main.bundle.js.map