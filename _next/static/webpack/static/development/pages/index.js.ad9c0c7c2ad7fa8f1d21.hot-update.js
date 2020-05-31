webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_writings_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/writings.json */ "./components/writings.json");
var _components_writings_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../components/writings.json */ "./components/writings.json", 1);

var _jsxFileName = "/Users/mike/Projects/Personal/Mike/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var theme = {
  colors: {
    mint: '#00f1ff'
  },
  fonts: {
    sans: '"Josefin Sans", "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    mono: ['Consolas', 'Menlo', 'Courier', 'monospace'].join(', ')
  }
};
var Link = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"]).withConfig({
  displayName: "pages__Link",
  componentId: "yy02qt-0"
})(["&:hover{background:rgba(255,255,255,0.1);text-decoration:none;}"]);
var LI = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "pages__LI",
  componentId: "yy02qt-1"
})(["margin-bottom:", "px;cursor:", ";display:flex;align-items:center;&:before{content:'\u261B ';font-size:", "px;margin-right:", "px;}"], function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.onClick ? 'pointer' : null;
}, function (props) {
  return props.theme.fontSizes[0];
}, function (props) {
  return props.theme.space[2];
});
var Terminal = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "pages__Terminal",
  componentId: "yy02qt-2"
})(["display:block;font-family:", ";overflow:auto;"], function (props) {
  return props.theme.fonts.mono;
});

function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      more = _React$useState2[0],
      setMore = _React$useState2[1];

  return __jsx(Terminal, {
    px: ['24px', '24px', 4],
    py: 3,
    fontSize: 2,
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mb: 4,
    lineHeight: 1.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Hey \uD83D\uDC4B. I'm currently working as a software engineer at", ' ', __jsx(Link, {
    color: "mint",
    href: "https://stripe.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Stripe"), ", but", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), " you may know me from my work on", ' ', __jsx(Link, {
    color: "mint",
    href: "https://carbon.now.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Carbon"), ' ', "and", ' ', __jsx(Link, {
    color: "mint",
    href: "https://reporanger.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Ranger"), ".", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "Here are a few things I'm into:"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(Link, {
    color: "inherit",
    href: "https://goo.gl/maps/VsJW2cLXMcGCWrgs5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Drinking coffee with others")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Skiing, rock climbing"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Financing, maintaining, sustaining open-source software"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Music by Kendrick Lamar, Dessa, Jackson Browne, Vince Staples, & The Roots"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "When the beat drops in the middle of a rap verse"), !more ? __jsx(LI, {
    onClick: function onClick() {
      return setMore(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "More\u2026") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(Link, {
    color: "inherit",
    href: "https://fieldnotesbrand.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Field Notes")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Digital, interactive, open art"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(Link, {
    color: "inherit",
    href: "http://cheeseboardcollective.coop/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Pizza")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Micro-grants"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "JavaScript &", __jsx(Link, {
    ml: 2,
    color: "inherit",
    href: "https://www.youtube.com/watch?v=d0xMqeVhlhQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "GraphQL")))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: 0,
    mt: 3,
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "(If you want to chat about any of these things,", ' ', __jsx(Link, {
    color: "mint",
    href: "mailto:mrfix84@gmail.com?subject=Let's%20grab%20coffee!&body=Hey%20Mike%2C%0AI%20saw%20the%20offer%20to%20grab%20coffee%20on%20your%20website%2C%20and%20I%20thought%20I'd%20take%20you%20up%20on%20it!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "let's grab a coffee"), "!)"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 5,
    mb: 2,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Projects"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://carbon.now.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Carbon")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://reporanger.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Ranger")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://dawnlabs.io/alchemy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Alchemy")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://transcenduw.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Transcend")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Band Wagon"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 5,
    mb: 2,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Articles"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, _components_writings_json__WEBPACK_IMPORTED_MODULE_4__.items.map(function (item) {
    return __jsx(LI, {
      key: item.guid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx(Link, {
      href: item.link,
      target: "_blank",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, item.title));
  })));
}

function Icon(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    color: "mint",
    href: props.href,
    mr: 2,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("ion-icon", {
    name: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }));
}

function Index() {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    is: "main",
    mt: [0, 0, 3],
    pl: [0, 0, 5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    mt: 4,
    mb: 3,
    fontSize: [61, 61, 96],
    pl: [3, 3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    alignItems: "center",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    color: "white",
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Mike Fix"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: [3, 3, 4],
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(Icon, {
    name: "logo-twitter",
    href: "https://twitter.com/fixitup2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), __jsx(Icon, {
    name: "logo-github",
    href: "https://github.com/mfix22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ad9c0c7c2ad7fa8f1d21.hot-update.js.map