//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("dcstorm.stormiqcustomtrackingscript.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "StormIQ Custom Tracking Script",
		async: true,
		description: "Extension of generic StormIQ tag that allows for a tracking script to be included after inclusion of StormIQ",
		html: "<!--@SRC@--><script type=\"text/javascript\">\nvar __stormJs = 't1.stormiq.com/dcv4/jslib/${storm_id}.js';\nvar __ch =  '${channel}';\n</script><script type=\"text/javascript\" src=\"${track_url}\"></script>\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "StormIQ ID",
			description: "",
			token: "storm_id",
			uv: ""
		}, {
			name: "StormIQ Channel",
			description: "Site channel for tag",
			token: "channel",
			uv: ""
		}, {
			name: "Tracking Script URL",
			description: "Location of script containing tracking code for StormIQ",
			token: "track_url",
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
