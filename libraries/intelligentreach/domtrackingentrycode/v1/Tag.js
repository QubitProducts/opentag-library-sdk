//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelligentreach.domtrackingentrycode.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "DOM Tracking Entry Code",
		async: true,
		description: "Placed on all pages and entry points to the site, but not on any of the checkout / final confirmation pages. Async-compatible version of the code.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.ist-track.com/ProcessClickJavaScript.ashx?id=${id}&useDom=1",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "IntelligentReach ID",
			description: "Unique ID assigned by IntelligentReach - must remain the same across the whole site",
			token: "id",
			uv: ""
		}],
		categories:[
			"Feed Management (Shopping Comparison)"
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
		/*~post*/
	}
});
