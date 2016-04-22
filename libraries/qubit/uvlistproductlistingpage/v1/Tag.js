//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.uvlistproductlistingpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "UV List - Product Listing Page",
		async: true,
		description: "Test Universal Variables on a search or category page",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product Listing - Query",
			description: "",
			token: "a",
			uv: "universal_variable.listing.query"
		}, {
			name: "Product Listing - Product ID List",
			description: "",
			token: "b",
			uv: "universal_variable.listing.items[#].id"
		}, {
			name: "Product Listing - Product URL List",
			description: "",
			token: "c",
			uv: "universal_variable.listing.items[#].url"
		}, {
			name: "Product Listing - Product Name List",
			description: "",
			token: "d",
			uv: "universal_variable.listing.items[#].name"
		}, {
			name: "Product Listing - Product Manufacturer List",
			description: "",
			token: "e",
			uv: "universal_variable.listing.items[#].manufacturer"
		}, {
			name: "Product Listing - Product Category List",
			description: "",
			token: "f",
			uv: "universal_variable.listing.items[#].category"
		}, {
			name: "Product Listing - Product Sub-Category List",
			description: "",
			token: "g",
			uv: "universal_variable.listing.items[#].subcategory"
		}, {
			name: "Product Listing - Product Color List",
			description: "",
			token: "h",
			uv: "universal_variable.listing.items[#].color"
		}, {
			name: "Product Listing - Product Currency List",
			description: "",
			token: "i",
			uv: "universal_variable.listing.items[#].currency"
		}, {
			name: "Product Listing - Product Unit Price List",
			description: "",
			token: "j",
			uv: "universal_variable.listing.items[#].unit_price"
		}, {
			name: "Product Listing - Product Unit Sale Price List",
			description: "",
			token: "k",
			uv: "universal_variable.listing.items[#].unit_sale_price"
		}, {
			name: "Product Listing - Product SKU List",
			description: "",
			token: "l",
			uv: "universal_variable.listing.items[#].sku_code"
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		console.log("" + this.valueForToken("a"));
		console.log("" + this.valueForToken("b"));
		console.log("" + this.valueForToken("c"));
		console.log("" + this.valueForToken("d"));
		console.log("" + this.valueForToken("e"));
		console.log("" + this.valueForToken("f"));
		console.log("" + this.valueForToken("g"));
		console.log("" + this.valueForToken("h"));
		console.log("" + this.valueForToken("i"));
		console.log("" + this.valueForToken("j"));
		console.log("" + this.valueForToken("k"));
		console.log("" + this.valueForToken("l"));
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
