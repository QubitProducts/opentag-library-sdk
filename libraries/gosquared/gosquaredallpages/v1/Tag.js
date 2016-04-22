//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("gosquared.gosquaredallpages.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "GoSquared - all pages",
		async: true,
		description: "Real-time analytics for your website. GoSquared helps you understand and improve your online presence.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account ID",
			description: "The ID specific to your GoSquared account.",
			token: "account_no",
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
		window.GoSquared = {};
		GoSquared.acct = "" + this.valueForToken("account_no");
		(function(w) {
			function gs() {
				w._gstc_lt = +(new Date);
				var d = document;
				var g = d.createElement("script");
				g.type = "text/javascript";
				g.async = true;
				g.src = "//d1l6p2sc9645hc.cloudfront.net/tracker.js";
				var s = d.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(g, s);
			}
			w.addEventListener ? w.addEventListener("load", gs, false) : w.attachEvent(
				"onload", gs);
		})(window);
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
