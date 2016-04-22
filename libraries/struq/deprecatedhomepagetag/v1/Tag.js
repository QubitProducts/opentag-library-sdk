//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("struq.deprecatedhomepagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "[Deprecated] Home Page Tag",
		async: true,
		description: "To be placed on the homepage only",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Re-Targeting"
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
		window._struqPI = window._struqPI || [];

		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: 'PixelID',
			route: '/s/s/',
			collectData: false,
			options: {
				timeoutMs: 2000
			}
		}]);

		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
