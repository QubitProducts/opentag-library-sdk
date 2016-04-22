//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("commissionjunction.commissionjunction.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Commission Junction",
		async: true,
		description: "Commission Junction is a global leader in Affiliate Marketing, Online Marketing, and Search Engine Marketing.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Commission Junction Enterprise ID",
			description: "View the Enterprise ID in your CJ Account Manager>Account>Tracking Settings area",
			token: "CID",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Type",
			description: "Parameter that is paired with the Action ID, a number assigned by Commission Junction",
			token: "TYPE",
			uv: ""
		}, {
			name: "Item IDs",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Item Amounts",
			description: "",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Item Quantities",
			description: "",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Currency",
			description: "If not available in UV, hard code e.g. \"GBP\"",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}],
		categories:[
			"Affiliate Networks"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var pixel = new Image();
		var src = "https://www.emjcd.com/u?";
		var items = [];
		var item;
		var j;

		for (var i = 0, ii = this.valueForToken("ids").length; i < ii; i++) {
			item = [];
			j = i + 1;
			item.push("ITEM" + j + "=" + this.valueForToken("ids")[i]);
			item.push("AMT" + j + "=" + this.valueForToken("prices")[i]);
			item.push("QTY" + j + "=" + this.valueForToken("quants")[i]);
			items.push(item.join("&"));
		}

		var params = [
			"CID=" + this.valueForToken("CID"),
			"OID=" + this.valueForToken("order_id"),
			"TYPE=" + this.valueForToken("TYPE"),
			items.join("&"),
			"CURRENCY=" + this.valueForToken("currency"),
			"METHOD=IMG"
		];

		pixel.src = src + params.join("&");
		/*
<img src="https://www.emjcd.com/u?CID=<ENTERPRISEID>&OID=<OID>&TYPE=<ACTIONID>&ITEM1=
<ITEMID>&AMT1=<AMT>&QTY1=<QTY>&CURRENCY=<CURRENCY>&METHOD=IMG" height="1" 
width="20">*/
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
