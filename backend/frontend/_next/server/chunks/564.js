exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 6564:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CONSOLES_SUCCESS": function() { return /* reexport */ CONSOLES_SUCCESS; },
  "fetchConsoles": function() { return /* reexport */ fetchConsoles; },
  "reducer": function() { return /* reexport */ reducer; }
});

;// CONCATENATED MODULE: ./ducks/products/consoles/actionCreators.ts

const fetchConsoles = consoles => ({
  type: CONSOLES_SUCCESS,
  payload: consoles
});
;// CONCATENATED MODULE: ./ducks/products/consoles/actionTypes.ts
const CONSOLES_SUCCESS = "CONSOLES_SUCCESS";
;// CONCATENATED MODULE: ./ducks/products/consoles/reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  consoles: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSOLES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        consoles: action.payload
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./ducks/products/consoles/index.ts





/***/ })

};
;