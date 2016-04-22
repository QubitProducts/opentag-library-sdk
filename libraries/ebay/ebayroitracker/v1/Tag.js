//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("ebay.ebayroitracker.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "eBay ROI Tracker",
		async: true,
		description: "A free campaign measurement tool available to all merchants. Displays product, category and order- level performance to give you the right visibility to effectively optimize for success.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "stat.dealtime.com/ROI/ROI2.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "eBay Merchant ID",
			description: "Your eBay ROI Tracker ID",
			token: "ebay_merchant_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "Transaction Order ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Amount",
			description: "Transaction Order Amount",
			token: "order_amount",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Product Names",
			description: "",
			token: "product_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product SKUs",
			description: "",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Product Prices",
			description: "",
			token: "product_price",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		}, {
			name: "Product Categories",
			description: "",
			token: "product_categories",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Product Quantity",
			description: "",
			token: "product_quantity",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Product IDs",
			description: "",
			token: "product_category_ids",
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
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		window._roi = window._roi || [];

		_roi.push(['_setMerchantId', '' + this.valueForToken("ebay_merchant_id")]);
		_roi.push(['_setOrderId', '' + this.valueForToken("order_id")]);
		_roi.push(['_setOrderAmount', '' + this.valueForToken("order_amount")]);

		for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
			_roi.push(['_addItem',
				this.valueForToken("product_ids")[i], // Merchant sku 
				this.valueForToken("product_names")[i], // Product name 
				this.valueForToken("product_category_ids")[i], // Category id 
				this.valueForToken("product_categories")[i], // Category name 
				this.valueForToken("product_price")[i], // Unit price 
				this.valueForToken("product_quantity")[i] // Item quantity 
			]);
		}

		_roi.push(['_trackTrans']);
		/*~post*/
	}
});
