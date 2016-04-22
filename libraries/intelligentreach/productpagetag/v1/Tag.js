//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelligentreach.productpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product Page Tag",
		async: true,
		description: "This tag should be applied to product pages only",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.ist-track.com/ContainerItemJavaScript.ashx?id=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Intelligent Reach ID",
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
			"Feed Management (Shopping Comparison)"
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
		window.istCompanyId = "" + this.valueForToken("id");
		window.istItem = "" + this.valueForToken("product_id");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
