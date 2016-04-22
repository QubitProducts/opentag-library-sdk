//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.uvtestpageinformation.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "UV Test - Page Information",
		async: true,
		description: "Test details about the current page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Page Environment",
			description: "",
			token: "a",
			uv: "universal_variable.page.environment"
		}, {
			name: "Page Variation",
			description: "",
			token: "b",
			uv: "universal_variable.page.variation"
		}, {
			name: "Page Category",
			description: "",
			token: "c",
			uv: "universal_variable.page.category"
		}, {
			name: "Page Sub-Category",
			description: "",
			token: "d",
			uv: "universal_variable.page.subcategory"
		}, {
			name: "Page Revision",
			description: "",
			token: "e",
			uv: "universal_variable.page.revision"
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		console.log("" + this.valueForToken("a"));
		console.log("" + this.valueForToken("b"));
		console.log("" + this.valueForToken("c"));
		console.log("" + this.valueForToken("d"));
		console.log("" + this.valueForToken("e"));
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
