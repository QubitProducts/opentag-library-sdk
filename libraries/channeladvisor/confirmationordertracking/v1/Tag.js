//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"channeladvisor.confirmationordertracking.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Confirmation - Order Tracking",
			async: true,
			description: "The Order Tracking pixels captures order and conversion information which is used to measure the effectiveness of each campaign.  The code has several parameters ( order value, order ID, Product ID ) that will need to be integrated and customized for the particular store or shopping cart.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "t.channeladvisor.com/v2/${ca_id}.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Order Id",
				description: "The unique identifier corresponding to the transaction",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Subtotal",
				description: "The total monetary value for the order excluding shipping",
				token: "order_subtotal",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Order Currency",
				description: "The currency code used for the transaction",
				token: "order_currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Order SKU List",
				description: "The list of SKUs for items purchased in the transaction",
				token: "sku_list",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Order Quantity List",
				description: "The list of quantities for items purchased in the transaction",
				token: "qty_list",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Order Product Price List",
				description: "The list of sale prices for items in the transaction",
				token: "product_subtotals",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Channel Advisor Client ID",
				description: "The identifier that relates Channel Advisor to you",
				token: "ca_id",
				uv: ""
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
			/*~pre*/
		},
		post: function() {
			/*post*/
			window._caq = window._caq || [];
			var products = [];

			for (var i = 0; i < this.valueForToken("sku_list").length; i++) {
				products.push({
					ProductID: this.valueForToken("sku_list")[i],
					UnitPrice: this.valueForToken("product_subtotals")[i],
					Quantity: this.valueForToken("qty_list")[i]
				});
			}

			_caq.push(["Order", {
				OrderId: "" + this.valueForToken("order_id"),
				oVal: "" + this.valueForToken("order_subtotal"),
				CurrencyCode: "" + this.valueForToken("order_currency"),
				Products: products
			}]);
			/*~post*/
		}
	});
