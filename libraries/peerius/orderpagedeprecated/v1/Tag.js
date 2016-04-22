//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.orderpagedeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Order Page DEPRECATED",
		async: true,
		description: "DO NOT USE. Peerius tag for the order page",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "pt.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "The language of the page that the current tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Order No",
			description: "Order number of the order on the page",
			token: "order_no",
			uv: ""
		}, {
			name: "Peerius Currency",
			description: "Currency of the order page",
			token: "currency",
			uv: ""
		}, {
			name: "Peerius Order Subtotal",
			description: "Subtotal of the items in the order",
			token: "subtotal",
			uv: ""
		}, {
			name: "Peerius Order Shipping",
			description: "The shipping cost for the order",
			token: "shipping",
			uv: ""
		}, {
			name: "Peerius Order Total",
			description: "The total of the order and other expenses like shipping",
			token: "total",
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
				lang: "" + this.valueForToken("lang"),
				order: {
					orderNo: "" + this.valueForToken("order_no"),
					items: [],
					currency: "" + this.valueForToken("currency"),
					subtotal: "" + this.valueForToken("subtotal"),
					shipping: "" + this.valueForToken("shipping"),
					total: "" + this.valueForToken("total")
				}
			}
		};
		var ii = window.universal_variable.basket.line_items.length;
		for (var i = 0; i < ii; i++) {
			PeeriusCallbacks.track.checkout.items.push({
				refCode: window.universal_variable.basket.line_items[i].product.id,
				qty: window.universal_variable.basket.line_items[i].quantity,
				price: window.universal_variable.basket.line_items[i].product.unit_sale_price
			});
		}
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
