//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("webgains.webgainsdeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "WebGains [DEPRECATED]",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			,"Affiliate Networks"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		var _this = this;
		window.wgItems = function() {
			var wgItemsString = "";
			for (i = 0; i < _this.valueForToken("unit_prices").length; i++) {
				wgItemsString = wgItemsString + 
					_this.valueForToken("event_id") + "::" + 
					_this.valueForToken("unit_prices")[i] + "::" + 
					_this.valueForToken("unit_names")[i] + "::" + 
					_this.valueForToken("product_id_list")[i] + "::" + 
					_this.valueForToken("transaction_voucher");
				if (_this.valueForToken("unit_prices").length !== 1 && i < _this.valueForToken(
					"unit_prices").length - 1) {
					wgItemsString = wgItemsString + "|";
				}
			}
			return wgItemsString;
		};

		if (location.protocol.toLowerCase() == "https:") wgProtocol = "https";
		else wgProtocol = "http";

		wgUri = "//" + _this.valueForToken("subdomain") +
			".webgains.com/transaction.html?";
		wgUri += "wgver=" + _this.valueForToken("code_version") + "&wgprotocol=";
		wgUri += wgProtocol + "&wgsubdomain=" + _this.valueForToken("subdomain");
		wgUri += "&wgslang=" + _this.valueForToken("script_language") + "&wglang=" +
			_this.valueForToken("language");
		wgUri += "&wgprogramid=" + _this.valueForToken("merchant_id") + "&wgeventid=" +
			_this.valueForToken("event_id");
		wgUri += "&wgvalue=" + _this.valueForToken("order_total") + "&wgchecksum=" +
			_this.valueForToken("checksum");
		wgUri += "&wgorderreference=" + _this.valueForToken("order_id");
		wgUri += "&wgcomment=" + escape("" + _this.valueForToken("merchant_comment"));
		wgUri += "&wglocation=" + escape(document.referrer);
		wgUri += "&wgitems=" + escape(wgItems());
		wgUri += "&wgcustomerid=" + escape("" + _this.valueForToken("customer_id"));
		wgUri += "&wgvouchercode=" + 
				escape("" + _this.valueForToken("transaction_voucher"));
		wgUri += "&wgCurrency=" +
				escape("" + _this.valueForToken("transaction_currency"));

		var webGainsScript = document.createElement('script');
		webGainsScript.id = "webgains-script";
		webGainsScript.type = "text/javascript";
		webGainsScript.src = wgUri;

		document.body.appendChild(webGainsScript);
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
