//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.optimizationproductpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Optimization - Product Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Track Basket Items",
			description: "set to true (if you want to track items in the basket even when firing on a product page) or false",
			token: "track_basket",
			uv: ""
		}, {
			name: "Array of Basket Items SKU codes",
			description: "An empty array if you're not tracking basket items",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Array of Basket Items names",
			description: "An empty array if you're not tracking basket items",
			token: "names",
			uv: "universal_variable.basket.line_items[#].product.name"
		}, {
			name: "Product Name",
			description: "Product Name",
			token: "name",
			uv: "universal_variable.product.name"
		}, {
			name: "Product SKU code",
			description: "Product SKU code",
			token: "sku",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "Product Unit Price",
			description: "Product Unit Price",
			token: "price",
			uv: "universal_variable.product.unit_price"
		}, {
			name: "Product Unit Sale Price",
			description: "Product Unit Sale Price",
			token: "sale_price",
			uv: "universal_variable.product.unit_sale_price"
		}, {
			name: "Product Category",
			description: "Product Category",
			token: "cat",
			uv: "universal_variable.product.category"
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
		window.__cho__ = {
			"data": {
				"pt": "product",
				"na": "" + this.valueForToken("name"),
				"op": this.valueForToken("price"),
				"sp": this.valueForToken("sale_price"),
				"sku": "" + this.valueForToken("sku"),
				"pc": "" + this.valueForToken("cat")
			},
			"pid": "" + this.valueForToken("chango_id"),
			"puid2": "" + this.valueForToken("visitor_id")
		};

		if (this.valueForToken("track_basket")) {
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

			var basketItems = [];

			for (var i = 0; i < this.valueForToken("skus").length; i++) {
				basketItems.push({
					na: "" + this.valueForToken("names")[i],
					sku: "" + this.valueForToken("skus")[i]
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
