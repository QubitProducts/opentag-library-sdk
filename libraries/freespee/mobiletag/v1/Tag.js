//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("freespee.mobiletag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Mobile Tag",
		async: true,
		description: "The same as the generic tag but for mobile",
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
