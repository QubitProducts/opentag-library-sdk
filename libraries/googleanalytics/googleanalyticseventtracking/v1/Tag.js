//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticseventtracking.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Analytics Event Tracking",
			async: true,
			description: "Allow the tracking of custom events on the page through Google Analytics. NOTE: This module does not load in Google Analytics, it simply allows for event tracking. The main GA script should be added separately.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Event Category",
				description: "Required. The name you supply for the group of objects you want to track.",
				token: "category",
				uv: ""
			}, {
				name: "Event Action",
				description: "Required. A string paired with each category. Used to define the type of interaction.",
				token: "action",
				uv: ""
			}, {
				name: "Event Label",
				description: "An optional string to provide additional dimensions to the event data.",
				token: "label",
				uv: ""
			}, {
				name: "Event Value",
				description: "An integer that you can use to provide numerical data about the user event.",
				token: "value",
				uv: ""
			}, {
				name: "Event Non Interaction",
				description: "A boolean that when set to true, the event hit will not be used in bounce-rate calculation.",
				token: "non_interaction",
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
			window._gaq.push(['_trackEvent', '' + this.valueForToken("category"),
				'' + this.valueForToken("action"), '' + this.valueForToken("label"),
				this.valueForToken("value"), this.valueForToken("non_interaction")
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
