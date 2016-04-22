//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("evidon.ussitenoticeinpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "US Site Notice (In-Page)",
		async: true,
		description: "This tag handles the Standard Notice functionality for US sites by adding an AdChoices link in the specified location. Must be filtered to fire on page types corresponding to individual PIDs (which are available via Evidon). The placement requires an element ID, or a classname and an index, corresponding to the element the tag should be placed into.",
		html: "<a id=\"_bapw-link\" href=\"#\" target=\"_blank\" style=\"color:#000000 !important;font:10pt Arial !important;text-decoration:none !important\"><img id=\"_bapw-icon\" style=\"border:0 !important;display:inline !important;vertical-align:middle !important;padding-right:5px !important;\"/><span style=\"vertical-align:middle !important\">AdChoices</span></a>\n",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Evidon Company ID",
			description: "The ID assigned to you by Evidon",
			token: "cid",
			uv: ""
		}, {
			name: "Evidon Page ID",
			description: "The unique ID for the page this notice will be fired on",
			token: "pid",
			uv: ""
		}, {
			name: "Using Class Name",
			description: "Enter true if providing class name and index, or false if providing an ID.",
			token: "class",
			uv: ""
		}, {
			name: "Class Name/ID",
			description: "The class name or id of the div the AdChoices link should be appended to.",
			token: "name",
			uv: ""
		}, {
			name: "Index",
			description: "The index of the specific instance of element to be appended to. Leave blank if using ID",
			token: "index",
			uv: ""
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/

		var lnk;
		var _this = this;

		function waitForLink() {
			lnk = document.getElementById("_bapw-link");
			if (lnk) {
				function v(n) {
					var r = new Image;
					r.src = u + "l.betrad.com/pub/p.gif?pid=" + e + "&ocid=" + t + "&i" +
						n + "=1&r=" + Math.random()
				}

				function m() {
					if (typeof window.innerWidth == "number" && typeof window.innerHeight ==
						"number") {
						l = window.innerWidth;
						c = window.innerHeight
					} else {
						if (document.documentElement && document.documentElement.clientWidth &&
							document.documentElement.clientHeight) {
							l = document.documentElement.clientWidth;
							c = document.documentElement.clientHeight
						} else {
							if (document.body && document.body.clientWidth && document.body.clientHeight) {
								l = document.body.clientWidth;
								c = document.body.clientHeight
							}
						}
					}
					return c <= h || l <= p
				}
				var e = 1756,
					t = 242,
					n = 1,
					r = false,
					i = document,
					s = i.getElementById("_bapw-link"),
					o = i.location.protocol == "https:",
					u = (o ? "https" : "http") + "://",
					a = u + "c.betrad.com/pub/",
					f = window._bap_p_overrides,
					l = 0,
					c = 0,
					h = 560,
					p = 720,
					d = o || f && f.hasOwnProperty(e) && f[e].new_window;
				i.getElementById("_bapw-icon").src = a + "icon1.png";
				s.onmouseover = function() {
					s.href = "http://info.evidon.com/pub_info/" + e + "?v=1&nt=" + n +
						"&nw=" + (d || m() ? "true" : "false")
				};
				s.onclick = function() {
					function n(e, t) {
						function u() {
							o.onload = o.onreadystatechange = null;
							n.removeChild(o);
							t()
						}
						var n = i.getElementsByTagName("head")[0] || i.documentElement,
							s = r,
							o = i.createElement("script");
						o.src = e;
						o.onreadystatechange = function() {
							if (!s && (this.readyState == "loaded" || this.readyState ==
								"complete")) {
								s = true;
								u()
							}
						};
						o.onload = u;
						n.insertBefore(o, n.firstChild)
					}
					if (d || m()) {
						v("c");
						return true
					}
					this.onclick = "return " + r;
					n(u + "ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js",
						function() {
							n(a + "pub2.js", function() {
								BAPW.i(s, {
									pid: e,
									ocid: t
								})
							})
						});
					return r
				};
				v("i")
				if (_this.valueForToken("class")) {
					waitForClass();
				} else {
					waitForID();
				}
			} else {
				setTimeout(waitForLink, 100);
			}
		}

		waitForLink();

		function waitForClass() {
			var tag = document.querySelectorAll('.' + _this.valueForToken("name"))[
				Number('' + _this.valueForToken("index"))];
			if (tag) {
				tag.appendChild(lnk);
			} else {
				setTimeout(waitForClass, 50);
			}
		}

		function waitForID() {
			var tag = document.getElementById('' + _this.valueForToken("name"));
			if (tag) {
				tag.appendChild(lnk);
			} else {
				setTimeout(waitForID, 50);
			}
		}

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
