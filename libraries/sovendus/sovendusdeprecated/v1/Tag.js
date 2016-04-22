//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sovendus.sovendusdeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Sovendus [DEPRECATED]",
		async: true,
		description: "",
		html: "<div id=\"gutscheinconnection-container\"></div>\n\n",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Sovendus Shop ID",
			description: "The Shop ID you have received from Sovendus.",
			token: "shop_id",
			uv: ""
		}, {
			name: "Sovendus Session ID",
			description: "The customer's session ID is used to find duplicate  requests.",
			token: "session_id",
			uv: ""
		}, {
			name: "Sovendus Salutation",
			description: "Optional. Used to prefill the coupon request form. (e.g. Mr)",
			token: "salutation",
			uv: ""
		}, {
			name: "Sovendus First Name",
			description: "Optional. Used to prefill the coupon request form.",
			token: "first_name",
			uv: ""
		}, {
			name: "Sovendus Last Name",
			description: "Optional. Used to prefill the coupon request form.",
			token: "last_name",
			uv: ""
		}, {
			name: "Sovendus Customer Email",
			description: "Optional. Used to prefill the coupon request form.",
			token: "email",
			uv: "universal_variable.user.email"
		}, {
			name: "Sovendus Order ID",
			description: "Unique identifier of orders for accounting.",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Sovendus Order Value",
			description: "Order value for accounting. Please use the dot (.) as  decimal separator and supply two decimal plac",
			token: "order_value",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Sovendus Order Currency",
			description: "Order Currency",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Sovendus Coupon Code",
			description: "The coupon code just encashed to track the success  rate",
			token: "coupon_code",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Sovendus CheckSum",
			description: "See Sovendus Technical Integration Documentation on how to implement",
			token: "checksum",
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
		var sovendusNewDate = new Date();
		var sovendusTimestamp = sovendusNewDate.getTime();
		var _gconData = _gconData || [];
		
		_gconData.length = 0;
		_gconData.push(['_shopId', '' + this.valueForToken("shop_id")]);
		_gconData.push(['_bannerId', '1']);
		_gconData.push(['_sessionId', '' + this.valueForToken("session_id")]);
		_gconData.push(['_timestamp', sovendusTimestamp]);
		_gconData.push(['_customerSalutation', '' + this.valueForToken("salutation")]);
		_gconData.push(['_customerFirstName', '' + this.valueForToken("first_name")]);
		_gconData.push(['_customerLastName', '' + this.valueForToken("last_name")]);
		_gconData.push(['_customerEmail', '' + this.valueForToken("email")]);
		_gconData.push(['_orderId', '' + this.valueForToken("order_id")]);
		_gconData.push(['_orderValue', '' + this.valueForToken("order_value")]);
		_gconData.push(['_orderCurrency', '' + this.valueForToken("order_currency")]);
		_gconData.push(['_usedCouponCode', '' + this.valueForToken("coupon_code")]);
		_gconData.push(['_checksum', '' + this.valueForToken("checksum")]);
		_gconData.push(['_htmlElementId', 'gutscheinconnection-container']);

		var sovendusScript = document.createElement('script');
		document.body.appendChild(sovendusScript);
		sovendusScript.type = "text/javascript";
		sovendusScript.src = ('https:' == document.location.protocol ? 'https://' :
			'http://') + "api.gutscheinconnection.de/js/client.js";
		sovendusScript.async = "true";

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
