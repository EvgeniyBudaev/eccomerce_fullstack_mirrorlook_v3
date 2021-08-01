(function() {
var exports = {};
exports.id = 644;
exports.ids = [644];
exports.modules = {

/***/ 4428:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MirrorDetail; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./components/index.ts + 29 modules
var components = __webpack_require__(6383);
// EXTERNAL MODULE: ./utils/numberWithSpaces.ts
var numberWithSpaces = __webpack_require__(8192);
// EXTERNAL MODULE: ./ui-kit/index.ts + 26 modules
var ui_kit = __webpack_require__(5646);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./ui-kit/Slider/SliderAsNavFor/sliderAsNavFor.module.scss
var sliderAsNavFor_module = __webpack_require__(6350);
var sliderAsNavFor_module_default = /*#__PURE__*/__webpack_require__.n(sliderAsNavFor_module);
// EXTERNAL MODULE: ./ui-kit/assets/images/slide-home-5.jpg
var slide_home_5 = __webpack_require__(4032);
// EXTERNAL MODULE: ./ui-kit/assets/images/slide-home-6.jpg
var slide_home_6 = __webpack_require__(404);
// EXTERNAL MODULE: ./ui-kit/assets/images/slide-home-7.jpg
var slide_home_7 = __webpack_require__(4041);
;// CONCATENATED MODULE: ./ui-kit/Slider/SliderAsNavFor/SliderAsNavFor.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const SliderAsNavFor = () => {
  const {
    0: nav1,
    1: setNav1
  } = (0,external_react_.useState)();
  const {
    0: nav2,
    1: setNav2
  } = (0,external_react_.useState)();
  const slider1 = (0,external_react_.useRef)(null);
  const slider2 = (0,external_react_.useRef)(null);
  const settingsFor = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    className: "SliderFor"
  };
  const settingsNav = {
    slidesToShow: 3,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: false,
    swipeToSlide: true,
    focusOnSelect: true,
    className: "SliderNav",
    responsive: [{
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        centerMode: true
      }
    }]
  };
  (0,external_react_.useEffect)(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
      asNavFor: nav2,
      ref: slider1
    }, settingsFor), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sliderAsNavFor_module_default()).Item,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: slide_home_5/* default */.Z,
          alt: "",
          width: "400",
          height: "400"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sliderAsNavFor_module_default()).Item,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: slide_home_6/* default */.Z,
          alt: "",
          width: "400",
          height: "400"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sliderAsNavFor_module_default()).Item,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: slide_home_7/* default */.Z,
          alt: "",
          width: "400",
          height: "400"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sliderAsNavFor_module_default()).Item,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: slide_home_5/* default */.Z,
          alt: "",
          width: "400",
          height: "400"
        })
      })]
    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
      asNavFor: nav1,
      ref: slider2,
      slidesToShow: 3,
      swipeToSlide: true,
      focusOnSelect: true
    }, settingsNav), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sliderAsNavFor_module_default()).ItemNav,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "ItemImageNav",
          src: slide_home_5/* default */.Z,
          alt: "",
          width: "60",
          height: "60"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sliderAsNavFor_module_default()).ItemNav,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "ItemImageNav",
          src: slide_home_6/* default */.Z,
          alt: "",
          width: "60",
          height: "60"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sliderAsNavFor_module_default()).ItemNav,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "ItemImageNav",
          src: slide_home_7/* default */.Z,
          alt: "",
          width: "60",
          height: "60"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (sliderAsNavFor_module_default()).ItemNav,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "ItemImageNav",
          src: slide_home_5/* default */.Z,
          alt: "",
          width: "60",
          height: "60"
        })
      })]
    }))]
  });
};


;// CONCATENATED MODULE: ./ui-kit/Slider/SliderAsNavFor/index.ts


// EXTERNAL MODULE: ./components/Mirrors/MirrorCard/MirrorCard.module.scss
var MirrorCard_module = __webpack_require__(2293);
var MirrorCard_module_default = /*#__PURE__*/__webpack_require__.n(MirrorCard_module);
;// CONCATENATED MODULE: ./components/Mirrors/MirrorCard/MirrorCard.tsx







