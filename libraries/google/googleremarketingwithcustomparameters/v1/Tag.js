//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleremarketingwithcustomparameters.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Remarketing with custom parameters",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_id",
				uv: ""
			}, {
				name: "Product ID",
				description: "Product ID",
				token: "product_id",
				uv: ""
			}, {
				name: "Page Type",
				description: "Page Type",
				token: "page_type",
				uv: ""
			}, {
				name: "Order Value",
				description: "Order Value",
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
			var _this = this;
			var poll = function() {
				if (window.google_trackConversion) {
					window.google_trackConversion({
						google_conversion_id: "" + _this.valueForToken("google_id"),
						google_custom_params: {
							ecomm_prodid: "" + _this.valueForToken("product_id"),
							ecomm_pagetype: "" + _this.valueForToken("page_type"),
							ecomm_totalvalue: _this.valueForToken("total")
						},
						google_remarketing_only: true
					});
				} else {
					setTimeout(poll, 100);
				}
			};

			poll();
			/*~post*/
		}
	});
