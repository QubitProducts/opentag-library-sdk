//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("infectious.impressiondeskpixelwithparameters.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Impression Desk Pixel With Parameters",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pixel Id",
			description: "Unique identifier for this pixel",
			token: "pixel_id",
			uv: ""
		},
		{
			name: "Doubleclick Source",
			description: "Doubleclick Source",
			token: "src",
			uv: ""
		},
		{
			name: "Doubleclick Type",
			description: "Doubleclick Type",
			token: "type",
			uv: ""
		},
		{
			name: "Doubleclick Category",
			description: "Doubleclick Category",
			token: "cat",
			uv: ""
		},
		{
			name: "Page Id",
			description: "Page Id",
			token: "page_id",
			uv: ""
		},
		{
			name: "Order Code",
			description: "Order Code",
			token: "order_code",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Order Value",
			description: "Order Value",
			token: "order_value",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "User Id",
			description: "User Id",
			token: "user_id",
			uv: "universal_variable.user.user_id"
		},
		{
			name: "Gender",
			description: "Gender",
			token: "gender",
			uv: ""
		},
		{
			name: "User Score",
			description: "User Score",
			token: "user_score",
			uv: ""
		},
		{
			name: "Segment 3g",
			description: "Segment 3g",
			token: "segment_3g",
			uv: ""
		},
		{
			name: "Page Type",
			description: "Page Type",
			token: "page_type",
			uv: "universal_variable.page.type"
		},
		{
			name: "Product SKU",
			description: "Product SKU",
			token: "product_SKU",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "Basket Value",
			description: "Basket Value",
			token: "basket_value",
			uv: "universal_variable.basket.total"
		},
		{
			name: "Product Price",
			description: "Product Price",
			token: "product_price",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "Product Brand",
			description: "Product brand",
			token: "product_brand",
			uv: "universal_variable.transaction.line_items[#].product.manufacturer"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/

		var skus = [], prices = [], brands = [];
		for (var i = 0; i < this.valueForToken("product_SKU").length; i++) {
			skus.push(this.valueForToken("product_SKU")[i]);
			prices.push(this.valueForToken("product_price")[i]);
			brands.push(this.valueForToken("product_brand")[i]);
		}

		var src = [
			"//pix.impdesk.com/pixel/px.js?id=" + this.valueForToken("pixel_id"),
			"&page_id=" + this.valueForToken("page_id"),
			"&order_code=" + this.valueForToken("order_code"),
			"&order_value=" + this.valueForToken("order_value"),
			"&ud1=" + this.valueForToken("user_id"),
			"&ud2=" + this.valueForToken("gender"),
			"&ud3=" + this.valueForToken("user_score"),
			"&ud4=" + this.valueForToken("segment_3g"),
			"&ud5=" + this.valueForToken("page_type"),
			"&ud6=" + skus.join(","),
			"&ud7=" + this.valueForToken("basket_value"),
			"&ud8=" + skus.length,
			"&ud9=" + prices.join(","),
			"&ud10=" + brands.join(",")
		].join("");

		var x = document.createElement("script");
		x.src = (document.location.protocol === "https:") ?
			"https:" + src :
			"http:" + src;

		x.type = "text/javascript";
		x.async = true;
		x.defer = true;
		document.getElementsByTagName("head")[0].appendChild(x);

		var y = document.createElement("script");
		y.src = (document.location.protocol === "https:") ?
			"https:" + "//secure-id.impressiondesk.com/px?id=" + this.valueForToken("pixel_id") + "&seg=" + this.valueForToken("pixel_id") :
			"http:" + "//secure-id.impressiondesk.com/px?id=" + this.valueForToken("pixel_id") + "&seg=" + this.valueForToken("pixel_id");

		y.type = "text/javascript";
		y.async = true;
		y.defer = true;
		document.getElementsByTagName("head")[0].appendChild(y);

		src = "https://ad.doubleclick.net/activity;src=" + this.valueForToken("src") + ";type=" + this.valueForToken("type") + ";cat=" + this.valueForToken("cat") + ";";
		src += "ord=" + this.valueForToken("order_code") + ";";
		src += "qty=" + skus.length + ";";
		src += "cost=" + this.valueForToken("order_value") + "?";

		var img = document.createElement("img");
	    img.setAttribute("src", src);
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
