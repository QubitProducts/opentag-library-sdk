//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"coremetrics.coremetricsconversionevents.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "CoreMetrics - Conversion Events",
			async: true,
			description: "Track custom conversion events with CoreMetrics. Note that this tag depends on other CoreMetrics tags having already loaded on the page.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
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
				name: "Event category id",
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
			cmCreateConversionEventTag(
				"" + this.valueForToken("event_id"),
				"" + this.valueForToken("action_type"),
				"" + this.valueForToken("event_category_id"),
				"" + this.valueForToken("points")
			);
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
