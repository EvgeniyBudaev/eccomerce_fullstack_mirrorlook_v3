exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 6383:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SK": function() { return /* reexport */ Home; },
  "Ar": function() { return /* reexport */ Layout; },
  "vS": function() { return /* reexport */ LayoutMirrors; },
  "TR": function() { return /* reexport */ Logo_Logo; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./ui-kit/index.ts + 26 modules
var ui_kit = __webpack_require__(5646);
;// CONCATENATED MODULE: ./ui-kit/assets/images/home-mirrors3.jpg
/* harmony default export */ var home_mirrors3 = ({"src":"/_next/static/image/ui-kit/assets/images/home-mirrors3.48371834d0caf91a44f272a129d5eb20.jpg","height":679,"width":564,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAFX/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAH//xAAcEAABAwUAAAAAAAAAAAAAAAADAQISAAURIrL/2gAIAQEAAT8ADdXhUrmHEbKpGO/Nf//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAIAQIBAT8Ainh//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEf/aAAgBAwEBPwBobP/Z"});
;// CONCATENATED MODULE: ./ui-kit/assets/images/home-consoles.jpg
/* harmony default export */ var home_consoles = ({"src":"/_next/static/image/ui-kit/assets/images/home-consoles.eb1092fa44a93bff28b1aafadf5a8fc8.jpg","height":1066,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAFv/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAH//xAAdEAACAgEFAAAAAAAAAAAAAAABAgMRAAQSEyFS/9oACAEBAAE/ANOsvOWM7lN9hL6A85//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQJR/9oACAECAQE/AFVaf//EABcRAAMBAAAAAAAAAAAAAAAAAAABAlH/2gAIAQMBAT8Aczh//9k="});
// EXTERNAL MODULE: ./components/Home/Home.module.scss
var Home_module = __webpack_require__(9555);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./components/Home/Home.tsx









const Home = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Home_module_default()).Home,
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* SliderSimple */.Vd, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (Home_module_default()).Catalog,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Home_module_default()).CatalogImg,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/mirrors/`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: home_mirrors3,
              alt: "",
              width: "585",
              height: "380"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Home_module_default()).CatalogImg,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/consoles/`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: home_consoles,
              alt: "",
              width: "585",
              height: "380"
            })
          })
        })
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/Home/index.ts

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Layout/Header/HeaderBottom/HeaderBottom.module.scss
var HeaderBottom_module = __webpack_require__(7244);
var HeaderBottom_module_default = /*#__PURE__*/__webpack_require__.n(HeaderBottom_module);
;// CONCATENATED MODULE: ./components/Layout/Header/HeaderBottom/HeaderBottom.tsx





const HeaderBottom = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (HeaderBottom_module_default()).HeaderBottom,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (HeaderBottom_module_default()).Container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/mirrors/`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (HeaderBottom_module_default()).Link,
          children: "\u0417\u0435\u0440\u043A\u0430\u043B\u0430"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/consoles/`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (HeaderBottom_module_default()).Link,
          children: "\u041A\u043E\u043D\u0441\u043E\u043B\u0438"
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/Layout/Header/HeaderBottom/index.ts

// EXTERNAL MODULE: ./components/Layout/Header/HeaderCenter/HeaderIconsList/HeaderIconsList.module.scss
var HeaderIconsList_module = __webpack_require__(506);
var HeaderIconsList_module_default = /*#__PURE__*/__webpack_require__.n(HeaderIconsList_module);
;// CONCATENATED MODULE: ./components/Layout/Header/HeaderCenter/HeaderIconsList/HeaderIconsList.tsx






const HeaderIconsList = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (HeaderIconsList_module_default()).HeaderIconsList,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (HeaderIconsList_module_default()).HeaderIconListItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/login",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Icon */.JO, {
            className: (HeaderIconsList_module_default()).Icon,
            type: "User"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (HeaderIconsList_module_default()).IconDescription,
            children: "\u0412\u043E\u0439\u0442\u0438"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (HeaderIconsList_module_default()).HeaderIconListItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Icon */.JO, {
            className: (HeaderIconsList_module_default()).Icon,
            type: "Basket"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (HeaderIconsList_module_default()).IconDescription,
            children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"
          })]
        })
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/Layout/Header/HeaderCenter/HeaderIconsList/index.ts


// EXTERNAL MODULE: ./components/Layout/Header/HeaderCenter/HeaderCenter.module.scss
var HeaderCenter_module = __webpack_require__(614);
var HeaderCenter_module_default = /*#__PURE__*/__webpack_require__.n(HeaderCenter_module);
;// CONCATENATED MODULE: ./components/Layout/Header/HeaderCenter/HeaderCenter.tsx






const HeaderCenter = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (HeaderCenter_module_default()).HeaderCenter,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (HeaderCenter_module_default()).Container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (HeaderCenter_module_default()).Inner,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Logo_Logo, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderIconsList, {})]
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/Layout/Header/HeaderCenter/index.ts

// EXTERNAL MODULE: ./components/Layout/Header/HeaderTop/HeaderTop.module.scss
var HeaderTop_module = __webpack_require__(180);
var HeaderTop_module_default = /*#__PURE__*/__webpack_require__.n(HeaderTop_module);
;// CONCATENATED MODULE: ./components/Layout/Header/HeaderTop/HeaderTop.tsx





const HeaderTop = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (HeaderTop_module_default()).HeaderTop,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (HeaderTop_module_default()).Info,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (HeaderTop_module_default()).Container,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (HeaderTop_module_default()).InfoInner,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (HeaderTop_module_default()).InfoLeft,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (HeaderTop_module_default()).Text,
                children: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (HeaderTop_module_default()).Text,
                children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (HeaderTop_module_default()).InfoRight,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "mailto:mirrorlook@gmail.com",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (HeaderTop_module_default()).Text,
                children: "mirrorlook@gmail.com"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "tel:+74999999999",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (HeaderTop_module_default()).Text,
                children: "+7 (499) 999-99-99"
              })
            })]
          })]
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/Layout/Header/HeaderTop/index.ts

;// CONCATENATED MODULE: ./components/Layout/Header/Header.tsx






const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderTop, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderCenter, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderBottom, {})]
  });
};
;// CONCATENATED MODULE: ./components/Layout/Header/index.ts

// EXTERNAL MODULE: ./components/Layout/Footer/Footer.module.scss
var Footer_module = __webpack_require__(2317);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Layout/Footer/Footer.tsx



const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Footer_module_default()).Footer,
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 2021"
    })
  });
};
;// CONCATENATED MODULE: ./components/Layout/Footer/index.ts


// EXTERNAL MODULE: ./components/Layout/Layout.module.scss
var Layout_module = __webpack_require__(8606);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout/Layout.tsx







const Layout = ({
  children,
  title = "Интернет-магазин зеркал"
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).Layout,
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [title, " | MirrorLook"]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Layout_module_default()).Wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).Content,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Layout_module_default()).Container,
            children: children
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
    })]
  });
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./utils/numberWithSpaces.ts
var numberWithSpaces = __webpack_require__(8192);
// EXTERNAL MODULE: ./components/Layout/LayoutMirrors/MirrorsList/MirrorsListItem/MirrorsListItem.module.scss
var MirrorsListItem_module = __webpack_require__(2035);
var MirrorsListItem_module_default = /*#__PURE__*/__webpack_require__.n(MirrorsListItem_module);
;// CONCATENATED MODULE: ./components/Layout/LayoutMirrors/MirrorsList/MirrorsListItem/MirrorsListItem.tsx









