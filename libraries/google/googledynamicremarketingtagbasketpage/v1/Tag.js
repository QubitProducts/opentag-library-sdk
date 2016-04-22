//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googledynamicremarketingtagbasketpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Dynamic Remarketing Tag - Basket Page",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Array of Product IDs",
				description: "Array of Product IDs",
				token: "product_ids",
				uv: "universal_variable.basket.line_items[#].product.id"
			}, {
				name: "Array of Product Categories",
				description: "Array of Product Categories",
				token: "product_cats",
				uv: "universal_variable.basket.line_items[#].product.category"
			}, {
				name: "Array of Products Prices",
				description: "Array of Products Prices",
				token: "prices",
				uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
			}, {
				name: "Page Category",
				description: "Page Category",
				token: "page_cat",
				uv: "universal_variable.page.category"
			}, {
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_id",
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
			var productIdsArray = [];
			for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
				productIdsArray.push(this.valueForToken("product_ids")[i]);
			}
			var productCategoriesArray = [];
			for (var i = 0; i < this.valueForToken("product_cats").length; i++) {
				productCategoriesArray.push(this.valueForToken("product_cats")[i]);
			}
			var productValuesArray = [];
			for (var i = 0; i < this.valueForToken("prices").length; i++) {
				productValuesArray.push(this.valueForToken("prices")[i]);
			}

			window.google_tag_params = {
				ecomm_prodid: productIdsArray,
				ecomm_pagetype: '' + this.valueForToken("page_cat"),
				ecomm_pcat: productCategoriesArray,
				ecomm_pvalue: productValuesArray
			};

			window.google_conversion_id = this.valueForToken("google_id");
			window.google_custom_params = window.google_tag_params;
			window.google_remarketing_only = true;

			var script = document.createElement('script');
			script.type = "text/javascript";
			script.src = "//www.googleadservices.com/pagead/conversion.js";
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
