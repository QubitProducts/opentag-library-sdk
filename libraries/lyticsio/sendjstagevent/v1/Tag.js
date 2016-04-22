//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("lyticsio.sendjstagevent.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Send JSTag event",
		async: true,
		description: "Requires the Initiate JSTag script to be on the page first.\nIt sends an event to JSTag in the form of valid JSON.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "JSTag Data",
			description: "JSON stringified valid JSON data to send to Lytics i.e. \"{\\\"event-happened\\\":true}\"",
			token: "event_json",
			uv: ""
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		if (window.jstag && jstag.send && window.JSON) {
			try {
				var data = this.valueForToken("event_json");
				jstag.send(data);
			} catch (e) {}
		}
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