const MirrorsListItem = ({
  mirror,
  isClickedDisplayLine
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: external_classnames_default()((MirrorsListItem_module_default()).MirrorsListItem, {
      [(MirrorsListItem_module_default()).MirrorsListItem__line]: isClickedDisplayLine
    }),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (MirrorsListItem_module_default()).Wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MirrorsListItem_module_default()).Content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MirrorsListItem_module_default()).ContentImg,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/mirrors/${mirror.product_slug}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: mirror.product_photo1,
                alt: "",
                width: "164",
                height: "216"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MirrorsListItem_module_default()).ContentDescription,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (MirrorsListItem_module_default()).ContentTitle,
            children: mirror.title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: (MirrorsListItem_module_default()).ContentDescriptionLine,
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (MirrorsListItem_module_default()).ContentTitleLine,
            children: mirror.title
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0437\u0435\u0440\u043A\u0430\u043B\u0430:"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: mirror.mirror_material
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0440\u0430\u043C\u044B:"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: mirror.frame_material
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u0426\u0432\u0435\u0442 \u0440\u0430\u043C\u044B:"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: mirror.frame_color
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0432\u043D\u0435\u0448\u043D\u0438\u0439, \u0441 \u0440\u0430\u043C\u043E\u0439:"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: [mirror.height_with_frame, " x ", mirror.width_with_frame, " \u0441\u043C"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0437\u0435\u0440\u043A\u0430\u043B\u0430 \u0431\u0435\u0437 \u0440\u0430\u043C\u044B:"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: [mirror.height_without_frame, " x ", mirror.width_without_frame, " \u0441\u043C"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u0412\u0435\u0441:"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: [mirror.weight, " \u043A\u0433"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0444\u0430\u0446\u0435\u0442\u0430:"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: mirror.is_faced ? "Да" : "Нет"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u0424\u043E\u0440\u043C\u0430:"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: mirror.form
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (MirrorsListItem_module_default()).RowLine,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).LabelLine,
              children: "\u041F\u0440\u043E\u0438\u0437\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C:"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (MirrorsListItem_module_default()).ValueLine,
              children: mirror.brand
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MirrorsListItem_module_default()).Footer,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MirrorsListItem_module_default()).FooterTop,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MirrorsListItem_module_default()).FooterBottomLabel,
            children: "\u0426\u0435\u043D\u0430:"
          }), /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* IconButton */.hU, {
            className: (MirrorsListItem_module_default()).FooterTopBasket,
            type: "Basket"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MirrorsListItem_module_default()).FooterBottom,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (MirrorsListItem_module_default()).FooterBottomNum,
            children: [(0,numberWithSpaces/* numberWithSpaces */._)(parseInt(mirror.price)), " \u20BD"]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MirrorsListItem_module_default()).FooterBottomStatus,
            children: mirror.count_in_stock > 0 ? "В наличии" : "Товар отсутствует"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MirrorsListItem_module_default()).FooterAddToBasketLine,
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Button */.zx, {
              onClick: () => {},
              children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
            })
          })]
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./components/Layout/LayoutMirrors/MirrorsList/MirrorsList.module.scss
var MirrorsList_module = __webpack_require__(3149);
var MirrorsList_module_default = /*#__PURE__*/__webpack_require__.n(MirrorsList_module);
;// CONCATENATED MODULE: ./components/Layout/LayoutMirrors/MirrorsList/MirrorsList.tsx





