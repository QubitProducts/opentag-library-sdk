//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("responsys.riconversiontracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "RI Conversion Tracking",
		async: true,
		description: "Conversion Tracking allows you to evaluate how affective your email campaign is in driving a particular \npost-clickthrough action (such as making a purchase). With this feature you can monitor and report on \nthe success of a campaign (with link-tracking enabled) based on its resulting conversions.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of Purchased Items",
			description: "Array of Purchased Items",
			token: "purchased_items_array",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "Order Total",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Customer ID",
			description: "usually their email - set its value to 0 if not available on page",
			token: "customer_id",
			uv: "universal_variable.user.email"
		}, {
			name: "Client RI ID",
			description: "a 47 (approx.) character string provided by Responsys",
			token: "client_ri",
			uv: ""
		}, {
			name: "Client EI ID",
			description: "a 23 (approx.) character string provided by Responsys",
			token: "client_ei",
			uv: ""
		}, {
			name: "Conversion Type",
			description: "e.g. purchase",
			token: "type",
			uv: ""
		}, {
			name: "Domain",
			description: "e.g. email.somedomain.com",
			token: "domain",
			uv: ""
		}],
		categories:[
			"Audience Management"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var customerID = "" + this.valueForToken("customer_id");
		var numberOfItems = this.valueForToken("purchased_items_array").length;

		var imageSource = document.location.protocol + "//" +
			this.valueForToken("domain") + "/pub/cct?_ri_=" +
			this.valueForToken("client_ri") + "&_ei_=" +
			this.valueForToken("client_ei") + "&action=once&OrderID=" +
			this.valueForToken("order_id") + "&OrderTotal=" +
			this.valueForToken("order_total") + "&numItems=" + numberOfItems;

		if (customerID !== "0") {
			imageSource += "&customerID=" + customerID;
		}

		imageSource += "&Type=" + this.valueForToken("type");

		var image = document.createElement('img');
		image.src = imageSource;
		image.width = 1;
		image.height = 1;

		document.head.appendChild(image);
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
