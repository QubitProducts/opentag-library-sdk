//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"marinsoftware.zzconversioncapturecodedeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "zz-Conversion Capture Code [DEPRECATED]",
			async: true,
			description: "The Javascript will take the values specified below in the array of conversion metrics and send them to Marin along with the Cookie ID (UUID) created by the Click JavaScript; this allows Marin to join Clicks and Conversion data together.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Marin Conversion Type",
				description: "",
				token: "conversion_type",
				uv: ""
			}, {
				name: "Product ID List",
				description: "",
				token: "ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product SKU List",
				description: "",
				token: "skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Unit Sale Price List",
				description: "",
				token: "prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Product Category List",
				description: "",
				token: "categories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Product Quantity List",
				description: "",
				token: "quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "",
				token: "total",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order Tax",
				description: "",
				token: "tax",
				uv: "universal_variable.transaction.tax"
			}, {
				name: "Order Shipping Cost",
				description: "",
				token: "shipping",
				uv: "universal_variable.transaction.shipping_cost"
			}, {
				name: "Order Shipping City",
				description: "",
				token: "city",
				uv: "universal_variable.transaction.delivery.city"
			}, {
				name: "Order Shipping State",
				description: "",
				token: "state",
				uv: "universal_variable.transaction.delivery.state"
			}, {
				name: "Order Shipping Country",
				description: "",
				token: "country",
				uv: "universal_variable.transaction.delivery.country"
			}, {
				name: "Currency",
				description: "",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Marin Tracking Id",
				description: "Your unique tracking id",
				token: "tracking_id",
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
			for (var i = 0; i < this.valueForToken("ids").length; i++) {
				items.push({
					orderId: this.valueForToken("ids")[i],
					convType: "" + this.valueForToken("conversion_type"),
					product: this.valueForToken("skus")[i],
					price: this.valueForToken("prices")[i],
					category: this.valueForToken("categories")[i],
					quantity: this.valueForToken("quantities")[i]
				});
			}

			window._mTrack.push(['addTrans', {
				orderId: "" + this.valueForToken("order_id"),
				total: this.valueForToken("total"),
				tax: this.valueForToken("tax"),
				shipping: this.valueForToken("shipping"),
				city: "" + this.valueForToken("city"),
				state: "" + this.valueForToken("state"),
				country: "" + this.valueForToken("country"),
				currency: "" + this.valueForToken("currency"),
				items: items
			}]);

			window._mTrack.push(['processOrders']);
			var mClientId = "" + this.valueForToken("tracking_id");
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
