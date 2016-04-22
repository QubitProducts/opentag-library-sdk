//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"bazaarvoice.socialmeasurementconversionbeaconrequiredfieldsonly.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Social Measurement Conversion Beacon (Required fields only)",
			async: true,
			description: "To be placed on the conversion page in order to integrate Social Measurement with Bazaarvoice's other solutions.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "static.powerreviews.com/t/v1/tracker.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Bazaarvoice Merchant Group ID",
				description: "Should match Merchant Group ID from PowerReviews  Dashboard’s Configure Reviews section",
				token: "group_id",
				uv: ""
			}, {
				name: "Bazaarvoice Merchant ID",
				description: "Should match Merchant ID from PowerReviews  Dashboard’s Configure Reviews section",
				token: "merchant_id",
				uv: ""
			}, {
				name: "Bazaarvoice User ID",
				description: "Unique identifier for the customer writing the review or question/answer.",
				token: "merchant_user_id",
				uv: "universal_variable.user.user_id"
			}, {
				name: "Bazaarvoice Order ID",
				description: "Unique order identifier; at least one character.",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Bazaarvoice Order Subtotal",
				description: "Order subtotal (excluding tax, shipping and handling, and discounts).",
				token: "order_subtotal",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Bazaarvoice Item ID list",
				description: "An array of all unique item IDs in the order.",
				token: "ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Bazaarvoice Item Quantity List",
				description: "An array of quantities associated with all unique item IDs in the order.",
				token: "qtys",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Bazaarvoice Item Sale Price list",
				description: "An array of sale prices for all unique item IDs in the order.",
				token: "prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}],
		categories:[
			"Ratings & Review Engine"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			/*~script*/
		},
		pre: function() {
			/*pre*/
			/*~pre*/
		},
		post: function() {
			/*post*/
			var _this = this;
			try {
				var item_count = 0;
				var _this = this;
				var items = (function() {
					var tmp = [];
					for (var i = 0; i < _this.valueForToken("ids").length; i++) {
						tmp.push([
							_this.valueForToken("ids")[i],
							"",
							"",
							_this.valueForToken("qtys")[i],
							_this.valueForToken("prices")[i]
						]);
						item_count += _this.valueForToken("qtys")[i];
					}
					return tmp;
				})();
				window.items = items;
				
				var tracker = POWERREVIEWS.tracker.createTracker({
					merchantGroupId: "" + _this.valueForToken("group_id")
				});
				tracker.trackPageview("c", {
					merchantId: "" + this.valueForToken("merchant_id"),
					locale: "en_US",
					merchantUserId: "" + this.valueForToken("merchant_user_id"),
					orderId: "" + this.valueForToken("order_id"),
					orderSubtotal: "" + this.valueForToken("order_subtotal"),
					orderNumberOfItems: String(item_count),
					orderItems: items
				});
			} catch (e) {
				window.console && window.console.log(e)
			}
			/*~post*/
		}
	});
