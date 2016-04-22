//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("visualdna.basketadditionreport.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basket Addition Report",
		async: true,
		description: "This tag should fire when a user adds an item to their basket. The tag must have a dependency on the Visual DNA Page View Report tag.",
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
		}, {
			name: "Product Name",
			description: "Product Name",
			token: "product_name",
			uv: ""
		}, {
			name: "Product Category",
			description: "Product Category",
			token: "product_category",
			uv: ""
		}, {
			name: "Product Unit Sale Price",
			description: "Product Unit Sale Price",
			token: "price",
			uv: ""
		}, {
			name: "Currency",
			description: "Currency",
			token: "currency",
			uv: ""
		}, {
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		window.VDNA.queue.push({
			apiKey: "" + this.valueForToken("api_key"),
			method: "reportConversion",
			args: ["added_to_basket", {
				"product_id": "" + this.valueForToken("product_id"),
				"partner_user_id_type": "" + this.valueForToken("product_id"),
				"product_name": "" + this.valueForToken("product_name"),
				"product_category_id": "" + this.valueForToken("product_category"),
				"product_price": "" + this.valueForToken("price"),
				"currency": "" + this.valueForToken("currency")
			}]
		});
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
