//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagcruisepurchaseconfirmationpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Advertiser Tag - Cruise Purchase Confirmation Page",
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
				name: "Name of Cruise Line",
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
				name: "Customer's Postcode",
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
			}, {
				name: "Purchase Price",
				description: "if price is e.g. $350.34 then pass 350 only",
				token: "price",
				uv: ""
			}, {
				name: "Confirmation Number",
				description: "Confirmation Number",
				token: "id",
				uv: ""
			}, {
				name: "Gender",
				description: "0 for male 1 for female (blank if not available)",
				token: "gender",
				uv: ""
			}, {
				name: "Customer's First Name",
				description: "Blank if not available",
				token: "name",
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
			var src = "https://beacon.sojern.com/p/11?";
			src += "et=" + this.valueForToken("event") + "&";
			src += "cco=" + this.valueForToken("line") + "&";
			src += "cd1=" + this.valueForToken("departure") + "&";
			src += "cd=" + this.valueForToken("nights") + "&";
			src += "cf1=" + this.valueForToken("destination") + "&";
			src += "s=" + this.valueForToken("postcode") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "cr=" + this.valueForToken("rooms") + "&";
			src += "cp=" + this.valueForToken("price") + "&";
			src += "g=" + this.valueForToken("gender") + "&";
			src += "n=" + this.valueForToken("name") + "&";
			src += "cconfno=" + this.valueForToken("id");
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
