//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sociomantic.deprecatedproductpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "{DEPRECATED} Product Page Tag",
		async: true,
		description: "This tracking code needs to go on all product pages in order to know which\nproducts user was interested in",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${ADVERTISER_TOKEN}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Advertiser Token",
			description: "Your Sociomantic customer ID. Please only use the token that has been created and sent to you.",
			token: "ADVERTISER_TOKEN",
			uv: ""
		}, {
			name: "Product Id",
			description: "Product identifier",
			token: "PRODUCT_ID",
			uv: "universal_variable.product.id"
		}],
		categories:[
			"Advertising Network"
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
		window.product = {
			identifier: '' + this.valueForToken("PRODUCT_ID")
		};
		window.product = product;
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
