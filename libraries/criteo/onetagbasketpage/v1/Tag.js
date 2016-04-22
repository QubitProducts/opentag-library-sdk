//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("criteo.onetagbasketpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "OneTag - Basket Page",
		async: true,
		description: "The basket tag has to be integrated on the basket or checkout page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "static.criteo.net/js/ld/ld.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Criteo Partner ID",
			description: "The ID assigned to you by Criteo",
			token: "partner_id",
			uv: ""
		}, {
			name: "Customer ID",
			description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Site Type",
			description: "\"m\" for mobile or \"t\" for tablet or \"d\" for  desktop",
			token: "site_type",
			uv: ""
		}, {
			name: "Product ID List",
			description: "List of product IDs for all products in the user's basket.",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Product Price List",
			description: "Prices for each product currently in the basket.",
			token: "product_prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Product Quantity List",
			description: "Quantities for each item currently in the basket",
			token: "product_quantities",
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
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		var products = [];

		for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
			products.push({
				id: this.valueForToken("product_ids")[i],
				price: this.valueForToken("product_prices")[i],
				quantity: this.valueForToken("product_quantities")[i]
			});
		}

		var user_id = "" + this.valueForToken("customer_id");
		//Remove email if present.
		if (user_id.indexOf("@") > -1) {
			user_id = "";
		}

		window.criteo_q = window.criteo_q || [];
		window.criteo_q.push({
			event: "setAccount",
			account: this.valueForToken("partner_id")
		}, {
			event: "setCustomerId",
			id: user_id
		}, {
			event: "setSiteType",
			type: "" + this.valueForToken("site_type")
		}, {
			event: "viewBasket",
			product: products
		});
		/*~post*/
	}
});
