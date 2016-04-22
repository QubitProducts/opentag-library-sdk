//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("visualdna.pageviewreport.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Page View Report",
		async: true,
		description: "This tag should fire across all pages and all other Visual DNA tags should have a dependency on this tag. If normal page transition is being used on the site, then an empty array should be assigned to the \"window.history generated URLs\" parameter. Otherwise, a 2-element array (containing the current URL and the referrer URL) should be assigned to the \"window.history generated URLs\" parameter using a JS Expression. If window.history is being used then this tag should fire every time the host page make a history mutation.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "a1.vdna-assets.com/analytics.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}, {
			name: "Array of window.history generated URLs",
			description: "See tag description for more details",
			token: "window_history",
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
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		var object = {
			apiKey: "" + this.valueForToken("api_key"),
			method: "reportPageView"
		};
		if (this.valueForToken("window_history").length === 2) {
			object.args = this.valueForToken("window_history");
		}
		window.VDNA.queue.push(object);
		/*~post*/
	}
});
