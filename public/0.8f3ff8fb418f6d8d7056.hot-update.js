webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(76);
	module.exports = __webpack_require__(78);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
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

	var _app = __webpack_require__(107);

	var _app2 = _interopRequireDefault(_app);

	var _disclaimer = __webpack_require__(106);

	var _disclaimer2 = _interopRequireDefault(_disclaimer);

	var _index = __webpack_require__(102);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// inferno module
	var browserHistory = (0, _createBrowserHistory2.default)();

	// app components


	// routing modules


	var routes = _inferno2.default.createVNode(16, _infernoRouter.Router, {
		'history': browserHistory,
		children: [_inferno2.default.createVNode(16, _infernoRouter.Route, {
			'component': _app2.default,
			children: [_inferno2.default.createVNode(16, _infernoRouter.IndexRoute, {
				'component': _login2.default
			}), _inferno2.default.createVNode(16, _infernoRouter.Route, {
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
		}), _inferno2.default.createVNode(16, _infernoRouter.Route, {
			'component': _index2.default,
			'path': '/'
		})]
	});

	_inferno2.default.render(routes, document.getElementById('app'));

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(80);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * inferno v1.0.0-beta32
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.Inferno = global.Inferno || {});
	})(undefined, function (exports) {
	    'use strict';

	    var NO_OP = '$NO_OP';
	    var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
	    var isBrowser = typeof window !== 'undefined' && window.document;

	    // this is MUCH faster than .constructor === Array and instanceof Array
	    // in Node 7 and the later versions of V8, slower in older versions though
	    var isArray = Array.isArray;
	    function isStatefulComponent(o) {
	        return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
	    }
	    function isStringOrNumber(obj) {
	        return isString(obj) || isNumber(obj);
	    }
	    function isNullOrUndef(obj) {
	        return isUndefined(obj) || isNull(obj);
	    }
	    function isInvalid(obj) {
	        return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	    }
	    function isFunction(obj) {
	        return typeof obj === 'function';
	    }
	    function isAttrAnEvent(attr) {
	        return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isNumber(obj) {
	        return typeof obj === 'number';
	    }
	    function isNull(obj) {
	        return obj === null;
	    }
	    function isTrue(obj) {
	        return obj === true;
	    }
	    function isUndefined(obj) {
	        return obj === undefined;
	    }
	    function isObject(o) {
	        return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
	    }
	    function throwError(message) {
	        if (!message) {
	            message = ERROR_MSG;
	        }
	        throw new Error("Inferno Error: " + message);
	    }
	    function warning(condition, message) {
	        if (!condition) {
	            console.error(message);
	        }
	    }
	    var EMPTY_OBJ = {};

	    function cloneVNode(vNodeToClone, props) {
	        var _children = [],
	            len = arguments.length - 2;
	        while (len-- > 0) {
	            _children[len] = arguments[len + 2];
	        }var children = _children;
	        if (_children.length > 0 && !isNull(_children[0])) {
	            if (!props) {
	                props = {};
	            }
	            if (_children.length === 1) {
	                children = _children[0];
	            }
	            if (isUndefined(props.children)) {
	                props.children = children;
	            } else {
	                if (isArray(children)) {
	                    if (isArray(props.children)) {
	                        props.children = props.children.concat(children);
	                    } else {
	                        props.children = [props.children].concat(children);
	                    }
	                } else {
	                    if (isArray(props.children)) {
	                        props.children.push(children);
	                    } else {
	                        props.children = [props.children];
	                        props.children.push(children);
	                    }
	                }
	            }
	        }
	        children = null;
	        var flags = vNodeToClone.flags;
	        var events = vNodeToClone.events || props && props.events || null;
	        var newVNode;
	        if (isArray(vNodeToClone)) {
	            newVNode = vNodeToClone.map(function (vNode) {
	                return cloneVNode(vNode);
	            });
	        } else if (isNullOrUndef(props) && isNullOrUndef(children)) {
	            newVNode = Object.assign({}, vNodeToClone);
	        } else {
	            var key = !isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : props.key;
	            var ref = vNodeToClone.ref || props.ref;
	            if (flags & 28 /* Component */) {
	                    newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, events, key, ref, true);
	                } else if (flags & 3970 /* Element */) {
	                    children = props && props.children || vNodeToClone.children;
	                    newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), children, events, key, ref, !children);
	                }
	        }
	        if (flags & 28 /* Component */) {
	                var newProps = newVNode.props;
	                if (newProps) {
	                    var newChildren = newProps.children;
	                    // we need to also clone component children that are in props
	                    // as the children may also have been hoisted
	                    if (newChildren) {
	                        if (isArray(newChildren)) {
	                            for (var i = 0; i < newChildren.length; i++) {
	                                var child = newChildren[i];
	                                if (!isInvalid(child) && isVNode(child)) {
	                                    newProps.children[i] = cloneVNode(child);
	                                }
	                            }
	                        } else if (isVNode(newChildren)) {
	                            newProps.children = cloneVNode(newChildren);
	                        }
	                    }
	                }
	                newVNode.children = null;
	            }
	        newVNode.dom = null;
	        return newVNode;
	    }

	    function _normalizeVNodes(nodes, result, i) {
	        for (; i < nodes.length; i++) {
	            var n = nodes[i];
	            if (!isInvalid(n)) {
	                if (Array.isArray(n)) {
	                    _normalizeVNodes(n, result, 0);
	                } else {
	                    if (isStringOrNumber(n)) {
	                        n = createTextVNode(n);
	                    } else if (isVNode(n) && n.dom) {
	                        n = cloneVNode(n);
	                    }
	                    result.push(n);
	                }
	            }
	        }
	    }
	    function normalizeVNodes(nodes) {
	        var newNodes;
	        // we assign $ which basically means we've flagged this array for future note
	        // if it comes back again, we need to clone it, as people are using it
	        // in an immutable way
	        // tslint:disable
	        if (nodes['$']) {
	            nodes = nodes.slice();
	        } else {
	            nodes['$'] = true;
	        }
	        // tslint:enable
	        for (var i = 0; i < nodes.length; i++) {
	            var n = nodes[i];
	            if (isInvalid(n)) {
	                if (!newNodes) {
	                    newNodes = nodes.slice(0, i);
	                }
	                newNodes.push(n);
	            } else if (Array.isArray(n)) {
	                var result = (newNodes || nodes).slice(0, i);
	                _normalizeVNodes(nodes, result, i);
	                return result;
	            } else if (isStringOrNumber(n)) {
	                if (!newNodes) {
	                    newNodes = nodes.slice(0, i);
	                }
	                newNodes.push(createTextVNode(n));
	            } else if (isVNode(n) && n.dom) {
	                if (!newNodes) {
	                    newNodes = nodes.slice(0, i);
	                }
	                newNodes.push(cloneVNode(n));
	            } else if (newNodes) {
	                newNodes.push(cloneVNode(n));
	            }
	        }
	        return newNodes || nodes;
	    }
	    function normalizeChildren(children) {
	        if (isArray(children)) {
	            return normalizeVNodes(children);
	        } else if (isVNode(children) && children.dom) {
	            return cloneVNode(children);
	        }
	        return children;
	    }
	    function normalizeProps(vNode, props, children) {
	        if (!(vNode.flags & 28 /* Component */) && isNullOrUndef(children) && !isNullOrUndef(props.children)) {
	            vNode.children = props.children;
	        }
	        if (props.ref) {
	            vNode.ref = props.ref;
	        }
	        if (props.events) {
	            vNode.events = props.events;
	        }
	        if (!isNullOrUndef(props.key)) {
	            vNode.key = props.key;
	        }
	    }
	    function normalize(vNode) {
	        var props = vNode.props;
	        var children = vNode.children;
	        // convert a wrongly created type back to element
	        if (isString(vNode.type) && vNode.flags & 28 /* Component */) {
	            vNode.flags = 3970 /* Element */;
	        }
	        if (props) {
	            normalizeProps(vNode, props, children);
	        }
	        if (!isInvalid(children)) {
	            vNode.children = normalizeChildren(children);
	        }
	        if (props && !isInvalid(props.children)) {
	            props.children = normalizeChildren(props.children);
	        }
	    }
	    function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
	        if (flags & 16 /* ComponentUnknown */) {
	                flags = isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
	            }
	        var vNode = {
	            children: isUndefined(children) ? null : children,
	            dom: null,
	            events: events || null,
	            flags: flags || 0,
	            key: key === undefined ? null : key,
	            props: props || null,
	            ref: ref || null,
	            type: type
	        };
	        if (!noNormalise) {
	            normalize(vNode);
	        }
	        return vNode;
	    }
	    function createVoidVNode() {
	        return createVNode(4096 /* Void */);
	    }
	    function createTextVNode(text) {
	        return createVNode(1 /* Text */, null, null, text);
	    }
	    function isVNode(o) {
	        return !!o.flags;
	    }

	    var devToolsStatus = {
	        connected: false
	    };
	    var internalIncrementer = {
	        id: 0
	    };
	    var componentIdMap = new Map();
	    function getIncrementalId() {
	        return internalIncrementer.id++;
	    }
	    function sendToDevTools(global, data) {
	        var event = new CustomEvent('inferno.client.message', {
	            detail: JSON.stringify(data, function (key, val) {
	                if (!isNull(val) && !isUndefined(val)) {
	                    if (key === '_vComponent' || !isUndefined(val.nodeType)) {
	                        return;
	                    } else if (isFunction(val)) {
	                        return "$$f:" + val.name;
	                    }
	                }
	                return val;
	            })
	        });
	        global.dispatchEvent(event);
	    }
	    function rerenderRoots() {
	        for (var i = 0; i < roots.length; i++) {
	            var root = roots[i];
	            render(root.input, root.dom);
	        }
	    }
	    function initDevToolsHooks(global) {
	        global.__INFERNO_DEVTOOLS_GLOBAL_HOOK__ = roots;
	        global.addEventListener('inferno.devtools.message', function (message) {
	            var detail = JSON.parse(message.detail);
	            var type = detail.type;
	            switch (type) {
	                case 'get-roots':
	                    if (!devToolsStatus.connected) {
	                        devToolsStatus.connected = true;
	                        rerenderRoots();
	                        sendRoots(global);
	                    }
	                    break;
	                default:
	                    // TODO:?
	                    break;
	            }
	        });
	    }
	    function sendRoots(global) {
	        sendToDevTools(global, { type: 'roots', data: roots });
	    }

	    var Lifecycle = function Lifecycle() {
	        this.listeners = [];
	        this.fastUnmount = true;
	    };
	    Lifecycle.prototype.addListener = function addListener(callback) {
	        this.listeners.push(callback);
	    };
	    Lifecycle.prototype.trigger = function trigger() {
	        var this$1 = this;

	        for (var i = 0; i < this.listeners.length; i++) {
	            this$1.listeners[i]();
	        }
	    };

	    function constructDefaults(string, object, value) {
	        /* eslint no-return-assign: 0 */
	        string.split(',').forEach(function (i) {
	            return object[i] = value;
	        });
	    }
	    var xlinkNS = 'http://www.w3.org/1999/xlink';
	    var xmlNS = 'http://www.w3.org/XML/1998/namespace';
	    var svgNS = 'http://www.w3.org/2000/svg';
	    var strictProps = {};
	    var booleanProps = {};
	    var namespaces = {};
	    var isUnitlessNumber = {};
	    var skipProps = {};
	    var dehyphenProps = {
	        textAnchor: 'text-anchor'
	    };
	    var delegatedProps = {};
	    constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
	    constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
	    constructDefaults('volume,defaultValue,defaultChecked', strictProps, true);
	    constructDefaults('children,ref,key,selected,checked,value,multiple', skipProps, true);
	    constructDefaults('onClick,onMouseDown,onMouseUp,onMouseMove', delegatedProps, true);
	    constructDefaults('muted,scoped,loop,open,checked,default,capture,disabled,readonly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate', booleanProps, true);
	    constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);

	    var delegatedEvents = new Map();
	    function handleEvent(name, lastEvent, nextEvent, dom) {
	        var delegatedRoots = delegatedEvents.get(name);
	        if (nextEvent) {
	            if (!delegatedRoots) {
	                delegatedRoots = { items: new Map(), count: 0, docEvent: null };
	                var docEvent = attachEventToDocument(name, delegatedRoots);
	                delegatedRoots.docEvent = docEvent;
	                delegatedEvents.set(name, delegatedRoots);
	            }
	            if (!lastEvent) {
	                delegatedRoots.count++;
	            }
	            delegatedRoots.items.set(dom, nextEvent);
	        } else if (delegatedRoots) {
	            if (delegatedRoots.items.has(dom)) {
	                delegatedRoots.count--;
	                delegatedRoots.items.delete(dom);
	                if (delegatedRoots.count === 0) {
	                    document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
	                    delegatedEvents.delete(name);
	                }
	            }
	        }
	    }
	    function dispatchEvent(event, dom, items, count, eventData) {
	        var eventsToTrigger = items.get(dom);
	        if (eventsToTrigger) {
	            count--;
	            // linkEvent object
	            eventData.dom = dom;
	            if (eventsToTrigger.event) {
	                eventsToTrigger.event(eventsToTrigger.data, event);
	            } else {
	                eventsToTrigger(event);
	            }
	            if (eventData.stopPropagation) {
	                return;
	            }
	        }
	        var parentDom = dom.parentNode;
	        if (count > 0 && (parentDom || parentDom === document.body)) {
	            dispatchEvent(event, parentDom, items, count, eventData);
	        }
	    }
	    function normalizeEventName(name) {
	        return name.substr(2).toLowerCase();
	    }
	    function attachEventToDocument(name, delegatedRoots) {
	        var docEvent = function docEvent(event) {
	            var eventData = {
	                stopPropagation: false,
	                dom: document
	            };
	            // we have to do this as some browsers recycle the same Event between calls
	            // so we need to make the property configurable
	            Object.defineProperty(event, 'currentTarget', {
	                configurable: true,
	                get: function get() {
	                    return eventData.dom;
	                }
	            });
	            event.stopPropagation = function () {
	                eventData.stopPropagation = true;
	            };
	            var count = delegatedRoots.count;
	            if (count > 0) {
	                dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
	            }
	        };
	        document.addEventListener(normalizeEventName(name), docEvent);
	        return docEvent;
	    }

	    function isCheckedType(type) {
	        return type === 'checkbox' || type === 'radio';
	    }
	    function isControlled(props) {
	        var usesChecked = isCheckedType(props.type);
	        return usesChecked ? !isNullOrUndef(props.checked) : !isNullOrUndef(props.value);
	    }
	    function onTextInputChange(e) {
	        var vNode = this.vNode;
	        var events = vNode.events || EMPTY_OBJ;
	        var dom = vNode.dom;
	        if (events.onInput) {
	            events.onInput(e);
	        } else if (events.oninput) {
	            events.oninput(e);
	        }
	        // the user may have updated the vNode from the above onInput events
	        // so we need to get it from the context of `this` again
	        applyValue(this.vNode, dom);
	    }
	    function onCheckboxChange(e) {
	        var vNode = this.vNode;
	        var events = vNode.events || EMPTY_OBJ;
	        var dom = vNode.dom;
	        if (events.onClick) {
	            events.onClick(e);
	        } else if (events.onclick) {
	            events.onclick(e);
	        }
	        // the user may have updated the vNode from the above onClick events
	        // so we need to get it from the context of `this` again
	        applyValue(this.vNode, dom);
	    }
	    function handleAssociatedRadioInputs(name) {
	        var inputs = document.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
	        [].forEach.call(inputs, function (dom) {
	            var inputWrapper = wrappers.get(dom);
	            if (inputWrapper) {
	                var props = inputWrapper.vNode.props;
	                if (props) {
	                    dom.checked = inputWrapper.vNode.props.checked;
	                }
	            }
	        });
	    }
	    function processInput(vNode, dom) {
	        var props = vNode.props || EMPTY_OBJ;
	        applyValue(vNode, dom);
	        if (isControlled(props)) {
	            var inputWrapper = wrappers.get(dom);
	            if (!inputWrapper) {
	                inputWrapper = {
	                    vNode: vNode
	                };
	                if (isCheckedType(props.type)) {
	                    dom.onclick = onCheckboxChange.bind(inputWrapper);
	                    dom.onclick.wrapped = true;
	                } else {
	                    dom.oninput = onTextInputChange.bind(inputWrapper);
	                    dom.oninput.wrapped = true;
	                }
	                wrappers.set(dom, inputWrapper);
	            }
	            inputWrapper.vNode = vNode;
	        }
	    }
	    function applyValue(vNode, dom) {
	        var props = vNode.props || EMPTY_OBJ;
	        var type = props.type;
	        var value = props.value;
	        var checked = props.checked;
	        if (type !== dom.type && type) {
	            dom.type = type;
	        }
	        if (props.multiple !== dom.multiple) {
	            dom.multiple = props.multiple;
	        }
	        if (isCheckedType(type)) {
	            if (!isNullOrUndef(value)) {
	                dom.value = value;
	            }
	            dom.checked = checked;
	            if (type === 'radio' && props.name) {
	                handleAssociatedRadioInputs(props.name);
	            }
	        } else {
	            if (!isNullOrUndef(value) && dom.value !== value) {
	                dom.value = value;
	            } else if (!isNullOrUndef(checked)) {
	                dom.checked = checked;
	            }
	        }
	    }

	    function isControlled$1(props) {
	        return !isNullOrUndef(props.value);
	    }
	    function updateChildOption(vNode, value) {
	        var props = vNode.props || EMPTY_OBJ;
	        var dom = vNode.dom;
	        // we do this as multiple may have changed
	        dom.value = props.value;
	        if (isArray(value) && value.indexOf(props.value) !== -1 || props.value === value) {
	            dom.selected = true;
	        } else {
	            dom.selected = props.selected || false;
	        }
	    }
	    function onSelectChange(e) {
	        var vNode = this.vNode;
	        var events = vNode.events || EMPTY_OBJ;
	        var dom = vNode.dom;
	        if (events.onChange) {
	            events.onChange(e);
	        } else if (events.onchange) {
	            events.onchange(e);
	        }
	        // the user may have updated the vNode from the above onChange events
	        // so we need to get it from the context of `this` again
	        applyValue$1(this.vNode, dom);
	    }
	    function processSelect(vNode, dom) {
	        var props = vNode.props || EMPTY_OBJ;
	        applyValue$1(vNode, dom);
	        if (isControlled$1(props)) {
	            var selectWrapper = wrappers.get(dom);
	            if (!selectWrapper) {
	                selectWrapper = {
	                    vNode: vNode
	                };
	                dom.onchange = onSelectChange.bind(selectWrapper);
	                dom.onchange.wrapped = true;
	                wrappers.set(dom, selectWrapper);
	            }
	            selectWrapper.vNode = vNode;
	        }
	    }
	    function applyValue$1(vNode, dom) {
	        var props = vNode.props || EMPTY_OBJ;
	        if (props.multiple !== dom.multiple) {
	            dom.multiple = props.multiple;
	        }
	        var children = vNode.children;
	        var value = props.value;
	        if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	                updateChildOption(children[i], value);
	            }
	        } else if (isVNode(children)) {
	            updateChildOption(children, value);
	        }
	    }

	    function isControlled$2(props) {
	        return !isNullOrUndef(props.value);
	    }
	    function onTextareaInputChange(e) {
	        var vNode = this.vNode;
	        var events = vNode.events || EMPTY_OBJ;
	        var dom = vNode.dom;
	        if (events.onInput) {
	            events.onInput(e);
	        } else if (events.oninput) {
	            events.oninput(e);
	        }
	        // the user may have updated the vNode from the above onInput events
	        // so we need to get it from the context of `this` again
	        applyValue$2(this.vNode, dom);
	    }
	    function processTextarea(vNode, dom) {
	        var props = vNode.props || EMPTY_OBJ;
	        applyValue$2(vNode, dom);
	        var textareaWrapper = wrappers.get(dom);
	        if (isControlled$2(props)) {
	            if (!textareaWrapper) {
	                textareaWrapper = {
	                    vNode: vNode
	                };
	                dom.oninput = onTextareaInputChange.bind(textareaWrapper);
	                dom.oninput.wrapped = true;
	                wrappers.set(dom, textareaWrapper);
	            }
	            textareaWrapper.vNode = vNode;
	        }
	    }
	    function applyValue$2(vNode, dom) {
	        var props = vNode.props || EMPTY_OBJ;
	        var value = props.value;
	        if (dom.value !== value) {
	            dom.value = value;
	        }
	    }

	    var wrappers = new Map();
	    function processElement(flags, vNode, dom) {
	        if (flags & 512 /* InputElement */) {
	                processInput(vNode, dom);
	            } else if (flags & 2048 /* SelectElement */) {
	                processSelect(vNode, dom);
	            } else if (flags & 1024 /* TextareaElement */) {
	                processTextarea(vNode, dom);
	            }
	    }

	    function unmount(vNode, parentDom, lifecycle, canRecycle, shallowUnmount, isRecycling) {
	        var flags = vNode.flags;
	        if (flags & 28 /* Component */) {
	                unmountComponent(vNode, parentDom, lifecycle, canRecycle, shallowUnmount, isRecycling);
	            } else if (flags & 3970 /* Element */) {
	                unmountElement(vNode, parentDom, lifecycle, canRecycle, shallowUnmount, isRecycling);
	            } else if (flags & (1 /* Text */ | 4096 /* Void */)) {
	            unmountVoidOrText(vNode, parentDom);
	        }
	    }
	    function unmountVoidOrText(vNode, parentDom) {
	        if (parentDom) {
	            removeChild(parentDom, vNode.dom);
	        }
	    }
	    function unmountComponent(vNode, parentDom, lifecycle, canRecycle, shallowUnmount, isRecycling) {
	        var instance = vNode.children;
	        var flags = vNode.flags;
	        var isStatefulComponent$$1 = flags & 4;
	        var ref = vNode.ref;
	        var dom = vNode.dom;
	        if (!isRecycling) {
	            if (!shallowUnmount) {
	                if (isStatefulComponent$$1) {
	                    var subLifecycle = instance._lifecycle;
	                    if (!subLifecycle.fastUnmount) {
	                        unmount(instance._lastInput, null, lifecycle, false, shallowUnmount, isRecycling);
	                    }
	                } else {
	                    if (!lifecycle.fastUnmount) {
	                        unmount(instance, null, lifecycle, false, shallowUnmount, isRecycling);
	                    }
	                }
	            }
	            if (isStatefulComponent$$1) {
	                instance._ignoreSetState = true;
	                instance.componentWillUnmount();
	                if (ref && !isRecycling) {
	                    ref(null);
	                }
	                instance._unmounted = true;
	                findDOMNodeEnabled && componentToDOMNodeMap.delete(instance);
	            } else if (!isNullOrUndef(ref)) {
	                if (!isNullOrUndef(ref.onComponentWillUnmount)) {
	                    ref.onComponentWillUnmount(dom);
	                }
	            }
	        }
	        if (parentDom) {
	            var lastInput = instance._lastInput;
	            if (isNullOrUndef(lastInput)) {
	                lastInput = instance;
	            }
	            removeChild(parentDom, dom);
	        }
	        if (recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
	            poolComponent(vNode);
	        }
	    }
	    function unmountElement(vNode, parentDom, lifecycle, canRecycle, shallowUnmount, isRecycling) {
	        var dom = vNode.dom;
	        var ref = vNode.ref;
	        var events = vNode.events;
	        if (!shallowUnmount && !lifecycle.fastUnmount) {
	            if (ref && !isRecycling) {
	                unmountRef(ref);
	            }
	            var children = vNode.children;
	            if (!isNullOrUndef(children)) {
	                unmountChildren$1(children, lifecycle, shallowUnmount, isRecycling);
	            }
	        }
	        if (!isNull(events)) {
	            for (var name in events) {
	                // do not add a hasOwnProperty check here, it affects performance
	                patchEvent(name, events[name], null, dom, lifecycle);
	                events[name] = null;
	            }
	        }
	        if (parentDom) {
	            removeChild(parentDom, dom);
	        }
	        if (recyclingEnabled && (parentDom || canRecycle)) {
	            poolElement(vNode);
	        }
	    }
	    function unmountChildren$1(children, lifecycle, shallowUnmount, isRecycling) {
	        if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	                var child = children[i];
	                if (!isInvalid(child) && isObject(child)) {
	                    unmount(child, null, lifecycle, false, shallowUnmount, isRecycling);
	                }
	            }
	        } else if (isObject(children)) {
	            unmount(children, null, lifecycle, false, shallowUnmount, isRecycling);
	        }
	    }
	    function unmountRef(ref) {
	        if (isFunction(ref)) {
	            ref(null);
	        } else {
	            if (isInvalid(ref)) {
	                return;
	            }
	            if (process.env.NODE_ENV !== 'production') {
	                throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	            }
	            throwError();
	        }
	    }

	    function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	        if (lastVNode !== nextVNode) {
	            var lastFlags = lastVNode.flags;
	            var nextFlags = nextVNode.flags;
	            if (nextFlags & 28 /* Component */) {
	                    if (lastFlags & 28 /* Component */) {
	                            patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
	                        } else {
	                        replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
	                    }
	                } else if (nextFlags & 3970 /* Element */) {
	                    if (lastFlags & 3970 /* Element */) {
	                            patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	                        } else {
	                        replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
	                    }
	                } else if (nextFlags & 1 /* Text */) {
	                    if (lastFlags & 1 /* Text */) {
	                            patchText(lastVNode, nextVNode);
	                        } else {
	                        replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
	                    }
	                } else if (nextFlags & 4096 /* Void */) {
	                    if (lastFlags & 4096 /* Void */) {
	                            patchVoid(lastVNode, nextVNode);
	                        } else {
	                        replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
	                    }
	                } else {
	                // Error case: mount new one replacing old one
	                replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	            }
	        }
	    }
	    function unmountChildren(children, dom, lifecycle, isRecycling) {
	        if (isVNode(children)) {
	            unmount(children, dom, lifecycle, true, false, isRecycling);
	        } else if (isArray(children)) {
	            removeAllChildren(dom, children, lifecycle, false, isRecycling);
	        } else {
	            dom.textContent = '';
	        }
	    }
	    function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	        var nextTag = nextVNode.type;
	        var lastTag = lastVNode.type;
	        if (lastTag !== nextTag) {
	            replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	        } else {
	            var dom = lastVNode.dom;
	            var lastProps = lastVNode.props;
	            var nextProps = nextVNode.props;
	            var lastChildren = lastVNode.children;
	            var nextChildren = nextVNode.children;
	            var lastFlags = lastVNode.flags;
	            var nextFlags = nextVNode.flags;
	            var lastRef = lastVNode.ref;
	            var nextRef = nextVNode.ref;
	            var lastEvents = lastVNode.events;
	            var nextEvents = nextVNode.events;
	            nextVNode.dom = dom;
	            if (isSVG || nextFlags & 128 /* SvgElement */) {
	                isSVG = true;
	            }
	            if (lastChildren !== nextChildren) {
	                patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	            }
	            if (!(nextFlags & 2 /* HtmlElement */)) {
	                processElement(nextFlags, nextVNode, dom);
	            }
	            if (lastProps !== nextProps) {
	                patchProps(lastProps, nextProps, dom, lifecycle, context, isSVG);
	            }
	            if (lastEvents !== nextEvents) {
	                patchEvents(lastEvents, nextEvents, dom, lifecycle);
	            }
	            if (nextRef) {
	                if (lastRef !== nextRef || isRecycling) {
	                    mountRef(dom, nextRef, lifecycle);
	                }
	            }
	        }
	    }
	    function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
	        var patchArray = false;
	        var patchKeyed = false;
	        if (nextFlags & 64 /* HasNonKeyedChildren */) {
	                patchArray = true;
	            } else if (lastFlags & 32 /* HasKeyedChildren */ && nextFlags & 32 /* HasKeyedChildren */) {
	            patchKeyed = true;
	            patchArray = true;
	        } else if (isInvalid(nextChildren)) {
	            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	        } else if (isInvalid(lastChildren)) {
	            if (isStringOrNumber(nextChildren)) {
	                setTextContent(dom, nextChildren);
	            } else {
	                if (isArray(nextChildren)) {
	                    mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
	                } else {
	                    mount(nextChildren, dom, lifecycle, context, isSVG);
	                }
	            }
	        } else if (isStringOrNumber(nextChildren)) {
	            if (isStringOrNumber(lastChildren)) {
	                updateTextContent(dom, nextChildren);
	            } else {
	                unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	                setTextContent(dom, nextChildren);
	            }
	        } else if (isArray(nextChildren)) {
	            if (isArray(lastChildren)) {
	                patchArray = true;
	                if (isKeyed(lastChildren, nextChildren)) {
	                    patchKeyed = true;
	                }
	            } else {
	                unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
	            }
	        } else if (isArray(lastChildren)) {
	            removeAllChildren(dom, lastChildren, lifecycle, false, isRecycling);
	            mount(nextChildren, dom, lifecycle, context, isSVG);
	        } else if (isVNode(nextChildren)) {
	            if (isVNode(lastChildren)) {
	                patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	            } else {
	                unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	                mount(nextChildren, dom, lifecycle, context, isSVG);
	            }
	        } else if (isVNode(lastChildren)) {} else {}
	        if (patchArray) {
	            if (patchKeyed) {
	                patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	            } else {
	                patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	            }
	        }
	    }
	    function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
	        var lastType = lastVNode.type;
	        var nextType = nextVNode.type;
	        var nextProps = nextVNode.props || EMPTY_OBJ;
	        var lastKey = lastVNode.key;
	        var nextKey = nextVNode.key;
	        if (lastType !== nextType) {
	            if (isClass) {
	                replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	            } else {
	                var lastInput = lastVNode.children._lastInput || lastVNode.children;
	                var nextInput = createStatelessComponentInput(nextVNode, nextType, nextProps, context);
	                patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
	                var dom = nextVNode.dom = nextInput.dom;
	                nextVNode.children = nextInput;
	                mountStatelessComponentCallbacks(nextVNode.ref, dom, lifecycle);
	                unmount(lastVNode, null, lifecycle, false, true, isRecycling);
	            }
	        } else {
	            if (isClass) {
	                if (lastKey !== nextKey) {
	                    replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	                    return false;
	                }
	                var instance = lastVNode.children;
	                if (instance._unmounted) {
	                    if (isNull(parentDom)) {
	                        return true;
	                    }
	                    replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
	                } else {
	                    var defaultProps = nextType.defaultProps;
	                    var lastProps = instance.props;
	                    if (instance._devToolsStatus.connected && !instance._devToolsId) {
	                        componentIdMap.set(instance._devToolsId = getIncrementalId(), instance);
	                    }
	                    lifecycle.fastUnmount = false;
	                    if (!isUndefined(defaultProps)) {
	                        copyPropsTo(lastProps, nextProps);
	                        nextVNode.props = nextProps;
	                    }
	                    var lastState = instance.state;
	                    var nextState = instance.state;
	                    var childContext = instance.getChildContext();
	                    nextVNode.children = instance;
	                    instance._isSVG = isSVG;
	                    if (!isNullOrUndef(childContext)) {
	                        childContext = Object.assign({}, context, childContext);
	                    } else {
	                        childContext = context;
	                    }
	                    var lastInput$1 = instance._lastInput;
	                    var nextInput$1 = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false);
	                    var didUpdate = true;
	                    instance._childContext = childContext;
	                    if (isInvalid(nextInput$1)) {
	                        nextInput$1 = createVoidVNode();
	                    } else if (isArray(nextInput$1)) {
	                        if (process.env.NODE_ENV !== 'production') {
	                            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	                        }
	                        throwError();
	                    } else if (nextInput$1 === NO_OP) {
	                        nextInput$1 = lastInput$1;
	                        didUpdate = false;
	                    } else if (isObject(nextInput$1) && nextInput$1.dom) {
	                        nextInput$1 = cloneVNode(nextInput$1);
	                    }
	                    if (nextInput$1.flags & 28 /* Component */) {
	                            nextInput$1.parentVNode = nextVNode;
	                        } else if (lastInput$1.flags & 28 /* Component */) {
	                            lastInput$1.parentVNode = nextVNode;
	                        }
	                    instance._lastInput = nextInput$1;
	                    instance._vNode = nextVNode;
	                    if (didUpdate) {
	                        var fastUnmount = lifecycle.fastUnmount;
	                        var subLifecycle = instance._lifecycle;
	                        lifecycle.fastUnmount = subLifecycle.fastUnmount;
	                        patch(lastInput$1, nextInput$1, parentDom, lifecycle, childContext, isSVG, isRecycling);
	                        subLifecycle.fastUnmount = lifecycle.unmount;
	                        lifecycle.fastUnmount = fastUnmount;
	                        instance.componentDidUpdate(lastProps, lastState);
	                        findDOMNodeEnabled && componentToDOMNodeMap.set(instance, nextInput$1.dom);
	                    }
	                    nextVNode.dom = nextInput$1.dom;
	                }
	            } else {
	                var shouldUpdate = true;
	                var lastProps$1 = lastVNode.props;
	                var nextHooks = nextVNode.ref;
	                var nextHooksDefined = !isNullOrUndef(nextHooks);
	                var lastInput$2 = lastVNode.children;
	                var nextInput$2 = lastInput$2;
	                nextVNode.dom = lastVNode.dom;
	                nextVNode.children = lastInput$2;
	                if (lastKey !== nextKey) {
	                    shouldUpdate = true;
	                } else {
	                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
	                        shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
	                    }
	                }
	                if (shouldUpdate !== false) {
	                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
	                        lifecycle.fastUnmount = false;
	                        nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
	                    }
	                    nextInput$2 = nextType(nextProps, context);
	                    if (isInvalid(nextInput$2)) {
	                        nextInput$2 = createVoidVNode();
	                    } else if (isArray(nextInput$2)) {
	                        if (process.env.NODE_ENV !== 'production') {
	                            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	                        }
	                        throwError();
	                    } else if (isObject(nextInput$2) && nextInput$2.dom) {
	                        nextInput$2 = cloneVNode(nextInput$2);
	                    }
	                    if (nextInput$2 !== NO_OP) {
	                        patch(lastInput$2, nextInput$2, parentDom, lifecycle, context, isSVG, isRecycling);
	                        nextVNode.children = nextInput$2;
	                        if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
	                            lifecycle.fastUnmount = false;
	                            nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
	                        }
	                        nextVNode.dom = nextInput$2.dom;
	                    }
	                }
	                if (nextInput$2.flags & 28 /* Component */) {
	                        nextInput$2.parentVNode = nextVNode;
	                    } else if (lastInput$2.flags & 28 /* Component */) {
	                        lastInput$2.parentVNode = nextVNode;
	                    }
	            }
	        }
	        return false;
	    }
	    function patchText(lastVNode, nextVNode) {
	        var nextText = nextVNode.children;
	        var dom = lastVNode.dom;
	        nextVNode.dom = dom;
	        if (lastVNode.children !== nextText) {
	            dom.nodeValue = nextText;
	        }
	    }
	    function patchVoid(lastVNode, nextVNode) {
	        nextVNode.dom = lastVNode.dom;
	    }
	    function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
	        var lastChildrenLength = lastChildren.length;
	        var nextChildrenLength = nextChildren.length;
	        var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
	        var i;
	        var nextNode = null;
	        var newNode;
	        // Loop backwards so we can use insertBefore
	        if (lastChildrenLength < nextChildrenLength) {
	            for (i = nextChildrenLength - 1; i >= commonLength; i--) {
	                var child = nextChildren[i];
	                if (!isInvalid(child)) {
	                    if (child.dom) {
	                        nextChildren[i] = child = cloneVNode(child);
	                    }
	                    newNode = mount(child, null, lifecycle, context, isSVG);
	                    insertOrAppend(dom, newNode, nextNode);
	                    nextNode = newNode;
	                }
	            }
	        } else if (nextChildrenLength === 0) {
	            removeAllChildren(dom, lastChildren, lifecycle, false, isRecycling);
	        } else if (lastChildrenLength > nextChildrenLength) {
	            for (i = commonLength; i < lastChildrenLength; i++) {
	                var child$1 = lastChildren[i];
	                if (!isInvalid(child$1)) {
	                    unmount(lastChildren[i], dom, lifecycle, false, false, isRecycling);
	                }
	            }
	        }
	        for (i = commonLength - 1; i >= 0; i--) {
	            var lastChild = lastChildren[i];
	            var nextChild = nextChildren[i];
	            if (isInvalid(nextChild)) {
	                if (!isInvalid(lastChild)) {
	                    unmount(lastChild, dom, lifecycle, true, false, isRecycling);
	                }
	            } else {
	                if (nextChild.dom) {
	                    nextChildren[i] = nextChild = cloneVNode(nextChild);
	                }
	                if (isInvalid(lastChild)) {
	                    newNode = mount(nextChild, null, lifecycle, context, isSVG);
	                    insertOrAppend(dom, newNode, nextNode);
	                    nextNode = newNode;
	                } else {
	                    patch(lastChild, nextChild, dom, lifecycle, context, isSVG, isRecycling);
	                    nextNode = nextChild.dom;
	                }
	            }
	        }
	    }
	    function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
	        var aLength = a.length;
	        var bLength = b.length;
	        var aEnd = aLength - 1;
	        var bEnd = bLength - 1;
	        var aStart = 0;
	        var bStart = 0;
	        var i;
	        var j;
	        var aNode;
	        var bNode;
	        var nextNode;
	        var nextPos;
	        var node;
	        if (aLength === 0) {
	            if (bLength !== 0) {
	                mountArrayChildren(b, dom, lifecycle, context, isSVG);
	            }
	            return;
	        } else if (bLength === 0) {
	            removeAllChildren(dom, a, lifecycle, false, isRecycling);
	            return;
	        }
	        var aStartNode = a[aStart];
	        var bStartNode = b[bStart];
	        var aEndNode = a[aEnd];
	        var bEndNode = b[bEnd];
	        if (bStartNode.dom) {
	            b[bStart] = bStartNode = cloneVNode(bStartNode);
	        }
	        if (bEndNode.dom) {
	            b[bEnd] = bEndNode = cloneVNode(bEndNode);
	        }
	        // Step 1
	        /* eslint no-constant-condition: 0 */
	        outer: while (true) {
	            // Sync nodes with the same key at the beginning.
	            while (aStartNode.key === bStartNode.key) {
	                patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
	                aStart++;
	                bStart++;
	                if (aStart > aEnd || bStart > bEnd) {
	                    break outer;
	                }
	                aStartNode = a[aStart];
	                bStartNode = b[bStart];
	                if (bStartNode.dom) {
	                    b[bStart] = bStartNode = cloneVNode(bStartNode);
	                }
	            }
	            // Sync nodes with the same key at the end.
	            while (aEndNode.key === bEndNode.key) {
	                patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
	                aEnd--;
	                bEnd--;
	                if (aStart > aEnd || bStart > bEnd) {
	                    break outer;
	                }
	                aEndNode = a[aEnd];
	                bEndNode = b[bEnd];
	                if (bEndNode.dom) {
	                    b[bEnd] = bEndNode = cloneVNode(bEndNode);
	                }
	            }
	            // Move and sync nodes from right to left.
	            if (aEndNode.key === bStartNode.key) {
	                patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
	                insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
	                aEnd--;
	                bStart++;
	                aEndNode = a[aEnd];
	                bStartNode = b[bStart];
	                if (bStartNode.dom) {
	                    b[bStart] = bStartNode = cloneVNode(bStartNode);
	                }
	                continue;
	            }
	            // Move and sync nodes from left to right.
	            if (aStartNode.key === bEndNode.key) {
	                patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
	                nextPos = bEnd + 1;
	                nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                insertOrAppend(dom, bEndNode.dom, nextNode);
	                aStart++;
	                bEnd--;
	                aStartNode = a[aStart];
	                bEndNode = b[bEnd];
	                if (bEndNode.dom) {
	                    b[bEnd] = bEndNode = cloneVNode(bEndNode);
	                }
	                continue;
	            }
	            break;
	        }
	        if (aStart > aEnd) {
	            if (bStart <= bEnd) {
	                nextPos = bEnd + 1;
	                nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                while (bStart <= bEnd) {
	                    node = b[bStart];
	                    if (node.dom) {
	                        b[bStart] = node = cloneVNode(node);
	                    }
	                    bStart++;
	                    insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
	                }
	            }
	        } else if (bStart > bEnd) {
	            while (aStart <= aEnd) {
	                unmount(a[aStart++], dom, lifecycle, false, false, isRecycling);
	            }
	        } else {
	            aLength = aEnd - aStart + 1;
	            bLength = bEnd - bStart + 1;
	            var aNullable = a;
	            var sources = new Array(bLength);
	            // Mark all nodes as inserted.
	            for (i = 0; i < bLength; i++) {
	                sources[i] = -1;
	            }
	            var moved = false;
	            var pos = 0;
	            var patched = 0;
	            if (bLength <= 4 || aLength * bLength <= 16) {
	                for (i = aStart; i <= aEnd; i++) {
	                    aNode = a[i];
	                    if (patched < bLength) {
	                        for (j = bStart; j <= bEnd; j++) {
	                            bNode = b[j];
	                            if (aNode.key === bNode.key) {
	                                sources[j - bStart] = i;
	                                if (pos > j) {
	                                    moved = true;
	                                } else {
	                                    pos = j;
	                                }
	                                if (bNode.dom) {
	                                    b[j] = bNode = cloneVNode(bNode);
	                                }
	                                patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
	                                patched++;
	                                aNullable[i] = null;
	                                break;
	                            }
	                        }
	                    }
	                }
	            } else {
	                var keyIndex = new Map();
	                for (i = bStart; i <= bEnd; i++) {
	                    node = b[i];
	                    keyIndex.set(node.key, i);
	                }
	                for (i = aStart; i <= aEnd; i++) {
	                    aNode = a[i];
	                    if (patched < bLength) {
	                        j = keyIndex.get(aNode.key);
	                        if (!isUndefined(j)) {
	                            bNode = b[j];
	                            sources[j - bStart] = i;
	                            if (pos > j) {
	                                moved = true;
	                            } else {
	                                pos = j;
	                            }
	                            if (bNode.dom) {
	                                b[j] = bNode = cloneVNode(bNode);
	                            }
	                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
	                            patched++;
	                            aNullable[i] = null;
	                        }
	                    }
	                }
	            }
	            if (aLength === a.length && patched === 0) {
	                removeAllChildren(dom, a, lifecycle, false, isRecycling);
	                while (bStart < bLength) {
	                    node = b[bStart];
	                    if (node.dom) {
	                        b[bStart] = node = cloneVNode(node);
	                    }
	                    bStart++;
	                    insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
	                }
	            } else {
	                i = aLength - patched;
	                while (i > 0) {
	                    aNode = aNullable[aStart++];
	                    if (!isNull(aNode)) {
	                        unmount(aNode, dom, lifecycle, false, false, isRecycling);
	                        i--;
	                    }
	                }
	                if (moved) {
	                    var seq = lis_algorithm(sources);
	                    j = seq.length - 1;
	                    for (i = bLength - 1; i >= 0; i--) {
	                        if (sources[i] === -1) {
	                            pos = i + bStart;
	                            node = b[pos];
	                            if (node.dom) {
	                                b[pos] = node = cloneVNode(node);
	                            }
	                            nextPos = pos + 1;
	                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                            insertOrAppend(dom, mount(node, dom, lifecycle, context, isSVG), nextNode);
	                        } else {
	                            if (j < 0 || i !== seq[j]) {
	                                pos = i + bStart;
	                                node = b[pos];
	                                nextPos = pos + 1;
	                                nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                                insertOrAppend(dom, node.dom, nextNode);
	                            } else {
	                                j--;
	                            }
	                        }
	                    }
	                } else if (patched !== bLength) {
	                    for (i = bLength - 1; i >= 0; i--) {
	                        if (sources[i] === -1) {
	                            pos = i + bStart;
	                            node = b[pos];
	                            if (node.dom) {
	                                b[pos] = node = cloneVNode(node);
	                            }
	                            nextPos = pos + 1;
	                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                            insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
	                        }
	                    }
	                }
	            }
	        }
	    }
	    // // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
	    function lis_algorithm(a) {
	        var p = a.slice(0);
	        var result = [];
	        result.push(0);
	        var i;
	        var j;
	        var u;
	        var v;
	        var c;
	        for (i = 0; i < a.length; i++) {
	            if (a[i] === -1) {
	                continue;
	            }
	            j = result[result.length - 1];
	            if (a[j] < a[i]) {
	                p[i] = j;
	                result.push(i);
	                continue;
	            }
	            u = 0;
	            v = result.length - 1;
	            while (u < v) {
	                c = (u + v) / 2 | 0;
	                if (a[result[c]] < a[i]) {
	                    u = c + 1;
	                } else {
	                    v = c;
	                }
	            }
	            if (a[i] < a[result[u]]) {
	                if (u > 0) {
	                    p[i] = result[u - 1];
	                }
	                result[u] = i;
	            }
	        }
	        u = result.length;
	        v = result[u - 1];
	        while (u-- > 0) {
	            result[u] = v;
	            v = p[v];
	        }
	        return result;
	    }
	    function patchProp(prop, lastValue, nextValue, dom, isSVG, lifecycle) {
	        if (skipProps[prop]) {
	            return;
	        }
	        if (booleanProps[prop]) {
	            dom[prop] = nextValue ? true : false;
	        } else if (strictProps[prop]) {
	            var value = isNullOrUndef(nextValue) ? '' : nextValue;
	            if (dom[prop] !== value) {
	                dom[prop] = value;
	            }
	        } else if (isAttrAnEvent(prop)) {
	            patchEvent(prop, lastValue, nextValue, dom, lifecycle);
	        } else if (lastValue !== nextValue) {
	            if (isNullOrUndef(nextValue)) {
	                dom.removeAttribute(prop);
	            } else if (prop === 'className') {
	                if (isSVG) {
	                    dom.setAttribute('class', nextValue);
	                } else {
	                    dom.className = nextValue;
	                }
	            } else if (prop === 'style') {
	                patchStyle(lastValue, nextValue, dom);
	            } else if (prop === 'dangerouslySetInnerHTML') {
	                var lastHtml = lastValue && lastValue.__html;
	                var nextHtml = nextValue && nextValue.__html;
	                if (lastHtml !== nextHtml) {
	                    if (!isNullOrUndef(nextHtml)) {
	                        dom.innerHTML = nextHtml;
	                    }
	                }
	            } else if (prop !== 'childrenType' && prop !== 'ref' && prop !== 'key') {
	                var dehyphenProp = dehyphenProps[prop];
	                var ns = namespaces[prop];
	                if (ns) {
	                    dom.setAttributeNS(ns, dehyphenProp || prop, nextValue);
	                } else {
	                    dom.setAttribute(dehyphenProp || prop, nextValue);
	                }
	            }
	        }
	    }
	    function patchEvents(lastEvents, nextEvents, dom, lifecycle) {
	        lastEvents = lastEvents || EMPTY_OBJ;
	        nextEvents = nextEvents || EMPTY_OBJ;
	        if (nextEvents !== EMPTY_OBJ) {
	            for (var name in nextEvents) {
	                // do not add a hasOwnProperty check here, it affects performance
	                patchEvent(name, lastEvents[name], nextEvents[name], dom, lifecycle);
	            }
	        }
	        if (lastEvents !== EMPTY_OBJ) {
	            for (var name$1 in lastEvents) {
	                // do not add a hasOwnProperty check here, it affects performance
	                if (isNullOrUndef(nextEvents[name$1])) {
	                    patchEvent(name$1, lastEvents[name$1], null, dom, lifecycle);
	                }
	            }
	        }
	    }
	    function patchEvent(name, lastValue, nextValue, dom, lifecycle) {
	        if (lastValue !== nextValue) {
	            var nameLowerCase = name.toLowerCase();
	            var domEvent = dom[nameLowerCase];
	            // if the function is wrapped, that means it's been controlled by a wrapper
	            if (domEvent && domEvent.wrapped) {
	                return;
	            }
	            if (delegatedProps[name]) {
	                lifecycle.fastUnmount = false;
	                handleEvent(name, lastValue, nextValue, dom);
	            } else {
	                dom[nameLowerCase] = nextValue;
	            }
	        }
	    }
	    function patchProps(lastProps, nextProps, dom, lifecycle, context, isSVG) {
	        lastProps = lastProps || EMPTY_OBJ;
	        nextProps = nextProps || EMPTY_OBJ;
	        if (nextProps !== EMPTY_OBJ) {
	            for (var prop in nextProps) {
	                // do not add a hasOwnProperty check here, it affects performance
	                var nextValue = nextProps[prop];
	                var lastValue = lastProps[prop];
	                if (isNullOrUndef(nextValue)) {
	                    removeProp(prop, dom);
	                } else {
	                    patchProp(prop, lastValue, nextValue, dom, isSVG, lifecycle);
	                }
	            }
	        }
	        if (lastProps !== EMPTY_OBJ) {
	            for (var prop$1 in lastProps) {
	                // do not add a hasOwnProperty check here, it affects performance
	                if (isNullOrUndef(nextProps[prop$1])) {
	                    removeProp(prop$1, dom);
	                }
	            }
	        }
	    }
	    // We are assuming here that we come from patchProp routine
	    // -nextAttrValue cannot be null or undefined
	    function patchStyle(lastAttrValue, nextAttrValue, dom) {
	        if (isString(nextAttrValue)) {
	            dom.style.cssText = nextAttrValue;
	            return;
	        }
	        for (var style in nextAttrValue) {
	            // do not add a hasOwnProperty check here, it affects performance
	            var value = nextAttrValue[style];
	            if (isNumber(value) && !isUnitlessNumber[style]) {
	                dom.style[style] = value + 'px';
	            } else {
	                dom.style[style] = value;
	            }
	        }
	        if (!isNullOrUndef(lastAttrValue)) {
	            for (var style$1 in lastAttrValue) {
	                if (isNullOrUndef(nextAttrValue[style$1])) {
	                    dom.style[style$1] = '';
	                }
	            }
	        }
	    }
	    function removeProp(prop, dom) {
	        if (prop === 'className') {
	            dom.removeAttribute('class');
	        } else if (prop === 'value') {
	            dom.value = '';
	        } else if (prop === 'style') {
	            dom.style.cssText = null;
	            dom.removeAttribute('style');
	        } else if (delegatedProps[prop]) {
	            handleEvent(prop, null, null, dom);
	        } else {
	            dom.removeAttribute(prop);
	        }
	    }

	    var recyclingEnabled = true;
	    var componentPools = new Map();
	    var elementPools = new Map();
	    function disableRecycling() {
	        recyclingEnabled = false;
	        componentPools.clear();
	        elementPools.clear();
	    }

	    function recycleElement(vNode, lifecycle, context, isSVG) {
	        var tag = vNode.type;
	        var key = vNode.key;
	        var pools = elementPools.get(tag);
	        if (!isUndefined(pools)) {
	            var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
	            if (!isUndefined(pool)) {
	                var recycledVNode = pool.pop();
	                if (!isUndefined(recycledVNode)) {
	                    patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
	                    return vNode.dom;
	                }
	            }
	        }
	        return null;
	    }
	    function poolElement(vNode) {
	        var tag = vNode.type;
	        var key = vNode.key;
	        var pools = elementPools.get(tag);
	        if (isUndefined(pools)) {
	            pools = {
	                nonKeyed: [],
	                keyed: new Map()
	            };
	            elementPools.set(tag, pools);
	        }
	        if (isNull(key)) {
	            pools.nonKeyed.push(vNode);
	        } else {
	            var pool = pools.keyed.get(key);
	            if (isUndefined(pool)) {
	                pool = [];
	                pools.keyed.set(key, pool);
	            }
	            pool.push(vNode);
	        }
	    }
	    function recycleComponent(vNode, lifecycle, context, isSVG) {
	        var type = vNode.type;
	        var key = vNode.key;
	        var pools = componentPools.get(type);
	        if (!isUndefined(pools)) {
	            var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
	            if (!isUndefined(pool)) {
	                var recycledVNode = pool.pop();
	                if (!isUndefined(recycledVNode)) {
	                    var flags = vNode.flags;
	                    var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
	                    if (!failed) {
	                        return vNode.dom;
	                    }
	                }
	            }
	        }
	        return null;
	    }
	    function poolComponent(vNode) {
	        var type = vNode.type;
	        var key = vNode.key;
	        var hooks = vNode.ref;
	        var nonRecycleHooks = hooks && (hooks.onComponentWillMount || hooks.onComponentWillUnmount || hooks.onComponentDidMount || hooks.onComponentWillUpdate || hooks.onComponentDidUpdate);
	        if (nonRecycleHooks) {
	            return;
	        }
	        var pools = componentPools.get(type);
	        if (isUndefined(pools)) {
	            pools = {
	                nonKeyed: [],
	                keyed: new Map()
	            };
	            componentPools.set(type, pools);
	        }
	        if (isNull(key)) {
	            pools.nonKeyed.push(vNode);
	        } else {
	            var pool = pools.keyed.get(key);
	            if (isUndefined(pool)) {
	                pool = [];
	                pools.keyed.set(key, pool);
	            }
	            pool.push(vNode);
	        }
	    }

	    function mount(vNode, parentDom, lifecycle, context, isSVG) {
	        var flags = vNode.flags;
	        if (flags & 3970 /* Element */) {
	                return mountElement(vNode, parentDom, lifecycle, context, isSVG);
	            } else if (flags & 28 /* Component */) {
	                return mountComponent(vNode, parentDom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
	            } else if (flags & 4096 /* Void */) {
	                return mountVoid(vNode, parentDom);
	            } else if (flags & 1 /* Text */) {
	                return mountText(vNode, parentDom);
	            } else {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
	            }
	            throwError();
	        }
	    }
	    function mountText(vNode, parentDom) {
	        var dom = document.createTextNode(vNode.children);
	        vNode.dom = dom;
	        if (parentDom) {
	            appendChild(parentDom, dom);
	        }
	        return dom;
	    }
	    function mountVoid(vNode, parentDom) {
	        var dom = document.createTextNode('');
	        vNode.dom = dom;
	        if (parentDom) {
	            appendChild(parentDom, dom);
	        }
	        return dom;
	    }
	    function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
	        if (recyclingEnabled) {
	            var dom$1 = recycleElement(vNode, lifecycle, context, isSVG);
	            if (!isNull(dom$1)) {
	                if (!isNull(parentDom)) {
	                    appendChild(parentDom, dom$1);
	                }
	                return dom$1;
	            }
	        }
	        var tag = vNode.type;
	        var flags = vNode.flags;
	        if (isSVG || flags & 128 /* SvgElement */) {
	            isSVG = true;
	        }
	        var dom = documentCreateElement(tag, isSVG);
	        var children = vNode.children;
	        var props = vNode.props;
	        var events = vNode.events;
	        var ref = vNode.ref;
	        vNode.dom = dom;
	        if (!isNull(children)) {
	            if (isStringOrNumber(children)) {
	                setTextContent(dom, children);
	            } else if (isArray(children)) {
	                mountArrayChildren(children, dom, lifecycle, context, isSVG);
	            } else if (isVNode(children)) {
	                mount(children, dom, lifecycle, context, isSVG);
	            }
	        }
	        if (!(flags & 2 /* HtmlElement */)) {
	            processElement(flags, vNode, dom);
	        }
	        if (!isNull(props)) {
	            for (var prop in props) {
	                // do not add a hasOwnProperty check here, it affects performance
	                patchProp(prop, null, props[prop], dom, isSVG, lifecycle);
	            }
	        }
	        if (!isNull(events)) {
	            for (var name in events) {
	                // do not add a hasOwnProperty check here, it affects performance
	                patchEvent(name, null, events[name], dom, lifecycle);
	            }
	        }
	        if (!isNull(ref)) {
	            mountRef(dom, ref, lifecycle);
	        }
	        if (!isNull(parentDom)) {
	            appendChild(parentDom, dom);
	        }
	        return dom;
	    }
	    function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];
	            if (!isInvalid(child)) {
	                if (child.dom) {
	                    children[i] = child = cloneVNode(child);
	                }
	                mount(children[i], dom, lifecycle, context, isSVG);
	            }
	        }
	    }
	    function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
	        if (recyclingEnabled) {
	            var dom$1 = recycleComponent(vNode, lifecycle, context, isSVG);
	            if (!isNull(dom$1)) {
	                if (!isNull(parentDom)) {
	                    appendChild(parentDom, dom$1);
	                }
	                return dom$1;
	            }
	        }
	        var type = vNode.type;
	        var props = vNode.props || EMPTY_OBJ;
	        var ref = vNode.ref;
	        var dom;
	        if (isClass) {
	            var defaultProps = type.defaultProps;
	            lifecycle.fastUnmount = false;
	            if (!isUndefined(defaultProps)) {
	                copyPropsTo(defaultProps, props);
	                vNode.props = props;
	            }
	            var instance = createStatefulComponentInstance(vNode, type, props, context, isSVG, devToolsStatus);
	            var input = instance._lastInput;
	            var fastUnmount = lifecycle.fastUnmount;
	            // we store the fastUnmount value, but we set it back to true on the lifecycle
	            // we do this so we can determine if the component render has a fastUnmount or not
	            lifecycle.fastUnmount = true;
	            instance._vNode = vNode;
	            vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
	            // we now create a lifecycle for this component and store the fastUnmount value
	            var subLifecycle = instance._lifecycle = new Lifecycle();
	            subLifecycle.fastUnmount = lifecycle.fastUnmount;
	            // we then set the lifecycle fastUnmount value back to what it was before the mount
	            lifecycle.fastUnmount = fastUnmount;
	            if (!isNull(parentDom)) {
	                appendChild(parentDom, dom);
	            }
	            mountStatefulComponentCallbacks(ref, instance, lifecycle);
	            findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
	            vNode.children = instance;
	        } else {
	            var input$1 = createStatelessComponentInput(vNode, type, props, context);
	            vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
	            vNode.children = input$1;
	            mountStatelessComponentCallbacks(ref, dom, lifecycle);
	            if (!isNull(parentDom)) {
	                appendChild(parentDom, dom);
	            }
	        }
	        return dom;
	    }
	    function mountStatefulComponentCallbacks(ref, instance, lifecycle) {
	        if (ref) {
	            if (isFunction(ref)) {
	                ref(instance);
	            } else {
	                if (process.env.NODE_ENV !== 'production') {
	                    throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	                }
	                throwError();
	            }
	        }
	        if (!isNull(instance.componentDidMount)) {
	            lifecycle.addListener(function () {
	                instance.componentDidMount();
	            });
	        }
	    }
	    function mountStatelessComponentCallbacks(ref, dom, lifecycle) {
	        if (ref) {
	            if (!isNullOrUndef(ref.onComponentWillMount)) {
	                lifecycle.fastUnmount = false;
	                ref.onComponentWillMount();
	            }
	            if (!isNullOrUndef(ref.onComponentDidMount)) {
	                lifecycle.fastUnmount = false;
	                lifecycle.addListener(function () {
	                    return ref.onComponentDidMount(dom);
	                });
	            }
	        }
	    }
	    function mountRef(dom, value, lifecycle) {
	        if (isFunction(value)) {
	            lifecycle.fastUnmount = false;
	            lifecycle.addListener(function () {
	                return value(dom);
	            });
	        } else {
	            if (isInvalid(value)) {
	                return;
	            }
	            if (process.env.NODE_ENV !== 'production') {
	                throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	            }
	            throwError();
	        }
	    }

	    function copyPropsTo(copyFrom, copyTo) {
	        for (var prop in copyFrom) {
	            if (isUndefined(copyTo[prop])) {
	                copyTo[prop] = copyFrom[prop];
	            }
	        }
	    }
	    function createStatefulComponentInstance(vNode, Component, props, context, isSVG, devToolsStatus) {
	        if (isUndefined(context)) {
	            context = {};
	        }
	        var instance = new Component(props, context);
	        instance.context = context;
	        if (instance.props === EMPTY_OBJ) {
	            instance.props = props;
	        }
	        instance._patch = patch;
	        instance._devToolsStatus = devToolsStatus;
	        if (findDOMNodeEnabled) {
	            instance._componentToDOMNodeMap = componentToDOMNodeMap;
	        }
	        var childContext = instance.getChildContext();
	        if (!isNullOrUndef(childContext)) {
	            instance._childContext = Object.assign({}, context, childContext);
	        } else {
	            instance._childContext = context;
	        }
	        instance._unmounted = false;
	        instance._pendingSetState = true;
	        instance._isSVG = isSVG;
	        instance.componentWillMount();
	        instance._beforeRender && instance._beforeRender();
	        var input = instance.render(props, instance.state, context);
	        instance._afterRender && instance._afterRender();
	        if (isArray(input)) {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	            }
	            throwError();
	        } else if (isInvalid(input)) {
	            input = createVoidVNode();
	        } else {
	            if (input.dom) {
	                input = cloneVNode(input);
	            }
	            if (input.flags & 28 /* Component */) {
	                    // if we have an input that is also a component, we run into a tricky situation
	                    // where the root vNode needs to always have the correct DOM entry
	                    // so we break monomorphism on our input and supply it our vNode as parentVNode
	                    // we can optimise this in the future, but this gets us out of a lot of issues
	                    input.parentVNode = vNode;
	                }
	        }
	        instance._pendingSetState = false;
	        instance._lastInput = input;
	        return instance;
	    }
	    function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
	        replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
	    }
	    function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
	        var shallowUnmount = false;
	        // we cannot cache nodeType here as vNode might be re-assigned below
	        if (vNode.flags & 28 /* Component */) {
	                // if we are accessing a stateful or stateless component, we want to access their last rendered input
	                // accessing their DOM node is not useful to us here
	                unmount(vNode, null, lifecycle, false, false, isRecycling);
	                vNode = vNode.children._lastInput || vNode.children;
	                shallowUnmount = true;
	            }
	        replaceChild(parentDom, dom, vNode.dom);
	        unmount(vNode, null, lifecycle, false, shallowUnmount, isRecycling);
	    }
	    function createStatelessComponentInput(vNode, component, props, context) {
	        var input = component(props, context);
	        if (isArray(input)) {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	            }
	            throwError();
	        } else if (isInvalid(input)) {
	            input = createVoidVNode();
	        } else {
	            if (input.dom) {
	                input = cloneVNode(input);
	            }
	            if (input.flags & 28 /* Component */) {
	                    // if we have an input that is also a component, we run into a tricky situation
	                    // where the root vNode needs to always have the correct DOM entry
	                    // so we break monomorphism on our input and supply it our vNode as parentVNode
	                    // we can optimise this in the future, but this gets us out of a lot of issues
	                    input.parentVNode = vNode;
	                }
	        }
	        return input;
	    }
	    function setTextContent(dom, text) {
	        if (text !== '') {
	            dom.textContent = text;
	        } else {
	            dom.appendChild(document.createTextNode(''));
	        }
	    }
	    function updateTextContent(dom, text) {
	        dom.firstChild.nodeValue = text;
	    }
	    function appendChild(parentDom, dom) {
	        parentDom.appendChild(dom);
	    }
	    function insertOrAppend(parentDom, newNode, nextNode) {
	        if (isNullOrUndef(nextNode)) {
	            appendChild(parentDom, newNode);
	        } else {
	            parentDom.insertBefore(newNode, nextNode);
	        }
	    }
	    function documentCreateElement(tag, isSVG) {
	        if (isSVG === true) {
	            return document.createElementNS(svgNS, tag);
	        } else {
	            return document.createElement(tag);
	        }
	    }
	    function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	        unmount(lastNode, null, lifecycle, false, false, isRecycling);
	        var dom = mount(nextNode, null, lifecycle, context, isSVG);
	        nextNode.dom = dom;
	        replaceChild(parentDom, dom, lastNode.dom);
	    }
	    function replaceChild(parentDom, nextDom, lastDom) {
	        if (!parentDom) {
	            parentDom = lastDom.parentNode;
	        }
	        parentDom.replaceChild(nextDom, lastDom);
	    }
	    function removeChild(parentDom, dom) {
	        parentDom.removeChild(dom);
	    }
	    function removeAllChildren(dom, children, lifecycle, shallowUnmount, isRecycling) {
	        dom.textContent = '';
	        if (!lifecycle.fastUnmount) {
	            removeChildren(null, children, lifecycle, shallowUnmount, isRecycling);
	        }
	    }
	    function removeChildren(dom, children, lifecycle, shallowUnmount, isRecycling) {
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];
	            if (!isInvalid(child)) {
	                unmount(child, dom, lifecycle, true, shallowUnmount, isRecycling);
	            }
	        }
	    }
	    function isKeyed(lastChildren, nextChildren) {
	        return nextChildren.length && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
	    }

	    function normaliseChildNodes(dom) {
	        var rawChildNodes = dom.childNodes;
	        var length = rawChildNodes.length;
	        var i = 0;
	        while (i < length) {
	            var rawChild = rawChildNodes[i];
	            if (rawChild.nodeType === 8) {
	                if (rawChild.data === '!') {
	                    var placeholder = document.createTextNode('');
	                    dom.replaceChild(placeholder, rawChild);
	                    i++;
	                } else {
	                    dom.removeChild(rawChild);
	                    length--;
	                }
	            } else {
	                i++;
	            }
	        }
	    }
	    function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
	        var type = vNode.type;
	        var props = vNode.props || {};
	        var ref = vNode.ref;
	        vNode.dom = dom;
	        if (isClass) {
	            var _isSVG = dom.namespaceURI === svgNS;
	            var defaultProps = type.defaultProps;
	            lifecycle.fastUnmount = false;
	            if (!isUndefined(defaultProps)) {
	                copyPropsTo(defaultProps, props);
	                vNode.props = props;
	            }
	            var instance = createStatefulComponentInstance(vNode, type, props, context, _isSVG, devToolsStatus);
	            var input = instance._lastInput;
	            var fastUnmount = lifecycle.fastUnmount;
	            // we store the fastUnmount value, but we set it back to true on the lifecycle
	            // we do this so we can determine if the component render has a fastUnmount or not		
	            lifecycle.fastUnmount = true;
	            instance._vComponent = vNode;
	            instance._vNode = vNode;
	            hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
	            var subLifecycle = instance._lifecycle = new Lifecycle();
	            subLifecycle.fastUnmount = lifecycle.fastUnmount;
	            // we then set the lifecycle fastUnmount value back to what it was before the mount
	            lifecycle.fastUnmount = fastUnmount;
	            mountStatefulComponentCallbacks(ref, instance, lifecycle);
	            findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
	            vNode.children = instance;
	        } else {
	            var input$1 = createStatelessComponentInput(vNode, type, props, context);
	            hydrate(input$1, dom, lifecycle, context, isSVG);
	            vNode.children = input$1;
	            vNode.dom = input$1.dom;
	            mountStatelessComponentCallbacks(ref, dom, lifecycle);
	        }
	    }
	    function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
	        var tag = vNode.type;
	        var children = vNode.children;
	        var props = vNode.props;
	        var events = vNode.events;
	        var flags = vNode.flags;
	        if (isSVG || flags & 128 /* SvgElement */) {
	            isSVG = true;
	        }
	        if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== tag) {
	            var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
	            vNode.dom = newDom;
	            replaceChild(dom.parentNode, newDom, dom);
	        } else {
	            vNode.dom = dom;
	            if (children) {
	                hydrateChildren(children, dom, lifecycle, context, isSVG);
	            }
	            if (!(flags & 2 /* HtmlElement */)) {
	                processElement(flags, vNode, dom);
	            }
	            for (var prop in props) {
	                patchProp(prop, null, props[prop], dom, isSVG, lifecycle);
	            }
	            for (var name in events) {
	                patchEvent(name, null, events[name], dom, lifecycle);
	            }
	        }
	    }
	    function hydrateChildren(children, dom, lifecycle, context, isSVG) {
	        normaliseChildNodes(dom);
	        var domNodes = Array.prototype.slice.call(dom.childNodes);
	        var childNodeIndex = 0;
	        if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	                var child = children[i];
	                if (isObject(child) && !isNull(child)) {
	                    hydrate(child, domNodes[childNodeIndex++], lifecycle, context, isSVG);
	                }
	            }
	        } else if (isObject(children)) {
	            hydrate(children, dom.firstChild, lifecycle, context, isSVG);
	        }
	    }
	    function hydrateText(vNode, dom) {
	        if (dom.nodeType === 3) {
	            var newDom = mountText(vNode, null);
	            vNode.dom = newDom;
	            replaceChild(dom.parentNode, newDom, dom);
	        } else {
	            vNode.dom = dom;
	        }
	    }
	    function hydrateVoid(vNode, dom) {
	        vNode.dom = dom;
	    }
	    function hydrate(vNode, dom, lifecycle, context, isSVG) {
	        if (process.env.NODE_ENV !== 'production') {
	            if (isInvalid(dom)) {
	                throwError("failed to hydrate. The server-side render doesn't match client side.");
	            }
	        }
	        var flags = vNode.flags;
	        if (flags & 28 /* Component */) {
	                return hydrateComponent(vNode, dom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
	            } else if (flags & 3970 /* Element */) {
	                return hydrateElement(vNode, dom, lifecycle, context, isSVG);
	            } else if (flags & 1 /* Text */) {
	                return hydrateText(vNode, dom);
	            } else if (flags & 4096 /* Void */) {
	                return hydrateVoid(vNode, dom);
	            } else {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
	            }
	            throwError();
	        }
	    }
	    function hydrateRoot(input, parentDom, lifecycle) {
	        if (parentDom && parentDom.nodeType === 1 && parentDom.firstChild) {
	            hydrate(input, parentDom.firstChild, lifecycle, {}, false);
	            return true;
	        }
	        return false;
	    }

	    // rather than use a Map, like we did before, we can use an array here
	    // given there shouldn't be THAT many roots on the page, the difference
	    // in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
	    var roots = [];
	    var componentToDOMNodeMap = new Map();
	    var findDOMNodeEnabled = false;
	    function enableFindDOMNode() {
	        findDOMNodeEnabled = true;
	    }
	    function findDOMNode(ref) {
	        if (!findDOMNodeEnabled) {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError('findDOMNode() has been disabled, use enableFindDOMNode() enabled findDOMNode(). Warning this can significantly impact performance!');
	            }
	            throwError();
	        }
	        var dom = ref && ref.nodeType ? ref : null;
	        return componentToDOMNodeMap.get(ref) || dom;
	    }
	    function getRoot(dom) {
	        for (var i = 0; i < roots.length; i++) {
	            var root = roots[i];
	            if (root.dom === dom) {
	                return root;
	            }
	        }
	        return null;
	    }
	    function setRoot(dom, input, lifecycle) {
	        roots.push({
	            dom: dom,
	            input: input,
	            lifecycle: lifecycle
	        });
	    }
	    function removeRoot(root) {
	        for (var i = 0; i < roots.length; i++) {
	            if (roots[i] === root) {
	                roots.splice(i, 1);
	                return;
	            }
	        }
	    }
	    var documentBody = isBrowser ? document.body : null;
	    function render(input, parentDom) {
	        if (documentBody === parentDom) {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
	            }
	            throwError();
	        }
	        if (input === NO_OP) {
	            return;
	        }
	        var root = getRoot(parentDom);
	        if (isNull(root)) {
	            var lifecycle = new Lifecycle();
	            if (!isInvalid(input)) {
	                if (input.dom) {
	                    input = cloneVNode(input);
	                }
	                if (!hydrateRoot(input, parentDom, lifecycle)) {
	                    mount(input, parentDom, lifecycle, {}, false);
	                }
	                lifecycle.trigger();
	                setRoot(parentDom, input, lifecycle);
	            }
	        } else {
	            var lifecycle$1 = root.lifecycle;
	            lifecycle$1.listeners = [];
	            if (isNullOrUndef(input)) {
	                unmount(root.input, parentDom, lifecycle$1, false, false, false);
	                removeRoot(root);
	            } else {
	                if (input.dom) {
	                    input = cloneVNode(input);
	                }
	                patch(root.input, input, parentDom, lifecycle$1, {}, false, false);
	            }
	            lifecycle$1.trigger();
	            root.input = input;
	        }
	        if (devToolsStatus.connected) {
	            sendRoots(window);
	        }
	    }
	    function createRenderer() {
	        var parentDom;
	        return function renderer(lastInput, nextInput) {
	            if (!parentDom) {
	                parentDom = lastInput;
	            }
	            render(nextInput, parentDom);
	        };
	    }

	    function linkEvent(data, event) {
	        return { data: data, event: event };
	    }

	    if (isBrowser) {
	        window.process = {
	            env: {
	                NODE_ENV: 'development'
	            }
	        };
	        initDevToolsHooks(window);
	    }

	    if (process.env.NODE_ENV !== 'production') {
	        var testFunc = function testFn() {};
	        warning((testFunc.name || testFunc.toString()).indexOf('testFn') !== -1, 'It looks like you\'re using a minified copy of the development build ' + 'of Inferno. When deploying Inferno apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See http://infernojs.org for more details.');
	    }

	    // we duplicate it so it plays nicely with different module loading systems
	    var index = {
	        linkEvent: linkEvent,
	        // core shapes
	        createVNode: createVNode,

	        // cloning
	        cloneVNode: cloneVNode,

	        // used to shared common items between Inferno libs
	        NO_OP: NO_OP,
	        EMPTY_OBJ: EMPTY_OBJ,

	        //DOM
	        render: render,
	        findDOMNode: findDOMNode,
	        createRenderer: createRenderer,
	        disableRecycling: disableRecycling,
	        enableFindDOMNode: enableFindDOMNode
	    };

	    exports['default'] = index;
	    exports.linkEvent = linkEvent;
	    exports.createVNode = createVNode;
	    exports.cloneVNode = cloneVNode;
	    exports.NO_OP = NO_OP;
	    exports.EMPTY_OBJ = EMPTY_OBJ;
	    exports.render = render;
	    exports.findDOMNode = findDOMNode;
	    exports.createRenderer = createRenderer;
	    exports.disableRecycling = disableRecycling;
	    exports.enableFindDOMNode = enableFindDOMNode;

	    Object.defineProperty(exports, '__esModule', { value: true });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(82);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(setImmediate, process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * inferno-router v1.0.0-beta32
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(84), __webpack_require__(85), __webpack_require__(80)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(86), __webpack_require__(87), __webpack_require__(79)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global.Inferno = global.Inferno || {}, global.Inferno.Router = factory(global.Inferno.createElement, global.Inferno.Component, global.Inferno));
	})(undefined, function (createElement, Component, Inferno) {
	    'use strict';

	    createElement = 'default' in createElement ? createElement['default'] : createElement;
	    Component = 'default' in Component ? Component['default'] : Component;
	    Inferno = 'default' in Inferno ? Inferno['default'] : Inferno;

	    function Link(props, ref) {
	        var router = ref.router;

	        var activeClassName = props.activeClassName;
	        var activeStyle = props.activeStyle;
	        var className = props.className;
	        var to = props.to;
	        var elemProps = {
	            href: to
	        };
	        if (className) {
	            elemProps.className = className;
	        }
	        if (router.location.pathname === to) {
	            if (activeClassName) {
	                elemProps.className = (className ? className + ' ' : '') + activeClassName;
	            }
	            if (activeStyle) {
	                elemProps.style = Object.assign({}, props.style, activeStyle);
	            }
	        }
	        elemProps.onclick = function navigate(e) {
	            if (e.button !== 0 || e.ctrlKey || e.altKey) {
	                return;
	            }
	            e.preventDefault();
	            router.push(to, e.target.textContent);
	        };
	        return createElement('a', elemProps, props.children);
	    }

	    function IndexLink(props) {
	        props.to = '/';
	        return createElement(Link, props);
	    }

	    var Route = function (Component$$1) {
	        function Route(props, context) {
	            Component$$1.call(this, props, context);
	        }

	        if (Component$$1) Route.__proto__ = Component$$1;
	        Route.prototype = Object.create(Component$$1 && Component$$1.prototype);
	        Route.prototype.constructor = Route;
	        Route.prototype.componentWillMount = function componentWillMount() {
	            var this$1 = this;

	            var ref = this.props;
	            var onEnter = ref.onEnter;
	            var ref$1 = this.context;
	            var router = ref$1.router;
	            if (onEnter) {
	                setImmediate(function () {
	                    onEnter({ props: this$1.props, router: router });
	                });
	            }
	        };
	        Route.prototype.componentWillUnmount = function componentWillUnmount() {
	            var ref = this.props;
	            var onLeave = ref.onLeave;
	            var ref$1 = this.context;
	            var router = ref$1.router;
	            if (onLeave) {
	                onLeave({ props: this.props, router: router });
	            }
	        };
	        Route.prototype.render = function render(ref) {
	            var component = ref.component;
	            var children = ref.children;
	            var params = ref.params;

	            return createElement(component, {
	                params: params,
	                children: children
	            });
	        };

	        return Route;
	    }(Component);

	    var IndexRoute = function (Route$$1) {
	        function IndexRoute() {
	            Route$$1.apply(this, arguments);
	        }

	        if (Route$$1) IndexRoute.__proto__ = Route$$1;
	        IndexRoute.prototype = Object.create(Route$$1 && Route$$1.prototype);
	        IndexRoute.prototype.constructor = IndexRoute;

	        IndexRoute.prototype.render = function render(ref) {
	            var component = ref.component;
	            var children = ref.children;
	            var params = ref.params;

	            return createElement(component, {
	                path: '/',
	                params: params,
	                children: children
	            });
	        };

	        return IndexRoute;
	    }(Route);

	    var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';

	    function toArray(children) {
	        return isArray(children) ? children : children ? [children] : children;
	    }
	    // this is MUCH faster than .constructor === Array and instanceof Array
	    // in Node 7 and the later versions of V8, slower in older versions though
	    var isArray = Array.isArray;

	    function isString(obj) {
	        return typeof obj === 'string';
	    }

	    var emptyObject = Object.create(null);
	    function decode(val) {
	        return typeof val !== 'string' ? val : decodeURIComponent(val);
	    }
	    function isEmpty(children) {
	        return !children || !(isArray(children) ? children : Object.keys(children)).length;
	    }
	    function flatten(oldArray) {
	        var newArray = [];
	        flattenArray(oldArray, newArray);
	        return newArray;
	    }
	    function getURLString(location) {
	        return isString(location) ? location : location.pathname + location.search;
	    }
	    /**
	     * Maps a querystring to an object
	     * Supports arrays and utf-8 characters
	     * @param search
	     * @returns {any}
	     */
	    function mapSearchParams(search) {
	        if (search === '') {
	            return emptyObject;
	        }
	        // Create an object with no prototype
	        var map = Object.create(null);
	        var fragments = search.split('&');
	        for (var i = 0; i < fragments.length; i++) {
	            var fragment = fragments[i];
	            var ref = fragment.split('=').map(mapFragment);
	            var k = ref[0];
	            var v = ref[1];
	            if (map[k]) {
	                map[k] = isArray(map[k]) ? map[k] : [map[k]];
	                map[k].push(v);
	            } else {
	                map[k] = v;
	            }
	        }
	        return map;
	    }
	    /**
	     * Sorts an array according to its `path` prop length
	     * @param a
	     * @param b
	     * @returns {number}
	     */
	    function pathRankSort(a, b) {
	        var aAttr = a.props || emptyObject;
	        var bAttr = b.props || emptyObject;
	        var diff = rank(bAttr.path) - rank(aAttr.path);
	        return diff || bAttr.path && aAttr.path ? bAttr.path.length - aAttr.path.length : 0;
	    }
	    /**
	     * Helper function for parsing querystring arrays
	     */
	    function mapFragment(p, isVal) {
	        return decodeURIComponent(isVal | 0 ? p : p.replace('[]', ''));
	    }
	    function strip(url) {
	        return url.replace(/(^\/+|\/+$)/g, '');
	    }
	    function rank(url) {
	        if (url === void 0) url = '';

	        return (strip(url).match(/\/+/g) || '').length;
	    }
	    function flattenArray(oldArray, newArray) {
	        for (var i = 0; i < oldArray.length; i++) {
	            var item = oldArray[i];
	            if (isArray(item)) {
	                flattenArray(item, newArray);
	            } else {
	                newArray.push(item);
	            }
	        }
	    }

	    function createCommonjsModule(fn, module) {
	        return module = { exports: {} }, fn(module, module.exports), module.exports;
	    }

	    var index$4 = Array.isArray || function (arr) {
	        return Object.prototype.toString.call(arr) == '[object Array]';
	    };

	    var isarray = index$4;

	    /**
	     * Expose `pathToRegexp`.
	     */
	    var index$2 = pathToRegexp;
	    var parse_1 = parse$1;
	    var compile_1 = compile$1;
	    var tokensToFunction_1 = tokensToFunction$1;
	    var tokensToRegExp_1 = tokensToRegExp$1;

	    /**
	     * The main path matching regexp utility.
	     *
	     * @type {RegExp}
	     */
	    var PATH_REGEXP = new RegExp([
	    // Match escaped characters that would otherwise appear in future matches.
	    // This allows the user to escape special characters that won't transform.
	    '(\\\\.)',
	    // Match Express-style parameters and un-named parameters with a prefix
	    // and optional suffixes. Matches appear as:
	    //
	    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

	    /**
	     * Parse a string for the raw tokens.
	     *
	     * @param  {string}  str
	     * @param  {Object=} options
	     * @return {!Array}
	     */
	    function parse$1(str, options) {
	        var tokens = [];
	        var key = 0;
	        var index = 0;
	        var path = '';
	        var defaultDelimiter = options && options.delimiter || '/';
	        var res;

	        while ((res = PATH_REGEXP.exec(str)) != null) {
	            var m = res[0];
	            var escaped = res[1];
	            var offset = res.index;
	            path += str.slice(index, offset);
	            index = offset + m.length;

	            // Ignore already escaped sequences.
	            if (escaped) {
	                path += escaped[1];
	                continue;
	            }

	            var next = str[index];
	            var prefix = res[2];
	            var name = res[3];
	            var capture = res[4];
	            var group = res[5];
	            var modifier = res[6];
	            var asterisk = res[7];

	            // Push the current path onto the tokens.
	            if (path) {
	                tokens.push(path);
	                path = '';
	            }

	            var partial = prefix != null && next != null && next !== prefix;
	            var repeat = modifier === '+' || modifier === '*';
	            var optional = modifier === '?' || modifier === '*';
	            var delimiter = res[2] || defaultDelimiter;
	            var pattern = capture || group;

	            tokens.push({
	                name: name || key++,
	                prefix: prefix || '',
	                delimiter: delimiter,
	                optional: optional,
	                repeat: repeat,
	                partial: partial,
	                asterisk: !!asterisk,
	                pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
	            });
	        }

	        // Match any characters still remaining.
	        if (index < str.length) {
	            path += str.substr(index);
	        }

	        // If the path exists, push it onto the end.
	        if (path) {
	            tokens.push(path);
	        }

	        return tokens;
	    }

	    /**
	     * Compile a string to a template function for the path.
	     *
	     * @param  {string}             str
	     * @param  {Object=}            options
	     * @return {!function(Object=, Object=)}
	     */
	    function compile$1(str, options) {
	        return tokensToFunction$1(parse$1(str, options));
	    }

	    /**
	     * Prettier encoding of URI path segments.
	     *
	     * @param  {string}
	     * @return {string}
	     */
	    function encodeURIComponentPretty(str) {
	        return encodeURI(str).replace(/[\/?#]/g, function (c) {
	            return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	        });
	    }

	    /**
	     * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	     *
	     * @param  {string}
	     * @return {string}
	     */
	    function encodeAsterisk(str) {
	        return encodeURI(str).replace(/[?#]/g, function (c) {
	            return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	        });
	    }

	    /**
	     * Expose a method for transforming tokens into the path function.
	     */
	    function tokensToFunction$1(tokens) {
	        // Compile all the tokens into regexps.
	        var matches = new Array(tokens.length);

	        // Compile all the patterns before compilation.
	        for (var i = 0; i < tokens.length; i++) {
	            if (_typeof(tokens[i]) === 'object') {
	                matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	            }
	        }

	        return function (obj, opts) {
	            var path = '';
	            var data = obj || {};
	            var options = opts || {};
	            var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	            for (var i = 0; i < tokens.length; i++) {
	                var token = tokens[i];

	                if (typeof token === 'string') {
	                    path += token;

	                    continue;
	                }

	                var value = data[token.name];
	                var segment;

	                if (value == null) {
	                    if (token.optional) {
	                        // Prepend partial segment prefixes.
	                        if (token.partial) {
	                            path += token.prefix;
	                        }

	                        continue;
	                    } else {
	                        throw new TypeError('Expected "' + token.name + '" to be defined');
	                    }
	                }

	                if (isarray(value)) {
	                    if (!token.repeat) {
	                        throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	                    }

	                    if (value.length === 0) {
	                        if (token.optional) {
	                            continue;
	                        } else {
	                            throw new TypeError('Expected "' + token.name + '" to not be empty');
	                        }
	                    }

	                    for (var j = 0; j < value.length; j++) {
	                        segment = encode(value[j]);

	                        if (!matches[i].test(segment)) {
	                            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	                        }

	                        path += (j === 0 ? token.prefix : token.delimiter) + segment;
	                    }

	                    continue;
	                }

	                segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	                if (!matches[i].test(segment)) {
	                    throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	                }

	                path += token.prefix + segment;
	            }

	            return path;
	        };
	    }

	    /**
	     * Escape a regular expression string.
	     *
	     * @param  {string} str
	     * @return {string}
	     */
	    function escapeString(str) {
	        return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	    }

	    /**
	     * Escape the capturing group by escaping special characters and meaning.
	     *
	     * @param  {string} group
	     * @return {string}
	     */
	    function escapeGroup(group) {
	        return group.replace(/([=!:$\/()])/g, '\\$1');
	    }

	    /**
	     * Attach the keys as a property of the regexp.
	     *
	     * @param  {!RegExp} re
	     * @param  {Array}   keys
	     * @return {!RegExp}
	     */
	    function attachKeys(re, keys) {
	        re.keys = keys;
	        return re;
	    }

	    /**
	     * Get the flags for a regexp from the options.
	     *
	     * @param  {Object} options
	     * @return {string}
	     */
	    function flags(options) {
	        return options.sensitive ? '' : 'i';
	    }

	    /**
	     * Pull out keys from a regexp.
	     *
	     * @param  {!RegExp} path
	     * @param  {!Array}  keys
	     * @return {!RegExp}
	     */
	    function regexpToRegexp(path, keys) {
	        // Use a negative lookahead to match only capturing groups.
	        var groups = path.source.match(/\((?!\?)/g);

	        if (groups) {
	            for (var i = 0; i < groups.length; i++) {
	                keys.push({
	                    name: i,
	                    prefix: null,
	                    delimiter: null,
	                    optional: false,
	                    repeat: false,
	                    partial: false,
	                    asterisk: false,
	                    pattern: null
	                });
	            }
	        }

	        return attachKeys(path, keys);
	    }

	    /**
	     * Transform an array into a regexp.
	     *
	     * @param  {!Array}  path
	     * @param  {Array}   keys
	     * @param  {!Object} options
	     * @return {!RegExp}
	     */
	    function arrayToRegexp(path, keys, options) {
	        var parts = [];

	        for (var i = 0; i < path.length; i++) {
	            parts.push(pathToRegexp(path[i], keys, options).source);
	        }

	        var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	        return attachKeys(regexp, keys);
	    }

	    /**
	     * Create a path regexp from string input.
	     *
	     * @param  {string}  path
	     * @param  {!Array}  keys
	     * @param  {!Object} options
	     * @return {!RegExp}
	     */
	    function stringToRegexp(path, keys, options) {
	        return tokensToRegExp$1(parse$1(path, options), keys, options);
	    }

	    /**
	     * Expose a function for taking tokens and returning a RegExp.
	     *
	     * @param  {!Array}          tokens
	     * @param  {(Array|Object)=} keys
	     * @param  {Object=}         options
	     * @return {!RegExp}
	     */
	    function tokensToRegExp$1(tokens, keys, options) {
	        if (!isarray(keys)) {
	            options = /** @type {!Object} */keys || options;
	            keys = [];
	        }

	        options = options || {};

	        var strict = options.strict;
	        var end = options.end !== false;
	        var route = '';

	        // Iterate over the tokens and create our regexp string.
	        for (var i = 0; i < tokens.length; i++) {
	            var token = tokens[i];

	            if (typeof token === 'string') {
	                route += escapeString(token);
	            } else {
	                var prefix = escapeString(token.prefix);
	                var capture = '(?:' + token.pattern + ')';

	                keys.push(token);

	                if (token.repeat) {
	                    capture += '(?:' + prefix + capture + ')*';
	                }

	                if (token.optional) {
	                    if (!token.partial) {
	                        capture = '(?:' + prefix + '(' + capture + '))?';
	                    } else {
	                        capture = prefix + '(' + capture + ')?';
	                    }
	                } else {
	                    capture = prefix + '(' + capture + ')';
	                }

	                route += capture;
	            }
	        }

	        var delimiter = escapeString(options.delimiter || '/');
	        var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	        // In non-strict mode we allow a slash at the end of match. If the path to
	        // match already ends with a slash, we remove it for consistency. The slash
	        // is valid at the end of a path match, not in the middle. This is important
	        // in non-ending mode, where "/test/" shouldn't match "/test//route".
	        if (!strict) {
	            route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	        }

	        if (end) {
	            route += '$';
	        } else {
	            // In non-ending mode, we need the capturing groups to match as much as
	            // possible by using a positive lookahead to the end or next path segment.
	            route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	        }

	        return attachKeys(new RegExp('^' + route, flags(options)), keys);
	    }

	    /**
	     * Normalize the given path string, returning a regular expression.
	     *
	     * An empty array can be passed in for the keys, which will hold the
	     * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	     * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	     *
	     * @param  {(string|RegExp|Array)} path
	     * @param  {(Array|Object)=}       keys
	     * @param  {Object=}               options
	     * @return {!RegExp}
	     */
	    function pathToRegexp(path, keys, options) {
	        if (!isarray(keys)) {
	            options = /** @type {!Object} */keys || options;
	            keys = [];
	        }

	        options = options || {};

	        if (path instanceof RegExp) {
	            return regexpToRegexp(path, /** @type {!Array} */keys);
	        }

	        if (isarray(path)) {
	            return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	        }

	        return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	    }

	    index$2.parse = parse_1;
	    index$2.compile = compile_1;
	    index$2.tokensToFunction = tokensToFunction_1;
	    index$2.tokensToRegExp = tokensToRegExp_1;

	    var index$1 = createCommonjsModule(function (module) {
	        var pathToRegExp = index$2;

	        /**
	         * Expose `pathToRegexp` as ES6 module
	         */
	        module.exports = pathToRegExp;
	        module.exports.parse = pathToRegExp.parse;
	        module.exports.compile = pathToRegExp.compile;
	        module.exports.tokensToFunction = pathToRegExp.tokensToFunction;
	        module.exports.tokensToRegExp = pathToRegExp.tokensToRegExp;
	        module.exports['default'] = module.exports;
	    });

	    var cache = new Map();
	    /**
	     * Returns a node containing only the matched components
	     * @param routes
	     * @param currentURL
	     * @returns {any|VComponent}
	     */
	    function match(routes, currentURL) {
	        var location = getURLString(currentURL);
	        var renderProps = matchRoutes(toArray(routes), location, '/');
	        return renderProps;
	    }
	    /**
	     * Go through every route and create a new node
	     * with the matched components
	     * @param _routes
	     * @param urlToMatch
	     * @param lastPath
	     * @returns {any}
	     */
	    function matchRoutes(_routes, urlToMatch, lastPath) {
	        if (urlToMatch === void 0) urlToMatch = '/';
	        if (lastPath === void 0) lastPath = '/';

	        var routes = isArray(_routes) ? flatten(_routes) : toArray(_routes);
	        var ref = urlToMatch.split('?');
	        var pathToMatch = ref[0];if (pathToMatch === void 0) pathToMatch = '/';
	        var search = ref[1];if (search === void 0) search = '';
	        var params = mapSearchParams(search);
	        routes.sort(pathRankSort);
	        for (var i = 0; i < routes.length; i++) {
	            var route = routes[i];
	            var location = (lastPath + (route.props && route.props.path || '/')).replace('//', '/');
	            var isLast = !route.props || isEmpty(route.props.children);
	            var matchBase = matchPath(isLast, location, pathToMatch);
	            if (matchBase) {
	                var children = null;
	                if (route.props && route.props.children) {
	                    var matchChild = matchRoutes(route.props.children, pathToMatch, location);
	                    if (matchChild) {
	                        children = matchChild.matched;
	                        Object.assign(params, matchChild.matched.props.params);
	                    }
	                }
	                return {
	                    location: location,
	                    matched: Inferno.cloneVNode(route, {
	                        children: children,
	                        params: Object.assign(params, matchBase.params),
	                        component: route.props.component
	                    })
	                };
	            }
	        }
	    }
	    /**
	     * Converts path to a regex, if a match is found then we extract params from it
	     * @param end
	     * @param routePath
	     * @param pathToMatch
	     * @returns {any}
	     */
	    function matchPath(end, routePath, pathToMatch) {
	        var key = routePath + "|" + end;
	        var regexp = cache.get(key);
	        if (!regexp) {
	            var keys = [];
	            regexp = { pattern: index$1(routePath, keys, { end: end }), keys: keys };
	            cache.set(key, regexp);
	        }
	        var m = regexp.pattern.exec(pathToMatch);
	        if (!m) {
	            return null;
	        }
	        var path = m[0];
	        var params = Object.create(null);
	        for (var i = 1; i < m.length; i += 1) {
	            params[regexp.keys[i - 1].name] = decode(m[i]);
	        }
	        return {
	            path: path === '' ? '/' : path,
	            params: params
	        };
	    }

	    var RouterContext = function (Component$$1) {
	        function RouterContext(props, context) {
	            Component$$1.call(this, props, context);
	            if (process.env.NODE_ENV !== 'production') {
	                if (!props.matched && !props.location) {
	                    throw new TypeError('"inferno-router" requires a "location" prop passed');
	                }
	                if (!props.matched && !props.children) {
	                    throw new TypeError('"inferno-router" requires a "matched" prop passed or "Route" children defined');
	                }
	            }
	        }

	        if (Component$$1) RouterContext.__proto__ = Component$$1;
	        RouterContext.prototype = Object.create(Component$$1 && Component$$1.prototype);
	        RouterContext.prototype.constructor = RouterContext;
	        RouterContext.prototype.getChildContext = function getChildContext() {
	            return {
	                router: this.props.router || {
	                    location: {
	                        pathname: this.props.location
	                    }
	                }
	            };
	        };
	        RouterContext.prototype.render = function render(ref) {
	            var children = ref.children;
	            var location = ref.location;
	            var matched = ref.matched;if (matched === void 0) matched = null;

	            // If we're injecting a single route (ex: result from getRoutes)
	            // then we don't need to go through all routes again
	            if (matched) {
	                return matched;
	            }
	            var node = match(children, location);
	            return node.matched;
	        };

	        return RouterContext;
	    }(Component);

	    var Router = function (Component$$1) {
	        function Router(props, context) {
	            Component$$1.call(this, props, context);
	            if (!props.history) {
	                throw new TypeError('Inferno: Error "inferno-router" requires a history prop passed');
	            }
	            this.router = props.history;
	            var location = this.router.location.pathname + this.router.location.search;
	            this.state = {
	                url: props.url || (location !== 'blank' ? location : '/')
	            };
	        }

	        if (Component$$1) Router.__proto__ = Component$$1;
	        Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	        Router.prototype.constructor = Router;
	        Router.prototype.componentWillMount = function componentWillMount() {
	            var this$1 = this;

	            if (this.router) {
	                this.unlisten = this.router.listen(function (url) {
	                    this$1.routeTo(url.pathname);
	                });
	            }
	        };
	        Router.prototype.componentWillUnmount = function componentWillUnmount() {
	            if (this.unlisten) {
	                this.unlisten();
	            }
	        };
	        Router.prototype.routeTo = function routeTo(url) {
	            this.setState({ url: url });
	        };
	        Router.prototype.render = function render(ref) {
	            var children = ref.children;
	            var url = ref.url;

	            return createElement(RouterContext, {
	                location: url || this.state.url,
	                router: this.router
	            }, children);
	        };

	        return Router;
	    }(Component);

	    var index = {
	        Route: Route,
	        IndexRoute: IndexRoute,
	        Router: Router,
	        RouterContext: RouterContext,
	        Link: Link,
	        IndexLink: IndexLink,
	        match: match
	    };

	    return index;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83).setImmediate, __webpack_require__(16)))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";

	var nextTick = __webpack_require__(16).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  timeout.close();
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83).setImmediate, __webpack_require__(83).clearImmediate))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * inferno-create-element v1.0.0-beta32
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(80)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(79)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global.Inferno = global.Inferno || {}, global.Inferno.createElement = factory(global.Inferno));
	})(undefined, function (inferno) {
	    'use strict';

	    var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';

	    // this is MUCH faster than .constructor === Array and instanceof Array
	    // in Node 7 and the later versions of V8, slower in older versions though

	    function isStatefulComponent(o) {
	        return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
	    }

	    function isInvalid(obj) {
	        return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	    }

	    function isAttrAnEvent(attr) {
	        return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }

	    function isNull(obj) {
	        return obj === null;
	    }
	    function isTrue(obj) {
	        return obj === true;
	    }
	    function isUndefined(obj) {
	        return obj === undefined;
	    }
	    function isObject(o) {
	        return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
	    }

	    var componentHooks = {
	        onComponentWillMount: true,
	        onComponentDidMount: true,
	        onComponentWillUnmount: true,
	        onComponentShouldUpdate: true,
	        onComponentWillUpdate: true,
	        onComponentDidUpdate: true
	    };
	    function createElement$1(name, props) {
	        var _children = [],
	            len = arguments.length - 2;
	        while (len-- > 0) {
	            _children[len] = arguments[len + 2];
	        }if (isInvalid(name) || isObject(name)) {
	            throw new Error('Inferno Error: createElement() name paramater cannot be undefined, null, false or true, It must be a string, class or function.');
	        }
	        var children = _children;
	        var ref = null;
	        var key = null;
	        var events = null;
	        var flags = 0;
	        if (_children) {
	            if (_children.length === 1) {
	                children = _children[0];
	            } else if (_children.length === 0) {
	                children = undefined;
	            }
	        }
	        if (isString(name)) {
	            flags = 2 /* HtmlElement */;
	            switch (name) {
	                case 'svg':
	                    flags = 128 /* SvgElement */;
	                    break;
	                case 'input':
	                    flags = 512 /* InputElement */;
	                    break;
	                case 'textarea':
	                    flags = 1024 /* TextareaElement */;
	                    break;
	                case 'select':
	                    flags = 2048 /* SelectElement */;
	                    break;
	                default:
	            }
	            for (var prop in props) {
	                if (prop === 'key') {
	                    key = props.key;
	                    delete props.key;
	                } else if (prop === 'children' && isUndefined(children)) {
	                    children = props.children; // always favour children args, default to props
	                } else if (prop === 'ref') {
	                    ref = props.ref;
	                } else if (isAttrAnEvent(prop)) {
	                    if (!events) {
	                        events = {};
	                    }
	                    events[prop] = props[prop];
	                    delete props[prop];
	                }
	            }
	        } else {
	            flags = isStatefulComponent(name) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
	            if (!isUndefined(children)) {
	                if (!props) {
	                    props = {};
	                }
	                props.children = children;
	                children = null;
	            }
	            for (var prop$1 in props) {
	                if (componentHooks[prop$1]) {
	                    if (!ref) {
	                        ref = {};
	                    }
	                    ref[prop$1] = props[prop$1];
	                } else if (prop$1 === 'key') {
	                    key = props.key;
	                    delete props.key;
	                }
	            }
	        }
	        return inferno.createVNode(flags, name, props, children, events, key, ref);
	    }

	    return createElement$1;
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * inferno-component v1.0.0-beta32
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(80)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(79)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global.Inferno = global.Inferno || {}, global.Inferno.Component = factory(global.Inferno));
	})(undefined, function (inferno) {
	    'use strict';

	    var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';

	    // this is MUCH faster than .constructor === Array and instanceof Array
	    // in Node 7 and the later versions of V8, slower in older versions though
	    var isArray = Array.isArray;

	    function isNullOrUndef(obj) {
	        return isUndefined(obj) || isNull(obj);
	    }
	    function isInvalid(obj) {
	        return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	    }
	    function isFunction(obj) {
	        return typeof obj === 'function';
	    }

	    function isNull(obj) {
	        return obj === null;
	    }
	    function isTrue(obj) {
	        return obj === true;
	    }
	    function isUndefined(obj) {
	        return obj === undefined;
	    }

	    function throwError(message) {
	        if (!message) {
	            message = ERROR_MSG;
	        }
	        throw new Error("Inferno Error: " + message);
	    }

	    var Lifecycle = function Lifecycle() {
	        this.listeners = [];
	        this.fastUnmount = true;
	    };
	    Lifecycle.prototype.addListener = function addListener(callback) {
	        this.listeners.push(callback);
	    };
	    Lifecycle.prototype.trigger = function trigger() {
	        var this$1 = this;

	        for (var i = 0; i < this.listeners.length; i++) {
	            this$1.listeners[i]();
	        }
	    };

	    var noOp = ERROR_MSG;
	    if (process.env.NODE_ENV !== 'production') {
	        noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
	    }
	    var componentCallbackQueue = new Map();
	    // when a components root VNode is also a component, we can run into issues
	    // this will recursively look for vNode.parentNode if the VNode is a component
	    function updateParentComponentVNodes(vNode, dom) {
	        if (vNode.flags & 28 /* Component */) {
	                var parentVNode = vNode.parentVNode;
	                if (parentVNode) {
	                    parentVNode.dom = dom;
	                    updateParentComponentVNodes(parentVNode, dom);
	                }
	            }
	    }
	    // this is in shapes too, but we don't want to import from shapes as it will pull in a duplicate of createVNode
	    function createVoidVNode() {
	        return inferno.createVNode(4096 /* Void */);
	    }
	    function addToQueue(component, force, callback) {
	        // TODO this function needs to be revised and improved on
	        var queue = componentCallbackQueue.get(component);
	        if (!queue) {
	            queue = [];
	            componentCallbackQueue.set(component, queue);
	            Promise.resolve().then(function () {
	                applyState(component, force, function () {
	                    for (var i = 0; i < queue.length; i++) {
	                        queue[i]();
	                    }
	                });
	                componentCallbackQueue.delete(component);
	                component._processingSetState = false;
	            });
	        }
	        if (callback) {
	            queue.push(callback);
	        }
	    }
	    function queueStateChanges(component, newState, callback) {
	        if (isFunction(newState)) {
	            newState = newState(component.state);
	        }
	        for (var stateKey in newState) {
	            component._pendingState[stateKey] = newState[stateKey];
	        }
	        if (!component._pendingSetState) {
	            if (component._processingSetState || callback) {
	                addToQueue(component, false, callback);
	            } else {
	                component._pendingSetState = true;
	                component._processingSetState = true;
	                applyState(component, false, callback);
	                component._processingSetState = false;
	            }
	        } else {
	            component.state = Object.assign({}, component.state, component._pendingState);
	            component._pendingState = {};
	        }
	    }
	    function applyState(component, force, callback) {
	        if ((!component._deferSetState || force) && !component._blockRender) {
	            component._pendingSetState = false;
	            var pendingState = component._pendingState;
	            var prevState = component.state;
	            var nextState = Object.assign({}, prevState, pendingState);
	            var props = component.props;
	            var context = component.context;
	            component._pendingState = {};
	            var nextInput = component._updateComponent(prevState, nextState, props, props, context, force);
	            var didUpdate = true;
	            if (isInvalid(nextInput)) {
	                nextInput = createVoidVNode();
	            } else if (isArray(nextInput)) {
	                if (process.env.NODE_ENV !== 'production') {
	                    throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	                }
	                throwError();
	            } else if (nextInput === inferno.NO_OP) {
	                nextInput = component._lastInput;
	                didUpdate = false;
	            }
	            var lastInput = component._lastInput;
	            var parentDom = lastInput.dom.parentNode;
	            component._lastInput = nextInput;
	            if (didUpdate) {
	                var subLifecycle = component._lifecycle;
	                if (!subLifecycle) {
	                    subLifecycle = new Lifecycle();
	                } else {
	                    subLifecycle.listeners = [];
	                }
	                component._lifecycle = subLifecycle;
	                var childContext = component.getChildContext();
	                if (!isNullOrUndef(childContext)) {
	                    childContext = Object.assign({}, context, component._childContext, childContext);
	                } else {
	                    childContext = Object.assign({}, context, component._childContext);
	                }
	                component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);
	                subLifecycle.trigger();
	                component.componentDidUpdate(props, prevState);
	            }
	            var vNode = component._vNode;
	            var dom = vNode.dom = nextInput.dom;
	            var componentToDOMNodeMap = component._componentToDOMNodeMap;
	            componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
	            updateParentComponentVNodes(vNode, dom);
	            if (!isNullOrUndef(callback)) {
	                callback();
	            }
	        }
	    }
	    var Component$1 = function Component$1(props, context) {
	        this.state = {};
	        this.refs = {};
	        this._processingSetState = false;
	        this._blockRender = false;
	        this._ignoreSetState = false;
	        this._blockSetState = false;
	        this._deferSetState = false;
	        this._pendingSetState = false;
	        this._pendingState = {};
	        this._lastInput = null;
	        this._vNode = null;
	        this._unmounted = true;
	        this._devToolsStatus = null;
	        this._devToolsId = null;
	        this._lifecycle = null;
	        this._childContext = null;
	        this._patch = null;
	        this._isSVG = false;
	        this._componentToDOMNodeMap = null;
	        /** @type {object} */
	        this.props = props || inferno.EMPTY_OBJ;
	        /** @type {object} */
	        this.context = context || {};
	        if (!this.componentDidMount) {
	            this.componentDidMount = null;
	        }
	    };
	    Component$1.prototype.render = function render(nextProps, nextState, nextContext) {};
	    Component$1.prototype.forceUpdate = function forceUpdate(callback) {
	        if (this._unmounted) {
	            throw Error(noOp);
	        }
	        applyState(this, true, callback);
	    };
	    Component$1.prototype.setState = function setState(newState, callback) {
	        if (this._unmounted) {
	            throw Error(noOp);
	        }
	        if (!this._blockSetState) {
	            if (!this._ignoreSetState) {
	                queueStateChanges(this, newState, callback);
	            }
	        } else {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError('cannot update state via setState() in componentWillUpdate().');
	            }
	            throwError();
	        }
	    };
	    Component$1.prototype.componentWillMount = function componentWillMount() {};
	    Component$1.prototype.componentDidMount = function componentDidMount() {};
	    Component$1.prototype.componentWillUnmount = function componentWillUnmount() {};
	    Component$1.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, prevContext) {};
	    Component$1.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, context) {
	        return true;
	    };
	    Component$1.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, context) {};
	    Component$1.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState, nextContext) {};
	    Component$1.prototype.getChildContext = function getChildContext() {};
	    Component$1.prototype._updateComponent = function _updateComponent(prevState, nextState, prevProps, nextProps, context, force) {
	        if (this._unmounted === true) {
	            if (process.env.NODE_ENV !== 'production') {
	                throwError(noOp);
	            }
	            throwError();
	        }
	        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ || prevState !== nextState || force) {
	            if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
	                this._blockRender = true;
	                this.componentWillReceiveProps(nextProps, context);
	                this._blockRender = false;
	                if (this._pendingSetState) {
	                    nextState = Object.assign({}, nextState, this._pendingState);
	                    this._pendingSetState = false;
	                    this._pendingState = {};
	                }
	            }
	            var shouldUpdate = this.shouldComponentUpdate(nextProps, nextState, context);
	            if (shouldUpdate !== false || force) {
	                this._blockSetState = true;
	                this.componentWillUpdate(nextProps, nextState, context);
	                this._blockSetState = false;
	                this.props = nextProps;
	                var state = this.state = nextState;
	                this.context = context;
	                this._beforeRender && this._beforeRender();
	                var render = this.render(nextProps, state, context);
	                this._afterRender && this._afterRender();
	                return render;
	            }
	        }
	        return inferno.NO_OP;
	    };

	    return Component$1;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(84);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(85);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _warning = __webpack_require__(89);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(90);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(91);

	var _PathUtils = __webpack_require__(94);

	var _createTransitionManager = __webpack_require__(95);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _ExecutionEnvironment = __webpack_require__(96);

	var _DOMUtils = __webpack_require__(97);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var getHistoryState = function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/mjackson/history/pull/289
	    return {};
	  }
	};

	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var globalHistory = window.history;
	  var canUseHistory = (0, _DOMUtils.supportsHistory)();
	  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

	  var _props$basename = props.basename;
	  var basename = _props$basename === undefined ? '' : _props$basename;
	  var _props$forceRefresh = props.forceRefresh;
	  var forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh;
	  var _props$getUserConfirm = props.getUserConfirmation;
	  var getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm;
	  var _props$keyLength = props.keyLength;
	  var keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

	  var getDOMLocation = function getDOMLocation(historyState) {
	    var _ref = historyState || {};

	    var key = _ref.key;
	    var state = _ref.state;
	    var _window$location = window.location;
	    var pathname = _window$location.pathname;
	    var search = _window$location.search;
	    var hash = _window$location.hash;

	    var path = pathname + search + hash;

	    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

	    return _extends({}, (0, _PathUtils.parsePath)(path), {
	      state: state,
	      key: key
	    });
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var handlePopState = function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

	    handlePop(getDOMLocation(event.state));
	  };

	  var handleHashChange = function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  };

	  var forceNextPop = false;

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      (function () {
	        var action = 'POP';

	        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	          if (ok) {
	            setState({ action: action, location: location });
	          } else {
	            revertPop(location);
	          }
	        });
	      })();
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allKeys.indexOf(fromLocation.key);

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key];

	  // Public interface

	  var push = function push(path, state) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var url = basename + (0, _PathUtils.createPath)(location);
	      var key = location.key;
	      var state = location.state;

	      if (canUseHistory) {
	        globalHistory.pushState({ key: key, state: state }, null, url);

	        if (forceRefresh) {
	          window.location.href = url;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	          nextKeys.push(location.key);
	          allKeys = nextKeys;

	          setState({ action: action, location: location });
	        }
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;

	        window.location.href = url;
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var url = basename + (0, _PathUtils.createPath)(location);
	      var key = location.key;
	      var state = location.state;

	      if (canUseHistory) {
	        globalHistory.replaceState({ key: key, state: state }, null, url);

	        if (forceRefresh) {
	          window.location.replace(url);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);

	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

	          setState({ action: action, location: location });
	        }
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;

	        window.location.replace(url);
	      }
	    });
	  };

	  var go = function go(n) {
	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      return unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createBrowserHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function warning() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function warning(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _resolvePathname = __webpack_require__(92);

	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

	var _valueEqual = __webpack_require__(93);

	var _valueEqual2 = _interopRequireDefault(_valueEqual);

	var _PathUtils = __webpack_require__(94);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, _PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  }

	  return location;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	var isAbsolute = function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	};

	// About 1.5x faster than the two-arg version of Array#splice()
	var spliceOne = function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }list.pop();
	};

	// This implementation is based heavily on node's url.parse
	var resolvePathname = function resolvePathname(to) {
	  var from = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	};

	module.exports = resolvePathname;

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var valueEqual = function valueEqual(a, b) {
	  if (a === b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    if (!Array.isArray(b) || a.length !== b.length) return false;

	    return a.every(function (item, index) {
	      return valueEqual(item, b[index]);
	    });
	  }

	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (aType !== bType) return false;

	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);

	    if (aKeys.length !== bKeys.length) return false;

	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	};

	exports.default = valueEqual;

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};

	var stripPrefix = exports.stripPrefix = function stripPrefix(path, prefix) {
	  return path.indexOf(prefix) === 0 ? path.substr(prefix.length) : path;
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;

	  var path = pathname || '/';

	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

	  return path;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(89);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;

	  var setPrompt = function setPrompt(nextPrompt) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time') : void 0;

	    prompt = nextPrompt;

	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;

	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };

	  var listeners = [];

	  var appendListener = function appendListener(listener) {
	    listeners.push(listener);

	    return function () {
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};

	exports.default = createTransitionManager;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};

