//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.datapartnertaghotelpurchaseconfirmation.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Data Partner Tag - Hotel Purchase Confirmation",
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
				name: "Closest Airport to hotel",
				description: "Blank string if not available",
				token: "airport_to_hotel",
				uv: ""
			}, {
				name: "Hotel Postcode",
				description: "Blank string if not available",
				token: "hotel_postcode",
				uv: ""
			}, {
				name: "Purchase Price",
				description: "e.g. if price is $450.23 then pass 450 only",
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
