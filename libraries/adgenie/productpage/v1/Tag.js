//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("adgenie.productpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product Page",
		async: true,
		description: "This tag should be placed on all product pages.",
		html: "<img src=\"https://adverts.adgenie.co.uk/genieTracker.php?adgCompanyID=${client_id}&adgItem=${product_id}\" height=\"1\" width=\"1\" />\n<img src=\"http://ib.adnxs.com/seg?add=446533&t=2\" width=\"1\" height=\"1\" />",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "adGENIE Client ID",
			description: "The ID of the company using adGENIE tag",
			token: "client_id",
			uv: ""
		}, {
			name: "adGENIE Product ID",
			description: "The ID of the product on the page",
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
