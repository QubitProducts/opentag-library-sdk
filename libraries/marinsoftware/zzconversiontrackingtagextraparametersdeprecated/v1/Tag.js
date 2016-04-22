//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"marinsoftware.zzconversiontrackingtagextraparametersdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "zz-Conversion Tracking Tag - Extra Parameters [DEPRECATED]",
			async: true,
			description: "The Javascript will take the values specified below in the array of conversion metrics and send them to Marin along with the Cookie ID (UUID) created by the Click JavaScript; this allows Marin to join Clicks and Conversion data together. This version has the most customisation for parameters.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Conversion Type",
				description: "",
				token: "conversion_type",
				uv: ""
			}, {
				name: "Product SKUs",
				description: "",
				token: "product_skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Prices",
				description: "",
				token: "product_prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Product Categories",
				description: "",
				token: "product_categories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Product Quantities",
				description: "",
				token: "product_quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Transaction Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Transaction Order Total",
				description: "",
				token: "order_total",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Transaction Order Tax",
				description: "",
				token: "order_tax",
				uv: "universal_variable.transaction.tax"
			}, {
				name: "Transaction Shipping",
				description: "",
				token: "order_shipping",
				uv: "universal_variable.transaction.shipping_cost"
			}, {
				name: "Transaction Order Currency",
				description: "",
				token: "order_currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "City",
				description: "",
				token: "city",
				uv: "universal_variable.transaction.delivery.city"
			}, {
				name: "State",
				description: "",
				token: "state",
				uv: "universal_variable.transaction.delivery.state"
			}, {
				name: "Country",
				description: "",
				token: "country",
				uv: "universal_variable.transaction.delivery.country"
			}, {
				name: "Marin Tracker ID",
				description: "",
				token: "marin_tracker_id",
				uv: ""
			}, {
				name: "Affiliation",
				description: "",
				token: "affiliation",
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
			for (var i = 0; i < this.valueForToken("product_skus").length; i++) {
				items.push({
					convType: '' + this.valueForToken("conversion_type"),
					product: this.valueForToken("product_skus")[i],
					price: this.valueForToken("product_prices")[i],
					category: this.valueForToken("product_categories")[i],
					quantity: this.valueForToken("product_quantities")[i]
				});
			}
			_mTrack.push(['addTrans', {
				orderId: '' + this.valueForToken("order_id"),
				affiliation: '' + this.valueForToken("affiliation"),
				total: this.valueForToken("order_total"),
				tax: this.valueForToken("order_tax"),
				shipping: this.valueForToken("order_shipping"),
				city: '' + this.valueForToken("city"),
				state: '' + this.valueForToken("state"),
				country: '' + this.valueForToken("country"),
				currency: '' + this.valueForToken("order_currency"),
				items: items
			}]);

			_mTrack.push(['processOrders']);

			var mClientId = '' + this.valueForToken("marin_tracker_id");
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
