//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.confirmationpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Page",
		async: true,
		description: "Peerius tag for the confirmation page, where 'type' = 'order'.",
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
			name: "Peerius Order ID",
			description: "The unique ID for this transaction",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Peerius Transaction Currency",
			description: "The currency of the confirmation page the tag is on",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Peerius Subtotal",
			description: "The total value of the products at the confirmation page stage, minus any shipping",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Peerius Shipping Cost",
			description: "The cost of shipping at the confirmation page stage",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
		}, {
			name: "Peerius Checkout Total",
			description: "The total of item and shipping cost in confirmation page",
			token: "total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Peerius Product IDs List",
			description: "A list of product IDs on the confirmation page",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Peerius Product Quantities List",
			description: "A list of quantities for items on the confirmation page",
			token: "product_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Peerius Unit Sale Price List",
			description: "A list of unit sale prices for items on the confirmation page",
			token: "price_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
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
				type: "order",
				lang: "" + this.valueForToken("lang"),
				order: {
					orderNo: "" + this.valueForToken("order_id"),
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
			PeeriusCallbacks.track.order.items.push({
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
