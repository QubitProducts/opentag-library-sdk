//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sub2.sub2contactdetailsdependsuponsub2mainscriptallpages.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Sub2 - Contact Details (depends upon \"Sub2 - Main Script - All pages\")",
			async: true,
			description: "The purpose of this script is to capture the relevant contact details of any visitor to the site who has provided these details as part of the order, account creation or brochure request process. It should fire on all pages that contain these details.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Title",
				description: "e.g. Mr - if not available, leave blank",
				token: "title",
				uv: ""
			}, {
				name: "First Name",
				description: "e.g. John - if not available, leave blank",
				token: "firstname",
				uv: ""
			}, {
				name: "Last Name",
				description: "e.g. Smith - if not available, leave blank",
				token: "lastname",
				uv: ""
			}, {
				name: "Address",
				description: "e.g. 20 Some Street - if not available, leave blank",
				token: "address",
				uv: ""
			}, {
				name: "Postcode",
				description: "e.g. W1F 8HT - if not available, leave blank",
				token: "postcode",
				uv: ""
			}, {
				name: "Email",
				description: "e.g. john.smith@someemail.com - if not available, leave blank",
				token: "email",
				uv: ""
			}, {
				name: "Landline",
				description: "e.g. 07123456789 - if not available, leave blank",
				token: "landline",
				uv: ""
			}, {
				name: "Mobile",
				description: "e.g. 07123456789 - if not available, leave blank",
				token: "mobile",
				uv: ""
			}, {
				name: "OptIns",
				description: "Y if user wants to be contacted, N if not",
				token: "OptIns",
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
			var _this = this;
			var waitFor_S2Tech_MatchData_NA = setInterval(function() {
				if (typeof S2Tech_MatchData_NA === 'function') {
					clearInterval(waitFor_S2Tech_MatchData_NA);

					S2Tech_MatchData_NA("" + _this.valueForToken("title"), "" + _this.valueForToken(
							"firstname"), "" + _this.valueForToken("lastname"), "" +
						_this.valueForToken("address"), "" + _this.valueForToken("postcode") +
						"", "" + _this.valueForToken("email"), "" + _this.valueForToken(
							"landline"), "" + _this.valueForToken("mobile"), "" + _this.valueForToken(
							"OptIns"));
				}
			}, 100);

			setTimeout(function() {
				clearInterval(waitFor_S2Tech_MatchData_NA);
			}, 5000);
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
