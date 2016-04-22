//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.uvapichangelistener.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "UV API - change listener",
		async: true,
		description: "Uses polling to check for changes to the UV, running callbacks when changes occur. Changes are detected on a deep level.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window._uv = window._uv || [];
		var u = window.universal_variable = window.universal_variable || {};
		var currentUV;

		var isArray = function(input) {
			return (Object.prototype.toString.call(input) === "[object Array]");
		};

		var deepEqual = function() {
			var leftChain, rightChain;

			function compare2Objects(x, y) {
				var p;

				// remember that NaN === NaN returns false
				// and isNaN(undefined) returns true
				if (isNaN(x) && isNaN(y) && typeof x === "number" && typeof y ===
					"number") {
					return true;
				}

				// Compare primitives and functions.     
				// Check if both arguments link to the same object.
				// Especially useful on step when comparing prototypes
				if (x === y) {
					return true;
				}

				// Works in case when functions are created in constructor.
				// Comparing dates is a common scenario. Another built-ins?
				// We can even handle functions passed across iframes
				if ((typeof x === "function" && typeof y === "function") ||
					(x instanceof Date && y instanceof Date) ||
					(x instanceof RegExp && y instanceof RegExp) ||
					(x instanceof String && y instanceof String) ||
					(x instanceof Number && y instanceof Number)) {
					return x.toString() === y.toString();
				}

				// At last checking prototypes as good a we can
				if (!(x instanceof Object && y instanceof Object)) {
					return false;
				}

				if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
					return false;
				}

				if (x.constructor !== y.constructor) {
					return false;
				}

				if (x.prototype !== y.prototype) {
					return false;
				}

				// check for infinitive linking loops
				if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
					return false;
				}

				// Quick checking of one object beeing a subset of another.
				// todo: cache the structure of arguments[0] for performance
				for (p in y) {
					if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
						return false;
					} else if (typeof y[p] !== typeof x[p]) {
						return false;
					}
				}

				for (p in x) {
					if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
						return false;
					} else if (typeof y[p] !== typeof x[p]) {
						return false;
					}

					switch (typeof(x[p])) {
						case "object":
						case "function":

							leftChain.push(x);
							rightChain.push(y);

							if (!compare2Objects(x[p], y[p])) {
								return false;
							}

							leftChain.pop();
							rightChain.pop();
							break;

						default:
							if (x[p] !== y[p]) {
								return false;
							}
							break;
					}
				}

				return true;
			}

			if (arguments.length < 1) {
				return true; //Die silently? Don"t know how to handle such case, please help...
				// throw "Need two or more arguments to compare";
			}

			for (var i = 1, l = arguments.length; i < l; i++) {

				leftChain = []; //todo: this can be cached
				rightChain = [];

				if (!compare2Objects(arguments[0], arguments[i])) {
					return false;
				}
			}

			return true;
		};

		var clone = function(item) {
			if (!item) {
				return item;
			} // null, undefined values check

			var types = [Number, String, Boolean],
				result;

			// normalizing primitives if someone did new String("aaa"), or new Number("444");
			types.forEach(function(type) {
				if (item instanceof type) {
					result = type(item);
				}
			});

			if (typeof result == "undefined") {
				if (Object.prototype.toString.call(item) === "[object Array]") {
					result = [];
					item.forEach(function(child, index, array) {
						result[index] = clone(child);
					});
				} else if (typeof item == "object") {
					// testing that this is DOM
					if (item.nodeType && typeof item.cloneNode == "function") {
						result = item.cloneNode(true);
					} else if (!item.prototype) { // check that this is a literal
						if (item instanceof Date) {
							result = new Date(item);
						} else {
							// it is an object literal
							result = {};
							for (var i in item) {
								result[i] = clone(item[i]);
							}
						}
					} else {
						// depending what you would like here,
						// just keep the reference, or create new object
						if (false && item.constructor) {
							// would not advice to do that, reason? Read below
							result = new item.constructor();
						} else {
							result = item;
						}
					}
				} else {
					result = item;
				}
			}

			return result;
		};

		var trigger = function(type, data) {
			for (var i = 0; i < callbacks.length; i++) {
				if (typeof callbacks[i].func === "function" && callbacks[i].type ===
					type) {
					callbacks[i].func(data);
				}
			}
		};

		// Go through all the things that have been pushed 
		// before the API has loaded
		var processCallbacks = function() {
			for (var i = 0; i < window._uv.length; i++) {
				_uv.push(window._uv[i]);
				_uv.splice(i);
			}
		};


		/*** LISTENERS ***/

		var callbacks = [];

		var on = function(type, func) {
			callbacks.push({
				type: type,
				func: func
			});
		};

		// Poll for changes
		var timer;
		var wait = function() {
			if (!callbacks.length || timer) return;
			timer = setInterval(function() {
				if (!deepEqual(currentUV, window.universal_variable)) {
					trigger("change", window.universal_variable);
					currentUV = clone(window.universal_variable);
				}
			}, 500);
		};

		// Store a clone of the current UV
		currentUV = clone(window.universal_variable);


		/*** PUBLIC PUSH & GET API ***/

		_uv.push = function(data) {
			if (!isArray(data)) return;
			if (data[0] === "on") {
				on(data[1], data[2]);
			} else if (data[0] === "trigger" && data[1]) {
				trigger(data[1]);
			}
			wait();
		};


		// Process things added before the API loads
		processCallbacks();

		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
