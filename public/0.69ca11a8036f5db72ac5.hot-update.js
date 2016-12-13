webpackHotUpdate(0,{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoComponent = __webpack_require__(87);

	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

	var _pictureComponent = __webpack_require__(103);

	var _pictureComponent2 = _interopRequireDefault(_pictureComponent);

	var _navBar = __webpack_require__(104);

	var _navBar2 = _interopRequireDefault(_navBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IndexComponent = function IndexComponent(props) {
	  return _inferno2.default.createVNode(2, 'div', null, [_inferno2.default.createVNode(2, 'h1', null, 'EPB RESEARCH'), _inferno2.default.createVNode(2, 'button', {
	    'type': 'submit',
	    'className': 'button',
	    'onClick': '/subscribe'
	  }, 'Subscribe'), _inferno2.default.createVNode(16, _pictureComponent2.default)]);
	};

	exports.default = IndexComponent;

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoRouter = __webpack_require__(81);

	var _contactus = __webpack_require__(105);

	var _contactus2 = _interopRequireDefault(_contactus);

	var _login = __webpack_require__(99);

	var _login2 = _interopRequireDefault(_login);

	var _signup = __webpack_require__(100);

	var _signup2 = _interopRequireDefault(_signup);

	var _subscribe = __webpack_require__(101);

	var _subscribe2 = _interopRequireDefault(_subscribe);

	var _index = __webpack_require__(102);

	var _index2 = _interopRequireDefault(_index);

	var _disclaimer = __webpack_require__(106);

	var _disclaimer2 = _interopRequireDefault(_disclaimer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavBar = function NavBar(props) {
	  return _inferno2.default.createVNode(2, 'nav', {
	    'class': 'top-bar',
	    'data-topbar': true,
	    'role': 'navigation'
	  }, _inferno2.default.createVNode(2, 'ul', {
	    'class': 'title-area'
	  }, [_inferno2.default.createVNode(2, 'li', null, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/',
	    children: ' Home '
	  })), _inferno2.default.createVNode(2, 'li', null, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/contact',
	    children: ' Contact Us '
	  })), _inferno2.default.createVNode(2, 'li', null, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/disclaimer',
	    children: ' Disclaimer '
	  })), _inferno2.default.createVNode(2, 'li', null, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/login',
	    children: ' Log-In '
	  })), _inferno2.default.createVNode(2, 'li', null, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/signup',
	    children: ' Sign Up '
	  })), _inferno2.default.createVNode(2, 'li', null, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/subscribe',
	    children: ' Subscribe '
	  }))]));
	};

	exports.default = NavBar;

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContactUs = function ContactUs(props) {
	  return _inferno2.default.createVNode(2, 'div', null, [_inferno2.default.createVNode(2, 'h3', null, ' EPB Research'), _inferno2.default.createVNode(2, 'p', null, 'Please email eric@epbadvising.com for all inquiries.'), _inferno2.default.createVNode(2, 'p', null, 'Feedback is greatly appreciated.  I look forward to hearing from you!'), _inferno2.default.createVNode(2, 'h4', null, 'Customer Service'), _inferno2.default.createVNode(2, 'p', null, 'Need to unsubscribe?  Go to this link for instructions on cancelling your plan(the whole process should take under 2 minutes).My goal is to respond to every email within 1 business day.A few of the most common questions I get are below:'), _inferno2.default.createVNode(2, 'h3', null, 'F.A.Q'), _inferno2.default.createVNode(2, 'p', null, _inferno2.default.createVNode(2, 'h5', null, 'When is the next newsletter coming out?')), _inferno2.default.createVNode(2, 'p', null, 'The newsletter is always sent out the first Monday of the month.If a holiday lands on a Monday, the newsletter will be sent out Tuesday morning.The newsletter should hit your inbox at 6am.As a newsletter provider I cannot give personalized investment advice.I do not know your personal situation, and will not make individual recommendations.'), _inferno2.default.createVNode(2, 'p', null, 'Thanks,'), _inferno2.default.createVNode(2, 'p', null, 'Eric Basmajian')]);
	};

	exports.default = ContactUs;

/***/ },

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
	      }, this.props.children)]);
	    }
	  }]);

	  return AppComponent;
	}(_infernoComponent2.default);

	exports.default = AppComponent;

/***/ }

})