webpackHotUpdate(0,{

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoRouter = __webpack_require__(81);

	var _createBrowserHistory = __webpack_require__(88);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _contactUs = __webpack_require__(98);

	var _contactUs2 = _interopRequireDefault(_contactUs);

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

	// app components


	// routing modules
	var browserHistory = (0, _createBrowserHistory2.default)(); // inferno module


	var routes = _inferno2.default.createVNode(16, _infernoRouter.Router, {
		'history': browserHistory,
		children: [_inferno2.default.createVNode(16, _infernoRouter.Route, {
			'path': '/login',
			'component': _login2.default
		}), _inferno2.default.createVNode(16, _infernoRouter.Route, {
			'path': '/signup',
			'component': _signup2.default
		}), _inferno2.default.createVNode(16, _infernoRouter.Route, {
			'path': '/',
			'component': _index2.default
		}), _inferno2.default.createVNode(16, _infernoRouter.Route, {
			'path': '/disclaimer',
			'component': _disclaimer2.default
		}), _inferno2.default.createVNode(16, _infernoRouter.Route, {
			'path': '/subscribe',
			'component': _subscribe2.default
		}), _inferno2.default.createVNode(16, _infernoRouter.Route, {
			'path': '/contact',
			'component': _contactUs2.default
		})]
	});

	_inferno2.default.render(routes, document.getElementById('app'));

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Login = function Login(props) {
	    return _inferno2.default.createVNode(2, 'div', null, _inferno2.default.createVNode(2, 'div', {
	        'className': 'login-container'
	    }, _inferno2.default.createVNode(2, 'form', {
	        'type': 'submit',
	        'onSubmit': 'props.handleForm'
	    }, [_inferno2.default.createVNode(2, 'label', null, ['Username ', _inferno2.default.createVNode(512, 'input', {
	        'type': 'text',
	        'className': 'log-in',
	        'id': 'username',
	        'placeholer': 'username'
	    })]), _inferno2.default.createVNode(2, 'label', null, ['Password ', _inferno2.default.createVNode(512, 'input', {
	        'type': 'password',
	        'className': 'log-in',
	        'id': 'password',
	        'placeholder': 'password'
	    })]), _inferno2.default.createVNode(2, 'button', {
	        'type': 'submit',
	        'className': 'button',
	        'onClick': props.handleForm
	    }, 'Log In')])));
	};

	exports.default = Login;

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
	    'data-magellan-expedition': 'fixed'
	  }, _inferno2.default.createVNode(2, 'dl', {
	    'class': 'sub-nav'
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

/***/ }

})