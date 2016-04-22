//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("coremetrics.coremetricselementtracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "CoreMetrics - Element Tracking",
		async: true,
		description: "Track custom elements with CoreMetrics. Note that this tag depends on other CoreMetrics tags having already loaded on the page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Element ID",
			description: "The unique identifier or name for the Element and the value that is displayed in the Elements report",
			token: "element_id",
			uv: ""
		}, {
			name: "Element Category",
			description: "The category passed in the Element tag is used to populate the Element Categories report.",
			token: "element_category",
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
		cmCreateElementTag(
			"" + this.valueForToken("element_id"),
			"" + this.valueForToken("element_category"));
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
