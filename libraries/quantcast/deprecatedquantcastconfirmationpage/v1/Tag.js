//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"quantcast.deprecatedquantcastconfirmationpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "DEPRECATED QuantCast - Confirmation page",
			async: true,
			description: "To be placed on the confirmation page instead of the regular Quantcast tag.",
			html: "\n\n",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Account Number",
				description: "Your Quantcast account number",
				token: "account_no",
				uv: ""
			}, {
				name: "Order ID",
				description: "The unique order id for the transaction",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Revenue",
				description: "The total revenue for the transaction (uses subtotal, not grand total)",
				token: "revenue",
				uv: "universal_variable.transaction.subtotal"
			}],
		categories:[
			"Audience Management"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window._qevents = _qevents || [];

			var elem = document.createElement('script');
			elem.src = (document.location.protocol == "https:" ? "https://secure" :
				"http://edge") + ".quantserve.com/quant.js";
			elem.async = true;
			elem.type = "text/javascript";
			document.getElementsByTagName('head')[0].appendChild(elem);

			_qevents.push({
				qacct: "" + this.valueForToken("account_no"),
				labels: "_fp.event.Confirmation Page",
				orderid: "" + this.valueForToken("order_id"),
				revenue: "" + this.valueForToken("revenue")
			});
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
