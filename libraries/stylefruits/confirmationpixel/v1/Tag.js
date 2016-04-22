//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("stylefruits.confirmationpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Pixel",
		async: true,
		description: "The stylefruits tracking code has to be integrated on the final page of your checkout process. The \ncode has to be generated dynamically for every order.",
		html: "<img src=\"//clicks.stylefruits.de/reg?partner=${partner_id}&price=${order_total}&order=${order_id}\"  alt=\"stylefruits.de\" width=\"1\" height=\"1\" /> \n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "StyleFruits Partner ID",
			description: "This is your partner-ID which must not be modified.",
			token: "partner_id",
			uv: ""
		}, {
			name: "Transaction Order Sub-Total",
			description: "The gross value of the customer’s  shopping basket",
			token: "order_total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Transaction Order ID",
			description: "The dynamically  generated, unique order-ID of your shop  system.",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}],
		categories:[
			"Feed Management (Shopping Comparison)"
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
