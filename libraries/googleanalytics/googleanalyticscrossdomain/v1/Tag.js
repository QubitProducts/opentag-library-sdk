//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticscrossdomain.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Analytics - Cross domain",
			async: true,
			description: "Setup cross domain tracking with GA, using setDomainName and setAllowLinker.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "GA Profile ID",
				description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
				token: "profile_id",
				uv: ""
			}, {
				name: "Domain Name",
				description: "The custom domain you want to use, e.g. mydomain.com, subdomain.mydomain.com",
				token: "domain_name",
				uv: ""
			}, {
				name: "Allow Linker",
				description: "Set to true if you want to enable cross domain tracking, set to false otherwise. (boolean)",
				token: "allow_linker",
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
			_gaq.push(['_setAccount', '' + this.valueForToken("profile_id")]);
			_gaq.push(['_setDomainName', '' + this.valueForToken("domain_name")]);
			_gaq.push(['_setAllowLinker', this.valueForToken("allow_linker")]);
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
