//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"marinsoftware.zzconversiontrackingtagdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "zz-Conversion Tracking Tag [DEPRECATED]",
			async: true,
			description: "The Marin Conversion Tracking tag helps Marin advertisers measure their return on investment for media managed in the Marin Enterprise platform",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Additional Product Values excl. SKU code",
				description: "\"no\" if none - else, an array of strings of \"^\" separated extra product values for every item",
				token: "extra_product_values",
				uv: ""
			}, {
				name: "Additional Category Values excl. Category name",
				description: "\"no\" if none - else, an array of strings of \"^\" separated extra category values for every item",
				token: "extra_category_values",
				uv: ""
			}, {
				name: "Array of Product IDs",
				description: "",
				token: "product_ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Array of Product Sale Prices",
				description: "",
				token: "prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Array of Product Categories",
				description: "",
				token: "categories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Array or Product Quantities",
				description: "",
				token: "quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Marin Tracking ID",
				description: "Client Specific Marin Tracking ID",
				token: "marin_tracking_id",
				uv: ""
			}, {
				name: "Currency",
				description: "",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Conversion Type",
				description: "use \"orders\" for standard item purchase",
				token: "conv_type",
				uv: ""
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Anonymize IP",
				description: "\"yes\" if you want to hide user's IP - else \"no\"",
				token: "anonymizeIP",
				uv: ""
			}, {
				name: "Array of Product SKU codes",
				description: "",
				token: "skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
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

			var extraProductValues = "";
			var extraProductValuesElement = "";

			if (Object.prototype.toString.call(this.valueForToken(
				"extra_product_values")) === "[object Array]") {
				extraProductValues = this.valueForToken("extra_product_values");
			}

			var extraCategoryValues = "";
			var extraCategoryValuesElement = "";

			if (Object.prototype.toString.call(this.valueForToken(
				"extra_category_values")) === "[object Array]") {
				extraCategoryValues = this.valueForToken("extra_category_values");
			}

			for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
				if (typeof extraProductValues !== "string") {
					extraProductValuesElement = extraProductValues[i];
				}

				if (typeof extraCategoryValues !== "string") {
					extraCategoryValuesElement = extraCategoryValues[i];
				}

				items.push({
					orderId: "" + this.valueForToken("order_id"),
					convType: "" + this.valueForToken("conv_type"),
					product: this.valueForToken("skus")[i] + extraProductValuesElement,
					prices: this.valueForToken("prices")[i],
					category: this.valueForToken("categories")[i] +
						extraCategoryValuesElement,
					quantities: this.valueForToken("quantities")[i]
				});
			}

			window._mTrack.push(['addTrans', {
				currency: "" + this.valueForToken("currency"),
				items: items
			}]);

			if (/^\s*yes\s*$/i.test("" + this.valueForToken("anonymizeIP"))) {
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
