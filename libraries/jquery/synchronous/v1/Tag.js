//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("jquery.synchronous.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Synchronous",
		async: false,
		description: "Load any specific version of jQuery synchronously",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Version",
			description: "jQuery version e.g. 1.8.3",
			token: "version",
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
