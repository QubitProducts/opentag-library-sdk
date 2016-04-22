//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("bluetriangle.bluetrianglepagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Blue Triangle Page Tag",
		async: true,
		description: "Page tag should be implemented on all pages. Blue Triangle will provide your client ID.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${clientId}.btttag.com/BTT/btt.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Client ID",
			description: "Client ID provided by Blue Triangle. e.g. demo.btttag.com/BTT/btt.js, demo is your client ID",
			token: "clientId",
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
		/*~post*/
	}
});