const MirrorsList = ({
  mirrors,
  isClickedDisplayLine
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: external_classnames_default()((MirrorsList_module_default()).MirrorsList, {
      [(MirrorsList_module_default()).MirrorsList__line]: isClickedDisplayLine
    }),
    children: mirrors.map(mirror => /*#__PURE__*/jsx_runtime_.jsx(MirrorsListItem, {
      mirror: mirror,
      isClickedDisplayLine: isClickedDisplayLine
    }, mirror.id))
  });
};
;// CONCATENATED MODULE: ./components/Layout/LayoutMirrors/MirrorsList/index.ts

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3804);
// EXTERNAL MODULE: ./components/Layout/LayoutMirrors/LayoutMirrorsAside/LayoutMirrorsAside.module.scss
var LayoutMirrorsAside_module = __webpack_require__(468);
var LayoutMirrorsAside_module_default = /*#__PURE__*/__webpack_require__.n(LayoutMirrorsAside_module);
;// CONCATENATED MODULE: ./components/Layout/LayoutMirrors/LayoutMirrorsAside/LayoutMirrorsAside.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const LayoutMirrorsAside = ({
  onFirstPage
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: checkedMirrors,
    1: setCheckedMirrors
  } = (0,external_react_.useState)({
    category: [],
    form: []
  });
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = (0,external_react_.useState)(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(prevState => !prevState);
  };

  const handleChangeCheckedBox = ({
    target: {
      checked,
      value
    }
  }, nameGroup) => {
    if (checked) {
      setCheckedMirrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [nameGroup]: [...prevState[nameGroup], value]
      }));
    } else {
      setCheckedMirrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [nameGroup]: [...prevState[nameGroup].filter(x => x !== value)]
      }));
    }
  };

  const asideMirrorsOptions = {
    category: ["Венецианские зеркала", "Напольные зеркала"],
    form: ["Круглая", "Прямоугольная"]
  };
  (0,external_react_.useEffect)(() => {
    if (!isSubmitting) return;

    const handleFilter = request => {
      const obj = {};
      const entries = Object.entries(request);
      entries.forEach(([key, value]) => {
        if (!(0,external_lodash_.isEmpty)(value)) {
          obj[key] = value.join(",");
        }
      });

      if (!(0,external_lodash_.isEmpty)(router.query.ordering)) {
        return _objectSpread(_objectSpread({}, obj), {}, {
          ordering: router.query.ordering,
          page: 1
        });
      } else {
        return _objectSpread(_objectSpread({}, obj), {}, {
          page: 1
        });
      }
    };

    async function fetchMirrorsFilter(request) {
      await router.push({
        href: "/mirrors",
        query: handleFilter(request)
      });
      onFirstPage();
    }

    setIsSubmitting(prevState => !prevState);
    fetchMirrorsFilter(checkedMirrors); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting, checkedMirrors, onFirstPage]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: (LayoutMirrorsAside_module_default()).LayoutMirrorsAside,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ui_kit/* IconButton */.hU, {
      className: (LayoutMirrorsAside_module_default()).FilterButton,
      type: "Filter"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: (LayoutMirrorsAside_module_default()).AsideFilter,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Accordion */.UQ, {
        title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
        active: true,
        children: asideMirrorsOptions.category.map((label, index) => /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Checkbox */.XZ, {
          className: (LayoutMirrorsAside_module_default()).CheckboxItem,
          id: index.toString() + label,
          label: label,
          checkedBox: checkedMirrors,
          nameGroup: "category",
          onClick: (event, nameGroup) => handleChangeCheckedBox(event, nameGroup)
        }, index))
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Accordion */.UQ, {
        title: "\u0424\u043E\u0440\u043C\u0430",
        active: true,
        children: asideMirrorsOptions.form.map((label, index) => /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Checkbox */.XZ, {
          className: (LayoutMirrorsAside_module_default()).CheckboxItem,
          id: index.toString() + label,
          label: label,
          checkedBox: checkedMirrors,
          nameGroup: "form",
          onClick: (event, nameGroup) => handleChangeCheckedBox(event, nameGroup)
        }, index))
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Button */.zx, {
        className: (LayoutMirrorsAside_module_default()).LayoutMirrorsAsideButton,
        typeButton: "submit",
        onClick: () => {},
        children: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    })]
  });
};
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(724);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ./components/Layout/LayoutMirrors/LayoutSorting/styles.tsx
function styles_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function styles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { styles_ownKeys(Object(source), true).forEach(function (key) { styles_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { styles_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function styles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const LayoutSortingSelectStyles = {
  control: base => styles_objectSpread(styles_objectSpread({}, base), {}, {
    border: "1px solid #B0976A",
    // "&:hover": { borderColor: "#e5e5e5" },
    cursor: "pointer"
  }),
  option: (base, {
    isFocused,
    isSelected
  }) => styles_objectSpread(styles_objectSpread({}, base), {}, {
    backgroundColor: isSelected ? "#dfd3c3" : "",
    color: isFocused || isSelected ? "black" : "",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#dfd3c3"
    },
    ":hover": {
      backgroundColor: "#e4e4e4",
      transition: "all 0.15s"
    }
  })
};
// EXTERNAL MODULE: ./components/Layout/LayoutMirrors/LayoutSorting/LayoutSorting.module.scss
var LayoutSorting_module = __webpack_require__(7604);
var LayoutSorting_module_default = /*#__PURE__*/__webpack_require__.n(LayoutSorting_module);
;// CONCATENATED MODULE: ./components/Layout/LayoutMirrors/LayoutSorting/LayoutSorting.tsx



function LayoutSorting_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LayoutSorting_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LayoutSorting_ownKeys(Object(source), true).forEach(function (key) { LayoutSorting_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LayoutSorting_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LayoutSorting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const LayoutSorting = ({
  isClickedDisplayLine,
  onDisplayLine,
  onFirstPage
}) => {
  const PRICE_UP = "по возрастанию цены";
  const PRICE_DOWN = "по убыванию цены";
  const options = [{
    value: "price",
    label: PRICE_UP
  }, {
    value: "-price",
    label: PRICE_DOWN
  }];
  const {
    0: selectedOption,
    1: setSelectedOption
  } = (0,external_react_.useState)({
    value: "price",
    label: PRICE_UP
  });
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  const path = router.asPath;

  const handleSorting = selectedOption => {
    return LayoutSorting_objectSpread(LayoutSorting_objectSpread({}, router.query), {}, {
      ordering: selectedOption.value,
      page: 1
    });
  };

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    setIsSubmitting(prevState => !prevState);
  };

  (0,external_react_.useEffect)(() => {
    if (!isSubmitting) return;

    async function fetchMirrorsSorting(request) {
      await router.push({
        href: path,
        query: handleSorting(request)
      });
      onFirstPage();
    }

    setIsSubmitting(prevState => !prevState);
    fetchMirrorsSorting(selectedOption); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting, onFirstPage]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (LayoutSorting_module_default()).LayoutSorting,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (LayoutSorting_module_default()).Inner,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (LayoutSorting_module_default()).SelectGroup,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (LayoutSorting_module_default()).SelectGroupItem,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (LayoutSorting_module_default()).SelectGroupItemLabel,
            children: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
            className: (LayoutSorting_module_default()).LayoutSortingSelectPrice,
            styles: LayoutSortingSelectStyles,
            id: "LayoutSorting-SelectPrice",
            instanceId: "LayoutSorting-SelectPrice",
            value: selectedOption,
            onChange: handleChange,
            options: options
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (LayoutSorting_module_default()).ListingViewSwitcher,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (LayoutSorting_module_default()).ListingViewSwitcherInner,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_classnames_default()((LayoutSorting_module_default()).ListingViewSwitcherPointer, {
              [(LayoutSorting_module_default()).ListingViewSwitcherPointer__line]: isClickedDisplayLine
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (LayoutSorting_module_default()).DisplayButtons,
            children: [/*#__PURE__*/jsx_runtime_.jsx(ui_kit/* IconButton */.hU, {
              className: external_classnames_default()((LayoutSorting_module_default()).DisplayButton, {
                [(LayoutSorting_module_default()).DisplayButton__line]: isClickedDisplayLine
              }),
              type: "DisplayLine",
              onClick: onDisplayLine
            }), /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* IconButton */.hU, {
              className: external_classnames_default()((LayoutSorting_module_default()).DisplayButton, {
                [(LayoutSorting_module_default()).DisplayButton__line]: !isClickedDisplayLine
              }),
              type: "DisplayGrid",
              onClick: onDisplayLine
            })]
          })]
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ./components/Layout/LayoutMirrors/LayoutMirrors.module.scss
var LayoutMirrors_module = __webpack_require__(2135);
var LayoutMirrors_module_default = /*#__PURE__*/__webpack_require__.n(LayoutMirrors_module);
;// CONCATENATED MODULE: ./components/Layout/LayoutMirrors/LayoutMirrors.tsx



function LayoutMirrors_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LayoutMirrors_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LayoutMirrors_ownKeys(Object(source), true).forEach(function (key) { LayoutMirrors_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LayoutMirrors_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LayoutMirrors_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const LayoutMirrors = ({
  mirrorsResponse
}) => {
  const {
    0: productRange,
    1: setProductRange
  } = (0,external_react_.useState)({
    startProduct: 0,
    endProduct: 0
  });
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const {
    0: isFirstPage,
    1: setIsFirstPage
  } = (0,external_react_.useState)(false);
  const {
    0: isClickedDisplayLine,
    1: setIsClickedDisplayLine
  } = (0,external_react_.useState)(false);
  const {
    pagesCount,
    pageItemsCount,
    totalItemsCount
  } = mirrorsResponse.paging;
  const router = (0,router_.useRouter)();
  const path = router.asPath;

  const handleFilter = currentButton => {
    const obj = {};
    const entries = Object.entries(router.query);
    entries.forEach(([key, value]) => {
      obj[key] = value;
    });

    if (currentButton === 1) {
      delete obj["page"];
      return LayoutMirrors_objectSpread({}, obj);
    } else {
      return LayoutMirrors_objectSpread(LayoutMirrors_objectSpread({}, obj), {}, {
        page: currentButton
      });
    }
  };

  const handlePageChange = currentButton => {
    if (currentButton === -100 || currentButton === -99 || currentButton === -101) {
      return;
    }

    setCurrentPage(currentButton);
    router.push({
      href: path,
      query: handleFilter(currentButton)
    });
  };

  (0,external_react_.useEffect)(() => {
    const lastPage = Math.max(Math.ceil(totalItemsCount / pageItemsCount), 1);

    if (currentPage === lastPage) {
      setProductRange({
        startProduct: (currentPage - 1) * pageItemsCount + 1,
        endProduct: totalItemsCount
      });
    } else {
      setProductRange({
        startProduct: (currentPage - 1) * pageItemsCount + 1,
        endProduct: currentPage * pageItemsCount
      });
    }
  }, [currentPage, pageItemsCount, totalItemsCount]);

  const handleChangeOnFirstPage = () => {
    setIsFirstPage(prev => !prev);
  };

  const handleDisplayLine = () => {
    setIsClickedDisplayLine(prev => !prev);
  };

  console.log("[mirrorsResponse.entities]", mirrorsResponse.entities);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (LayoutMirrors_module_default()).LayoutMirrors,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (LayoutMirrors_module_default()).Row,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: (LayoutMirrors_module_default()).Title,
        children: "\u0417\u0435\u0440\u043A\u0430\u043B\u0430"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: [productRange.startProduct, "-", productRange.endProduct, " \u0438\u0437", " ", totalItemsCount, " \u0442\u043E\u0432\u0430\u0440\u043E\u0432"]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (LayoutMirrors_module_default()).Inner,
      children: [/*#__PURE__*/jsx_runtime_.jsx(LayoutMirrorsAside, {
        onFirstPage: handleChangeOnFirstPage
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LayoutMirrors_module_default()).Wrapper,
        children: [/*#__PURE__*/jsx_runtime_.jsx(LayoutSorting, {
          isClickedDisplayLine: isClickedDisplayLine,
          onDisplayLine: handleDisplayLine,
          onFirstPage: handleChangeOnFirstPage
        }), /*#__PURE__*/jsx_runtime_.jsx(MirrorsList, {
          mirrors: mirrorsResponse.entities,
          isClickedDisplayLine: isClickedDisplayLine
        }), /*#__PURE__*/jsx_runtime_.jsx(ui_kit/* Pagination */.tl, {
          pages: pagesCount,
          isFirstPage: isFirstPage,
          onChange: handlePageChange
        })]
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/Layout/LayoutMirrors/index.ts

;// CONCATENATED MODULE: ./components/Layout/index.ts



;// CONCATENATED MODULE: ./components/Logo/Logo.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 193,
    height: 48,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M62.987 23.442l-.018-9.064-4.268 7.501h-1.077l-4.268-7.384v8.947h-2.301V9.768h1.986l5.159 9.064 5.066-9.064h1.986l.018 13.674h-2.282zM68.78 9.768h2.413v13.674h-2.413V9.768zm14.425 13.674l-2.653-4.005c-.112.013-.279.02-.502.02h-2.932v3.985h-2.412V9.768h5.344c1.127 0 2.104.195 2.933.586.841.39 1.484.95 1.93 1.68.445.729.668 1.595.668 2.598 0 1.029-.242 1.914-.724 2.656-.47.743-1.15 1.296-2.041 1.661l2.987 4.493h-2.598zm-.055-8.81c0-.873-.272-1.543-.817-2.012-.544-.47-1.342-.704-2.394-.704h-2.82v5.45h2.82c1.052 0 1.85-.234 2.394-.703.545-.481.817-1.159.817-2.031zm13.63 8.81l-2.654-4.005c-.112.013-.279.02-.501.02h-2.932v3.985h-2.413V9.768h5.345c1.125 0 2.103.195 2.932.586.841.39 1.484.95 1.93 1.68.445.729.668 1.595.668 2.598 0 1.029-.241 1.914-.724 2.656-.47.743-1.15 1.296-2.041 1.661l2.987 4.493h-2.598zm-.056-8.81c0-.873-.272-1.543-.817-2.012-.544-.47-1.342-.704-2.394-.704h-2.82v5.45h2.82c1.052 0 1.85-.234 2.394-.703.545-.481.817-1.159.817-2.031zm11.199 9.005c-1.324 0-2.518-.3-3.582-.898a6.634 6.634 0 01-2.505-2.52c-.607-1.081-.91-2.286-.91-3.614 0-1.329.303-2.527.91-3.595a6.458 6.458 0 012.505-2.52c1.064-.612 2.258-.918 3.582-.918 1.323 0 2.517.306 3.581.918a6.495 6.495 0 012.505 2.5c.606 1.069.91 2.273.91 3.615 0 1.341-.304 2.546-.91 3.614a6.634 6.634 0 01-2.505 2.52c-1.064.599-2.258.898-3.581.898zm0-2.227c.865 0 1.645-.201 2.338-.605a4.44 4.44 0 001.633-1.72c.395-.742.594-1.569.594-2.48 0-.912-.199-1.732-.594-2.462a4.268 4.268 0 00-1.633-1.719c-.693-.416-1.473-.625-2.338-.625-.867 0-1.646.209-2.339.625a4.261 4.261 0 00-1.633 1.72c-.396.729-.594 1.55-.594 2.46 0 .912.198 1.74.594 2.482.396.73.94 1.302 1.633 1.719.693.404 1.472.605 2.339.605zm18.052 2.032l-2.653-4.005c-.112.013-.279.02-.501.02h-2.932v3.985h-2.413V9.768h5.345c1.125 0 2.102.195 2.932.586.841.39 1.484.95 1.93 1.68.445.729.668 1.595.668 2.598 0 1.029-.241 1.914-.724 2.656-.47.743-1.15 1.296-2.041 1.661l2.988 4.493h-2.599zm-.055-8.81c0-.873-.273-1.543-.817-2.012-.544-.47-1.342-.704-2.394-.704h-2.82v5.45h2.82c1.052 0 1.85-.234 2.394-.703.544-.481.817-1.159.817-2.031zm10.258-4.864h2.413v11.525h6.792v2.149h-9.205V9.768zm16.943 13.87c-1.324 0-2.518-.3-3.582-.9a6.634 6.634 0 01-2.505-2.52c-.607-1.08-.91-2.285-.91-3.613 0-1.329.303-2.527.91-3.595a6.458 6.458 0 012.505-2.52c1.064-.612 2.258-.918 3.582-.918 1.323 0 2.517.306 3.581.918a6.504 6.504 0 012.506 2.5c.606 1.069.909 2.273.909 3.615 0 1.341-.303 2.546-.909 3.614a6.644 6.644 0 01-2.506 2.52c-1.064.599-2.258.898-3.581.898zm0-2.228c.865 0 1.645-.201 2.338-.605a4.44 4.44 0 001.633-1.72c.395-.742.594-1.569.594-2.48 0-.912-.199-1.732-.594-2.462a4.268 4.268 0 00-1.633-1.719c-.693-.416-1.473-.625-2.338-.625-.867 0-1.646.209-2.339.625a4.261 4.261 0 00-1.633 1.72c-.396.729-.594 1.55-.594 2.46 0 .912.198 1.74.594 2.482.396.73.94 1.302 1.633 1.719.693.404 1.472.605 2.339.605zm15.621 2.227c-1.324 0-2.518-.3-3.581-.898a6.634 6.634 0 01-2.505-2.52c-.607-1.081-.91-2.286-.91-3.614 0-1.329.303-2.527.91-3.595a6.458 6.458 0 012.505-2.52c1.063-.612 2.257-.918 3.581-.918 1.324 0 2.518.306 3.582.918a6.495 6.495 0 012.505 2.5c.606 1.069.91 2.273.91 3.615 0 1.341-.304 2.546-.91 3.614a6.634 6.634 0 01-2.505 2.52c-1.064.599-2.258.898-3.582.898zm0-2.227c.866 0 1.646-.201 2.339-.605a4.44 4.44 0 001.633-1.72c.395-.742.594-1.569.594-2.48 0-.912-.199-1.732-.594-2.462a4.268 4.268 0 00-1.633-1.719c-.693-.416-1.473-.625-2.339-.625-.866 0-1.645.209-2.338.625a4.261 4.261 0 00-1.633 1.72c-.396.729-.594 1.55-.594 2.46 0 .912.198 1.74.594 2.482.396.73.94 1.302 1.633 1.719.693.404 1.472.605 2.338.605zm14.026-3.692l-2.06 2.227v3.497h-2.412V9.768h2.412v7.013l6.421-7.013h2.71l-5.456 6.114 5.79 7.56h-2.821l-4.584-5.724zM51.497 30.92h.697v5.828l4.275-5.827h.64v7.032h-.697v-5.817l-4.276 5.817h-.639v-7.032zm7.704 1.749h.678v2.34h3.159v-2.34h.678v5.285h-.678v-2.331h-3.16v2.33h-.677V32.67zm9.971.633h-1.899v4.651h-.677v-4.651h-1.9v-.633h4.477v.633zm5.138 2.23h-4.2c.039.55.239.995.602 1.336.362.335.82.503 1.374.503.312 0 .598-.057.859-.171.26-.12.487-.295.678-.523l.381.463a2.153 2.153 0 01-.84.643c-.33.147-.696.22-1.097.22-.515 0-.973-.113-1.374-.34a2.482 2.482 0 01-.926-.965 2.85 2.85 0 01-.334-1.387c0-.516.105-.978.315-1.386a2.43 2.43 0 01.878-.955 2.381 2.381 0 011.26-.341c.464 0 .88.114 1.25.341.369.228.658.546.868.955.21.402.315.864.315 1.386l-.01.221zm-2.424-2.29c-.484 0-.891.164-1.222.492-.325.321-.509.743-.554 1.266h3.56c-.044-.523-.232-.945-.563-1.266-.324-.328-.731-.492-1.221-.492zm6.52-.613c.47 0 .897.114 1.279.341.381.221.68.536.897.945.216.408.324.874.324 1.396 0 .53-.108.998-.324 1.407a2.386 2.386 0 01-.897.954 2.473 2.473 0 01-1.28.332 2.34 2.34 0 01-1.106-.261 2.185 2.185 0 01-.802-.784v2.944h-.678v-7.234h.65v1.045c.203-.349.47-.616.801-.804a2.297 2.297 0 011.136-.281zm-.048 4.742c.35 0 .668-.084.954-.251.287-.174.51-.419.669-.734.165-.315.248-.673.248-1.075 0-.402-.083-.757-.248-1.065a1.773 1.773 0 00-1.623-.994c-.356 0-.678.087-.964.26-.28.175-.503.42-.668.734-.16.308-.239.663-.239 1.065 0 .402.08.76.239 1.075.165.315.388.56.668.734.286.167.608.25.964.25zm4.004-4.702h.678v2.34h3.159v-2.34h.677v5.285H86.2v-2.331h-3.16v2.33h-.677V32.67zm10.83 2.863h-4.199c.038.55.239.995.601 1.336.363.335.821.503 1.375.503.312 0 .598-.057.859-.171.26-.12.486-.295.677-.523l.382.463a2.153 2.153 0 01-.84.643c-.33.147-.697.22-1.097.22-.516 0-.974-.113-1.375-.34a2.482 2.482 0 01-.925-.965 2.849 2.849 0 01-.335-1.387c0-.516.106-.978.316-1.386a2.43 2.43 0 01.877-.955 2.382 2.382 0 011.26-.341c.465 0 .882.114 1.25.341.37.228.66.546.87.955.21.402.314.864.314 1.386l-.01.221zm-2.424-2.29c-.483 0-.89.164-1.221.492-.325.321-.51.743-.554 1.266h3.56c-.044-.523-.232-.945-.563-1.266-.325-.328-.732-.492-1.222-.492zm7.242.06h-1.9v4.651h-.677v-4.651h-1.9v-.633h4.477v.633zm.364 1.617h2.501v.623h-2.5v-.623zm9.648-2.25v5.285h-.621v-4.18l-2.033 3.536h-.305l-2.033-3.546v4.19h-.62v-5.285h.687l2.128 3.808 2.167-3.808h.63zm3.656-.04c.655 0 1.158.174 1.507.522.35.342.525.85.525 1.527v3.276h-.649v-.824a1.575 1.575 0 01-.677.643c-.293.154-.643.23-1.05.23-.56 0-1.005-.14-1.336-.421-.331-.282-.496-.653-.496-1.115 0-.45.152-.81.458-1.085.311-.275.805-.412 1.479-.412h1.594v-.322c0-.455-.121-.8-.363-1.035-.242-.24-.595-.361-1.059-.361-.318 0-.624.057-.916.17a2.214 2.214 0 00-.754.453l-.306-.533c.255-.228.56-.402.916-.522.357-.128.732-.191 1.127-.191zm-.239 4.812c.382 0 .709-.09.983-.271.274-.188.477-.456.611-.804v-.864h-1.575c-.859 0-1.288.315-1.288.944 0 .309.111.553.334.734.222.174.534.261.935.261zm7.626-4.14h-2.873v4.652h-.678V32.67h3.551v.633zm2.706-.672c.656 0 1.158.174 1.508.522.35.342.525.85.525 1.527v3.276h-.649v-.824a1.575 1.575 0 01-.677.643c-.293.154-.643.23-1.05.23-.56 0-1.006-.14-1.336-.421-.331-.282-.497-.653-.497-1.115 0-.45.153-.81.458-1.085.312-.275.805-.412 1.48-.412h1.594v-.322c0-.455-.121-.8-.363-1.035-.242-.24-.595-.361-1.059-.361-.319 0-.624.057-.917.17a2.224 2.224 0 00-.754.453l-.305-.533c.254-.228.56-.402.916-.522.356-.128.732-.191 1.126-.191zm-.238 4.812c.382 0 .709-.09.983-.271.273-.188.477-.456.611-.804v-.864h-1.575c-.859 0-1.289.315-1.289.944 0 .309.112.553.334.734.223.174.535.261.936.261zm6.416-2.24c.356.087.63.237.821.452.197.214.296.475.296.783 0 .309-.102.583-.306.824a1.918 1.918 0 01-.811.563 3.25 3.25 0 01-1.136.19c-.362 0-.719-.053-1.069-.16a2.784 2.784 0 01-.916-.492l.229-.533c.229.181.496.322.802.422.305.1.614.15.926.15.464 0 .843-.09 1.135-.27.299-.188.449-.44.449-.754a.732.732 0 00-.363-.653c-.242-.16-.572-.241-.992-.241h-.859v-.522h.82c.376 0 .678-.074.907-.221.229-.154.344-.359.344-.613 0-.282-.131-.503-.392-.663-.254-.161-.588-.242-1.002-.242-.541 0-1.075.145-1.603.433l-.191-.553a3.818 3.818 0 011.861-.492c.382 0 .725.06 1.031.18.312.114.553.279.725.493.178.214.267.462.267.743 0 .268-.089.506-.267.714a1.518 1.518 0 01-.706.462zm2.655-2.532h.677v4.2l3.35-4.2h.602v5.285h-.678v-4.2l-3.34 4.2h-.611v-5.285zm6.571 0h.677v2.34h3.159v-2.34h.678v5.285h-.678v-2.331h-3.159v2.33h-.677V32.67zm11.381 2.532c.356.087.63.237.821.452.197.214.296.475.296.783 0 .309-.102.583-.306.824a1.918 1.918 0 01-.811.563 3.25 3.25 0 01-1.136.19c-.362 0-.719-.053-1.069-.16a2.784 2.784 0 01-.916-.492l.229-.533c.229.181.496.322.802.422.305.1.614.15.926.15.464 0 .843-.09 1.135-.27.299-.188.449-.44.449-.754a.732.732 0 00-.363-.653c-.242-.16-.572-.241-.992-.241h-.859v-.522h.82c.376 0 .678-.074.907-.221.229-.154.344-.359.344-.613 0-.282-.131-.503-.392-.663-.254-.161-.588-.242-1.002-.242-.541 0-1.075.145-1.603.433l-.191-.553a3.818 3.818 0 011.861-.492c.382 0 .725.06 1.031.18.312.114.553.279.725.493.178.214.267.462.267.743 0 .268-.089.506-.267.714a1.518 1.518 0 01-.706.462zm7.045.331h-4.199c.038.55.238.995.601 1.336.363.335.821.503 1.374.503.312 0 .598-.057.859-.171.261-.12.487-.295.678-.523l.382.463a2.157 2.157 0 01-.84.643 2.67 2.67 0 01-1.098.22c-.515 0-.973-.113-1.374-.34a2.481 2.481 0 01-.926-.965 2.846 2.846 0 01-.334-1.387c0-.516.105-.978.315-1.386.216-.409.509-.727.878-.955a2.38 2.38 0 011.26-.341c.464 0 .881.114 1.25.341.369.228.659.546.869.955.21.402.315.864.315 1.386l-.01.221zm-2.424-2.29c-.484 0-.891.164-1.222.492-.324.321-.509.743-.553 1.266h3.56c-.045-.523-.233-.945-.564-1.266-.324-.328-.731-.492-1.221-.492zm6.52-.613c.471 0 .897.114 1.279.341.382.221.681.536.897.945.216.408.324.874.324 1.396 0 .53-.108.998-.324 1.407a2.382 2.382 0 01-.897.954 2.476 2.476 0 01-1.279.332c-.407 0-.776-.087-1.107-.261a2.182 2.182 0 01-.802-.784v2.944h-.677v-7.234h.648v1.045a2.15 2.15 0 01.802-.804 2.297 2.297 0 011.136-.281zm-.048 4.742c.35 0 .668-.084.955-.251.286-.174.509-.419.668-.734.165-.315.248-.673.248-1.075 0-.402-.083-.757-.248-1.065a1.774 1.774 0 00-1.623-.994c-.356 0-.677.087-.964.26-.28.175-.502.42-.668.734a2.29 2.29 0 00-.238 1.065c0 .402.079.76.238 1.075.166.315.388.56.668.734.287.167.608.25.964.25zm5.827-1.768h-1.145v2.35h-.678V32.67h.678v2.32h1.155l1.765-2.32h.735l-1.975 2.562 2.119 2.722h-.802l-1.852-2.35zm5.357-2.974c.655 0 1.158.174 1.508.522.35.342.525.85.525 1.527v3.276h-.649v-.824a1.583 1.583 0 01-.678.643c-.292.154-.642.23-1.049.23-.56 0-1.006-.14-1.337-.421-.33-.282-.496-.653-.496-1.115 0-.45.153-.81.458-1.085.312-.275.805-.412 1.48-.412h1.593v-.322c0-.455-.121-.8-.362-1.035-.242-.24-.595-.361-1.06-.361-.318 0-.623.057-.916.17a2.214 2.214 0 00-.754.453l-.305-.533c.254-.228.56-.402.916-.522.356-.128.732-.191 1.126-.191zm-.238 4.812c.381 0 .709-.09.983-.271.273-.188.477-.456.61-.804v-.864h-1.574c-.859 0-1.289.315-1.289.944 0 .309.112.553.334.734.223.174.535.261.936.261zm8.179-4.772v5.285h-.678v-4.652h-2.405l-.067 1.306c-.051 1.098-.172 1.942-.362 2.532-.191.59-.532.884-1.022.884-.133 0-.296-.027-.486-.08l.047-.613c.115.026.194.04.239.04.261 0 .458-.128.592-.382.133-.255.222-.57.267-.944.044-.376.083-.871.114-1.487l.086-1.889h3.675zM19.539 26.79l-.027-12.948-6.097 10.716h-1.538L5.78 14.01v12.782H2.492V7.256H5.33l7.37 12.949 7.237-12.95h2.837l.027 19.536h-3.261zM25.291 21.21h3.447v16.464h9.703v3.07h-13.15V21.21z"
  })));
}

/* harmony default export */ var Logo = (SvgLogo);
// EXTERNAL MODULE: ./components/Logo/Logo.module.scss
var Logo_module = __webpack_require__(6926);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);
;// CONCATENATED MODULE: ./components/Logo/Logo.tsx





const Logo_Logo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (Logo_module_default()).Logo,
      children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {})
    })
  });
};
;// CONCATENATED MODULE: ./components/Logo/index.ts

