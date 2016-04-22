//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("struq.productpagetagv15.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product Page tag v1.5",
		async: true,
		description: "To be placed on the product page only",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pixel ID",
			description: "",
			token: "id",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
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
		window._struqPI = window._struqPI || [];
		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("id"),
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
		var script = document.createElement("script");
		script.src =
			"//media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js";
		document.body.appendChild(script);
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
