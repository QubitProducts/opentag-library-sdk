//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("tradedoubler.confirmationpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Page",
		async: true,
		description: "Standard Version",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Tracking Type",
			description: "Enter hard coded value s as sales tracking, or l for lead tracking",
			token: "tracking_type",
			uv: ""
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
			name: "TDUID Cookie Name",
			description: "Your TradeDoubler unique identifier. Your store the TDUID value in a permanent cookie called TradeDoubler and also in a session variable.",
			token: "tduid_cookie_name",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Voucher",
			description: "",
			token: "voucher",
			uv: "voucher"
		}, {
			name: "Product ID List",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Name List",
			description: "",
			token: "names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product Unit Price List",
			description: "",
			token: "unit_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		}, {
			name: "Product Quantity List",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
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
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
			}
			return null;
		}

		var src = ["https://tb" + this.valueForToken("tracking_type") +
			".tradedoubler.com/report?"
		];
		src.push("organization=" + this.valueForToken("organization"));
		src.push("&event=" + this.valueForToken("event"));

		src.push("&orderNumber=" + this.valueForToken("order_id"));
		src.push("&orderValue=" + this.valueForToken("order_total"));
		src.push("&currency=" + this.valueForToken("currency"));
		src.push("&voucher=" + this.valueForToken("voucher"));

		var reportQuery = [];
		for (var i = 0; i < this.valueForToken("ids").length; i++) {
			if (i > 0) {
				reportQuery.push("|");
			}
			reportQuery.push("f1=" + this.valueForToken("ids")[i]);
			reportQuery.push("&f2=" + this.valueForToken("names")[i]);
			reportQuery.push("&f3=" + this.valueForToken("unit_prices")[i]);
			reportQuery.push("&f4=" + this.valueForToken("quantities")[i]);
		}

		src.push("&reportInfo=" + escape(reportQuery.join("")));

		var tduidCookie = readCookie("" + this.valueForToken("tduid_cookie_name") +
			"");
		tduidCookie = tduidCookie ? tduidCookie : "";
		src.push("&tduid=" + tduidCookie);

		var img = document.createElement("img");
		img.setAttribute("src", src.join(""));
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
