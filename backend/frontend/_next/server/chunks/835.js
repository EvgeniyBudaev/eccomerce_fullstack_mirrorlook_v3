exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 5835:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "login": function() { return /* reexport */ login; },
  "reducer": function() { return /* reexport */ reducer; },
  "reset_password": function() { return /* reexport */ reset_password; },
  "signup": function() { return /* reexport */ signup; },
  "verify": function() { return /* reexport */ verify; }
});

// UNUSED EXPORTS: ACTIVATION_FAIL, ACTIVATION_SUCCESS, AUTHENTICATED_FAIL, AUTHENTICATED_SUCCESS, FETCH_USER, FETCH_USER_FAIL, FETCH_USER_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, PASSWORD_RESET_CONFIRM_FAIL, PASSWORD_RESET_CONFIRM_SUCCESS, PASSWORD_RESET_FAIL, PASSWORD_RESET_SUCCESS, SET_USER, SIGNUP_FAIL, SIGNUP_SUCCESS, checkAuthenticated, fetchUser, logout, reset_password_confirm

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./ducks/account/actionTypes.ts
const FETCH_USER = "account/FETCH_USER";
const FETCH_USER_SUCCESS = "account/FETCH_USER_SUCCESS";
const FETCH_USER_FAIL = "account/FETCH_USER_FAIL";
const SET_USER = "account/SET_USER";
const LOGIN = "account/LOGIN";
const LOGIN_SUCCESS = "account/LOGIN_SUCCESS";
const LOGIN_FAIL = "account/LOGIN_FAIL";
const actionTypes_LOGOUT = "account/LOGOUT";
const actionTypes_AUTHENTICATED_SUCCESS = "account/AUTHENTICATED_SUCCESS";
const actionTypes_AUTHENTICATED_FAIL = "account/AUTHENTICATED_FAIL";
const PASSWORD_RESET_SUCCESS = "account/PASSWORD_RESET_SUCCESS";
const PASSWORD_RESET_FAIL = "account/PASSWORD_RESET_FAIL";
const actionTypes_PASSWORD_RESET_CONFIRM_SUCCESS = "account/PASSWORD_RESET_CONFIRM_SUCCESS";
const actionTypes_PASSWORD_RESET_CONFIRM_FAIL = "account/PASSWORD_RESET_CONFIRM_FAIL";
const SIGNUP_SUCCESS = "account/SIGNUP_SUCCESS";
const SIGNUP_FAIL = "account/SIGNUP_FAIL";
const ACTIVATION_SUCCESS = "account/ACTIVATION_SUCCESS";
const ACTIVATION_FAIL = "account/ACTIVATION_FAIL";
;// CONCATENATED MODULE: ./ducks/account/actionCreators.ts


const fetchUser = () => async dispatch => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        Accept: "application/json"
      }
    };

    try {
      const response = await external_axios_default().get(`http://127.0.0.1:8000/api/v1/auth/users/me/`, config);
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAIL,
        payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
      });
    }
  } else {
    dispatch({
      type: FETCH_USER_FAIL
    });
  }
};
const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    email,
    password
  });

  try {
    const response = await external_axios_default().post(`http://127.0.0.1:8000/api/v1/auth/jwt/create/`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });
    localStorage.setItem("access", response.data.access);
    dispatch(fetchUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
    });
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }
};
const signup = (first_name, last_name, phone_number, email, password, re_password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    first_name,
    last_name,
    phone_number,
    email,
    password,
    re_password
  });
  console.log("[signup][body]", body);

  try {
    const response = await external_axios_default().post(`http://127.0.0.1:8000/api/v1/auth/users/`, body, config);
    console.log("[signup][response]", response);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data
    }); //localStorage.setItem("access", response.data.access);
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
    }); //localStorage.removeItem("access");
    //localStorage.removeItem("refresh");
  }
};
const verify = (uid, token) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    uid,
    token
  });

  try {
    const response = await external_axios_default().post(`http://127.0.0.1:8000/api/v1/auth/users/activation/`, body, config);
    dispatch({
      type: ACTIVATION_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ACTIVATION_FAIL,
      payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
    });
  }
};
const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
const checkAuthenticated = () => async dispatch => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
    const body = JSON.stringify({
      token: localStorage.getItem("access")
    });

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/v1/auth/jwt/verify/`, body, config);

      if (response.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL
        });
      }
    } catch (error) {
      dispatch({
        type: AUTHENTICATED_FAIL
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_SUCCESS
    });
  }
};
const reset_password = email => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    email
  });

  try {
    await external_axios_default().post(`http://127.0.0.1:8000/api/v1/auth/users/reset_password/`, body, config);
    dispatch({
      type: PASSWORD_RESET_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
      payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
    });
  }
};
const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    uid,
    token,
    new_password,
    re_new_password
  });

  try {
    await axios.post(`http://127.0.0.1:8000/api/v1/auth/users/reset_password_confirm/`, body, config);
    dispatch({
      type: PASSWORD_RESET_CONFIRM_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_CONFIRM_FAIL,
      payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
    });
  }
};
;// CONCATENATED MODULE: ./ducks/account/reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  access: null,
  refresh: null,
  user: null,
  isAuthenticated: null,
  error: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes_AUTHENTICATED_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: true
      });

    case actionTypes_AUTHENTICATED_FAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: false,
        error: action.payload
      });

    case LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        access: action.payload.access,
        refresh: action.payload.refresh,
        isAuthenticated: true
      });

    case SIGNUP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: false
      });

    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case actionTypes_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        error: action.payload
      });

    case FETCH_USER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case FETCH_USER_FAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: null,
        error: action.payload
      });

    case PASSWORD_RESET_SUCCESS:
    case actionTypes_PASSWORD_RESET_CONFIRM_SUCCESS:
    case ACTIVATION_SUCCESS:
      return _objectSpread({}, state);

    case PASSWORD_RESET_FAIL:
    case actionTypes_PASSWORD_RESET_CONFIRM_FAIL:
    case ACTIVATION_FAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./ducks/account/index.ts





/***/ })

};
;