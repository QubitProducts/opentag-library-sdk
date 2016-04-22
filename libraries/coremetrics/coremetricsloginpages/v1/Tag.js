//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("coremetrics.coremetricsloginpages.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "CoreMetrics - Login pages",
		async: true,
		description: "To be placed on login/signup completes, or after account updates.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "libs.coremetrics.com/eluminate.js",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Client ID",
			description: "Unique 8-digit Coremetrics-assigned account code.",
			token: "client_id",
			uv: ""
		}, {
			name: "Data collection method",
			description: "Boolean. true indicates Client Managed, false indicates Coremetrics Managed.",
			token: "data_collection_method",
			uv: ""
		}, {
			name: "Data collection domain",
			description: "The target domain for Coremetrics data collection requests.",
			token: "data_collection_domain",
			uv: ""
		}, {
			name: "Cookie Domain",
			description: "Should be set to the 2nd level site domain (“thesite.com”) of the domain.",
			token: "cookie_domain",
			uv: ""
		}, {
			name: "Page ID",
			description: "Uniquely identifies the 256 given ‘page’ in Coremetrics. Can be any alphanumeric string.",
			token: "page_id",
			uv: ""
		}, {
			name: "Category ID",
			description: "Category ID for the leaf 256 node to which this page belongs. Should match the id from a CDF file.",
			token: "category_id",
			uv: ""
		}, {
			name: "Registration ID",
			description: "The unique id of the user making the transaction.",
			token: "registration_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "User Email",
			description: "",
			token: "email",
			uv: "universal_variable.user.email"
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		// Top level settings	
		window.cmSetClientID(
			"" + this.valueForToken("client_id"),
			this.valueForToken("data_collection_method"),
			"" + this.valueForToken("data_collection_domain"),
			"" + this.valueForToken("cookie_domain")
		);

		// Track pageviews with whatever data we have
		window.cmCreatePageviewTag(
			"" + this.valueForToken("page_id"),
			"" + this.valueForToken("category_id")
		);

		// Connect the user who's just purchased with the session cookie
		window.cmCreateRegistrationTag(
			"" + this.valueForToken("registration_id"),
			"" + this.valueForToken("email")
		);
		/*~post*/
	}
});
