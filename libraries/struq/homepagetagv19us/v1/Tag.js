//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("struq.homepagetagv19us.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Homepage Tag v1.9 (US)",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Struq Homepage Tracking ID",
			description: "The Struq Homepage tracking pixel ID",
			token: "pixelid",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		window._struqPI = window._struqPI || [];
		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("pixelid"),
			route: '/s/ga/',
			collectData: false,
			options: {
				timeoutMs: 2000,
				firstPartyDomain: '',
				firstPartyCookie: '',
				firstPartyUid: ''
			}
		}]);

		window.struq = document.createElement('script');
		struq.type = 'text/javascript';
		struq.async = true;
		struq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
			'media.struq.com/content/scripts/Struq_Us_Pixel_Injector_min_v1-9.js';
		document.getElementsByTagName('head')[0].appendChild(struq);
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
