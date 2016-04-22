//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.ecommercetrackingrequiredfieldsonlydeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "E-Commerce Tracking (Required Fields Only) DEPRECATED",
			async: true,
			description: "Before Google Analytics can report ecommerce activity for your website, you must enable ecommerce tracking on the profile settings page for your website.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Profile ID",
				description: "",
				token: "PROFILE_ID",
				uv: ""
			}, {
				name: "Order ID",
				description: "",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "",
				token: "orderTotal",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Product SKU List",
				description: "",
				token: "itemSkus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Unit Price List",
				description: "",
				token: "itemUnitPrices",
				uv: "universal_variable.transaction.line_items[#].product.unit_price"
			}, {
				name: "Product Quantity List",
				description: "",
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
				'',
				'',
				'',
				'',
				''
			]);
			var i, ii;
			for (i = 0, ii = this.valueForToken("itemSkus").length; i < ii; i += 1) {
				_gaq.push(['_addItem',
					'' + this.valueForToken("orderId"),
					this.valueForToken("itemSkus")[i],
					'N/A',
					'',
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
