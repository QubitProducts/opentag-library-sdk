//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("hellobar.hellobar.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Hello Bar",
		async: true,
		description: "The Hello bar is a Web Toolbar that Helps You Get More Clicks on Your Website. Delopy this simple notification bar to better engage your users.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.hellobar.com/hellobar.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account Id",
			description: "Your account id with Hello Bar",
			token: "ACCOUNT_ID",
			uv: ""
		}, {
			name: "Bar Id",
			description: "Your Bar's id number",
			token: "BAR_ID",
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		new HelloBar(this.valueForToken("ACCOUNT_ID"), this.valueForToken("BAR_ID"));
		/*~post*/
	}
});
