//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("piwik.piwikbasic.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Piwik - Basic",
		async: true,
		description: "Implement the basic Piwik pageview and link tracking.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "${piwik_url}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Piwik URL",
			description: "The URL of your website",
			token: "piwik_url",
			uv: ""
		}, {
			name: "Piwik Site ID",
			description: "The ID of your website",
			token: "piwik_site_id",
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
		var _paq = _paq || [];

		/*~pre*/
	},
	post: function() {
		/*post*/
		window.piwikTracker = Piwik.getTracker(this.valueForToken("piwik_url") +
				"piwik.php", 1);
		piwikTracker.trackPageView();
		piwikTracker.enableLinkTracking();
		/*~post*/
	}
});
