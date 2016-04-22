//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("deprecatedtags.segmenttagdeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Segment Tag [deprecated]",
		async: true,
		description: "",
		html: "<img src=\"http://ib.adnxs.com/seg?add=${segment}&t=2\" width=\"1\" height=\"1\" alt=\"\" border=\"0\" style=\"display:none;\" />",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "AppNexus Segment",
			description: "Segment id for use with AppNexus tag",
			token: "segment",
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
