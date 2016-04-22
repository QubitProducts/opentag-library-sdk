//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.dynamichoteladsremarketingallpages.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Dynamic Hotel Ads Remarketing - All Pages",
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
				name: "Hotel ID",
				description: "Hotel ID",
				token: "hotelid",
				uv: ""
			}, {
				name: "Page Type",
				description: "Page Type",
				token: "pagetype",
				uv: ""
			}, {
				name: "Check-In Date",
				description: "Check-In Date",
				token: "checkin",
				uv: ""
			}, {
				name: "Check-Out Date",
				description: "Check-Out Date",
				token: "checkout",
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
							hotel_hotelid: '' + _this.valueForToken("hotelid"),
							hotel_pagetype: '' + _this.valueForToken("pagetype"),
							hotel_checkindate: '' + _this.valueForToken("checkin"),
							hotel_checkoutdate: '' + _this.valueForToken("checkout") 
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
