//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.datapartnertagflightpurchaseconfirmation.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Data Partner Tag - Flight Purchase Confirmation",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Origin Airport Code",
				description: "Blank string if not available",
				token: "origin_airport_code",
				uv: ""
			}, {
				name: "Sojern Partner Key",
				description: "Sojern Partner Key",
				token: "sojern_partner_key",
				uv: ""
			}, {
				name: "Destination Airport Code",
				description: "Sojern Partner Key",
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
				name: "Purchase Price",
				description: "e.g. if price is $450.23 then pass 450 only",
				token: "purchase_price",
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
			src += "fp=" + this.valueForToken("purchase_price") + "&";
			src += "g=" + this.valueForToken("gender") + "&";
			src += "n=" + this.valueForToken("first_name") + "&";
			src += "fl=" + this.valueForToken("frequent_flyer_hash") + "&";
			src += "ffl=" + this.valueForToken("frequent_flyer_level") + "&";
			src += "ffc=" + this.valueForToken("fare_code");
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
