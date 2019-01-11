(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


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

var _TruncatedText = __webpack_require__(8);

var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

__webpack_require__(18);

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
			var link,
			    illustration,
			    heading,
			    props = this.props,
			    title = this.props.title,
			    className = this.props.className ? 'card ' + this.props.className : 'card',
			    meta = this.props.metaInfo,
			    styles = {
				backgroundImage: this.props.thumbnail ? 'url("' + this.props.thumbnail.source + '")' : meta ? 'none' : BG_PLACEHOLDER
			},
			    extracts = this.props.extracts.map(function (item, i) {
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
			}),
			    url = props.url !== undefined && props.url !== null ? props.url : '/wiki/' + encodeURIComponent(title);

			if (this.props.thumbnail || this.props.metaInfo || this.props.showPlaceholderIllustration) {
				illustration = _react2.default.createElement(
					'div',
					{ className: 'card-thumb', style: styles },
					meta
				);
			} else {
				className += ' card--no-thumb';
			}

			if (title) {
				heading = _react2.default.createElement(
					'h3',
					null,
					title
				);
			}
			if (url) {
				link = _react2.default.createElement('a', { className: 'card__link',
					href: url, 'aria-hidden': true, tabIndex: props.tabIndex });
			}

			return _react2.default.createElement(
				'div',
				{ className: className, onClick: props.onClick },
				this.props.indicator,
				illustration,
				link,
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
	isClickable: true,
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(21);

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
			var iconProps,
			    props = this.props,
			    glyph = props.glyph;

			// If the icon's only purpose is to run with JS and JS is not available it should be disabled
			if (!this.state.jsEnabled) {
				if (!props.href && props.onClick) {
					glyph = '';
				} else if (props.href && props.href.indexOf('#/') === 0) {
					glyph = '';
				}
			}

			iconProps = Object.assign({}, props, {
				className: (props.className || '') + ' mw-ui-icon mw-ui-icon-' + glyph + ' mw-ui-icon-' + (props.type || 'element'),
				href: props.href,
				id: props.id,
				onClick: props.onClick
			});
			if (props.small) {
				iconProps.className += ' mw-ui-icon-small';
			} else if (props.large) {
				iconProps.className += ' mw-ui-icon-large';
			}

			return iconProps.href ? _react2.default.createElement(
				'a',
				iconProps,
				props.label,
				props.children
			) : _react2.default.createElement(
				'div',
				iconProps,
				props.label,
				props.children
			);
		}
	}]);

	return Icon;
}(_react.Component);

exports.default = Icon;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'content-container ' + (props.className ? props.className : '') },
		props.children
	);
};

exports.default = Content;

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

__webpack_require__(45);

var _Icon = __webpack_require__(3);

var _Icon2 = _interopRequireDefault(_Icon);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Content = __webpack_require__(4);

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global setTimeout */


// Main component

var Overlay = function (_Component) {
	_inherits(Overlay, _Component);

	function Overlay(props) {
		_classCallCheck(this, Overlay);

		var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

		_this.state = {
			visible: false
		};
		return _this;
	}

	_createClass(Overlay, [{
		key: 'onClose',
		value: function onClose(ev) {
			if (this.props.onExit) {
				this.props.onExit(ev);
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// Trigger animation
			setTimeout(function () {
				this.setState({
					visible: true
				});
			}.bind(this), 0);
		}
	}, {
		key: 'render',
		value: function render() {
			var header,
			    icon,
			    props = this.props,
			    baseClass = 'overlay',
			    overlayClass = props.className ? ' ' + props.className : '',
			    visibleClass = this.state.visible ? ' visible' : '',
			    closeIconGray = _react2.default.createElement(_Icon2.default, { glyph: 'close-gray',
				className: 'close', onClick: this.onClose.bind(this) }),
			    firstChild = props.children[0],
			    children = props.children;

			if (firstChild && firstChild.type === _Header2.default) {
				children = props.children.slice(1);
				icon = _react2.default.createElement(_Icon2.default, { glyph: 'close', onClick: this.onClose.bind(this),
					className: 'cancel' });

				if (firstChild.props.fixed) {
					overlayClass += ' overlay-with-fixed-header';
				}
				// Primary icon is mandatory. Assume action is close, if none given.
				if (!firstChild.props.primaryIcon) {
					header = _react2.default.cloneElement(firstChild, {
						primaryIcon: icon
					});
				} else {
					header = firstChild;
				}
			} else if (this.props.isLightBox) {
				header = _react2.default.createElement(
					'div',
					{ className: 'lightbox-header' },
					closeIconGray
				);
				overlayClass += ' lightbox';
			} else {
				header = null;
				baseClass = 'drawer';
			}

			return _react2.default.createElement(
				'div',
				{ className: baseClass + overlayClass + visibleClass },
				header,
				_react2.default.createElement(
					_Content2.default,
					{ className: 'overlay-content' },
					children
				)
			);
		}
	}]);

	return Overlay;
}(_react.Component);

Overlay.defaultProps = {
	isLightBox: false
};

exports.default = Overlay;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TruncatedText = exports.HorizontalList = exports.LinkList = exports.SearchForm = exports.SearchInput = exports.Panel = exports.ListHeader = exports.IntermediateState = exports.ErrorBox = exports.Toast = exports.Overlay = exports.Header = exports.Content = exports.CardDiff = exports.CardWithLocation = exports.CardList = exports.CtaDrawer = exports.CollectionOverlay = exports.CollectionEditorOverlay = exports.CollectionCard = exports.Card = exports.RadioSelectInput = exports.Checkbox = exports.Input = exports.Icon = exports.Button = undefined;

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _Card = __webpack_require__(2);

var _Card2 = _interopRequireDefault(_Card);

var _CardDiff = __webpack_require__(19);

var _CardDiff2 = _interopRequireDefault(_CardDiff);

var _CardList = __webpack_require__(22);

var _CardList2 = _interopRequireDefault(_CardList);

var _CardWithLocation = __webpack_require__(24);

var _CardWithLocation2 = _interopRequireDefault(_CardWithLocation);

var _Checkbox = __webpack_require__(25);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ErrorBox = __webpack_require__(9);

var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

var _HorizontalList = __webpack_require__(28);

var _HorizontalList2 = _interopRequireDefault(_HorizontalList);

var _Icon = __webpack_require__(3);

var _Icon2 = _interopRequireDefault(_Icon);

var _Input = __webpack_require__(10);

var _Input2 = _interopRequireDefault(_Input);

var _IntermediateState = __webpack_require__(11);

var _IntermediateState2 = _interopRequireDefault(_IntermediateState);

var _LinkList = __webpack_require__(34);

var _LinkList2 = _interopRequireDefault(_LinkList);

var _ListHeader = __webpack_require__(36);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Panel = __webpack_require__(38);

var _Panel2 = _interopRequireDefault(_Panel);

var _SearchForm = __webpack_require__(40);

var _SearchForm2 = _interopRequireDefault(_SearchForm);

var _SearchInput = __webpack_require__(12);

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _TruncatedText = __webpack_require__(8);

var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Content = __webpack_require__(4);

var _Content2 = _interopRequireDefault(_Content);

var _Overlay = __webpack_require__(5);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Toast = __webpack_require__(46);

var _Toast2 = _interopRequireDefault(_Toast);

var _CtaDrawer = __webpack_require__(48);

var _CtaDrawer2 = _interopRequireDefault(_CtaDrawer);

var _CollectionCard = __webpack_require__(14);

var _CollectionCard2 = _interopRequireDefault(_CollectionCard);

var _CollectionEditorOverlay = __webpack_require__(50);

var _CollectionEditorOverlay2 = _interopRequireDefault(_CollectionEditorOverlay);

var _CollectionOverlay = __webpack_require__(15);

var _CollectionOverlay2 = _interopRequireDefault(_CollectionOverlay);

var _RadioSelectInput = __webpack_require__(53);

var _RadioSelectInput2 = _interopRequireDefault(_RadioSelectInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.Icon = _Icon2.default;
exports.Input = _Input2.default;
exports.Checkbox = _Checkbox2.default;
exports.RadioSelectInput = _RadioSelectInput2.default;
exports.Card = _Card2.default;
exports.CollectionCard = _CollectionCard2.default;
exports.CollectionEditorOverlay = _CollectionEditorOverlay2.default;
exports.CollectionOverlay = _CollectionOverlay2.default;
exports.CtaDrawer = _CtaDrawer2.default;
exports.CardList = _CardList2.default;
exports.CardWithLocation = _CardWithLocation2.default;
exports.CardDiff = _CardDiff2.default;
exports.Content = _Content2.default;
exports.Header = _Header2.default;
exports.Overlay = _Overlay2.default;
exports.Toast = _Toast2.default;
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(16);

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
			var btnProps,
			    props = this.props,
			    disabled = false,
			    modifiers = props.isPrimary ? 'mw-ui-primary mw-ui-progressive' : '';

			modifiers += props.isQuiet ? 'mw-ui-quiet' : '';
			modifiers += props.className ? ' ' + props.className : '';

			if (!this.state.jsEnabled && props.onClick && !props.href) {
				disabled = true;
			} else {
				disabled = props.disabled;
			}
			btnProps = Object.assign({}, props, {
				className: 'mw-ui-button ' + modifiers,
				disabled: disabled,
				isPrimary: undefined,
				isQuiet: undefined
			});
			return btnProps.href ? _react2.default.createElement(
				'a',
				btnProps,
				props.label,
				props.children
			) : _react2.default.createElement(
				'button',
				btnProps,
				props.label,
				props.children
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TruncatedText = function TruncatedText(props) {
	return _react2.default.createElement(
		'span',
		{ className: 'truncated-text', style: props.style },
		props.children
	);
};

exports.default = TruncatedText;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorBox = function ErrorBox(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'errorbox' },
		props.msg || props.children
	);
};

exports.default = ErrorBox;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props) {
	var inputProps,
	    suffix = props.className ? ' ' + props.className : '';

	inputProps = Object.assign({}, props, {
		className: 'mw-ui-input' + suffix,
		placeholder: props.placeholder,
		onInput: props.onInput,
		disabled: props.disabled,
		defaultValue: props.defaultValue
	});

	if (props.textarea) {
		return _react2.default.createElement('textarea', inputProps);
	} else {
		return _react2.default.createElement('input', inputProps);
	}
};

