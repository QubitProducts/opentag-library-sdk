//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"flixmedia.checkoutstartpagewithextraeanparameter.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Checkout Start Page with extra EAN parameter",
			async: true,
			description: "This version also sends through the EAN or UPC of the product that is being checked out. Use this version only if the EAN product value is available.",
			html: "<script type=\"text/javascript\" src=\"//media.flixcar.com/delivery/static/js/sio_ty.js\"></script>",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Array of Product SKU codes",
				description: "Array of Product SKU codes",
				token: "skus",
				uv: "universal_variable.basket.line_items[#].product.sku_code"
			}, {
				name: "Array of Product Unit Sale Prices",
				description: "Array of Product Unit Sale Prices",
				token: "prices",
				uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
			}, {
				name: "Array of Product EAN values",
				description: "Use a JS expression to generate an array of equal length to the other arrays used",
				token: "eans",
				uv: ""
			}, {
				name: "Unique Checkout ID",
				description: "The value should match that of the Checkout End page tag Unique Checkout ID parameter",
				token: "id",
				uv: ""
			}, {
				name: "Array of Product Quantities",
				description: "Array of Product Quantities",
				token: "quants",
				uv: "universal_variable.basket.line_items[#].quantity"
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
			for (var i = 0; i < this.valueForToken("skus").length; i++)
			{
				products.push({
					"mpn": "" + this.valueForToken("skus")[i],
					"price": this.valueForToken("prices")[i],
					"quantity": this.valueForToken("quants")[i],
					"ean": "" + this.valueForToken("eans")[i]
				});
			}

			FLIXSio.sioTy({
				"distributor_id": "",
				"language": "",
				"event": "start",
				"basket_id": "" + this.valueForToken("id"),
				"basket": products
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
