//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mediaforge.category.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Category",
		async: true,
		description: "To be placed of Product Listing pages",
		html: "<script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}/?catID=${category_id}\"></script><!--@SRC@-->",
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
			name: "Category ID",
			description: "The name/ID that relates to the current product listing page",
			token: "category_id",
			uv: "universal_variable.page.subcategory"
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
