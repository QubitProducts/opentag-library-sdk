//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"merchantadvantage.chanalyticsconfirmationpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Chanalytics - Confirmation Page",
			async: true,
			description: "The confirmation page tag creates image pixels for each unique type of product in the order, then makes a call to MerchantAdvantage to track the full order details.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "https://secure.merchantadvantage.com/inChannel/ma2q.js",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "MerchantAdvantage ID",
				description: "Your Unique MerchantAdvantage identifier.  It is usually 8 characters",
				token: "merchant_id",
				uv: ""
			}, {
				name: "MerchantAdvantage Storefront ID",
				description: "Your Storefront ID number",
				token: "store_id",
				uv: ""
			}, {
				name: "Product ID List",
				description: "An array of product IDs in this order.",
				token: "prod_ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product Quantity List",
				description: "An array of quantities associated with each corresponding product ID",
				token: "prod_qtys",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Order ID",
				description: "The order's unique identifier",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "The total value of this order",
				token: "order_tot",
				uv: "universal_variable.transaction.subtotal"
			}],
		categories:[
			,"Web Analytics"
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
			function createAppendPixel(src) {
				var pixel = document.createElement('img');
				pixel.src = src;
				pixel.width = 0;
				pixel.height = 0;
				pixel.border = 0;
				document.body.insertBefore(pixel, document.body.lastChild);
			}

			for (var i = 0; i < this.valueForToken("prod_ids").length; i++) {
				createAppendPixel(
					"zmam=" + this.valueForToken("merchant_id") +
					"&zmas=" + this.valueForToken("store_id") +
					"&zmaq=N&quantity=" + this.valueForToken("prod_qtys")[i] +
					"&pcode=" + this.valueForToken("prod_ids")[i] +
					"&zman=" + this.valueForToken("order_id") +
					"&zmat=" + this.valueForToken("order_tot"));
			}
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
