//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("marinsoftware.clicktrackingtag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Click Tracking Tag",
		async: true,
		description: "The Marin Click Tracking Tag helps Marin to capture all sources of website traffic, and set a 1st party cookie enabling it to apply deeper insights to measure their return on investment for media managed in the Marin Enterprise platform. The Marin Click Tracking Tag is to be exposed on all landing pages of the website, ideally by being placed in a global template such as a footer template.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Marin Tracking ID",
			description: "Marin Tracking ID",
			token: "marin_tracking_id",
			uv: ""
		}],
		categories:[
			"Search Engine"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window._mTrack = window._mTrack || [];
		_mTrack.push(['trackPage']);

		var mClientId = "" + this.valueForToken("marin_tracking_id");
		var mProto = ('https:' == document.location.protocol ? 'https://' :
			'http://');
		var mHost = 'tracker.marinsm.com';
		var mt = document.createElement('script');
		mt.type = 'text/javascript';
		mt.async = true;
		mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
		var fscr = document.getElementsByTagName('script')[0];
		fscr.parentNode.insertBefore(mt, fscr);
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
