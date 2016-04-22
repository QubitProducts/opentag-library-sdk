//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("affiliatewindow.mastertag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Master Tag",
		async: true,
		description: "The Affiliate Window Master Tag should run on all pages.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.dwin1.com/${MERCHANT_ID}.js",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Affiliate Window Merchant ID",
			description: "Affiliate Window Merchant ID",
			token: "MERCHANT_ID",
			uv: ""
		}],
		categories:[
			"Affiliate Networks"
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
