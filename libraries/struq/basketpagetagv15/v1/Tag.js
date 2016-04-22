//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("struq.basketpagetagv15.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basket Page Tag v1.5",
		async: true,
		description: "To be placed on the basket page only",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pixel id",
			description: "The identifier unique to each Struq tag",
			token: "id",
			uv: ""
		}, {
			name: "Product Id List",
			description: "",
			token: "product_id_list",
			uv: "universal_variable.basket.line_items[#].product.id"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		window._struqPI = window_struqPI || [];

		var productArr = [];
		for (var i = 0, ii = this.valueForToken("product_id_list").length; i < ii; i++) {
			productArr.push(this.valueForToken("product_id_list")[i]);
		}

		windowproductIDStr = productArr.join(",");

		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: "" + this.valueForToken("id"),
			route: '/s/s/',
			collectData: false,
			data: [{
				title: "si",
				pid: productIDStr
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
