//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("freespee.aesptag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "AESP TAG",
		async: true,
		description: "Blah",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Test Param 1",
			description: "Test",
			token: "test_param2",
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
		/*~post*/
	}
});