;// CONCATENATED MODULE: ./components/index.ts





/***/ }),

/***/ 5646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UQ": function() { return /* reexport */ Accordion; },
  "zx": function() { return /* reexport */ Button; },
  "XZ": function() { return /* reexport */ Checkbox; },
  "JO": function() { return /* reexport */ Icon; },
  "hU": function() { return /* reexport */ IconButton; },
  "tl": function() { return /* reexport */ Pagination; },
  "Vd": function() { return /* reexport */ SliderSimple; }
});

// UNUSED EXPORTS: AccordionGroup

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react-slidedown"
var external_react_slidedown_ = __webpack_require__(9168);
// EXTERNAL MODULE: ./ui-kit/Accordion/Accordion.module.scss
var Accordion_module = __webpack_require__(6481);
var Accordion_module_default = /*#__PURE__*/__webpack_require__.n(Accordion_module);
;// CONCATENATED MODULE: ./ui-kit/Accordion/Accordion.tsx








const Accordion = ({
  title = "",
  active = false,
  children = null
}) => {
  const {
    0: isActive,
    1: setIsActive
  } = (0,external_react_.useState)(active);

  const toggleAccordion = () => {
    setIsActive(prev => !prev);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()((Accordion_module_default()).Accordion, isActive ? (Accordion_module_default()).Accordion__active : ""),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Accordion_module_default()).Header,
      onClick: toggleAccordion,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Accordion_module_default()).HeaderTitle,
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(Icon, {
        className: (Accordion_module_default()).HeaderIcon,
        type: "ArrowDown"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_slidedown_.SlideDown, {
      className: (Accordion_module_default()).ContentSlideDown,
      children: isActive && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Accordion_module_default()).Content,
        children: children
      })
    })]
  });
};
;// CONCATENATED MODULE: ./ui-kit/Accordion/index.ts

