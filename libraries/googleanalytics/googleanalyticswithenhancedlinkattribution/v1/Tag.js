//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticswithenhancedlinkattribution.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Analytics with Enhanced Link Attribution",
			async: true,
			description: "Enhanced link attribution offers more-detailed reports, and disambiguates clicks to the same destination page that come from more than one element on the page. However, the additional detail comes at the cost of some speed in generating the report, so only turn it on if you need it.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "GA Profile Id",
				description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
				token: "PROFILE_ID",
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
			var pluginUrl =
				'//www.google-analytics.com/plugins/ga/inpage_linkid.js';
			_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
			_gaq.push(['_setAccount', '' + this.valueForToken("PROFILE_ID")]);
			_gaq.push(['_trackPageview']);
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
				'http://www') + '.google-analytics.com/ga.js';
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
