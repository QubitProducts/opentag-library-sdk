//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("zanox.zanoxconfirmationpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Zanox - Confirmation page",
		async: true,
		description: "The Zanox confirmation page tag.",
		html: "<div class=\"zx_${zanox_page_id} zx_mediaslot\">\n  \n</div>",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Program id",
			description: "Unique identifier, e.g. 10292C1904329647",
			token: "program_id",
			uv: ""
		}, {
			name: "Mode",
			description: "e.g .2",
			token: "mode",
			uv: ""
		}, {
			name: "User ID",
			description: "",
			token: "user_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Subtotal",
			description: "",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Zanox Page ID",
			description: "",
			token: "zanox_page_id",
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
		// Fire the confirmation tag
		var url = "//ad.zanox.com/pps/?" + this.valueForToken("program_id");
		url += "&mode=[[" + this.valueForToken("mode") + "]]";
		url += "&CustomerID=[[" + this.valueForToken("user_id") + "]]";
		url += "&OrderID=[[" + this.valueForToken("order_id") + "]]";
		url += "&CurrencySymbol=[[" + this.valueForToken("currency") + "]]";
		url += "&TotalPrice=[[" + this.valueForToken("subtotal") + "]]";
		var script = document.createElement('script');
		script.src = url;
		script.type = "text/javascript";
		document.body.appendChild(script);

		// Set globals for usage by the master tag
		window.zx_products = [];
		window.zx_transaction = "" + this.valueForToken("order_id");
		window.zx_total_amount = "" + this.valueForToken("subtotal");
		window.zx_total_currency = "" + this.valueForToken("currency");

		// The standard mastertag
		window._zx = window._zx || [];
		window._zx.push({
			"id": "" + this.valueForToken("zanox_page_id")
		});
		var _this = this;
		window.waitForZanoxDiv = function() {
			if (document.querySelector(".zx_" + _this.valueForToken("zanox_page_id") +
				".zx_mediaslot")) {
				(function(d) {
					var s = d.createElement("script");
					s.async = true;
					s.src = (d.location.protocol == "https:" ? "https:" : "http:") +
						"//static.zanox.com/scripts/zanox.js";
					var a = d.getElementsByTagName("script")[0];
					a.parentNode.insertBefore(s, a);
				}(document));
			} else {
				setTimeout(waitForZanoxDiv, 100);
			}
		};
		waitForZanoxDiv();
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