;// CONCATENATED MODULE: ./ui-kit/Accordion/AccordionGroup/AccordionGroup.tsx




const AccordionGroup = ({
  label = "",
  children
}) => {
  return /*#__PURE__*/_jsxs("div", {
    className: styles.AccordionGroup,
    children: [label && /*#__PURE__*/_jsx("div", {
      className: styles.Label,
      children: label
    }), children]
  });
};
;// CONCATENATED MODULE: ./ui-kit/Accordion/AccordionGroup/index.ts

// EXTERNAL MODULE: ./ui-kit/Button/Button.module.scss
var Button_module = __webpack_require__(3822);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./ui-kit/Button/Button.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = (_ref) => {
  let {
    className,
    children,
    disabled = false,
    typeButton = "button",
    onClick
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "children", "disabled", "typeButton", "onClick"]);

  const buttonRef = (0,external_react_.useRef)(null);

  const handleClick = e => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    buttonRef.current.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 1000);
    onClick(e);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("button", _objectSpread(_objectSpread({
    className: external_classnames_default()((Button_module_default()).Button, className, {
      [(Button_module_default()).Button__disabled]: disabled
    }),
    disabled: disabled,
    ref: buttonRef,
    type: typeButton,
    onClick: handleClick
  }, rest), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: children
    })
  }));
};
;// CONCATENATED MODULE: ./ui-kit/Button/index.ts


