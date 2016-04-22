//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mediaplex.vouchercodeenterediframe.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Voucher code entered iframe",
		async: true,
		description: "This iframe passes back the pageview along with the validated voucher code being used. It should be fired once, as soon as possible after validating a voucher (before confirmation).",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Mediaplex Client ID",
			description: "The ID assigned to you by Mediaplex",
			token: "client_id",
			uv: ""
		}, {
			name: "Page Name",
			description: "The name of the page being accessed. Typically all lowercase, with underscores",
			token: "page_name",
			uv: ""
		}, {
			name: "Event Name",
			description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
			token: "event_name",
			uv: ""
		}, {
			name: "Voucher Code",
			description: "The voucher code used in this order - leave blank if none.",
			token: "promo_code",
			uv: "universal_variable.basket.voucher"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var frame = document.createElement("frame");
		var src = (document.location.protocol === "https:") ? "https://secure." :
			"http://";
		src = src + "img-cdn.mediaplex.com/0/" +
			this.valueForToken("client_id") + "/universal.html?page_name=" +
			this.valueForToken("page_name") + "&" +
			this.valueForToken("event_name") + "=1&PromoCode=" +
			this.valueForToken("promo_code") + "&mpuid=";
		frame.src = src;
		frame.height = 1;
		frame.width = 1;
		frame.frameborder = 0;
		document.body.appendChild(frame);
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
