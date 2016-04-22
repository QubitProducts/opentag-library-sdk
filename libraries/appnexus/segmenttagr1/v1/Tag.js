//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("appnexus.segmenttagr1.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Segment Tag R1",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "ib.adnxs.com/seg?add=${segment}&t=2",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "AppNexus Segment",
			description: "Segment for AppNexus",
			token: "segment",
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
