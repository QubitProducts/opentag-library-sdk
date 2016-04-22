//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("tradedoubler.confirmationpager1.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Page R1",
		async: true,
		description: "Product Level Tracking (PLT) Version",
		html: "<!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "TD Unique Identifier",
			description: "Your TradeDoubler unique identifier",
			token: "tduid_cookie_name",
			uv: ""
		}, {
			name: "Product IDs",
			description: "List of all product IDs in basket",
			token: "productIDs",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Names",
			description: "List of all product names in basket",
			token: "productNames",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product Prices",
			description: "List of each product unit sale price in basket",
			token: "productPrices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Product Quantities",
			description: "List of all product quantities",
			token: "productQuantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Organization",
			description: "Your TradeDoubler organization ID, provided by TradeDoubler.",
			token: "organization",
			uv: ""
		}, {
			name: "Event",
			description: "Provided by TradeDoubler, this parameter is linked to our organization and used for reporting.",
			token: "event",
			uv: ""
		}, {
			name: "Currency",
			description: "Transaction currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Voucher",
			description: "Voucher code, if used",
			token: "voucher",
			uv: "voucher"
		}, {
			name: "Order Number",
			description: "Transaction Order ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Encoding",
			description: "set to 3 unless encoding is not  UTF-8 - see TD manual for more info",
			token: "encoding",
			uv: ""
		}, {
			name: "Tracking type",
			description: "Enter   s    for sales tracking or   l    for lead tracking",
			token: "tracking_type",
			uv: ""
		}, {
			name: "Product Group ID",
			description: "Product group ID, supplied by TradeDoubler. Used  to distinguish different product categories.",
			token: "productGroupId",
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
		function readCookie(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) === ' ') {
					c = c.substring(1, c.length);
				}
				if (c.indexOf(nameEQ) === 0) {
					return c.substring(nameEQ.length, c.length);
				}
			}
			return null;
		};

		var tduidCookie = readCookie("" + this.valueForToken("tduid_cookie_name"));
		tduidCookie = tduidCookie ? tduidCookie : "";

		var basket = "";

		for (var i = 0; i < this.valueForToken("productNames").length; i++) {
			basket = basket + "pr(gr(" + 
				this.valueForToken("productGroupId") + ")i(" +
				this.valueForToken("productIDs")[i] + ")n(" + 
				this.valueForToken("productNames")[i] + ")v(" + 
				this.valueForToken("productPrices")[i] + ")q(" + 
				this.valueForToken("productQuantities")[i] + "))";
		}

		var src = "https://tb" + this.valueForToken("tracking_type") +
			".tradedoubler.com/report?";
		src += "o(" + this.valueForToken("organization") + ")";
		src += "event(" + this.valueForToken("event") + ")";
		src += "ordnum(" + this.valueForToken("order_id") + ")";
		src += "curr(" + this.valueForToken("currency") + ")";
		src += "tduid(" + tduidCookie + ")";
		src += "enc(" + this.valueForToken("encoding") + ")";
		src += "basket(" + basket + ")";
		src += "voucher(" + voucher + ")";

		var img = document.createElement("img");
		img.src = src;
		document.body.appendChild(img);
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
