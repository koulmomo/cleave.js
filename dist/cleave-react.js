(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Cleave"] = factory(require("react"));
	else
		root["Cleave"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NumeralFormatter = __webpack_require__(2);

	var _NumeralFormatter2 = _interopRequireDefault(_NumeralFormatter);

	var _DateFormatter = __webpack_require__(3);

	var _DateFormatter2 = _interopRequireDefault(_DateFormatter);

	var _TimeFormatter = __webpack_require__(4);

	var _TimeFormatter2 = _interopRequireDefault(_TimeFormatter);

	var _PhoneFormatter = __webpack_require__(5);

	var _PhoneFormatter2 = _interopRequireDefault(_PhoneFormatter);

	var _CreditCardDetector = __webpack_require__(6);

	var _CreditCardDetector2 = _interopRequireDefault(_CreditCardDetector);

	var _Util = __webpack_require__(7);

	var _Util2 = _interopRequireDefault(_Util);

	var _DefaultProperties = __webpack_require__(8);

	var _DefaultProperties2 = _interopRequireDefault(_DefaultProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CleaveReact = function (_Component) {
	  _inherits(CleaveReact, _Component);

	  function CleaveReact(props) {
	    _classCallCheck(this, CleaveReact);

	    var _this = _possibleConstructorReturn(this, (CleaveReact.__proto__ || Object.getPrototypeOf(CleaveReact)).call(this, props));

	    _initialiseProps.call(_this);

	    var owner = _this,
	        _owner$props = owner.props,
	        value = _owner$props.value,
	        options = _owner$props.options,
	        onKeyDown = _owner$props.onKeyDown,
	        onChange = _owner$props.onChange,
	        onFocus = _owner$props.onFocus,
	        onBlur = _owner$props.onBlur,
	        onInit = _owner$props.onInit;


	    owner.registeredEvents = {
	      onInit: onInit || _Util2.default.noop,
	      onChange: onChange || _Util2.default.noop,
	      onFocus: onFocus || _Util2.default.noop,
	      onBlur: onBlur || _Util2.default.noop,
	      onKeyDown: onKeyDown || _Util2.default.noop
	    };

	    if (!options) {
	      options = {};
	    }

	    options.initValue = value;

	    owner.properties = _DefaultProperties2.default.assign({}, options);

	    _this.setState({
	      value: owner.properties.result,
	      cursorPosition: 0
	    });
	    return _this;
	  }

	  _createClass(CleaveReact, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.init();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var nextProps = this.props;

	      var owner = this,
	          phoneRegionCode = (nextProps.options || {}).phoneRegionCode,
	          newValue = nextProps.value;

	      if (newValue !== undefined) {
	        newValue = newValue.toString();

	        if (newValue !== owner.properties.initValue && newValue !== owner.properties.result) {
	          owner.properties.initValue = newValue;
	          owner.onInput(newValue, true);
	        }
	      }

	      // update phone region code
	      if (phoneRegionCode && phoneRegionCode !== owner.properties.phoneRegionCode) {
	        owner.properties.phoneRegionCode = phoneRegionCode;
	        owner.initPhoneFormatter();
	        owner.onInput(owner.properties.result);
	      }

	      var pps = owner.properties;

	      _Util2.default.setSelection(owner.element, owner.state.cursorPosition, pps.document);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var owner = this;
	      // eslint-disable-next-line

	      var _owner$props2 = owner.props,
	          value = _owner$props2.value,
	          options = _owner$props2.options,
	          onKeyDown = _owner$props2.onKeyDown,
	          onFocus = _owner$props2.onFocus,
	          onBlur = _owner$props2.onBlur,
	          onChange = _owner$props2.onChange,
	          onInit = _owner$props2.onInit,
	          htmlRef = _owner$props2.htmlRef,
	          propsToTransfer = _objectWithoutProperties(_owner$props2, ['value', 'options', 'onKeyDown', 'onFocus', 'onBlur', 'onChange', 'onInit', 'htmlRef']);

	      return _react2.default.createElement('input', _extends({
	        type: 'text',
	        ref: function ref(_ref) {
	          owner.element = _ref;

	          if (!htmlRef) {
	            return;
	          }

	          htmlRef.apply(this, arguments);
	        },
	        value: owner.state.value,
	        onKeyDown: owner.onKeyDown,
	        onChange: owner.onChange,
	        onFocus: owner.onFocus,
	        onBlur: owner.onBlur
	      }, propsToTransfer));
	    }
	  }]);

	  return CleaveReact;
	}(_react.Component);

	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;

	  this.init = function () {
	    var owner = _this2,
	        pps = owner.properties;

	    // so no need for this lib at all
	    if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.time && !pps.date && pps.blocksLength === 0 && !pps.prefix) {
	      owner.onInput(pps.initValue);
	      owner.registeredEvents.onInit(owner);

	      return;
	    }

	    pps.maxLength = _Util2.default.getMaxLength(pps.blocks);

	    owner.isAndroid = _Util2.default.isAndroid();

	    owner.initPhoneFormatter();
	    owner.initDateFormatter();
	    owner.initTimeFormatter();
	    owner.initNumeralFormatter();

	    // avoid touch input field if value is null
	    // otherwise Firefox will add red box-shadow for <input required />
	    if (pps.initValue || pps.prefix && !pps.noImmediatePrefix) {
	      owner.onInput(pps.initValue);
	    }

	    owner.registeredEvents.onInit(owner);
	  };

	  this.initNumeralFormatter = function () {
	    var owner = _this2,
	        pps = owner.properties;

	    if (!pps.numeral) {
	      return;
	    }

	    pps.numeralFormatter = new _NumeralFormatter2.default(pps.numeralDecimalMark, pps.numeralIntegerScale, pps.numeralDecimalScale, pps.numeralThousandsGroupStyle, pps.numeralPositiveOnly, pps.stripLeadingZeroes, pps.delimiter);
	  };

	  this.initTimeFormatter = function () {
	    var owner = _this2,
	        pps = owner.properties;

	    if (!pps.time) {
	      return;
	    }

	    pps.timeFormatter = new _TimeFormatter2.default(pps.timePattern);
	    pps.blocks = pps.timeFormatter.getBlocks();
	    pps.blocksLength = pps.blocks.length;
	    pps.maxLength = _Util2.default.getMaxLength(pps.blocks);
	  };

	  this.initDateFormatter = function () {
	    var owner = _this2,
	        pps = owner.properties;

	    if (!pps.date) {
	      return;
	    }

	    pps.dateFormatter = new _DateFormatter2.default(pps.datePattern);
	    pps.blocks = pps.dateFormatter.getBlocks();
	    pps.blocksLength = pps.blocks.length;
	    pps.maxLength = _Util2.default.getMaxLength(pps.blocks);
	  };

	  this.initPhoneFormatter = function () {
	    var owner = _this2,
	        pps = owner.properties;

	    if (!pps.phone) {
	      return;
	    }

	    // Cleave.AsYouTypeFormatter should be provided by
	    // external google closure lib
	    try {
	      pps.phoneFormatter = new _PhoneFormatter2.default(new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode), pps.delimiter);
	    } catch (ex) {
	      throw new Error('Please include phone-type-formatter.{country}.js lib');
	    }
	  };

	  this.setRawValue = function (value) {
	    var owner = _this2,
	        pps = owner.properties;

	    value = value !== undefined && value !== null ? value.toString() : '';

	    if (pps.numeral) {
	      value = value.replace('.', pps.numeralDecimalMark);
	    }

	    pps.backspace = false;

	    owner.onChange({
	      target: { value: value },
	      // Methods to better resemble a SyntheticEvent
	      stopPropagation: _Util2.default.noop,
	      preventDefault: _Util2.default.noop,
	      persist: _Util2.default.noop
	    });
	  };

	  this.getRawValue = function () {
	    var owner = _this2,
	        pps = owner.properties,
	        rawValue = pps.result;

	    if (pps.rawValueTrimPrefix) {
	      rawValue = _Util2.default.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength, pps.result);
	    }

	    if (pps.numeral) {
	      rawValue = pps.numeralFormatter ? pps.numeralFormatter.getRawValue(rawValue) : '';
	    } else {
	      rawValue = _Util2.default.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
	    }

	    return rawValue;
	  };

	  this.getISOFormatDate = function () {
	    var owner = _this2,
	        pps = owner.properties;

	    return pps.date ? pps.dateFormatter.getISOFormatDate() : '';
	  };

	  this.onInit = function (owner) {
	    return owner;
	  };

	  this.onKeyDown = function (event) {
	    var owner = _this2,
	        pps = owner.properties,
	        charCode = event.which || event.keyCode;

	    // hit backspace when last character is delimiter
	    if (charCode === 8 && _Util2.default.isDelimiter(pps.result.slice(-pps.delimiterLength), pps.delimiter, pps.delimiters)) {
	      pps.backspace = true;
	    } else {
	      pps.backspace = false;
	    }

	    owner.registeredEvents.onKeyDown(event);
	  };

	  this.onFocus = function (event) {
	    var owner = _this2,
	        pps = owner.properties;

	    event.target.rawValue = owner.getRawValue();
	    event.target.value = pps.result;

	    owner.registeredEvents.onFocus(event);

	    _Util2.default.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
	  };

	  this.onBlur = function (event) {
	    var owner = _this2,
	        pps = owner.properties;

	    event.target.rawValue = owner.getRawValue();
	    event.target.value = pps.result;

	    owner.registeredEvents.onBlur(event);
	  };

	  this.onChange = function (event) {
	    var owner = _this2,
	        pps = owner.properties;

	    owner.onInput(event.target.value);

	    event.target.rawValue = owner.getRawValue();
	    event.target.value = pps.result;

	    owner.registeredEvents.onChange(event);
	  };

	  this.onInput = function (value, fromProps) {
	    var owner = _this2,
	        pps = owner.properties;

	    if (_Util2.default.isAndroidBackspaceKeydown(owner.lastInputValue, owner.element.value) && _Util2.default.isDelimiter(pps.result.slice(-pps.delimiterLength), pps.delimiter, pps.delimiters)) {
	      pps.backspace = true;
	    }

	    // case 1: delete one more character "4"
	    // 1234*| -> hit backspace -> 123|
	    // case 2: last character is not delimiter which is:
	    // 12|34* -> hit backspace -> 1|34*

	    if (!fromProps && !pps.numeral && pps.backspace && !_Util2.default.isDelimiter(value.slice(-pps.delimiterLength), pps.delimiter, pps.delimiters)) {
	      value = _Util2.default.headStr(value, value.length - pps.delimiterLength);
	    }

	    // phone formatter
	    if (pps.phone) {
	      pps.result = pps.phoneFormatter.format(value);
	      owner.updateValueState();

	      return;
	    }

	    // numeral formatter
	    if (pps.numeral) {
	      if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	        pps.result = pps.prefix + pps.numeralFormatter.format(value);
	      } else {
	        pps.result = pps.numeralFormatter.format(value);
	      }
	      owner.updateValueState();

	      return;
	    }

	    // date
	    if (pps.date) {
	      value = pps.dateFormatter.getValidatedDate(value);
	    }

	    // time
	    if (pps.time) {
	      value = pps.timeFormatter.getValidatedTime(value);
	    }

	    // strip delimiters
	    value = _Util2.default.stripDelimiters(value, pps.delimiter, pps.delimiters);

	    // strip prefix
	    value = _Util2.default.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength, pps.result);

	    // strip non-numeric characters
	    value = pps.numericOnly ? _Util2.default.strip(value, /[^\d]/g) : value;

	    // convert case
	    value = pps.uppercase ? value.toUpperCase() : value;
	    value = pps.lowercase ? value.toLowerCase() : value;

	    // prefix
	    if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	      value = pps.prefix + value;

	      // no blocks specified, no need to do formatting
	      if (pps.blocksLength === 0) {
	        pps.result = value;
	        owner.updateValueState();

	        return;
	      }
	    }

	    // update credit card props
	    if (pps.creditCard) {
	      owner.updateCreditCardPropsByValue(value);
	    }

	    // strip over length characters
	    value = pps.maxLength > 0 ? _Util2.default.headStr(value, pps.maxLength) : value;

	    // apply blocks
	    pps.result = _Util2.default.getFormattedValue(value, pps.blocks, pps.blocksLength, pps.delimiter, pps.delimiters, pps.delimiterLazyShow);

	    owner.updateValueState();
	  };

	  this.updateCreditCardPropsByValue = function (value) {
	    var owner = _this2,
	        pps = owner.properties,
	        creditCardInfo;

	    // At least one of the first 4 characters has changed
	    if (_Util2.default.headStr(pps.result, 4) === _Util2.default.headStr(value, 4)) {
	      return;
	    }

	    creditCardInfo = _CreditCardDetector2.default.getInfo(value, pps.creditCardStrictMode);

	    pps.blocks = creditCardInfo.blocks;
	    pps.blocksLength = pps.blocks.length;
	    pps.maxLength = _Util2.default.getMaxLength(pps.blocks);

	    // credit card type changed
	    if (pps.creditCardType !== creditCardInfo.type) {
	      pps.creditCardType = creditCardInfo.type;

	      pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
	    }
	  };

	  this.updateValueState = function () {
	    var owner = _this2,
	        pps = owner.properties;

	    if (!owner.element) {
	      owner.setState({ value: pps.result });
	    }

	    var endPos = owner.element.selectionEnd;
	    var oldValue = owner.element.value;
	    var newValue = pps.result;

	    owner.lastInputValue = newValue;

	    endPos = _Util2.default.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters);

	    if (owner.isAndroid) {
	      window.setTimeout(function () {
	        owner.setState({ value: newValue, cursorPosition: endPos });
	      }, 1);

	      return;
	    }

	    owner.setState({ value: newValue, cursorPosition: endPos });
	  };
	};

	exports.default = CleaveReact;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var NumeralFormatter = function NumeralFormatter(numeralDecimalMark, numeralIntegerScale, numeralDecimalScale, numeralThousandsGroupStyle, numeralPositiveOnly, stripLeadingZeroes, delimiter) {
	    var owner = this;

	    owner.numeralDecimalMark = numeralDecimalMark || '.';
	    owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
	    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
	    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
	    owner.numeralPositiveOnly = !!numeralPositiveOnly;
	    owner.stripLeadingZeroes = stripLeadingZeroes !== false;
	    owner.delimiter = delimiter || delimiter === '' ? delimiter : ',';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
	};

	NumeralFormatter.groupStyle = {
	    thousand: 'thousand',
	    lakh: 'lakh',
	    wan: 'wan',
	    none: 'none'
	};

	NumeralFormatter.prototype = {
	    getRawValue: function getRawValue(value) {
	        return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
	    },

	    format: function format(value) {
	        var owner = this,
	            parts,
	            partInteger,
	            partDecimal = '';

	        // strip alphabet letters
	        value = value.replace(/[A-Za-z]/g, '')
	        // replace the first decimal mark with reserved placeholder
	        .replace(owner.numeralDecimalMark, 'M')

	        // strip non numeric letters except minus and "M"
	        // this is to ensure prefix has been stripped
	        .replace(/[^\dM-]/g, '')

	        // replace the leading minus with reserved placeholder
	        .replace(/^\-/, 'N')

	        // strip the other minus sign (if present)
	        .replace(/\-/g, '')

	        // replace the minus sign (if present)
	        .replace('N', owner.numeralPositiveOnly ? '' : '-')

	        // replace decimal mark
	        .replace('M', owner.numeralDecimalMark);

	        // strip any leading zeros
	        if (owner.stripLeadingZeroes) {
	            value = value.replace(/^(-)?0+(?=\d)/, '$1');
	        }

	        partInteger = value;

	        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
	            parts = value.split(owner.numeralDecimalMark);
	            partInteger = parts[0];
	            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
	        }

	        if (owner.numeralIntegerScale > 0) {
	            partInteger = partInteger.slice(0, owner.numeralIntegerScale + (value.slice(0, 1) === '-' ? 1 : 0));
	        }

	        switch (owner.numeralThousandsGroupStyle) {
	            case NumeralFormatter.groupStyle.lakh:
	                partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);

	                break;

	            case NumeralFormatter.groupStyle.wan:
	                partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);

	                break;

	            case NumeralFormatter.groupStyle.thousand:
	                partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);

	                break;
	        }

	        return partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '');
	    }
	};

	module.exports = NumeralFormatter;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var DateFormatter = function DateFormatter(datePattern) {
	    var owner = this;

	    owner.date = [];
	    owner.blocks = [];
	    owner.datePattern = datePattern;
	    owner.initBlocks();
	};

	DateFormatter.prototype = {
	    initBlocks: function initBlocks() {
	        var owner = this;
	        owner.datePattern.forEach(function (value) {
	            if (value === 'Y') {
	                owner.blocks.push(4);
	            } else {
	                owner.blocks.push(2);
	            }
	        });
	    },

	    getISOFormatDate: function getISOFormatDate() {
	        var owner = this,
	            date = owner.date;

	        return date[2] ? date[2] + '-' + owner.addLeadingZero(date[1]) + '-' + owner.addLeadingZero(date[0]) : '';
	    },

	    getBlocks: function getBlocks() {
	        return this.blocks;
	    },

	    getValidatedDate: function getValidatedDate(value) {
	        var owner = this,
	            result = '';

	        value = value.replace(/[^\d]/g, '');

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.datePattern[index]) {
	                    case 'd':
	                        if (sub === '00') {
	                            sub = '01';
	                        } else if (parseInt(sub0, 10) > 3) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > 31) {
	                            sub = '31';
	                        }

	                        break;

	                    case 'm':
	                        if (sub === '00') {
	                            sub = '01';
	                        } else if (parseInt(sub0, 10) > 1) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > 12) {
	                            sub = '12';
	                        }

	                        break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedDateString(result);
	    },

	    getFixedDateString: function getFixedDateString(value) {
	        var owner = this,
	            datePattern = owner.datePattern,
	            date = [],
	            dayIndex = 0,
	            monthIndex = 0,
	            yearIndex = 0,
	            dayStartIndex = 0,
	            monthStartIndex = 0,
	            yearStartIndex = 0,
	            day,
	            month,
	            year,
	            fullYearDone = false;

	        // mm-dd || dd-mm
	        if (value.length === 4 && datePattern[0].toLowerCase() !== 'y' && datePattern[1].toLowerCase() !== 'y') {
	            dayStartIndex = datePattern[0] === 'd' ? 0 : 2;
	            monthStartIndex = 2 - dayStartIndex;
	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);

	            date = this.getFixedDate(day, month, 0);
	        }

	        // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd
	        if (value.length === 8) {
	            datePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 'd':
	                        dayIndex = index;
	                        break;
	                    case 'm':
	                        monthIndex = index;
	                        break;
	                    default:
	                        yearIndex = index;
	                        break;
	                }
	            });

	            yearStartIndex = yearIndex * 2;
	            dayStartIndex = dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2;
	            monthStartIndex = monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2;

	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = this.getFixedDate(day, month, year);
	        }

	        owner.date = date;

	        return date.length === 0 ? value : datePattern.reduce(function (previous, current) {
	            switch (current) {
	                case 'd':
	                    return previous + owner.addLeadingZero(date[0]);
	                case 'm':
	                    return previous + owner.addLeadingZero(date[1]);
	                default:
	                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2]) : '');
	            }
	        }, '');
	    },

	    getFixedDate: function getFixedDate(day, month, year) {
	        day = Math.min(day, 31);
	        month = Math.min(month, 12);
	        year = parseInt(year || 0, 10);

	        if (month < 7 && month % 2 === 0 || month > 8 && month % 2 === 1) {
	            day = Math.min(day, month === 2 ? this.isLeapYear(year) ? 29 : 28 : 30);
	        }

	        return [day, month, year];
	    },

	    isLeapYear: function isLeapYear(year) {
	        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	    },

	    addLeadingZero: function addLeadingZero(number) {
	        return (number < 10 ? '0' : '') + number;
	    },

	    addLeadingZeroForYear: function addLeadingZeroForYear(number) {
	        return (number < 10 ? '000' : number < 100 ? '00' : number < 1000 ? '0' : '') + number;
	    }
	};

	module.exports = DateFormatter;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var TimeFormatter = function TimeFormatter(timePattern) {
	    var owner = this;

	    owner.time = [];
	    owner.blocks = [];
	    owner.timePattern = timePattern;
	    owner.initBlocks();
	};

	TimeFormatter.prototype = {
	    initBlocks: function initBlocks() {
	        var owner = this;
	        owner.timePattern.forEach(function () {
	            owner.blocks.push(2);
	        });
	    },

	    getISOFormatTime: function getISOFormatTime() {
	        var owner = this,
	            time = owner.time;

	        return time[2] ? owner.addLeadingZero(time[0]) + ':' + owner.addLeadingZero(time[1]) + ':' + owner.addLeadingZero(time[2]) : '';
	    },

	    getBlocks: function getBlocks() {
	        return this.blocks;
	    },

	    getValidatedTime: function getValidatedTime(value) {
	        var owner = this,
	            result = '';

	        value = value.replace(/[^\d]/g, '');

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.timePattern[index]) {

	                    case 'h':
	                        if (parseInt(sub0, 10) > 2) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > 23) {
	                            sub = '23';
	                        }

	                        break;

	                    case 'm':
	                    case 's':
	                        if (parseInt(sub0, 10) > 5) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > 60) {
	                            sub = '60';
	                        }
	                        break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedTimeString(result);
	    },

	    getFixedTimeString: function getFixedTimeString(value) {
	        var owner = this,
	            timePattern = owner.timePattern,
	            time = [],
	            secondIndex = 0,
	            minuteIndex = 0,
	            hourIndex = 0,
	            secondStartIndex = 0,
	            minuteStartIndex = 0,
	            hourStartIndex = 0,
	            second,
	            minute,
	            hour;

	        if (value.length === 6) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 's':
	                        secondIndex = index * 2;
	                        break;
	                    case 'm':
	                        minuteIndex = index * 2;
	                        break;
	                    case 'h':
	                        hourIndex = index * 2;
	                        break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;
	            secondStartIndex = secondIndex;

	            second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        if (value.length === 4 && owner.timePattern.indexOf('s') < 0) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 'm':
	                        minuteIndex = index * 2;
	                        break;
	                    case 'h':
	                        hourIndex = index * 2;
	                        break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;

	            second = 0;
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        owner.time = time;

	        return time.length === 0 ? value : timePattern.reduce(function (previous, current) {
	            switch (current) {
	                case 's':
	                    return previous + owner.addLeadingZero(time[2]);
	                case 'm':
	                    return previous + owner.addLeadingZero(time[1]);
	                case 'h':
	                    return previous + owner.addLeadingZero(time[0]);
	            }
	        }, '');
	    },

	    getFixedTime: function getFixedTime(hour, minute, second) {
	        second = Math.min(parseInt(second || 0, 10), 60);
	        minute = Math.min(minute, 60);
	        hour = Math.min(hour, 60);

	        return [hour, minute, second];
	    },

	    addLeadingZero: function addLeadingZero(number) {
	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = TimeFormatter;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	var PhoneFormatter = function PhoneFormatter(formatter, delimiter) {
	    var owner = this;

	    owner.delimiter = delimiter || delimiter === '' ? delimiter : ' ';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

	    owner.formatter = formatter;
	};

	PhoneFormatter.prototype = {
	    setFormatter: function setFormatter(formatter) {
	        this.formatter = formatter;
	    },

	    format: function format(phoneNumber) {
	        var owner = this;

	        owner.formatter.clear();

	        // only keep number and +
	        phoneNumber = phoneNumber.replace(/[^\d+]/g, '');

	        // strip non-leading +
	        phoneNumber = phoneNumber.replace(/^\+/, 'B').replace(/\+/g, '').replace('B', '+');

	        // strip delimiter
	        phoneNumber = phoneNumber.replace(owner.delimiterRE, '');

	        var result = '',
	            current,
	            validated = false;

	        for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
	            current = owner.formatter.inputDigit(phoneNumber.charAt(i));

	            // has ()- or space inside
	            if (/[\s()-]/g.test(current)) {
	                result = current;

	                validated = true;
	            } else {
	                if (!validated) {
	                    result = current;
	                }
	                // else: over length input
	                // it turns to invalid number again
	            }
	        }

	        // strip ()
	        // e.g. US: 7161234567 returns (716) 123-4567
	        result = result.replace(/[()]/g, '');
	        // replace library delimiter with user customized delimiter
	        result = result.replace(/[\s-]/g, owner.delimiter);

	        return result;
	    }
	};

	module.exports = PhoneFormatter;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	var CreditCardDetector = {
	    blocks: {
	        uatp: [4, 5, 6],
	        amex: [4, 6, 5],
	        diners: [4, 6, 4],
	        discover: [4, 4, 4, 4],
	        mastercard: [4, 4, 4, 4],
	        dankort: [4, 4, 4, 4],
	        instapayment: [4, 4, 4, 4],
	        jcb15: [4, 6, 5],
	        jcb: [4, 4, 4, 4],
	        maestro: [4, 4, 4, 4],
	        visa: [4, 4, 4, 4],
	        mir: [4, 4, 4, 4],
	        unionPay: [4, 4, 4, 4],
	        general: [4, 4, 4, 4],
	        generalStrict: [4, 4, 4, 7]
	    },

	    re: {
	        // starts with 1; 15 digits, not starts with 1800 (jcb card)
	        uatp: /^(?!1800)1\d{0,14}/,

	        // starts with 34/37; 15 digits
	        amex: /^3[47]\d{0,13}/,

	        // starts with 6011/65/644-649; 16 digits
	        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

	        // starts with 300-305/309 or 36/38/39; 14 digits
	        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

	        // starts with 51-55/2221–2720; 16 digits
	        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

	        // starts with 5019/4175/4571; 16 digits
	        dankort: /^(5019|4175|4571)\d{0,12}/,

	        // starts with 637-639; 16 digits
	        instapayment: /^63[7-9]\d{0,13}/,

	        // starts with 2131/1800; 15 digits
	        jcb15: /^(?:2131|1800)\d{0,11}/,

	        // starts with 2131/1800/35; 16 digits
	        jcb: /^(?:35\d{0,2})\d{0,12}/,

	        // starts with 50/56-58/6304/67; 16 digits
	        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

	        // starts with 22; 16 digits
	        mir: /^220[0-4]\d{0,12}/,

	        // starts with 4; 16 digits
	        visa: /^4\d{0,15}/,

	        // starts with 62; 16 digits
	        unionPay: /^62\d{0,14}/
	    },

	    getInfo: function getInfo(value, strictMode) {
	        var blocks = CreditCardDetector.blocks,
	            re = CreditCardDetector.re;

	        // Some credit card can have up to 19 digits number.
	        // Set strictMode to true will remove the 16 max-length restrain,
	        // however, I never found any website validate card number like
	        // this, hence probably you don't want to enable this option.
	        strictMode = !!strictMode;

	        for (var key in re) {
	            if (re[key].test(value)) {
	                var block;

	                if (strictMode) {
	                    block = blocks.generalStrict;
	                } else {
	                    block = blocks[key];
	                }

	                return {
	                    type: key,
	                    blocks: block
	                };
	            }
	        }

	        return {
	            type: 'unknown',
	            blocks: strictMode ? blocks.generalStrict : blocks.general
	        };
	    }
	};

	module.exports = CreditCardDetector;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	var Util = {
	    noop: function noop() {},

	    strip: function strip(value, re) {
	        return value.replace(re, '');
	    },

	    isDelimiter: function isDelimiter(letter, delimiter, delimiters) {
	        // single delimiter
	        if (delimiters.length === 0) {
	            return letter === delimiter;
	        }

	        // multiple delimiters
	        return delimiters.some(function (current) {
	            if (letter === current) {
	                return true;
	            }
	        });
	    },

	    getDelimiterREByDelimiter: function getDelimiterREByDelimiter(delimiter) {
	        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
	    },

	    getNextCursorPosition: function getNextCursorPosition(prevPos, oldValue, newValue, delimiter, delimiters) {
	        // If cursor was at the end of value, just place it back.
	        // Because new value could contain additional chars.
	        if (oldValue.length === prevPos) {
	            return newValue.length;
	        }

	        return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters);
	    },

	    getPositionOffset: function getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters) {
	        var oldRawValue, newRawValue, lengthOffset;

	        oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
	        newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
	        lengthOffset = oldRawValue.length - newRawValue.length;

	        return lengthOffset !== 0 ? lengthOffset / Math.abs(lengthOffset) : 0;
	    },

	    stripDelimiters: function stripDelimiters(value, delimiter, delimiters) {
	        var owner = this;

	        // single delimiter
	        if (delimiters.length === 0) {
	            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : '';

	            return value.replace(delimiterRE, '');
	        }

	        // multiple delimiters
	        delimiters.forEach(function (current) {
	            value = value.replace(owner.getDelimiterREByDelimiter(current), '');
	        });

	        return value;
	    },

	    headStr: function headStr(str, length) {
	        return str.slice(0, length);
	    },

	    getMaxLength: function getMaxLength(blocks) {
	        return blocks.reduce(function (previous, current) {
	            return previous + current;
	        }, 0);
	    },

	    // strip value by prefix length
	    // for prefix: PRE
	    // (PRE123, 3) -> 123
	    // (PR123, 3) -> 23 this happens when user hits backspace in front of "PRE"
	    getPrefixStrippedValue: function getPrefixStrippedValue(value, prefix, prefixLength, prevValue) {
	        if (value.slice(0, prefixLength) !== prefix) {

	            // Check whether if it is a deletion
	            if (value.length < prevValue.length) {
	                value = value.length > prefixLength ? prevValue : prefix;
	            } else {
	                var diffIndex = this.getFirstDiffIndex(prefix, value.slice(0, prefixLength));
	                value = prefix + value.slice(diffIndex, diffIndex + 1) + value.slice(prefixLength + 1);
	            }
	        }

	        return value.slice(prefixLength);
	    },

	    getFirstDiffIndex: function getFirstDiffIndex(prev, current) {
	        var index = 0;

	        while (prev.charAt(index) === current.charAt(index)) {
	            if (prev.charAt(index++) === '') {
	                return -1;
	            }
	        }

	        return index;
	    },

	    getFormattedValue: function getFormattedValue(value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
	        var result = '',
	            multipleDelimiters = delimiters.length > 0,
	            currentDelimiter;

	        // no options, normal input
	        if (blocksLength === 0) {
	            return value;
	        }

	        blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    rest = value.slice(length);

	                if (multipleDelimiters) {
	                    currentDelimiter = delimiters[delimiterLazyShow ? index - 1 : index] || currentDelimiter;
	                } else {
	                    currentDelimiter = delimiter;
	                }

	                if (delimiterLazyShow) {
	                    if (index > 0) {
	                        result += currentDelimiter;
	                    }

	                    result += sub;
	                } else {
	                    result += sub;

	                    if (sub.length === length && index < blocksLength - 1) {
	                        result += currentDelimiter;
	                    }
	                }

	                // update remaining string
	                value = rest;
	            }
	        });

	        return result;
	    },

	    // move cursor to the end
	    // the first time user focuses on an input with prefix
	    fixPrefixCursor: function fixPrefixCursor(el, prefix, delimiter, delimiters) {
	        if (!el) {
	            return;
	        }

	        var val = el.value,
	            appendix = delimiter || delimiters[0] || ' ';

	        if (!el.setSelectionRange || !prefix || prefix.length + appendix.length < val.length) {
	            return;
	        }

	        var len = val.length * 2;

	        // set timeout to avoid blink
	        setTimeout(function () {
	            el.setSelectionRange(len, len);
	        }, 1);
	    },

	    setSelection: function setSelection(element, position, doc) {
	        if (element !== doc.activeElement) {
	            return;
	        }

	        // cursor is already in the end
	        if (element && element.value.length <= position) {
	            return;
	        }

	        if (element.createTextRange) {
	            var range = element.createTextRange();

	            range.move('character', position);
	            range.select();
	        } else {
	            try {
	                element.setSelectionRange(position, position);
	            } catch (e) {
	                // eslint-disable-next-line
	                console.warn('The input element type does not support selection');
	            }
	        }
	    },

	    isAndroid: function isAndroid() {
	        return navigator && /android/i.test(navigator.userAgent);
	    },

	    // On Android chrome, the keyup and keydown events
	    // always return key code 229 as a composition that
	    // buffers the user’s keystrokes
	    // see https://github.com/nosir/cleave.js/issues/147
	    isAndroidBackspaceKeydown: function isAndroidBackspaceKeydown(lastInputValue, currentInputValue) {
	        if (!this.isAndroid() || !lastInputValue || !currentInputValue) {
	            return false;
	        }

	        return currentInputValue === lastInputValue.slice(0, -1);
	    }
	};

	module.exports = Util;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Props Assignment
	 *
	 * Separate this, so react module can share the usage
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var DefaultProperties = {
	    // Maybe change to object-assign
	    // for now just keep it as simple
	    assign: function assign(target, opts) {
	        target = target || {};
	        opts = opts || {};

	        // credit card
	        target.creditCard = !!opts.creditCard;
	        target.creditCardStrictMode = !!opts.creditCardStrictMode;
	        target.creditCardType = '';
	        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || function () {};

	        // phone
	        target.phone = !!opts.phone;
	        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
	        target.phoneFormatter = {};

	        // time
	        target.time = !!opts.time;
	        target.timePattern = opts.timePattern || ['h', 'm', 's'];
	        target.timeFormatter = {};

	        // date
	        target.date = !!opts.date;
	        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
	        target.dateFormatter = {};

	        // numeral
	        target.numeral = !!opts.numeral;
	        target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
	        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
	        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
	        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
	        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
	        target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;

	        // others
	        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

	        target.uppercase = !!opts.uppercase;
	        target.lowercase = !!opts.lowercase;

	        target.prefix = target.creditCard || target.date ? '' : opts.prefix || '';
	        target.noImmediatePrefix = !!opts.noImmediatePrefix;
	        target.prefixLength = target.prefix.length;
	        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
	        target.copyDelimiter = !!opts.copyDelimiter;

	        target.initValue = opts.initValue !== undefined && opts.initValue !== null ? opts.initValue.toString() : '';

	        target.delimiter = opts.delimiter || opts.delimiter === '' ? opts.delimiter : opts.date ? '/' : opts.time ? ':' : opts.numeral ? ',' : opts.phone ? ' ' : ' ';
	        target.delimiterLength = target.delimiter.length;
	        target.delimiterLazyShow = !!opts.delimiterLazyShow;
	        target.delimiters = opts.delimiters || [];

	        target.blocks = opts.blocks || [];
	        target.blocksLength = target.blocks.length;

	        target.root = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global ? global : window;
	        target.document = opts.document || target.root.document;

	        target.maxLength = 0;

	        target.backspace = false;
	        target.result = '';

	        target.onValueChanged = opts.onValueChanged || function () {};

	        return target;
	    }
	};

	module.exports = DefaultProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ })
/******/ ])
});
;