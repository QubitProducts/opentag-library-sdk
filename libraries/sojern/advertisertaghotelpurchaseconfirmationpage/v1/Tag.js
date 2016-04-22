//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.advertisertaghotelpurchaseconfirmationpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Advertiser Tag - Hotel Purchase Confirmation Page",
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
				name: "CheckIn Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "checkin",
				uv: ""
			}, {
				name: "Number of Nights",
				description: "Assign blank string if not available",
				token: "nights",
				uv: ""
			}, {
				name: "CheckOut Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "checkout",
				uv: ""
			}, {
				name: "City",
				description: "Assign blank string if not available",
				token: "city",
				uv: ""
			}, {
				name: "State",
				description: "2-letter postcode",
				token: "state",
				uv: ""
			}, {
				name: "Country",
				description: "country code (Assign blank string if not available)",
				token: "country",
				uv: ""
			}, {
				name: "Nearest Airport to Hotel",
				description: "Assign blank string if not available",
				token: "nearest",
				uv: ""
			}, {
				name: "Hotel Postcode",
				description: "Assign blank string if not available",
				token: "postcode",
				uv: ""
			}, {
				name: "Customer Postcode",
				description: "Assign blank string if not available",
				token: "customer_postcode",
				uv: ""
			}, {
				name: "Purchase Price",
				description: "If price is e.g. $450.23 then pass 450 only",
				token: "price",
				uv: ""
			}, {
				name: "Hash of customer loyalty program number",
				description: "Assign blank string if not available",
				token: "loyal",
				uv: ""
			}, {
				name: "Type of Room",
				description: "Assign blank string if not available",
				token: "room",
				uv: ""
			}, {
				name: "Confirmation Number",
				description: "Confirmation Number",
				token: "confirmation_id",
				uv: ""
			}, {
				name: "Hotel Star Rating",
				description: "Assign blank string if not available",
				token: "stars",
				uv: ""
			}, {
				name: "Hotel Brand",
				description: "Assign blank string if not available",
				token: "brand",
				uv: ""
			}, {
				name: "Hotel Property",
				description: "Assign blank string if not available",
				token: "property",
				uv: ""
			}, {
				name: "Hotel Loyalty Tier",
				description: "Assign blank string if not available",
				token: "tier",
				uv: ""
			}, {
				name: "Gender",
				description: "0 for male 1 for female (blank if not available)",
				token: "gender",
				uv: ""
			}, {
				name: "Customer's First Name",
				description: "blank if not available",
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
			var src = "https://beacon.sojern.com/p/5?";
			src += "et=" + this.valueForToken("event") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "hr=" + this.valueForToken("rooms") + "&";
			src += "hd=" + this.valueForToken("nights") + "&";
			src += "hd1=" + this.valueForToken("checkin") + "&";
			src += "hd2=" + this.valueForToken("checkout") + "&";
			src += "hc1=" + this.valueForToken("city") + "&";
			src += "hs1=" + this.valueForToken("state") + "&";
			src += "hn1=" + this.valueForToken("country") + "&";
			src += "ha1=" + this.valueForToken("nearest") + "&";
			src += "hz1=" + this.valueForToken("postcode") + "&";
			src += "hz2=" + this.valueForToken("customer_postcode") + "&";
			src += "hp=" + this.valueForToken("price") + "&";
			src += "g=" + this.valueForToken("gender") + "&";
			src += "n=" + this.valueForToken("name") + "&";
			src += "hl=" + this.valueForToken("loyal") + "&";
			src += "hc=" + this.valueForToken("room") + "&";
			src += "hconfo=" + this.valueForToken("confirmation_id") + "&";
			src += "hsr=" + this.valueForToken("stars") + "&";
			src += "hb=" + this.valueForToken("brand") + "&";
			src += "hpr=" + this.valueForToken("property") + "&";
			src += "hlt=" + this.valueForToken("tier");
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
