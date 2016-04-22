//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagcruisesearchresultspage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Advertiser Tag - Cruise Search Results Page",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Event Type",
				description: "Assign blank string if not available",
				token: "event",
				uv: ""
			}, {
				name: "Cruise Line Name",
				description: "Assign blank string if not available",
				token: "line",
				uv: ""
			}, {
				name: "Departure Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "departure",
				uv: ""
			}, {
				name: "Length of Cruise in Nights",
				description: "Assign blank string if not available",
				token: "nights",
				uv: ""
			}, {
				name: "Destination of Cruise",
				description: "Assign blank string if not available",
				token: "destination",
				uv: ""
			}, {
				name: "Customer Postcode",
				description: "Assign blank string if not available",
				token: "postcode",
				uv: ""
			}, {
				name: "Number of Travellers",
				description: "Assign blank string if not available",
				token: "travellers",
				uv: ""
			}, {
				name: "Number of Rooms",
				description: "Assign blank string if not available",
				token: "rooms",
				uv: ""
			}],
		categories:[
			"Audience Management"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			var src = "https://beacon.sojern.com/p/10?";
			src += "et=" + this.valueForToken("event") + "&";
			src += "cco=" + this.valueForToken("line") + "&";
			src += "cd1=" + this.valueForToken("departure") + "&";
			src += "cd=" + this.valueForToken("nights") + "&";
			src += "cf1=" + this.valueForToken("destination") + "&";
			src += "s=" + this.valueForToken("postcode") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "cr=" + this.valueForToken("rooms");
			(new Image()).src = src;
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
