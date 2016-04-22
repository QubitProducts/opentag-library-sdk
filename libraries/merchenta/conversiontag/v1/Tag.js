//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("merchenta.conversiontag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Tag",
		async: true,
		description: "Place this tag on the order confirmation page following a successful purchase.",
		html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">PURCHASE</div>\n  <div class=\"mc_retailer\">${Merchenta_Id}</div>\n  <div class=\"mc_order_ref\">${order_id}</div>\n  <div class=\"mc_ordervalue\">${order_total}</div>\n</div>\n\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Merchenta Retailer Code",
			description: "Your Merchenta account ID",
			token: "Merchenta_Id",
			uv: ""
		}, {
			name: "Merchant's Order Reference",
			description: "A unique id for the order",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Total Order Value",
			description: "The total cost of the order - may be left blank if is the same price as SKUs",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Product SKUs",
			description: "The SKUs/IDs of the products being purchased",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var i, ii, d, p = document.getElementById("mc_data");
		for (i = 0, ii = this.valueForToken("product_ids").length; i < ii; i++) {
			d = document.createElement("div");
			d.className = "mc_sku";
			d.innerHTML = this.valueForToken("product_ids")[i];
			p.appendChild(d);
		}

		window.mc_api_url = "api.merchenta.com/merchenta/t";
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		var secure = (window.parent.document.location.protocol == "https:");
		if (secure) {
			script.src = "https://api.merchenta.com/track/t.js";
		} else {
			script.src = "http://cdn.merchenta.com/track/t.js";
		}
		document.getElementsByTagName('head')[0].appendChild(script);
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
