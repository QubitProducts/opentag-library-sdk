//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("appnexus.conversiontag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Tag",
		async: true,
		description: "",
		html: "<img src=\"http://ib.adnxs.com/px?id=${appnexus_id}&seg=${appnexus_segment}&t=1\" width=\"1\" height=\"1\" style=\"display:none;\" border=\"0\" alt=\"\" />",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "AppNexus ID",
			description: "",
			token: "appnexus_id",
			uv: ""
		}, {
			name: "AppNexus Segment",
			description: "",
			token: "appnexus_segment",
			uv: ""
		}],
		categories:[
			"DSP"
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
