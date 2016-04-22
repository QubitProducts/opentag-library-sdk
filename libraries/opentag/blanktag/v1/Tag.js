//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("opentag.blanktag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Blank Tag",
		async: true,
		description: "A blank tag",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
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
		/*~post*/
	}
});
