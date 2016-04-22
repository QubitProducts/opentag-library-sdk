//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("adform.globaltrackingpointpageviewonly.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Global Tracking Point (Pageview only)",
		async: true,
		description: "Adform's Global Tracking Point is a tracking point which can be inserted on all your web pages automatically via your CMS. This solution is geared towards e-commerce platforms and other websites with a large number of pages to be tracked. This point provides only pageview tracking.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "//track.adform.net/serving/scripts/trackpoint/async/",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Page Name",
			description: "Unique name defining the page being viewed, without any url parameters.",
			token: "page_name",
			uv: ""
		}, {
			name: "Adform Campaign ID",
			description: "The campaign ID Adform has assigned to you.",
			token: "campaign_id",
			uv: ""
		}, {
			name: "Page Divider",
			description: "The token used to divide sections of the page name - '/' for urls, for example.",
			token: "divider",
			uv: ""
		}],
		categories:[
			"Advertising Network"
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
		window.adfname = '' + this.valueForToken("page_name");
		window._adftrack = {
			pm: '' + this.valueForToken("campaign_id"),
			pagename: encodeURIComponent(adfname),
			divider: encodeURIComponent('' + this.valueForToken("divider"))
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
