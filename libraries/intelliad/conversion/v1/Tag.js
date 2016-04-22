//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelliad.conversion.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion",
		async: true,
		description: "The intelliAd Conversion Tracking is specifically tailored for our system and provides you and our bid management tool extensive data on individual conversions.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Transaction Order Total",
			description: "The total amount for the conversion",
			token: "order_total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Transaction Order Currency",
			description: "The currency for the transaction",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Transaction Order ID",
			description: "The unique identifier specifying the transaction.",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Transaction Product IDs",
			description: "The array of product ID's corresponding to products in the transaction",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "intelliAd Conversion Type",
			description: "sale, lead, download, pageview, signup, social, call, cutom1 - custom49 for main types _[1-255] sub",
			token: "order_type",
			uv: ""
		}, {
			name: "IntelliAd Custom Parameter 1",
			description: "Any value can be passed – used for intelliAd Reporting and Bidding (leave blank to ignore)",
			token: "custom_param1",
			uv: ""
		}, {
			name: "IntelliAd Custom Parameter 2",
			description: "Any value can be passed – used for intelliAd Reporting and Bidding (leave blank to ignore)",
			token: "custom_param2",
			uv: ""
		}, {
			name: "IntelliAd Custom Parameter 3",
			description: "Any value can be passed – used for intelliAd Reporting and Bidding (leave blank to ignore)",
			token: "custom_param3",
			uv: ""
		}, {
			name: "IntelliAd Custom Parameter 4",
			description: "Any value can be passed – used for intelliAd Reporting and Bidding (leave blank to ignore)",
			token: "custom_param4",
			uv: ""
		}, {
			name: "IntelliAd Client ID",
			description: "The id that relates the client to IntelliAd",
			token: "client_id",
			uv: ""
		}],
		categories:[
			"Advertising Network"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.ia_v = "" + this.valueForToken("order_total");
		window.ia_vz = "" + this.valueForToken("order_type"); // sale -> "sa", lead -> "le", signup -> "si", pageview -> "pa", download -> "do"
		window.ia_vv = (("" + this.valueForToken("order_currency")).length) ?
			"" + this.valueForToken("order_currency") : "EUR";
		window.ia_po = "" + this.valueForToken("order_id");
		window.ia_c1 = "" + this.valueForToken("custom_param1");
		window.ia_c2 = "" + this.valueForToken("custom_param2");
		window.ia_c3 = "" + this.valueForToken("custom_param3");
		window.ia_c4 = "" + this.valueForToken("custom_param4");

		var productIDs = [];
		for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
			productIDs.push(this.valueForToken("product_ids")[i]);
		}
		window.ia_pi = productIDs.join("|");
		window.ia_tp = "//t23.intelliad.de/tc2.js";
		window.ia_cl = "" + this.valueForToken("client_id");
		window.ia_rand = Math.floor(Math.random() * 11111139435231);
		window.ia_link = ia_tp +
			'?cl=' + ia_cl +
			'&v=' + ia_v +
			'&vz=' + ia_vz +
			'&vv=' + ia_vv +
			'&po=' + ia_po +
			'&c1=' + ia_c1 +
			'&c2=' + ia_c2 +
			'&c3=' + ia_c3 +
			'&c4=' + ia_c4 +
			'&pi=' + ia_pi +
			'&rand=' + ia_rand;

		var script = document.createElement("script");
		script.src = ia_link;
		document.getElementsByTagName("head")[0].appendChild(script);
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
