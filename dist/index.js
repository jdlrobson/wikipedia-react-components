(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_31__) {
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
	exports.TruncatedText = exports.HorizontalList = exports.LinkList = exports.SearchForm = exports.SearchInput = exports.Panel = exports.ListHeader = exports.IntermediateState = exports.ErrorBox = exports.CardDiff = exports.CardWithLocation = exports.Card = exports.Checkbox = exports.Input = exports.Icon = exports.Button = undefined;

	var _Button = __webpack_require__(1);

	var _Button2 = _interopRequireDefault(_Button);

	var _Card = __webpack_require__(4);

	var _Card2 = _interopRequireDefault(_Card);

	var _CardDiff = __webpack_require__(8);

	var _CardDiff2 = _interopRequireDefault(_CardDiff);

	var _CardWithLocation = __webpack_require__(12);

	var _CardWithLocation2 = _interopRequireDefault(_CardWithLocation);

	var _Checkbox = __webpack_require__(13);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _ErrorBox = __webpack_require__(15);

	var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

	var _HorizontalList = __webpack_require__(17);

	var _HorizontalList2 = _interopRequireDefault(_HorizontalList);

	var _Icon = __webpack_require__(10);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Input = __webpack_require__(19);

	var _Input2 = _interopRequireDefault(_Input);

	var _IntermediateState = __webpack_require__(21);

	var _IntermediateState2 = _interopRequireDefault(_IntermediateState);

	var _LinkList = __webpack_require__(23);

	var _LinkList2 = _interopRequireDefault(_LinkList);

	var _ListHeader = __webpack_require__(25);

	var _ListHeader2 = _interopRequireDefault(_ListHeader);

	var _Panel = __webpack_require__(27);

	var _Panel2 = _interopRequireDefault(_Panel);

	var _SearchForm = __webpack_require__(29);

	var _SearchForm2 = _interopRequireDefault(_SearchForm);

	var _SearchInput = __webpack_require__(30);

	var _SearchInput2 = _interopRequireDefault(_SearchInput);

	var _TruncatedText = __webpack_require__(5);

	var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Button = _Button2.default;
	exports.Icon = _Icon2.default;
	exports.Input = _Input2.default;
	exports.Checkbox = _Checkbox2.default;
	exports.Card = _Card2.default;
	exports.CardWithLocation = _CardWithLocation2.default;
	exports.CardDiff = _CardDiff2.default;
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TruncatedText = __webpack_require__(5);

	var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BG_PLACEHOLDER = 'linear-gradient(transparent,transparent),url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2056%2056%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23eee%22%20d%3D%22M0%200h56v56H0z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23999%22%20d%3D%22M36.4%2013.5H17.8v24.9c0%201.4.9%202.3%202.3%202.3h18.7v-25c.1-1.4-1-2.2-2.4-2.2zM30.2%2017h5.1v6.4h-5.1V17zm-8.8%200h6v1.8h-6V17zm0%204.6h6v1.8h-6v-1.8zm0%2015.5v-1.8h13.8v1.8H21.4zm13.8-4.5H21.4v-1.8h13.8v1.8zm0-4.7H21.4v-1.8h13.8v1.8z%22%2F%3E%0A%3C%2Fsvg%3E%0A)';

	var Card = function (_Component) {
	  _inherits(Card, _Component);

	  function Card() {
	    _classCallCheck(this, Card);

	    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	  }

	  _createClass(Card, [{
	    key: 'render',
	    value: function render() {
	      var heading;
	      var props = this.props;
	      var title = this.props.title;
	      var className = this.props.className ? 'card ' + this.props.className : 'card';
	      var meta = this.props.metaInfo;
	      var styles = {
	        backgroundImage: this.props.thumbnail ? 'url(' + this.props.thumbnail.source + ')' : meta ? 'none' : BG_PLACEHOLDER
	      };
	      var extracts = this.props.extracts.map(function (item, i) {
	        return _react2.default.createElement(
	          'p',
	          { className: 'card-extract', key: 'card-extract-' + title + '-' + i,
	            title: typeof item === 'string' ? item : null },
	          _react2.default.createElement(
	            _TruncatedText2.default,
	            null,
	            item
	          )
	        );
	      });
	      var url = props.url !== undefined && props.url !== null ? props.url : '/wiki/' + encodeURIComponent(title);
	      var illustration;
	      if (this.props.thumbnail || this.props.metaInfo || this.props.showPlaceholderIllustration) {
	        illustration = _react2.default.createElement(
	          'div',
	          { className: 'card-thumb', style: styles },
	          meta
	        );
	      }

	      if (title) {
	        heading = _react2.default.createElement(
	          'h3',
	          null,
	          _react2.default.createElement(
	            'a',
	            { title: title, href: url },
	            title
	          )
	        );
	      } else {
	        heading = _react2.default.createElement('a', { className: 'card-link', href: url });
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: className, onClick: props.onClick },
	        this.props.indicator,
	        illustration,
	        _react2.default.createElement(
	          'div',
	          { className: 'card-detail' },
	          heading,
	          extracts
	        )
	      );
	    }
	  }]);

	  return Card;
	}(_react.Component);

	Card.defaultProps = {
	  showPlaceholderIllustration: true,
	  url: null,
	  title: null,
	  indicator: null,
	  thumbnail: null,
	  extracts: []
	};

	exports.default = Card;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(6);

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
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(9);

	var _Icon = __webpack_require__(10);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Card = __webpack_require__(4);

	var _Card2 = _interopRequireDefault(_Card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CardDiff = function (_Component) {
	  _inherits(CardDiff, _Component);

	  function CardDiff() {
	    _classCallCheck(this, CardDiff);

	    return _possibleConstructorReturn(this, (CardDiff.__proto__ || Object.getPrototypeOf(CardDiff)).apply(this, arguments));
	  }

	  _createClass(CardDiff, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var username = props.user;
	      var extracts = [_react2.default.createElement(
	        'span',
	        { className: 'edit-summary' },
	        props.comment || 'No edit summary'
	      )];
	      if (!props.title && username) {
	        // FIXME: Support anonymous users too
	        extracts.unshift(_react2.default.createElement(_Icon2.default, { glyph: 'user', type: 'before', label: username, className: 'mw-mf-user',
	          href: '/' + props.language_project + '/User:' + encodeURIComponent(username) }));
	      }
	      var date = new Date(props.timestamp);
	      var bytes = props.newlen ? props.newlen - props.oldlen : props.sizediff;
	      var bytesDeltaClass = bytes < 0 ? 'bytes-removed' : 'bytes-added';
	      var metaInfo = _react2.default.createElement(
	        'div',
	        { className: 'meta' },
	        _react2.default.createElement(
	          'p',
	          { className: 'timestamp' },
	          date.getUTCHours(),
	          ':',
	          date.getUTCMinutes()
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: bytesDeltaClass },
	          bytes
	        )
	      );
	      if (props.minor) {
	        extracts.push(_react2.default.createElement(
	          'abbr',
	          { className: 'minor-edit', title: 'This is a minor edit' },
	          'm'
	        ));
	      }

	      return _react2.default.createElement(_Card2.default, _extends({ className: 'card-diff' }, props, {
	        extracts: extracts, metaInfo: metaInfo, url: props.url }));
	    }
	  }]);

	  return CardDiff;
	}(_react.Component);

	exports.default = CardDiff;

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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Card = __webpack_require__(4);

	var _Card2 = _interopRequireDefault(_Card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CardWithLocation = function (_Component) {
	  _inherits(CardWithLocation, _Component);

	  function CardWithLocation() {
	    _classCallCheck(this, CardWithLocation);

	    return _possibleConstructorReturn(this, (CardWithLocation.__proto__ || Object.getPrototypeOf(CardWithLocation)).apply(this, arguments));
	  }

	  _createClass(CardWithLocation, [{
	    key: 'render',
	    value: function render() {
	      var dist,
	          units = 'm',
	          props = this.props,
	          extracts = props.description ? [props.description] : [];
	      if (props.coordinates && props.coordinates.dist) {
	        dist = parseInt(props.coordinates.dist, 10);
	        if (dist >= 1000) {
	          dist = parseInt(dist / 1000, 10);
	          units = 'km';
	        }
	        extracts.push(dist + units);
	      }
	      return _react2.default.createElement(_Card2.default, _extends({}, props, { extracts: extracts }));
	    }
	  }]);

	  return CardWithLocation;
	}(_react.Component);

	CardWithLocation.defaultProps = {
	  terms: null,
	  thumbnail: null
	};

	exports.default = CardWithLocation;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(14);

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
	          defaultChecked: props.checked,
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
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(16);

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
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(18);

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
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(20);

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
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(22);

	var _ErrorBox = __webpack_require__(15);

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
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(24);

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
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(26);

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
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SearchInput = __webpack_require__(30);

	var _SearchInput2 = _interopRequireDefault(_SearchInput);

	__webpack_require__(33);

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(31);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(32);

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
/* 31 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;