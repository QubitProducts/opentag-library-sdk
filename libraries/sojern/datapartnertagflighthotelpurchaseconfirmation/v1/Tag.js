//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.datapartnertagflighthotelpurchaseconfirmation.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Data Partner Tag - Flight + Hotel Purchase Confirmation",
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
				description: "Blank string if not available",
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
			}, {
				name: "Gender",
				description: "1 for male 0 for female (Blank string if not available)",
				token: "gender",
				uv: ""
			}, {
				name: "First Name",
				description: "Blank string if not available",
				token: "first_name",
				uv: ""
			}, {
				name: "Hash of Frequent Flyer Number",
				description: "Blank string if not available",
				token: "frequent_flyer_hash",
				uv: ""
			}, {
				name: "Frequent Flyer Level",
				description: "Blank string if not available",
				token: "frequent_flyer_level",
				uv: ""
			}, {
				name: "Fare Code",
				description: "Blank string if not available",
				token: "fare_code",
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
				name: "Closest Airport to Hotel",
				description: "Blank string if not available",
				token: "airport_to_hotel",
				uv: ""
			}, {
				name: "Hotel Postcode",
				description: "Blank string if not available",
				token: "hotel_postcode",
				uv: ""
			}, {
				name: "Flight Purchase Price",
				description: "e.g. if price is $450.23 then pass 450 only",
				token: "flight_purchase_price",
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
				name: "Hotel Purchase Price",
				description: "e.g. if price is $450.23 then pass 450 only",
				token: "hotel_purchase_price",
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
				this.valueForToken("sojern_partner_key") + "/fc?";
			src += "fa1=" + this.valueForToken("origin_airport_code") + "&";
			src += "fa2=" + this.valueForToken("destination_airport_code") + "&";
			src += "fd1=" + this.valueForToken("departure_date") + "&";
			src += "fd2=" + this.valueForToken("return_date") + "&";
			src += "t=" + this.valueForToken("number_of_travellers") + "&";
			src += "fc=" + this.valueForToken("service_class") + "&";
			src += "fp=" + this.valueForToken("flight_purchase_price") + "&";
			src += "g=" + this.valueForToken("gender") + "&";
			src += "n=" + this.valueForToken("first_name") + "&";
			src += "fl=" + this.valueForToken("frequent_flyer_hash") + "&";
			src += "ffl=" + this.valueForToken("frequent_flyer_level") + "&";
			src += "ffc=" + this.valueForToken("fare_code") + "&";
			src += "hr=" + this.valueForToken("number_of_rooms") + "&";
			src += "hd1=" + this.valueForToken("checkin_date") + "&";
			src += "hd2=" + this.valueForToken("checkout_date") + "&";
			src += "hc1=" + this.valueForToken("city") + "&";
			src += "hs1=" + this.valueForToken("state") + "&";
			src += "hn1=" + this.valueForToken("country") + "&";
			src += "ha1=" + this.valueForToken("airport_to_hotel") + "&";
			src += "hz1=" + this.valueForToken("hotel_postcode") + "&";
			src += "hp=" + this.valueForToken("hotel_purchase_price") + "&";
			src += "hl=" + this.valueForToken("customer_loyalty_hash") + "&";
			src += "hc=" + this.valueForToken("room_type");
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
