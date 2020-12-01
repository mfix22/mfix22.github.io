webpackHotUpdate("static/development/pages/blocks.js",{

/***/ "./pages/blocks.js":
/*!*************************!*\
  !*** ./pages/blocks.js ***!
  \*************************/
/*! exports provided: RandomGrid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomGrid", function() { return RandomGrid; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_blocks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/blocks */ "./components/blocks/index.js");









var _jsxFileName = "/Users/mike/Projects/Personal/Mike/pages/blocks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var range = function range(l, fn) {
  return Array.from({
    length: l
  }, fn);
};

var ran = function ran(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var color = function color() {
  return '#' + ran(16777215).toString(16);
};

var Cell = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.attrs({
  style: function style(_ref) {
    var width = _ref.width,
        height = _ref.height,
        bg = _ref.bg;
    return {
      width: width,
      height: height,
      background: bg
    };
  }
}).withConfig({
  displayName: "blocks__Cell",
  componentId: "sc-1lcp3ph-0"
})([""]);
var Slider = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].input.attrs({
  type: 'range'
}).withConfig({
  displayName: "blocks__Slider",
  componentId: "sc-1lcp3ph-1"
})(["margin:0;padding:0;appearance:none;background:#eee;outline:none;transform:rotate(-90deg);&::-webkit-slider-thumb{appearance:none;outline:none;width:", "px;height:", "px;background:rgb(77,196,252);cursor:pointer;}"], function (props) {
  return props.size || 2 * 8;
}, function (props) {
  return props.size || 2 * 16;
});
var RandomGrid = function RandomGrid(_ref2) {
  var _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 500 : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? 500 : _ref2$height,
      size = _ref2.size,
      count = _ref2.count,
      colorCount = _ref2.colorCount;
  var grid = range(size, function () {
    return range(size, function () {
      return 1;
    });
  });
  var blocks = range(count, function () {
    return [ran(size - 1), ran(size - 1)];
  });
  var colors = range(colorCount, color);
  blocks.forEach(function (_ref3, i) {
    var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];

    grid[x][y] = colors[i % colors.length];
  });
  return __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, grid.map(function (row, i) {
    return __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, row.map(function (cell, j) {
      return __jsx(Cell, {
        width: width / size,
        height: height / size,
        bg: cell,
        key: j,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      });
    }));
  }));
};

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.state = {
      size: 10,
      count: 80,
      colorCount: 50
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var size = this.state.size;
      return __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        width: "100%",
        height: "100vh",
        bg: "white",
        py: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_11__["Column"], {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(RandomGrid, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }))), __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_11__["Column"], {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(Slider, {
        name: "size",
        min: "1",
        max: "30",
        step: "1",
        value: this.state.size,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx(Slider, {
        name: "count",
        min: "1",
        max: 4 * Math.pow(size, 2),
        step: "1",
        value: this.state.count,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx(Slider, {
        name: "colorCount",
        min: "1",
        max: "100",
        step: "1",
        value: this.state.colorCount,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=blocks.js.2f672547fc787d7ae920.hot-update.js.map