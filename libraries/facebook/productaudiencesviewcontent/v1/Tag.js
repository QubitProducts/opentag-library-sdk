//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("facebook.productaudiencesviewcontent.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "Product Audiences - ViewContent",
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
        description: "Product price, if none, use following hardcoded value  instead : 0.00",
        token: "product_value",
        uv: "universal_variable.product.unit_price"
      }, {
        name: "Currency",
        description: "",
        token: "currency",
        uv: "universal_variable.product.currency"
      }, {
        name: "Product Name",
        description: "Product Name",
        token: "content_name",
        uv: "universal_variable.product.name"
      }, {
        name: "Category",
        description: "Category",
        token: "content_category",
        uv: "universal_variable.product.category"
      }, {
        name: "Product ID",
        description: "Product ID(s)",
        token: "content_id",
        uv: "universal_variable.product.id"
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

		fbq('track', 'ViewContent', {
		  content_name: this.valueForToken("content_name"),
		  content_category: this.valueForToken("content_category"),
		  content_ids: this.valueForToken("content_id"),
		  content_type: 'product',
		  value: this.valueForToken("product_value"),
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
