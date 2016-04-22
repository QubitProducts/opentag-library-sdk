//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("xaxis.mookie.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Mookie",
		async: true,
		description: "Fires a pixel with transaction information and 5 custom parameters.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Xaxis Client ID",
			description: "Client identifier",
			token: "client_id",
			uv: ""
		}, {
			name: "Xaxis Tag Name",
			description: "Name of the Xaxis tag - usually references the functionality",
			token: "tag_name",
			uv: ""
		}, {
			name: "Xaxis Data Source",
			description: "Where the data is captured from",
			token: "data_source",
			uv: ""
		}, {
			name: "Xaxis Order Value",
			description: "Basket or order value",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Xaxis Transaction ID",
			description: "ID of the transaction",
			token: "transaction_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Xaxis Transaction Currency",
			description: "The currency of the transaction",
			token: "transaction_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Xaxis Custom Parameter 1",
			description: "Custom parameter. Leave blank if not used.",
			token: "param1",
			uv: ""
		}, {
			name: "Xaxis Custom Parameter 2",
			description: "Custom parameter. Leave blank if not used.",
			token: "param2",
			uv: ""
		}, {
			name: "Xaxis Custom Parameter 3",
			description: "Custom parameter. Leave blank if not used.",
			token: "param3",
			uv: ""
		}, {
			name: "Xaxis Custom Parameter 4",
			description: "Custom parameter. Leave blank if not used.",
			token: "param4",
			uv: ""
		}, {
			name: "Xaxis Custom Parameter 5",
			description: "Custom parameter. Leave blank if not used.",
			token: "param5",
			uv: ""
		}],
		categories:[
			"Audience Management"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		var img = new Image(0, 0),
			arr = [],
			obj = {
				migClientId: '' + this.valueForToken("client_id"),
				migAction: '' + this.valueForToken("tag_name"),
				migSource: '' + this.valueForToken("data_source"),
				migParam1: '' + this.valueForToken("param1"),
				migParam2: '' + this.valueForToken("param2"),
				migParam3: '' + this.valueForToken("param3"),
				migParam4: '' + this.valueForToken("param4"),
				migParam5: '' + this.valueForToken("param5"),
				migValue: '' + this.valueForToken("order_total"),
				migXId: '' + this.valueForToken("transaction_id"),
				migCurrency: '' + this.valueForToken("transaction_currency")
			};
		for (var key in obj) {
			arr.push(key + "=" + obj[key]);
		}
		img.src = "//t.mookie1.com/t/v1/event?" + arr.join("&");
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
