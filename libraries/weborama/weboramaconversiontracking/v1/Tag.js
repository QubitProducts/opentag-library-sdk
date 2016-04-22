//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("weborama.weboramaconversiontracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Weborama - Conversion Tracking",
		async: true,
		description: "Conversion tracking script",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Client Id",
			description: "Set your client id here",
			token: "CLIENT_ID",
			uv: ""
		}, {
			name: "Amount",
			description: "Set total price here",
			token: "AMOUNT",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Invoice Id",
			description: "set your invoice id or order Id",
			token: "ORDERID",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Quantity",
			description: "Number of items purchased",
			token: "PRODUCT_IDS",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Existing Client?",
			description: "set to 1 if the client is known",
			token: "IS_CLIENT",
			uv: "universal_variable.user.returning"
		}, {
			name: "Optional 1",
			description: "Optional value. Set to empty string if not used.",
			token: "OPTIONAL1",
			uv: ""
		}, {
			name: "Optional 2",
			description: "Set to empty string if no value",
			token: "OPTIONAL2",
			uv: ""
		}, {
			name: "Customer Name",
			description: "Set to Customer Name",
			token: "CUSTOMER_NAME",
			uv: "universal_variable.user.name"
		}, {
			name: "Host of the server",
			description: "Where should the server calls be made to",
			token: "HOST",
			uv: ""
		}, {
			name: "Site",
			description: "Site type, numerical value",
			token: "SITE",
			uv: ""
		}, {
			name: "Conversion Page",
			description: "Conversion Page type, numerical value",
			token: "CONVERSION_PAGE",
			uv: ""
		}],
		categories:[
			"Advertising Network"
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
		window.adperftrackobj = {
			client: "" + this.valueForToken("CLIENT_ID"),
			amount: "" + this.valueForToken("AMOUNT"),
			invoice_id: "" + this.valueForToken("ORDERID"),
			quantity: this.valueForToken("PRODUCT_IDS").length,
			is_client: this.valueForToken("IS_CLIENT"),
			optional_parameters: {
				"N1": "" + this.valueForToken("OPTIONAL1"),
				"N2": "" + this.valueForToken("OPTIONAL2"),
				"customer_name": "" + this.valueForToken("CUSTOMER_NAME")
			},

			fullhost: '' + this.valueForToken("HOST"),
			site: this.valueForToken("SITE"),
			conversion_page: this.valueForToken("CONVERSION_PAGE")
		}
		try {
			adperfTracker.track(adperftrackobj);
		} catch (err) {}
		/*~post*/
	}
});
