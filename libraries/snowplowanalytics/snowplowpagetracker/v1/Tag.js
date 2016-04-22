//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("snowplowanalytics.snowplowpagetracker.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Snowplow PageTracker",
		async: true,
		description: "Snowplow Analytics is a web analytics platform. Rather than deliver a canned set of reports, Snowplow delivers your granular, event-level and customer-level data into your own data warehouse, so you can perform any analysis on that data you want, with any tool you want, including Tableau, Excel, R, ChartIO etc.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Cloudfront Domain",
			description: "Your cloudfront domain hosting Snowplow",
			token: "cloudfront",
			uv: ""
		}, {
			name: "Site ID",
			description: "The ID of your site",
			token: "siteid",
			uv: ""
		}, {
			name: "Cookie Domain",
			description: "The cookie domain for your tracking",
			token: "cookiedomain",
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
		window._snaq = window._snaq || [];

		_snaq.push(['setCollectorCf', '' + this.valueForToken("cloudfront")]);
		_snaq.push(['setAppId', '' + this.valueForToken("siteid")]);
		_snaq.push(['setCookieDomain', '' + this.valueForToken("cookiedomain")])
		_snaq.push(['trackPageView']);

		var sp = document.createElement('script');
		sp.type = 'text/javascript';
		sp.async = true;
		sp.defer = true;
		sp.src = ('https:' == document.location.protocol ? 'https' : 'http') +
			'://d1fc8wv8zag5ca.cloudfront.net/0.12.0/sp.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(sp, s);
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
