//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("flixmedia.checkoutstartpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Checkout Start Page",
		async: true,
		description: "To fire on the page that loads right after the user clicks on the checkout button.",
		html: "<script type=\"text/javascript\" src=\"//media.flixcar.com/delivery/static/js/sio_ty.js\"></script>",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of product SKU codes",
			description: "Array of product SKU codes",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Array of product prices",
			description: "Array of product prices",
			token: "prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Array of product quantities",
			description: "Array of product quantities",
			token: "quants",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Unique Checkout ID",
			description: "It should match with the Checkout End Page tag Unique Checkout ID",
			token: "id",
			uv: ""
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var products = [];
     
    for (var i=0; i< this.valueForToken("skus").length; i++)
    {
        products.push({
           "mpn" : "" + this.valueForToken("skus")[i],
           "price" : this.valueForToken("prices")[i],
           "quantity" : this.valueForToken("quants")[i]
        });
    }
  
    FLIXSio.sioTy({
       "distributor_id" : "",
       "language" : "",
       "event" : "start",
       "basket_id" : "" + this.valueForToken("id"),
       "basket" : products 
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
