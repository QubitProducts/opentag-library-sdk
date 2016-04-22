//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.productpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product Page",
		async: true,
		description: "Peerius tag for the product page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "Language of the page the tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is to be implemented",
			token: "client_id",
			uv: ""
		}, {
			name: "Peerius Product ID",
			description: "The id for the product on the current product page",
			token: "product_id",
			uv: "universal_variable.product.id"
		}],
		categories:[
			"Personalisation Platform"
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
		window.PeeriusCallbacks = {
			track: {
				type: "product",
				lang: "" + this.valueForToken("lang"),
				product: {
					refCode: "" + this.valueForToken("product_id")
				}
			}
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
