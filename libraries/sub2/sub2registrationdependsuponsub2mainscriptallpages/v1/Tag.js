//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sub2.sub2registrationdependsuponsub2mainscriptallpages.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Sub2 - Registration (depends upon \"Sub2 - Main Script - All Pages\")",
			async: true,
			description: "This script should be added to all pages on the site which capture customer contact details, such as email address. \nThe code can be placed on the page such as the Thank You page following registration/newsletter sign up or can be executed \non clicking on the submit button.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "First Name",
				description: "If not available, leave blank",
				token: "firstname",
				uv: ""
			}, {
				name: "Last Name",
				description: "If not available, leave blank",
				token: "lastname",
				uv: ""
			}, {
				name: "Email",
				description: "If not available, leave blank",
				token: "email",
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
			var waitFor_S2Tech_StoreRegistrationData = setInterval(function() {
				if (typeof S2Tech_StoreRegistrationData === 'function') {
					clearInterval(waitFor_S2Tech_StoreRegistrationData);

					S2Tech_StoreRegistrationData(
						"" + _this.valueForToken("firstname"),
						"" + _this.valueForToken("lastname"),
						"" + _this.valueForToken("email"));
				}
			}, 100);

			setTimeout(function() {
				clearInterval(waitFor_S2Tech_StoreRegistrationData);
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
