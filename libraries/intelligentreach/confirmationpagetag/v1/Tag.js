//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelligentreach.confirmationpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Page Tag",
		async: true,
		description: "The tag is placed on final checkout confirmation page only.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.ist-track.com/ProcessPurchaseJavaScript.ashx?companyId=${id}&useDom=1",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Intelligent Reach ID",
			description: "Intelligent Reach client ID",
			token: "id",
			uv: ""
		}, {
			name: "Order Id",
			description: "A unique id for the order",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Sub Total",
			description: "The total cost of the order",
			token: "orderTotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Product SKU's",
			description: "An array of SKUs for each product",
			token: "productSku",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Order Quantities",
			description: "The quantities of each product purchased",
			token: "quantity",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Sale Amounts",
			description: "The price of each product purchased, including any discounts",
			token: "saleAmount",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Voucher Code",
			description: "The voucher code used with the purchase, if any",
			token: "voucher",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "User Returning",
			description: "",
			token: "userReturning",
			uv: "universal_variable.user.returning"
		}, {
			name: "In Store Pickup",
			description: "Transaction is for in store pickup (usually hardcoded as false)",
			token: "store_pickup",
			uv: ""
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
		window.istOrderId = "" + this.valueForToken("orderId");
		window.istTotal = "" + this.valueForToken("orderTotal");
		window.istItemCount = "" + this.valueForToken("productSku").length;
		window.istNewCustomer = "" + !this.valueForToken("userReturning");
		window.istPurchasedItems = "";
		window.istPurchasedItemQuantities = "";
		window.istPurchasedItemPrices = "";
		for (var i = 0; i < this.valueForToken("productSku").length; i++) {
			istPurchasedItems += this.valueForToken("productSku")[i];
			istPurchasedItemQuantities += this.valueForToken("quantity")[i].toString();
			istPurchasedItemPrices += this.valueForToken("saleAmount")[i].toString();

			if (this.valueForToken("productSku").length !== (i + 1)) {
				istPurchasedItems += "|";
				istPurchasedItemQuantities += "|";
				istPurchasedItemPrices += "|";
			}
		}
		window.istInstorePickup = "" + this.valueForToken("store_pickup");
		window.istUserDefinedFieldOne = "";
		window.istUserDefinedFieldTwo = "";
		window.istUserDefinedFieldThree = "";
		window.istVoucherCode = "" + this.valueForToken("voucher");
		window.istLastAffiliateCode = "";
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
