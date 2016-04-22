//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.uvtestbasketpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "UV Test - Basket Page",
		async: true,
		description: "Test Universal Variables on a basket page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Basket Total",
			description: "",
			token: "a",
			uv: "universal_variable.basket.total"
		}, {
			name: "Basket Sub-Total",
			description: "",
			token: "b",
			uv: "universal_variable.basket.subtotal"
		}, {
			name: "Basket Tax",
			description: "",
			token: "c",
			uv: "universal_variable.basket.tax"
		}, {
			name: "Basket Shipping Cost",
			description: "",
			token: "d",
			uv: "universal_variable.basket.shipping_cost"
		}, {
			name: "Basket Currency",
			description: "",
			token: "e",
			uv: "universal_variable.basket.currency"
		}, {
			name: "Basket Line Items - Product Id List",
			description: "",
			token: "f",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Basket Line Items - Product SKU List",
			description: "",
			token: "g",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Basket Line Items - Product Name List",
			description: "",
			token: "h",
			uv: "universal_variable.basket.line_items[#].product.name"
		}, {
			name: "Basket Line Items - Product Manufacturer List",
			description: "",
			token: "i",
			uv: "universal_variable.basket.line_items[#].product.manufacturer"
		}, {
			name: "Basket Line Items - Product Sub-Category List",
			description: "",
			token: "j",
			uv: "universal_variable.basket.line_items[#].product.sub_category"
		}, {
			name: "Basket Line Items - Product Unit Price List",
			description: "",
			token: "k",
			uv: "universal_variable.basket.line_items[#].product.unit_price"
		}, {
			name: "Basket Line Items - Quantity List",
			description: "",
			token: "l",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Basket Line Items - Sub-Total List",
			description: "",
			token: "m",
			uv: "universal_variable.basket.line_items[#].subtotal"
		}, {
			name: "Basket Line Items - Product Unit Sale Price List",
			description: "",
			token: "n",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Basket Id",
			description: "",
			token: "o",
			uv: "universal_variable.basket.id"
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
		console.log("" + this.valueForToken("m"));
		console.log("" + this.valueForToken("n"));
		console.log("" + this.valueForToken("o"));
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
