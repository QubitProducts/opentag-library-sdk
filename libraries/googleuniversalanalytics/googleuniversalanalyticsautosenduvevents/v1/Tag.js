//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleuniversalanalytics.googleuniversalanalyticsautosenduvevents.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Universal Analytics - auto send UV events",
			async: true,
			description: "Automatically send UV events as GA events using Universal Analytics. Depends on the main Universal Analytics script.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [

			],
		categories:[
			"Web Analytics"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window.uv_listener.push(["on", "event",
				function(event) {

					var data = {
						hitType: "event",
						eventCategory: event.category,
						eventAction: event.action
					};

					// Add label and value
					if (event.label !== undefined) {
						data.eventLabel = event.label;
					}
					if (event.value !== undefined) {
						data.eventValue = event.value;
					}

					// Send the event
					ga("send", data);

				}
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
