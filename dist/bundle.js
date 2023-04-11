/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components.tsx":
/*!****************************!*\
  !*** ./src/components.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogBox": () => (/* binding */ DialogBox),
/* harmony export */   "LabeledButton": () => (/* binding */ LabeledButton)
/* harmony export */ });
/* harmony import */ var _jsx_pragma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx-pragma */ "./src/jsx-pragma.tsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/** @jsx transpileJSX */


var LabeledButton = /*#__PURE__*/function () {
  function LabeledButton(props) {
    _classCallCheck(this, LabeledButton);
    _defineProperty(this, "label", void 0);
    // inherits from IComponent
    _defineProperty(this, "id", void 0);
    // inherits from IMouseInteractive
    _defineProperty(this, "onClick", void 0);
    _defineProperty(this, "onMouseDown", void 0);
    _defineProperty(this, "onMouseUp", void 0);
    _defineProperty(this, "onMouseEnter", void 0);
    _defineProperty(this, "onMouseLeave", void 0);
    _defineProperty(this, "onMouseMove", void 0);
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this.label = props.label;
    if (props.onClick) this.onClick = props.onClick;
    if (props.onMouseDown) this.onMouseDown = props.onMouseDown;
    if (props.onMouseUp) this.onMouseUp = props.onMouseUp;
    if (props.onMouseEnter) this.onMouseEnter = props.onMouseEnter;
    if (props.onMouseLeave) this.onMouseLeave = props.onMouseLeave;
    if (props.onMouseMove) this.onMouseMove = props.onMouseMove;
  }
  _createClass(LabeledButton, [{
    key: "render",
    value: function render() {
      var button = document.createElement("button");
      button.setAttribute("id", this.id);
      button.appendChild(document.createTextNode(this.label));
      if (this.onClick) button.addEventListener("click", this.onClick);
      if (this.onMouseDown) button.addEventListener("mousedown", this.onMouseDown);
      if (this.onMouseUp) button.addEventListener("mouseup", this.onMouseUp);
      if (this.onMouseEnter) button.addEventListener("mouseenter", this.onMouseEnter);
      if (this.onMouseLeave) button.addEventListener("mouseleave", this.onMouseLeave);
      if (this.onMouseMove) button.addEventListener("mousemove", this.onMouseMove);
      return button;
    }
  }]);
  return LabeledButton;
}();
var DialogBox = /*#__PURE__*/function () {
  function DialogBox(props) {
    var _this = this;
    _classCallCheck(this, DialogBox);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "title", void 0);
    _defineProperty(this, "prompt", void 0);
    _defineProperty(this, "onYes", void 0);
    _defineProperty(this, "onNo", void 0);
    _defineProperty(this, "handleOnYes", function (e) {
      _this.onYes(e);
    });
    _defineProperty(this, "handleOnNo", function (e) {
      _this.onNo(e);
    });
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this.title = props.title;
    this.prompt = props.prompt;
    this.onYes = props.onYes;
    this.onNo = props.onNo;
  }
  _createClass(DialogBox, [{
    key: "render",
    value: function render() {
      var elem = (0,_jsx_pragma__WEBPACK_IMPORTED_MODULE_0__.transpileJSX)("div", {
        id: this.id
      }, (0,_jsx_pragma__WEBPACK_IMPORTED_MODULE_0__.transpileJSX)("h1", null, this.title), (0,_jsx_pragma__WEBPACK_IMPORTED_MODULE_0__.transpileJSX)("div", {
        id: "prompt"
      }, this.prompt), (0,_jsx_pragma__WEBPACK_IMPORTED_MODULE_0__.transpileJSX)("div", {
        id: "buttons"
      }, (0,_jsx_pragma__WEBPACK_IMPORTED_MODULE_0__.transpileJSX)("button", {
        id: "yes",
        onClick: this.handleOnYes
      }, "Yes"), (0,_jsx_pragma__WEBPACK_IMPORTED_MODULE_0__.transpileJSX)("button", {
        id: "no",
        onClick: this.handleOnNo
      }, "No")));
      return elem;
    }
  }]);
  return DialogBox;
}();

/***/ }),

/***/ "./src/jsx-pragma.tsx":
/*!****************************!*\
  !*** ./src/jsx-pragma.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsx": () => (/* binding */ jsx),
