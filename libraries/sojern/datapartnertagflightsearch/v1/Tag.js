//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sojern.datapartnertagflightsearch.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Data Partner Tag - Flight Search",
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
			name: "Origin Airport Code",
			description: "Blank string if not available",
			token: "origin_airport_code",
			uv: ""
		}, {
			name: "Destination Airport Code",
			description: "Blank string if not available",
			token: "destination_airport_code",
			uv: ""
		}, {
			name: "Departure Date",
			description: "yyyy-mm-dd (Blank string if not available)",
			token: "departure_date",
			uv: ""
		}, {
			name: "Return Date",
			description: "yyyy-mm-dd (Blank string if not available)",
			token: "return_date",
			uv: ""
		}, {
			name: "Number of Travellers",
			description: "Blank string if not available",
			token: "number_of_travellers",
			uv: ""
		}, {
			name: "Service Class",
			description: "Blank string if not available",
			token: "service_class",
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
			this.valueForToken("sojern_partner_key") + "/fs?";
		src += "fa1=" + this.valueForToken("origin_airport_code") + "&";
		src += "fa2=" + this.valueForToken("destination_airport_code") + "&";
		src += "fd1=" + this.valueForToken("departure_date") + "&";
		src += "fd2=" + this.valueForToken("return_date") + "&";
		src += "t=" + this.valueForToken("number_of_travellers") + "&";
		src += "fc=" + this.valueForToken("service_class");
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
