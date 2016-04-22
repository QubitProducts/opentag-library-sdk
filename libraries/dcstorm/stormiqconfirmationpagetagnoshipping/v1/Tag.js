//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"dcstorm.stormiqconfirmationpagetagnoshipping.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "StormIQ Confirmation Page Tag - NO SHIPPING",
			async: true,
			description: "To be placed on the confirmation page only",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "StormIQ ID",
				description: "",
				token: "storm_id",
				uv: ""
			}, {
				name: "StormIQ Channel",
				description: "If not specified, leave blank",
				token: "channel",
				uv: ""
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Product ID's",
				description: "",
				token: "ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product SKU's",
				description: "",
				token: "skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Quantities",
				description: "",
				token: "quants",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Product Colors",
				description: "",
				token: "colors",
				uv: "universal_variable.transaction.line_items[#].product.color"
			}, {
				name: "Product Values",
				description: "",
				token: "vals",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}],
		categories:[
			"Web Analytics"
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
			window.__stormJs = 't1.stormiq.com/dcv4/jslib/' + this.valueForToken(
				"storm_id") + '.js';
			window.__ch = '' + this.valueForToken("channel");
			/*~pre*/
		},
		post: function() {
			/*post*/
			var i = 0,
				ii = this.valueForToken("ids").length;

			for (; i < ii; i++) {
				saleTrack.addSaleItem({
					itemcount: this.valueForToken("quants")[i],
					itemvalue: this.valueForToken("vals")[i],
					m1: this.valueForToken("ids")[i],
					m2: this.valueForToken("skus")[i],
					m3: this.valueForToken("colors")[i]
				});
			}

			saleTrack.orderid = "" + this.valueForToken("order_id");
			saleTrack.logSale(1);
			/*~post*/
		}
	});
