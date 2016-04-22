//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.optimizationbasketpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Optimization - Basket Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of product SKU codes",
			description: "Array of SKU codes",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Array of product names",
			description: "Array of product names",
			token: "names",
			uv: "universal_variable.basket.line_items[#].product.name"
		}, {
			name: "Array of product unit prices",
			description: "Array of product unit prices",
			token: "prices",
			uv: "universal_variable.basket.line_items[#].product.unit_price"
		}, {
			name: "Array of product unit sale prices",
			description: "Array of product unit sale prices",
			token: "sale_prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Array of product categories",
			description: "Array of product categories",
			token: "cats",
			uv: "universal_variable.basket.line_items[#].product.category"
		}, {
			name: "Chango ID",
			description: "Chango ID",
			token: "chango_id",
			uv: ""
		}, {
			name: "Hashed Visitor ID",
			description: "Hashed Visitor ID",
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
		var namesAndSkus = [];
		var names = [];
		var prices = [];
		var salePrices = [];
		var skus = [];
		var cats = [];

		for (var i = 0; i < this.valueForToken("skus").length; i++) {
			namesAndSkus.push({
				na: "" + this.valueForToken("names")[i],
				sku: "" + this.valueForToken("skus")[i]
			});
			names.push("" + this.valueForToken("names")[i]);
			prices.push(this.valueForToken("prices")[i]);
			salePrices.push(this.valueForToken("sale_prices")[i]);
			skus.push("" + this.valueForToken("skus")[i]);
			cats.push("" + this.valueForToken("cats")[i]);
		}

		var stringifiedArrayOfObjects = function(data) {
			var string = "";
			for (var obj in data) {
				if (data.hasOwnProperty(obj)) {
					for (var prop in data[obj]) {
						if (data[obj].hasOwnProperty(prop)) {
							string += "," + prop + ':' + data[obj][prop];
						}
					}
				}
			}
			string = string.replace(/^,/, '');
			return encodeURI(string);
		};

		window.__cho__ = {
			"data": {
				"pt": "basket",
				"crt": stringifiedArrayOfObjects(namesAndSkus),
				"na": names,
				"op": prices,
				"sp": salePrices,
				"sku": skus,
				"pc": cats
			},
			"pid": "" + this.valueForToken("chango_id"),
			"puid2": "" + this.valueForToken("visitor_id")
		};

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
