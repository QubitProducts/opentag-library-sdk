//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagflightpurchaseconfirmationpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Advertiser Tag - Flight Purchase Confirmation Page",
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
				name: "Origin Airport Code",
				description: "Assign blank string if not available",
				token: "origin",
				uv: ""
			}, {
				name: "Destination Airport Code",
				description: "Assign blank string if not available",
				token: "destination",
				uv: ""
			}, {
				name: "Departure Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "departure",
				uv: ""
			}, {
				name: "Return Date",
				description: "yyyy-mm-dd (Assign blank string if not available)",
				token: "return",
				uv: ""
			}, {
				name: "Number of Travellers",
				description: "Assign blank string if not available",
				token: "travellers",
				uv: ""
			}, {
				name: "Service Class",
				description: "Assign blank string if not available",
				token: "class",
				uv: ""
			}, {
				name: "Purchase Price",
				description: "if price is $450.23, pass 450 only",
				token: "price",
				uv: ""
			}, {
				name: "Customer PostCode",
				description: "Assign blank string if not available",
				token: "postcode",
				uv: ""
			}, {
				name: "Hash of Frequent Flyer Number",
				description: "Assign blank string if not available",
				token: "frequent",
				uv: ""
			}, {
				name: "Frequent Flyer Level",
				description: "Assign blank string if not available",
				token: "level",
				uv: ""
			}, {
				name: "Fare Code",
				description: "Assign blank string if not available",
				token: "fare",
				uv: ""
			}, {
				name: "Confirmation Number",
				description: "Assign blank string if not available",
				token: "id",
				uv: ""
			}, {
				name: "Airline Name",
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
			var src = "https://beacon.sojern.com/p/3?";
			src += "et=" + this.valueForToken("event") + "&";
			src += "fa1=" + this.valueForToken("origin") + "&";
			src += "fa2=" + this.valueForToken("destination") + "&";
			src += "fd1=" + this.valueForToken("departure") + "&";
			src += "fd2=" + this.valueForToken("return") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "fc=" + this.valueForToken("class") + "&";
			src += "fp=" + this.valueForToken("price") + "&";
			src += "g=" + this.valueForToken("gender") + "&";
			src += "n=" + this.valueForToken("name") + "&";
			src += "fz1=" + this.valueForToken("postcode") + "&";
			src += "fl=" + this.valueForToken("frequent") + "&";
			src += "ffl=" + this.valueForToken("level") + "&";
			src += "ffc=" + this.valueForToken("fare") + "&";
			src += "fconfno=" + this.valueForToken("id") + "&";
			src += "fan=" + this.valueForToken("airline");
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
