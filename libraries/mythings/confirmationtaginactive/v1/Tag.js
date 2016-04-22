//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mythings.confirmationtaginactive.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Tag - INACTIVE",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Order Product IDs",
			description: "",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Order Product Prices",
			description: "",
			token: "product_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Order Product Quantities",
			description: "",
			token: "product_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Amount",
			description: "",
			token: "order_amount",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "myThings Advertiser Token",
			description: "",
			token: "advertiser_token",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var i = 0,
			productIDArray = this.valueForToken("product_ids"),
			productPriceArray = this.valueForToken("product_prices"),
			productQuantityArray = this.valueForToken("product_quantities"),
			productIDArrayLength = productIDArray.length,
			productArray = [];

		for (; i < productIDArrayLength; i++) {
			var product = {
				id: productIDArray[i],
				price: productPriceArray[i],
				qty: productQuantityArray[i]
			}
			productArray.push(product);
		}

		window._mt_ready = function() {
			if (typeof(MyThings) != "undefined") {
				MyThings.Track({
					EventType: MyThings.Event.Conversion,
					Action: "9902",
					Products: productArray,
					TransactionReference: "" + this.valueForToken("order_id"),
					TransactionAmount: "" + this.valueForToken("order_amount")
				});
			}
		};

		window.mtHost = (("https:" == document.location.protocol) ?
			"https://rainbowx" :
			"http://rainbow") + ".mythings.com";
		window.mtAdvertiserToken = "" + this.valueForToken("advertiser_token");
		document.write(unescape("%3Cscript src='" + mtHost + "/c.aspx?atok=" +
			mtAdvertiserToken + "' type='text/javascript'%3E%3C/script%3E"));

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
