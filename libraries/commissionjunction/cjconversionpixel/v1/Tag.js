//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("commissionjunction.cjconversionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "CJ Conversion Pixel",
		async: true,
		description: "The conversion pixel code to enable Commission Junction to track purchases on the confirmation pages.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Item IDs",
			description: "Item IDs",
			token: "item_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Item SKUs",
			description: "Item SKUs",
			token: "item_skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Item Quantites",
			description: "Item Quantites",
			token: "item_quantites",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Item Prices",
			description: "Item Prices",
			token: "item_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "orderid",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Enterprise ID",
			description: "The Commission Junction Enterprise ID",
			token: "cid",
			uv: ""
		}, {
			name: "Currency",
			description: "Currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Action ID",
			description: "Action ID",
			token: "actionid",
			uv: ""
		}, {
			name: "Container Tag ID",
			description: "Container Tag ID",
			token: "containerid",
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
		var url = "https://www.emjcd.com/tags/c?containerTagId=" + this.valueForToken(
			"containerid") + "&";
		for (var i = 0, ii = this.valueForToken("item_ids").length; i < ii; i++) {
			url = url + "ITEM" + (i + 1) + "=" + 
				this.valueForToken("item_skus")[i] + "&AMT" + (i + 1) + "=" + 
				this.valueForToken("item_prices")[i] + "&QTY" + (i + 1) + "=" + 
				this.valueForToken("item_quantites")[i] + "&";
		}
		url = url + "CID=" + 
			this.valueForToken("cid") + "&OID=" + 
			this.valueForToken("orderid") + "&TYPE=" + 
			this.valueForToken("actionid") + "&CURRENCY=" +
			this.valueForToken("currency");
	
		var iframe = document.createElement("iframe");
		iframe.height = 1;
		iframe.width = 1;
		iframe.frameBorder = 0;
		iframe.scrolling = 0;
		iframe.src = url;
		document.body.appendChild(iframe);
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
