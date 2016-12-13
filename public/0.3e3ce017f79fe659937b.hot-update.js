webpackHotUpdate(0,{

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
	    'class': ' bradcrumbs title-area no-bullet'
	  }, [_inferno2.default.createVNode(2, 'li', {
	    'className': 'topbar'
	  }, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/',
	    children: ' Home '
	  })), _inferno2.default.createVNode(2, 'li', {
	    'className': 'top-bar'
	  }, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/contact',
	    children: ' Contact Us '
	  })), _inferno2.default.createVNode(2, 'li', {
	    'className': 'top-bar'
	  }, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/disclaimer',
	    children: ' Disclaimer '
	  })), _inferno2.default.createVNode(2, 'li', {
	    'className': 'top-bar'
	  }, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/login',
	    children: ' Log-In '
	  })), _inferno2.default.createVNode(2, 'li', {
	    'className': 'top-bar'
	  }, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/signup',
	    children: ' Sign Up '
	  })), _inferno2.default.createVNode(2, 'li', {
	    'className': 'top-bar'
	  }, _inferno2.default.createVNode(16, _infernoRouter.Link, {
	    'to': '/subscribe',
	    children: ' Subscribe '
	  }))]));
	};

	exports.default = NavBar;

/***/ }

})