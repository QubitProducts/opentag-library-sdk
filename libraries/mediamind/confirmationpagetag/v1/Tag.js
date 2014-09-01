//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mediamind.confirmationpagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Page Tag",
		async: true,
		description: "To be placed on the confirmation page only",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "MediaMind Confirmation Page Activity ID",
			description: "",
			token: "activity_id",
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
			name: "Product ID List",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product SKU List",
			description: "",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Product Quantity List",
			description: "",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window.ebRev = "" + this.valueForToken("order_total");
		window.ebOrderID = "" + this.valueForToken("order_id");
		window.ebProductID = "";
		window.ebProductInfo = "";
		window.ebQuantity = 0;
		window.ebRand = Math.random() * 1000000;

		var i = 0,
			ii = this.valueForToken("ids").length,
			script;

		for (; i < ii; i++) {
			ebProductID += this.valueForToken("ids")[i] + ",";
			ebProductInfo += this.valueForToken("skus")[i] + ",";
			ebQuantity += parseInt(this.valueForToken("quants")[i]);
		}

		ebProductID = ebProductID.slice(0, -1);
		ebProductInfo = ebProductInfo.slice(0, -1);
		ebQuantity = ebQuantity.toString();

		var script = document.createElement("script");
		script.src =
			"//bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&ActivityID=" +
			this.valueForToken("activity_id") + "&rnd=" + ebRand + "&Value=" +
			ebRev + "&OrderID=" + ebOrderID + "&ProductID=" + ebProductID +
			"&ProductInfo=" + ebProductInfo + "&Quantity=" + ebQuantity;
		document.getElementsByTagName("head")[0].appendChild(script);
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});