// EXTERNAL MODULE: ./ui-kit/Checkbox/Checkbox.module.scss
var Checkbox_module = __webpack_require__(7548);
var Checkbox_module_default = /*#__PURE__*/__webpack_require__.n(Checkbox_module);
;// CONCATENATED MODULE: ./ui-kit/Checkbox/Checkbox.tsx






const Checkbox = ({
  className,
  id,
  label,
  nameGroup,
  checkedBox,
  children,
  onClick
}) => {
  const handleChange = (event, nameGroup) => {
    event.stopPropagation();
    onClick(event, nameGroup);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()((Checkbox_module_default()).CheckboxWrapper, className),
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      className: (Checkbox_module_default()).Checkbox,
      id: id,
      type: "checkbox",
      name: label,
      value: label,
      checked: checkedBox[label],
      onChange: () => handleChange(event, nameGroup)
    }), label && /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
      className: (Checkbox_module_default()).Label,
      htmlFor: id,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
        className: (Checkbox_module_default()).CheckboxIcon,
        type: "Checkbox"
      }), label]
    }), children && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (Checkbox_module_default()).Description,
      children: children
    })]
  });
};
;// CONCATENATED MODULE: ./ui-kit/Checkbox/index.ts

;// CONCATENATED MODULE: ./ui-kit/assets/icons/ArrowDown.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrowDown(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 16,
    height: 8,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M1.43 0L0 1.213 8 8l8-6.787L14.57 0 8 5.573 1.43 0z"
  })));
}

/* harmony default export */ var ArrowDown = (SvgArrowDown);
;// CONCATENATED MODULE: ./ui-kit/assets/icons/ArrowLeft.svg
var ArrowLeft_path;

function ArrowLeft_extends() { ArrowLeft_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ArrowLeft_extends.apply(this, arguments); }



function SvgArrowLeft(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ArrowLeft_extends({
    width: 8,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ArrowLeft_path || (ArrowLeft_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M8 1.43L6.787 0 0 8l6.787 8L8 14.57 2.427 8 8 1.43z"
  })));
}

/* harmony default export */ var ArrowLeft = (SvgArrowLeft);
;// CONCATENATED MODULE: ./ui-kit/assets/icons/ArrowRight.svg
var ArrowRight_path;

function ArrowRight_extends() { ArrowRight_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ArrowRight_extends.apply(this, arguments); }



function SvgArrowRight(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ArrowRight_extends({
    width: 8,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ArrowRight_path || (ArrowRight_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M0 14.57L1.213 16 8 8 1.213 0 0 1.43 5.573 8 0 14.57z"
  })));
}

/* harmony default export */ var ArrowRight = (SvgArrowRight);
;// CONCATENATED MODULE: ./ui-kit/assets/icons/Basket.svg
var Basket_path, _path2;

function Basket_extends() { Basket_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Basket_extends.apply(this, arguments); }



function SvgBasket(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Basket_extends({
    width: 25,
    height: 25,
    viewBox: "0 0 20 20",
    fill: "#B0976A",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Basket_path || (Basket_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.934 10.833h-6.81V9.167h6.81L15.25 5H4.364V3.333h12.302a.835.835 0 01.728 1.239l-3.002 5.404a1.668 1.668 0 01-1.458.857z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.833 14.167H5.785a1.73 1.73 0 01-1.467-2.647l.997-1.597L2.57 3.336l-1.726.008-.007-1.667 2.842-.013 3.505 8.413-1.453 2.325.054.098h10.048v1.667zM14.167 15a1.667 1.667 0 100 3.334 1.667 1.667 0 000-3.334zm-8.334 0a1.667 1.667 0 100 3.334 1.667 1.667 0 000-3.334z"
  })));
}

/* harmony default export */ var Basket = (SvgBasket);
;// CONCATENATED MODULE: ./ui-kit/assets/icons/Checkbox.svg
var Checkbox_path;

function Checkbox_extends() { Checkbox_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Checkbox_extends.apply(this, arguments); }



function SvgCheckbox(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Checkbox_extends({
    viewBox: "0 0 10 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Checkbox_path || (Checkbox_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M1 3.883L3 6l6-5",
    stroke: "#fff",
    strokeWidth: 2,
    strokeLinecap: "round"
  })));
}

/* harmony default export */ var icons_Checkbox = (SvgCheckbox);
;// CONCATENATED MODULE: ./ui-kit/assets/icons/DisplayGrid.svg
var DisplayGrid_path;

function DisplayGrid_extends() { DisplayGrid_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DisplayGrid_extends.apply(this, arguments); }



function SvgDisplayGrid(props) {
  return /*#__PURE__*/external_react_.createElement("svg", DisplayGrid_extends({
    width: 20,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), DisplayGrid_path || (DisplayGrid_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 13v5h5v-5H2zm-1-2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1H1zM2 2v5h5V2H2zM1 0a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1H1zM13 2v5h5V2h-5zm-1-2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1h-7zM13 13v5h5v-5h-5zm-1-2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-7z"
  })));
}

/* harmony default export */ var DisplayGrid = (SvgDisplayGrid);
;// CONCATENATED MODULE: ./ui-kit/assets/icons/DisplayLine.svg
var DisplayLine_path;

function DisplayLine_extends() { DisplayLine_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DisplayLine_extends.apply(this, arguments); }



function SvgDisplayLine(props) {
  return /*#__PURE__*/external_react_.createElement("svg", DisplayLine_extends({
    width: 20,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), DisplayLine_path || (DisplayLine_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 13v5h5v-5H2zm-1-2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1H1zM2 2v5h5V2H2zM1 0a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1H1zM12 12a1 1 0 100 2h6a1 1 0 100-2h-6zM12 1a1 1 0 100 2h6a1 1 0 100-2h-6zM12 16a1 1 0 100 2h4a1 1 0 100-2h-4zM12 5a1 1 0 100 2h4a1 1 0 100-2h-4z"
  })));
}

/* harmony default export */ var DisplayLine = (SvgDisplayLine);
;// CONCATENATED MODULE: ./ui-kit/assets/icons/Filter.svg
var Filter_path;

function Filter_extends() { Filter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Filter_extends.apply(this, arguments); }



function SvgFilter(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Filter_extends({
    width: 20,
    height: 20,
    fill: "none",
    stroke: "#B0976A",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Filter_path || (Filter_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.5 15H8.125m1.25-11.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5v0zm4.375 5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-6.875 5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM17.5 10H15h2.5zm-5 0h-10 10zm-6.875 5H2.5h3.125zM17.5 5h-6.875H17.5zM8.125 5H2.5h5.625z"
  })));
}

/* harmony default export */ var Filter = (SvgFilter);
;// CONCATENATED MODULE: ./ui-kit/assets/icons/User.svg
var User_path;

function User_extends() { User_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return User_extends.apply(this, arguments); }



