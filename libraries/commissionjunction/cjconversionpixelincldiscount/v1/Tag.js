//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"commissionjunction.cjconversionpixelincldiscount.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "CJ Conversion Pixel incl. Discount",
			async: true,
			description: "The conversion pixel code to enable Commission Junction to track purchases on the confirmation pages. If individual product discounts are available (one at least), then an array of these discounts (of equal length to the number of products) should be used. If no individual product discounts are available, then a total discount should be assigned to the transaction (either zero or whatever value is available). Check documentation on how to calculate the individual product discounts.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Container Tag ID",
				description: "Container Tag ID",
				token: "container_tag_id",
				uv: ""
			}, {
				name: "Array of product SKUs",
				description: "Array of product SKUs",
				token: "skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Array or product unit sale prices",
				description: "Can be switched to array or product unit prices",
				token: "prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Enterprise ID",
				description: "The Commission Junction Enterprise ID",
				token: "enterprise_id",
				uv: ""
			}, {
				name: "Order ID",
				description: "Order ID",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Action ID",
				description: "Action ID",
				token: "action_id",
				uv: ""
			}, {
				name: "Currency",
				description: "Currency",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Discount",
				description: "0 if no discount or if array of individual discounts is being used.Else use Javascript to calculate.",
				token: "discount",
				uv: ""
			}, {
				name: "Array or Product Quantities",
				description: "Array or Product Quantities",
				token: "quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Array of Individual Product Discounts",
				description: "JS returning empty array if no individual discounts. Else check documentation on how to calculate.",
				token: "discounts",
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
			var url = document.location.protocol +
				"//www.emjcd.com/tags/c?containerTagId=" + this.valueForToken(
					"container_tag_id") + "&";

			for (var i = 0; i < this.valueForToken("skus").length; i++) {
				url += "ITEM" + (i + 1) + "=" + 
					this.valueForToken("skus")[i] + "&AMT" + (i + 1) + "=" + 
					this.valueForToken("prices")[i] + "&QTY" + (i + 1) + "=" + 
					this.valueForToken("quantities")[i] + "&";

				if (this.valueForToken("discounts").length ===
					this.valueForToken("skus").length) {
					url += "DCNT" + (i + 1) + "=" +
						this.valueForToken("discounts")[i] + "&";
				}
			}

			url += "CID=" + this.valueForToken("enterprise_id") +
				"&OID=" + this.valueForToken("order_id") +
				"&TYPE=" + this.valueForToken("action_id") +
				"&CURRENCY=" + this.valueForToken("currency");

			if (this.valueForToken("discounts").length !== this.valueForToken("skus").length) {
				url += "&DISCOUNT=" + this.valueForToken("discount");
			}

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
