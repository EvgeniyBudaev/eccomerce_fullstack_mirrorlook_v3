(function() {
var exports = {};
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 1488:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": function() { return /* binding */ useTypedSelector; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ 958:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mirrors; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ducks_products_consoles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6564);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6383);
/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1488);







function Mirrors(consolesResponse) {
  const {
    0: consoles,
    1: setConsoles
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(consolesResponse.entities);
  const state = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_6__/* .useTypedSelector */ .i)(state => state);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  console.log("[consolesResponse]", consolesResponse);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,ducks_products_consoles__WEBPACK_IMPORTED_MODULE_4__.fetchConsoles)(consoles));
  }, [consolesResponse, dispatch]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Layout */ .Ar, {
    children: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u043A\u043E\u043D\u0441\u043E\u043B\u044F\u043C\u0438"
  });
}
const getServerSideProps = async () => {
  const {
    data: mirrorsResponse
  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`http://localhost:8000/api/catalog/consoles/`);
  const {
    entities,
    paging
  } = mirrorsResponse;
  return {
    props: {
      entities,
      paging
    }
  };
};

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 4058:
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ 3804:
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 724:
/***/ (function(module) {

"use strict";
module.exports = require("react-select");;

/***/ }),

/***/ 9080:
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

/***/ }),

/***/ 9168:
/***/ (function(module) {

"use strict";
module.exports = require("react-slidedown");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,61,334,564], function() { return __webpack_exec__(958); });
module.exports = __webpack_exports__;

})();