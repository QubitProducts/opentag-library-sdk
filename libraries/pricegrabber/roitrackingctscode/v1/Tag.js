//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("pricegrabber.roitrackingctscode.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "ROI Tracking (CTS Code)",
		async: true,
		description: "Tracking tag to be placed on the confirmation page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account ID",
			description: "",
			token: "account_id",
			uv: ""
		}, {
			name: "Manufacturers",
			description: "",
			token: "manufacturers",
			uv: "universal_variable.transaction.line_items[#].product.manufacturer"
		}, {
			name: "Prices",
			description: "",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "SKUs",
			description: "",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "ID List",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Quantity List",
			description: "",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}],
		categories:[
			"Feed Management (Shopping Comparison)"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var pixel = new Image();
		var source = "https://www.pricegrabber.com/conversion.php?retid=" +
			this.valueForToken("account_id");
		var item, items = "";

		for (var i = 0, ii = this.valueForToken("ids").length; i < ii; i++) {
			item = [
				this.valueForToken("manufacturers")[i],
				"",
				this.valueForToken("prices")[i],
				this.valueForToken("skus")[i],
				this.valueForToken("ids")[i],
				this.valueForToken("quants")[i]
			];
			items += "&item" + (i + 1) + "=" + item.join("|");
		}

		source += items;
		pixel.src = source;
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
