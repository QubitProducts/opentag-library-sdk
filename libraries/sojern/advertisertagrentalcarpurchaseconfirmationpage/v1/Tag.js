//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagrentalcarpurchaseconfirmationpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Advertiser Tag - Rental Car Purchase Confirmation Page",
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
				name: "Nearest Airport to PickUp Location",
				description: "Assign blank string if not available",
				token: "pickup_nearest",
				uv: ""
			}, {
				name: "PickUp City",
				description: "Assign blank string if not available",
				token: "pickup_city",
				uv: ""
			}, {
				name: "PickUp Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "pickup_date",
				uv: ""
			}, {
				name: "Nearest Airport to DropOff Location",
				description: "Assign blank string if not available",
				token: "dropoff_nearest",
				uv: ""
			}, {
				name: "DropOff City",
				description: "Assign blank string if not available",
				token: "dropoff_city",
				uv: ""
			}, {
				name: "DropOff Date",
				description: "Assign blank string if not available",
				token: "dropoff_date",
				uv: ""
			}, {
				name: "Class of Car",
				description: "Assign blank string if not available",
				token: "car_class",
				uv: ""
			}, {
				name: "Number of Travellers",
				description: "Assign blank string if not available",
				token: "travellers",
				uv: ""
			}, {
				name: "Hash of Customer Loyalty Program Number",
				description: "Assign blank string if not available",
				token: "loyal",
				uv: ""
			}, {
				name: "Purchase Price",
				description: "if price is e.g. $450.23 then pass 450 only",
				token: "price",
				uv: ""
			}, {
				name: "Confirmation Number",
				description: "Confirmation Number",
				token: "id",
				uv: ""
			}, {
				name: "Language",
				description: "Assign blank string if not available",
				token: "language",
				uv: ""
			}, {
				name: "Country",
				description: "Assign blank string if not available",
				token: "country",
				uv: ""
			}, {
				name: "Age Range",
				description: "Assign blank string if not available",
				token: "age",
				uv: ""
			}, {
				name: "Discount/CDP/Club Code",
				description: "Assign blank string if not available",
				token: "discount",
				uv: ""
			}, {
				name: "Promotion Coupon",
				description: "Assign blank string if not available",
				token: "promotion",
				uv: ""
			}, {
				name: "Rate Code",
				description: "Assign blank string if not available",
				token: "rate",
				uv: ""
			}, {
				name: "Convention Number",
				description: "Assign blank string if not available",
				token: "convention",
				uv: ""
			}, {
				name: "Voucher Number",
				description: "Assign blank string if not available",
				token: "voucher",
				uv: ""
			}, {
				name: "ACRISS Car Code",
				description: "Assign blank string if not available",
				token: "acriss",
				uv: ""
			}, {
				name: "Base Rate",
				description: "Assign blank string if not available",
				token: "base",
				uv: ""
			}, {
				name: "Payment Method",
				description: "\"Now\" or \"Later\" (Assign blank string if not available)",
				token: "method",
				uv: ""
			}, {
				name: "Airline",
				description: "Assign blank string if not available",
				token: "airline",
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
			var src = "https://beacon.sojern.com/p/7?";
			src += "et=" + this.valueForToken("event") + "&";
			src += "ra1=" + this.valueForToken("pickup_nearest") + "&";
			src += "rc1=" + this.valueForToken("pickup_city") + "&";
			src += "rd1=" + this.valueForToken("pickup_date") + "&";
			src += "ra2=" + this.valueForToken("dropoff_nearest") + "&";
			src += "rc2=" + this.valueForToken("dropoff_city") + "&";
			src += "rd2=" + this.valueForToken("dropoff_date") + "&";
			src += "rc=" + this.valueForToken("car_class") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "rl=" + this.valueForToken("loyal") + "&";
			src += "rp=" + this.valueForToken("price") + "&";
			src += "g=" + this.valueForToken("gender") + "&";
			src += "n=" + this.valueForToken("name") + "&";
			src += "rconfno=" + this.valueForToken("id") + "&";
			src += "l=" + this.valueForToken("language") + "&";
			src += "c=" + this.valueForToken("country") + "&";
			src += "a=" + this.valueForToken("age") + "&";
			src += "rdc=" + this.valueForToken("discount") + "&";
			src += "rpc=" + this.valueForToken("promotion") + "&";
			src += "rrq=" + this.valueForToken("rate") + "&";
			src += "rcv=" + this.valueForToken("convention") + "&";
			src += "rit=" + this.valueForToken("voucher") + "&";
			src += "racris=" + this.valueForToken("acriss") + "&";
			src += "rrate=" + this.valueForToken("base") + "&";
			src += "rpnow=" + this.valueForToken("method") + "&";
			src += "rair=" + this.valueForToken("airline");
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
