//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.deprecatedconversionpixelv2.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "[DEPRECATED] Conversion Pixel [v2]",
		async: true,
		description: "The conversion pixel passes back information about the order placed and should be placed only on the confirmation page.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Conversion ID",
			description: "",
			token: "ID",
			uv: ""
		}, {
			name: "Quantity",
			description: "",
			token: "QUANTITY",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order ID",
			description: "",
			token: "ORDER_ID",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Cost",
			description: "",
			token: "COST",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Customer ID",
			description: "",
			token: "CUSTOMER_ID",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Sku List",
			description: "",
			token: "SKUs",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Page Type",
			description: "",
			token: "PAGE_TYPE",
			uv: "universal_variable.page.type"
		}, {
			name: "Payment Type",
			description: "",
			token: "PAYMENT_TYPE",
			uv: "universal_variable.transaction.payment_type"
		}, {
			name: "Conversion Type",
			description: "",
			token: "CONVERSION_TYPE",
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
		var _this = this;
		var totalQuantity = (function() {
			var total = 0;
			for (var i = 0; i < _this.valueForToken("QUANTITY").length; i++) {
				total += _this.valueForToken("QUANTITY")[i];
			}
			return total;
		})();
		window.totalQuantity = totalQuantity;
		var skuList = (function() {
			var str = "";
			for (var i = 0; i < _this.valueForToken("SKUs").length; i++) {
				str += _this.valueForToken("SKUs")[i];
				if ((i + 1) < _this.valueForToken("SKUs").length) {
					str += ","
				}
			}
			return str;
		})();
		
		window.skuList = skuList;
		
		window.__chconv__ = {
			"conversion_id": this.valueForToken("ID"),
			"quantity": totalQuantity,
			"order_id": "" + this.valueForToken("ORDER_ID"),
			"cost": "" + this.valueForToken("COST"),
			"u1": "" + this.valueForToken("CUSTOMER_ID"),
			"u2": skuList,
			"u3": "" + this.valueForToken("PAGE_TYPE"),
			"u4": "" + this.valueForToken("PAYMENT_TYPE"),
			"u5": "" + this.valueForToken("CONVERSION_TYPE")
		};
		
		if (typeof(__chconv__) == "undefined") return;
		var e = encodeURIComponent;
		var p = [];
		for (var i in __chconv__) {
			p.push(e(i) + "=" + e(__chconv__[i]))
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
