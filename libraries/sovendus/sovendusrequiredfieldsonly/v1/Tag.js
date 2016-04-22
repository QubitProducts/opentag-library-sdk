//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sovendus.sovendusrequiredfieldsonly.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Sovendus [Required Fields Only]",
		async: true,
		description: "<div id=\"gutscheinconnection-container\"></div> should first be placed on the confirmation page, and positioned (using css) exactly where you'd like the banner to appear, before activating this tag (this version of the script is leaving out all optional parameters for faster implementation)",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Sovendus Shop ID",
			description: "The Shop ID you have received from Sovendus - e.g. 2",
			token: "shop_id",
			uv: ""
		}, {
			name: "Sovendus Banner ID",
			description: "If multiple banners - choose active banner here (e.g. 1) - usually no need to change this.",
			token: "banner_id",
			uv: ""
		}, {
			name: "Sovendus Order ID",
			description: "Unique identifier of orders for accounting - e.g. 124578",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Sovendus Order Value",
			description: "Order value -  use dot (.) as decimal separator & supply two decimal places e.g. 123.43",
			token: "order_value",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Sovendus Order Currency",
			description: "Order Currency - e.g. GBP",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Sovendus Used Coupon Code",
			description: "The coupon code just encashed to track the success rate - e.g. ABC123",
			token: "coupon_code",
			uv: "universal_variable.transaction.voucher"
		}],
		categories:[
			"Affiliate Networks"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		var _this = this;
		var waitForSovendusDiv = function() {
			if (document.getElementById('gutscheinconnection-container')) {
				var sovendusNewDate = new Date();
				var sovendusTimestamp = sovendusNewDate.getTime();

				var getCookie = function(c_name) {
					var i, x, y, ARRcookies = document.cookie.split(";");
					for (i = 0; i < ARRcookies.length; i++) {
						x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
						y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
						x = x.replace(/^\s+|\s+$/g, "");
						if (x == c_name) {
							return unescape(y);
						}
					}
				};

				var sovendusSessionId = getCookie("__utma");

				window._gconData = window._gconData || [];

				_gconData.length = 0;

				_gconData.push(['_shopId', '' + _this.valueForToken("shop_id")]);
				_gconData.push(['_bannerId', '' + _this.valueForToken("banner_id")]);
				_gconData.push(['_sessionId', sovendusSessionId]);
				_gconData.push(['_timestamp', sovendusTimestamp]);
				_gconData.push(['_orderId', '' + _this.valueForToken("order_id")]);
				_gconData.push(['_orderValue', '' + _this.valueForToken("order_value")]);
				_gconData.push(['_orderCurrency', '' + _this.valueForToken("order_currency")]);
				_gconData.push(['_usedCouponCode', '' + _this.valueForToken("coupon_code")]);
				_gconData.push(['_htmlElementId', 'gutscheinconnection-container']);

				var sovendusScript = document.createElement('script')
				document.body.appendChild(sovendusScript);
				sovendusScript.type = "text/javascript";
				sovendusScript.src = ('https:' == document.location.protocol ?
					'https://' : 'http://') + "api.gutscheinconnection.de/js/client.js";
				sovendusScript.async = "true";
			} else {
				setTimeout(waitForSovendusDiv, 200);
			}
		};

		waitForSovendusDiv();
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
