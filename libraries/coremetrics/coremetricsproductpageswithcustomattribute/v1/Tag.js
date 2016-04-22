//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"coremetrics.coremetricsproductpageswithcustomattribute.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "CoreMetrics - Product pages (with Custom Attribute)",
			async: true,
			description: "The same as the product page tag, but with the extra parameter to distinguish a specific type of product page view content.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "libs.coremetrics.com/eluminate.js",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "CoreMetrics Client ID",
				description: "The ID corresponding to you given by CoreMetrics",
				token: "client_id",
				uv: ""
			}, {
				name: "CoreMetrics Data Collection Method",
				description: "Boolean: true means client managed, false means CM managed",
				token: "data_collection_method",
				uv: ""
			}, {
				name: "CoreMetrics Data Collection Domain",
				description: "The domain that the data will be collected on",
				token: "data_collection_domain",
				uv: ""
			}, {
				name: "CoreMetrics Cookie Domain",
				description: "The domain for CM cookies to be set to",
				token: "cookie_domain",
				uv: ""
			}, {
				name: "CoreMetrics Product Page ID",
				description: "The ID specific to the current page",
				token: "page_id",
				uv: ""
			}, {
				name: "CoreMetrics Product Category ID",
				description: "The category for the product on the current page view",
				token: "category_id",
				uv: ""
			}, {
				name: "Product ID",
				description: "The ID specific to the product on the current page",
				token: "product_id",
				uv: "universal_variable.product.id"
			}, {
				name: "Product Name",
				description: "The name of the product on the current page view",
				token: "product_name",
				uv: "universal_variable.product.name"
			}, {
				name: "Custom Attribute",
				description: "Any custom parameter you would like to pass to distinguish between product content",
				token: "custom_attribute",
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
			window.cmCreatePageviewTag(
				"" + this.valueForToken("page_id"),
				"" + this.valueForToken("category_id")
			);

			// Product View
			window.cmCreateProductviewTag(
				"" + this.valueForToken("product_id"),
				"" + this.valueForToken("product_name"),
				"" + this.valueForToken("category_id"),
				"" + this.valueForToken("custom_attribute")
			);
			/*~post*/
		}
	});
