//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.conversion.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Conversion ID",
			description: "Leave blank if not available",
			token: "conversion_id",
			uv: ""
		}, {
			name: "Quantity",
			description: "null if not available",
			token: "quant",
			uv: ""
		}, {
			name: "Order ID",
			description: "Leave blank if not available",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Value",
			description: "null if not available",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Customer ID",
			description: "Leave blank if not available",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Array of product SKU codes",
			description: "empty array if not available",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Page Type",
			description: "Page Type",
			token: "page",
			uv: "universal_variable.page.category"
		}, {
			name: "Payment Type",
			description: "Leave blank if not available",
			token: "payment",
			uv: "universal_variable.transaction.payment_type"
		}, {
			name: "Conversion Type",
			description: "Conversion Type",
			token: "conversion_type",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var skus = [];
		if (this.valueForToken("skus").length) {
			for (var i = 0; i < this.valueForToken("skus").length; i++) {
				"" + skus.push(this.valueForToken("skus")[i]);
			}
		} else {
			skus = "";
		}

		var __chconv__ = {
			"conversion_id": "" + this.valueForToken("conversion_id"),
			"quantity": this.valueForToken("quant"),
			"order_id": "" + this.valueForToken("order_id"),
			"cost": this.valueForToken("subtotal"),
			"u1": "" + this.valueForToken("customer_id"),
			"u2": skus,
			"u3": "" + this.valueForToken("page"),
			"u4": "" + this.valueForToken("payment"),
			"u5": "" + this.valueForToken("conversion_type")
		};

		var p = [];
		for (var i in __chconv__) {
			p.push(encodeURIComponent(i) + "=" + encodeURIComponent(__chconv__[i]))
		}
		(new Image()).src = document.location.protocol + '//as.chango.com/conv/i;' +
			(new Date()).getTime() + '?' + p.join("&");
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
