//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.checkoutpages.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Checkout Pages",
		async: true,
		description: "Peerius tag for the checkout pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is to be implemented",
			token: "client_id",
			uv: ""
		}, {
			name: "Peerius Language",
			description: "Language of the page the tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Basket Currency",
			description: "The currency of the confirmation page the tag is on",
			token: "currency",
			uv: "universal_variable.basket.currency"
		}, {
			name: "Peerius Subtotal",
			description: "The total value of the products at the checkout stage, minus any shipping",
			token: "subtotal",
			uv: "universal_variable.basket.subtotal"
		}, {
			name: "Peerius Shipping Cost",
			description: "The cost of shipping at the basket page stage",
			token: "shipping",
			uv: "universal_variable.basket.shipping_cost"
		}, {
			name: "Peerius Checkout Total",
			description: "The total of item and shipping cost in basket page",
			token: "total",
			uv: "universal_variable.basket.total"
		}, {
			name: "Peerius Product IDs List",
			description: "A list of product IDs in the basket",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Peerius Product Quantities List",
			description: "A list of quantities for items in the basket",
			token: "product_quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Peerius Unit Sale Price List",
			description: "A list of unit sale prices for items in the basket",
			token: "price_list",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}],
		categories:[
			"Personalisation Platform"
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
		window.PeeriusCallbacks = {
			track: {
				type: "checkout",
				lang: "" + this.valueForToken("lang"),
				checkout: {
					items: [],
					currency: "" + this.valueForToken("currency"),
					subtotal: "" + this.valueForToken("subtotal"),
					shipping: "" + this.valueForToken("shipping"),
					total: "" + this.valueForToken("total")
				}
			}
		};
		var ii = this.valueForToken("product_ids").length;
		for (var i = 0; i < ii; i++) {
			PeeriusCallbacks.track.checkout.items.push({
				refCode: this.valueForToken("product_ids")[i],
				qty: this.valueForToken("product_quantities")[i],
				price: this.valueForToken("price_list")[i]
			});
		}
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
