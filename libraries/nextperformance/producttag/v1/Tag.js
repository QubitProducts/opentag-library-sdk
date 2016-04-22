//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("nextperformance.producttag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product Tag",
		async: true,
		description: "Tag to be inserted on the product pages, requires product ID.  For dynamic banners campaigns, the website's ID must be the same as in the product feed.",
		html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}&pid=${productId}\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account (zid)",
			description: "zid value provided by NextPerformance",
			token: "zid",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "productId",
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
