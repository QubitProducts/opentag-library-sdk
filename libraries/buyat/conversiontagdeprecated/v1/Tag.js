//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("buyat.conversiontagdeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Tag DEPRECATED",
		async: true,
		description: "",
		html: "<img src=\"https://www.perfiliate.com/brains/process.php?PROGID=${id}&TYPE=pp&AMOUNT=${order_total}&TRANSID=${order_id}&PPDATA=${ppdata}\" height=\"1\" width=\"1\"/>",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "BuyAt ID",
			description: "",
			token: "id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "BuyAt Conversion Data",
			description: "Custom data specified by BuyAt",
			token: "ppdata",
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
