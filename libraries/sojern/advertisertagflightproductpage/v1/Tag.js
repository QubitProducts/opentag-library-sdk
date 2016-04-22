//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sojern.advertisertagflightproductpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Advertiser Tag - Flight Product Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product ID",
			description: "Product ID",
			token: "product_id",
			uv: ""
		}],
		categories:[
			"Audience Management"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		(new Image()).src = "https://beacon.sojern.com/p/1?fpid=" +
			this.valueForToken("product_id");
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
