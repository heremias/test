"use strict";
exports.id = 691;
exports.ids = [691];
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

/***/ 5962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/layout/index.ts + 1 modules
var layout = __webpack_require__(4215);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/templates/Card.tsx
const Card=props=>{return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("div",{className:"card-text"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:'node/'+props.id},/*#__PURE__*/react.createElement("h2",null,props.title)),/*#__PURE__*/react.createElement("div",{dangerouslySetInnerHTML:{__html:props.body}})));};/* harmony default export */ const templates_Card = (Card);
;// CONCATENATED MODULE: ./src/pages/index.tsx
const IndexPage=({data})=>{return/*#__PURE__*/react.createElement(layout/* Layout */.A,null,data.allNodeArticle.nodes.map(node=>/*#__PURE__*/react.createElement(templates_Card,{id:node.drupal_internal__nid,key:node.drupal_internal__nid,title:node.title,body:node.body.summary})),",",data.allNodePage.nodes.map(node2=>/*#__PURE__*/react.createElement(templates_Card,{id:node2.drupal_internal__nid,key:node2.drupal_internal__nid,title:node2.title,body:node2.body.summary})));};const query="1420222164";/* harmony default export */ const pages = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map