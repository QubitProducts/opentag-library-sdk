//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.ecommercetrackingcustomdomainsanddomainlinker.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "E-Commerce Tracking (Custom domains and Domain Linker)",
			async: true,
			description: "E-commerce tracking with custom domains and the domain linker (setAllowLinker: true) For the confirmation page.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "GA Profile ID",
				description: "Pleas enter you Google Analytics profile ID here. Example UA-123123-12",
				token: "PROFILE_ID",
				uv: ""
			}, {
				name: "Store Name",
				description: "Partner or store affiliation (may be left blank)",
				token: "storeName",
				uv: ""
			}, {
				name: "Order ID",
				description: "Internal unique order id number for this transaction",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "Total dollar amount of the transaction",
				token: "orderTotal",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order Tax Amount",
				description: "Tax amount of the transaction (Optional-can be given saved empty if not available)",
				token: "orderTax",
				uv: "universal_variable.transaction.tax"
			}, {
				name: "Order Shipping",
				description: "Shipping charge for the transaction (optional - save as empty if not needed)",
				token: "orderShipping",
				uv: "universal_variable.transaction.shipping_cost"
			}, {
				name: "Order Shipping City",
				description: "City to associate with transaction.",
				token: "orderShippingCity",
				uv: "universal_variable.transaction.delivery.city"
			}, {
				name: "Order Shipping State",
				description: "State to associate with transaction",
				token: "orderShippingState",
				uv: "universal_variable.transaction.delivery.state"
			}, {
				name: "Order Shipping Country",
				description: "Country to associate with transaction.",
				token: "orderShippingCountry",
				uv: "universal_variable.transaction.delivery.country"
			}, {
				name: "Item SKUs",
				description: "A list of product SKU's involved in the transaction",
				token: "itemSkus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Item Names",
				description: "A list of product names involved in the transaction",
				token: "itemNames",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Item Categories",
				description: "List of product categories (Optional - save empty value if not used)",
				token: "itemCategories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Item Unit Prices",
				description: "List of product prices involved in the transaction",
				token: "itemUnitPrices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Item Quantities",
				description: "List of product quantities involved in the transaction",
				token: "itemQuantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Domain",
				description: "Type the name of the domain you wish to track. For example www.example.com or subdomain.example.com",
				token: "domainName",
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
			window._gaq = window._gaq || [];
			_gaq.push(['_setAccount', '' + this.valueForToken("PROFILE_ID")]);
			_gaq.push(['_setDomainName', '' + this.valueForToken("domainName")]);
			_gaq.push(['_setAllowLinker', true]);
			_gaq.push(['_trackPageview']);

			_gaq.push(['_addTrans',
				'' + this.valueForToken("orderId"),
				'' + this.valueForToken("storeName"),
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
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
				'http://www') + '.google-analytics.com/ga.js';
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
