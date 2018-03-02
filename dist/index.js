(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TruncatedText = __webpack_require__(6);

var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

__webpack_require__(26);

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
        backgroundImage: this.props.thumbnail ? 'url("' + this.props.thumbnail.source + '")' : meta ? 'none' : BG_PLACEHOLDER
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorBox = function ErrorBox(props) {
  return _react2.default.createElement(
    'div',
    { className: 'errorbox' },
    props.msg
  );
};

exports.default = ErrorBox;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ jsEnabled: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ jsEnabled: true });
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return Icon;
}(_react.Component);

exports.default = Icon;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchInput = function (_Component) {
  _inherits(SearchInput, _Component);

  function SearchInput() {
    _classCallCheck(this, SearchInput);

    return _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).apply(this, arguments));
  }

  _createClass(SearchInput, [{
    key: 'onDoSearch',
    value: function onDoSearch(ev) {
      var props = this.props;
      if (props.onSearch) {
        ev.preventDefault();
        props.onSearch(ev.currentTarget.value);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var input = _reactDom2.default.findDOMNode(this);
      if (this.props.focusOnRender) {
        input.focus();
        // show keyboard
        input.click();
      }
      if (this.props.defaultValue) {
        this.props.onSearch(this.props.defaultValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement('input', { className: 'search', type: 'search', placeholder: props.placeholder, ref: 'input',
        name: props.name, autoComplete: 'off',
        onClick: props.onClick, onInput: this.onDoSearch.bind(this), defaultValue: props.defaultValue,
        onKeyUp: this.onDoSearch.bind(this) });
    }
  }]);

  return SearchInput;
}(_react.Component);

exports.default = SearchInput;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TruncatedText = function TruncatedText(props) {
  return _react2.default.createElement(
    'span',
    { className: 'truncated-text' },
    props.children
  );
};

exports.default = TruncatedText;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ jsEnabled: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ jsEnabled: true });
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return Button;
}(_react.Component);

