//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"prismastar.orderconfirmationtrackingpixel.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Order Confirmation Tracking Pixel",
			async: true,
			description: "The tracking code is an asynchronous call to the reporting gateway passing with it the details of the order. The reporting system can then cross reference the session with sessions already populated with a Selector history and derive time to order and average order values.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Gateway Prefix",
				description: "Your gateway prefix assigned by your PrismaStar account manager",
				token: "GATEWAY_PREFIX",
				uv: ""
			}, {
				name: "Customer Code",
				description: "Your customer code assigned by your PrismaStar account manager",
				token: "CUSTOMER_CODE",
				uv: ""
			}, {
				name: "Order ID",
				description: "Your internal order identification (for your reference)",
				token: "ORDER_ID",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Product ID List",
				description: "",
				token: "ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product Quantities",
				description: "",
				token: "quants",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Product Prices",
				description: "",
				token: "prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Product Categories",
				description: "",
				token: "categories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}],
		categories:[
			"Web Analytics"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			var pixel = new Image();
			var source = "https://" +
				this.valueForToken("GATEWAY_PREFIX") +
				".cpr.prismastar.com/v2_0/recorder/?type=order&customerCode=" +
				this.valueForToken("CUSTOMER_CODE") + "&customerOrderId=" +
				this.valueForToken("ORDER_ID") + "&order=";

			for (var i = 0, ii = this.valueForToken("ids").length; i < ii; i++) {
				var productArray = [
					this.valueForToken("ids")[i],
					this.valueForToken("quants")[i],
					this.valueForToken("prices")[i],
					this.valueForToken("categories")[i]
				];
				source += productArray.join("|") + ";";
			}

			pixel.src = source;
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
