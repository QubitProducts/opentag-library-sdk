//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("snowplowanalytics.snowploweventtracker.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Snowplow EventTracker",
		async: true,
		description: "Tag for getting SnowPlow to track all UV events into your custom SnowPlow system. Must be set to depend on the SnowPlow PageTracker.",
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
		window.uv_listener.push(['on', 'event',
			function(event) {
				if (event && event.type && event.type === "struct") {
					_snaq.push(['trackStructEvent', event.category || "", event.action || "",
						event.label || "", event.property || "", event.value || ""
					]);
				}
			}
		]);

		window.uv_listener.push(['on', 'event',
			function(event) {
				if (event && event.type && event.type === "unstruct") {
					_snaq.push(['trackUnstructEvent', event.name || "", event.properties || {}]);
				}
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