/* harmony export */   "transpileJSX": () => (/* binding */ transpileJSX)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var add = function add(parent, child) {
  parent.appendChild(child !== null && child !== void 0 && child.nodeType ? child : document.createTextNode(child));
};
var appendChild = function appendChild(parent, child) {
  if (Array.isArray(child)) {
    child.forEach(function (nestedChild) {
      return appendChild(parent, nestedChild);
    });
  } else {
    add(parent, child);
  }
};
var transpileJSX = function transpileJSX(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  console.log(type, props, children);
  console.log(_typeof(type));
  var elem;
  if (typeof type === 'function') {
    elem = new type(props, children);
    return elem.render();
  } else if (typeof type === 'string') {
    elem = document.createElement(type);
  }

  // add props
  if (props) {
    for (var key in props) {
      if (key.substring(0, 2) !== "on") {
        elem.setAttribute(key, props[key]);
      } else {
        elem.addEventListener(key.substring(2).toLowerCase(), props[key]);
      }
    }
  }

  // add children
  appendChild(elem, children);
  return elem;
};
var jsx = transpileJSX;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components */ "./src/components.tsx");
/* harmony import */ var _src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/jsx-pragma */ "./src/jsx-pragma.tsx");


/** @jsx transpileJSX */

var handleOnMouseMove = function handleOnMouseMove(e) {
  console.log("mouse move");
};
var title = (0,_src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__.transpileJSX)("h1", {
  id: "title"
}, "Hello, World!");
var article = (0,_src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__.transpileJSX)("div", {
  id: "Article"
}, (0,_src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__.transpileJSX)("h1", {
  id: "title"
}, title), (0,_src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__.transpileJSX)("h2", {
  id: "author"
}, "codefrite"), (0,_src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__.transpileJSX)("div", {
  id: "text",
  onmousemove: handleOnMouseMove
}, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores est mollitia ad praesentium vero. Quidem quos eligendi officiis numquam dicta! Natus tenetur, possimus quia doloribus consequuntur cum ullam facilis?"), (0,_src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__.transpileJSX)("a", {
  href: "https://www.google.com"
}));
document.body.appendChild(article);
var lbutton = (0,_src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__.transpileJSX)(_src_components__WEBPACK_IMPORTED_MODULE_0__.LabeledButton, {
  id: "button1",
  label: "Click Me",
  onClick: function onClick(e) {
    return console.log("clicked");
  }
});
document.body.appendChild(lbutton);
var dialogBox = (0,_src_jsx_pragma__WEBPACK_IMPORTED_MODULE_1__.transpileJSX)(_src_components__WEBPACK_IMPORTED_MODULE_0__.DialogBox, {
  id: "dialogBox1",
  title: "Dialog Box",
  prompt: "Are you sure?",
  onYes: console.log,
  onNo: console.log
});
document.body.appendChild(dialogBox);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFd0IsS0FBSyxDQUFNLEVBQzNCL0IsNkRBQUE7RUFBSU8sRUFBRSxFQUFDO0FBQVEsR0FBQyxXQUFTLENBQUssRUFDOUJQLDZEQUFBO0VBQUtPLEVBQUUsRUFBQyxNQUFNO0VBQUNtRCxXQUFXLEVBQUVGO0FBQWtCLEdBQUMsb09BRS9DLENBQU0sRUFDTnhELDZEQUFBO0VBQUcyRCxJQUFJLEVBQUM7QUFBd0IsRUFBSyxDQUNqQztBQUNOdkMsUUFBUSxDQUFDd0MsSUFBSSxDQUFDckMsV0FBVyxDQUFDa0MsT0FBTyxDQUFDO0FBRWxDLElBQUlJLE9BQU8sR0FBQzdELDZEQUFBLENBQUNHLDBEQUFhO0VBQUNJLEVBQUUsRUFBQyxTQUFTO0VBQUNDLEtBQUssRUFBQyxVQUFVO0VBQUNDLE9BQU8sRUFBRSxTQUFBQSxRQUFBbUIsQ0FBQztJQUFBLE9BQUlzQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFBQTtBQUFDLEVBQUU7QUFDaEcvQixRQUFRLENBQUN3QyxJQUFJLENBQUNyQyxXQUFXLENBQUNzQyxPQUFPLENBQUM7QUFFbEMsSUFBSUMsU0FBUyxHQUFHOUQsNkRBQUEsQ0FBQzBCLHNEQUFTO0VBQUNuQixFQUFFLEVBQUMsWUFBWTtFQUFDd0IsS0FBSyxFQUFDLFlBQVk7RUFBQ0MsTUFBTSxFQUFDLGVBQWU7RUFBQ0gsS0FBSyxFQUFFcUIsT0FBTyxDQUFDQyxHQUFJO0VBQUNyQixJQUFJLEVBQUVvQixPQUFPLENBQUNDO0FBQUksRUFBRTtBQUM3SC9CLFFBQVEsQ0FBQ3dDLElBQUksQ0FBQ3JDLFdBQVcsQ0FBQ3VDLFNBQVMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFiZWwvLi9zcmMvY29tcG9uZW50cy50c3giLCJ3ZWJwYWNrOi8vYmFiZWwvLi9zcmMvanN4LXByYWdtYS50c3giLCJ3ZWJwYWNrOi8vYmFiZWwvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9iYWJlbC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vYmFiZWwvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9iYWJlbC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2JhYmVsLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9iYWJlbC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vYmFiZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFiZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhYmVsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFiZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYWJlbC8uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc3BpbGVKU1ggfSBmcm9tIFwiLi9qc3gtcHJhZ21hXCI7XG4vKiogQGpzeCB0cmFuc3BpbGVKU1ggKi9cblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmludGVyZmFjZSBEcmF3YWJsZSB7XG4gIHJlbmRlcjogKCkgPT4gSFRNTEVsZW1lbnQ7XG59XG5cbmludGVyZmFjZSBJTW91c2VJbnRlcmFjdGl2ZSB7XG4gIG9uQ2xpY2s/OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgb25Nb3VzZURvd24/OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgb25Nb3VzZVVwPzogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gIG9uTW91c2VFbnRlcj86IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuICBvbk1vdXNlTGVhdmU/OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgb25Nb3VzZU1vdmU/OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGFiZWxlZEJ1dHRvbiBleHRlbmRzIElDb21wb25lbnQsIElNb3VzZUludGVyYWN0aXZlIHtcbiAgbGFiZWw6c3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTGFiZWxlZEJ1dHRvbiBpbXBsZW1lbnRzIElMYWJlbGVkQnV0dG9uIHtcbiAgbGFiZWw6c3RyaW5nO1xuICAvLyBpbmhlcml0cyBmcm9tIElDb21wb25lbnRcbiAgaWQ6c3RyaW5nO1xuICAvLyBpbmhlcml0cyBmcm9tIElNb3VzZUludGVyYWN0aXZlXG4gIG9uQ2xpY2s/OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgb25Nb3VzZURvd24/OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgb25Nb3VzZVVwPzogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gIG9uTW91c2VFbnRlcj86IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuICBvbk1vdXNlTGVhdmU/OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgb25Nb3VzZU1vdmU/OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczpJTGFiZWxlZEJ1dHRvbil7XG4gICAgdGhpcy5pZCA9IHV1aWR2NCgpO1xuICAgIHRoaXMubGFiZWwgPSBwcm9wcy5sYWJlbDtcbiAgICBpZiAocHJvcHMub25DbGljaykgdGhpcy5vbkNsaWNrID0gcHJvcHMub25DbGljaztcbiAgICBpZiAocHJvcHMub25Nb3VzZURvd24pIHRoaXMub25Nb3VzZURvd24gPSBwcm9wcy5vbk1vdXNlRG93bjtcbiAgICBpZiAocHJvcHMub25Nb3VzZVVwKSB0aGlzLm9uTW91c2VVcCA9IHByb3BzLm9uTW91c2VVcDtcbiAgICBpZiAocHJvcHMub25Nb3VzZUVudGVyKSB0aGlzLm9uTW91c2VFbnRlciA9IHByb3BzLm9uTW91c2VFbnRlcjtcbiAgICBpZiAocHJvcHMub25Nb3VzZUxlYXZlKSB0aGlzLm9uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZTtcbiAgICBpZiAocHJvcHMub25Nb3VzZU1vdmUpIHRoaXMub25Nb3VzZU1vdmUgPSBwcm9wcy5vbk1vdXNlTW92ZTtcbiAgfVxuXG4gIHJlbmRlcigpOkhUTUxFbGVtZW50IHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmlkKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5sYWJlbCkpO1xuICAgIGlmICh0aGlzLm9uQ2xpY2spIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2spO1xuICAgIGlmICh0aGlzLm9uTW91c2VEb3duKSBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMub25Nb3VzZURvd24pO1xuICAgIGlmICh0aGlzLm9uTW91c2VVcCkgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5vbk1vdXNlVXApO1xuICAgIGlmICh0aGlzLm9uTW91c2VFbnRlcikgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXIpO1xuICAgIGlmICh0aGlzLm9uTW91c2VMZWF2ZSkgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5vbk1vdXNlTGVhdmUpO1xuICAgIGlmICh0aGlzLm9uTW91c2VNb3ZlKSBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3VzZU1vdmUpO1xuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nQm94IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gIHRpdGxlOnN0cmluZztcbiAgcHJvbXB0OnN0cmluZztcbiAgb25ZZXM6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuICBvbk5vOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIERpYWxvZ0JveCBpbXBsZW1lbnRzIElEaWFsb2dCb3gge1xuICBpZDpzdHJpbmc7XG4gIHRpdGxlOnN0cmluZztcbiAgcHJvbXB0OnN0cmluZztcbiAgXG4gIG9uWWVzOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgb25ObzogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6SURpYWxvZ0JveCkge1xuICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbiAgICB0aGlzLnRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgdGhpcy5wcm9tcHQgPSBwcm9wcy5wcm9tcHQ7XG4gICAgdGhpcy5vblllcyA9IHByb3BzLm9uWWVzO1xuICAgIHRoaXMub25ObyA9IHByb3BzLm9uTm87XG4gIH1cblxuICBoYW5kbGVPblllcyA9IChlOk1vdXNlRXZlbnQpID0+IHtcbiAgICB0aGlzLm9uWWVzKGUpO1xuICB9XG5cbiAgaGFuZGxlT25ObyA9IChlOk1vdXNlRXZlbnQpID0+IHtcbiAgICB0aGlzLm9uTm8oZSk7XG4gIH1cblxuICByZW5kZXIoKTpIVE1MRWxlbWVudCB7XG4gICAgbGV0IGVsZW0gPSA8ZGl2IGlkPXt0aGlzLmlkfT5cbiAgICAgIDxoMT57dGhpcy50aXRsZX08L2gxPlxuICAgICAgPGRpdiBpZD0ncHJvbXB0Jz57dGhpcy5wcm9tcHR9PC9kaXY+XG4gICAgICA8ZGl2IGlkPSdidXR0b25zJz5cbiAgICAgICAgPGJ1dHRvbiBpZD0neWVzJyBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uWWVzfT5ZZXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD0nbm8nIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25Ob30+Tm88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHJldHVybiBlbGVtO1xuICB9XG59IiwiY29uc3QgYWRkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkPy5ub2RlVHlwZSA/IGNoaWxkIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbn07XG5cbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgY2hpbGQuZm9yRWFjaCgobmVzdGVkQ2hpbGQpID0+IGFwcGVuZENoaWxkKHBhcmVudCwgbmVzdGVkQ2hpbGQpKTtcbiAgfSBlbHNlIHtcbiAgICBhZGQocGFyZW50LCBjaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc3BpbGVKU1ggPSAodHlwZSxwcm9wcywuLi5jaGlsZHJlbjpBcnJheTxIVE1MRWxlbWVudD4pID0+IHtcbiAgY29uc29sZS5sb2codHlwZSxwcm9wcyxjaGlsZHJlbik7XG4gIGNvbnNvbGUubG9nKHR5cGVvZih0eXBlKSk7IFxuICBsZXQgZWxlbTphbnk7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgZWxlbSA9IG5ldyB0eXBlKHByb3BzLGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbS5yZW5kZXIoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpe1xuICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICB9XG5cbiAgLy8gYWRkIHByb3BzXG4gIGlmIChwcm9wcyl7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BzKXtcbiAgICAgIGlmIChrZXkuc3Vic3RyaW5nKDAsMikgIT09IFwib25cIil7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleSxwcm9wc1trZXldKTtcbiAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGtleS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKSxwcm9wc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBhZGQgY2hpbGRyZW5cbiAgYXBwZW5kQ2hpbGQoZWxlbSxjaGlsZHJlbik7XG4gIHJldHVybiBlbGVtO1xufVxuXG5leHBvcnQgY29uc3QganN4ID0gdHJhbnNwaWxlSlNYOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTGFiZWxlZEJ1dHRvbiwgRGlhbG9nQm94IH0gZnJvbSBcIi4vc3JjL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRyYW5zcGlsZUpTWCB9IGZyb20gXCIuL3NyYy9qc3gtcHJhZ21hXCI7XG4vKiogQGpzeCB0cmFuc3BpbGVKU1ggKi9cblxuY29uc3QgaGFuZGxlT25Nb3VzZU1vdmUgPSBlID0+IHtcbiAgY29uc29sZS5sb2coXCJtb3VzZSBtb3ZlXCIpO1xufTtcbmxldCB0aXRsZT08aDEgaWQ9XCJ0aXRsZVwiPkhlbGxvLCBXb3JsZCE8L2gxPjtcbmxldCBhcnRpY2xlPTxkaXYgaWQ9XCJBcnRpY2xlXCI+XG4gIDxoMSBpZD1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gIDxoMiBpZD1cImF1dGhvclwiPmNvZGVmcml0ZTwvaDI+XG4gIDxkaXYgaWQ9XCJ0ZXh0XCIgb25tb3VzZW1vdmU9e2hhbmRsZU9uTW91c2VNb3ZlfT5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVm9sdXB0YXRlLCBkb2xvcmVzIGVzdCBtb2xsaXRpYSBhZCBwcmFlc2VudGl1bSB2ZXJvLiBRdWlkZW0gcXVvcyBlbGlnZW5kaSBvZmZpY2lpcyBudW1xdWFtIGRpY3RhISBOYXR1cyB0ZW5ldHVyLCBwb3NzaW11cyBxdWlhIGRvbG9yaWJ1cyBjb25zZXF1dW50dXIgY3VtIHVsbGFtIGZhY2lsaXM/XG4gIDwvZGl2PlxuICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiPjwvYT5cbjwvZGl2PlxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcnRpY2xlKTtcblxubGV0IGxidXR0b249PExhYmVsZWRCdXR0b24gaWQ9XCJidXR0b24xXCIgbGFiZWw9XCJDbGljayBNZVwiIG9uQ2xpY2s9e2UgPT4gY29uc29sZS5sb2coXCJjbGlja2VkXCIpfS8+O1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYnV0dG9uKTtcblxubGV0IGRpYWxvZ0JveCA9IDxEaWFsb2dCb3ggaWQ9XCJkaWFsb2dCb3gxXCIgdGl0bGU9XCJEaWFsb2cgQm94XCIgcHJvbXB0PVwiQXJlIHlvdSBzdXJlP1wiIG9uWWVzPXtjb25zb2xlLmxvZ30gb25Obz17Y29uc29sZS5sb2d9Lz47XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7Il0sIm5hbWVzIjpbInRyYW5zcGlsZUpTWCIsInY0IiwidXVpZHY0IiwiTGFiZWxlZEJ1dHRvbiIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwiaWQiLCJsYWJlbCIsIm9uQ2xpY2siLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uTW91c2VNb3ZlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJidXR0b24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkRpYWxvZ0JveCIsIl90aGlzIiwiZSIsIm9uWWVzIiwib25ObyIsInRpdGxlIiwicHJvbXB0IiwiZWxlbSIsImhhbmRsZU9uWWVzIiwiaGFuZGxlT25ObyIsImFkZCIsInBhcmVudCIsImNoaWxkIiwibm9kZVR5cGUiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwibmVzdGVkQ2hpbGQiLCJ0eXBlIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNoaWxkcmVuIiwiX2tleSIsImNvbnNvbGUiLCJsb2ciLCJfdHlwZW9mIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJqc3giLCJoYW5kbGVPbk1vdXNlTW92ZSIsImFydGljbGUiLCJvbm1vdXNlbW92ZSIsImhyZWYiLCJib2R5IiwibGJ1dHRvbiIsImRpYWxvZ0JveCJdLCJzb3VyY2VSb290IjoiIn0=