//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"chango.deprecatedoptimizationpixelv2productpager2.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "[DEPRECATED] Optimization Pixel  [v2] - Product Page R2",
			async: true,
			description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
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
				name: "PT Value",
				description: "Page Type",
				token: "PT_VALUE",
				uv: "universal_variable.page.type"
			}, {
				name: "NA Value",
				description: "Product name",
				token: "NA_VALUE",
				uv: "universal_variable.product.name"
			}, {
				name: "OP Value",
				description: "Original (non-sale) price",
				token: "OP_VALUE",
				uv: "universal_variable.product.unit_price"
			}, {
				name: "SP Value",
				description: "Sale price",
				token: "SP_VALUE",
				uv: "universal_variable.product.unit_sale_price"
			}, {
				name: "SKU Value",
				description: "Product SKU. A unique identifying number for a product",
				token: "SKU_VALUE",
				uv: "universal_variable.product.sku_code"
			}, {
				name: "PC Value",
				description: "Product category",
				token: "PC_VALUE",
				uv: "universal_variable.product.category"
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
			window.__cho__ = {
				"data": {
					"pt": "" + _this.valueForToken("PT_VALUE"),
					"crt": "",
					"na": "" + _this.valueForToken("NA_VALUE"),
					"op": "" + _this.valueForToken("OP_VALUE"),
					"sp": "" + _this.valueForToken("SP_VALUE"),
					"sku": "" + _this.valueForToken("SKU_VALUE"),
					"pc": "" + _this.valueForToken("PC_VALUE")
				},
				"pid": _this.valueForToken("ID"),
				"puid2": "" + _this.valueForToken("PUID") + ""
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