function SvgUser(props) {
  return /*#__PURE__*/external_react_.createElement("svg", User_extends({
    width: 25,
    height: 25,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), User_path || (User_path = /*#__PURE__*/external_react_.createElement("path", {
    clipRule: "evenodd",
    d: "M5.254 7a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zm4.75-3.25a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM1.436 16.502C3.188 14.506 6.417 13.25 10 13.25c3.583 0 6.814 1.257 8.565 3.255a.75.75 0 11-1.128.989c-1.385-1.581-4.145-2.744-7.437-2.744-3.29 0-6.05 1.162-7.435 2.742l-1.128-.99z"
  })));
}

/* harmony default export */ var User = (SvgUser);
// EXTERNAL MODULE: ./ui-kit/Icon/Icon.module.scss
var Icon_module = __webpack_require__(6186);
var Icon_module_default = /*#__PURE__*/__webpack_require__.n(Icon_module);
;// CONCATENATED MODULE: ./ui-kit/Icon/Icon.tsx


function Icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Icon_ownKeys(Object(source), true).forEach(function (key) { Icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Icon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Icon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Icon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const iconTypes = new Map([["ArrowDown", /*#__PURE__*/jsx_runtime_.jsx(ArrowDown, {}, Date.now())], ["ArrowLeft", /*#__PURE__*/jsx_runtime_.jsx(ArrowLeft, {}, Date.now())], ["ArrowRight", /*#__PURE__*/jsx_runtime_.jsx(ArrowRight, {}, Date.now())], ["Basket", /*#__PURE__*/jsx_runtime_.jsx(Basket, {}, Date.now())], ["Checkbox", /*#__PURE__*/jsx_runtime_.jsx(icons_Checkbox, {}, Date.now())], ["DisplayGrid", /*#__PURE__*/jsx_runtime_.jsx(DisplayGrid, {}, Date.now())], ["DisplayLine", /*#__PURE__*/jsx_runtime_.jsx(DisplayLine, {}, Date.now())], ["Filter", /*#__PURE__*/jsx_runtime_.jsx(Filter, {}, Date.now())], ["User", /*#__PURE__*/jsx_runtime_.jsx(User, {}, Date.now())]]);

const getIcon = type => iconTypes.get(type);

const Icon = (_ref) => {
  let {
    className,
    type
  } = _ref,
      rest = Icon_objectWithoutProperties(_ref, ["className", "type"]);

  return /*#__PURE__*/jsx_runtime_.jsx("div", Icon_objectSpread(Icon_objectSpread({
    className: external_classnames_default()((Icon_module_default()).Icon, className)
  }, rest), {}, {
    children: getIcon(type)
  }));
};
;// CONCATENATED MODULE: ./ui-kit/Icon/index.ts


// EXTERNAL MODULE: ./ui-kit/Button/IconButton/IconButton.module.scss
var IconButton_module = __webpack_require__(380);
var IconButton_module_default = /*#__PURE__*/__webpack_require__.n(IconButton_module);
;// CONCATENATED MODULE: ./ui-kit/Button/IconButton/IconButton.tsx


function IconButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function IconButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { IconButton_ownKeys(Object(source), true).forEach(function (key) { IconButton_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { IconButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function IconButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function IconButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = IconButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function IconButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const IconButton = (_ref) => {
  let {
    className,
    type,
    disabled = false,
    onClick
  } = _ref,
      rest = IconButton_objectWithoutProperties(_ref, ["className", "type", "disabled", "onClick"]);

  return /*#__PURE__*/jsx_runtime_.jsx(Button, IconButton_objectSpread(IconButton_objectSpread({
    className: external_classnames_default()((IconButton_module_default()).IconButton, className),
    disabled: disabled,
    onClick: onClick
  }, rest), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
      type: type
    })
  }));
};
;// CONCATENATED MODULE: ./ui-kit/Button/IconButton/index.ts

// EXTERNAL MODULE: ./ui-kit/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__(5954);
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);
;// CONCATENATED MODULE: ./ui-kit/Pagination/Pagination.tsx






const Pagination = ({
  pages,
  onChange,
  isFirstPage
}) => {
  const FIRST_PAGE = 1; //Set number of pages

  const numberOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  } // Current active button number


  const {
    0: currentButton,
    1: setCurrentButton
  } = (0,external_react_.useState)(1); // Array of buttons what we see on the page

  const {
    0: arrOfCurrButtons,
    1: setArrOfCurrButtons
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];
    const dotsInitial = -100;
    const dotsLeft = -101;
    const dotsRight = -99;

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, 5, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length];
    } else if (currentButton > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 5);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 3);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 3);
    }

    setArrOfCurrButtons(tempNumberOfPages);

    if (currentButton === -100 || currentButton === -99 || currentButton === -101) {
      return;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [currentButton, setCurrentButton, pages]);
  (0,external_react_.useEffect)(() => {
    setCurrentButton(1);
  }, [isFirstPage]);
  (0,external_react_.useEffect)(() => {
    onChange(currentButton); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentButton]);

  const handlePageChange = item => {
    if (item !== currentButton) {
      setCurrentButton(item);
    }
  };

  const handlePageGoBack = () => {
    setCurrentButton(prev => prev <= 1 ? prev : prev - 1);
  };

  const handlePageGoForward = () => {
    setCurrentButton(prev => prev >= pages ? prev : prev + 1);
  };

  const handleItemNumberOrDots = item => {
    if (item === -100) {
      return "...";
    } else if (item === -101) {
      return " ...";
    } else if (item === -99) {
      return "... ";
    } else {
      return item;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Pagination_module_default()).Pagination,
    children: [/*#__PURE__*/jsx_runtime_.jsx(IconButton, {
      className: external_classnames_default()((Pagination_module_default()).PaginationArrowButton, {
        [(Pagination_module_default()).PaginationArrowButton__disabled]: currentButton === FIRST_PAGE
      }),
      type: "ArrowLeft",
      disabled: currentButton === FIRST_PAGE,
      onClick: handlePageGoBack
    }), arrOfCurrButtons.map((item, index) => {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Pagination_module_default()).PaginationCurrentButton, {
          [(Pagination_module_default()).PaginationCurrentButton__active]: currentButton === item
        }),
        onClick: () => handlePageChange(item),
        children: handleItemNumberOrDots(item)
      }, index);
    }), /*#__PURE__*/jsx_runtime_.jsx(IconButton, {
      className: external_classnames_default()((Pagination_module_default()).PaginationArrowButton, {
        [(Pagination_module_default()).PaginationArrowButton__disabled]: currentButton === pages
      }),
      type: "ArrowRight",
      disabled: currentButton === pages,
      onClick: handlePageGoForward
    })]
  });
};
;// CONCATENATED MODULE: ./ui-kit/Pagination/index.tsx

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./ui-kit/Slider/SliderSimple/SliderSimple.module.scss
var SliderSimple_module = __webpack_require__(2899);
var SliderSimple_module_default = /*#__PURE__*/__webpack_require__.n(SliderSimple_module);
// EXTERNAL MODULE: ./ui-kit/assets/images/slide-home-5.jpg
var slide_home_5 = __webpack_require__(4032);
// EXTERNAL MODULE: ./ui-kit/assets/images/slide-home-6.jpg
var slide_home_6 = __webpack_require__(404);
// EXTERNAL MODULE: ./ui-kit/assets/images/slide-home-7.jpg
var slide_home_7 = __webpack_require__(4041);
;// CONCATENATED MODULE: ./ui-kit/assets/images/slide-home-8.jpg
/* harmony default export */ var slide_home_8 = ({"src":"/_next/static/image/ui-kit/assets/images/slide-home-8.996a0d721cf7374b47624fc788253be7.jpg","height":1119,"width":2048,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAE//xAAaEAACAgMAAAAAAAAAAAAAAAACAwAEBhEU/9oACAEBAAE/AMquG99cWqSY9DQ0QT//xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIx/9oACAECAQE/ALqOz//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AAL/2Q=="});
;// CONCATENATED MODULE: ./ui-kit/Slider/SliderSimple/SliderSimple.tsx



function SliderSimple_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SliderSimple_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SliderSimple_ownKeys(Object(source), true).forEach(function (key) { SliderSimple_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SliderSimple_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SliderSimple_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class SliderSimple extends external_react_.Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "SliderSimple"
    };
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (SliderSimple_module_default()).Slider,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), SliderSimple_objectSpread(SliderSimple_objectSpread({}, settings), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (SliderSimple_module_default()).Item,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: slide_home_5/* default */.Z,
            alt: "",
            width: "1200",
            height: "780"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (SliderSimple_module_default()).Item,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: slide_home_6/* default */.Z,
            alt: "",
            width: "1200",
            height: "780"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (SliderSimple_module_default()).Item,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: slide_home_7/* default */.Z,
            alt: "",
            width: "1200",
            height: "780"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (SliderSimple_module_default()).Item,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: slide_home_8,
            alt: "",
            width: "1200",
            height: "780"
          })
        })]
      }))
    });
  }

}


;// CONCATENATED MODULE: ./ui-kit/Slider/SliderSimple/index.ts

;// CONCATENATED MODULE: ./ui-kit/index.ts










/***/ }),

/***/ 8192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ numberWithSpaces; }
/* harmony export */ });
const numberWithSpaces = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

/***/ }),

/***/ 4032:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/ui-kit/assets/images/slide-home-5.e9a13547df5c3f5806e156a2dfb0a789.jpg","height":624,"width":1140,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAAv/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAE//xAAcEAAABgMAAAAAAAAAAAAAAAAAAgMFEhMEESH/2gAIAQEAAT8AbXilJU5G7As1GdPR/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/AHT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});

/***/ }),

/***/ 404:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/ui-kit/assets/images/slide-home-6.a74cf43bfdbea5bbce6d6470e86474af.jpg","height":624,"width":1140,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAABf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAF//xAAcEAAABgMAAAAAAAAAAAAAAAAAAgQFERIBFDH/2gAIAQEAAT8AZ3CiN0OVEkvp5LNOwP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});

/***/ }),

/***/ 4041:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/ui-kit/assets/images/slide-home-7.c4cb755f83081a02de3b3939428b7340.jpg","height":1044,"width":1900,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAF//xAAeEAABAwQDAAAAAAAAAAAAAAADAgQTABESMQEFIf/aAAgBAQABPwDoAhM5dqiSOJaMYrj1xf3Hdf/EABURAQEAAAAAAAAAAAAAAAAAAABR/9oACAECAQE/AI//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});

/***/ }),

