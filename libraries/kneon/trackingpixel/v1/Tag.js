//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("kneon.trackingpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Tracking Pixel",
		async: true,
		description: "The pixel would be embedded on your ‘thank you’ page, allowing Kneon to automate the process of tracking both referrals and successful sales. At no point does Kneon ever collect any personally identifiable information including: customer name, physical address, email address, or credit card number.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Transaction SKU List",
			description: "The list of SKU ids on the transaction page",
			token: "product_sku_list",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Transaction Price List",
			description: "The list of prices for respective items on transaction page",
			token: "product_price_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		}, {
			name: "Transaction Quantity List",
			description: "A list of quantities for items on the transaction page",
			token: "product_qty_list",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Transaction Order Total",
			description: "The total value for the items + delivery on the transaction page",
			token: "total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Transaction Order ID",
			description: "The Order ID for the transaction (can be up to 255 characters)",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Client ID",
			description: "The 44 character ID specific to the person using the tag (provided by Kneon)",
			token: "client_id",
			uv: ""
		}],
		categories:[
			"Affiliate Networks"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.img = new Image();
		window.productsArr = [];
		window.howManyProducts = this.valueForToken("product_sku_list").length;
		for (var i = 0; i < howManyProducts; i++) {
			productsArr.push(escape("products[" + i + "][sku]") + "=" +
				this.valueForToken("product_sku_list")[i]);
			productsArr.push(escape("products[" + i + "][price]") + "=" +
				this.valueForToken("product_price_list")[i]);
			productsArr.push(escape("products[" + i + "][quantity]") + "=" +
				this.valueForToken("product_qty_list")[i]);
		}
		img.src = "https://www.ktrkng.com/image.gif?amount=" +
			this.valueForToken("total") + "&rid=" +
			this.valueForToken("client_id") + "&oid=" +
			this.valueForToken("order_id") + "&" + productsArr.join("&");
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
