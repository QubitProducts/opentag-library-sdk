//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("perfectstormmedia.conversiontag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Tag",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Perfect Storm Client Name",
			description: "",
			token: "client_name",
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
			token: "product_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var img = document.createElement("img");
		img.height = 1;
		img.width = 1;
		img.style.display = "none";

		var i = 0;
		ii = this.valueForToken("product_list").length, product_ids = "";

		for (; i < ii; i++) {
			product_ids += this.valueForToken("product_list")[i] + "|";
		}
		product_ids = encodeURIComponent(encodeURI(product_ids.slice(0, -1)));

		img.src = encodeURI(
			"https://secure.perfectstormmedia.com/tracking/convert.php?c=" + this.valueForToken(
				"client_name") + "&v=" + this.valueForToken("order_total") +
			"&fn=&ln=&e=&ref=" + this.valueForToken("order_id") + "&d=<?=") +
			product_ids;

		document.body.appendChild(img);
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
