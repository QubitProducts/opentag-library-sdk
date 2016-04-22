//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("prismastar.productpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product Page Tag",
		async: true,
		description: "To be placed on all product pages",
		html: "<img src=\"https://${GATEWAY_PREFIX}.cpr.prismastar.com/v2_0/recorder/?type=productPage&customerCode=${CUSTOMER_CODE}&order=${PRODUCT_ID}|1|${ITEM_PRICE}|${CATEGORY_CODE}\" style=\"display:none;\" />",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Gateway Prefix",
			description: "Your gateway prefix assigned by your PrismaStar account manager",
			token: "GATEWAY_PREFIX",
			uv: ""
		}, {
			name: "Customer Code",
			description: "Your customer code assigned by your PrismaStar account manager",
			token: "CUSTOMER_CODE",
			uv: ""
		}, {
			name: "Product ID",
			description: "The product ID or SKU used in the data feeds",
			token: "PRODUCT_ID",
			uv: "universal_variable.product.id"
		}, {
			name: "Price",
			description: "The individual price of this item",
			token: "ITEM_PRICE",
			uv: "universal_variable.product.unit_sale_price"
		}, {
			name: "Category",
			description: "The product category used in the data feeds (Optional)",
			token: "CATEGORY_CODE",
			uv: "universal_variable.product.category"
		}],
		categories:[
			"Web Analytics"
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
