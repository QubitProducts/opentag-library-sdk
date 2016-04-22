//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleaffiliatenetworkconversion.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Affiliate Network Conversion",
			async: true,
			description: "Conversion script for Google Affiliate Network",
			html: "<img src=\"https://gan.doubleclick.net/gan_conversion?advid=${ADVERTISER_ID}&oid=${ORDER_ID}&amt=${SUB_TOTAL}&fxsrc=${CURRENCY}&clickid=${CLICK_ID}&event_type=${EVENT_TYPE}\" width=\"1\" height=\"1\">",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Advertiser Id",
				description: "Your Company ID, provided by Google Affiliate Network. This value is the same for all orders.",
				token: "ADVERTISER_ID",
				uv: ""
			}, {
				name: "Order Id",
				description: "The customer order id, a unique identifier that allows you to map this conversion",
				token: "ORDER_ID",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Subtotal",
				description: "The total conversion value",
				token: "SUB_TOTAL",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Currency Code",
				description: "Currency code related to the order amounts and Product prices.",
				token: "CURRENCY",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Click Id",
				description: "Unique identifier generated on each click. Set to 0 if not used.",
				token: "CLICK_ID",
				uv: ""
			}, {
				name: "Event Type",
				description: "Define the type of event. Valid options are \"transaction\" or \"action\".",
				token: "EVENT_TYPE",
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
