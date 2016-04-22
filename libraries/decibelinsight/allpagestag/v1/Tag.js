//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("decibelinsight.allpagestag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "All Pages Tag",
		async: true,
		description: "Decibel Insight’s ground-breaking visual analytics software introduces the most advanced, innovative and complete heatmapping tool in the world, designed to help businesses of all types and sizes generate better results from their websites.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Decibel Insight Account ID",
			description: "The ID specific to your account given by Decibel",
			token: "account_id",
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

		window._da_ = window._da_ || [];
		var _da_oldErr = window.onerror;

		_da_.err = [];
		window.onerror = function(e) {
			_da_.err.push(e);
			_da_oldErr && _da_oldErr(e);
		};
		var _this = this;
		(function(d) {
			var da = d.createElement('script');
			da.type = 'text/javascript';
			da.async = 'async';
			da.src = location.protocol + '//decibelinsight.net/i/' +
				_this.valueForToken("account_id") + '/di.js';
			d.getElementsByTagName('head')[0].appendChild(da);
		})(document);

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
