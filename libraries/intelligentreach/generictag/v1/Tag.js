//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelligentreach.generictag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Generic Tag",
		async: true,
		description: "Tag to be applied to all pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.ist-track.com/ContainerJavaScript.ashx?id=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Intelligent Reach ID",
			description: "",
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
