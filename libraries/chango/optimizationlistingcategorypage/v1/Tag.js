//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.optimizationlistingcategorypage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Optimization - Listing/Category page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Track Basket Page",
			description: "set to true (if you want to track basket items even when on a category page) or false",
			token: "track_basket",
			uv: ""
		}, {
			name: "Array of Basket Items SKU codes",
			description: "empty array if you're not tracking basket items",
			token: "basket_skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Array of Basket Items names",
			description: "empty array if you're not tracking basket items",
			token: "basket_names",
			uv: "universal_variable.basket.line_items[#].product.name"
		}, {
			name: "Array of Listing Page Product Names",
			description: "Array of Listing Page Product Names",
			token: "names",
			uv: "universal_variable.listing.items[#].name"
		}, {
			name: "Array of Listing Page Product SKU codes",
			description: "Array of Listing Page Product SKU codes",
			token: "skus",
			uv: "universal_variable.listing.items[#].sku_code"
		}, {
			name: "Array of Listing Page Product unit prices",
			description: "Array of Listing Page Product unit prices",
			token: "prices",
			uv: "universal_variable.listing.items[#].unit_price"
		}, {
			name: "Array of Listing Page Product unit sale prices",
			description: "Array of Listing Page Product unit sale prices",
			token: "sale_prices",
			uv: "universal_variable.listing.items[#].unit_sale_price"
		}, {
			name: "Product Category ID/name",
			description: "Product Category",
			token: "cat",
			uv: "universal_variable.page.category"
		}, {
			name: "Chango ID",
			description: "Chango ID",
			token: "chango_id",
			uv: ""
		}, {
			name: "Hashed Visitor ID",
			description: "Leave blank if not available",
			token: "visitor_id",
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
		var names = [];
		var prices = [];
		var sale_prices = [];
		var skus = [];
		for (var i = 0; i < this.valueForToken("skus").length; i++) {
			names.push("" + this.valueForToken("names")[i]);
			prices.push("" + this.valueForToken("prices")[i]);
			sale_prices.push("" + this.valueForToken("sale_prices")[i]);
			skus.push("" + this.valueForToken("skus")[i]);
		}
		window.__cho__ = {
			"data": {
				"pt": "category",
				"na": names.join(','),
				"op": prices.join(','),
				"sp": sale_prices.join(','),
				"sku": skus.join(','),
				"pc": "" + this.valueForToken("cat")
			},
			"pid": "" + this.valueForToken("chango_id"),
			"puid2": "" + this.valueForToken("visitor_id")
		};

		if (this.valueForToken("track_basket")) {
			var basketItems = [];

			for (var i = 0; i < this.valueForToken("basket_skus").length; i++) {
				basketItems.push({
					na: "" +this.valueForToken("basket_names")[i],
					sku: "" + this.valueForToken("basket_skus")[i]
				});
			}

			__cho__.data["crt"] = stringifiedArrayOfObjects(basketItems);
		}

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = document.location.protocol + '//cc.chango.com/static/o.js';
		document.head.appendChild(script);
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
