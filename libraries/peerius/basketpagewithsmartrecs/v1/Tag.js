//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.basketpagewithsmartrecs.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basket Page (with SmartRecs)",
		async: true,
		description: "The Peerius tag for the Basket page include SmartRecs. Uses renderRecsBasket function. renderRecsBasket needs to be a global function on the window",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Client Name",
			description: "The client name that Peerius refers to you as",
			token: "client_id",
			uv: ""
		}, {
			name: "Peerius Language",
			description: "The user language for the basket page",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Basket Currency",
			description: "The currency for the basket",
			token: "currency",
			uv: "universal_variable.basket.currency"
		}, {
			name: "Peerius Product IDs",
			description: "The product ID list for the basket",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Peerius Product Unit Sale Prices",
			description: "The list of unit sale prices for products in the basket",
			token: "unit_sale_prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Peerius Product Item Quantity List",
			description: "The list of item quantities for products in the basket",
			token: "item_quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
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
				type: "basket",
				lang: "" + this.valueForToken("lang"),
				basket: {
					items: [],
					currency: "" + this.valueForToken("currency")
				}
			},
			smartRecs: function(jsonData) {
				if (window.renderRecsBasket) {
					window.renderRecsBasket(jsonData);
				}
			}
		};
		var ii = this.valueForToken("product_ids").length;
		for (var i = 0; i < ii; i++) {
			PeeriusCallbacks.track.basket.items.push({
				refCode: this.valueForToken("product_ids")[i],
				price: this.valueForToken("unit_sale_prices")[i],
				qty: this.valueForToken("item_quantities")[i]
			});
		}
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
