//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("igodigital.igodigitalobservation.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "iGoDigital Observation",
		async: true,
		description: "Monitors the behavior of your website traffic, including user activity, intent, and outcome.",
		html: "<div id='igdRTA'>\n 	\n           	\n</div>",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "rtaRetailer",
			description: "The unique client name provided by iGoDigital set on every page",
			token: "rtaRetailer",
			uv: ""
		}, {
			name: "rtaProductSKU",
			description: "Represents product SkuIDs that are being shown or recommended to the customer, such as on a product",
			token: "rtaProductSKU",
			uv: ""
		}, {
			name: "rtaCart",
			description: "Contain the entire list of SkuIDs in the customer's cart.",
			token: "rtaCart",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "rtaEmail",
			description: "This variable should be sent with the user’s email address.",
			token: "rtaEmail",
			uv: "universal_variable.user.email"
		}, {
			name: "rtaUniqueId",
			description: "Unique customer identifier is used to attach actions to the user's personal profile when no email",
			token: "rtaUniqueId",
			uv: "universal_variable.user.user_id"
		}, {
			name: "rtaConvertCart",
			description: "This is a value that should be set to “1” on the confirmation page of the order checkout process.",
			token: "rtaConvertCart",
			uv: ""
		}, {
			name: "rtaOrderNum",
			description: "This is a value that should contain the customer’s order number once a conversion event occurs.",
			token: "rtaOrderNum",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "rtaCartAmounts",
			description: "the entire list of unit prices corresponding to the cart list in the rtaCart variable.",
			token: "rtaCartAmounts",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "rtaCartQuantities",
			description: "contain the quantities of each corresponding SKU in rtaCart above",
			token: "rtaCartQuantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "rtaReportingSegment",
			description: "This is an optional value that can contain a text string to classify the click traffic for this page",
			token: "rtaReportingSegment",
			uv: ""
		}, {
			name: "rtaRating",
			description: "A numerical representation of the product rating provided by user",
			token: "rtaRating",
			uv: ""
		}, {
			name: "rtaSearch",
			description: "This variable is used to hold search terms.",
			token: "rtaSearch",
			uv: ""
		}, {
			name: "rtaCategory",
			description: "This variable should be sent on each category and subcategory page.",
			token: "rtaCategory",
			uv: "universal_variable.page.type"
		}, {
			name: "rtaSpecial",
			description: "can be set to “ownit” which will allow us to set a product as being owned by a given customer",
			token: "rtaSpecial",
			uv: ""
		}, {
			name: "rtaTags",
			description: "can be used together with rtaSpecial to store relevant information to the user’s personal profile.",
			token: "rtaTags",
			uv: ""
		}],
		categories:[
			"Personalisation Platform"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		// iGoDigital RTA Initialization
		window.rtaRetailer = "" + this.valueForToken("rtaRetailer");
		window.rtaProductSKU = "" + this.valueForToken("rtaProductSKU");
		window.rtaCart = "" + this.valueForToken("rtaCart");
		window.rtaCartSku = "" + this.valueForToken("rtaEmail");
		window.rtaEmail = "" + this.valueForToken("rtaUniqueId");
		window.rtaConvertCart = "" + this.valueForToken("rtaConvertCart");
		window.rtaOrderNum = "" + this.valueForToken("rtaOrderNum");
		window.rtaCartAmounts = "" + this.valueForToken("rtaCartAmounts");
		window.rtaCartQuantities = "" + this.valueForToken("rtaCartQuantities");
		window.rtaReportingSegment1 = "" + this.valueForToken("rtaReportingSegment");
		window.rtaReportingSegment2 = "";
		window.rtaRating = "" + this.valueForToken("rtaRating");
		window.rtaSearch = "" + this.valueForToken("rtaSearch");
		window.rtaCategory = "" + this.valueForToken("rtaCategory");
		window.rtaTags = "" + this.valueForToken("rtaTags");
		window.rtaSpecial = "" + this.valueForToken("rtaSpecial");
		addLoadEvent(function() {
			callRTA();
		});
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
