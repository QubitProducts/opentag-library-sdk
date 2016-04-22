//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.datapartnertagflightrentalcarsearch.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Data Partner Tag - Flight + Rental Car Search",
			async: true,
			description: "",
			html: "\n",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Sojern Partner Key",
				description: "Blank string if not available",
				token: "sojern_partner_key",
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
				description: "Blank string if not available",
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
			}, {
				name: "Closest Airport to Car Pickup Location",
				description: "Blank string if not available",
				token: "airport_to_pickup",
				uv: ""
			}, {
				name: "Car Pickup Location City",
				description: "Blank string if not available",
				token: "pickup_location_city",
				uv: ""
			}, {
				name: "Car Pickup Date",
				description: "yyyy-mm-dd (Blank string if not available)",
				token: "pickup_date",
				uv: ""
			}, {
				name: "Closest Airport to Car Drop-Off Location",
				description: "Blank string if not available",
				token: "airport_to_dropoff",
				uv: ""
			}, {
				name: "Car Drop-Off Location City",
				description: "Blank string if not available",
				token: "dropoff_location_city",
				uv: ""
			}, {
				name: "Car Drop-Off Date",
				description: "Blank string if not available",
				token: "dropoff_date",
				uv: ""
			}, {
				name: "Class of Car",
				description: "Blank string if not available",
				token: "car_class",
				uv: ""
			}, {
				name: "Origin Airport Code",
				description: "Blank string if not available",
				token: "origin_airport_code",
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
			src += "fc=" + this.valueForToken("service_class") + "&";
			src += "ra1=" + this.valueForToken("airport_to_pickup") + "&";
			src += "rc1=" + this.valueForToken("pickup_location_city") + "&";
			src += "rd1=" + this.valueForToken("pickup_date") + "&";
			src += "ra2=" + this.valueForToken("airport_to_dropoff") + "&";
			src += "rc2=" + this.valueForToken("dropoff_location_city") + "&";
			src += "rd2=" + this.valueForToken("dropoff_date") + "&";
			src += "rc=" + this.valueForToken("car_class");
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
