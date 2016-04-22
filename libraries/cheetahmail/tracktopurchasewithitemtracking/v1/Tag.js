//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"cheetahmail.tracktopurchasewithitemtracking.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Track-to-Purchase with Item Tracking",
			async: true,
			description: "Track-to-purchase reporting is typically used by clients that utilize e-commerce components to track conversions on their site resulting from an email campaign sent through CheetahMail. The Item Tracking feature, when enabled via CheetahMail, provides a method of tracking detailed information about the items that were purchased for each transaction.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Client Domain",
				description: "Client domain hosted by CheetahMail",
				token: "domain",
				uv: ""
			}, {
				name: "Affiliate IDs",
				description: "Affiliate ID used to send mailings to be tracked (up to 10 IDs separated by '.' eg 11111.2222.33333)",
				token: "affiliate_ids",
				uv: ""
			}, {
				name: "Client Name",
				description: "Short alphanumeric name, usually an abbreviation of the client name",
				token: "client",
				uv: ""
			}, {
				name: "Order ID",
				description: "Code to uniquely identify each transaction (1st parameter)",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "Total spent on each transaction MUST BE A NUMBER - '.' is okay, ',' is bad",
				token: "order_total",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Product Names",
				description: "An array of product names for each item in this transaction",
				token: "product_names",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Product Quantities",
				description: "An array of product quantities for each item in this transaction",
				token: "product_qtys",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Product Prices",
				description: "An array of product unit sale prices for each item in this transaction",
				token: "product_prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Custom Value 1",
				description: "Any client specific data to be associated with each transaction - numbers only",
				token: "cust1",
				uv: ""
			}, {
				name: "Custom Value 2",
				description: "Any client specific data to be associated with each transaction - numbers only",
				token: "cust2",
				uv: ""
			}],
		categories:[
			"Email Service Provider (ESP)"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			var items = [];

			for (var i = 0; i < this.valueForToken("product_names").length; i++) {
				items.push(String(this.valueForToken("product_names")[i]) + "@" +
					String(this.valueForToken("product_qtys")[i]) + "@" +
					String(this.valueForToken("product_prices")[i]));
			}

			var script = document.createElement("script");
			script.src = "https://" + this.valueForToken("domain") +
				"/a/r" + this.valueForToken("affiliate_ids") +
				"/" + this.valueForToken("client") +
				".gif?a=" + this.valueForToken("order_id") +
				"&b=" + this.valueForToken("order_total") +
				"&c=" + items.join("|") + "&d=" + this.valueForToken("cust1") +
				"&e=" + this.valueForToken("cust2");
			document.getElementsByTagName("head")[0].appendChild(script);
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
