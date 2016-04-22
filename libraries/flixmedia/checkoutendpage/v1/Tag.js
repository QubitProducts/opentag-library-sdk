//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("flixmedia.checkoutendpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Checkout End Page",
		async: true,
		description: "To fire on the confirmation page. The page that loads right after the order has been placed.",
		html: "<script type=\"text/javascript\" src=\"//media.flixcar.com/delivery/static/js/sio_ty.js\"></script>",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of product sku codes",
			description: "Array of product sku codes",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Array of product unit sale prices",
			description: "Array of product unit sale prices",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Array of product quantities",
			description: "Array of product quantities",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Unique Checkout ID",
			description: "It should match with the Checkout Start Page tag Unique Checkout ID",
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
    for (var i=0; i< this.valueForTokewn("skus").length; i++)
    {
        products.push({
           "mpn" : this.valueForTokewn("skus")[i] + "",
           "price" : this.valueForTokewn("prices")[i],
           "quantity" : this.valueForTokewn("quantities")[i]
        });
    }
  
    FLIXSio.sioTy({
       "distributor_id" : "",
       "language" : "",
       "event" : "end",
       "basket_id" : this.valueForTokewn("id"),
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
