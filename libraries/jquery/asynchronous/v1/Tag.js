//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("jquery.asynchronous.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Asynchronous",
		async: true,
		description: "Load any specific version of jQuery asynchronously",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "jQuery version",
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
