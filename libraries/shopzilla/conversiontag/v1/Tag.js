//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("shopzilla.conversiontag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Tag",
		async: true,
		description: "Place only on the confirmation page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order Quantity List",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "User Returning",
			description: "",
			token: "returning",
			uv: "universal_variable.user.returning"
		}, {
			name: "Shopzilla Merchant ID",
			description: "",
			token: "merch_id",
			uv: ""
		}],
		categories:[
			"Feed Management (Shopping Comparison)"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var i = 0,
			ii = this.valueForToken("quantities").length,
			totalQuantity = 0,
			customerType = (this.valueForToken("returning")) ? 0 : 1;
		for (; i < ii; i++) {
			totalQuantity += parseInt(this.valueForToken("quantities")[i]);
		}

		window.mid = '' + this.valueForToken("merch_id");
		window.cust_type = customerType;
		window.order_value = '' + this.valueForToken("order_total");
		window.order_id = '' + this.valueForToken("order_id");
		window.units_ordered = totalQuantity;

		var script = document.createElement("script");
		script.src = "https://www.shopzilla.com/css/roi_tracker.js";
		document.getElementsByTagName('head')[0].appendChild(script);
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
