webpackHotUpdate(0,{

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoRouter = __webpack_require__(81);

	var _createBrowserHistory = __webpack_require__(88);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _contactUs = __webpack_require__(101);

	var _contactUs2 = _interopRequireDefault(_contactUs);

	var _login = __webpack_require__(103);

	var _login2 = _interopRequireDefault(_login);

	var _signup = __webpack_require__(104);

	var _signup2 = _interopRequireDefault(_signup);

	var _subscribe = __webpack_require__(106);

	var _subscribe2 = _interopRequireDefault(_subscribe);

	var _index = __webpack_require__(98);

	var _index2 = _interopRequireDefault(_index);

	var _disclaimer = __webpack_require__(105);

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
			'paht': '/contact',
			'component': _contactUs2.default
		})]
	});

	_inferno2.default.render(routes, document.getElementById('app'));

/***/ },

/***/ 101:
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

/***/ }

})