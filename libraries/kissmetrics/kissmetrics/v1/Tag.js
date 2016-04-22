//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("kissmetrics.kissmetrics.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Kiss Metrics",
		async: true,
		description: "KISSMetrics tracking tag - ASync",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "API Key",
			description: "Your KISS metrics API key",
			token: "API_KEY",
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
		var _this = this;
		window._kmq = window._kmq || [];
		(function(w, d) {
			function _kms(u) {
				setTimeout(function() {
					var s = d.createElement('script');
					var f = d.getElementsByTagName('script')[0];
					s.type = 'text/javascript';
					s.async = true;
					s.src = u;
					f.parentNode.insertBefore(s, f);
				}, 1);
			}

			function kmg() {
				_kms('//i.kissmetrics.com/i.js');
				_kms('//doug1izaerwt3.cloudfront.net/' + _this.valueForToken("API_KEY") +
					'.1.js');
			}
			if (w.addEventListener) {
				w.addEventListener("load", kmg, false);
			} else if (w.attachEvent) {
				w.attachEvent("onload", kmg);
			}
		}(window, document))
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