exports.default = Button;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(27);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Card = __webpack_require__(2);

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
      var glyph = props.anon ? 'anonymous' : 'user';
      var extracts = [_react2.default.createElement(
        'span',
        { className: 'edit-summary' },
        props.comment || 'No edit summary'
      )];
      if (username) {
        // FIXME: Support anonymous users too
        extracts.unshift(_react2.default.createElement(_Icon2.default, { glyph: glyph, type: 'before', label: username, className: 'mw-mf-user',
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardList = function (_Component) {
  _inherits(CardList, _Component);

  function CardList() {
    _classCallCheck(this, CardList);

    return _possibleConstructorReturn(this, (CardList.__proto__ || Object.getPrototypeOf(CardList)).apply(this, arguments));
  }

  _createClass(CardList, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var isUnordered = !props.ordered;
      var cards = props.cards;
      var className = 'card-list component-card-list' + (isUnordered ? ' card-list-unordered' : '');

      if (props.className) {
        className += ' ' + props.className;
      }
      return props.children.length ? _react2.default.createElement(
        'div',
        { className: className },
        props.children
      ) : _react2.default.createElement(
        'div',
        { className: 'card-list-empty' },
        props.emptyMessage
      );
    }
  }]);

  return CardList;
}(_react.Component);

exports.default = CardList;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(2);

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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ jsEnabled: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ jsEnabled: true });
    }
  }, {
    key: 'update',
    value: function update(ev) {
      var el = ev.currentTarget;
      if (this.props.onToggle) {
        this.props.onToggle(el.getAttribute('name'), el.checked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return Checkbox;
}(_react.Component);

exports.default = Checkbox;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalList = function (_Component) {
  _inherits(HorizontalList, _Component);

  function HorizontalList() {
    _classCallCheck(this, HorizontalList);

    return _possibleConstructorReturn(this, (HorizontalList.__proto__ || Object.getPrototypeOf(HorizontalList)).apply(this, arguments));
  }

  _createClass(HorizontalList, [{
    key: 'render',
    value: function render() {
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
  }]);

  return HorizontalList;
}(_react.Component);

exports.default = HorizontalList;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(31);

var _ErrorBox = __webpack_require__(3);

var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntermediateState = function (_Component) {
  _inherits(IntermediateState, _Component);

  function IntermediateState() {
    _classCallCheck(this, IntermediateState);

    return _possibleConstructorReturn(this, (IntermediateState.__proto__ || Object.getPrototypeOf(IntermediateState)).apply(this, arguments));
  }

  _createClass(IntermediateState, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ jsEnabled: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ jsEnabled: true });
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return IntermediateState;
}(_react.Component);

exports.default = IntermediateState;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkList = function (_Component) {
  _inherits(LinkList, _Component);

  function LinkList() {
    _classCallCheck(this, LinkList);

    return _possibleConstructorReturn(this, (LinkList.__proto__ || Object.getPrototypeOf(LinkList)).apply(this, arguments));
  }

  _createClass(LinkList, [{
    key: 'render',
    value: function render() {
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
  }]);

  return LinkList;
}(_react.Component);

exports.default = LinkList;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListHeader = function ListHeader(props) {
  return _react2.default.createElement(
    'h2',
    { className: 'list-header' },
    props.children
  );
};

exports.default = ListHeader;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SearchInput = __webpack_require__(5);

var _SearchInput2 = _interopRequireDefault(_SearchInput);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchForm = function (_Component) {
  _inherits(SearchForm, _Component);

  function SearchForm() {
    _classCallCheck(this, SearchForm);

    return _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).apply(this, arguments));
  }

  _createClass(SearchForm, [{
    key: 'onDoSearch',
    value: function onDoSearch(ev) {
      ev.preventDefault();
      this.props.onSearchSubmit(ev.currentTarget.querySelector('input').value);
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return SearchForm;
}(_react.Component);

exports.default = SearchForm;

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruncatedText = exports.HorizontalList = exports.LinkList = exports.SearchForm = exports.SearchInput = exports.Panel = exports.ListHeader = exports.IntermediateState = exports.ErrorBox = exports.CardDiff = exports.CardWithLocation = exports.CardList = exports.Card = exports.Checkbox = exports.Input = exports.Icon = exports.Button = undefined;

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _Card = __webpack_require__(2);

var _Card2 = _interopRequireDefault(_Card);

var _CardDiff = __webpack_require__(8);

var _CardDiff2 = _interopRequireDefault(_CardDiff);

var _CardList = __webpack_require__(9);

var _CardList2 = _interopRequireDefault(_CardList);

var _CardWithLocation = __webpack_require__(10);

var _CardWithLocation2 = _interopRequireDefault(_CardWithLocation);

var _Checkbox = __webpack_require__(11);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ErrorBox = __webpack_require__(3);

var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

var _HorizontalList = __webpack_require__(12);

var _HorizontalList2 = _interopRequireDefault(_HorizontalList);

var _Icon = __webpack_require__(4);

var _Icon2 = _interopRequireDefault(_Icon);

var _Input = __webpack_require__(13);

var _Input2 = _interopRequireDefault(_Input);

var _IntermediateState = __webpack_require__(14);

var _IntermediateState2 = _interopRequireDefault(_IntermediateState);

var _LinkList = __webpack_require__(15);

var _LinkList2 = _interopRequireDefault(_LinkList);

var _ListHeader = __webpack_require__(16);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Panel = __webpack_require__(17);

var _Panel2 = _interopRequireDefault(_Panel);

var _SearchForm = __webpack_require__(18);

var _SearchForm2 = _interopRequireDefault(_SearchForm);

var _SearchInput = __webpack_require__(5);

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _TruncatedText = __webpack_require__(6);

var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.Icon = _Icon2.default;
exports.Input = _Input2.default;
exports.Checkbox = _Checkbox2.default;
exports.Card = _Card2.default;
exports.CardList = _CardList2.default;
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

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});