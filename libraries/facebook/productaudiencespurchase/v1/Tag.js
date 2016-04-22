//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("facebook.productaudiencespurchase.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "Product Audiences - Purchase",
      async: true,
      description: "",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name: "FB Country Code",
        description: "e.g. en_UK ( if not sure, use : en_US )",
        token: "url_locale",
        uv: ""
      }, {
        name: "Pixel ID",
        description: "Client Specific (e.g. 6007143437659)",
        token: "pixel_id",
        uv: ""
      }, {
        name: "Value",
        description: "transaction total, instead : 0.00",
        token: "transaction_total",
        uv: "universal_variable.transaction.total"
      }, {
        name: "Currency",
        description: "",
        token: "currency",
        uv: "universal_variable.transaction.currency"
      }]
      /*~config*/
    };
	},
	script: function() {
		/*script*/
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','//connect.facebook.net/' + this.valueForToken("url_locale") + '/fbevents.js');
		// Insert Your Custom Audience Pixel ID below.
		fbq('init', this.valueForToken("pixel_id"));

		var product_ids = [];
		if(universal_variable.transaction.line_items){
			for (var i = 0; i < universal_variable.transaction.line_items.length; i++) {
				product_ids.push(universal_variable.transaction.line_items[i].product.sku_code)
			}
		}

		fbq('track', 'Purchase', {
		  content_ids: product_ids,
		  content_type: 'product',
		  value: this.valueForToken("transaction_total"),
		  currency: this.valueForToken("currency")
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
