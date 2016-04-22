//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.deprecatedconversionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "[DEPRECATED] Conversion Pixel",
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
			description: "This is a value provided by Chango when they generate the conversion tag for you",
			token: "cid",
			uv: ""
		}, {
			name: "Order ID",
			description: "The unique Order ID for this transaction",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Value",
			description: "The total value of the order",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Product Quantities",
			description: "An array of quantities associated with each unique product in the order",
			token: "qtys",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/

		var __chconv__ = {
			"order_id": "" + this.valueForToken("order_id"),
			"cost": "" + this.valueForToken("total"),
			"conversion_id": this.valueForToken("cid"),
			"quantity": "" + getQty()
		};
		window.__chconv__ = __chconv__;
		var _this = this;
		
		function getQty() {
			var tmp = 0;
			for (var i = 0; i < _this.valueForToken("qtys").length; i++) {
				tmp += _this.valueForToken("qtys")[i];
			}
			return tmp;
		}
		
		if (typeof(__chconv__) == "undefined") return;
		
		var e = encodeURIComponent;
		var p = [];
		for (var i in __chconv__) {
			p.push(e(i) + "=" + e(__chconv__[i]));
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
