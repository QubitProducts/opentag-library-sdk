//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mediaforge.product.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product",
		async: true,
		description: "To be placed on product display pages.",
		html: "<script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}/?prodID=${product_id}\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "mediaFORGE Merchant ID",
			description: "The ID that relates you to mediaFORGE",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Product ID",
			description: "The product ID / SKU of the product on the current product display page",
			token: "product_id",
			uv: "universal_variable.product.sku_code"
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
