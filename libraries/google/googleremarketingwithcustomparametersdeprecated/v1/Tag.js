//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleremarketingwithcustomparametersdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Remarketing with custom parameters [DEPRECATED]",
			async: true,
			description: "The standard GA re-marketing tag, but allows for custom parameter as per the guide: http://bit.ly/14iZMqu. Return an object within an anonymous function to populate the parameters.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Your Google id provided in the script",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Google Conversion Label",
				description: "A alphanumeric label of your conversion tracking",
				token: "label",
				uv: ""
			}, {
				name: "Product ID",
				description: "On a product page input the uv.product.id, on a transaction/listing, input an array of ids.",
				token: "product_id",
				uv: ""
			}, {
				name: "Page Type",
				description: "Valid values: home, searchresults, category, product, basket, purchase, other",
				token: "page_type",
				uv: ""
			}, {
				name: "Total value/price",
				description: "Specify the value of the product. On a basket/purchase page, this should be the total sum of items.",
				token: "total",
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
			/*~script*/
		},
		pre: function() {
			/*pre*/
			/*~pre*/
		},
		post: function() {
			/*post*/
			window.google_trackConversion({
				google_conversion_id: "" + this.valueForToken("conversion_id"),
				google_conversion_label: "" + this.valueForToken("label"),
				google_custom_params: {
					ecomm_prodid: this.valueForToken("product_id"),
					ecomm_pagetype: "" + this.valueForToken("page_type"),
					ecomm_totalvalue: this.valueForToken("total")
				},
				google_remarketing_only: true
			});
			/*~post*/
		}
	});
