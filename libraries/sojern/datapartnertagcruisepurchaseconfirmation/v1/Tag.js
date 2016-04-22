//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.datapartnertagcruisepurchaseconfirmation.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Data Partner Tag - Cruise Purchase Confirmation",
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
				token: "cruise_nights",
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
			}, {
				name: "Purchase Price",
				description: "e.g. if price is $450.34 then pass 450 only",
				token: "price",
				uv: ""
			}, {
				name: "Gender",
				description: "0 for male 1 for female (Blank string if not available)",
				token: "gender",
				uv: ""
			}, {
				name: "Customer First Name",
				description: "Blank string if not available",
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
			var src = document.location.protocol + "//pixel.sojern.com/partner/" +
				this.valueForToken("sojern_partner_key") + "/cc?";
			src += "cco=" + this.valueForToken("cruise_line") + "&";
			src += "cd1=" + this.valueForToken("departure_date") + "&";
			src += "cd=" + this.valueForToken("cruise_nights") + "&";
			src += "cf1=" + this.valueForToken("destination") + "&";
			src += "s=" + this.valueForToken("residence") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "cr=" + this.valueForToken("rooms") + "&";
			src += "cp=" + this.valueForToken("price") + "&";
			src += "g=" + this.valueForToken("gender") + "&";
			src += "n=" + this.valueForToken("name");
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