/***/ 9555:
/***/ (function(module) {

// Exports
module.exports = {
	"Catalog": "Home_Catalog__1_XNf",
	"CatalogImg": "Home_CatalogImg__2AhBt"
};


/***/ }),

/***/ 2317:
/***/ (function(module) {

// Exports
module.exports = {
	"Footer": "Footer_Footer__Xwqr8"
};


/***/ }),

/***/ 7244:
/***/ (function(module) {

// Exports
module.exports = {
	"HeaderBottom": "HeaderBottom_HeaderBottom__3Z1Gv",
	"Link": "HeaderBottom_Link__2hoO2",
	"Container": "HeaderBottom_Container__oq3rz"
};


/***/ }),

/***/ 614:
/***/ (function(module) {

// Exports
module.exports = {
	"Container": "HeaderCenter_Container__17JN6",
	"Inner": "HeaderCenter_Inner__1-OCP"
};


/***/ }),

/***/ 506:
/***/ (function(module) {

// Exports
module.exports = {
	"HeaderIconsList": "HeaderIconsList_HeaderIconsList__2yjDg",
	"HeaderIconListItem": "HeaderIconsList_HeaderIconListItem__1uo1y",
	"Icon": "HeaderIconsList_Icon__16oIQ"
};


/***/ }),

/***/ 180:
/***/ (function(module) {

// Exports
module.exports = {
	"Info": "HeaderTop_Info__239zj",
	"InfoInner": "HeaderTop_InfoInner__80ZM6",
	"InfoLeft": "HeaderTop_InfoLeft__7Zx2U",
	"InfoRight": "HeaderTop_InfoRight__2pwSu",
	"Text": "HeaderTop_Text__twP4w",
	"Container": "HeaderTop_Container__t6GHU"
};


/***/ }),

/***/ 8606:
/***/ (function(module) {

// Exports
module.exports = {
	"Layout": "Layout_Layout__2ApnD",
	"Wrapper": "Layout_Wrapper__sgl4F",
	"Content": "Layout_Content__2BdYV",
	"Container": "Layout_Container__hDQZT"
};


/***/ }),

/***/ 2135:
/***/ (function(module) {

// Exports
module.exports = {
	"LayoutMirrors": "LayoutMirrors_LayoutMirrors__3S7Re",
	"Row": "LayoutMirrors_Row__2IUeS",
	"Title": "LayoutMirrors_Title__3CiHV",
	"Inner": "LayoutMirrors_Inner__25uqd",
	"Wrapper": "LayoutMirrors_Wrapper__230lB"
};


/***/ }),

/***/ 468:
/***/ (function(module) {

// Exports
module.exports = {
	"LayoutMirrorsAside": "LayoutMirrorsAside_LayoutMirrorsAside__43rh0",
	"FilterButton": "LayoutMirrorsAside_FilterButton__27j8W",
	"AsideFilter": "LayoutMirrorsAside_AsideFilter__1APJn",
	"LayoutMirrorsAsideButton": "LayoutMirrorsAside_LayoutMirrorsAsideButton__2Cw3-",
	"CheckboxItem": "LayoutMirrorsAside_CheckboxItem__ldSm5"
};


/***/ }),

/***/ 7604:
/***/ (function(module) {

// Exports
module.exports = {
	"LayoutSorting": "LayoutSorting_LayoutSorting__PdpDd",
	"LayoutSortingSelectPrice": "LayoutSorting_LayoutSortingSelectPrice__1B-eg",
	"Inner": "LayoutSorting_Inner__38BR2",
	"SelectGroup": "LayoutSorting_SelectGroup__1PGk0",
	"SelectGroupItem": "LayoutSorting_SelectGroupItem__13tnn",
	"SelectGroupItemLabel": "LayoutSorting_SelectGroupItemLabel__dQUoV",
	"DisplayButtons": "LayoutSorting_DisplayButtons__3ghKl",
	"DisplayButton": "LayoutSorting_DisplayButton__-GMVG",
	"DisplayButton__line": "LayoutSorting_DisplayButton__line__3p8gs",
	"ListingViewSwitcher": "LayoutSorting_ListingViewSwitcher__1rfIF",
	"ListingViewSwitcherInner": "LayoutSorting_ListingViewSwitcherInner__18cet",
	"ListingViewSwitcherPointer": "LayoutSorting_ListingViewSwitcherPointer__UjEVJ",
	"ListingViewSwitcherPointer__line": "LayoutSorting_ListingViewSwitcherPointer__line__1skmS"
};


/***/ }),

/***/ 3149:
/***/ (function(module) {

// Exports
module.exports = {
	"MirrorsList": "MirrorsList_MirrorsList__3-lH-",
	"MirrorsList__line": "MirrorsList_MirrorsList__line__2h4tm"
};


/***/ }),

/***/ 2035:
/***/ (function(module) {

// Exports
module.exports = {
	"MirrorsListItem": "MirrorsListItem_MirrorsListItem__3zIiv",
	"Wrapper": "MirrorsListItem_Wrapper__15OPR",
	"Content": "MirrorsListItem_Content__6oaOr",
	"ContentImg": "MirrorsListItem_ContentImg__2PX_h",
	"ContentDescriptionLine": "MirrorsListItem_ContentDescriptionLine__237KV",
	"ContentTitle": "MirrorsListItem_ContentTitle__21o3n",
	"Footer": "MirrorsListItem_Footer__2iGw_",
	"FooterTop": "MirrorsListItem_FooterTop__1Btyl",
	"FooterTopBasket": "MirrorsListItem_FooterTopBasket__34upn",
	"FooterBottom": "MirrorsListItem_FooterBottom__2DdRK",
	"FooterBottomNum": "MirrorsListItem_FooterBottomNum__1uHt_",
	"FooterBottomStatus": "MirrorsListItem_FooterBottomStatus__CvPCK",
	"FooterAddToBasketLine": "MirrorsListItem_FooterAddToBasketLine__3UpgQ",
	"MirrorsListItem__line": "MirrorsListItem_MirrorsListItem__line__3OTO1",
	"ContentDescription": "MirrorsListItem_ContentDescription__2nRVA",
	"ContentTitleLine": "MirrorsListItem_ContentTitleLine__x4MVn",
	"RowLine": "MirrorsListItem_RowLine__SBtN_",
	"LabelLine": "MirrorsListItem_LabelLine__1G2-9",
	"ValueLine": "MirrorsListItem_ValueLine__3fOtC",
	"FooterBottomLabel": "MirrorsListItem_FooterBottomLabel__33iGT"
};


/***/ }),

/***/ 6926:
/***/ (function(module) {

// Exports
module.exports = {
	"Logo": "Logo_Logo__h5BMD"
};


/***/ }),

/***/ 6481:
/***/ (function(module) {

// Exports
module.exports = {
	"Accordion": "Accordion_Accordion__3KLuf",
	"Header": "Accordion_Header___CcIo",
	"HeaderIcon": "Accordion_HeaderIcon__JNVjq",
	"Content": "Accordion_Content__1Gmrq",
	"Accordion__active": "Accordion_Accordion__active__2llT1"
};


/***/ }),

/***/ 3822:
/***/ (function(module) {

// Exports
module.exports = {
	"Button": "Button_Button__1pEUt",
	"Button__disabled": "Button_Button__disabled__12eAi",
	"animate": "Button_animate__An_4s"
};


/***/ }),

/***/ 380:
/***/ (function(module) {

// Exports
module.exports = {
	"IconButton": "IconButton_IconButton__2W3nj"
};


/***/ }),

/***/ 7548:
/***/ (function(module) {

// Exports
module.exports = {
	"CheckboxWrapper": "Checkbox_CheckboxWrapper__3nzvi",
	"Checkbox": "Checkbox_Checkbox__1ocsO",
	"Label": "Checkbox_Label__2Ox9V",
	"Description": "Checkbox_Description__3HSMN",
	"CheckboxIcon": "Checkbox_CheckboxIcon__32Urj"
};


/***/ }),

/***/ 6186:
/***/ (function(module) {

// Exports
module.exports = {
	"Icon": "Icon_Icon__3o8zi"
};


/***/ }),

/***/ 5954:
/***/ (function(module) {

// Exports
module.exports = {
	"Pagination": "Pagination_Pagination__Kd_q7",
	"PaginationCurrentButton": "Pagination_PaginationCurrentButton__3Zsue",
	"animate": "Pagination_animate__3w7Wd",
	"PaginationCurrentButton__active": "Pagination_PaginationCurrentButton__active__2vljg",
	"PaginationArrowButton": "Pagination_PaginationArrowButton__2diwK",
	"Icon": "Pagination_Icon__2nP3x",
	"PaginationArrowButton__disabled": "Pagination_PaginationArrowButton__disabled__1ke4f"
};


/***/ }),

/***/ 2899:
/***/ (function(module) {

// Exports
module.exports = {

};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;