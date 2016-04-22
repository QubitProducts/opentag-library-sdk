//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.uvtestconfirmationpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "UV Test - Confirmation Page",
		async: true,
		description: "This script contains every confirmation page variable so that you can test your universal variable setup",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Order Id",
			description: "",
			token: "a",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "",
			token: "b",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order Sub-Total",
			description: "",
			token: "c",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order Tax",
			description: "",
			token: "d",
			uv: "universal_variable.transaction.tax"
		}, {
			name: "Order Shipping Cost",
			description: "",
			token: "e",
			uv: "universal_variable.transaction.shipping_cost"
		}, {
			name: "Order Currency",
			description: "",
			token: "f",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Order Voucher",
			description: "",
			token: "g",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Product IDs",
			description: "",
			token: "h",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product SKUs",
			description: "",
			token: "i",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Product Name",
			description: "",
			token: "j",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product Manufacturer",
			description: "",
			token: "k",
			uv: "universal_variable.transaction.line_items[#].product.manufacturer"
		}, {
			name: "Product Categories",
			description: "",
			token: "l",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Product Prices",
			description: "",
			token: "m",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		}, {
			name: "Product quantities",
			description: "",
			token: "n",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Product Sale Price",
			description: "",
			token: "o",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Product Vouchers",
			description: "",
			token: "p",
			uv: "universal_variable.transaction.line_items[#].voucher"
		}, {
			name: "Order Billing Address - City",
			description: "",
			token: "q",
			uv: "universal_variable.transaction.billing.city"
		}, {
			name: "Order Billing Address - State",
			description: "",
			token: "r",
			uv: "universal_variable.transaction.billing.state"
		}, {
			name: "Order Billing Address - Country",
			description: "",
			token: "s",
			uv: "universal_variable.transaction.billing.country"
		}, {
			name: "Order Billing Address - Postcode",
			description: "",
			token: "t",
			uv: "universal_variable.transaction.billing.postcode"
		}, {
			name: "Order Billing Address - Address",
			description: "",
			token: "u",
			uv: "universal_variable.transaction.billing.address"
		}, {
			name: "Transaction Shipping Address - City",
			description: "",
			token: "v",
			uv: "universal_variable.transaction.delivery.city"
		}, {
			name: "Transaction Shipping Address - State",
			description: "",
			token: "w",
			uv: "universal_variable.transaction.delivery.state"
		}, {
			name: "Transaction Shipping Address - Country",
			description: "",
			token: "x",
			uv: "universal_variable.transaction.delivery.country"
		}, {
			name: "Transaction Shipping Address - Postcode",
			description: "",
			token: "y",
			uv: "universal_variable.transaction.delivery.postcode"
		}, {
			name: "Transaction Shipping Address - Address",
			description: "",
			token: "z",
			uv: "universal_variable.transaction.delivery.address"
		}, {
			name: "Transaction Shipping Address - Reciever name",
			description: "",
			token: "aa",
			uv: "universal_variable.transaction.delivery.name"
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		console.log("" + this.valueForToken("a"));
		console.log("" + this.valueForToken("b"));
		console.log("" + this.valueForToken("c"));
		console.log("" + this.valueForToken("d"));
		console.log("" + this.valueForToken("e"));
		console.log("" + this.valueForToken("f"));
		console.log("" + this.valueForToken("g"));
		console.log("" + this.valueForToken("h"));
		console.log("" + this.valueForToken("i"));
		console.log("" + this.valueForToken("j"));
		console.log("" + this.valueForToken("k"));
		console.log("" + this.valueForToken("l"));
		console.log("" + this.valueForToken("m"));
		console.log("" + this.valueForToken("n"));
		console.log("" + this.valueForToken("o"));
		console.log("" + this.valueForToken("p"));
		console.log("" + this.valueForToken("q"));
		console.log("" + this.valueForToken("r"));
		console.log("" + this.valueForToken("s"));
		console.log("" + this.valueForToken("t"));
		console.log("" + this.valueForToken("u"));
		console.log("" + this.valueForToken("v"));
		console.log("" + this.valueForToken("w"));
		console.log("" + this.valueForToken("x"));
		console.log("" + this.valueForToken("y"));
		console.log("" + this.valueForToken("z"));
		console.log("" + this.valueForToken("aa"));
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
