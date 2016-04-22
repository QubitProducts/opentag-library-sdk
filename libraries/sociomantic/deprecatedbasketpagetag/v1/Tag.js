//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sociomantic.deprecatedbasketpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "{DEPRECATED} Basket Page Tag",
		async: true,
		description: "Product ID is required on the basket page, along with additional information like quantity, amount, currency",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product Ids",
			description: "A list of identifiers relating to products in the basket",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Amounts",
			description: "A list of amounts for each item in the basket",
			token: "amounts",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Currency",
			description: "The currency for the current basket",
			token: "currency",
			uv: "universal_variable.basket.currency"
		}, {
			name: "Quantities",
			description: "A list of quantities for items relating to respective items currently in the basket",
			token: "quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Advertiser Id",
			description: "An identifier for the client",
			token: "advertiserid",
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
		/*~script*/
	},
	pre: function() {
		/*pre*/
		window.basket = {
			products: []
		};

		for (var i = 0, ii = this.valueForToken("product_ids").length; i < ii; i++) {
			basket.products.push({
				identifier: this.valueForToken("product_ids")[i],
				amount: this.valueForToken("amounts")[i],
				currency: '' + this.valueForToken("currency"),
				quantity: this.valueForToken("quantities")[i]
			});
		}

		window.basket = basket;
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
