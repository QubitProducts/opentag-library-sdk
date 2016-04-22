//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"evidon.ussitenoticewithimpliedconsentinpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "US Site Notice with Implied Consent (In-Page)",
			async: true,
			description: "This tag handles the In-Page Implied Consent functionality for US sites by adding an AdChoices link in the specified location and showing a cookie consent notification. Must be filtered to fire on page types corresponding to individual PIDs (which are available via Evidon). The placement requires an element ID, or a classname and an index, corresponding to the element the tag should be placed into.",
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
					(function() {
						var k = _this.valueForToken("pid"),
							m = _this.valueForToken("cid"),
							n = 1,
							b = false,
							l = document,
							p = l.getElementById("_bapw-link"),
							h = (l.location.protocol == "https:"),
							i = (h ? "https" : "http") + "://",
							g = i + "c.betrad.com/pub/",
							r = window._bap_p_overrides,
							e = 0,
							a = 0,
							f = 560,
							q = 720,
							o = h || (r && r.hasOwnProperty(k) && r[k].new_window);

						function c(s) {
							var d = new Image();
							d.src = i + "l.betrad.com/pub/p.gif?pid=" + k + "&ocid=" + m + "&i" +
								s + "=1&r=" + Math.random()
						}

						function j() {
							if (typeof(window.innerWidth) == "number" && typeof(window.innerHeight) ==
								"number") {
								e = window.innerWidth;
								a = window.innerHeight
							} else {
								if (document.documentElement && document.documentElement.clientWidth &&
									document.documentElement.clientHeight) {
									e = document.documentElement.clientWidth;
									a = document.documentElement.clientHeight
								} else {
									if (document.body && document.body.clientWidth && document.body.clientHeight) {
										e = document.body.clientWidth;
										a = document.body.clientHeight
									}
								}
							}
							return (a <= f) || (e <= q)
						}
						l.getElementById("_bapw-icon").src = g + "icon1.png";
						p.onmouseover = function() {
							p.href = "http://info.evidon.com/pub_info/" + k + "?v=1&nt=" + n +
								"&nw=" + ((o || j()) ? "true" : "false")
						};
						p.onclick = function() {
							if (o || j()) {
								c("c");
								return true
							}

							function d(u, x) {
								var v = l.getElementsByTagName("head")[0] || l.documentElement,
									t = b,
									s = l.createElement("script");

								function w() {
									s.onload = s.onreadystatechange = null;
									v.removeChild(s);
									x()
								}
								s.src = u;
								s.onreadystatechange = function() {
									if (!t && (this.readyState == "loaded" || this.readyState ==
										"complete")) {
										t = true;
										w()
									}
								};
								s.onload = w;
								v.insertBefore(s, v.firstChild)
							}
							this.onclick = "return " + b;
							d(i + "ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js",
								function() {
									d(g + "pub2.js", function() {
										BAPW.i(p, {
											pid: k,
											ocid: m
										})
									})
								});
							return b
						};
						c("i")
					}());
					waitForLocation();
				} else {
					setTimeout(waitForLink, 100);
				}
			}
			//seems  bracket is missing here



			waitForLink();

			function waitForLocation() {
				var tag;
				if (_this.valueForToken("class"))
					tag = document.querySelectorAll('.' + _this.valueForToken("name"))[Number(
						_this.valueForToken("index"))];
				else
					tag = document.getElementById('' + _this.valueForToken("name"));
				if (tag) {
					tag.appendChild(lnk);
					var hn = document.createElement('script');
					hn.type = 'text/javascript';
					hn.async = true;
					hn.setAttribute('data-ev-hover-pid', _this.valueForToken("pid"));
					hn.setAttribute('data-ev-hover-ocid', _this.valueForToken("cid"));
					hn.src = ('https:' == document.location.protocol ?
						'https://' : 'http://') + 'c.betrad.com/geo/h1.js';
					var s = document.getElementsByTagName('script')[0];
					s.parentNode.insertBefore(hn, s);
				} else {
					setTimeout(waitForLocation, 50);
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
