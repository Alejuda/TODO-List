/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: system-ui, sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  display: grid;\\r\\n  place-content: center;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.line-through {\\r\\n  color: rgb(90, 90, 90);\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.todo-conainer {\\r\\n  background-color: rgb(192, 192, 192);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1px;\\r\\n  min-width: 350px;\\r\\n  border: 1px solid rgb(192, 192, 192);\\r\\n  border-radius: 0 0 4px 4px;\\r\\n  overflow: hidden;\\r\\n  box-shadow: 1px 11px 25px 0 rgba(132, 132, 132, 0.61);\\r\\n  -webkit-box-shadow: 1px 11px 25px 0 rgba(132, 132, 132, 0.61);\\r\\n  -moz-box-shadow: 1px 11px 25px 0 rgba(132, 132, 132, 0.61);\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.table-header {\\r\\n  background-color: white;\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.reload-icon {\\r\\n  height: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.add-form {\\r\\n  width: 100%;\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.add-input {\\r\\n  font-style: italic;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.add-input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.enter-icon {\\r\\n  height: 15px;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  background-color: rgb(192, 192, 192);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.list-task {\\r\\n  width: 100%;\\r\\n  text-align: left;\\r\\n  background-color: white;\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n  transition: background-color 100ms;\\r\\n}\\r\\n\\r\\n.on-change {\\r\\n  background-color: antiquewhite;\\r\\n}\\r\\n\\r\\n.task-description {\\r\\n  margin-right: auto;\\r\\n  background-color: transparent;\\r\\n  width: 100%;\\r\\n  height: 25px;\\r\\n  line-height: 25px;\\r\\n  white-space: nowrap;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n.more-logo {\\r\\n  height: 100%;\\r\\n  cursor: move;\\r\\n  opacity: 0.6;\\r\\n  transition: all 100ms;\\r\\n}\\r\\n\\r\\n.trash-logo {\\r\\n  opacity: 0.6;\\r\\n  height: 100%;\\r\\n  cursor: pointer;\\r\\n  transition: all 100ms;\\r\\n}\\r\\n\\r\\n.more-logo:hover,\\r\\n.trash-logo:hover {\\r\\n  opacity: 1;\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.finished-cap {\\r\\n  width: 16px;\\r\\n  height: 16px;\\r\\n  border-radius: 3px;\\r\\n  border: 1px solid grey;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  border: none;\\r\\n  font-size: 14px;\\r\\n  color: rgb(63, 89, 238);\\r\\n}\\r\\n\\r\\n.clear-btn {\\r\\n  background-color: rgb(240, 240, 240);\\r\\n  padding: 15px;\\r\\n  text-align: center;\\r\\n  color: rgb(116, 116, 116);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addAndRemove.js":
/*!*****************************!*\
  !*** ./src/addAndRemove.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteAllCompleted\": () => (/* binding */ deleteAllCompleted),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderList.js */ \"./src/renderList.js\");\n\r\n\r\nconst addInput = document.getElementById('add-input');\r\n\r\nconst addTask = (desc) => {\r\n  let list = JSON.parse(localStorage.getItem('tasks-list'));\r\n  if (list === null) {\r\n    list = [];\r\n  }\r\n  const newTask = {\r\n    id: list.length + 1,\r\n    desc,\r\n    completed: false,\r\n  };\r\n  list.push(newTask);\r\n  localStorage.setItem('tasks-list', JSON.stringify(list));\r\n  addInput.value = '';\r\n  (0,_renderList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list);\r\n};\r\n\r\nconst removeTask = (id) => {\r\n  let list = JSON.parse(localStorage.getItem('tasks-list'));\r\n  if (list === null) {\r\n    list = [];\r\n  }\r\n  const remove = list.findIndex((task) => task.id === id);\r\n  list.splice(remove, 1);\r\n  for (let i = id - 1; i < list.length; i += 1) {\r\n    list[i].id = i + 1;\r\n  }\r\n  localStorage.setItem('tasks-list', JSON.stringify(list));\r\n  (0,_renderList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list);\r\n};\r\n\r\nconst editTask = (id) => {\r\n  const list = JSON.parse(localStorage.getItem('tasks-list'));\r\n  const textArea = document.getElementById(`text-area-${id}`);\r\n  const toggleImgMore = document.getElementById(`toggle-more-${id}`);\r\n  const toggleImgTrash = document.getElementById(`toggle-trash-${id}`);\r\n\r\n  toggleImgMore.classList.add('hide');\r\n  toggleImgTrash.classList.remove('hide');\r\n\r\n  textArea.parentElement.classList.add('on-change');\r\n\r\n  const edit = list.findIndex((task) => task.id === id);\r\n  textArea.addEventListener('change', () => {\r\n    list[edit].desc = textArea.value;\r\n    textArea.innerText = list[edit].desc;\r\n    localStorage.setItem('tasks-list', JSON.stringify(list));\r\n  });\r\n  textArea.addEventListener('blur', () => {\r\n    localStorage.setItem('tasks-list', JSON.stringify(list));\r\n    setTimeout(() => {\r\n      toggleImgMore.classList.remove('hide');\r\n      toggleImgTrash.classList.add('hide');\r\n      textArea.parentElement.classList.remove('on-change');\r\n    }, 200);\r\n  });\r\n  textArea.addEventListener('keydown', (e) => {\r\n    if (e.key === 'Enter') {\r\n      localStorage.setItem('tasks-list', JSON.stringify(list));\r\n      textArea.innerText = list[edit].desc;\r\n      textArea.blur();\r\n    }\r\n  });\r\n};\r\n\r\nconst deleteAllCompleted = () => {\r\n  const list = JSON.parse(localStorage.getItem('tasks-list'));\r\n  const newList = list.filter((task) => task.completed === false);\r\n  localStorage.setItem('tasks-list', JSON.stringify(newList));\r\n  (0,_renderList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\n\n//# sourceURL=webpack://todo-list/./src/addAndRemove.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _reload_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reload.svg */ \"./src/reload.svg\");\n/* harmony import */ var _enter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter.svg */ \"./src/enter.svg\");\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderList.js */ \"./src/renderList.js\");\n/* harmony import */ var _addAndRemove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addAndRemove.js */ \"./src/addAndRemove.js\");\n/* harmony import */ var _toggleComplete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggleComplete.js */ \"./src/toggleComplete.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst addForm = document.getElementById('add-form');\r\nconst addInput = document.getElementById('add-input');\r\n\r\nconst reloadIcon = document.getElementById('reload-img');\r\nconst enterIcon = document.getElementById('enter-icon');\r\nenterIcon.src = _enter_svg__WEBPACK_IMPORTED_MODULE_2__;\r\nreloadIcon.src = _reload_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nwindow.onload = (0,_renderList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\nwindow.removeTask = _addAndRemove_js__WEBPACK_IMPORTED_MODULE_4__.removeTask;\r\nwindow.editTask = _addAndRemove_js__WEBPACK_IMPORTED_MODULE_4__.editTask;\r\nwindow.toggleComplete = _toggleComplete_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\r\nwindow.deleteAllCompleted = _addAndRemove_js__WEBPACK_IMPORTED_MODULE_4__.deleteAllCompleted;\r\n\r\naddForm.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  (0,_addAndRemove_js__WEBPACK_IMPORTED_MODULE_4__.addTask)(addInput.value);\r\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/renderList.js":
/*!***************************!*\
  !*** ./src/renderList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more.svg */ \"./src/more.svg\");\n/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash.svg */ \"./src/trash.svg\");\n\r\n\r\n\r\nconst htmlList = document.getElementById('todo-list');\r\n\r\nconst renderList = () => {\r\n  let list = JSON.parse(localStorage.getItem('tasks-list'));\r\n  if (list === null) {\r\n    list = [];\r\n  }\r\n  let innerList = '';\r\n  const sortedList = list.sort((a, b) => a.id - b.id);\r\n  sortedList.forEach((task) => {\r\n    innerList += `\r\n            <li class=\"list-task\" id=\"list-item-${task.id}\">\r\n              <div onclick=\"toggleComplete(${task.id})\" class=\"finished-cap ${\r\n  task.completed ? 'completed' : ''\r\n}\">${task.completed ? '✔' : ''}</div>\r\n              <textarea desable id=\"text-area-${task.id}\" onclick=\"editTask(${\r\n  task.id\r\n})\" class=\"task-description ${task.completed ? 'line-through' : ''}\">${\r\n  task.desc\r\n}</textarea>\r\n              <img class=\"more-logo\" id=\"toggle-more-${\r\n  task.id\r\n}\" alt=\"move\" src=\"${_more_svg__WEBPACK_IMPORTED_MODULE_0__}\"/>\r\n              <img class=\"trash-logo hide\" id=\"toggle-trash-${\r\n  task.id\r\n}\" alt=\"move\" src=\"${_trash_svg__WEBPACK_IMPORTED_MODULE_1__}\" onClick=\"removeTask(${task.id})\"/>\r\n            </li>\r\n            `;\r\n  });\r\n  htmlList.innerHTML = innerList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderList);\r\n\n\n//# sourceURL=webpack://todo-list/./src/renderList.js?");

/***/ }),

/***/ "./src/toggleComplete.js":
/*!*******************************!*\
  !*** ./src/toggleComplete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderList.js */ \"./src/renderList.js\");\n\r\n\r\nconst toggleComplete = (id) => {\r\n  let list = JSON.parse(localStorage.getItem('tasks-list'));\r\n  if (list === null) {\r\n    list = [];\r\n  }\r\n  const toggle = list.findIndex((task) => task.id === id);\r\n  if (!list[toggle].completed) {\r\n    list[toggle].completed = true;\r\n  } else {\r\n    list[toggle].completed = false;\r\n  }\r\n  localStorage.setItem('tasks-list', JSON.stringify(list));\r\n  (0,_renderList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleComplete);\r\n\n\n//# sourceURL=webpack://todo-list/./src/toggleComplete.js?");

/***/ }),

/***/ "./src/enter.svg":
/*!***********************!*\
  !*** ./src/enter.svg ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMy4xMjUgMi41QzEzLjI3ODEgMi41MDAwMiAxMy40MjU4IDIuNTU2MjIgMTMuNTQwMiAyLjY1Nzk1QzEzLjY1NDYgMi43NTk2NyAxMy43Mjc3IDIuODk5ODQgMTMuNzQ1NiAzLjA1MTg3TDEzLjc1IDMuMTI1VjcuMTg3NUMxMy43NSA3Ljc0NjkyIDEzLjUzNTggOC4yODUwOSAxMy4xNTEyIDguNjkxMzhDMTIuNzY2NyA5LjA5NzY3IDEyLjI0MTEgOS4zNDExOSAxMS42ODI1IDkuMzcxODdMMTEuNTYyNSA5LjM3NUgzLjM4NDM3TDUuNDQxODcgMTEuNDMzMUM1LjU0OTQ5IDExLjU0MDcgNS42MTQxMyAxMS42ODM5IDUuNjIzNjggMTEuODM1OEM1LjYzMzIzIDExLjk4NzcgNS41ODcwMyAxMi4xMzc5IDUuNDkzNzUgMTIuMjU4MUw1LjQ0MTg3IDEyLjMxNjlDNS4zMzQyNSAxMi40MjQ1IDUuMTkxMDcgMTIuNDg5MSA1LjAzOTE4IDEyLjQ5ODdDNC44ODcyOCAxMi41MDgyIDQuNzM3MTMgMTIuNDYyIDQuNjE2ODggMTIuMzY4OEw0LjU1ODEzIDEyLjMxNjlMMS40MzMxMiA5LjE5MTg3QzEuNDExMjMgOS4xNzAwNiAxLjM5MDk3IDkuMTQ2NjYgMS4zNzI1IDkuMTIxODhMMS4zMjgxMiA5LjA1MzEyTDEuMjk0MzggOC45ODE4OEwxLjI3MjUgOC45MTYyNUwxLjI1Njg3IDguODQzMTNMMS4yNTI1IDguODA1NjJMMS4yNSA4Ljc1TDEuMjUxODggOC43MDMxM0wxLjI2MjUgOC42MjQzN0wxLjI4MTI1IDguNTU1TDEuMzA4NzUgOC40ODU2MkwxLjM0MTI1IDguNDI0MzhMMS4zODEyNSA4LjM2Njg4TDEuNDMzMTIgOC4zMDgxM0w0LjU1ODEzIDUuMTgzMTNDNC42NzA2IDUuMDcxMDMgNC44MjE1MiA1LjAwNTk1IDQuOTgwMjQgNS4wMDExMUM1LjEzODk2IDQuOTk2MjYgNS4yOTM1NyA1LjA1MjAxIDUuNDEyNjcgNS4xNTcwM0M1LjUzMTc4IDUuMjYyMDUgNS42MDY0NCA1LjQwODQ3IDUuNjIxNSA1LjU2NjU1QzUuNjM2NTYgNS43MjQ2MiA1LjU5MDg4IDUuODgyNTEgNS40OTM3NSA2LjAwODEyTDUuNDQxODcgNi4wNjY4N0wzLjM4NDM3IDguMTI1SDExLjU2MjVDMTEuNzk1NSA4LjEyNSAxMi4wMjAxIDguMDM4MjggMTIuMTkyNiA3Ljg4MTcyQzEyLjM2NTEgNy43MjUxNiAxMi40NzMxIDcuNTA5OTkgMTIuNDk1NiA3LjI3ODEzTDEyLjUgNy4xODc1VjMuMTI1QzEyLjUgMi45NTkyNCAxMi41NjU4IDIuODAwMjcgMTIuNjgzMSAyLjY4MzA2QzEyLjgwMDMgMi41NjU4NSAxMi45NTkyIDIuNSAxMy4xMjUgMi41WiIgZmlsbD0iIzc0NzQ3NCIvPg0KPC9zdmc+DQo=\";\n\n//# sourceURL=webpack://todo-list/./src/enter.svg?");

/***/ }),

/***/ "./src/more.svg":
/*!**********************!*\
  !*** ./src/more.svg ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjUgMTIuNUM3LjE1NjI1IDEyLjUgNi44NjE4OCAxMi4zNzc1IDYuNjE2ODggMTIuMTMyNUM2LjM3MTg4IDExLjg4NzUgNi4yNDk1OCAxMS41OTMzIDYuMjUgMTEuMjVDNi4yNSAxMC45MDYzIDYuMzcyNSAxMC42MTE5IDYuNjE3NSAxMC4zNjY5QzYuODYyNSAxMC4xMjE5IDcuMTU2NjcgOS45OTk1OCA3LjUgMTBDNy44NDM3NSAxMCA4LjEzODEzIDEwLjEyMjUgOC4zODMxMyAxMC4zNjc1QzguNjI4MTMgMTAuNjEyNSA4Ljc1MDQyIDEwLjkwNjcgOC43NSAxMS4yNUM4Ljc1IDExLjU5MzggOC42Mjc1IDExLjg4ODEgOC4zODI1IDEyLjEzMzFDOC4xMzc1IDEyLjM3ODEgNy44NDMzMyAxMi41MDA0IDcuNSAxMi41Wk03LjUgOC43NUM3LjE1NjI1IDguNzUgNi44NjE4OCA4LjYyNzUgNi42MTY4OCA4LjM4MjVDNi4zNzE4OCA4LjEzNzUgNi4yNDk1OCA3Ljg0MzMzIDYuMjUgNy41QzYuMjUgNy4xNTYyNSA2LjM3MjUgNi44NjE4OCA2LjYxNzUgNi42MTY4OEM2Ljg2MjUgNi4zNzE4OCA3LjE1NjY3IDYuMjQ5NTggNy41IDYuMjVDNy44NDM3NSA2LjI1IDguMTM4MTMgNi4zNzI1IDguMzgzMTMgNi42MTc1QzguNjI4MTMgNi44NjI1IDguNzUwNDIgNy4xNTY2NyA4Ljc1IDcuNUM4Ljc1IDcuODQzNzUgOC42Mjc1IDguMTM4MTMgOC4zODI1IDguMzgzMTNDOC4xMzc1IDguNjI4MTMgNy44NDMzMyA4Ljc1MDQyIDcuNSA4Ljc1Wk03LjUgNUM3LjE1NjI1IDUgNi44NjE4OCA0Ljg3NzUgNi42MTY4OCA0LjYzMjVDNi4zNzE4OCA0LjM4NzUgNi4yNDk1OCA0LjA5MzMzIDYuMjUgMy43NUM2LjI1IDMuNDA2MjUgNi4zNzI1IDMuMTExODggNi42MTc1IDIuODY2ODhDNi44NjI1IDIuNjIxODggNy4xNTY2NyAyLjQ5OTU4IDcuNSAyLjVDNy44NDM3NSAyLjUgOC4xMzgxMyAyLjYyMjUgOC4zODMxMyAyLjg2NzVDOC42MjgxMyAzLjExMjUgOC43NTA0MiAzLjQwNjY3IDguNzUgMy43NUM4Ljc1IDQuMDkzNzUgOC42Mjc1IDQuMzg4MTMgOC4zODI1IDQuNjMzMTNDOC4xMzc1IDQuODc4MTMgNy44NDMzMyA1LjAwMDQyIDcuNSA1WiIgZmlsbD0iIzc0NzQ3NCIvPg0KPC9zdmc+DQo=\";\n\n//# sourceURL=webpack://todo-list/./src/more.svg?");

/***/ }),

