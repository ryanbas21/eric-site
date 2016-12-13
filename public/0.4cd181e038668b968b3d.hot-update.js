webpackHotUpdate(0,{

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
	  return _inferno2.default.createVNode(2, 'div', {
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
	  }, 'Log In')]));
	};

	exports.default = Login;

/***/ }

})