//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mentionme.alternativeordertrackingtag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Alternative Order Tracking Tag",
		async: true,
		description: "Generic tag for MentionMe. All parameters marked with * are optional (if not used populate with empty hardcoded value, even if default is 'uses universal variable')",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Email",
			description: "The email address of the customer",
			token: "email",
			uv: "universal_variable.user.email"
		}, {
			name: "Order Number",
			description: "The identifier relating to the order transaction",
			token: "order_number",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "The total value of the order",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order Currency",
			description: "The currency of the order",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Customer ID*",
			description: "The identifier relating to the customer (leave as blank string \"\" if not used)",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Custom Field*",
			description: "Any piece of custom data you wish to pass to MentionMe (leave as blank string \"\" if not used)",
			token: "custom_field",
			uv: ""
		}, {
			name: "Coupon Code*",
			description: "The coupon code used byt the customer (leave as blank string \"\" if not used)",
			token: "coupon_code",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Address Line 1*",
			description: "The first line of the customers address (leave as blank string \"\" if not used)",
			token: "address_line1",
			uv: "universal_variable.transaction.billing.address"
		}, {
			name: "Address Line 2*",
			description: "The customer's second address line (leave as blank string \"\" if not used)",
			token: "address_line2",
			uv: ""
		}, {
			name: "Address City*",
			description: "The customer's address city (leave as blank string \"\" if not used)",
			token: "address_city",
			uv: "universal_variable.transaction.billing.city"
		}, {
			name: "Address County*",
			description: "The customer's address county (leave as blank string \"\" if not used)",
			token: "address_county",
			uv: ""
		}, {
			name: "Address Postcode*",
			description: "The customer's address postcode (leave blank string \"\" if not used)",
			token: "address_postcode",
			uv: "universal_variable.transaction.billing.postcode"
		}, {
			name: "Address Country*",
			description: "The customer's address country (leave blank string \"\" if not used)",
			token: "address_country",
			uv: "universal_variable.transaction.billing.country"
		}, {
			name: "Partner Code",
			description: "The code given to you from MentionMe",
			token: "partner_code",
			uv: ""
		}, {
			name: "Script Domain",
			description: "Domain for the script: 'tag-demo.mention-me.com' for testing, 'tag.mention-me.com' for production",
			token: "domain",
			uv: ""
		}],
		categories:[
			"Social"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var baseUrl = "https://" + this.valueForToken("domain") + "/api/v2/order/" +
			this.valueForToken("partner_code") + "?";
		var paramArr = [];
		var paramObj = {
			email: "" + this.valueForToken("email"),
			order_number: "" + this.valueForToken("order_number"),
			order_date: dateTime(),
			order_total: "" + this.valueForToken("order_total"),
			order_currency: "" + this.valueForToken("order_currency")
		};

		if (("" + this.valueForToken("customer_id")).length)
			paramObj["customer_id"] = "" + this.valueForToken("customer_id");
		if (("" + this.valueForToken("custom_field")).length)
			paramObj["custom_field"] = "" + this.valueForToken("custom_field");
		if (("" + this.valueForToken("coupon_code")).length)
			paramObj["coupon_code"] = "" + this.valueForToken("coupon_code");
		if (("" + this.valueForToken("address_line1")).length)
			paramObj["address_line1"] = "" + this.valueForToken("address_line1");
		if (("" + this.valueForToken("address_line2")).length)
			paramObj["address_line2"] = "" + this.valueForToken("address_line2");
		if (("" + this.valueForToken("address_city")).length)
			paramObj["address_city"] = "" + this.valueForToken("address_city");
		if (("" + this.valueForToken("address_postcode")).length)
			paramObj["address_postcode"] = "" + this.valueForToken("address_postcode");
		if (("" + this.valueForToken("address_country")).length)
			paramObj["address_country"] = "" + this.valueForToken("address_country");
		if (("" + this.valueForToken("address_county")).length)
			paramObj["address_county"] = "" + this.valueForToken("address_county");

		for (var param in paramObj) {
			var value = paramObj[param];
			paramArr.push(param + "=" + escape(value));
		}

		var mmScript = document.createElement("script");
		mmScript.src = baseUrl + paramArr.join("&");
		document.body.appendChild(mmScript);

		function dateTime() {
			var date = new Date();
			var day = beginningZero(date.getUTCDay());
			var monthOffset = parseInt(date.getUTCMonth() + 1, 10);
			var month = beginningZero(monthOffset);
			var hours = beginningZero(date.getUTCHours());
			var minutes = beginningZero(date.getUTCMinutes());
			var seconds = beginningZero(date.getUTCSeconds());
			var time = hours + ":" + minutes + ":" + seconds + date.getUTCMilliseconds();
			return date.getUTCFullYear() + "-" + month + "-" + day + "GMT" + time;
		}

		function beginningZero(digit) {
			return (digit < 10) ? "0" + digit : "" + digit;
		}
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