/***/ "./src/reload.svg":
/*!************************!*\
  !*** ./src/reload.svg ***!
  \************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik04Ljc1IDEwSDExLjg3NVYxMy4xMjVNNi4yNSA1SDMuMTI1VjEuODc1TTEyLjEzNjMgNS42MjY4OEMxMS43ODU4IDQuNzU5NDkgMTEuMTk5MSA0LjAwNzgyIDEwLjQ0MjcgMy40NTcyOUM5LjY4NjQgMi45MDY3NiA4Ljc5MDc3IDIuNTc5NDYgNy44NTc2NyAyLjUxMjZDNi45MjQ1NyAyLjQ0NTc0IDUuOTkxNDIgMi42NDE5OSA1LjE2NDMxIDMuMDc5MDVDNC4zMzcxOSAzLjUxNjExIDMuNjQ5MjcgNC4xNzY0NSAzLjE3ODc1IDQuOTg1TTIuODYzNzUgOS4zNzMxMkMzLjIxNDI1IDEwLjI0MDMgMy44MDA5OCAxMC45OTE5IDQuNTU3MjcgMTEuNTQyM0M1LjMxMzU2IDEyLjA5MjcgNi4yMDkwOCAxMi40MTk5IDcuMTQyMDYgMTIuNDg2OEM4LjA3NTA0IDEyLjU1MzYgOS4wMDgwNyAxMi4zNTc0IDkuODM1MTEgMTEuOTIwNUMxMC42NjIyIDExLjQ4MzYgMTEuMzUwMSAxMC44MjM0IDExLjgyMDYgMTAuMDE1IiBzdHJva2U9IiM3NDc0NzQiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg==\";\n\n//# sourceURL=webpack://todo-list/./src/reload.svg?");

/***/ }),

