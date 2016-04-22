//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"intelligentreach.confirmationpagetagdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Confirmation Page Tag - Deprecated",
			async: true,
			description: "The tag is placed on final checkout confirmation page only.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.ist-track.com/ProcessPurchaseJavaScript.ashx?companyId=${id}",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Ultimate Feed ID",
				description: "Ultimate Feed client ID",
				token: "id",
				uv: ""
			}, {
				name: "Order Id",
				description: "A unique id for the order",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "The total cost of the order",
				token: "orderTotal",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Product SKUs",
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
			window.istOrderId = this.valueForToken("orderId");
			window.istTotal = this.valueForToken("orderTotal");
			window.istItemCount = this.valueForToken("productSku").length;
			window.istNewCustomer = false;
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
			window.istInstorePickup = false;
			window.istUserDefinedFieldOne = "";
			window.istUserDefinedFieldTwo = "";
			window.istUserDefinedFieldThree = "";
			window.istVoucherCode = this.valueForToken("voucher");
			window.istLastAffiliateCode = "";
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
