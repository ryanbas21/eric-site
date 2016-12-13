webpackHotUpdate(0,{

/***/ 107:
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

	var _navBar = __webpack_require__(104);

	var _navBar2 = _interopRequireDefault(_navBar);

	var _index = __webpack_require__(102);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppComponent = function (_Component) {
	  _inherits(AppComponent, _Component);

	  function AppComponent() {
	    _classCallCheck(this, AppComponent);

	    var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));

	    _this.state = {};

	    _this.subscribe = _this.subscribe.bind(_this);
	    _this.handleForm = _this.handleForm.bind(_this);
	    return _this;
	  }

	  _createClass(AppComponent, [{
	    key: 'subscribe',
	    value: function subscribe() {}
	  }, {
	    key: 'handleForm',
	    value: function handleForm(e) {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _inferno2.default.createVNode(2, 'div', null, [_inferno2.default.createVNode(2, 'div', null, _inferno2.default.createVNode(16, _navBar2.default)), _inferno2.default.createVNode(2, 'div', {
	        'className': 'home-container'
	      }, _inferno2.default.createVNode(16, _index2.default, {
	        'handleForm': this.handleForm,
	        'subscribe': this.subscribe
	      }))]);
	    }
	  }]);

	  return AppComponent;
	}(_infernoComponent2.default);

	exports.default = AppComponent;

/***/ }

})