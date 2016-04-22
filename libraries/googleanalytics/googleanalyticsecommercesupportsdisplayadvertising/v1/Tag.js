//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticsecommercesupportsdisplayadvertising.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Analytics Ecommerce - supports display advertising",
			async: true,
			description: "The standard ecommerce tag, but pointing to the Doubleclick servers to support display advertising.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "GA Profile Id",
				description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
				token: "PROFILE_ID",
				uv: ""
			}, {
				name: "Order Id",
				description: "Internal unique order id number for this transaction.",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "Total amount of the transaction.",
				token: "orderTotal",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order Tax Amount",
				description: "Tax amount of the transaction (Optional - can be given a blank value if not available)",
				token: "orderTax",
				uv: "universal_variable.transaction.tax"
			}, {
				name: "Order Shipping",
				description: "Shipping charge for the transaction (Optional)",
				token: "orderShipping",
				uv: "universal_variable.transaction.shipping_cost"
			}, {
				name: "Order Shipping City",
				description: "City to associate with transaction.",
				token: "orderShippingCity",
				uv: "universal_variable.transaction.delivery.city"
			}, {
				name: "Order Shipping State",
				description: "State to associate with transaction.",
				token: "orderShippingState",
				uv: "universal_variable.transaction.delivery.state"
			}, {
				name: "Order Shipping Country",
				description: "Country to associate with transaction.",
				token: "orderShippingCountry",
				uv: "universal_variable.transaction.delivery.country"
			}, {
				name: "Item SKUs",
				description: "Items' SKU codes.",
				token: "itemSkus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Item Names",
				description: "Product name. Required to see data in the product detail report.",
				token: "itemNames",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Item Categories",
				description: "Product category (Optional)",
				token: "itemCategories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Item Unit Prices",
				description: "Product price - use the discounted rate that the user is actually buying at.",
				token: "itemUnitPrices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Item Quantities",
				description: "Purchase quantity",
				token: "itemQuantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}],
		categories:[
			"Web Analytics"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window._gaq = window._gaq || [];
			_gaq.push(['_setAccount', '' + this.valueForToken("PROFILE_ID")]);
			_gaq.push(['_trackPageview']);

			_gaq.push(['_addTrans',
				'' + this.valueForToken("orderId"),
				'',
				'' + this.valueForToken("orderTotal"),
				'' + this.valueForToken("orderTax"),
				'' + this.valueForToken("orderShipping"),
				'' + this.valueForToken("orderShippingCity"),
				'' + this.valueForToken("orderShippingState"),
				'' + this.valueForToken("orderShippingCountry")
			]);
			var i, ii;
			for (i = 0, ii = this.valueForToken("itemSkus").length; i < ii; i += 1) {
				_gaq.push(['_addItem',
					'' + this.valueForToken("orderId"),
					this.valueForToken("itemSkus")[i],
					this.valueForToken("itemNames")[i],
					this.valueForToken("itemCategories")[i],
					this.valueForToken("itemUnitPrices")[i],
					this.valueForToken("itemQuantities")[i]
				]);
			}
			_gaq.push(['_trackTrans']);

			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
				'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
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
