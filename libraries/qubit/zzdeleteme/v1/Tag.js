//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.zzdeleteme.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "zzdeleteme",
		async: true,
		description: "Charlie didn't think to just write a custom script for his testing.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "test2",
			description: "param",
			token: "param",
			uv: ""
		}, {
			name: "test2",
			description: "param",
			token: "param",
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
		console.log("" + this.valueForToken("param"))
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
