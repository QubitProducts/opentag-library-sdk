//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("coremetrics.coremetricsconversionpages.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "CoreMetrics - Conversion Pages",
		async: true,
		description: "To be placed on non-ecommerce conversion pages (e.g. user signups)",
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
			name: "Event ID",
			description: "A unique identifier for the type of conversion, such as “Account Creation” or “Special Registration\"",
			token: "event_id",
			uv: ""
		}, {
			name: "Action Type",
			description: "A value of “1” or “2” depending upon whether a successful conversion is generated.",
			token: "action_type",
			uv: ""
		}, {
			name: "Event Category ID",
			description: "Allows grouping of event IDs into categories.",
			token: "event_category_id",
			uv: ""
		}, {
			name: "Points",
			description: "A point value used in establishing an arbitrary “value” for a conversion.",
			token: "points",
			uv: ""
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
		cmSetClientID(
			"" + this.valueForToken("client_id"),
			this.valueForToken("data_collection_method"),
			"" + this.valueForToken("data_collection_domain"),
			"" + this.valueForToken("cookie_domain")
		);

		// Extra custom attributes
		var attributeString, extraFieldString;

		// Track pageviews with whatever data we have
		cmCreatePageviewTag(
			"" + this.valueForToken("page_id"),
			"" + this.valueForToken("category_id")
		);

		// Create the custom event
		cmCreateConversionEventTag(
			"" + this.valueForToken("event_id"),
			"" + this.valueForToken("action_type"),
			"" + this.valueForToken("event_category_id"),
			"" + this.valueForToken("points"),
			attributeString,
			extraFieldString
		);
		/*~post*/
	}
});
