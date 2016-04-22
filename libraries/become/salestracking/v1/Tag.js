//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("become.salestracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Sales Tracking",
		async: true,
		description: "Sales tracking tag to be placed on the confirmation page, for customers with Pangora IDs to track more sale information.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "https://clicks.pangora.com/sales-tracking/salesTracker.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pangora Merchant ID",
			description: "Your Merchant ID that is provided by Pangora. This ID is essential for a working tracking.",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "Your customer’s order number through which purchases can be confirmed.",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "Total value of shopping cart. A full stop must be used as decimal separator.",
			token: "cart_value",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Returning Customer",
			description: "Whether the customer is new or existing. Set to true for existing customers.",
			token: "customer_flag",
			uv: "universal_variable.user.returning"
		}, {
			name: "Product IDs",
			description: "List of product IDs the customer purchased in this order.",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Names",
			description: "List of names for products the customer purchased in this order.",
			token: "product_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product Prices",
			description: "List of prices for products the customer purchased in this order.",
			token: "product_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Product Counts",
			description: "List of quantities for products the customer purchased in this order.",
			token: "product_qtys",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Currency",
			description: "Currency used for submitting the total value. The value must match ISO 4217.",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}],
		categories:[
			"Feed Management (Shopping Comparison)"
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
		window.pg_pangora_merchant_id = '' + this.valueForToken("merchant_id");
		window.pg_order_id = '' + this.valueForToken("order_id");
		window.pg_cart_value = '' + this.valueForToken("cart_value");
		window.pg_currency = '' + this.valueForToken("currency");
		window.pg_customer_flag = this.valueForToken("customer_flag") ? 'old' :
			'new';
		window.pg_product_id = '';
		window.pg_product_name = '';
		window.pg_product_price = '';
		window.pg_product_units = '';
		window.pg_cart_size = 0;

		//Build CSVs and get cart size.
		for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
			var tempid = this.valueForToken("product_ids")[i];
			var tempnm = this.valueForToken("product_names")[i];
			var temppr = this.valueForToken("product_prices")[i];
			var tempqt = this.valueForToken("product_qtys")[i];

			//Build the cart size sum
			pg_cart_size += Number(tempqt);

			//Start each string with a comma, so long as it's not the first.
			var startString = (i === 0) ? '' : ',';
			pg_product_id += startString + String(tempid);
			pg_product_name += startString + String(tempnm);
			pg_product_price += startString + String(temppr);
			pg_product_units += startString + String(tempqt);
		}
		pg_cart_size = String(pg_cart_size);

		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
