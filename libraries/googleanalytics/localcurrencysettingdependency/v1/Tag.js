//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.localcurrencysettingdependency.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Local Currency Setting (Dependency)",
			async: true,
			description: "Allows setting of a currency for the current transaction, which Google will automatically convert to the account's currency using an estimated exchange rate for reports. If used, this tag MUST be set as a dependency for the associated ecommerce tag.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Local Currency",
				description: "The currency code for the transaction's payment, eg 'GBP', 'EUR', or 'USD'",
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
			window._gaq = window._gaq || [];
			_gaq.push(['_set', 'currencyCode', '' + this.valueForToken("currency")]);
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
