//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticseventtrackingdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Analytics Event Tracking DEPRECATED",
			async: true,
			description: "Allow the tracking of custom events on the page through Google Analytics. NOTE: This module does not load in Google Analytics, it simply allows for event tracking. The main GA script should be added separately.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Tag Id",
				description: "Individual Container Id",
				token: "TAG_ID",
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
			window._gaq = window._gaq || [];
			window._gaq.push(['_trackEvent',
				'' + this.valueForToken("category"),
				'' + this.valueForToken("action"),
				'' + this.valueForToken("label"),
				'' + this.valueForToken("value"),
				'' + this.valueForToken("non_interaction")
			]);
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
