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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_writings_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/writings.json */ "./components/writings.json");
var _components_writings_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../components/writings.json */ "./components/writings.json", 1);

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
      lineNumber: 47
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mb: 3,
    lineHeight: 1.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Hey \uD83D\uDC4B. I'm currently working as a software engineer at", ' ', __jsx(Link, {
    color: "mint",
    href: "https://stripe.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Stripe"), ", but", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), " you may know me from my work on", ' ', __jsx(Link, {
    color: "mint",
    href: "https://carbon.now.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Carbon"), ' ', "and", ' ', __jsx(Link, {
    color: "mint",
    href: "https://reporanger.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Ranger"), ".", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "Here are a few things I'm into:"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(Link, {
    color: "inherit",
    href: "https://goo.gl/maps/VsJW2cLXMcGCWrgs5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Drinking coffee with others")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Rock climbing, skiing"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Financing, maintaining, sustaining open-source software"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Music by Dessa, Kendrick Lamar, Jackson Browne, Vince Staples & The Roots"), !more ? __jsx(LI, {
    onClick: function onClick() {
      return setMore(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "More\u2026") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(Link, {
    color: "inherit",
    href: "https://fieldnotesbrand.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Field Notes")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Digital, interactive, open art"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(Link, {
    color: "inherit",
    href: "http://cheeseboardcollective.coop/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Pizza")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Micro-grants"), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "JavaScript &", __jsx(Link, {
    ml: 2,
    color: "inherit",
    href: "https://www.youtube.com/watch?v=d0xMqeVhlhQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "GraphQL")))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: 0,
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "(If you want to chat about any of these things,", ' ', __jsx(Link, {
    color: "mint",
    href: "mailto:mrfix84@gmail.com?subject=Let's%20grab%20coffee!&body=Hey%20Mike%2C%0AI%20saw%20the%20offer%20to%20grab%20coffee%20on%20your%20website%2C%20and%20I%20thought%20I'd%20take%20you%20up%20on%20it!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "let's grab a coffee"), "!)"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 5,
    mb: 2,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Projects"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://carbon.now.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Carbon")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://reporanger.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Ranger")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://dawnlabs.io/alchemy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Alchemy")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://transcenduw.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Transcend")), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://patents.google.com/patent/US9321503B2/en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Band Wagon"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 5,
    mb: 2,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Around the web"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(Link, {
    href: "https://changelog.com/podcast/410",
    target: "_blank",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "The Changelog \u2013 Episode #410", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Bringing beauty to the world of code sharing"))), __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(Link, {
    href: "https://www.designsystems.com/white-labeling-putting-the-design-system-in-users-hands/",
    target: "_blank",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "White-labeling: Putting the design system in users' hands", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), "Designsystems.com")), _components_writings_json__WEBPACK_IMPORTED_MODULE_5__.items.map(function (item) {
    return __jsx(LI, {
      key: item.guid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx(Link, {
      href: item.link,
      target: "_blank",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, item.title));
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 5,
    mb: 2,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Art"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/blocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(Link, {
    href: "/blocks",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Blocks #1")))));
}

function Icon(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    color: "mint",
    href: props.href,
    mr: 2,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("ion-icon", {
    name: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }));
}

function Index() {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    is: "main",
    mt: [0, 0, 3],
    pl: [0, 0, 5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    mt: 4,
    mb: 3,
    fontSize: [61, 61, 96],
    pl: [3, 3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    alignItems: "center",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
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
      lineNumber: 211
    },
    __self: this
  }, "Mike Fix"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: [3, 3, 4],
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(Icon, {
    name: "logo-twitter",
    href: "https://twitter.com/fixitup2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), __jsx(Icon, {
    name: "logo-github",
    href: "https://github.com/mfix22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  })))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ccabd6eee3c2577856b2.hot-update.js.map