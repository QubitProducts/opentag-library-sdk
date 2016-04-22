//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("steelhouse.trackingpixelproductpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Tracking Pixel - Product Page",
		async: true,
		description: "The generic Steelhouse tracking pixel for product pages only.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "SteelHouse Advertiser ID",
			description: "The ID assigned to you by SteelHouse",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Product Name",
			description: "The name of the product the customer is currently viewing",
			token: "product_name",
			uv: "universal_variable.product.name"
		}, {
			name: "Product Category",
			description: "The category which the current product belongs to",
			token: "product_category",
			uv: "universal_variable.product.category"
		}, {
			name: "Product Brand",
			description: "The name of the manufacturer of the current product",
			token: "product_brand",
			uv: "universal_variable.product.manufacturer"
		}, {
			name: "Product Price",
			description: "The price of the current product",
			token: "product_price",
			uv: "universal_variable.product.unit_price"
		}, {
			name: "Currency",
			description: "The currency that the price is displayed in",
			token: "product_price_currency",
			uv: "universal_variable.product.currency"
		}, {
			name: "Product Image",
			description: "A URL pointing to an image of the product",
			token: "product_image_url",
			uv: "universal_variable.product.image_url"
		}, {
			name: "Product SKU",
			description: "The SKU code for the product",
			token: "product_sku",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "Inventory Count",
			description: "The number of this product available for sale",
			token: "product_inventory_count",
			uv: "universal_variable.product.stock"
		}, {
			name: "End Date",
			description: "The end date for this price. Send an empty hard-coded variable to leave blank.",
			token: "product_availability_ends",
			uv: ""
		}, {
			name: "Basket Subtotal",
			description: "The value of all items currently in the user's basket. Use a custom variable if UV is not present",
			token: "basket_subtotal",
			uv: "universal_variable.basket.subtotal"
		}, {
			name: "Basket Item Quantities",
			description: "List of quantities for each product in the user's cart. Use a custom variable if UV is not present",
			token: "basket_item_quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Additional Info",
			description: "Any additional info to be passed along. Send an empty hard-coded variable to leave blank.",
			token: "additional_info",
			uv: ""
		}, {
			name: "Basket SKU List",
			description: "List of SKUs correlating to every product in the basket. Use a custom variable if UV is not present",
			token: "basket_skus_list",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
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

		function shaddslashes(e) {
			"use strict";
			if (e != undefined) {
				e = e.replace(/%/g, "%25%32%35");
				e = e.replace(/\\/g, "%5C");
				e = e.replace(/\'/g, "%27");
				e = e.replace(/\"/g, "%22");
				e = e.replace(/\?/g, "%25%33%46");
				e = e.replace(/&/g, "%25%32%36");
				e = e.replace(/\+/g, "%25%32%42")
			}
			return e
		}
		(function() {
			"use strict";
			var e = null,
				t = "3.4.0",

				//Define the basket item count given a UV list of basket item quantities.
				basket_item_count = (function() {
					var temp = 0;
					for (var index = 0; index < _this.valueForToken(
							"basket_item_quantities")
						.length; index++) {
						temp += Number(_this.valueForToken("basket_item_quantities")[index]);
					}
					return temp;
				}()),

				//Create CSVs from UV lists. Will work for arrays supplied by clients
				basket_skus = (function() {
					var temp_skus = "";
					for (var sku_index = 0; sku_index < _this.valueForToken(
						"basket_skus_list").length; sku_index++) {
						temp_skus += _this.valueForToken("basket_skus_list")[sku_index];
						if (sku_index != _this.valueForToken("basket_skus_list").length - 1)
							temp_skus += ",";
					}
					return temp_skus;
				})(),
				basket_quantities = (function() {
					var temp_quants = "";
					for (var quant_index = 0; quant_index < _this.valueForToken(
						"basket_item_quantities").length; quant_index++) {
						temp_quants += _this.valueForToken("basket_item_quantities")[
							quant_index];
						if (quant_index != _this.valueForToken("basket_item_quantities").length -
							1) temp_quants += ",";
					}
					return temp_quants;
				})(),

				n = "" + _this.valueForToken("merchant_id"),
				r = shaddslashes("" + _this.valueForToken("product_name")),
				i = shaddslashes("" + _this.valueForToken("product_category")),
				s = shaddslashes("" + _this.valueForToken("product_brand")),
				o = "" + _this.valueForToken("product_price"),
				u = "" + _this.valueForToken("product_price_currency"),
				a = "" + _this.valueForToken("product_image_url"),
				f = "" + _this.valueForToken("product_sku"),
				l = "" + _this.valueForToken("product_inventory_count"),
				c = "" + _this.valueForToken("product_availability_ends"),
				h = "" + _this.valueForToken("basket_subtotal"),
				p = basket_item_count,
				d = basket_skus,
				v = basket_quantities,
				shadditional = "" + _this.valueForToken("additional_info"),
				m, g, y;
			try {
				m = top.document.referer !== "" ? encodeURIComponent(top.document.referrer
					.substring(0, 256)) : ""
			} catch (w) {
				m = document.referrer !== null ? encodeURIComponent(document.referrer.toString()
					.substring(0, 256)) : ""
			}
			try {
				g = window && window.top && document.location && window.top.location ===
					document.location ? document.location : window && window.top && window.top
					.location && "" !== window.top.location ? window.top.location : document
					.location
			} catch (E) {
				g = document.location
			}
			try {
				y = parent.location.href !== "" ? encodeURIComponent(parent.location.href
					.toString().substring(0, 256)) : ""
			} catch (S) {
				try {
					y = g !== null ? encodeURIComponent(g.toString().substring(0, 256)) : ""
				} catch (x) {
					y = ""
				}
			}
			a = encodeURIComponent(a);
			e = {
				add: function(e, t, n, r) {
					r = r || false;
					if (e.addEventListener) {
						e.addEventListener(t, n, r)
					} else if (e.attachEvent) {
						e.attachEvent("on" + t, n)
					}
				},
				load: function() {
					var e, g = document.createElement("script"),
						w = null,
						E = document.getElementsByTagName("script"),
						S = Number(E.length) - 1,
						x = document.getElementsByTagName("script")[S];
					if (typeof e === "undefined") {
						e = Math.floor(Math.random() * 1e17)
					}
					w = "px.steelhousemedia.com/st?" + "shver=" + t + "&shaid=" + n +
						"&shpn=" + r + "&shpc=" + i + "&shpb=" + s + "&shpp=" + o + "&shpcur=" +
						u + "&shpi=" + a + "&shps=" + f + "&shpic=" + l + "&shpau=" + c +
						"&shcv=" + h + "&shcq=" + p + "&shcp=" + d + "&shcpq=" + v + "&tdr=" +
						m + "&plh=" + y + "&cb=" + e + shadditional;
					g.type = "text/javascript";
					g.src = ("https:" === document.location.protocol ? "https://" :
						"http://") + w;
					x.parentNode.insertBefore(g, x)
				}
			};
			e.load()
		})()

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
