//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("dcstorm.stormiqconfirmationpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "StormIQ Confirmation Page Tag",
		async: true,
		description: "To be placed on the confirmation page only",
		html: "",
		locationDetail: "",
		isPrivate: false,
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
			name: "Transaction Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Product IDs",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product SKUs",
			description: "",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Product Quantities",
			description: "",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Product Colours",
			description: "",
			token: "colors",
			uv: "universal_variable.transaction.line_items[#].product.color"
		}, {
			name: "Product Values",
			description: "",
			token: "vals",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Shipping Cost",
			description: "",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
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
		window.__stormJs = 't1.stormiq.com/dcv4/jslib/' + 
				this.valueForToken("storm_id") + '.js';
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

		saleTrack.addSaleItem({
			itemcount: 1,
			itemvalue: this.valueForToken("shipping"),
			m1: "Shipping cost"
		});

		saleTrack.curcode = '' + this.valueForToken("currency");
		saleTrack.orderid = "" + this.valueForToken("order_id");
		saleTrack.logSale(1);
		/*~post*/
	}
});
