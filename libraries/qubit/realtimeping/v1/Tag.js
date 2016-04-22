//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.realtimeping.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Realtime Ping",
		async: true,
		description: "Used for realtime stats in Deliver. Must have QTracker as a dependency.",
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
		if (!window.JSON) {
			return;
		}

		if (window.__qubit && window.__qubit.smartserve && window.__qubit.smartserve
			.version) {
			return;
		}

		if (!_qtd.orig_push) {
			_qtd.orig_push = _qtd.push;
		}

		var cookieDomain = null;

		var readCookie = function(name) {
			var r, cookie, value, cookies, nameSearchString, i, ii;
			nameSearchString = name + "=";
			cookies = document.cookie.split(';');
			r = /^\s+|\s+$/g;
			for (i = 0, ii = cookies.length; i < ii; i += 1) {
				cookie = cookies[i].replace(r, '');
				if (cookie.indexOf(nameSearchString) === 0) {
					value = unescape(cookie.substring(nameSearchString.length));
					if (value.length === 0) {
						return null;
					}
					return value;
				}
			}
			return null;
		};

		var writeCookie = function(name, value, days, domain) {
			var date, expires, cookie;
			if (days) {
				date = new Date();
				date.setTime(date.getTime() + (days * 86400000));
				expires = "; expires=" + date.toGMTString();
			} else {
				expires = "";
			}
			cookie = escape(name) + "=" + escape(value) + expires + "; path=/;";
			if (domain) {
				cookie += " domain=" + domain;
			}
			document.cookie = cookie;
		};

		var addShown = function(e) {
			var c = readCookie("_qb_se");
			if (!c) {
				c = {};
			} else {
				try {
					c = JSON.parse(c);
				} catch (e) {
					c = {};
				}

			}
			c[e.cm] = {
				e: e.e,
				t: +new Date()
			};

			//prune old cookies here (older than 30 days)
			var i, t = +new Date();

			t -= 30 * 24 * 60 * 60 * 1000;

			for (i in c) {
				if (c.hasOwnProperty(i)) {
					if (c[i].t < t) {
						delete c[i];
					}
				}
			}

			writeCookie("_qb_se", JSON.stringify(c), 365, cookieDomain);
		};

		var uvCounter = 0;
		var withTransaction = function(f) {
			uvCounter += 1;
			if (window.universal_variable) {
				if (window.universal_variable.transaction) {
					f();
				}
			} else if (uvCounter < 50) {
				setTimeout(function() {
					withTransaction(f);
				}, 500);
			}
		};

		var generateCreatives = function() {
			var c = readCookie("_qb_se");
			var k, a = [];
			if (c) {
				try {
					c = JSON.parse(c);
					for (k in c) {
						if (c.hasOwnProperty(k)) {
							a.push({
								cm: k,
								e: c[k].e
							});
						}
					}
				} catch (e) {}
			}
			return a;
		};

		_qtd.push = function(data) {
			if (data && data.data && data.data.qb_etc_data) {
				var i, e, etcd;
				etcd = data.data.qb_etc_data;
				for (i = 0; i < etcd.length; i++) {
					e = etcd[i];
					if (e.s === "1") {
						addShown(e);
						//console.log("showed ex", e.cm);
					}
				}
			}
			_qtd.orig_push.apply(this, arguments);
		};

		withTransaction(function() {
			if (readCookie("_qb_se")) {
				window.universal_variable.transaction.shown_creatives =
					generateCreatives();
				_qtd.push({
					resendUniversalVariables: 1
				});
			}
		});
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
