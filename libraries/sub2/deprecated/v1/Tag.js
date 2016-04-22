//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sub2.deprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "DEPRECATED",
		async: true,
		description: "The script should be added to the Order Confirmation page on the website. The purpose of this script is to capture the relevant details relating to the user's order.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Order ID",
			description: "Transaction Order ID",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Affiliation",
			description: "Voucher Code",
			token: "affiliation",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Order Total excluding Shipping Cost",
			description: "Order Total",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order Tax",
			description: "Order Tax",
			token: "tax",
			uv: "universal_variable.transaction.tax"
		}, {
			name: "Shipping Cost",
			description: "Shipping Cost",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
		}, {
			name: "City",
			description: "City",
			token: "city",
			uv: "universal_variable.transaction.delivery.city"
		}, {
			name: "Country",
			description: "Country",
			token: "country",
			uv: "universal_variable.transaction.delivery.country"
		}, {
			name: "List of Product IDs",
			description: "List of Purchased items",
			token: "product_id",
			uv: "universal_variable.transaction.line_items[#].product.id"
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
		var ii = 0;
		var waitForConfirmationScripts = function() {
			if ((typeof window.S2Tech_addOrder === 'function') &&
					(typeof window.S2Tech_addItem === 'function') &&
					(typeof window.S2Tech_MatchData_NA === 'function')) {
				S2Tech_addOrder("" + _this.valueForToken("orderId"),
				"" + _this.valueForToken("affiliation"),
				"" + _this.valueForToken("total"),
				"" + _this.valueForToken("tax"),
				"" + _this.valueForToken("shipping"),
				"" + _this.valueForToken("city"),
				"" + _this.valueForToken("county"),
				"" + _this.valueForToken("country"));

				for (var i = 0; i < _this.valueForToken("product_id").length; i++) {
					S2Tech_addItem(
							"" + _this.valueForToken("orderId"),
							_this.valueForToken("sku")[i],
							_this.valueForToken("product_name")[i],
							_this.valueForToken("category_unit")[i],
							_this.valueForToken("unit_price")[i],
							_this.valueForToken("quantity")[i]);
				}

				S2Tech_MatchData_NA(
						"" + _this.valueForToken("title"),
						"" + _this.valueForToken("forename"),
						"" + _this.valueForToken("lastname"),
						"" + _this.valueForToken("address1"),
						"" + _this.valueForToken("address2"),
						"" + _this.valueForToken("address3"),
						"" + _this.valueForToken("address4"),
						"" + _this.valueForToken("postcode"),
						"" + _this.valueForToken("email"),
						"" + _this.valueForToken("landline"),
						"" + _this.valueForToken("mobile"),
						"" + _this.valueForToken("optins"));
			} else if (ii < 50) {
				ii++;
				setTimeout(waitForConfirmationScripts, 100);
			}
		};

		waitForConfirmationScripts();
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