const MirrorCard = ({
  mirror
}) => {
  const handleAddToBasket = () => {
    console.log("Click");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (MirrorCard_module_default()).MirrorCard,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: (MirrorCard_module_default()).Title,
      children: mirror.title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (MirrorCard_module_default()).ProductMainInfo,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MirrorCard_module_default()).ColMedia,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MirrorCard_module_default()).ProductGallery,
          children: /*#__PURE__*/jsx_runtime_.jsx(SliderAsNavFor, {})
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MirrorCard_module_default()).ColSpecification,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MirrorCard_module_default()).ProductSpecification,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: (MirrorCard_module_default()).ProductSpecificationTitle,
            children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: (MirrorCard_module_default()).ProductSpecificationList,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0437\u0435\u0440\u043A\u0430\u043B\u0430: ", mirror.mirror_material]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0440\u0430\u043C\u044B: ", mirror.frame_material]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u0426\u0432\u0435\u0442 \u0440\u0430\u043C\u044B: ", mirror.frame_color]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u0420\u0430\u0437\u043C\u0435\u0440 \u0432\u043D\u0435\u0448\u043D\u0438\u0439, \u0441 \u0440\u0430\u043C\u043E\u0439: ", mirror.height_with_frame, " x", " ", mirror.width_with_frame, " \u0441\u043C"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u0420\u0430\u0437\u043C\u0435\u0440 \u0437\u0435\u0440\u043A\u0430\u043B\u0430 \u0431\u0435\u0437 \u0440\u0430\u043C\u044B: ", mirror.height_without_frame, " x", " ", mirror.width_without_frame, " \u0441\u043C"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u0412\u0435\u0441: ", mirror.weight, " \u043A\u0433"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0444\u0430\u0446\u0435\u0442\u0430: ", mirror.is_faced ? "Да" : "Нет"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u0424\u043E\u0440\u043C\u0430: ", mirror.form]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: ["\u041F\u0440\u043E\u0438\u0437\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ", mirror.brand]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: mirror.description
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MirrorCard_module_default()).ColPrice,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MirrorCard_module_default()).ProductPrice,
          children: [(0,numberWithSpaces/* numberWithSpaces */._)(parseInt(mirror.price)), " \u20BD"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MirrorCard_module_default()).ColPriceTitle,
            children: "\u0422\u043E\u0432\u0430\u0440:"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MirrorCard_module_default()).ProductStatus,
            children: mirror.count_in_stock > 0 ? "В наличии" : "Товар отсутствует"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MirrorCard_module_default()).ProductPay,
          children: "\u041A\u0430\u0440\u0442\u043E\u0439 \u043E\u043D\u043B\u0430\u0439\u043D/\u043A\u0443\u0440\u044C\u0435\u0440\u0443, \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438"
        }), /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Button */.zx, {
          className: (MirrorCard_module_default()).ProductAddToBasket,
          disabled: mirror.count_in_stock <= 0,
          onClick: handleAddToBasket,
          children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
        })]
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/Mirrors/MirrorCard/index.ts


;// CONCATENATED MODULE: ./pages/mirrors/[slug].tsx





function MirrorDetail(props) {
  console.log("[MirrorDetail][props]", props);
  return /*#__PURE__*/jsx_runtime_.jsx(components/* Layout */.Ar, {
    children: /*#__PURE__*/jsx_runtime_.jsx(MirrorCard, {
      mirror: props
    })
  });
}
const getStaticProps = async ({
  params
}) => {
  const productSlug = params.slug;
  const {
    data: mirrorResponse
  } = await external_axios_default().get(`http://localhost:8000/api/v1/mirrors/${productSlug}`);

  if (!mirrorResponse) {
    return {
      notFound: true
    };
  }

  return {
    props: mirrorResponse
  };
};
const getStaticPaths = async () => {
  const {
    data: mirrorsResponse
  } = await external_axios_default().get(`http://localhost:8000/api/v1/mirrors`);
  const {
    entities
  } = mirrorsResponse;
  const slugs = entities.map(product => product.product_slug);
  const pathWithParams = slugs.map(slug => ({
    params: {
      slug: slug
    }
  }));
  return {
    paths: pathWithParams,
    fallback: "blocking"
  };
};

/***/ }),

/***/ 2293:
/***/ (function(module) {

// Exports
module.exports = {
	"Title": "MirrorCard_Title__38Ohe",
	"ProductMainInfo": "MirrorCard_ProductMainInfo__1EN73",
	"ColMedia": "MirrorCard_ColMedia__18y-V",
	"ColSpecification": "MirrorCard_ColSpecification__L7X94",
	"ColPrice": "MirrorCard_ColPrice__23Aex",
	"ColPriceTitle": "MirrorCard_ColPriceTitle__1TW_b",
	"ProductSpecification": "MirrorCard_ProductSpecification__1_9dq",
	"ProductSpecificationTitle": "MirrorCard_ProductSpecificationTitle__1EJK5",
	"ProductSpecificationList": "MirrorCard_ProductSpecificationList__3ASgo",
	"ProductPrice": "MirrorCard_ProductPrice__2BZLb",
	"ProductStatus": "MirrorCard_ProductStatus__YKxMP",
	"ProductAddToBasket": "MirrorCard_ProductAddToBasket__3D_5e",
	"ProductPay": "MirrorCard_ProductPay__aTxP4"
};


/***/ }),

/***/ 6350:
/***/ (function(module) {

// Exports
module.exports = {

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,61,334], function() { return __webpack_exec__(4428); });
module.exports = __webpack_exports__;

})();