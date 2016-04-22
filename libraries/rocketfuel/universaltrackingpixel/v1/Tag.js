//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("rocketfuel.universaltrackingpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Universal Tracking Pixel",
		async: true,
		description: "This tag is to fire on every page to provide general pageview tracking.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "RocketFuel Merchant ID",
			description: "The ID assigned to you by RocketFuel",
			token: "merchant_id",
			uv: ""
		}, {
			name: "RocketFuel Campaign ID",
			description: "The campaign ID for the specific campaign this tag applies to.",
			token: "campaign_id",
			uv: ""
		}],
		categories:[
			"DSP (Ad Server)"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var cachebust = (Math.random() + "").substr(2);
		var img = new Image();
		img.src = "//" +
			this.valueForToken("campaign_id") + "p.rfihub.com/ca.gif?rb=" +
			this.valueForToken("merchant_id") + "&ca=" +
			this.valueForToken("campaign_id") + "&ra=" + cachebust;
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
