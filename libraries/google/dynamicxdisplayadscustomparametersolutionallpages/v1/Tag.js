//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.dynamicxdisplayadscustomparametersolutionallpages.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Dynamic X Display Ads (Custom Parameter Solution) - All Pages",
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
				token: "id",
				uv: ""
			}, {
				name: "Items ID",
				description: "replace with Item ID defined in the feed",
				token: "itemid",
				uv: ""
			}, {
				name: "Item Location ID",
				description: "replace with Item location ID defined in the feed",
				token: "itemlocationid",
				uv: ""
			}, {
				name: "Page Type",
				description: "Page Type",
				token: "pagetype",
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
						google_conversion_id: _this.valueForToken("id"),
						google_custom_params: {
							dynx_itemid: '' + _this.valueForToken("itemid"),
							dynx_locid: '' + _this.valueForToken("itemlocationid"),
							dynx_pagetype: '' + _this.valueForToken("pagetype")
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
