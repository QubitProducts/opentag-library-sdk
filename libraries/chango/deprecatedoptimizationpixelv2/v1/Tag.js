//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.deprecatedoptimizationpixelv2.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "[DEPRECATED] Optimization Pixel  [v2]",
		async: true,
		description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "PT Value",
			description: "Page Type - If not available input a black hardcoded parameter",
			token: "PT_VALUE",
			uv: "universal_variable.page.type"
		}, {
			name: "Transaction Product SKUs",
			description: "If not available input a black hardcoded parameter",
			token: "productSKU",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "ID",
			description: "",
			token: "ID",
			uv: ""
		}, {
			name: "PUID",
			description: "",
			token: "PUID",
			uv: ""
		}, {
			name: "NA Value",
			description: "Product name - If not available input a black hardcoded parameter",
			token: "NA_VALUE",
			uv: "universal_variable.product.name"
		}, {
			name: "OP Value",
			description: "Original (non-sale) price - If not available input a black hardcoded parameter",
			token: "OP_VALUE",
			uv: "universal_variable.product.unit_price"
		}, {
			name: "SP Value",
			description: "Sale price - If not available input a black hardcoded parameter",
			token: "SP_VALUE",
			uv: "universal_variable.product.unit_sale_price"
		}, {
			name: "SKU Value",
			description: "Product SKU. A unique identifying number for a product",
			token: "SKU_VALUE",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "PC Value",
			description: "Product category -If not available input a black hardcoded parameter",
			token: "PC_VALUE",
			uv: "universal_variable.product.category"
		}, {
			name: "Transaction Product Names",
			description: "If not available input a black hardcoded parameter",
			token: "productNames",
			uv: "universal_variable.transaction.line_items[#].product.name"
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
		//compile cart data
		window.cart = (function() {
			if (window.universal_variable && window.universal_variable.line_items) {
				var arr = [];
				for (var i = 0; i < _this.valueForToken("productNames").length; i++) {
					arr.push({
						na: _this.valueForToken("productNames")[i],
						sku: _this.valueForToken("productSKU")[i]
					});
				}
				return arr;
			} else {
				return "";
			}
		})();

		window.__cho__ = {
			"data": {
				"pt": "" + this.valueForToken("PT_VALUE"),
				"crt": cart,
				"na": "" + this.valueForToken("NA_VALUE"),
				"op": "" + this.valueForToken("OP_VALUE"),
				"sp": "" + this.valueForToken("SP_VALUE"),
				"sku": "" + this.valueForToken("SKU_VALUE"),
				"pc": "" + this.valueForToken("PC_VALUE")
			},
			"pid": this.valueForToken("ID"),
			"puid2": "" + this.valueForToken("PUID")
		};

		var c = document.createElement('script');
		c.type = 'text/javascript';
		c.async = true;
		c.src = document.location.protocol + '//cc.chango.com/static/o.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(c, s);
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
