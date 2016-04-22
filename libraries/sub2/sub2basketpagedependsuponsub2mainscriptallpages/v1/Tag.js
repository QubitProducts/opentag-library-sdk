//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sub2.sub2basketpagedependsuponsub2mainscriptallpages.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Sub2 - Basket Page (depends upon \"Sub2 - Main Script - All Pages\")",
			async: true,
			description: "This script should be placed on the basket page and fire each time the contents of that basket change",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "List of Product SKUs",
				description: "List of Product SKUs",
				token: "sku",
				uv: "universal_variable.basket.line_items[#].product.sku_code"
			}, {
				name: "List of Product IDs",
				description: "List of Product IDs",
				token: "product_id",
				uv: "universal_variable.basket.line_items[#].product.id"
			}, {
				name: "List of Product Names",
				description: "List of Product Names",
				token: "product_name",
				uv: "universal_variable.basket.line_items[#].product.name"
			}, {
				name: "List or Product Prices",
				description: "List or Product Prices",
				token: "unit_price",
				uv: "universal_variable.basket.line_items[#].product.unit_price"
			}, {
				name: "List of Product Quantities",
				description: "List of Product Quantities",
				token: "quantity",
				uv: "universal_variable.basket.line_items[#].quantity"
			}],
		categories:[
			"Audience Management"
		]

			/*~config*/
      };
		},
		script: function() {
			/*script*/
			var _this = this;
			var waitFor_S2Tech_SendBasket = setInterval(function() {
				if (typeof S2Tech_SendBasket === 'function') {
					clearInterval(waitFor_S2Tech_SendBasket);

					var basketData = "<Store>";

					for (var i = 0; i < _this.valueForToken("sku").length; i++) {
						basketData += "<Product>";
						basketData += "<SKU>" + _this.valueForToken("sku")[i] + "</SKU>";
						basketData += "<Product_ID>" + _this.valueForToken("product_id")[i] +
							"</Product_ID>";
						basketData += "<Product_Name>" + _this.valueForToken("product_name")[i] +
							"</Product_Name>";
						basketData += "<Unit_Price>" + _this.valueForToken("unit_price")[i] +
							"</Unit_Price>";
						basketData += "<Quantity>" + _this.valueForToken("quantity")[i] +
							"</Quantity>";
						basketData += "</Product>";
					}

					basketData += "</Store>";

					S2Tech_SendBasket(basketData);
				}
			}, 100);

			setTimeout(function() {
				clearInterval(waitFor_S2Tech_SendBasket);
			}, 5000);
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
