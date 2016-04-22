//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sojern.datapartnertagrentalcarsearch.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Data Partner Tag - Rental Car Search",
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
			name: "Closest Airport to Car Pick-Up Location",
			description: "Blank string if not available",
			token: "airport_to_pickup",
			uv: ""
		}, {
			name: "Car Pick-Up City",
			description: "Blank string if not available",
			token: "pickup_city",
			uv: ""
		}, {
			name: "Car Pick-Up Date",
			description: "yyyy-mm-dd (Blank string if not available)",
			token: "pickup_date",
			uv: ""
		}, {
			name: "Closest Airport to Car Drop-Off Location",
			description: "Blank string if not available",
			token: "airport_to_dropoff",
			uv: ""
		}, {
			name: "Car Drop-Off City",
			description: "Blank string if not available",
			token: "dropoff_city",
			uv: ""
		}, {
			name: "Car Drop-Off Date",
			description: "yyyy-mm-dd (Blank string if not available)",
			token: "dropoff_date",
			uv: ""
		}, {
			name: "Class of Car",
			description: "Blank string if not available",
			token: "car_class",
			uv: ""
		}, {
			name: "Number of Travellers",
			description: "Blank string if not available",
			token: "number_of_travellers",
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
			this.valueForToken("sojern_partner_key") + "/rs?";
		src += "ra1=" + this.valueForToken("airport_to_pickup") + "&";
		src += "rc1=" + this.valueForToken("pickup_city") + "&";
		src += "rd1=" + this.valueForToken("pickup_date") + "&";
		src += "ra2=" + this.valueForToken("airport_to_dropoff") + "&";
		src += "rc2=" + this.valueForToken("dropoff_city") + "&";
		src += "rd2=" + this.valueForToken("dropoff_date") + "&";
		src += "rc=" + this.valueForToken("car_class") + "&";
		src += "t=" + this.valueForToken("number_of_travellers");
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
