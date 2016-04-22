//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("evidon.eusitenotice.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "EU Site Notice",
		async: true,
		description: "This tag handles the Site Notice functionality for EU sites, both for implied and explicit consent notices. Must be filtered to fire on page types corresponding to individual PIDs (which are available via Evidon).",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Evidon Company ID",
			description: "The ID assigned to you by Evidon",
			token: "client_id",
			uv: ""
		}, {
			name: "Evidon Page ID",
			description: "The unique identifier for the page this tag will be fired on",
			token: "page_id",
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
		var hn = document.createElement('script');
		hn.type = 'text/javascript';
		hn.async = true;
		hn.setAttribute('data-ev-hover-pid', this.valueForToken("page_id"));
		hn.setAttribute('data-ev-hover-ocid', this.valueForToken("client_id"));
		hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
			'c.betrad.com/geo/h1.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(hn, s);
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
