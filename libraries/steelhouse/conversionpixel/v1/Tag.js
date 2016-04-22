//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("steelhouse.conversionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Pixel",
		async: true,
		description: "The Steelhouse conversion pixel, for placing on confirmation pages. Bundled with the tracking pixel.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "SteelHouse Advertiser ID",
			description: "The ID assigned to you by SteelHouse",
			token: "advertiser_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "The unique identifier for this order",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "The total amount paid by the customer for this order",
			token: "order_total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order Currency",
			description: "The currency used to pay for this order",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Product SKU List",
			description: "An array containing the SKUs for each item in the order",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Product Quantity List",
			description: "An array containing quantities associated with each product in this order",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Product Price List",
			description: "An array containing sale prices for each product in the order",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Additional Information",
			description: "Arbitrary additional information you'd like to pass back to SteelHouse",
			token: "custom",
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
		//Make CSVs out of UV pseudo-arrays.
		//Will work if the customer provides actual arrays, too (though join would be cleaner).
		function getSKUs() {
			var temp_skus = "";
			for (var sku_index = 0; sku_index < _this.valueForToken("skus").length; sku_index++) {
				temp_skus += _this.valueForToken("skus")[sku_index];
				if (sku_index != _this.valueForToken("skus").length - 1) temp_skus += ",";
			}
			return sku_index;
		}

		function getQtys() {
			var temp_quants = "";
			for (var quant_index = 0; quant_index < _this.valueForToken("quantities").length; quant_index++) {
				temp_quants += _this.valueForToken("quantities")[quant_index];
				if (quant_index != _this.valueForToken("quantities").length - 1)
					temp_quants +=
						",";
			}
			return temp_quants;
		}

		function getCount() {
			var temp = 0;
			for (var index = 0; index < _this.valueForToken("quantities").length; index++) {
				temp += Number(_this.valueForToken("quantities")[index]);
			}
			return temp;
		}

		function getPrices() {
			var temp_prices = "";
			for (var price_index = 0; price_index < _this.valueForToken("prices").length; price_index++) {
				temp_prices += _this.valueForToken("prices")[price_index];
				if (price_index != _this.valueForToken("prices").length - 1) temp_prices +=
					",";
			}
			return temp_prices;
		}

		(function() {
			"use strict";
			var e = null,

				//this next line would make a CSV from an array for f later on
				//stock_counts = ${stock_counts}.join(","),
				t = "3.4.0",
				n = "" + _this.valueForToken("advertiser_id"),
				r = "" + _this.valueForToken("order_id"),
				i = "" + _this.valueForToken("order_total"),
				s = "" + _this.valueForToken("order_currency"),
				o = getSKUs(),
				u = getQtys(),
				a = getPrices(),
				//f here could be a stock count CSV if a client ever wants it
				f = "",
				shadditional = "" + _this.valueForToken("custom"),
				l, c, h;
			try {
				l = top.document.referer !== "" ? encodeURIComponent(top.document.referrer
					.substring(0, 256)) : "";
			} catch (d) {
				l = document.referrer !== null ? encodeURIComponent(document.referrer.toString()
					.substring(0, 256)) : "";
			}
			try {
				c = window && window.top && document.location && window.top.location ===
					document.location ? document.location : window && window.top && window.top
					.location && "" !== window.top.location ? window.top.location : document
					.location;
			} catch (v) {
				c = document.location;
			}
			try {
				h = parent.location.href !== "" ? encodeURIComponent(parent.location.href
					.toString().substring(0, 256)) : "";
			} catch (m) {
				try {
					h = c !== null ? encodeURIComponent(c.toString().substring(0, 256)) : "";
				} catch (g) {
					h = "";
				}
			}
			e = {
				add: function(e, t, n, r) {
					r = r || false;
					if (e.addEventListener) {
						e.addEventListener(t, n, r);
					} else if (e.attachEvent) {
						e.attachEvent("on" + t, n);
					}
				},
				load: function() {
					var e, c = document.createElement("script"),
						d = null,
						v = document.getElementsByTagName("script"),
						m = Number(v.length) - 1,
						g = document.getElementsByTagName("script")[m];
					if (typeof e === "undefined") {
						e = Math.floor(Math.random() * 1e17);
					}
					d = "px.steelhousemedia.com/st?" + "conv=1" + "&shver=" + t + "&shaid=" +
						n + "&shoid=" + r + "&shoamt=" + i + "&shocur=" + s + "&shopid=" + o +
						"&shoq=" + u + "&shoup=" + a + "&shpil=" + f + "&tdr=" + l + "&plh=" +
						h + "&cb=" + e + shadditional;
					c.type = "text/javascript";
					c.src = ("https:" === document.location.protocol ? "https://" :
						"http://") + d;
					g.parentNode.insertBefore(c, g);
				}
			};
			e.load();
		})();
		(function() {
			"use strict";
			var e = null,
				t = "3.4.0",
				n = "" + _this.valueForToken("advertiser_id"),
				r = shaddslashes(""),
				i = shaddslashes(""),
				s = shaddslashes(""),
				o = "",
				u = "",
				a = "",
				f = "",
				l = "",
				c = "",
				h = "" + _this.valueForToken("order_total"),
				p = getCount(),
				d = getSKUs(),
				v = getQtys(),
				shadditional = "" + _this.valueForToken("custom"),
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
		})();

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