exports.default = Input;

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

__webpack_require__(31);

var _ErrorBox = __webpack_require__(9);

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
			var props = this.props,
			    msg = props.msg || 'Loading';

			return _react2.default.createElement(
				'div',
				{ className: this.state.jsEnabled ? 'pending' : '' },
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(41);

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
			var input = this.textInput;
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
			var _this2 = this;

			var props = this.props;
			return _react2.default.createElement('input', { className: 'search', type: 'search', placeholder: props.placeholder, ref: function ref(input) {
					_this2.textInput = input;
				},
				name: props.name, autoComplete: 'off',
				onClick: props.onClick, onInput: this.onDoSearch.bind(this), defaultValue: props.defaultValue,
				onKeyUp: this.onDoSearch.bind(this) });
		}
	}]);

	return SearchInput;
}(_react.Component);

exports.default = SearchInput;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Content = __webpack_require__(4);

var _Content2 = _interopRequireDefault(_Content);

__webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			var primaryIcon,
			    suffix = this.props.fixed ? ' position-fixed' : '',
			    secondaryIcons = this.props.secondaryIcons;

			if (this.props.className) {
				suffix += ' ' + this.props.className;
			}

			// FIXME: overlay-title is used for consistency with MobileFrontend but not needed
			primaryIcon = this.props.primaryIcon ? _react2.default.createElement(
				'div',
				null,
				this.props.primaryIcon
			) : null;

			return _react2.default.createElement(
				'div',
				{ className: 'header-container' + suffix },
				_react2.default.createElement(
					_Content2.default,
					{ className: 'header toolbar' },
					primaryIcon,
					_react2.default.createElement(
						'div',
						{ className: 'main overlay-title' },
						this.props.children
					),
					secondaryIcons.map(function (icon, i) {
						return _react2.default.createElement(
							'div',
							{ key: 'secondary-icon-' + i },
							icon
						);
					})
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

Header.defaultProps = {
	fixed: false,
	secondaryIcons: [],
	primaryIcon: null
};

exports.default = Header;

/***/ }),
/* 14 */
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

var _Icon = __webpack_require__(3);

var _Icon2 = _interopRequireDefault(_Icon);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionCard = function (_Component) {
	_inherits(CollectionCard, _Component);

	function CollectionCard() {
		_classCallCheck(this, CollectionCard);

		return _possibleConstructorReturn(this, (CollectionCard.__proto__ || Object.getPrototypeOf(CollectionCard)).apply(this, arguments));
	}

	_createClass(CollectionCard, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    extracts = [props.description];

			if (props.owner) {
				extracts.push(_react2.default.createElement(_Icon2.default, { glyph: 'user', type: 'before', label: props.owner, className: 'mw-mf-user',
					href: props.ownerUrl }));
			}

			return _react2.default.createElement(_Card2.default, _extends({}, props, { extracts: extracts }));
		}
	}]);

	return CollectionCard;
}(_react.Component);

exports.default = CollectionCard;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Overlay = __webpack_require__(5);

var _Overlay2 = _interopRequireDefault(_Overlay);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionOverlay = function (_React$Component) {
	_inherits(CollectionOverlay, _React$Component);

	function CollectionOverlay() {
		_classCallCheck(this, CollectionOverlay);

		return _possibleConstructorReturn(this, (CollectionOverlay.__proto__ || Object.getPrototypeOf(CollectionOverlay)).apply(this, arguments));
	}

	_createClass(CollectionOverlay, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    title = props.title || 'Add to existing collection',
			    cancelMsg = props.cancelMsg || 'Cancel';

			return _react2.default.createElement(
				_Overlay2.default,
				_extends({}, props, { className: 'collection-overlay ' + props.className, isDrawer: true }),
				_react2.default.createElement(
					'h2',
					null,
					title
				),
				props.onExit && _react2.default.createElement(
					'a',
					{ key: 'edit-collection-cancel', className: 'cancel',
						onClick: props.onExit },
					cancelMsg
				),
				props.children,
				_react2.default.createElement(
					'div',
					{ className: 'collection-actions', key: 'collection-overlay-actions' },
					props.actions
				)
			);
		}
	}]);

	return CollectionOverlay;
}(_react2.default.Component);

