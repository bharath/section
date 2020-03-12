/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var deprecated = [{
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    paddingSize: {
      type: 'string'
    },
    paddingUnit: {
      type: 'string',
      default: 'px'
    },
    marginSize: {
      type: 'string'
    },
    marginUnit: {
      type: 'string',
      default: 'px'
    },
    tagName: {
      type: 'string',
      default: 'section'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  save: function save(_ref) {
    var _classnames;

    var className = _ref.className,
        attributes = _ref.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        tagName = attributes.tagName;
    var CustomTag = "".concat(tagName);
    var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
    var hasPadding = !!attributes.paddingSize;
    var hasMargin = !!attributes.marginSize;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, backgroundClass, textClass, (_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      'has-padding': hasPadding,
      'has-margin': hasMargin
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-".concat(attributes.paddingSize), hasPadding), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "margin-".concat(attributes.marginSize), hasMargin), _classnames));
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CustomTag, {
      className: classes,
      style: styles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "wp-block-oleti-section__inner-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var SectionEdit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SectionEdit, _Component);

  function SectionEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SectionEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SectionEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SectionEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor,
          className = _this$props.className,
          hasInnerBlocks = _this$props.hasInnerBlocks,
          isSelected = _this$props.isSelected;
      var tagName = attributes.tagName,
          paddingTop = attributes.paddingTop,
          paddingBottom = attributes.paddingBottom,
          marginTop = attributes.marginTop,
          marginBottom = attributes.marginBottom;
      var CustomTag = "".concat(tagName);
      var hasPaddingTop = !!attributes.paddingTop;
      var hasPaddingBottom = !!attributes.paddingBottom;
      var hasMarginTop = !!attributes.marginTop;
      var hasMarginBottom = !!attributes.marginBottom;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {
        'has-background': backgroundColor.color,
        'has-text-color': textColor.color
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textColor.class, textColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-top-".concat(attributes.paddingTop), hasPaddingTop), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-bottom-".concat(attributes.paddingBottom), hasPaddingBottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "margin-top-".concat(attributes.marginTop), hasMarginTop), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "margin-bottom-".concat(attributes.marginBottom), hasMarginBottom), _classnames));
      var styles = {
        backgroundColor: backgroundColor.color,
        color: textColor.color,
        paddingTop: paddingTop ? paddingTop + 'px' : undefined,
        paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
        marginTop: marginTop ? marginTop + 'px' : undefined,
        marginBottom: marginBottom ? marginBottom + 'px' : undefined
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_11__["default"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(CustomTag, {
        className: classes,
        style: styles
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "wp-block-oleti-section__inner-container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InnerBlocks"], {
        renderAppender: !hasInnerBlocks && _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InnerBlocks"].ButtonBlockAppender
      }))));
    }
  }]);

  return SectionEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["withColors"])('backgroundColor', {
  textColor: 'color'
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select, _ref) {
  var clientId = _ref.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var block = getBlock(clientId);
  return {
    hasInnerBlocks: !!(block && block.innerBlocks.length)
  };
})])(SectionEdit));

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M404 192h-84v-52c0-6.6-5.4-12-12-12H108c-6.6 0-12 5.4-12 12v168c0 6.6 5.4 12 12 12h84v52c0 6.6 5.4 12 12 12h200c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12zm-276 96V160h160v128zm256 64H224v-32h84c6.6 0 12-5.4 12-12v-84h64zm116-224c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v20H96V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v72c0 6.6 5.4 12 12 12h20v256H12c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12v-20h320v20c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12v-72c0-6.6-5.4-12-12-12h-20V128zM32 64h32v32H32zm32 384H32v-32h32zm352-52v20H96v-20c0-6.6-5.4-12-12-12H64V128h20c6.6 0 12-5.4 12-12V96h320v20c0 6.6 5.4 12 12 12h20v256h-20c-6.6 0-12 5.4-12 12zm64 52h-32v-32h32zM448 96V64h32v32z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('oleti/section', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Section', 'oleti'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('A Gutenberg block that allows you to add other blocks inside.', 'oleti'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'layout',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],

  /**
   * Optional block extended support features.
   */
  supports: {
    // Pick which alignment options to display ('left', 'right', 'center', 'wide','full').
    align: ['wide', 'full'],
    // Add the support for an anchor link.
    anchor: true,
    // Removes support for an HTML mode.
    html: false
  },
  // Make it easier to discover a block with keyword aliases.
  // These can be localised so your keywords work across locales.
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('section', 'oleti'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('group', 'oleti'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('container', 'oleti'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('row', 'oleti'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('wrapper', 'oleti')],
  // Specifying block attributes
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    paddingSize: {
      type: 'string'
    },
    paddingUnit: {
      type: 'string',
      default: 'px'
    },
    marginSize: {
      type: 'string'
    },
    marginUnit: {
      type: 'string',
      default: 'px'
    },
    tagName: {
      type: 'string',
      default: 'section'
    },
    paddingTop: {
      type: 'number'
    },
    paddingBottom: {
      type: 'number'
    },
    marginTop: {
      type: 'number'
    },
    marginBottom: {
      type: 'number'
    }
  },
  example: {
    attributes: {
      customBackgroundColor: '#ffffff',
      customTextColor: '#000000'
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#cf2e2e',
        fontSize: 'large',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('One.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#ff6900',
        fontSize: 'large',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Two.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#fcb900',
        fontSize: 'large',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Three.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#00d084',
        fontSize: 'large',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Four.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#0693e3',
        fontSize: 'large',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Five.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#9b51e0',
        fontSize: 'large',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Six.')
      }
    }]
  },

  /**
   * For grouping & ungrouping blocks into Section blocks.
   * Based on the Group block.
   *
   * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/group/index.js
   */
  transforms: {
    from: [{
      type: 'block',
      isMultiBlock: true,
      blocks: ['*'],
      __experimentalConvert: function __experimentalConvert(blocks) {
        // Avoid transforming a single `oleti/section` Block
        if (blocks.length === 1 && blocks[0].name === 'oleti/section') {
          return;
        }

        var alignments = ['wide', 'full']; // Determine the widest setting of all the blocks to be grouped

        var widestAlignment = blocks.reduce(function (accumulator, block) {
          var align = block.attributes.align;
          return alignments.indexOf(align) > alignments.indexOf(accumulator) ? align : accumulator;
        }, undefined); // Clone the Blocks to be Grouped
        // Failing to create new block references causes the original blocks
        // to be replaced in the switchToBlockType call thereby meaning they
        // are removed both from their original location and within the
        // new group block.

        var groupInnerBlocks = blocks.map(function (block) {
          return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(block.name, block.attributes, block.innerBlocks);
        });
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('oleti/section', {
          align: widestAlignment
        }, groupInnerBlocks);
      }
    }]
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   *
   * @return {WPElement} Element to render.
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by the block editor into `post_content`.
   *
   * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
   *
   * @return {WPElement} Element to render.
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);







/**
 * WordPress dependencies
 */





var _window = window,
    getComputedStyle = _window.getComputedStyle;
var applyFallbackStyles = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["withFallbackStyles"])(function (node, ownProps) {
  var _ownProps$attributes = ownProps.attributes,
      textColor = _ownProps$attributes.textColor,
      backgroundColor = _ownProps$attributes.backgroundColor;
  var editableNode = node.querySelector('[contenteditable="true"]');
  var computedStyles = editableNode ? getComputedStyle(editableNode) : null;
  return {
    fallbackBackgroundColor: backgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor,
    fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color
  };
});

var Inspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Inspector, _Component);

  function Inspector() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Inspector).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backgroundColor = _this$props.backgroundColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          setTextColor = _this$props.setTextColor,
          textColor = _this$props.textColor,
          fallbackTextColor = _this$props.fallbackTextColor,
          fallbackBackgroundColor = _this$props.fallbackBackgroundColor,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var tagName = attributes.tagName,
          paddingTop = attributes.paddingTop,
          paddingBottom = attributes.paddingBottom,
          marginTop = attributes.marginTop,
          marginBottom = attributes.marginBottom;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Spacing', 'oleti') //initialOpen={ false }

      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
        value: paddingTop,
        onChange: function onChange(newPaddingTop) {
          return setAttributes({
            paddingTop: newPaddingTop
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Padding Top'),
        min: 0,
        max: 100,
        initialPosition: 0,
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
        value: paddingBottom,
        onChange: function onChange(newPaddingBottom) {
          return setAttributes({
            paddingBottom: newPaddingBottom
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Padding Bottom'),
        min: 0,
        max: 100,
        initialPosition: 0,
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
        value: marginTop,
        onChange: function onChange(newMarginTop) {
          return setAttributes({
            marginTop: newMarginTop
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Margin Top'),
        min: 0,
        max: 100,
        initialPosition: 0,
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
        value: marginBottom,
        onChange: function onChange(newMarginBottom) {
          return setAttributes({
            marginBottom: newMarginBottom
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Margin Bottom'),
        min: 0,
        max: 100,
        initialPosition: 0,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Color Settings', 'oleti'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Background Color', 'oleti')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Text Color', 'oleti')
        }]
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ContrastChecker"], {
        textColor: textColor.color,
        backgroundColor: backgroundColor.color,
        fallbackTextColor: fallbackTextColor,
        fallbackBackgroundColor: fallbackBackgroundColor
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Layout', 'oleti'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('HTML Tag', 'oleti'),
        value: tagName,
        onChange: function onChange(value) {
          return setAttributes({
            tagName: value
          });
        },
        options: [{
          value: 'article',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('article', 'oleti')
        }, {
          value: 'aside',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('aside', 'oleti')
        }, {
          value: 'div',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('div', 'oleti')
        }, {
          value: 'footer',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('footer', 'oleti')
        }, {
          value: 'header',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('header', 'oleti')
        }, {
          value: 'main',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('main', 'oleti')
        }, {
          value: 'nav',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('nav', 'oleti')
        }, {
          value: 'section',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('section', 'oleti')
        }]
      }))));
    }
  }]);

  return Inspector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["withColors"])('backgroundColor', {
  textColor: 'color'
}), applyFallbackStyles])(Inspector));

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function save(_ref) {
  var _classnames;

  var className = _ref.className,
      attributes = _ref.attributes;
  var backgroundColor = attributes.backgroundColor,
      customBackgroundColor = attributes.customBackgroundColor,
      textColor = attributes.textColor,
      customTextColor = attributes.customTextColor,
      tagName = attributes.tagName,
      paddingTop = attributes.paddingTop,
      paddingBottom = attributes.paddingBottom,
      marginTop = attributes.marginTop,
      marginBottom = attributes.marginBottom;
  var CustomTag = "".concat(tagName);
  var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
  var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
  var hasPaddingTop = !!attributes.paddingTop;
  var hasPaddingBottom = !!attributes.paddingBottom;
  var hasMarginTop = !!attributes.marginTop;
  var hasMarginBottom = !!attributes.marginBottom;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, backgroundClass, textClass, (_classnames = {
    'has-text-color': textColor || customTextColor,
    'has-background': backgroundColor || customBackgroundColor
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-top-".concat(attributes.paddingTop), hasPaddingTop), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-bottom-".concat(attributes.paddingBottom), hasPaddingBottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "margin-top-".concat(attributes.marginTop), hasMarginTop), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "margin-bottom-".concat(attributes.marginBottom), hasMarginBottom), _classnames));
  var styles = {
    backgroundColor: backgroundClass ? undefined : customBackgroundColor,
    color: textClass ? undefined : customTextColor,
    paddingTop: paddingTop ? paddingTop + 'px' : undefined,
    paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
    marginTop: marginTop ? marginTop + 'px' : undefined,
    marginBottom: marginBottom ? marginBottom + 'px' : undefined
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CustomTag, {
    className: classes,
    style: styles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-oleti-section__inner-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map