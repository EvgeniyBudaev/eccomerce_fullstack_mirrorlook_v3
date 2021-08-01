(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3414:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
var toolkit_namespaceObject = require("@reduxjs/toolkit");;
// EXTERNAL MODULE: ./ducks/account/index.ts + 3 modules
var account = __webpack_require__(5835);
;// CONCATENATED MODULE: ./ducks/products/mirrors/actionCreators.ts

const fetchMirrors = mirrors => ({
  type: MIRRORS_SUCCESS,
  payload: mirrors
});
;// CONCATENATED MODULE: ./ducks/products/mirrors/actionTypes.ts
const actionTypes_MIRRORS_SUCCESS = "MIRRORS_SUCCESS";
;// CONCATENATED MODULE: ./ducks/products/mirrors/reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  mirrors: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes_MIRRORS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mirrors: action.payload
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./ducks/products/mirrors/index.ts




// EXTERNAL MODULE: ./ducks/products/consoles/index.ts + 3 modules
var consoles = __webpack_require__(6564);
;// CONCATENATED MODULE: ./ducks/loading/actionTypes.ts
const SET_LOADING = "loading/SET_LOADING";
const UNSET_LOADING = "loading/UNSET_LOADING";
;// CONCATENATED MODULE: ./ducks/loading/reducer.ts
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  isLoading: false
};
const reducer_reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: true
      });

    case UNSET_LOADING:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./ducks/loading/index.ts




;// CONCATENATED MODULE: ./ducks/rootReducer.ts





const rootReducer = (0,toolkit_namespaceObject.combineReducers)({
  account: account.reducer,
  mirrors: reducer,
  consoles: consoles.reducer,
  loading: reducer_reducer
});
;// CONCATENATED MODULE: ./ducks/store.ts


const store = (0,toolkit_namespaceObject.configureStore)({
  reducer: rootReducer
});
;// CONCATENATED MODULE: ./pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "ie=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0437\u0435\u0440\u043A\u0430\u043B"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "\u0437\u0435\u0440\u043A\u0430\u043B\u043E, \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u043A\u0443\u043F\u0438\u0442\u044C, \u0446\u0435\u043D\u0430"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "MirrorLook \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0437\u0435\u0440\u043A\u0430\u043B "
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: store,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

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
var __webpack_exports__ = __webpack_require__.X(0, [835,564], function() { return __webpack_exec__(3414); });
module.exports = __webpack_exports__;

})();