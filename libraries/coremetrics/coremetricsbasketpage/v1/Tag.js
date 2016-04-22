//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("coremetrics.coremetricsbasketpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "CoreMetrics - Basket page",
		async: true,
		description: "The shop action 5 tag, to be placed on basket pages.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "libs.coremetrics.com/eluminate.js",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Client ID",
			description: "Unique 8-digit Coremetrics-assigned account code.",
			token: "client_id",
			uv: ""
		}, {
			name: "Data collection method",
			description: "Boolean. true indicates Client Managed, false indicates Coremetrics Managed.",
			token: "data_collection_method",
			uv: ""
		}, {
			name: "Data collection domain",
			description: "The target domain for Coremetrics data collection requests.",
			token: "data_collection_domain",
			uv: ""
		}, {
			name: "Cookie Domain",
			description: "Should be set to the 2nd level site domain (“thesite.com”) of the domain.",
			token: "cookie_domain",
			uv: ""
		}, {
			name: "Page ID",
			description: "Uniquely identifies the 256 given ‘page’ in Coremetrics. Can be any alphanumeric string.",
			token: "page_id",
			uv: ""
		}, {
			name: "Category ID",
			description: "Category ID for the leaf 256 node to which this page belongs. Should match the id from a CDF file.",
			token: "category_id",
			uv: ""
		}, {
			name: "Product Ids",
			description: "",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Product Names",
			description: "",
			token: "product_names",
			uv: "universal_variable.basket.line_items[#].product.name"
		}, {
			name: "Product Quantities",
			description: "",
			token: "product_quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Product Unit Sale Prices",
			description: "",
			token: "product_unit_sale_prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Product Category IDs",
			description: "A list of all the category ids the products belong to. Uses line_items[].product.category by default",
			token: "product_category_id_list",
			uv: "universal_variable.basket.line_items[#].product.category"
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		var i = 0,
			ii = this.valueForToken("product_ids").length;

		// Client Setup
		window.cmSetClientID(
			"" + this.valueForToken("client_id"),
			this.valueForToken("data_collection_method"),
			"" + this.valueForToken("data_collection_domain"),
			"" + this.valueForToken("cookie_domain")
		);

		// Page View
		window.cmCreatePageviewTag(
			"" + this.valueForToken("page_id"),
			"" + this.valueForToken("category_id")
		);

		// Products
		for (; i < ii; i++) {
			window.cmCreateShopAction5Tag(
				this.valueForToken("product_ids")[i],
				this.valueForToken("product_names")[i],
				this.valueForToken("product_quantities")[i],
				this.valueForToken("product_unit_sale_prices")[i],
				this.valueForToken("product_category_id_list")[i]
			);
		};

		window.cmDisplayShops();
		/*~post*/
	}
});
