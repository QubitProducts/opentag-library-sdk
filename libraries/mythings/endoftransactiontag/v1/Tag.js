//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mythings.endoftransactiontag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "End of Transaction Tag",
		async: true,
		description: "The tag should be placed on the end of transaction page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${subdomain}.mythings.com/c.aspx?atok=${token}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "MyThings Advertiser Token",
			description: "advertiser token provided by myThings",
			token: "token",
			uv: ""
		}, {
			name: "MyThings Subdomain",
			description: "subdomain value provided by myThings eg. \"rainbow-uk\"",
			token: "subdomain",
			uv: ""
		}, {
			name: "Product ID List",
			description: "",
			token: "productIds",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Unit Price List",
			description: "",
			token: "productUnitPrice",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		}, {
			name: "Quantity List",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order ID",
			description: "",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Sub Total",
			description: "",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		}],
		categories:[
			"Re-Targeting"
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
		var _this = this;
		var products = [];
		for (var i = 0; i < this.valueForToken("productIds").length; i++) {
			products.push({
				id: this.valueForToken("productIds")[i],
				price: this.valueForToken("productUnitPrice")[i],
				qty: this.valueForToken("quantities")[i]
			});
		}
		window._mt_ready = function() {
			if (typeof(MyThings) != "undefined") {
				MyThings.Track({
					EventType: MyThings.Event.Conversion,
					Action: "9902",
					Products: products,
					TransactionReference: "" + _this.valueForToken("orderId"),
					TransactionAmount: "" + _this.valueForToken("total")
				});
			}
		};

		window.mtHost = (("https:" == document.location.protocol) ? "https://" +
			this.valueForToken("subdomain") : "http://" +
			this.valueForToken("subdomain")) + ".mythings.com";
		window.mtAdvertiserToken = "" + this.valueForToken("token");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
