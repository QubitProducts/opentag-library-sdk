//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("kissmetrics.kissinsightssurvey.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "KissInsights Survey",
		async: true,
		description: "KISSInsights customer survey slider",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "s3.amazonaws.com/ki.js/${account_id}/${website_id}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account Id",
			description: "The account id of your KISS subscription - the first number in the URL",
			token: "account_id",
			uv: ""
		}, {
			name: "Website Id",
			description: "The id of the particular website - the last part of the URL before ''.js",
			token: "website_id",
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
		window._kiq = window._kiq || [];
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
