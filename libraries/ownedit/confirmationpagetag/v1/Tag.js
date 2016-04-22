//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("ownedit.confirmationpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Page Tag",
		async: true,
		description: "Owned it is integrated at the order confirmation page of a store. Owned it allocates a unique store ID for each\nstore to manage, test and analyse post-purchase campaigns from its back end.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.ownedit.com/ownedit_js/ownedit.js?store_id=${STORE_ID}&anchor=${DIV_CLASS_NAME}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Store Id",
			description: "Each store is allocated a unique store ID by Owned it.",
			token: "STORE_ID",
			uv: ""
		}, {
			name: "Anchor Div Class",
			description: "It is a Div on the order confirmation page with unique class name for the call-to-action banner",
			token: "DIV_CLASS_NAME",
			uv: ""
		}, {
			name: "User Email",
			description: "Email address of the customer",
			token: "USER_EMAIL",
			uv: "universal_variable.user.email"
		}, {
			name: "Order Id",
			description: "Order Id of the purchase",
			token: "ORDER_ID",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Product Name",
			description: "Name of the product",
			token: "PRODUCT_NAME",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product URL",
			description: "URL of the product page",
			token: "PRODUCT_URL",
			uv: "universal_variable.transaction.line_items[#].product.url"
		}, {
			name: "Product Description",
			description: "Short description of the product",
			token: "PRODUCT_DESC",
			uv: "universal_variable.transaction.line_items[#].product.description"
		}, {
			name: "Product Image URL",
			description: "URL of the product image",
			token: "PRODUCT_IMAGE_URL",
			uv: "universal_variable.transaction.line_items[#].product.image_url"
		}, {
			name: "Product Price",
			description: "Price of the product",
			token: "PRODUCT_PRICE",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Currency",
			description: "Currency Code",
			token: "PRODUCT_CURRENCY",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Product SKU",
			description: "SKU of the product",
			token: "PRODUCT_SKU",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Product Id",
			description: "Unique identifier for the product within the catalog",
			token: "PRODUCT_IDS",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Category",
			description: "Category of the product: e.g. Electronics",
			token: "PRODUCT_CATEGORY",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Product Quantity",
			description: "Number of units of the product purchased",
			token: "PRODUCT_QUANTITY",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Store Name",
			description: "The name of the store that would be displayed on referrals",
			token: "STORE_NAME",
			uv: ""
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
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
		var _this = this;

		function post_to_owned_it() {
			var details = {
				"customer_email": "" + _this.valueForToken("USER_EMAIL"),
				"order_id": "" + _this.valueForToken("ORDER_ID"),
				"store_name": "" + _this.valueForToken("STORE_NAME"),
				"products": []
			};
			for (var i = 0; i < _this.valueForToken("PRODUCT_IDS").length; i++) {
				details.products.push({
					"product_name": _this.valueForToken("PRODUCT_NAME")[i],
					"product_url": _this.valueForToken("PRODUCT_URL")[i],
					"product_desc": _this.valueForToken("PRODUCT_DESC")[i],
					"product_image_url": _this.valueForToken("PRODUCT_IMAGE_URL")[i],
					"product_price": _this.valueForToken("PRODUCT_PRICE")[i],
					"currency": "" + _this.valueForToken("PRODUCT_CURRENCY"),
					"product_sku": _this.valueForToken("PRODUCT_SKU")[i],
					"product_id": _this.valueForToken("PRODUCT_IDS")[i],
					"product_category": _this.valueForToken("PRODUCT_CATEGORY")[i],
					"product_quantity": _this.valueForToken("PRODUCT_QUANTITY")[i]
				});
			}
			post_it(details);
		}
		onLoadCallBack(post_to_owned_it);
		/*~post*/
	}
});
