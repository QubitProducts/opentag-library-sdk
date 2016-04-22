//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("rocketfuel.conversionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Pixel",
		async: true,
		description: "To be placed on confirmation page.",
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
			description: "The ID specific to the campaign this tag is intended for",
			token: "campaign_id",
			uv: ""
		}, {
			name: "Random Number",
			description: "A random number for use as a cachebuster",
			token: "random",
			uv: ""
		}, {
			name: "Order Total",
			description: "The value paid by the customer for this order",
			token: "order_total",
			uv: "universal_variable.transaction.subtotal"
		}],
		categories:[
			"DSP (Ad Server)"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var img = new Image();
		img.src = "//" +
			this.valueForToken("campaign_id") + "p.rfihub.com/ca.gif?rb=" +
			this.valueForToken("merchant_id") + "&ca=" +
			this.valueForToken("campaign_id") + "&ra=" +
			this.valueForToken("random") + "&basket=" +
			this.valueForToken("order_total");
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
