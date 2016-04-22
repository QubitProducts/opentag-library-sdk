//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"marinsoftware.zzproductlevelconversiondeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "zz-Product Level Conversion [DEPRECATED]",
			async: true,
			description: "The Marin Conversion Tracking tag helps Marin advertisers measure their return on investment for media managed in the Marin Enterprise platform",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Conversion Type",
				description: "use \"orders\" for standard item purchase",
				token: "conv_type",
				uv: ""
			}, {
				name: "Array of Product SKUs",
				description: "An array of strings of multiple \"^\" separated product values for each item may also be used instead",
				token: "skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Array of Product Sale Prices",
				description: "",
				token: "prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Array of Product Categories",
				description: "An array of strings of multiple \"^\" separated category values for each item may also be used instead",
				token: "categories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Array of Product Quantities",
				description: "",
				token: "quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Currency",
				description: "",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Anonymize User IP",
				description: "\"yes\" or \"no\"",
				token: "anonymize_ip",
				uv: ""
			}, {
				name: "Marin Tracking ID",
				description: "",
				token: "marin_tracking_id",
				uv: ""
			}],
		categories:[
			"Search Engine"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window._mTrack = window._mTrack || [];

			var items = [];

			for (var i = 0; i < this.valueForToken("skus").length; i++) {
				items.push({
					orderId: "" + this.valueForToken("order_id"),
					convType: "" + this.valueForToken("conv_type"),
					product: this.valueForToken("skus")[i],
					prices: this.valueForToken("prices")[i],
					category: this.valueForToken("categories")[i],
					quantities: this.valueForToken("quantities")[i]
				});
			}

			window._mTrack.push(['addTrans', {
				currency: "" + this.valueForToken("currency"),
				items: items
			}]);

			if (/^\s*yes\s*$/i.test("" + this.valueForToken("anonymize_ip"))) {
				window._mTrack.push(['activateAnonymizeIp']);
			}

			window._mTrack.push(['processOrders']);

			var mClientId = "" + this.valueForToken("marin_tracking_id");
			var mProto = ('https:' == document.location.protocol ? 'https://' :
				'http://');
			var mHost = 'tracker.marinsm.com';
			var mt = document.createElement('script');
			mt.type = 'text/javascript';
			mt.async = true;
			mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
			var fscr = document.getElementsByTagName('script')[0];
			fscr.parentNode.insertBefore(mt, fscr);
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
