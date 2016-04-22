//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("merchenta.shoppingcarttag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Shopping Cart Tag",
		async: true,
		description: "Place this tag on the shopping cart or basket page (Optional).",
		html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">CART</div>\n  <div class=\"mc_retailer\">${Merchenta_Id}</div>\n</div>\n\n",
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
			name: "Product SKUs",
			description: "The SKUs/IDs of the products in the cart.",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Order/Cart Reference (optional)",
			description: "Order id for your cart - if your system doesn't provide one, just provide an empty string here.",
			token: "order_id",
			uv: "universal_variable.basket.id"
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
		d = document.createElement("div");
		d.className = "mc_order_ref";
		d.innerHTML = "" + this.valueForToken("order_id");
		p.appendChild(d);
		for (i = 0, ii = this.valueForToken("product_ids").length; i < ii; i++) {
			d = document.createElement("div");
			d.className = "mc_sku";
			d.innerHTML = this.valueForToken("product_ids")[i].toString();
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
