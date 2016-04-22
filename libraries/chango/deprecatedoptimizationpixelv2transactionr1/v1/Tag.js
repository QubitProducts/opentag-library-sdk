//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"chango.deprecatedoptimizationpixelv2transactionr1.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "[DEPRECATED] Optimization Pixel [v2] -  Transaction R1",
			async: true,
			description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Chango.png",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Page Type",
				description: "Page type. Category info about the page the pixel is on (e.g. Homepage, Product page, Cart page)",
				token: "PT_VALUE",
				uv: "universal_variable.page.type"
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
				name: "Transaction Product SKUs",
				description: "",
				token: "productSKU",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Transaction Product Names",
				description: "",
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
				var arr = [];
				for (var i = 0; i < _this.valueForToken("productNames").length; i++) {
					arr.push({
						na: _this.valueForToken("productNames")[i],
						sku: _this.valueForToken("productSKU")[i]
					});
				}
				return arr;
			})();
			window.__cho__ = {
				"data": {
					"pt": "" + _this.valueForToken("PT_VALUE") + "",
					"crt": cart,
					"na": "",
					"op": "",
					"sp": "",
					"sku": "",
					"pc": ""
				},
				"pid": "" + _this.valueForToken("ID") + "",
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
