//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("dcstorm.stormiqgenerictag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "StormIQ Generic Tag",
		async: true,
		description: "To be placed on all pages except confirmation",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "StormIQ ID",
			description: "",
			token: "storm_id",
			uv: ""
		}, {
			name: "StormIQ Channel",
			description: "If this is not specified, leave blank",
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
