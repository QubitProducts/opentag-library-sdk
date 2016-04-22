//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"freespee.googleremarketingwithcustomparameters.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Remarketing with custom parameters",
			async: true,
			description: "The standard GA re-marketing tag, but allows for custom parameter as per the guide: http://bit.ly/14iZMqu. Return an object within an anonymous function to populate the parameters.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [
			],
		categories:[
			"Web Utilities / JavaScript Tools"
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
						google_conversion_id: "" + _this.valueForToken("conversion_id"),
						google_custom_params: {
							ecomm_prodid: _this.valueForToken("product_id"),
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
