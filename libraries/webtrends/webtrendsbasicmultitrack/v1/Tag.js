//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("webtrends.webtrendsbasicmultitrack.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Webtrends - basic multiTrack",
		async: true,
		description: "Use multiTrack for sending back custom data, or overriding the values from Webtrends' standard set of data.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Custom variables",
			description: "You should return an object (key/value) from within a self executing anonymous function.",
			token: "data",
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
		Webtrends.multiTrack({
			args: this.valueForToken("data")
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
