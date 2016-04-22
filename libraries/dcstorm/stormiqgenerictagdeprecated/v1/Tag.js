//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("dcstorm.stormiqgenerictagdeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "StormIQ Generic Tag - Deprecated",
		async: true,
		description: "To be placed on all pages except confirmation",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "DC Storm ID",
			description: "",
			token: "storm_id",
			uv: ""
		}, {
			name: "DC Storm Script Path",
			description: "The full path of the DC Storm track.js file, excluding protocol e.g somewhere.com/js/track.js",
			token: "script_path",
			uv: ""
		}, {
			name: "DC Storm Channel",
			description: "If this is not required, leave blank",
			token: "channel",
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
		/*~script*/
	},
	pre: function() {
		/*pre*/
		window.__stormJs = 't1.stormiq.com/dcv4/jslib/' +
			this.valueForToken("storm_id") + '.js';
		window.__ch = '' + this.valueForToken("channel");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
