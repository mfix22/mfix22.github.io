webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/index.js":
/*!**********************************!*\
  !*** ./components/Home/index.js ***!
  \**********************************/
/*! exports provided: Grey, Black, LI, Terminal, Icon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grey", function() { return Grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Black", function() { return Black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LI", function() { return LI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "/Users/mike/Projects/Personal/Mike/components/Home/index.js";



var Grey = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"]).withConfig({
  displayName: "Home__Grey",
  componentId: "sc-5cb01z-0"
})(["border-radius:4px;height:350px;background:#aaa;justify-content:center;align-items:center;padding:16px;z-index:2;"]);
var Black = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"]).withConfig({
  displayName: "Home__Black",
  componentId: "sc-5cb01z-1"
})(["background:black;border-radius:1px;width:100%;height:100%;"]);
var LI = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].li.withConfig({
  displayName: "Home__LI",
  componentId: "sc-5cb01z-2"
})(["margin-bottom:", "px;cursor:", ";&:before{color:", ";content:'\u279C ';}"], function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.onClick ? 'pointer' : null;
}, function (props) {
  return props.theme.colors.mint;
});
var Terminal = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"]).withConfig({
  displayName: "Home__Terminal",
  componentId: "sc-5cb01z-3"
})(["display:block;font-family:", ";overflow:auto;"], function (props) {
  return props.theme.fonts.mono;
});
var Icon = function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    color: "mint",
    href: props.href,
    mr: 2,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ion-icon", {
    name: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      more: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Terminal, {
        px: 4,
        py: 3,
        fontSize: 2,
        mb: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Text"], {
        mb: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Hey \uD83D\uDC4B, i'm Mike. You may know me as the creator of", ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        color: "mint",
        href: "https://carbon.now.sh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Carbon"), ' ', "and", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        color: "mint",
        href: "https://reporanger.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Ranger"), ' ', "Here are a few things i really like:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        color: "inherit",
        href: "https://goo.gl/maps/VsJW2cLXMcGCWrgs5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Drinking coffee with others")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Skiing, Rock climbing"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Open Source Software (OSS)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "JavaScript + GraphQL"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Music from Kendrick Lamar, Dessa, Jackson Browne"), !this.state.more && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        onClick: function onClick() {
          return _this2.setState({
            more: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "More..."), this.state.more && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Kurt Vonnegut books"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        color: "inherit",
        href: "https://fieldnotesbrand.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Field Notes")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Financing / Sustaining OSS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Digital / Interactive / Open Art"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Micro-grants"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        color: "inherit",
        href: "http://cheeseboardcollective.coop/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Pizza")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LI, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Event Programming / Organizing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Text"], {
        fontSize: 0,
        mt: 3,
        mb: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "(If you want to chat about any of these things,", ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        color: "mint",
        href: "mailto:mrfix84@gmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "let's grab a coffee"), "!)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_8__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
        name: "logo-twitter",
        href: "https://twitter.com/fixitup2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
        name: "logo-github",
        href: "https://github.com/mfix22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
        name: "mail",
        href: "mailto:mrfix84@gmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.becdf23144e94ad9f3d8.hot-update.js.map