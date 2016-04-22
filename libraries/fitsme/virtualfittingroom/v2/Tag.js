//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("fitsme.virtualfittingroom.v2.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Virtual Fitting Room",
		async: true,
		description: "We provide virtual fitting room solutions online stores and help people find their right size and fit.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product SKU",
			description: "The SKU identifying the current product",
			token: "sku",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "Product Title",
			description: "The name of the product, localized if necessary.",
			token: "name",
			uv: "universal_variable.product.name"
		}, {
			name: "Product Category",
			description: "The primary category this product belongs in.",
			token: "category",
			uv: "universal_variable.product.category"
		}, {
			name: "Product Image URL",
			description: "URL to a high-quality image representing this product.",
			token: "prodimg",
			uv: "universal_variable.product.image_url"
		}, {
			name: "Size ID Array",
			description: "An array of sizeIDs of the same length and in the same order as the Size Title / Size Price arrays.",
			token: "sizeids",
			uv: ""
		}, {
			name: "Size Title Array",
			description: "An array of size titles of the same length and in the same order as the Size ID / Size Price arrays.",
			token: "titles",
			uv: ""
		}],
		categories:[
			"Merchandising & Rich Media"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/

		(function() {
			var fm = document.createElement('script');
			fm.type = 'text/javascript'; fm.async = true;
			fm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'integration.fits.me/vfr.js?' + (new Date()).getTime();
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fm, s);
		})();

		/*~script*/
	},
	pre: function() {
		/*pre*/

		var sizeArray = [];
		console.log(this.valueForToken("titles")[1]);
		for (var x=0; x < this.valueForToken("sizeids").length; x++) {
			var newObj = {
				ID: this.valueForToken("sizeids")[x],
				Title: this.valueForToken("titles")[x]
			};
			sizeArray.push(newObj);
		}

		window.FitsMeData = {
			Id: this.valueForToken("sku"),
			ProductTitle: this.valueForToken("name"),
			ProductImageUrl: this.valueForToken("prodimg"),
			ProductCategories: this.valueForToken("category"),
			Sizes : sizeArray,
			Events: {
				SizeCallback: function (data) {  }
			}
		};

		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
