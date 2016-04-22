//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.confirmationpageasync.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Page (Async)",
		async: true,
		description: "For use in single page checkouts, when transaction can happen after page load (virtual page views)",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Client ID",
			description: "The client ID given to you from Peerius",
			token: "client_id",
			uv: ""
		}, {
			name: "Transaction Order ID",
			description: "The ID for the transaction",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Transaction Order Currency",
			description: "The currency used for the order",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Transaction Order Language",
			description: "The language used in the transaction",
			token: "language",
			uv: "universal_variable.user.language"
		}, {
			name: "Transaction Sub-total",
			description: "The total cost for the transaction excluding shipping cost and tax",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Transaction Total",
			description: "The total cost for the order including tax and shipping",
			token: "total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Transaction Order Shipping",
			description: "The cost of shipping",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
		}, {
			name: "Transaction Product ID List",
			description: "The list of IDs for products in the order",
			token: "product_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Transaction Product Quantity List",
			description: "The list of quantities for products in the basket",
			token: "product_qty_list",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Transaction Unit Sale Price List",
			description: "The list of unit sale prices corresponding to items in the order",
			token: "unit_sale_price_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "AJAX Url Start",
			description: "The start of the URL in the ajax request: often just the Peerius client ID",
			token: "url_start",
			uv: ""
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
				lang: "" + this.valueForToken("language"),
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
		var ii = this.valueForToken("product_id_list").length;
		for (var i = 0; i < ii; i++) {
			PeeriusCallbacks.track.order.items.push({
				refCode: this.valueForToken("product_id_list")[i],
				qty: this.valueForToken("product_qty_list")[i],
				price: this.valueForToken("unit_sale_price_list")[i]
			});
		}
		/*~pre*/
	},
	post: function() {
		/*post*/
		var orderString = JSON.stringify(PeeriusCallbacks.track.order);
		var order = encodeURIComponent(orderString);
		Peerius.sendAjax("" + this.valueForToken("url_start") +
			"/order/add.pagex?order=" + order);

		/*~post*/
	}
});
