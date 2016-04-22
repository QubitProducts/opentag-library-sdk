//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("criteo.legacybasketpagetag.v2.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Legacy - Basket Page Tag",
		async: true,
		description: "The basket tag has to be integrated on the basket or checkout page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Criteo wi Parameter",
			description: "A Parameter wi provided by Criteo df",
			token: "wi",
			uv: ""
		}, {
			name: "Criteo Call Parameter",
			description: "Call Parameter provided by Criteo",
			token: "call_parameter",
			uv: ""
		}, {
			name: "Product IDs",
			description: "",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Product Unit Prices",
			description: "",
			token: "product_unit_prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Quantities",
			description: "",
			token: "quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		//changed
		var src = [
			"https://", "sslwidget.criteo.com", "/",
			"" + this.valueForToken("call_parameter"),
			"/", "display.js?", "p1="
		];
		var params = [
			"v=2",
			"&wi=", "" + this.valueForToken("wi"),
			"&s=0"
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
