//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sizmek.basketpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basket Page Tag",
		async: true,
		description: "To be placed only on the basket",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Sizmek Basket Activity ID",
			description: "",
			token: "activity_id",
			uv: ""
		}, {
			name: "Basket Sub Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.basket.subtotal"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.basket.id"
		}, {
			name: "Basket ID List",
			description: "",
			token: "ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Basket SKU List",
			description: "",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Basket Quantity List",
			description: "",
			token: "quants",
			uv: "universal_variable.basket.line_items[#].quantity"
		}],
		categories:[
			"Advertising Network"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
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
