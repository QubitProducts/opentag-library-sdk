//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("insparq.sharingwidgetbuttons.v1.Tag", {
  getDefaultConfig: function () {
      return {
    /*config*/
    name: "Sharing Widget for PDP",
    async: true,
    description: "Reward your e-commerce site’s shoppers for sharing on social! Place this tag on your PDP page to enable Sharing Widget buttons and recipient popout coupon.",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "//pinboard.insparq.com/v2.0.0/widget/scripts/issw.js",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [
      {
      name: "inSparq API Key",
      description: "inSparq API Key",
      token: "insparq_api_key",
      uv: ""
    },{
      name: "Sharing Widget Stylesheet URL",
      description: "URL for Sharing Widget CSS",
      token: "stylesheeturl",
      uv: ""
    },{
      name: "ISSW Publisher Name",
      description: "Store name",
      token: "isswpublishername",
      uv: ""
    },{
      name: "Product Name",
      description: "Product name",
      token: "isswproductname",
      uv: "universal_variable.product.name"
    },{
      name: "Product ID",
      description: "Product ID",
      token: "isswproductid",
      uv: "universal_variable.product.id"
    },{
      name: "Product URL",
      description: "Product URL",
      token: "isswproducturl",
      uv: "universal_variable.product.url"
    },{
      description: "Product Price",
      name: "Product Price",
      token: "isswproductprice",
      uv: "universal_variable.product.unit_price"
    },{
      name: "jQuery Element Selector",
      description: "e.g. insertAfter(...)  ,  appendTo(...)  , insertBefore(....) etc.",
      token: "selector",
      uv: ""
    },{
      name: "jQuery",
      description: "e,g, jQuery , $ , myJquery etc.",
      token: "jQuery",
      uv: ""
    }],
		categories:[
			"Social"
		]

    /*~config*/
		};
  },
  script: function () {
    /*script*/
    /*~script*/
  },
  pre: function () {
    /*pre*/
    var _tmp_html = '<div id="issw" data-issw-publisher-id = "' + _this.valueForToken("insparq_api_key") + '" data-issw-publisher-name = "' + _this.valueForToken("isswpublishername") + '" data-issw-name = "' + _this.valueForToken("isswproductname") + '" data-issw-product-id = "' + _this.valueForToken("isswproductid") + '" data-issw-product-url = "' + _this.valueForToken("isswproducturl") + '" data-issw-price-value = "' + _this.valueForToken("isswproductprice") + '" data-issw-load-config = "1" ></div>';
    
    window['' + _this.valueForToken("jQuery")](_tmp_html).insertAfter('' + _this.valueForToken("selector"));

      var head, styleElement;
      var css_url = '' + _this.valueForToken("stylesheeturl");
      head = document.getElementsByTagName('head')[0];
      styleElement = document.createElement('style');
      styleElement.setAttribute('type', 'text/css');
      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css_url;
      } else {
        styleElement.appendChild(document.createTextNode(css_url));
      }
      head.appendChild(styleElement);

    /*~pre*/
  },
  post: function () {
    /*post*/
    /*~post*/
  }
});
