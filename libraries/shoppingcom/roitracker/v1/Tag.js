//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("shoppingcom.roitracker.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "ROI Tracker",
		async: true,
		description: "A free campaign measurement tool available to all merchants enrolled in the Shopping.com Merchant \nProgram. Displays product and category – level performance data.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "stat.dealtime.com/ROI/ROI2.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Shopping.com Client ID",
			description: "The Shopping.com identifier for the client",
			token: "client_id",
			uv: ""
		}, {
			name: "Shopping.com Order ID",
			description: "The identifier for the order",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Shopping.com Order Subtotal",
			description: "The order total minus shipping and tax",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Shipping.com Order Description",
			description: "A set of order notes",
			token: "desc",
			uv: ""
		}, {
			name: "Shopping.com Product SKU List",
			description: "An array of product SKU in the order",
			token: "item_skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Shopping.com Product Name List",
			description: "A list of product names",
			token: "product_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Shopping.com Product Category List",
			description: "A list of product categories",
			token: "category_names",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Shipping.com Unit Sale Prices",
			description: "A list of unit sale prices of items in basket",
			token: "unit_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Shipping.com Item Quantities",
			description: "A list of item quantities for items in the basket",
			token: "item_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
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
		window._roi = window._roi || [];

		_roi.push(['_setMerchantId', this.valueForToken("client_id")]);
		_roi.push(['_setOrderId', this.valueForToken("order_id")]);
		_roi.push(['_setOrderAmount', this.valueForToken("subtotal")]);
		_roi.push(['_setOrderNotes', this.valueForToken("desc")]);

		for (var i = 0, ii = this.valueForToken("item_skus").length; i < ii; i++) {
			_roi.push(['_addItem',
				'' + this.valueForToken("item_skus")[i],
				'' + this.valueForToken("product_names")[i],
				'',
				'' + this.valueForToken("category_names")[i],
				'' + this.valueForToken("unit_prices")[i],
				'' + this.valueForToken("item_quantities")[i]
			]);
		}

		_roi.push(['_trackTrans']);
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
