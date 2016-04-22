//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("coremetrics.coremetricsproductpages.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "CoreMetrics - Product pages",
		async: true,
		description: "To be used on product pages.",
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
			name: "Product ID",
			description: "",
			token: "product_id",
			uv: "universal_variable.product.id"
		}, {
			name: "Product Name",
			description: "",
			token: "product_name",
			uv: "universal_variable.product.name"
		}, {
			name: "Send Page View",
			description: "Some CM setups don't require this on product pages - pass true or false depending on this.",
			token: "sendpageview",
			uv: ""
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
		// Client Setup
		window.cmSetClientID(
			"" + this.valueForToken("client_id"),
			this.valueForToken("data_collection_method"),
			"" + this.valueForToken("data_collection_domain"),
			"" + this.valueForToken("cookie_domain")
		);

		// Page View
		if (this.valueForToken("sendpageview")) {
			window.cmCreatePageviewTag(
				"" + this.valueForToken("page_id"),
				"" + this.valueForToken("category_id")
			);
		}

		// Product View
		window.cmCreateProductviewTag(
			"" + this.valueForToken("product_id"),
			"" + this.valueForToken("product_name"),
			"" + this.valueForToken("category_id")
		);
		/*~post*/
	}
});
