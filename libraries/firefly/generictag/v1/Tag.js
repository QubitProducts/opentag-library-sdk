//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("firefly.generictag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Generic Tag",
		async: true,
		description: "The standard Firefly tag",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "firefly-071591.s3.amazonaws.com/scripts/loaders/loader.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Firefly Token",
			description: "The token specific to the client using Firefly",
			token: "client_id",
			uv: ""
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
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
		window.fireflyAPI = {};
		fireflyAPI.token = "" + this.valueForToken("client_id");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
