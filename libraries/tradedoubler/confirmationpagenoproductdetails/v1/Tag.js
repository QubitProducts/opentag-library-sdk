//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"tradedoubler.confirmationpagenoproductdetails.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Confirmation Page - No Product Details",
			async: true,
			description: "Lightweight version of the confirmation page with no product details at all.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "tb${tracking_type}.tradedoubler.com/report?organization=${org_id}&event=${evt_id}&orderNumber=${order_id}&orderValue=${order_total}&currency=${currency}",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "TradeDoubler Tracking Type",
				description: "Enter hard coded value such as s for sales tracking or l for lead tracking",
				token: "tracking_type",
				uv: ""
			}, {
				name: "TradeDoubler Organization ID",
				description: "Your TradeDoubler Organization ID, provided by TradeDoubler",
				token: "org_id",
				uv: ""
			}, {
				name: "TradeDoubler Event ID",
				description: "Provided by TradeDoubler, this ID is used for reporting.",
				token: "evt_id",
				uv: ""
			}, {
				name: "Order ID",
				description: "The unique order reference for this transaction",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Value",
				description: "The value of this particular order",
				token: "order_total",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Currency",
				description: "The currency in which this order was paid",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Voucher",
				description: "Voucher code, if used",
				token: "voucher",
				uv: "voucher"
			}],
		categories:[
			"Affiliate Networks"
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
			/*~post*/
		}
	});