/***/ },
/* 98 */
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
/* 99 */
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Signup = function Signup(props) {
	  return _inferno2.default.createVNode(2, 'div', null, 'Sign-Up');
	};

	exports.default = Signup;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Subscribe = function Subscribe(props) {
	  return _inferno2.default.createVNode(2, 'div', null, _inferno2.default.createVNode(2, 'h1', null, ' Subscribe '));
	};
	exports.default = Subscribe;

/***/ },
/* 102 */
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Picture = function Picture(props) {
	  return _inferno2.default.createVNode(2, 'div', null, [_inferno2.default.createVNode(2, 'img', {
	    'className': 'homepage-pictures',
	    'src': 'bubble'
	  }), _inferno2.default.createVNode(2, 'img', {
	    'className': 'homepage-pictures',
	    'src': 'chart'
	  }), _inferno2.default.createVNode(2, 'img', {
	    'className': 'homepage-pictures',
	    'src': 'ism'
	  }), _inferno2.default.createVNode(2, 'img', {
	    'className': 'homepage-pictures',
	    'src': 'usvcanada'
	  })]);
	};

	exports.default = Picture;

/***/ },
/* 104 */
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

/***/ },
/* 105 */
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inferno = __webpack_require__(79);

	var _inferno2 = _interopRequireDefault(_inferno);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Disclaimer = function Disclaimer(props) {
	  return _inferno2.default.createVNode(2, 'div', null, _inferno2.default.createVNode(2, 'h1', null, ' Disclaimer '));
	};

	exports.default = Disclaimer;

/***/ },
/* 107 */
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
])