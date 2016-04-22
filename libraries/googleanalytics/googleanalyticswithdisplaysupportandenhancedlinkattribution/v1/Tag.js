//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticswithdisplaysupportandenhancedlinkattribution.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Analytics with display support and enhanced link attribution",
			async: true,
			description: "See https://support.google.com/analytics/answer/2444872 for details.\nEnhanced link attribution offers more-detailed reports, and disambiguates clicks to the same destination page that come from more than one element on the page. However, the additional detail comes at the cost of some speed in generating the report, so only turn it on if you need it.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "GA Profile ID",
				description: "The ID provided to you by Google Analytics",
				token: "google_id",
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
			var pluginUrl = "//www.google-analytics.com/plugins/ga/inpage_linkid.js";
			_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
			_gaq.push(['_setAccount', '' + this.valueForToken("google_id")]);
			_gaq.push(['_trackPageview']);
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
				'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
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
