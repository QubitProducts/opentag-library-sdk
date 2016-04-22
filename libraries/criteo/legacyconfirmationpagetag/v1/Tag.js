//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("criteo.legacyconfirmationpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Legacy - Confirmation Page Tag",
		async: true,
		description: "This is a mandatory tag and must be executed on the confirmation page after user made payment.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Criteo wi parameter",
			description: "Criteo wi parameter value",
			token: "wi",
			uv: ""
		}, {
			name: "Criteo call parameter value",
			description: "Criteo call parameter value",
			token: "call_parameter",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Product IDs",
			description: "",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Unit Sale Prices",
			description: "",
			token: "product_unit_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Quantities",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var src = [
			"https://", "sslwidget.criteo.com", "/",
			"" + this.valueForToken("call_parameter"),
			"/", "display.js?", "p1="
		];
		var params = [
			"v=2",
			"&s=1",
			"&wi=", "" + this.valueForToken("wi"),
			"&t=", "" + this.valueForToken("order_id")
		];

		for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
			var index = i + 1;
			params.push("&i" + index + "=" + this.valueForToken("product_ids")[i]);
			params.push("&p" + index + "=" + this.valueForToken("product_unit_prices")[
				i]);
			params.push("&q" + index + "=" + this.valueForToken("quantities")[i]);
		}
		src.push(escape(params.join("")));
		src.push("&t1=transaction&resptype=gif");
		
		var img = document.createElement("img");
		img.setAttribute("src", src.join(""));
		img.setAttribute("height", "1");
		img.setAttribute("width", "1");
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
