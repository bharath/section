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
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/shared.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var deprecated = [{
  attributes: {
    align: {
      type: 'string' //default: 'wide',

    },
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
    tagName: {
      type: 'string',
      default: 'section'
    },
    paddingTop: {
      type: 'string',
      default: 'extra-small'
    },
    paddingBottom: {
      type: 'string',
      default: 'extra-small'
    },
    paddingLeft: {
      type: 'string',
      default: 'small'
    },
    paddingRight: {
      type: 'string',
      default: 'small'
    },
    marginTop: {
      type: 'number',
      default: 'none'
    },
    marginBottom: {
      type: 'number',
      default: 'none'
    },
    url: {
      type: 'string'
    },
    id: {
      type: 'number'
    },
    hasParallax: {
      type: 'boolean',
      default: false
    },
    backgroundType: {
      type: 'string',
      default: 'image'
    },
    focalPoint: {
      type: 'object'
    },
    bgOpacity: {
      type: 'number',
      default: 50
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
        tagName = attributes.tagName,
        url = attributes.url,
        backgroundType = attributes.backgroundType,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax;
    var CustomTag = "".concat(tagName);
    var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
    var hasPaddingTop = !!attributes.paddingTop;
    var hasPaddingRight = !!attributes.paddingRight;
    var hasPaddingBottom = !!attributes.paddingBottom;
    var hasPaddingLeft = !!attributes.paddingLeft;
    var hasMarginTop = !!attributes.marginTop;
    var hasMarginBottom = !!attributes.marginBottom;
    var hasBgOpacity = !!attributes.bgOpacity;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, backgroundClass, textClass, (_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-top-".concat(attributes.paddingTop), hasPaddingTop), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-right-".concat(attributes.paddingRight), hasPaddingRight), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-bottom-".concat(attributes.paddingBottom), hasPaddingBottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "padding-left-".concat(attributes.paddingLeft), hasPaddingLeft), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "margin-top-".concat(attributes.marginTop), hasMarginTop), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "margin-bottom-".concat(attributes.marginBottom), hasMarginBottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-parallax', hasParallax), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-background-overlay-".concat(attributes.bgOpacity), hasBgOpacity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-overlay', hasBgOpacity), _classnames));
    var style = backgroundType === _shared__WEBPACK_IMPORTED_MODULE_4__["IMAGE_BACKGROUND_TYPE"] ? Object(_shared__WEBPACK_IMPORTED_MODULE_4__["backgroundImageStyles"])(url) : {};

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CustomTag, {
      className: classes,
      style: style
    }, _shared__WEBPACK_IMPORTED_MODULE_4__["VIDEO_BACKGROUND_TYPE"] === backgroundType && url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", {
      className: "wp-block-section__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared */ "./src/shared.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SectionEdit, _Component);

  var _super = _createSuper(SectionEdit);

  function SectionEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SectionEdit);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SectionEdit, [{
    key: "render",
    value: function render() {
      var _classnames, _styleAttribute$spaci, _styleAttribute$visua;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor,
          className = _this$props.className,
          hasInnerBlocks = _this$props.hasInnerBlocks,
          isSelected = _this$props.isSelected;
      var url = attributes.url,
          backgroundType = attributes.backgroundType,
          focalPoint = attributes.focalPoint,
          hasParallax = attributes.hasParallax,
          styleAttribute = attributes.style,
          contentPosition = attributes.contentPosition;
      var BoxControlVisualizer = _wordpress_components__WEBPACK_IMPORTED_MODULE_11__["__experimentalBoxControl"].__Visualizer;
      var hasBgOpacity = !!attributes.bgOpacity;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {
        'has-background': backgroundColor.color,
        'has-text-color': textColor.color
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textColor.class, textColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-parallax', hasParallax), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-background-overlay-".concat(attributes.bgOpacity), hasBgOpacity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-overlay', hasBgOpacity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-custom-content-position', !Object(_shared__WEBPACK_IMPORTED_MODULE_13__["isContentPositionCenter"])(contentPosition)), _classnames), Object(_shared__WEBPACK_IMPORTED_MODULE_13__["getPositionClassName"])(contentPosition));
      var style = backgroundType === _shared__WEBPACK_IMPORTED_MODULE_13__["IMAGE_BACKGROUND_TYPE"] ? Object(_shared__WEBPACK_IMPORTED_MODULE_13__["backgroundImageStyles"])(url) : {};

      if (focalPoint && !hasParallax) {
        style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_12__["default"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["__experimentalBlock"].div, {
        className: classes,
        "data-url": url,
        style: style
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BoxControlVisualizer, {
        values: styleAttribute === null || styleAttribute === void 0 ? void 0 : (_styleAttribute$spaci = styleAttribute.spacing) === null || _styleAttribute$spaci === void 0 ? void 0 : _styleAttribute$spaci.padding,
        showValues: styleAttribute === null || styleAttribute === void 0 ? void 0 : (_styleAttribute$visua = styleAttribute.visualizers) === null || _styleAttribute$visua === void 0 ? void 0 : _styleAttribute$visua.padding
      }), _shared__WEBPACK_IMPORTED_MODULE_13__["IMAGE_BACKGROUND_TYPE"] === backgroundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
        "aria-hidden": true,
        alt: "",
        style: {
          display: 'none'
        },
        src: url
      }), _shared__WEBPACK_IMPORTED_MODULE_13__["VIDEO_BACKGROUND_TYPE"] === backgroundType && url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("video", {
        className: "wp-block-oleti-section__video-background",
        autoPlay: true,
        muted: true,
        loop: true,
        src: url
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InnerBlocks"], {
        renderAppender: hasInnerBlocks ? undefined : function () {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InnerBlocks"].ButtonBlockAppender, null);
        },
        __experimentalTagName: "div",
        __experimentalPassedProps: {
          className: 'wp-block-oleti-section__inner-container'
        }
      })));
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

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icons = {};
icons.section = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M512 256.01c0-9.98-5.81-18.94-14.77-22.81l-99.74-43.27 99.7-43.26c9-3.89 14.81-12.84 14.81-22.81s-5.81-18.92-14.77-22.79L271.94 3.33c-10.1-4.44-21.71-4.45-31.87-.02L14.81 101.06C5.81 104.95 0 113.9 0 123.87s5.81 18.92 14.77 22.79l99.73 43.28-99.7 43.26C5.81 237.08 0 246.03 0 256.01c0 9.97 5.81 18.92 14.77 22.79l99.72 43.26-99.69 43.25C5.81 369.21 0 378.16 0 388.14c0 9.97 5.81 18.92 14.77 22.79l225.32 97.76a40.066 40.066 0 0 0 15.9 3.31c5.42 0 10.84-1.1 15.9-3.31l225.29-97.74c9-3.89 14.81-12.84 14.81-22.81 0-9.98-5.81-18.94-14.77-22.81l-99.72-43.26 99.69-43.25c9-3.89 14.81-12.84 14.81-22.81zM45.23 123.87l208.03-90.26.03-.02c1.74-.71 3.65-.76 5.45.02l208.03 90.26-208.03 90.27c-1.81.77-3.74.77-5.48 0L45.23 123.87zm421.54 264.27L258.74 478.4c-1.81.77-3.74.77-5.48 0L45.23 388.13l110.76-48.06 84.11 36.49a40.066 40.066 0 0 0 15.9 3.31c5.42 0 10.84-1.1 15.9-3.31l84.11-36.49 110.76 48.07zm-208.03-41.87c-1.81.77-3.74.77-5.48 0L45.23 256 156 207.94l84.1 36.5a40.066 40.066 0 0 0 15.9 3.31c5.42 0 10.84-1.1 15.9-3.31l84.1-36.49 110.77 48.07-208.03 90.25z"
}));
icons.sectionMedia = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M112 192a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm0-64a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm304-96H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm0 416H32v-80h384zM85.2 336l52-69.33 40 53.33-12 16zm120 0l76-101.33 76 101.33zm210.8 0h-18.8L294 198.41c-6.06-8.07-19.56-8.07-25.62 0l-71.19 94.91L150 230.41c-6.06-8.07-19.56-8.07-25.62 0L45.18 336H32V64h384z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

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
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/icons.js");
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
  icon: {
    src: _icons__WEBPACK_IMPORTED_MODULE_5__["default"].section
  },

  /**
   * Optional block extended support features.
   */
  supports: {
    // Pick which alignment options to display ('left', 'right', 'center', 'wide','full').
    align: ['wide', 'full'],
    // Add the support for an anchor link.
    anchor: true,
    // Removes support for an HTML mode.
    html: false,
    lightBlockWrapper: true,
    __experimentalPadding: true //__experimentalColor: { gradients: true },

  },
  // Make it easier to discover a block with keyword aliases.
  // These can be localised so your keywords work across locales.
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('section', 'oleti'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('group', 'oleti'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('container', 'oleti'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('row', 'oleti'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('wrapper', 'oleti')],
  // Specifying block attributes
  attributes: {
    align: {
      type: 'string' //default: 'wide',

    },
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
    url: {
      type: 'string'
    },
    id: {
      type: 'number'
    },
    hasParallax: {
      type: 'boolean',
      default: false
    },
    backgroundType: {
      type: 'string',
      default: 'image'
    },
    focalPoint: {
      type: 'object'
    },
    bgOpacity: {
      type: 'number',
      default: 50
    },
    contentPosition: {
      type: 'string'
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
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('One.', 'oleti')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#ff6900',
        fontSize: 'large',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Two.', 'oleti')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#fcb900',
        fontSize: 'large',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Three.', 'oleti')
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons */ "./src/icons.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared */ "./src/shared.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */







var ALLOWED_MEDIA_TYPES = ['image', 'video'];
var _window = window,
    getComputedStyle = _window.getComputedStyle;
var applyFallbackStyles = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["withFallbackStyles"])(function (node, ownProps) {
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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Inspector, _Component);

  var _super = _createSuper(Inspector);

  function Inspector() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Inspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Inspector, [{
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
      var id = attributes.id,
          url = attributes.url,
          backgroundType = attributes.backgroundType,
          focalPoint = attributes.focalPoint,
          hasParallax = attributes.hasParallax,
          bgOpacity = attributes.bgOpacity,
          contentPosition = attributes.contentPosition;
      var onSelectMedia = Object(_shared__WEBPACK_IMPORTED_MODULE_12__["attributesFromMedia"])(setAttributes);

      var toggleParallax = function toggleParallax() {
        setAttributes(_objectSpread({
          hasParallax: !hasParallax
        }, !hasParallax ? {
          focalPoint: undefined
        } : {}));
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["__experimentalBlockAlignmentMatrixToolbar"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Change content position'),
        value: contentPosition,
        onChange: function onChange(nextPosition) {
          return setAttributes({
            contentPosition: nextPosition
          });
        }
      }), !!url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["MediaReplaceFlow"], {
        mediaId: id,
        mediaURL: url,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        accept: "image/*,video/*",
        onSelect: onSelectMedia
      }), !url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["MediaUpload"], {
        onSelect: onSelectMedia,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: backgroundType,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
            className: "components-toolbar__control",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Add background', 'oleti'),
            icon: _icons__WEBPACK_IMPORTED_MODULE_11__["default"].sectionMedia,
            onClick: open
          });
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["InspectorControls"], null, !url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Media', 'oleti')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["MediaUpload"], {
        onSelect: onSelectMedia,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: backgroundType,
        render: function render(_ref2) {
          var open = _ref2.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            className: "section-background-image__toggle",
            onClick: open
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Add background', 'oleti'));
        }
      }))), !!url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Media settings', 'oleti')
      }, _shared__WEBPACK_IMPORTED_MODULE_12__["IMAGE_BACKGROUND_TYPE"] === backgroundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fixed background', 'oleti'),
        checked: hasParallax,
        onChange: toggleParallax
      }), _shared__WEBPACK_IMPORTED_MODULE_12__["IMAGE_BACKGROUND_TYPE"] === backgroundType && !hasParallax && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["FocalPointPicker"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Focal point picker', 'oleti'),
        url: url,
        value: focalPoint,
        onChange: function onChange(newFocalPoint) {
          return setAttributes({
            focalPoint: newFocalPoint
          });
        }
      }), _shared__WEBPACK_IMPORTED_MODULE_12__["VIDEO_BACKGROUND_TYPE"] === backgroundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("video", {
        autoPlay: true,
        muted: true,
        loop: true,
        src: url
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        isSecondary: true,
        isSmall: true,
        className: "block-library-section__reset-button",
        onClick: function onClick() {
          return setAttributes({
            url: undefined,
            id: undefined,
            backgroundType: undefined,
            focalPoint: undefined,
            hasParallax: undefined
          });
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Clear Media', 'oleti')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Color Settings', 'oleti'),
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Background Color', 'oleti')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Text Color', 'oleti')
        }]
      }, !!url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Background Color opacity', 'oleti'),
        value: bgOpacity,
        onChange: function onChange(newBgOpacity) {
          return setAttributes({
            bgOpacity: newBgOpacity
          });
        },
        min: 0,
        max: 100,
        step: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ContrastChecker"], {
        textColor: textColor.color,
        backgroundColor: backgroundColor.color,
        fallbackTextColor: fallbackTextColor,
        fallbackBackgroundColor: fallbackBackgroundColor
      }))));
    }
  }]);

  return Inspector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["withColors"])('backgroundColor', {
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
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/shared.js");



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
      url = attributes.url,
      backgroundType = attributes.backgroundType,
      focalPoint = attributes.focalPoint,
      hasParallax = attributes.hasParallax,
      contentPosition = attributes.contentPosition;
  var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
  var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
  var hasBgOpacity = !!attributes.bgOpacity;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, backgroundClass, textClass, (_classnames = {
    'has-text-color': textColor || customTextColor,
    'has-background': backgroundColor || customBackgroundColor,
    'has-parallax': hasParallax
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-background-overlay-".concat(attributes.bgOpacity), hasBgOpacity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-overlay', hasBgOpacity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-custom-content-position', !Object(_shared__WEBPACK_IMPORTED_MODULE_4__["isContentPositionCenter"])(contentPosition)), _classnames), Object(_shared__WEBPACK_IMPORTED_MODULE_4__["getPositionClassName"])(contentPosition));
  var style = backgroundType === _shared__WEBPACK_IMPORTED_MODULE_4__["IMAGE_BACKGROUND_TYPE"] ? Object(_shared__WEBPACK_IMPORTED_MODULE_4__["backgroundImageStyles"])(url) : {};

  if (focalPoint && !hasParallax) {
    style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes,
    style: style
  }, _shared__WEBPACK_IMPORTED_MODULE_4__["VIDEO_BACKGROUND_TYPE"] === backgroundType && url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", {
    className: "wp-block-oleti-section__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    src: url
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-oleti-section__inner-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)));
}

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/*! exports provided: IMAGE_BACKGROUND_TYPE, VIDEO_BACKGROUND_TYPE, backgroundImageStyles, attributesFromMedia, getPositionClassName, isContentPositionCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_BACKGROUND_TYPE", function() { return IMAGE_BACKGROUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_BACKGROUND_TYPE", function() { return VIDEO_BACKGROUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImageStyles", function() { return backgroundImageStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesFromMedia", function() { return attributesFromMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionClassName", function() { return getPositionClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isContentPositionCenter", function() { return isContentPositionCenter; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var POSITION_CLASSNAMES = {
  'top left': 'is-position-top-left',
  'top center': 'is-position-top-center',
  'top right': 'is-position-top-right',
  'center left': 'is-position-center-left',
  'center center': 'is-position-center-center',
  center: 'is-position-center-center',
  'center right': 'is-position-center-right',
  'bottom left': 'is-position-bottom-left',
  'bottom center': 'is-position-bottom-center',
  'bottom right': 'is-position-bottom-right'
};
var IMAGE_BACKGROUND_TYPE = 'image';
var VIDEO_BACKGROUND_TYPE = 'video';
function backgroundImageStyles(url) {
  return url ? {
    backgroundImage: "url(".concat(url, ")")
  } : {};
}
function attributesFromMedia(setAttributes) {
  return function (media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        id: undefined
      });
      return;
    }

    var mediaType; // for media selections originated from a file upload.

    if (media.media_type) {
      if (media.media_type === IMAGE_BACKGROUND_TYPE) {
        mediaType = IMAGE_BACKGROUND_TYPE;
      } else {
        // only images and videos are accepted so if the media_type is not an image we can assume it is a video.
        // Videos contain the media type of 'file' in the object returned from the rest api.
        mediaType = VIDEO_BACKGROUND_TYPE;
      }
    } else {
      // for media selections originated from existing files in the media library.
      if (media.type !== IMAGE_BACKGROUND_TYPE && media.type !== VIDEO_BACKGROUND_TYPE) {
        return;
      }

      mediaType = media.type;
    }

    setAttributes(_objectSpread({
      url: media.url,
      id: media.id,
      backgroundType: mediaType
    }, mediaType === VIDEO_BACKGROUND_TYPE ? {
      focalPoint: undefined,
      hasParallax: undefined
    } : {}));
  };
}
function getPositionClassName(contentPosition) {
  if (contentPosition === undefined) return '';
  return POSITION_CLASSNAMES[contentPosition];
}
function isContentPositionCenter(contentPosition) {
  return !contentPosition || contentPosition === 'center center' || contentPosition === 'center';
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