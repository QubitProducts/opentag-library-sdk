//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"liveclicker.liveclickerconfirmationtagwithallparameters.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Liveclicker - Confirmation tag with all parameters",
			async: true,
			description: "Should be placed on the confirmation page only.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "https://sc.liveclicker.net/service/track?kind=order&account_id=${account_id}&value=${subtotal}&order_id=${order_id}&currency=${currency}",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Liveclicker Account ID",
				description: "",
				token: "account_id",
				uv: ""
			}, {
				name: "Subtotal",
				description: "",
				token: "subtotal",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Currency",
				description: "",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}],
		categories:[
			"Web Analytics"
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
