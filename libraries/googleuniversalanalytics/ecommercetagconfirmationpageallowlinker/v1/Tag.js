//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleuniversalanalytics.ecommercetagconfirmationpageallowlinker.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Ecommerce Tag - Confirmation Page - Allow Linker",
			async: true,
			description: "Ecommerce tracking allows you to measure the number of transactions and revenue that your website generates. Place this tag on a confirmation page only.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Web Property ID",
				description: "Google Analytics Web Property ID for the Google Web Property you wish to track",
				token: "web_property_id",
				uv: ""
			}, {
				name: "Order ID",
				description: "The order ID associated with this transaction",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Store Name",
				description: "The store or affiliation from which this transaction occurred - or just a custom string",
				token: "store_name",
				uv: ""
			}, {
				name: "Revenue",
				description: "Specifies the total revenue associated with the transaction. Should include shipping and tax",
				token: "revenue",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Shipping Cost",
				description: "The value of the shipping charge associated with this order",
				token: "shipping",
				uv: "universal_variable.transaction.shipping_cost"
			}, {
				name: "Tax Value",
				description: "The amount of tax charged on this order",
				token: "tax",
				uv: "universal_variable.transaction.tax"
			}, {
				name: "Currency",
				description: "The currency which this transaction was paid in",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Item Name List",
				description: "An array of names associated with each product in this order",
				token: "item_names",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Item SKU List",
				description: "An array containing SKUs associated with each product in this order",
				token: "item_skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Item Category List",
				description: "An array containing the categories associated with each product in this order",
				token: "item_cats",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Item Price List",
				description: "An array containing unit prices paid for each product in this order",
				token: "item_prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Item Quantities List",
				description: "An array containing quantities associated with each product in this order",
				token: "item_quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Site URL",
				description: "Web site URL, without the 'www.'",
				token: "url",
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
			var _this = this;
			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '//www.google-analytics.com/analytics.js',
				'ga');

			ga('create',
				"" + _this.valueForToken("web_property_id"),
				"" + _this.valueForToken("url"),
				{ 'allowLinker': true });

			ga('require', 'displayfeatures');
			ga('send', 'pageview');
			ga('require', 'ecommerce', 'ecommerce.js');

			ga('ecommerce:addTransaction', {
				'id': "" + _this.valueForToken("order_id"), //Required
				'affiliation': "" + _this.valueForToken("store_name"),
				'revenue': "" + _this.valueForToken("revenue"),
				'shipping': "" + _this.valueForToken("shipping"),
				'tax': "" + _this.valueForToken("tax"),
				'currencyCode': "" + _this.valueForToken("currency")
			});

			//Loop through transaction items. Don't pollute the globe!
			for (var i = 0; i < _this.valueForToken("item_names").length; i++) {
				ga('ecommerce:addItem', {
					'id': "" + _this.valueForToken("order_id"), //Required
					'name': String(_this.valueForToken("item_names")[i]), //Required
					'sku': String(_this.valueForToken("item_skus")[i]),
					'category': String(_this.valueForToken("item_cats")[i]),
					'price': String(_this.valueForToken("item_prices")[i]),
					'quantity': String(_this.valueForToken("item_quantities")[i])
				});
			}

			ga('ecommerce:send');

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
