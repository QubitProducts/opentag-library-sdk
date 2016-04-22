//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("pricerunner.pricerunnersalepixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Price Runner Sale Pixel",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Enterprise ID",
			description: "The Enterprise ID is an ID that enables a single integration across multiple Commission Junction products. This parameter is static and can be hard-coded into the URL call for the image.",
			token: "enterprise_id",
			uv: ""
		}, {
			name: "Action ID",
			description: "Parameter that is paired with the Action ID, a Commission Junction-assigned number that identifies an action that has occurred. The Action ID is static and can be hard-coded into the URL call for the image.",
			token: "action_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Product ID List",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Unit Price List",
			description: "",
			token: "unit_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		}, {
			name: "Product Quantity List",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}],
		categories:[
			"Feed Management (Shopping Comparison)"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var img = document.createElement("img");
		var src = [
			"https://www.emjcd.com/u?",
			"CID=" + this.valueForToken("enterprise_id"),
			"&OID=" + this.valueForToken("order_id"),
			"&TYPE=" + this.valueForToken("action_id")
		];
		for (var i = 0; i < this.valueForToken("ids").length; i++) {
			var item = [];
			var index = i + 1;
			item.push("&item" + index + "=" + this.valueForToken("ids")[i]);
			item.push("&amt" + index + "=" + this.valueForToken("unit_prices")[i]);
			item.push("&qty" + index + "=" + this.valueForToken("quantities")[i]);
			src.push(item.join(""));
		}
		src.push("&currency=" + this.valueForToken("currency"));
		src.push("&method=img");
		img.setAttribute("src", src.join(""));
		img.setAttribute("height", "1");
		img.setAttribute("width", "20");
		document.body.appendChild(img);
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
