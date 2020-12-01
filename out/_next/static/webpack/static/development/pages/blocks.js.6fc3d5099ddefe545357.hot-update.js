webpackHotUpdate("static/development/pages/blocks.js",{

/***/ "./components/blocks/Box.js":
false,

/***/ "./components/blocks/Flex.js":
false,

/***/ "./components/blocks/index.js":
/*!************************************!*\
  !*** ./components/blocks/index.js ***!
  \************************************/
/*! exports provided: Box, Flex, Row, Column, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var system_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! system-components */ "./node_modules/system-components/dist/index.js");
/* harmony import */ var system_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(system_components__WEBPACK_IMPORTED_MODULE_1__);


var Box = system_components__WEBPACK_IMPORTED_MODULE_1___default()('width', 'height', 'minHeight', 'maxHeight', 'display', 'space', 'fontSize', 'color', 'zIndex', 'boxShadow', // position
'position', 'top', 'bottom', 'left', 'right', // borders
'borders', 'borderColor', 'borderRadius', // flexbox
'flexDirection', 'alignItems', 'flexWrap', 'flexDirection', 'alignItems', 'justifyContent', 'flex', 'order', 'alignSelf', 'justifySelf');
Box.Border = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Box).withConfig({
  displayName: "blocks__Border",
  componentId: "sc-10dy16-0"
})(["border:2px solid;border-color:black;"]);
Box.displayName = 'Box';
var Flex = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Box).withConfig({
  displayName: "blocks__Flex",
  componentId: "sc-10dy16-1"
})(["display:flex;"]);
Flex.displayName = 'Flex';
var Row = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Flex).withConfig({
  displayName: "blocks__Row",
  componentId: "sc-10dy16-2"
})(["flex-direction:", ";"], function (props) {
  return props.reverse ? 'row-reverse' : 'row';
});
var Column = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Flex).withConfig({
  displayName: "blocks__Column",
  componentId: "sc-10dy16-3"
})(["flex-direction:", ";"], function (props) {
  return props.reverse ? 'column-reverse' : 'column';
});
/* harmony default export */ __webpack_exports__["default"] = (Flex);

/***/ })

})
//# sourceMappingURL=blocks.js.6fc3d5099ddefe545357.hot-update.js.map