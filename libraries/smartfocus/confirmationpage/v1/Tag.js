//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("smartfocus.confirmationpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "js.advisor.smartfocus.com/advisor.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of SKUS codes",
			description: "Array of SKUS codes",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Array of Product Quantities",
			description: "Array of Product Quantities",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Array of Product Unit Sale Prices",
			description: "Array of Product Unit Sale Prices",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Order SubTotal",
			description: "Order SubTotal",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order Total",
			description: "Order Total",
			token: "total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order Currency",
			description: "Order Currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}],
		categories:[
			"Web Analytics"
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
		window._advisorq = window._advisorq || [];

		var skus = [];
		for (var i = 0; i < this.valueForToken("skus").length; i++) {
			skus.push("" + this.valueForToken("skus")[i]);
		}

		window._advisorq.push({
			_setConfig: {
				sku: skus.join(",")
			}
		});

		var items = [];
		for (var i = 0; i < this.valueForToken("skus").length; i++) {
			items.push({
				sku: this.valueForToken("skus")[i],
				quantity: this.valueForToken("quants")[i],
				price: this.valueForToken("prices")[i]
			});
		}

		window._advisorq.push({
			_buy: {
				currency: "" + this.valueForToken("currency"),
				items: items,
				charges: this.valueForToken("total") - this.valueForToken("subtotal")
			}
		});
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
