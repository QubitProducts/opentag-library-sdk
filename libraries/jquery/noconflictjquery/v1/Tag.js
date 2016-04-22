//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("jquery.noconflictjquery.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Noconflict jQuery",
		async: true,
		description: "Load jQuery and set it as a specified variable name attached to a window variable, not populating window.$ or window.jQuery.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "jQuery version",
			description: "version e.g. 1.8.3",
			token: "version",
			uv: ""
		}, {
			name: "jQuery name",
			description: "Save jQuery as a variable rather than as 'jQuery' or '$'",
			token: "jquery_name",
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
		window[this.valueForToken("jquery_name")] = $.noConflict(true);
		/*~post*/
	}
});
