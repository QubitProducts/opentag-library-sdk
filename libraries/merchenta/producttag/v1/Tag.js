//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("merchenta.producttag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product Tag",
		async: true,
		description: "Place this tag on each product page to track the products visitors are viewing.",
		html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">VIEW</div>\n  <div class=\"mc_retailer\">${Merchenta_ID}</div>\n  <div class=\"mc_sku\">${Product_code}</div>\n</div>\n\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Merchenta Retailer Code",
			description: "Your Merchenta account ID",
			token: "Merchenta_ID",
			uv: ""
		}, {
			name: "Product SKU",
			description: "The SKU/ID of the product being viewed",
			token: "Product_code",
			uv: "universal_variable.product.sku_code"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.mc_api_url = "api.merchenta.com/merchenta/t";
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		var secure = (window.parent.document.location.protocol == "https:");
		if (secure) {
			script.src = "https://cdn3.merchenta.com/track/t.js";
		} else {
			script.src = "http://cdn3.merchenta.com/track/t.js";
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
