//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("vero.core.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Vero Core",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "API Key",
			description: "Your Vero API key",
			token: "api_key",
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
		window._veroq = window._veroq || [];
		window._veroq.push(['init', { api_key: this.valueForToken("api_key") }]);
		(function(){ var ve = document.createElement('script'); ve.type = 'text/javascript'; ve.async = true; ve.src = '//d3qxef4rp70elm.cloudfront.net/m.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ve, s); })();
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
