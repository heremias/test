"use strict";
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 4215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/layout/layout.tsx
const Layout=({children})=>{return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:"bar topbar"}),/*#__PURE__*/react.createElement("main",{className:"pageStyles"},/*#__PURE__*/react.createElement("title",null,"Home Page"),children));};
;// CONCATENATED MODULE: ./src/components/layout/index.ts


/***/ }),

/***/ 1512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4215);
const NodeDefault=({data})=>{const node=data.nodeArticle;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,node.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{dangerouslySetInnerHTML:{__html:node.body.value}}));};const query="905983025";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeDefault);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-node-default-tsx.js.map