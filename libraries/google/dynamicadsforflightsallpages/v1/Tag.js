//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("google.dynamicadsforflightsallpages.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Dynamic Ads For Flights - All Pages",
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
			name: "Flight Origin ID",
			description: "Flight Origin ID",
			token: "originid",
			uv: ""
		}, {
			name: "Flight Destination ID",
			description: "Flight Destination ID",
			token: "destinationid",
			uv: ""
		}, {
			name: "Departure Date",
			description: "Departure Date",
			token: "start",
			uv: ""
		}, {
			name: "Return Date",
			description: "Return Date",
			token: "end",
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
						flight_originid : '' + _this.valueForToken("originid"),
						flight_destid : '' + _this.valueForToken("destinationid"),
						flight_startdate : '' + _this.valueForToken("start"),
						flight_enddate : '' + _this.valueForToken("end"),
						flight_pagetype : '' + _this.valueForToken("pagetype")
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
