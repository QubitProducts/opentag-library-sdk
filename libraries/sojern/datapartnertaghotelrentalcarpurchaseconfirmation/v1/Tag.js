//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.datapartnertaghotelrentalcarpurchaseconfirmation.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Data Partner Tag - Hotel + Rental Car Purchase Confirmation",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Number of Travellers",
				description: "Blank string if not available",
				token: "number_of_travellers",
				uv: ""
			}, {
				name: "Number of Rooms",
				description: "Blank string if not available",
				token: "number_of_rooms",
				uv: ""
			}, {
				name: "Check-In Date",
				description: "yyyy-mm-dd (Blank string if not available)",
				token: "checkin_date",
				uv: ""
			}, {
				name: "Check-Out Date",
				description: "yyyy-mm-dd (Blank string if not available)",
				token: "checkout_date",
				uv: ""
			}, {
				name: "City",
				description: "Blank string if not available",
				token: "city",
				uv: ""
			}, {
				name: "State",
				description: "2-letter postcode (Blank string if not available)",
				token: "state",
				uv: ""
			}, {
				name: "Country",
				description: "2-letter code (Blank string if not available)",
				token: "country",
				uv: ""
			}, {
				name: "Closest Airport to Hotel Location",
				description: "Blank string if not available",
				token: "airport_to_hotel",
				uv: ""
			}, {
				name: "Hotel Postcode",
				description: "Blank string if not available",
				token: "hotel_postcode",
				uv: ""
			}, {
				name: "Hotel Purchase Price",
				description: "e.g. if price is $450.23 then pass 405 only",
				token: "hotel_purchase_price",
				uv: ""
			}, {
				name: "Gender",
				description: "0 for male 1 for female (Blank string if not available)",
				token: "gender",
				uv: ""
			}, {
				name: "First Name",
				description: "Blank string if not available",
				token: "first_name",
				uv: ""
			}, {
				name: "Hash of Customer Loyalty Program Number",
				description: "Blank string if not available",
				token: "customer_loyalty_hash",
				uv: ""
			}, {
				name: "Room Type",
				description: "Blank string if not available",
				token: "room_type",
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
				description: "Blank string if not available",
				token: "dropoff_date",
				uv: ""
			}, {
				name: "Class of Car",
				description: "Blank string if not available",
				token: "car_class",
				uv: ""
			}, {
				name: "Car Purchase Price",
				description: "Blank string if not available",
				token: "car_purchase_price",
				uv: ""
			}, {
				name: "Sojern Partner Key",
				description: "Sojern Partner Key",
				token: "sojern_partner_key",
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
				this.valueForToken("sojern_partner_key") + "/hc?";
			src += "t=" + this.valueForToken("number_of_travellers") + "&";
			src += "hr=" + this.valueForToken("number_of_rooms") + "&";
			src += "hd1=" + this.valueForToken("checkin_date") + "&";
			src += "hd2=" + this.valueForToken("checkout_date") + "&";
			src += "hc1=" + this.valueForToken("city") + "&";
			src += "hs1=" + this.valueForToken("state") + "&";
			src += "hn1=" + this.valueForToken("country") + "&";
			src += "ha1=" + this.valueForToken("airport_to_hotel") + "&";
			src += "hz1=" + this.valueForToken("hotel_postcode") + "&";
			src += "hp=" + this.valueForToken("hotel_purchase_price") + "&";
			src += "g=" + this.valueForToken("gender") + "&";
			src += "n=" + this.valueForToken("first_name") + "&";
			src += "hl=" + this.valueForToken("customer_loyalty_hash") + "&";
			src += "hc=" + this.valueForToken("room_type") + "&";
			src += "ra1=" + this.valueForToken("airport_to_pickup") + "&";
			src += "rc1=" + this.valueForToken("pickup_city") + "&";
			src += "rd1=" + this.valueForToken("pickup_date") + "&";
			src += "ra2=" + this.valueForToken("airport_to_dropoff") + "&";
			src += "rc2=" + this.valueForToken("dropoff_city") + "&";
			src += "rd2=" + this.valueForToken("dropoff_date") + "&";
			src += "rc=" + this.valueForToken("car_class") + "&";
			src += "rl=" + this.valueForToken("customer_loyalty_hash") + "&";
			src += "rp=" + this.valueForToken("car_purchase_price");
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
