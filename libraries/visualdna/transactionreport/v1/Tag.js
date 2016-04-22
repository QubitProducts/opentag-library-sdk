//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("visualdna.transactionreport.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Transaction Report",
		async: true,
		description: "This tag should fire on the Transaction Confirmation page. The tag must have a dependency on the Visual DNA Page View Report tag.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of product names",
			description: "Array of product names",
			token: "names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Array of product IDs",
			description: "Array of product IDs",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Array of product categories",
			description: "Array of product categories",
			token: "categories",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Array of product unit sale prices",
			description: "Array of product unit sale prices",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Currency",
			description: "Currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Array of product quantities",
			description: "Array of product quantities",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Array of individual product discounts",
			description: "An array of a length equal to the number of items. Can have empty strings or zeros as well.",
			token: "discounts",
			uv: ""
		}, {
			name: "Order Total",
			description: "Order Total",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Payment Type",
			description: "Payment Type",
			token: "payment",
			uv: "universal_variable.transaction.payment_type"
		}, {
			name: "Total Discount",
			description: "A number greater or equal to zero",
			token: "discount",
			uv: ""
		}, {
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		window.VDNA.queue.push({
			apiKey: "" + this.valueForToken("api_key"),
			method: "reportConversion",
			args: ["transaction", {
				"transaction_id": "" + this.valueForToken("order_id"),
				"value": this.valueForToken("subtotal"),
				"currency": "" + this.valueForToken("currency"),
				"payment_type": "" + this.valueForToken("payment"),
				"transaction_discount": this.valueForToken("discount")
			}]
		});

		for (var i = 0; i < this.valueForToken("names").length; i++) {
			window.VDNA.queue.push({
				apiKey: "" + this.valueForToken("api_key"),
				method: "reportConversion",
				args: ["purchased", {
					"product_id": this.valueForToken("ids")[i],
					"partner_user_id_type": this.valueForToken("ids")[i],
					"product_name": this.valueForToken("names")[i],
					"product_category_id": this.valueForToken("categories")[i],
					"product_price": this.valueForToken("prices")[i],
					"currency": "" + this.valueForToken("currency"),
					"product_quantity": this.valueForToken("quantities")[i],
					"transaction_id": "" + this.valueForToken("order_id"),
					"product_line_discount": this.valueForToken("discounts")[i]
				}]
			});
		}
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
