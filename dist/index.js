(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_24__) {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TruncatedText = exports.HorizontalList = exports.LinkList = exports.SearchForm = exports.SearchInput = exports.Panel = exports.ListHeader = exports.IntermediateState = exports.ErrorBox = exports.Checkbox = exports.Input = exports.Icon = exports.Button = undefined;

	var _Button = __webpack_require__(1);

	var _Button2 = _interopRequireDefault(_Button);

	var _Checkbox = __webpack_require__(4);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _ErrorBox = __webpack_require__(6);

	var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

	var _HorizontalList = __webpack_require__(8);

	var _HorizontalList2 = _interopRequireDefault(_HorizontalList);

	var _Icon = __webpack_require__(10);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Input = __webpack_require__(12);

	var _Input2 = _interopRequireDefault(_Input);

	var _IntermediateState = __webpack_require__(14);

	var _IntermediateState2 = _interopRequireDefault(_IntermediateState);

	var _LinkList = __webpack_require__(16);

	var _LinkList2 = _interopRequireDefault(_LinkList);

	var _ListHeader = __webpack_require__(18);

	var _ListHeader2 = _interopRequireDefault(_ListHeader);

	var _Panel = __webpack_require__(20);

	var _Panel2 = _interopRequireDefault(_Panel);

	var _SearchForm = __webpack_require__(22);

	var _SearchForm2 = _interopRequireDefault(_SearchForm);

	var _SearchInput = __webpack_require__(23);

	var _SearchInput2 = _interopRequireDefault(_SearchInput);

	var _TruncatedText = __webpack_require__(27);

	var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Button = _Button2.default;
	exports.Icon = _Icon2.default;
	exports.Input = _Input2.default;
	exports.Checkbox = _Checkbox2.default;
	exports.ErrorBox = _ErrorBox2.default;
	exports.IntermediateState = _IntermediateState2.default;
	exports.ListHeader = _ListHeader2.default;
	exports.Panel = _Panel2.default;
	exports.SearchInput = _SearchInput2.default;
	exports.SearchForm = _SearchForm2.default;
	exports.LinkList = _LinkList2.default;
	exports.HorizontalList = _HorizontalList2.default;
	exports.TruncatedText = _TruncatedText2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Button',
	  componentWillMount: function componentWillMount() {
	    this.setState({ jsEnabled: false });
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({ jsEnabled: true });
	  },
	  render: function render() {
	    var props = this.props;
	    var disabled = false;
	    var modifiers = props.isPrimary ? 'mw-ui-primary' : '';
	    modifiers += props.isQuiet ? 'mw-ui-quiet' : '';
	    modifiers += props.className ? ' ' + props.className : '';

	    if (!this.state.jsEnabled && props.onClick && !props.href) {
	      disabled = true;
	    } else {
	      disabled = props.disabled;
	    }
	    var btnProps = {
	      className: 'mw-ui-button ' + modifiers,
	      href: props.href,
	      onClick: props.onClick,
	      disabled: disabled
	    };
	    return btnProps.href ? _react2.default.createElement(
	      'a',
	      btnProps,
	      props.label
	    ) : _react2.default.createElement(
	      'button',
	      btnProps,
	      props.label
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Checkbox',
	  componentWillMount: function componentWillMount() {
	    this.setState({ jsEnabled: false });
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({ jsEnabled: true });
	  },
	  update: function update(ev) {
	    var el = ev.currentTarget;
	    var config = this.state.mobileOptions;
	    if (this.props.onToggle) {
	      this.props.onToggle(el.getAttribute('name'), el.checked);
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    return _react2.default.createElement(
	      'span',
	      { className: this.state && this.state.jsEnabled ? 'client-js' : '' },
	      _react2.default.createElement(
	        'div',
	        { className: 'mw-ui-checkbox' },
	        _react2.default.createElement('input', { type: 'checkbox', name: props.name,
	          checked: props.checked,
	          onChange: this.update }),
	        _react2.default.createElement(
	          'label',
	          { htmlFor: props.name },
	          props.label
	        )
	      )
	    );
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ErrorBox = function ErrorBox(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'errorbox' },
	    props.msg
	  );
	};

	exports.default = ErrorBox;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'HorizontalList',

	  render: function render() {
	    var cl = this.props.className ? this.props.className + ' hlist' : 'hlist';
	    return _react2.default.createElement(
	      'ul',
	      { className: cl + (this.props.isSeparated ? ' separated' : ''), id: this.props.id },
	      this.props.children.map(function (child, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: 'hlist-' + i },
	          child
	        );
	      })
	    );
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Icon',
	  componentWillMount: function componentWillMount() {
	    this.setState({ jsEnabled: false });
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({ jsEnabled: true });
	  },
	  render: function render() {
	    var props = this.props;
	    var glyph = props.glyph;
	    // If the icon's only purpose is to run with JS and JS is not available it should be disabled
	    if (!this.state.jsEnabled) {
	      if (!props.href && props.onClick) {
	        glyph = '';
	      } else if (props.href && props.href.indexOf('#/') === 0) {
	        glyph = '';
	      }
	    }

	    var iconProps = {
	      className: (props.className || '') + ' mw-ui-icon mw-ui-icon-' + glyph + ' mw-ui-icon-' + (props.type || 'element'),
	      href: props.href,
	      id: props.id,
	      onClick: props.onClick
	    };
	    if (props.small) {
	      iconProps.className += ' mw-ui-icon-small';
	    } else if (props.large) {
	      iconProps.className += ' mw-ui-icon-large';
	    }

	    return iconProps.href ? _react2.default.createElement(
	      'a',
	      iconProps,
	      props.label
	    ) : _react2.default.createElement(
	      'div',
	      iconProps,
	      props.label
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Input = function Input(props) {
	  var suffix = props.className ? ' ' + props.className : '';
	  var inputProps = {
	    className: 'mw-ui-input' + suffix,
	    placeholder: props.placeholder,
	    onInput: props.onInput,
	    disabled: props.disabled,
	    defaultValue: props.defaultValue
	  };

	  if (props.textarea) {
	    return _react2.default.createElement('textarea', inputProps);
	  } else {
	    return _react2.default.createElement('input', inputProps);
	  }
	};

	exports.default = Input;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(15);

	var _ErrorBox = __webpack_require__(6);

	var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'IntermediateState',
	  componentWillMount: function componentWillMount() {
	    this.setState({ jsEnabled: false });
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({ jsEnabled: true });
	  },
	  render: function render() {
	    var props = this.props;
	    var msg = props.msg || 'Loading';
	    return _react2.default.createElement(
	      'div',
	      { className: this.state.jsEnabled ? "pending" : "" },
	      this.state.jsEnabled ? msg : '',
	      _react2.default.createElement(
	        'noscript',
	        null,
	        _react2.default.createElement(_ErrorBox2.default, { msg: 'Unable to load on your browser.' })
	      )
	    );
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'LinkList',

	  render: function render() {
	    var className = this.props.className ? this.props.className + ' ' : '';
	    className += 'link-list';
	    return _react2.default.createElement(
	      'ul',
	      { className: className },
	      this.props.children.map(function (child, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: 'link-list-' + i },
	          child
	        );
	      })
	    );
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ListHeader = function ListHeader(props) {
	  return _react2.default.createElement(
	    'h2',
	    { className: 'list-header' },
	    props.children
	  );
	};

	exports.default = ListHeader;

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
	  var className = 'panel';
	  if (props.isHeading) {
	    className += ' panel-heading';
	  }
	  if (props.className) {
	    className += props.className;
	  }
	  return _react2.default.createElement(
	    'div',
	    { className: className },
	    props.children
	  );
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SearchInput = __webpack_require__(23);

	var _SearchInput2 = _interopRequireDefault(_SearchInput);

	__webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'SearchForm',
	  onDoSearch: function onDoSearch(ev) {
	    ev.preventDefault();
	    this.props.onSearchSubmit(ev.currentTarget.querySelector('input').value);
	  },
	  render: function render() {
	    var props = this.props;
	    return _react2.default.createElement(
	      'form',
	      { className: 'search-form', onSubmit: this.onDoSearch,
	        method: 'GET',
	        action: '/' + props.language_project + '/Special:Search' },
	      _react2.default.createElement(_SearchInput2.default, { onClick: props.onClickSearch, onSearch: props.onSearch,
	        name: 'search',
	        placeholder: props.placeholder, defaultValue: props.defaultValue,
	        focusOnRender: props.focusOnRender })
	    );
	  }
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'SearchInput',
	  onDoSearch: function onDoSearch(ev) {
	    ev.preventDefault();
	    this.props.onSearch(ev.currentTarget.value);
	  },

	  componentDidMount: function componentDidMount() {
	    var input = _reactDom2.default.findDOMNode(this);
	    if (this.props.focusOnRender) {
	      input.focus();
	      // show keyboard
	      input.click();
	    }
	    if (this.props.defaultValue) {
	      this.props.onSearch(this.props.defaultValue);
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    return _react2.default.createElement('input', { className: 'search', type: 'search', placeholder: props.placeholder, ref: 'input',
	      name: props.name,
	      onClick: props.onClick, onInput: this.onDoSearch, defaultValue: props.defaultValue,
	      onKeyUp: this.onDoSearch });
	  }
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TruncatedText = function TruncatedText(props) {
	  return _react2.default.createElement(
	    'span',
	    { className: 'truncated-text' },
	    props.children
	  );
	};

	exports.default = TruncatedText;

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;