//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sojern.datapartnertagcruisesearch.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Data Partner Tag - Cruise Search",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Sojern Partner Key",
			description: "Sojern Partner Key",
			token: "sojern_partner_key",
			uv: ""
		}, {
			name: "Name of Cruise Line",
			description: "Blank string if not available",
			token: "cruise_line",
			uv: ""
		}, {
			name: "Departure Date",
			description: "yyyy-mm-dd (Blank string if not available)",
			token: "departure_date",
			uv: ""
		}, {
			name: "Number of Cruise Nights",
			description: "Blank string if not available",
			token: "number_of_cruise_nights",
			uv: ""
		}, {
			name: "Destination",
			description: "Blank string if not available",
			token: "destination",
			uv: ""
		}, {
			name: "Customer Residence",
			description: "Postcode (Blank string if not available)",
			token: "residence",
			uv: ""
		}, {
			name: "Number of Travellers",
			description: "Blank string if not available",
			token: "travellers",
			uv: ""
		}, {
			name: "Number of Rooms",
			description: "Blank string if not available",
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
		var src = document.location.protocol + "//pixel.sojern.com/partner/" +
			this.valueForToken("sojern_partner_key") + "/cs?";
		src += "cco=" + this.valueForToken("cruise_line") + "&";
		src += "cd1=" + this.valueForToken("departure_date") + "&";
		src += "cd=" + this.valueForToken("number_of_cruise_nights") + "&";
		src += "cf1=" + this.valueForToken("destination") + "&";
		src += "s=" + this.valueForToken("residence") + "&";
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
