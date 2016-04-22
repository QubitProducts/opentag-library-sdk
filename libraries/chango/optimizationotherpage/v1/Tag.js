//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.optimizationotherpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Optimization - Other Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product Name(s)",
			description: "a string of ^ separated names if more than one - blank if not available",
			token: "name",
			uv: ""
		}, {
			name: "Product Unit Price(s)",
			description: "a string of ^ separated prices if more than one - blank if not available",
			token: "price",
			uv: ""
		}, {
			name: "Product Unit Sale Price(s)",
			description: "a string of ^ separated prices if more than one - blank if not available",
			token: "sale_price",
			uv: ""
		}, {
			name: "Product Category/Categories",
			description: "a string of ^ seprated categories if more than one - blank if not available",
			token: "cat",
			uv: ""
		}, {
			name: "Product SKU(s)",
			description: "a string of ^ seprated SKUs if more than one - blank if not available",
			token: "sku",
			uv: ""
		}, {
			name: "Page Type/Name/ID",
			description: "Page Type/Name/ID",
			token: "page",
			uv: "universal_variable.page.category"
		}, {
			name: "Chango ID",
			description: "Chango ID",
			token: "chango_id",
			uv: ""
		}, {
			name: "Hashed Visitor ID",
			description: "Blank if not available",
			token: "visitor_id",
			uv: ""
		}, {
			name: "Track Basket Items",
			description: "set to true (if you want to track basket items) or false",
			token: "track_basket",
			uv: ""
		}, {
			name: "Array of Basket Items SKU codes",
			description: "empty array if you're not tracking basket items",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Array of Basket Items Names",
			description: "empty array if you're not tracking Basket items",
			token: "names",
			uv: "universal_variable.basket.line_items[#].product.name"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var name = "" + this.valueForToken("name");
		if (name.indexOf('^') !== -1) {
			name = name.split('^');
		}

		var price = "" + this.valueForToken("price");
		if (price.indexOf('^') !== -1) {
			price = price.split('^');
			for (var i = 0; i < price.length; i++) {
				price[i] = Number(price[i]);
			}
		} else {
			price = Number(price);
		}

		var salePrice = "" + this.valueForToken("sale_price");
		if (salePrice.indexOf('^') !== -1) {
			salePrice = salePrice.split('^');
			for (var i = 0; i < salePrice.length; i++) {
				salePrice[i] = Number(salePrice[i]);
			}
		} else {
			salePrice = Number(salePrice);
		}

		var sku = "" + this.valueForToken("sku");
		if (sku.indexOf('^') !== -1) {
			sku = sku.split('^');
		}

		var cat = "" + this.valueForToken("cat");
		if (cat.indexOf('^') !== -1) {
			cat = cat.split('^');
		}

		window.__cho__ = {
			"data": {
				"pt": "" + this.valueForToken("page"),
				"na": name,
				"op": price,
				"sp": salePrice,
				"sku": sku,
				"pc": cat
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
