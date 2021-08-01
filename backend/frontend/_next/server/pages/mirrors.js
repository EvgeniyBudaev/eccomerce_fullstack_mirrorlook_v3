(function() {
var exports = {};
exports.id = 307;
exports.ids = [307];
exports.modules = {

/***/ 1266:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MirrorsPage; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6383);




function MirrorsPage(mirrorsResponse) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .LayoutMirrors */ .vS, {
      mirrorsResponse: mirrorsResponse
    })
  });
} // export const getStaticProps: GetStaticProps<IFilter<IMirror>> = async ({
//   params,
// }: GetStaticPropsContext<ParsedUrlQuery>) => {
//   console.log("[CONTEXT]", params);
//   const { data: mirrorsResponse } = await axios.get<IFilter<IMirror>>(
//     `http://localhost:8000/api/catalog/mirrors`
//   );
//   const { entities, paging } = mirrorsResponse;
//
//   return {
//     props: {
//       entities,
//       paging,
//     },
//     revalidate: 10,
//   };
// };

const getServerSideProps = async ({
  query: {
    page = 1,
    category = "",
    form = "",
    ordering = ""
  }
}) => {
  // console.log("[PAGE]", page);
  // console.log("[category]", category);
  // console.log("[form]", form);
  const url = encodeURI(`http://127.0.0.1:8000/api/v1/mirrors/?category=${category}&form=${form}&ordering=${ordering}&page=${page}`);
  const {
    data: mirrorsResponse
  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);
  const {
    entities,
    pageItemsCount,
    totalItemsCount
  } = mirrorsResponse;
  const pagesCount = Math.max(Math.ceil(totalItemsCount / pageItemsCount), 1);
  return {
    props: {
      entities: entities,
      paging: {
        pageItemsCount: pageItemsCount,
        pageNumber: 1,
        pagesCount: pagesCount,
        totalItemsCount: totalItemsCount
      }
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
var __webpack_exports__ = __webpack_require__.X(0, [821,61,334], function() { return __webpack_exec__(1266); });
module.exports = __webpack_exports__;

})();