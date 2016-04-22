//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("calltrackingmetrics.trackingcode.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Tracking Code",
		async: true,
		description: "By assigning a tracking number to each campaign you want to track, you can link calls back to the campaign. Dynamic tracking code placed on your website will enable your business phone number to update to the correct tracking number based on how a visitor found your site.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.tctm.co/t.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "CallTrackingMetrics Client ID",
			description: "The client ID given to you in your generated code from CallTrackingMetrics",
			token: "client_id",
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