exports.default = CollectionOverlay;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\nhttps://en.wikipedia.org/w/load.php?debug=false&lang=en&modules=mediawiki.ui.button&only=styles&debug=true\n*/\n.mw-ui-button {\n  font-family: inherit;\n  font-size: 1em;\n  display: inline-block;\n  min-width: 4em;\n  max-width: 28.75em;\n  padding: 0.546875em 1em;\n  line-height: 1.286;\n  margin: 0;\n  border-radius: 2px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  *display: inline;\n  /* stylelint-disable-line declaration-block-no-duplicate-properties */\n  zoom: 1;\n  vertical-align: middle;\n  background-color: #f8f9fa;\n  color: #222222;\n  border: 1px solid #a2a9b1;\n  text-align: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n.mw-ui-button:visited {\n  color: #222222;\n}\n.mw-ui-button:hover {\n  background-color: #ffffff;\n  color: #444444;\n  border-color: #a2a9b1;\n}\n.mw-ui-button:focus {\n  background-color: #ffffff;\n  color: #222222;\n  border-color: #3366cc;\n  box-shadow: inset 0 0 0 1px #3366cc, inset 0 0 0 2px #ffffff;\n}\n.mw-ui-button:active,\n.mw-ui-button.is-on,\n.mw-ui-button.mw-ui-checked {\n  background-color: #d9d9d9;\n  color: #000000;\n  border-color: #72777d;\n  box-shadow: none;\n}\n.mw-ui-button:disabled {\n  background-color: #c8ccd1;\n  color: #fff;\n  border-color: #c8ccd1;\n}\n.mw-ui-button:disabled:hover,\n.mw-ui-button:disabled:active {\n  background-color: #c8ccd1;\n  color: #fff;\n  box-shadow: none;\n  border-color: #c8ccd1;\n}\n.mw-ui-button:focus {\n  outline-width: 0;\n}\n.mw-ui-button:focus::-moz-focus-inner {\n  border-color: transparent;\n  padding: 0;\n}\n.mw-ui-button:not( :disabled ) {\n  -webkit-transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n  -moz-transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n  transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n}\n.mw-ui-button:disabled {\n  text-shadow: none;\n  cursor: default;\n}\n.mw-ui-button.mw-ui-big {\n  font-size: 1.3em;\n}\n.mw-ui-button.mw-ui-block {\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.mw-ui-button.mw-ui-progressive {\n  background-color: #3366cc;\n  color: #fff;\n  border: 1px solid #3366cc;\n}\n.mw-ui-button.mw-ui-progressive:hover {\n  background-color: #447ff5;\n  border-color: #447ff5;\n}\n.mw-ui-button.mw-ui-progressive:focus {\n  box-shadow: inset 0 0 0 1px #3366cc, inset 0 0 0 2px #ffffff;\n}\n.mw-ui-button.mw-ui-progressive:active,\n.mw-ui-button.mw-ui-progressive.is-on,\n.mw-ui-button.mw-ui-progressive.mw-ui-checked {\n  background-color: #2a4b8d;\n  border-color: #2a4b8d;\n  box-shadow: none;\n}\n.mw-ui-button.mw-ui-progressive:disabled {\n  background-color: #c8ccd1;\n  color: #fff;\n  border-color: #c8ccd1;\n}\n.mw-ui-button.mw-ui-progressive:disabled:hover,\n.mw-ui-button.mw-ui-progressive:disabled:active,\n.mw-ui-button.mw-ui-progressive:disabled.mw-ui-checked {\n  background-color: #c8ccd1;\n  color: #fff;\n  border-color: #c8ccd1;\n  box-shadow: none;\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet {\n  color: #222222;\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet:hover {\n  background-color: transparent;\n  color: #447ff5;\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet:active,\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet.mw-ui-checked {\n  color: #2a4b8d;\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet:focus {\n  background-color: transparent;\n  color: #3366cc;\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet:disabled {\n  color: #c8ccd1;\n}\n.mw-ui-button.mw-ui-destructive {\n  background-color: #dd3333;\n  color: #fff;\n  border: 1px solid #dd3333;\n}\n.mw-ui-button.mw-ui-destructive:hover {\n  background-color: #ff4242;\n  border-color: #ff4242;\n}\n.mw-ui-button.mw-ui-destructive:focus {\n  box-shadow: inset 0 0 0 1px #dd3333, inset 0 0 0 2px #ffffff;\n}\n.mw-ui-button.mw-ui-destructive:active,\n.mw-ui-button.mw-ui-destructive.is-on,\n.mw-ui-button.mw-ui-destructive.mw-ui-checked {\n  background-color: #b32424;\n  border-color: #b32424;\n  box-shadow: none;\n}\n.mw-ui-button.mw-ui-destructive:disabled {\n  background-color: #c8ccd1;\n  color: #fff;\n  border-color: #c8ccd1;\n}\n.mw-ui-button.mw-ui-destructive:disabled:hover,\n.mw-ui-button.mw-ui-destructive:disabled:active,\n.mw-ui-button.mw-ui-destructive:disabled.mw-ui-checked {\n  background-color: #c8ccd1;\n  color: #fff;\n  border-color: #c8ccd1;\n  box-shadow: none;\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet {\n  color: #222222;\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet:hover {\n  background-color: transparent;\n  color: #ff4242;\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet:active,\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet.mw-ui-checked {\n  color: #b32424;\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet:focus {\n  background-color: transparent;\n  color: #dd3333;\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet:disabled {\n  color: #c8ccd1;\n}\n.mw-ui-button.mw-ui-quiet {\n  background: transparent;\n  border: 0;\n  text-shadow: none;\n  color: #222222;\n}\n.mw-ui-button.mw-ui-quiet:hover {\n  background-color: transparent;\n  color: #444444;\n}\n.mw-ui-button.mw-ui-quiet:active,\n.mw-ui-button.mw-ui-quiet.mw-ui-checked {\n  color: #000000;\n}\n.mw-ui-button.mw-ui-quiet:focus {\n  background-color: transparent;\n  color: #222222;\n}\n.mw-ui-button.mw-ui-quiet:disabled {\n  color: #c8ccd1;\n}\n.mw-ui-button.mw-ui-quiet:hover,\n.mw-ui-button.mw-ui-quiet:focus {\n  box-shadow: none;\n}\n.mw-ui-button.mw-ui-quiet:active,\n.mw-ui-button.mw-ui-quiet:disabled {\n  background: transparent;\n}\ninput.mw-ui-button::-moz-focus-inner,\nbutton.mw-ui-button::-moz-focus-inner {\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\na.mw-ui-button {\n  text-decoration: none;\n}\na.mw-ui-button:hover,\na.mw-ui-button:focus {\n  text-decoration: none;\n}\n.mw-ui-button-group > * {\n  min-width: 48px;\n  border-radius: 0;\n  float: left;\n}\n.mw-ui-button-group > *:first-child {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.mw-ui-button-group > *:not( :first-child ) {\n  border-left: 0;\n}\n.mw-ui-button-group > *:last-child {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n.mw-ui-button-group .is-on .button {\n  cursor: default;\n}\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".truncated-text {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".card {\n  text-align: left;\n  background-color: #fff;\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  margin: 0;\n  height: 80px;\n  position: relative;\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.card--no-thumb {\n  padding: 8px;\n}\n.card__link {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n.card + .card {\n  border-top: 0;\n}\n.card .indicator {\n  top: 0;\n  left: 0;\n  position: absolute;\n  right: 80px;\n}\n.card-link {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.card h3 {\n  font-family: inherit;\n  font-size: 1em;\n  max-height: 2.6em;\n  line-height: 1.3;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  font-weight: 500;\n}\n.card h3 a:hover,\n.card h3 a:visited,\n.card h3 a {\n  color: inherit;\n}\n.card-thumb {\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: 100% 100%;\n  background-size: cover;\n  float: left;\n  height: 100%;\n  width: 80px;\n  margin-right: 10px;\n}\n.card-detail {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.card-extract {\n  color: #72777d;\n  font-size: 0.8em;\n  padding-right: 0.2em;\n  margin: 2px 0 0;\n}\n.card-extract > truncated-text,\n.card-extract > * {\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _Icon = __webpack_require__(3);

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
			var userHref,
			    extracts,
			    date,
			    bytes,
			    bytesDeltaClass,
			    metaInfo,
			    props = this.props,
			    username = props.user,
			    glyph = props.anon ? 'anonymous' : 'user';

			extracts = [_react2.default.createElement(
				'span',
				{ className: 'edit-summary' },
				props.comment || 'No edit summary'
			)];
			userHref = props.userHref || '/' + props.language_project + '/User:' + encodeURIComponent(username);
			if (username) {
				extracts.unshift(_react2.default.createElement(_Icon2.default, { glyph: glyph, type: 'before', label: username, className: 'mw-mf-user',
					href: userHref }));
			}
			date = props.timestamp ? new Date(props.timestamp) : null;
			bytes = props.newlen ? props.newlen - props.oldlen : props.sizediff;
			bytesDeltaClass = bytes < 0 ? 'bytes-removed' : 'bytes-added';
			metaInfo = _react2.default.createElement(
				'div',
				{ className: 'meta' },
				date && _react2.default.createElement(
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".mw-ui-icon-user:before {\n  background-image: linear-gradient(transparent, transparent), url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22271.5%2072.8%2016%2016%22%3E%0A%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M273.59%2072.8c-2.03%200-2.09%201.907-2.09%202.032V88.8h13.91c2.03%200%202.09-1.907%202.09-2.032V72.8h-13.91z%22%20fill%3D%22%23d0d0d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23fff%22%20transform%3D%22matrix%28.042%200%200%20.042%20259.047%2068.752%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%22437%22%20cy%3D%22234.1%22%20r%3D%2228%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%22553.5%22%20cy%3D%22234.1%22%20r%3D%2228%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M279.88%2085.338c-1.8%200-3.533-.617-4.583-1.61-.248-.247-.248-.68%200-.927s.68-.245.928%200c.806.81%202.167%201.24%203.654%201.24%201.42%200%202.786-.43%203.59-1.24.246-.245.68-.245.926%200s.248.68%200%20.93c-1.113.988-2.722%201.61-4.52%201.61z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A);\n}\n.mw-ui-icon-anonymous:before {\n  background-image: linear-gradient(transparent, transparent), url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M2.112%200C.117%200%200%201.932%200%201.994V16h13.888C15.883%2016%2016%2014.068%2016%2014.006V0H2.112zm.426%204.89s.726.726%202.295.726l2.233-.726c0%201.026-1.027%201.81-2.295%201.81s-2.23-.782-2.23-1.81zm8.935%206.517c-.543.3-1.148.542-1.81.726-.544.12-1.15.18-1.754.18-.73%200-1.39-.122-2.056-.3-.605-.18-1.206-.422-1.69-.727-.3-.18-.42-.605-.18-.905.18-.3.606-.42.907-.176.364.242.848.42%201.328.542%201.026.3%202.173.3%203.2.058a5.11%205.11%200%200%200%201.45-.542c.3-.18.724-.057.904.243.125.305.004.726-.3.905zM11.415%206.7c-1.27%200-2.295-.846-2.295-1.81%200%200%20.726.726%202.295.726l2.233-.726c.063%201.026-.964%201.81-2.233%201.81z%22%20fill%3D%22%23e7beba%22%2F%3E%0A%3C%2Fsvg%3E%0A);\n}\n.card.card-diff {\n  height: 110px;\n}\n.card.card-diff .card-thumb {\n  background: none;\n}\n.card.card-diff .card-detail {\n  top: 40%;\n  transform: translateY(-45%);\n}\n.card.card-diff .card-extract {\n  margin: 2px 0 0.5em;\n  padding: 0 0.2em 0;\n}\n.card.card-diff .meta {\n  font-size: 0.9em;\n  padding: 0.9em 16px;\n  color: #252525;\n}\n.card.card-diff .meta p {\n  line-height: 1.2;\n  margin: 0.5em 0;\n}\n.card.card-diff h3 {\n  font-weight: bold;\n  margin: 0.5em 0;\n}\n.card.card-diff .bytes-removed {\n  color: #dc2e16;\n}\n.card.card-diff .bytes-added {\n  color: #00af88;\n}\n.card.card-diff .minor-edit {\n  background: #eeeeee;\n  border-radius: 2px;\n  font-size: 0.9em;\n  font-weight: bold;\n  padding: 0 6px 1px;\n}\n.card.card-diff .mw-mf-user {\n  color: #54595d;\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\nhttps://en.wikipedia.org/w/load.php?debug=false&lang=en&modules=mediawiki.ui.icon&only=styles&debug=true\n*/\n.mw-ui-icon {\n  position: relative;\n  line-height: 1.5em;\n  min-height: 1.5em;\n  min-width: 1.5em;\n}\nspan.mw-ui-icon {\n  display: inline-block;\n}\n.mw-ui-icon.mw-ui-icon-element {\n  text-indent: -999px;\n  overflow: hidden;\n  width: 3.5em;\n  min-width: 3.5em;\n  max-width: 3.5em;\n}\n.mw-ui-icon.mw-ui-icon-element:before {\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin: 0 1em;\n}\n.mw-ui-icon.mw-ui-icon-element.mw-ui-icon-large {\n  width: 4.625em;\n  min-width: 4.625em;\n  max-width: 4.625em;\n  line-height: 4.625em;\n  min-height: 4.625em;\n}\n.mw-ui-icon.mw-ui-icon-element.mw-ui-icon-large:before {\n  min-height: 4.625em;\n}\n.mw-ui-icon.mw-ui-icon-before:before,\n.mw-ui-icon.mw-ui-icon-element:before {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  float: left;\n  display: block;\n  min-height: 1.5em;\n  content: '';\n}\n.mw-ui-icon.mw-ui-icon-before:before {\n  position: relative;\n  width: 1.5em;\n  margin-right: 1em;\n}\n.mw-ui-icon.mw-ui-icon-small:before {\n  background-size: 66.67% auto;\n}\n", ""]);

