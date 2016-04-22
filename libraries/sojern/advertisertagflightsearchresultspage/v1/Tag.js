//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagflightsearchresultspage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Advertiser Tag - Flight Search Results Page",
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
				description: "Event Type",
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
				description: "yyyy-mm-dd",
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
				name: "Encrypted Loyalty Number",
				description: "Assign blank string if not available",
				token: "loyal",
				uv: ""
			}, {
				name: "Vacation Loyalty Number",
				description: "Assign blank string if not available",
				token: "vacation_loyal",
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
			var src = "https://beacon.sojern.com/p/2?";
			src += "et=" + this.valueForToken("event") + "&";
			src += "fa1=" + this.valueForToken("origin") + "&";
			src += "fa2=" + this.valueForToken("destination") + "&";
			src += "fd1=" + this.valueForToken("departure") + "&";
			src += "fd2=" + this.valueForToken("return") + "&";
			src += "t=" + this.valueForToken("travellers") + "&";
			src += "fc=" + this.valueForToken("class") + "&";
			src += "fl=" + this.valueForToken("loyal") + "&";
			src += "vl=" + this.valueForToken("vacation_loyal");
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
