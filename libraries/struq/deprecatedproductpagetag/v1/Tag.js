//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("struq.deprecatedproductpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "[Deprecated] Product Page Tag",
		async: true,
		description: "To be placed on the product page only",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product ID",
			description: "ID for the product on the current page",
			token: "product_id",
			uv: "universal_variable.product.id"
		}],
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
			data: [{
				title: "detail",
				pid: "" + this.valueForToken("product_id")
			}],
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
