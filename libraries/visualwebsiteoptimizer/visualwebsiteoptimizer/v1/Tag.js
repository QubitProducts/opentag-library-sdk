//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"visualwebsiteoptimizer.visualwebsiteoptimizer.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Visual Website Optimizer",
			async: true,
			description: "Visual Website Optimizer is an A/B testing tool that allows marketing professionals to create different versions of their websites and landing pages using a point-and-click editor (no HTML knowledge needed!) and then see which version produces maximum conversion rate or sales.",
			html: "<!-- Start Visual Website Optimizer Asynchronous Code -->\n\n<!-- End Visual Website Optimizer Asynchronous Code -->",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Account ID",
				description: "The ID of the account used for Visual Website Optimizer",
				token: "accountid",
				uv: ""
			}, {
				name: "Library Tolerance",
				description: "The tolerance level for the library",
				token: "library_tolerance",
				uv: ""
			}, {
				name: "Settings Tolerance",
				description: "The settings tolerance value",
				token: "settings_tolerance",
				uv: ""
			}, {
				name: "Use Existing jQuery",
				description: "Whether to use the version of jQuery already existing on the page",
				token: "use_jquery",
				uv: ""
			}],
		categories:[
			"AB & Multi-Variate Testing"
		]

			/*~config*/
      };
		},
		script: function() {
			/*script*/
			var _this = this;
			var _vwo_code = (function() {
				var account_id = _this.valueForToken("accountid"),
					settings_tolerance = _this.valueForToken("settings_tolerance"),
					library_tolerance = _this.valueForToken("library_tolerance"),
					use_existing_jquery = _this.valueForToken("use_jquery"),
					// DO NOT EDIT BELOW THIS LINE
					f = false,
					d = document;
				return {
					use_existing_jquery: function() {
						return use_existing_jquery;
					},
					library_tolerance: function() {
						return library_tolerance;
					},
					finish: function() {
						if (!f) {
							f = true;
							var a = d.getElementById('_vis_opt_path_hides');
							if (a) a.parentNode.removeChild(a);
						}
					},
					finished: function() {
						return f;
					},
					load: function(a) {
						var b = d.createElement('script');
						b.src = a;
						b.type = 'text/javascript';
						b.innerText;
						b.onerror = function() {
							_vwo_code.finish();
						};
						d.getElementsByTagName('head')[0].appendChild(b);
					},
					init: function() {
						settings_timer = setTimeout('_vwo_code.finish()', settings_tolerance);
						this.load('//dev.visualwebsiteoptimizer.com/j.php?a=' + account_id +
							'&u=' + encodeURIComponent(d.URL) + '&r=' + Math.random());
						var a = d.createElement('style'),
							b =
								'body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',
							h = d.getElementsByTagName('head')[0];
						a.setAttribute('id', '_vis_opt_path_hides');
						a.setAttribute('type', 'text/css');
						if (a.styleSheet) a.styleSheet.cssText = b;
						else a.appendChild(d.createTextNode(b));
						h.appendChild(a);
						return settings_timer;
					}
				};
			}());
			window._vwo_settings_timer = _vwo_code.init();
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
