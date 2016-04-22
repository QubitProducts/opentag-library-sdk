//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("affilinet.normaltrackingpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Normal Tracking Pixel",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Program ID",
			description: "Program ID is fixed and defined by the platform when the advertiser is setup",
			token: "program_id",
			uv: ""
		}, {
			name: "Mode",
			description: "Mode is either pps (record a commission by % of order) or ppl (record a fixed rate commission)",
			token: "mode",
			uv: ""
		}, {
			name: "Ltype",
			description: "Ltype number is	the rate ID on our system, i.e. rate 1 could be 5% of order value rate 2 could be",
			token: "type",
			uv: ""
		}, {
			name: "Subtotal",
			description: "",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Voucher Code",
			description: "",
			token: "voucher_code",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Domain",
			description: "Affilinet domain, excluding https:// and http://",
			token: "domain",
			uv: ""
		}],
		categories:[
			"Affiliate Networks"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var src = "//" + this.valueForToken("domain") +
			"/registersale.asp" +
			"?site=" + this.valueForToken("program_id") +
			"&mode=" + this.valueForToken("mode") +
			"&ltype=" + this.valueForToken("type") +
			"&price=" + this.valueForToken("subtotal") +
			"&order=" + this.valueForToken("order_id") +
			"&curr=" + this.valueForToken("currency") +
			"&vcode=" + this.valueForToken("voucher_code");

		var image = new Image();
		image.src = src;
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
