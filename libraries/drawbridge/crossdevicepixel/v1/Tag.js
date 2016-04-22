//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("drawbridge.crossdevicepixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Cross Device Pixel",
		async: true,
		description: "Needs to go on Confirmation page of the desktop site. This pixel will enable Drawbridge to track those users who have potentially clicked to go on the mobile site but then not converted, later that day they go on the desktop site to check very out again and this time make a purchase, using complex algorithms Drawbridge can track these users and provide data showing how many people are converting across mobile to desktop, a useful and unique data set previously unavailable on mobile anywhere.",
		html: "<img style=\"display:none;\" src=\"https://api.adsymptotic.com/api/s/trackconversion?_pid=${pid}&_psign=${p_signature}&_aid=${appid}&_pc_ev_spd=${order_subtotal}&_pc_ev_tx_id=${order_id}&_pc_ev_cr=${order_currency}&_pc_ev_wt=1&_pc_ev_tp=4&_lbl=CT,PC&_pc_ev_ct=product\" />",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Drawbridge Partner ID",
			description: "The ID that Drawbridge have given you",
			token: "pid",
			uv: ""
		}, {
			name: "Drawbridge Partner Signature",
			description: "The code given to you by Drawbridge",
			token: "p_signature",
			uv: ""
		}, {
			name: "Drawbridge App ID",
			description: "The Drawbridge application ID",
			token: "appid",
			uv: ""
		}, {
			name: "Transaction Order Sub-total",
			description: "The order total minus any tax or shipping",
			token: "order_subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Transaction Order ID",
			description: "The ID given to the customer's specific transaction",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Transaction Order Currency",
			description: "The currency for the current transaction",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}],
		categories:[
			"Re-Targeting"
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
