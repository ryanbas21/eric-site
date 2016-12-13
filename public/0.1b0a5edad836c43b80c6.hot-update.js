webpackHotUpdate(0,{

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoComponent = __webpack_require__(87);

	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

	var _pictureComponent = __webpack_require__(99);

	var _pictureComponent2 = _interopRequireDefault(_pictureComponent);

	var _navBar = __webpack_require__(100);

	var _navBar2 = _interopRequireDefault(_navBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IndexComponent = function (_Component) {
	  _inherits(IndexComponent, _Component);

	  function IndexComponent() {
	    _classCallCheck(this, IndexComponent);

	    var _this = _possibleConstructorReturn(this, (IndexComponent.__proto__ || Object.getPrototypeOf(IndexComponent)).call(this));

	    _this.state = {};
	    _this.subscribe = _this.subscribe.bind(_this);
	    return _this;
	  }

	  _createClass(IndexComponent, [{
	    key: 'subscribe',
	    value: function subscribe() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _inferno2.default.createVNode(2, 'div', null, [_inferno2.default.createVNode(16, _navBar2.default), _inferno2.default.createVNode(2, 'h1', null, 'EPB RESEARCH'), _inferno2.default.createVNode(2, 'button', {
	        'type': 'submit',
	        'className': 'button',
	        'onClick': '/subscribe'
	      }, 'Subscribe'), _inferno2.default.createVNode(16, _pictureComponent2.default)]);
	    }
	  }]);

	  return IndexComponent;
	}(_infernoComponent2.default);

	exports.default = IndexComponent;

/***/ }

})