/***/ "./src/trash.svg":
/*!***********************!*\
  !*** ./src/trash.svg ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC4zMTI1IDEuNjQwNjJWMi44MTI1SDEyLjQyMTlDMTIuNjA4NCAyLjgxMjUgMTIuNzg3MiAyLjg4NjU4IDEyLjkxOTEgMy4wMTg0NEMxMy4wNTA5IDMuMTUwMyAxMy4xMjUgMy4zMjkxNCAxMy4xMjUgMy41MTU2MkMxMy4xMjUgMy43MDIxMSAxMy4wNTA5IDMuODgwOTUgMTIuOTE5MSA0LjAxMjgxQzEyLjc4NzIgNC4xNDQ2NyAxMi42MDg0IDQuMjE4NzUgMTIuNDIxOSA0LjIxODc1SDIuNTc4MTJDMi4zOTE2NCA0LjIxODc1IDIuMjEyOCA0LjE0NDY3IDIuMDgwOTQgNC4wMTI4MUMxLjk0OTA4IDMuODgwOTUgMS44NzUgMy43MDIxMSAxLjg3NSAzLjUxNTYyQzEuODc1IDMuMzI5MTQgMS45NDkwOCAzLjE1MDMgMi4wODA5NCAzLjAxODQ0QzIuMjEyOCAyLjg4NjU4IDIuMzkxNjQgMi44MTI1IDIuNTc4MTIgMi44MTI1SDQuNjg3NVYxLjY0MDYyQzQuNjg3NSAwLjczNSA1LjQyMjUgMCA2LjMyODEyIDBIOC42NzE4OEM5LjU3NzUgMCAxMC4zMTI1IDAuNzM1IDEwLjMxMjUgMS42NDA2MlpNNC4yMTUgNi4yNTc4MUw0LjgzMzc1IDEyLjQ0NTNDNC44Mzk1NiAxMi41MDMyIDQuODY2NjcgMTIuNTU2OCA0LjkwOTgxIDEyLjU5NThDNC45NTI5NSAxMi42MzQ4IDUuMDA5MDQgMTIuNjU2MyA1LjA2NzE5IDEyLjY1NjJIOS45MzI4MUM5Ljk5MDk2IDEyLjY1NjMgMTAuMDQ3IDEyLjYzNDggMTAuMDkwMiAxMi41OTU4QzEwLjEzMzMgMTIuNTU2OCAxMC4xNjA0IDEyLjUwMzIgMTAuMTY2MiAxMi40NDUzTDEwLjc4NSA2LjI1NzgxQzEwLjgwODIgNi4wNzYyIDEwLjkwMTQgNS45MTA4MSAxMS4wNDQ3IDUuNzk2ODJDMTEuMTg4IDUuNjgyODQgMTEuMzcwMSA1LjYyOTI0IDExLjU1MjMgNS42NDc0NEMxMS43MzQ1IDUuNjY1NjMgMTEuOTAyNCA1Ljc1NDE4IDEyLjAyMDMgNS44OTQyNUMxMi4xMzgyIDYuMDM0MzMgMTIuMTk2OSA2LjIxNDg3IDEyLjE4MzggNi4zOTc1TDExLjU2NSAxMi41ODVDMTEuNTI1IDEyLjk5IDExLjMzNTcgMTMuMzY1NiAxMS4wMzQgMTMuNjM4N0MxMC43MzIzIDEzLjkxMTggMTAuMzM5OCAxNC4wNjI4IDkuOTMyODEgMTQuMDYyNUg1LjA2NzE5QzQuNjYwNTEgMTQuMDYyNCA0LjI2ODM0IDEzLjkxMTQgMy45NjY3NiAxMy42Mzg1QzMuNjY1MTcgMTMuMzY1NyAzLjQ3NTY3IDEyLjk5MDYgMy40MzUgMTIuNTg1OUwyLjgxNjI1IDYuMzk4NDRDMi44MDQ1MSA2LjMwNTM0IDIuODExNTIgNi4yMTA4NCAyLjgzNjg3IDYuMTIwNUMyLjg2MjIyIDYuMDMwMTYgMi45MDUzOSA1Ljk0NTggMi45NjM4NSA1Ljg3MjQxQzMuMDIyMyA1Ljc5OTAxIDMuMDk0ODYgNS43MzgwNiAzLjE3NzI0IDUuNjkzMTRDMy4yNTk2MiA1LjY0ODIyIDMuMzUwMTUgNS42MjAyNCAzLjQ0MzUxIDUuNjEwODVDMy41MzY4NyA1LjYwMTQ3IDMuNjMxMTcgNS42MTA4NiAzLjcyMDg0IDUuNjM4NDhDMy44MTA1MSA1LjY2NjExIDMuODkzNzUgNS43MTE0IDMuOTY1NjUgNS43NzE2OUM0LjAzNzU0IDUuODMxOTggNC4wOTY2NSA1LjkwNjA1IDQuMTM5NDcgNS45ODk1NEM0LjE4MjI5IDYuMDczMDMgNC4yMDc5OCA2LjE2NDI1IDQuMjE1IDYuMjU3ODFaTTYuMDkzNzUgMS42NDA2MlYyLjgxMjVIOC45MDYyNVYxLjY0MDYyQzguOTA2MjUgMS41Nzg0NiA4Ljg4MTU2IDEuNTE4ODUgOC44Mzc2IDEuNDc0OUM4Ljc5MzY1IDEuNDMwOTQgOC43MzQwNCAxLjQwNjI1IDguNjcxODggMS40MDYyNUg2LjMyODEyQzYuMjY1OTYgMS40MDYyNSA2LjIwNjM1IDEuNDMwOTQgNi4xNjI0IDEuNDc0OUM2LjExODQ0IDEuNTE4ODUgNi4wOTM3NSAxLjU3ODQ2IDYuMDkzNzUgMS42NDA2MloiIGZpbGw9IiM3NDc0NzQiLz4NCjwvc3ZnPg0K\";\n\n//# sourceURL=webpack://todo-list/./src/trash.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;