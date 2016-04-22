//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("netbooster.conversionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion pixel",
		async: true,
		description: "",
		html: "\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pixel ID",
			description: "",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Client ID",
			description: "",
			token: "client_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Partner ID",
			description: "",
			token: "partner_id",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.img = new Image();
		img.src = "//conversion-pixel.invitemedia.com/pixel?pixelID=" + 
				this.valueForToken("pixel_id") + "&clientID=" +
				this.valueForToken("client_id") + "&partnerID=" +
				this.valueForToken("partner_id") + "&key=conv&orderID=" +
				this.valueForToken("order_id") + "&returnType=js";
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
