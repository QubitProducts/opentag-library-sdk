//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"linkshare.linkshareconfirmationpagepixeldeprecated2.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "LinkShare Confirmation Page Pixel - DEPRECATED 2",
			async: true,
			description: "Reports transactions to linkshare server",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "LinkShare Merchant ID",
				description: "A static numeric merchant ID constant provided to you by  LinkShare.",
				token: "mid",
				uv: ""
			}, {
				name: "Order ID",
				description: "This is a unique transaction orderID composed of 1 to 40  non-blank characters.",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "SKU List",
				description: "This is a unique product identifier. When several different products are included in a single order",
				token: "sku_list",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Quantity List",
				description: "This is the quantity value. Should be in the same order as SKU List.",
				token: "q_list",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Amount List",
				description: "List of all the unit prices",
				token: "amt_list",
				uv: "universal_variable.transaction.line_items[#].product.unit_price"
			}, {
				name: "Currency",
				description: "Alphanumeric 3 characters.",
				token: "cur",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Product Name List",
				description: "This is the product name value.",
				token: "name_list",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Discount Amount List",
				description: "List of product amounts with discount applied - should be same as normal price if no discount.",
				token: "disc_list",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Voucher Discount",
				description: "Voucher discount amount (set to 0 if no discount)",
				token: "voucher_discount",
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
			var x = document.createElement("img");

			var skuList = [],
				qList = [],
				amtList = [],
				nameList = [],
				i, ii;

			for (i = 0, ii = this.valueForToken("q_list").length; i < ii; i++) {
				skuList.push(this.valueForToken("sku_list")[i]);
				qList.push(this.valueForToken("q_list")[i]);
				nameList.push(this.valueForToken("name_list")[i]);
				var amt = parseInt(parseFloat(this.valueForToken("disc_list")[i]) * 100) *
					parseInt(this.valueForToken("q_list")[i]);
				if (this.valueForToken("voucher_discount") > 0) {
					amt -= this.valueForToken("voucher_discount") / this.valueForToken(
						"q_list").length;
				}
				amtList.push(amt);
			}

			if (this.valueForToken("voucher_discount") > 0) {
				skuList.push("Discount");
				qList.push("0");
				amtList.push(-discount);
				nameList.push("Discount");
			}

			x.src = "//track.linksynergy.com/ep?mid=" +
				this.valueForToken("mid") + "&ord=" +
				this.valueForToken("order_id") + "&skulist=" + skuList.join("|") +
				"&qlist=" + qList.join("|") + "&amtlist=" + amtList.join("|") + "&cur=" +
				this.valueForToken("cur") + "&namelist=" + nameList.join("|");
			document.body.appendChild(x);
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