// exports


/***/ }),
/* 22 */
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

var CardList = function (_Component) {
	_inherits(CardList, _Component);

	function CardList() {
		_classCallCheck(this, CardList);

		return _possibleConstructorReturn(this, (CardList.__proto__ || Object.getPrototypeOf(CardList)).apply(this, arguments));
	}

	_createClass(CardList, [{
		key: 'render',
		value: function render() {
			var className,
			    props = this.props,
			    isUnordered = !props.ordered;

			className = 'card-list component-card-list' + (isUnordered ? ' card-list-unordered' : '');

			if (props.className) {
				className += ' ' + props.className;
			}
			return props.children && props.children.length ? _react2.default.createElement(
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".card-list {\n  box-shadow: 0 3px 3px 0 rgba(117, 117, 117, 0.3);\n  margin-bottom: 20px;\n}\n.card-list.diff-list .card-thumb {\n  background-color: transparent;\n}\n.card ~ .card {\n  border-top: 0;\n}\n.card-list .gutter {\n  width: 100%;\n  visibility: hidden;\n}\n.card-list-empty {\n  color: #333;\n  text-align: center;\n}\n@media (min-width: 720px) {\n  .card-list {\n    box-shadow: none;\n  }\n  .card-list-unordered {\n    border-top: 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    font-size: 1em;\n    list-style: none;\n    overflow: hidden;\n    position: relative;\n  }\n  .card-list-unordered .card {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    margin: 0 auto 10px auto;\n    width: 30%;\n    max-width: 30%;\n    border-radius: 2px;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

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
			var props = this.props,
			    className = this.state && this.state.jsEnabled ? 'client-js ' : ' ';
			return _react2.default.createElement(
				'span',
				{ className: className + props.className, id: props.id },
				_react2.default.createElement(
					'div',
					{ className: 'mw-ui-checkbox' },
					_react2.default.createElement('input', { type: 'checkbox', name: props.name,
						defaultChecked: props.checked,
						onChange: this.update.bind(this) }),
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\nhttps://en.wikipedia.org/w/load.php?debug=false&lang=en&modules=mediawiki.ui.checkbox&only=styles&debug=true\n*/\n.mw-ui-checkbox {\n  display: inline-block;\n  line-height: 1.5625em;\n  vertical-align: middle;\n}\n.mw-ui-checkbox:not( #noop ) {\n  display: table;\n  position: relative;\n}\n.mw-ui-checkbox:not( #noop ) * {\n  font: inherit;\n  vertical-align: middle;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox'] {\n  display: table-cell;\n  position: relative;\n  width: 1.5625em;\n  height: 1.5625em;\n  max-width: none;\n  margin: 0;\n  opacity: 0;\n  z-index: 1;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox'] + label {\n  display: table-cell;\n  padding-left: 0.4em;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox'] + label:before {\n  content: '';\n  background-color: #fff;\n  background-origin: border-box;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-background-size: 0 0;\n  background-size: 0 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 1.5625em;\n  height: 1.5625em;\n  margin-top: -0.78125em;\n  border: 1px solid #72777d;\n  border-radius: 2px;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:checked + label:before {\n  background-image: url(https://commons.wikimedia.org/w/resources/src/mediawiki.ui/components/images/checkbox-checked.png?6f2e5);\n  background-image: linear-gradient(transparent, transparent), url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E %3Cpath fill=%22%23fff%22 d=%22M17 7.5L9.5 15 6 11.5 4.5 13l5 5L20 7.5c-.706-.706-2.294-.706-3 0z%22/%3E %3C/svg%3E\");\n  -webkit-background-size: 90% 90%;\n  background-size: 90% 90%;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled {\n  cursor: pointer;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled + label {\n  cursor: pointer;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled + label:before {\n  cursor: pointer;\n  -webkit-transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n  -moz-transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n  transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled:focus + label:before {\n  border-color: #3366cc;\n  box-shadow: inset 0 0 0 1px #3366cc;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled:hover + label:before {\n  border-color: #3366cc;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled:active + label:before {\n  background-color: #2a4b8d;\n  border-color: #2a4b8d;\n  box-shadow: inset 0 0 0 1px #2a4b8d;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled:checked + label:before {\n  background-color: #3366cc;\n  border-color: #3366cc;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled:checked:focus + label:before {\n  background-color: #3366cc;\n  border-color: #3366cc;\n  box-shadow: inset 0 0 0 1px #3366cc, inset 0 0 0 2px #ffffff;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled:checked:hover + label:before {\n  background-color: #447ff5;\n  border-color: #447ff5;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:enabled:checked:active + label:before {\n  background-color: #2a4b8d;\n  border-color: #2a4b8d;\n}\n.mw-ui-checkbox:not( #noop ) [type='checkbox']:disabled + label:before {\n  background-color: #c8ccd1;\n  border-color: #c8ccd1;\n}\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".errorbox {\n  color: #cc0000;\n  background: #fae3e3;\n  box-sizing: border-box;\n  font-size: 0.9em;\n  margin: 0 0 1em 0;\n  padding: 0.5em;\n  word-wrap: break-word;\n}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(29);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".hlist > ul li,\nul.hlist li {\n  display: inline-block;\n  margin-right: 8px;\n}\n.hlist > ul li:last-child,\nul.hlist li:last-child {\n  margin-right: 0;\n}\n.hlist {\n  margin: 0;\n  padding: 0 0 8px 0;\n}\n.hlist.separated li:after {\n  content: '\\2022';\n  padding-left: 8px;\n  display: inline-block;\n}\n.hlist li:last-child:after {\n  content: '';\n}\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* Imported from https://en.wikipedia.org/w/load.php?debug=false&lang=en&modules=mediawiki.ui.input&only=styles&debug=true */\n\n.mw-ui-input {\n  background-color: #fff;\n  color: #000000;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border: 1px solid #a2a9b1;\n  border-radius: 2px;\n  padding: 0.57142857em 0.57142857em 0.5em;\n  box-shadow: inset 0 0 0 0.1em #fff;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1.07142857em;\n  vertical-align: middle;\n  /* stylelint-disable indentation */\n  /* stylelint-enable indentation */\n}\n.mw-ui-input::-webkit-input-placeholder {\n  color: #72777d;\n  opacity: 1;\n}\n.mw-ui-input:-ms-input-placeholder {\n  color: #72777d;\n  opacity: 1;\n}\n.mw-ui-input::-moz-placeholder {\n  color: #72777d;\n  opacity: 1;\n}\n.mw-ui-input:-moz-placeholder {\n  color: #72777d;\n  opacity: 1;\n}\n.mw-ui-input::placeholder {\n  color: #72777d;\n  opacity: 1;\n}\n.mw-ui-input:invalid {\n  box-shadow: none;\n}\n.mw-ui-input:hover {\n  border-color: #72777d;\n}\n.mw-ui-input:focus {\n  border-color: #3366cc;\n  box-shadow: inset 0 0 0 1px #3366cc;\n  outline: 0;\n}\n.mw-ui-input:not( :disabled ) {\n  -webkit-transition: color 100ms, border-color 100ms, box-shadow 100ms;\n  -moz-transition: color 100ms, border-color 100ms, box-shadow 100ms;\n  transition: color 100ms, border-color 100ms, box-shadow 100ms;\n}\n.mw-ui-input:disabled {\n  border-color: #eaecf0;\n  color: #c8ccd1;\n}\n.mw-ui-input[type='search'] {\n  -webkit-appearance: textfield;\n}\n.mw-ui-input[type='search']::-ms-clear {\n  display: none;\n}\n.mw-ui-input[type='search']::-webkit-search-cancel-button,\n.mw-ui-input[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntextarea.mw-ui-input {\n  min-height: 8em;\n}\n.mw-ui-input-inline {\n  display: inline-block;\n  width: auto;\n  max-width: 100%;\n}\n.mw-ui-input-large {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.mw-ui-input-large + .mw-ui-input-large {\n  margin-top: -1px;\n}\n.mw-ui-input-large:focus {\n  position: relative;\n}\ninput.mw-ui-input-large {\n  font-size: 1.75em;\n  font-weight: bold;\n  line-height: 1.25em;\n  padding: 0.3673em 0.3265em 0.3265em;\n}\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(32);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pending {\n  background-repeat: repeat;\n  text-transform: uppercase;\n  font-size: 0.8em;\n  font-weight: bold;\n  color: #999;\n  line-height: 3em;\n  padding-left: 0.4em;\n  box-shadow: inset 0 0 0 0.1em #ffffff;\n  transition: border 200ms cubic-bezier(0.39, 0.575, 0.565, 1), box-shadow 200ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  background-image: url(" + escape(__webpack_require__(33)) + ");\n}\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhGAAYAKIGAP7+/vv7+/Ly8u/v7+7u7v///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAAGAAYAAADU0hKAvUwvjCWbTIXahfWEdcxDgiJ3Wdu1UiUK5quUzuqoHzBuZ3yGp0HmBEqcEHfjmYkMZXDp8sZgx6JkiayaKWatFhJd1uckrPWcygdXrvUJ1sCACH5BAUAAAYALAAAAAAYABgAAANTSLokUDBKGAZbbupSr8qb1HlgSFnkY55eo67jVZoxM4c189IoubKtmyaH2W2IH+OwJ1NOkK4fVPhk2pwia1GqTXJbUVg3zANTs2asZHwWpX+cQQIAIfkEBQAABgAsAAAAABgAGAAAA1E4tLwCJcoZQ2uP6hLUJdk2dR8IiRL5hSjnXSyqwmc7Y7X84m21MzHRrZET/oA9V8nUGwKLGqcDSpEybcdpM3vVLYNRLrgqpo7K2685hcaqkwkAIfkEBQAABgAsAAAAABgAGAAAA1RYFUP+TgBFq2IQSstxjhNnNR+xiVVQmiF6kdnpLrDWul58o7k9vyUZrvYQ8oigHy24E/UgzQ4yonwWo6kp62dNzrrbr9YoXZEt4HPWjKWk20CmKwEAIfkEBQAABgAsAAAAABgAGAAAA1NYWjH08Amwam0xTstxlhR3OR+xiYv3nahCrmHLlGbcqpqN4hB7vzmZggcSMoA9nYhYMzJ9O2RRyCQoO1KJM9uUVaFYGtjyvY7E5hR3fC6x1WhRAgAh+QQFAAAGACwAAAAAGAAYAAADVFi6FUMwQgGYVU5Kem3WU9UtH8iN2AMSJ1pq7fhuoquaNXrDubyyvc4shCLtIjHZkVhsLIFN5yopfFIvQ2gze/U8CUHsVxDNam2/rjEdZpjVKTYjAQAh+QQFAAAGACwAAAAAGAAYAAADU1i6G0MwQgGYVU5Kem3WU9U1D0hwI1aCaPqxortq7fjSsT1veXfzqcUuUrOZTj3fEBlUmYrKZ/LyCzULVWYzC6Uuu57vNHwcM7KnKxpMOrKdUkUCACH5BAUAAAYALAAAAAAYABgAAANTWLqsMSTKKEC7b856W9aU1S0fyI0OBBInWmrt+G6iq5q1fMN5N0sx346GSq1YPcwQmLwsQ0XHMShcUZXWpud53WajhR8SLO4yytozN016EthGawIAIfkEBQAABgAsAAAAABgAGAAAA1MoUNzOYZBJ53o41ipwltukeI4WEiMJgWGqmu31sptLwrV805zu4T3V6oTyfYi2H4+SPJ6aDyDTiFmKqFEktmSFRrvbhrQoHMbKhbGX+wybc+hxAgAh+QQFAAAGACwAAAAAGAAYAAADVEgqUP7QhaHqajFPW1nWFEd4H7SJBFZKoSisz+mqpcyRq23hdXvTH10HCEKNiBHhBVZQHplOXtC3Q5qoQyh2CYtaIdsn1CidosrFGbO5RSfb35gvAQAh+QQFAAAGACwAAAAAGAAYAAADU0iqAvUwvjCWbTIXahfWEdcRHzhVY2mKnQqynWOeIzPTtZvBl7yiKd8L2BJqeB7jjti7IRlKyZMUDTGTzis0W6Nyc1XIVJfRep1dslSrtoJvG1QCACH5BAUAAAYALAAAAAAYABgAAANSSLoqUDBKGAZbbupSb3ub1HlZGI1XaXIWCa4oo5ox9tJteof1sm+9xoqS0w2DhBmwKPtNkEoN1Cli2o7WD9ajhWWT1NM3+hyHiVzwlkuemIecBAAh+QQFAAAGACwAAAAAGAAYAAADUxhD3CygyEnlcg3WXQLOEUcpH6GJE/mdaHdhLKrCYTs7sXiDrbQ/NdkLF9QNHUXO79FzlUzJyhLam+Y21ujoyLNxgdUv1fu8SsXmbVmbQrN97l4CACH5BAUAAAYALAAAAAAYABgAAANSWBpD/k4ARetq8EnLWdYTV3kfsYkV9p3oUpphW5AZ29KQjeKgfJU6ES8Su6lyxd2x5xvCfLPlIymURqDOpywbtHCpXqvW+OqOxGbKt4kGn8vuBAAh+QQFAAAGACwAAAAAGAAYAAADU1iqMfTwCbBqbTFOy3GWFHc5H7GJi/edaKFmbEuuYeuWZt2+UIzyIBtjptH9iD2jCJgTupBBIdO3hDalVoKykxU4mddddzvCUS3gc7mkTo2xZmUCACH5BAUAAAYALAAAAAAYABgAAANTWLoaQzBCAZhtT0Z6rdNb1S0fSHAjZp5iWoKom8Ht+GqxPeP1uEs52yrYuYVSpN+kV1SykCoatGBcTqtPKJZ42TK7TsLXExZcy+PkMB2VIrHZQgIAIfkEBQAABgAsAAAAABgAGAAAA1RYuhxDMEIBmFVOSnpt1lPVLR/IjdgDEidaau34bqKrmrV8w3k3RzHfjoZaDIE934qVvPyYxdQqKJw2PUdo9El1ZrtYa7TAvTayBDMJLRg/tbYlJwEAIfkEBQAABgAsAAAAABgAGAAAA1IItdwbg8gphbsFUioUZtpWeV8WiURXPqeorqFLfvH2ljU3Y/l00y3b7tIbrUyo1NBRVB6bv09Qd8wko7yp8al1clFYYjfMHC/L4HOjSF6bq80EACH5BAUAAAYALAAAAAAYABgAAANTSALV/i0MQqtiMEtrcX4bRwkfFIpL6Zxcqhas5apxNZf16OGTeL2wHmr3yf1exltR2CJqmDKnCWqTgqg6YAF7RPq6NKxy6Rs/y9YrWpszT9fAWgIAOw=="

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(35);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".link-list li {\n  background-color: #fff;\n  padding: 0;\n}\n.link-list li strong {\n  color: #000;\n  font-weight: bold;\n  display: block;\n}\n.link-list li a:hover {\n  text-decoration: none;\n}\n.link-list li span,\n.link-list li strong {\n  font-size: 0.9em;\n}\n.link-list li a {\n  border-top: solid 1px #eeeeee;\n  cursor: pointer;\n  display: block;\n  padding: 0.75em 1em;\n  color: #666666;\n}\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/**\n * WikimediaUI Base v0.13.0\n * Wikimedia Foundation user interface base variables\n */\n.list-header {\n  font-family: 'Helvetica Neue', 'Helvetica', 'Nimbus Sans L', 'Arial', 'Liberation Sans', sans-serif;\n  font-weight: bold;\n  font-size: 0.85em;\n  padding: 0.5em 16px 0.4em 16px;\n  background-color: #eeeeee;\n  color: #777777;\n}\n@media (min-width: 720px) {\n  .list-header {\n    padding: 0.5em 3.35em 0.4em 16px;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(39);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".panel {\n  background-color: #fff;\n  padding: 1em;\n  border-bottom: 1px solid #eee;\n}\n.panel.panel-heading {\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #eeeeee;\n  padding: 20px 16px;\n  line-height: inherit;\n}\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SearchInput = __webpack_require__(12);

var _SearchInput2 = _interopRequireDefault(_SearchInput);

__webpack_require__(42);

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
			var props = this.props,
			    action = props.action || '/' + props.language_project + '/Special:Search';

			return _react2.default.createElement(
				'form',
				{ className: 'search-form', onSubmit: this.onDoSearch.bind(this),
					method: 'GET',
					action: action },
				_react2.default.createElement(_SearchInput2.default, { onClick: props.onClickSearch, onSearch: props.onSearch,
					key: 'search-form-input',
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "input.search {\n  padding: 0.5em 28px;\n  background-position: left 6px center;\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  border-radius: 2px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  background-image: linear-gradient(transparent, transparent), url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23777%22%20d%3D%22M5.9%2015.2c1.2%201.2%202.7%201.8%204.4%201.8%201.5%200%202.9-.5%204-1.4l4.3%203.9s1-.3%201.3-1.4l-4.3-3.9c1.6-2.4%201.3-5.7-.8-7.8-1.2-1.2-2.7-1.8-4.4-1.8-1.7-.1-3.3.6-4.4%201.8-2.5%202.4-2.5%206.4-.1%208.8zM7%207.7s.1-.1.2-.1c.9-.9%202-1.3%203.2-1.3%201.2%200%202.4.5%203.2%201.3%201.8%201.8%201.8%204.7%200%206.4-.9.9-2%201.3-3.2%201.3-1.2%200-2.4-.5-3.2-1.3-1.8-1.7-1.8-4.5-.2-6.3z%22%2F%3E%0A%3C%2Fsvg%3E%0A);\n  outline: 0;\n  width: 100%;\n  background-color: #fff !important;\n  -webkit-appearance: none;\n  border: 0;\n}\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".search-form {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\n.search-form input {\n  box-sizing: border-box;\n}\n", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/**\n * WikimediaUI Base v0.13.0\n * Wikimedia Foundation user interface base variables\n */\n.content-container {\n  margin: 0 16px;\n  clear: both;\n  position: relative;\n}\n/* Extracted from /*\nhttps://en.wikipedia.org/w/load.php?debug=false&lang=en&modules=skins.minerva.tablet.styles&only=styles&debug=true\n*/\n@media all and (min-width: 720px) {\n  .content-container {\n    max-width: 55.8em;\n    margin: 0 3.35em;\n  }\n}\n@media all and (min-width: 62.5em) {\n  .content-container {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/**\n * WikimediaUI Base v0.13.0\n * Wikimedia Foundation user interface base variables\n */\n.header {\n  display: table;\n  width: 100%;\n  height: 3.35em;\n  white-space: nowrap;\n  border-top: 1px solid #c8ccd1;\n  margin-top: -1px;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.header.content-container {\n  margin-left: 0;\n  margin-right: 0;\n}\n.header > * {\n  vertical-align: middle;\n  display: table-cell;\n}\n.header > div {\n  width: 3.35em;\n  position: relative;\n}\n.header > div:last-child {\n  padding-right: 0.31em;\n}\n.header > div > .mw-ui-button {\n  display: table-cell;\n  vertical-align: middle;\n  height: 3.35em;\n}\n.header > div a {\n  display: block;\n}\n.header > div.main {\n  width: 100%;\n  vertical-align: middle;\n  padding: 0.15em 1em 0.15em 0;\n}\n.header > div.main h2 {\n  display: table;\n  width: 100%;\n  font-size: 1em;\n}\n.header > div.main h2 > * {\n  display: table-cell;\n  padding-right: 0.4em;\n  width: auto;\n  max-width: 1em;\n}\n.header.toolbar > div.main {\n  padding-right: 0;\n}\n.header h1 {\n  text-align: center;\n  font-size: 22px;\n  font-family: serif;\n  line-height: 1;\n  margin-top: 5px;\n}\n.header-container {\n  background-color: #eaecf0;\n  border-bottom: 1px solid transparent;\n  z-index: 1;\n}\n.header-container.position-fixed {\n  left: 0;\n  right: 0;\n  position: fixed;\n  top: 0;\n  border-bottom-color: #c8ccd1;\n}\n.search-header {\n  height: 3em;\n}\n.search-header .search {\n  text-align: center;\n}\n.toolbar > div > div {\n  padding-top: 5px;\n}\n@media (min-width: 62.5em) {\n  .header {\n    max-width: 57.8em;\n  }\n  .header.content-container {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/**\n * WikimediaUI Base v0.13.0\n * Wikimedia Foundation user interface base variables\n */\n.mw-ui-icon-close:before {\n  background-image: linear-gradient(transparent, transparent), url(data:image/svg+xml,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M4.983%201.606l17.465%2017.466-2.97%202.97L2.014%204.575z%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M19.407%201.605l2.97%202.97L4.914%2022.042l-2.97-2.97z%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A);\n}\n.mw-ui-icon-close-gray:before {\n  background-image: linear-gradient(transparent, transparent), url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20id%3D%22Layer_1%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22%23BBB%22%3E%0A%20%20%20%20%3Cg%20xmlns%3Adefault%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M4.983%201.606l17.465%2017.466-2.97%202.97L2.014%204.575z%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M19.407%201.605l2.97%202.97L4.914%2022.042l-2.97-2.97z%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fg%3E%3C%2Fsvg%3E%0A);\n}\n.overlay {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  z-index: 2;\n  visibility: hidden;\n  overflow: hidden;\n}\n.overlay-with-fixed-header {\n  padding-top: 3.35em;\n}\n.overlay.visible {\n  visibility: visible;\n}\n.overlay.lightbox {\n  background: #373737;\n  padding-top: 0;\n  color: #fff;\n}\n.overlay.lightbox .overlay-content {\n  margin-top: 3.35em;\n  text-align: center;\n}\n.lightbox-header {\n  top: 0;\n  background-color: #000;\n  height: 3.35em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.lightbox-header .close {\n  position: absolute;\n  margin-left: -24px;\n  top: 10px;\n  z-index: 2;\n}\n.overlay .header-container {\n  width: 100%;\n  z-index: 2;\n}\n.drawer {\n  bottom: 0;\n  -webkit-backface-visibility: hidden;\n  transition: transform 0.25s, opacity 0.25s;\n  visibility: visible;\n  opacity: 1;\n  position: fixed;\n  max-width: 500px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  box-sizing: border-box;\n  transform: translate(0, 100px);\n  padding: 0 16px 1em;\n  background-color: #f3f3f3;\n  box-shadow: 0 -1px 8px 0 rgba(0, 0, 0, 0.35);\n  text-align: center;\n  z-index: 2;\n}\n.drawer > div,\n.drawer > p {\n  margin-bottom: 1em;\n}\n.drawer > div:last-child,\n.drawer > p:last-child {\n  margin-bottom: 0;\n}\n.drawer p {\n  line-height: 1.4;\n  margin-top: 0.5em;\n}\n.drawer.visible {\n  transform: translate(0, 0);\n}\n.drawer .close {\n  cursor: pointer;\n  font-size: 0.8em;\n  margin: -1em -1em -1em 0;\n  padding: 1em 0;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n.overlay-content {\n  overflow-y: scroll;\n  height: 100%;\n}\n@media (max-width: 768px) {\n  .overlay .content-container.overlay-content {\n    margin: 0;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Overlay = __webpack_require__(5);

var _Overlay2 = _interopRequireDefault(_Overlay);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toast = function Toast(props) {
	return _react2.default.createElement(
		_Overlay2.default,
		{ className: 'mw-notification' },
		_react2.default.createElement(
			'div',
			{ className: 'content' },
			props.children
		)
	);
};

exports.default = Toast;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/**\n * WikimediaUI Base v0.13.0\n * Wikimedia Foundation user interface base variables\n */\n.mw-notification.drawer {\n  z-index: 2;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: transparent;\n  box-shadow: none;\n}\n.mw-notification.drawer .content {\n  box-sizing: border-box;\n  left: 0;\n  right: 0;\n  box-shadow: 0 -1px 8px 0 rgba(0, 0, 0, 0.35);\n  word-wrap: break-word;\n  z-index: 2;\n  font-size: 0.9em;\n  padding: 0.9em 1em;\n  background-color: #373737;\n  color: #fff;\n  margin: 0 10% 20px;\n  width: 80%;\n  text-align: center;\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CtaDrawer = function (_React$Component) {
	_inherits(CtaDrawer, _React$Component);

	function CtaDrawer() {
		_classCallCheck(this, CtaDrawer);

		return _possibleConstructorReturn(this, (CtaDrawer.__proto__ || Object.getPrototypeOf(CtaDrawer)).apply(this, arguments));
	}

	_createClass(CtaDrawer, [{
		key: 'render',
		value: function render() {
			var props = this.props;
			return _react2.default.createElement(
				_index.Overlay,
				null,
				_react2.default.createElement(
					'p',
					null,
					props.message
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_index.Button, { label: 'Log in', href: props.loginUrl, isPrimary: '1' })
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'a',
						{ href: props.signupUrl },
						props.signupText
					)
				)
			);
		}
	}]);

	return CtaDrawer;
}(_react2.default.Component);

CtaDrawer.defaultProps = {
	message: 'You need to sign in to use this feature',
	loginUrl: '//mediawiki.org/wiki/Special:Userlogin',
	signupUrl: '//www.mediawiki.org/w/index.php?title=Special:CreateAccount&campaign=wikipedia-react-components',
	signupText: 'Sign up at MediaWiki.org'
};

exports.default = CtaDrawer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".mw-ui-icon-user:before {\n  background-image: linear-gradient(transparent, transparent), url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22271.5%2072.8%2016%2016%22%3E%0A%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M273.59%2072.8c-2.03%200-2.09%201.907-2.09%202.032V88.8h13.91c2.03%200%202.09-1.907%202.09-2.032V72.8h-13.91z%22%20fill%3D%22%23d0d0d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23fff%22%20transform%3D%22matrix%28.042%200%200%20.042%20259.047%2068.752%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%22437%22%20cy%3D%22234.1%22%20r%3D%2228%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%22553.5%22%20cy%3D%22234.1%22%20r%3D%2228%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M279.88%2085.338c-1.8%200-3.533-.617-4.583-1.61-.248-.247-.248-.68%200-.927s.68-.245.928%200c.806.81%202.167%201.24%203.654%201.24%201.42%200%202.786-.43%203.59-1.24.246-.245.68-.245.926%200s.248.68%200%20.93c-1.113.988-2.722%201.61-4.52%201.61z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A);\n}\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__(10);

var _Input2 = _interopRequireDefault(_Input);

var _IntermediateState = __webpack_require__(11);

var _IntermediateState2 = _interopRequireDefault(_IntermediateState);

var _CollectionCard = __webpack_require__(14);

var _CollectionCard2 = _interopRequireDefault(_CollectionCard);

var _CollectionOverlay = __webpack_require__(15);

var _CollectionOverlay2 = _interopRequireDefault(_CollectionOverlay);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionEditorOverlay = function (_React$Component) {
	_inherits(CollectionEditorOverlay, _React$Component);

	function CollectionEditorOverlay() {
		_classCallCheck(this, CollectionEditorOverlay);

		var _this = _possibleConstructorReturn(this, (CollectionEditorOverlay.__proto__ || Object.getPrototypeOf(CollectionEditorOverlay)).call(this));

		_this.state = {
			waiting: true,
			title: null,
			thumbnail: null,
			description: null
		};
		return _this;
	}

	_createClass(CollectionEditorOverlay, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ title: this.props.title || '', description: this.props.description || '',
				waiting: false });
		}
	}, {
		key: 'updateDescription',
		value: function updateDescription(ev) {
			this.setState({ description: ev.currentTarget.value });
		}
	}, {
		key: 'updateTitle',
		value: function updateTitle(ev) {
			this.setState({ title: ev.currentTarget.value });
		}
	}, {
		key: 'save',
		value: function save() {
			var onExit = this.props.onExit ? this.props.onExit.bind(this) : null,
			    title = this.state.title,
			    description = this.state.description,
			    thumb = this.state.thumbnail ? this.state.thumbnail.title : null;

			this.setState({ waiting: true });
			var done = this.props.onSaveCollection(title, description, thumb);
			if (done) {
				done.then(function () {
					if (onExit) {
						onExit();
					}
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var body,
			    props = this.props,
			    state = this.state,
			    editTitle = props.editTitle || 'Edit collection',
			    createTitle = props.createTitle || 'Create collection',
			    description = state.description || props.description,
			    thumbnail = state.thumbnail || props.thumbnail,
			    title = state.title || props.title,
			    overlayTitle = title ? editTitle : createTitle;

			if (!state.waiting && state.title !== undefined) {
				body = _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_CollectionCard2.default, { key: 'collection-editor-overlay-preview',
						thumbnail: thumbnail, title: title, description: description }),
					_react2.default.createElement(
						'label',
						null,
						props.nameFieldLabel
					),
					_react2.default.createElement(_Input2.default, { defaultValue: title, onInput: this.updateTitle.bind(this) }),
					_react2.default.createElement(
						'label',
						null,
						props.descriptionFieldLabel
					),
					_react2.default.createElement(_Input2.default, { defaultValue: description, onInput: this.updateDescription.bind(this) }),
					_react2.default.createElement(_Button2.default, { label: props.buttonSaveLabel, disabled: !title,
						isPrimary: true, onClick: this.save.bind(this) }),
					_react2.default.createElement(_Button2.default, { label: props.buttonCancelLabel, onClick: props.onExit ? props.onExit.bind(this) : null })
				);
			} else {
				body = _react2.default.createElement(_IntermediateState2.default, null);
			}
			return _react2.default.createElement(
				_CollectionOverlay2.default,
				_extends({}, props, { className: 'collection-editor-overlay', title: overlayTitle, onExit: false }),
				body
			);
		}
	}]);

	return CollectionEditorOverlay;
}(_react2.default.Component);

CollectionEditorOverlay.defaultProps = {
	descriptionFieldLabel: 'Description',
	nameFieldLabel: 'Name',
	buttonSaveLabel: 'Save',
	buttonCancelLabel: 'Cancel'
};

exports.default = CollectionEditorOverlay;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".collection-overlay {\n  top: 4.02em !important;\n  bottom: 4.02em !important;\n  left: 2em !important;\n  right: 2em !important;\n}\n.collection-overlay h2 {\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-top: 0.5em;\n}\n.collection-overlay ul {\n  padding: 0;\n  margin-bottom: 4.02em;\n  overflow: auto;\n  bottom: 0;\n  position: absolute;\n  top: 60px;\n  left: 1em;\n  right: 1em;\n  font-size: 0.7em;\n}\n.collection-overlay li {\n  cursor: pointer;\n  border-top: solid 1px #cccccc;\n  font-size: 1.4em;\n  padding: 16px 50px 0 0;\n  position: relative;\n  overflow: hidden;\n  margin: 12px 0 0;\n  text-align: left;\n}\n.collection-overlay .overlay-content {\n  overflow: hidden;\n}\n.collection-overlay .mw-ui-icon {\n  position: absolute;\n  right: -10px;\n  top: 30%;\n}\n.collection-overlay .cancel {\n  cursor: pointer;\n  color: #333;\n  text-transform: uppercase;\n  font-size: 0.7em;\n}\n.collection-overlay .collection-actions {\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".drawer.collection-editor-overlay {\n  overflow: hidden;\n  background: #fff;\n  text-align: left;\n  padding-top: 8px;\n  width: auto;\n}\n.drawer.collection-editor-overlay .content-container {\n  margin: 0;\n}\n.drawer.collection-editor-overlay label {\n  margin-top: 2em;\n  font-weight: bold;\n  margin-bottom: 0.5em;\n  display: block;\n}\n.drawer.collection-editor-overlay .overlay-content {\n  overflow: hidden;\n}\n.drawer.collection-editor-overlay input {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioSelectInput = function (_Component) {
	_inherits(RadioSelectInput, _Component);

	function RadioSelectInput() {
		_classCallCheck(this, RadioSelectInput);

		return _possibleConstructorReturn(this, (RadioSelectInput.__proto__ || Object.getPrototypeOf(RadioSelectInput)).apply(this, arguments));
	}

	_createClass(RadioSelectInput, [{
		key: 'onChange',
		value: function onChange(ev) {
			this.props.onChange(ev.currentTarget.querySelector('input').value);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props,
			    labels = props.children.filter(function (c) {
				return c.type === 'label';
			}),
			    radios = props.children.filter(function (c) {
				return c.type === 'input';
			});

			if (labels.length !== radios.length) {
				throw new Error('Expected an equal set of children that were `label` or `input[type=radio]`');
			}
			return _react2.default.createElement(
				'div',
				{ className: 'radio-select-input', 'aria-disabled': 'false', role: 'radiogroup' },
				radios.map(function (r, i) {
					return _react2.default.createElement(
						'label',
						{ role: 'radio', className: 'radio-select-input__option',
							key: 'radio-select-input-child-' + i,
							onClick: _this2.onChange.bind(_this2) },
						_react2.default.createElement(
							'span',
							{ className: 'radio-select-input__input', 'aria-disabled': 'false' },
							r,
							_react2.default.createElement('span', { className: 'radio-select-input__status' })
						),
						_react2.default.createElement(
							'span',
							{ className: 'radio-select-input__label' },
							labels[i].props.children
						)
					);
				})
			);
		}
	}]);

	return RadioSelectInput;
}(_react.Component);

exports.default = RadioSelectInput;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".radio-select-input__option {\n  display: table;\n  width: 100%;\n  padding: 0.28571429em 0;\n}\n.radio-select-input__input input {\n  margin: 0;\n  opacity: 0;\n  z-index: 1;\n}\n.radio-select-input__input {\n  width: 1px;\n      border-width: 0.42857143em;\n}\n.radio-select-input__status {\n  background-color: #fff;\n  position: absolute;\n  left: 0;\n  border-width: 0.42857143em;\n  box-sizing: border-box;\n  width: 1.42857143em;\n  height: 1.42857143em;\n  border: 1px solid #72777d;\n  transition: background-color 100ms, border-color 100ms, border-width 100ms;\n  border-radius: 100%;\n  cursor: pointer;\n}\n\n.radio-select-input__status:hover {\n  border-color: #36c;\n}\n\n\ninput:checked + .radio-select-input__status {\n  border-width: 0.42857143em;\n  border-color: #36c;\n}\n\n.radio-select-input__input,\n.radio-select-input__label {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.radio-select-input__label {\n  padding-left: 0.42857143em;\n  white-space: normal;\n  line-height: 1.42857143em;\n}", ""]);

// exports


/***/ })
/******/ ]);
});