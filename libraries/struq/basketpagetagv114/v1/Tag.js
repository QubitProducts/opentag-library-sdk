//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("struq.basketpagetagv114.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basket Page Tag v1.14",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Struq Basket Page Pixel ID",
			description: "",
			token: "pixelid",
			uv: ""
		}, {
			name: "Struq Product List",
			description: "",
			token: "products",
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
		var productArr = [];
		for (var i = 0, ii = this.valueForToken("products").length; i < ii; i++) {
			productArr.push(this.valueForToken("products")[i]);
		}
		var productStr = productArr.join(",");

		window._struqPI = window._struqPI || [];
		window._struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("pixelid"),
			route: '/s/sa/',
			collectData: false,
			data: [{
				title: "si",
				pid: productStr
			}],
			options: {
				timeoutMs: 2000,
				firstPartyDomain: '',
				firstPartyCookie: '',
				firstPartyUid: ''
			}
		}]);

		var struq = document.createElement('script');
		struq.type = 'text/javascript';
		struq.async = true;
		struq.src = ('https:' == document.location.protocol ? 'https://' :
			'http://') +
			'media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-14.js';
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
