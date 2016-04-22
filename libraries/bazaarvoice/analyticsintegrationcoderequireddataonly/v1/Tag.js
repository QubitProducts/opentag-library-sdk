//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"bazaarvoice.analyticsintegrationcoderequireddataonly.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Analytics Integration Code (Required Data Only)",
			async: true,
			description: "Uses required data only. Add JavaScript code to your transaction and conversion pages to send information to Bazaaarvoice analytics.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "${client_code}.ugc.bazaarvoice.com/static/${display_code}/bvapi.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Client Code",
				description: "represents your client code",
				token: "client_code",
				uv: ""
			}, {
				name: "Display Code",
				description: "represents your display code",
				token: "display_code",
				uv: ""
			}, {
				name: "Order ID",
				description: "",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "",
				token: "total",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Currency",
				description: "",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Product ID List",
				description: "",
				token: "productIds",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product SKU List",
				description: "",
				token: "productSkus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Quantity List",
				description: "",
				token: "quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}],
		categories:[
			"Ratings & Review Engine"
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
			var data = {
				"orderId": "" + this.valueForToken("orderId"),
				"total": "" + this.valueForToken("total"),
				"currency": "" + this.valueForToken("currency"),
				"items": []
			};
			var productIds = this.valueForToken("productIds");
			var productSkus = this.valueForToken("productSkus");
			var quantities = this.valueForToken("quantities");
			
			for (var i = 0; i < productIds.length; i++) {
				data.items.push({
					"sku": productSkus[i],
					"quantity": quantities[i]
				});
			}
			window.$BV.SI.trackTransactionPageView(data);
			/*~post*/
		}
	});
