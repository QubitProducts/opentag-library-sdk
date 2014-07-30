//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.sharingwidgetbuttons.v1.Tag", {
  config: {
    /*DATA*/
    name: "Sharing Widget - Product Display Page",
    async: true,
    description: "Reward your e-commerce site’s shoppers for sharing on social! Place this tag on your product display page template to enable Sharing Widget buttons and recipient popout coupon.",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "${apidomain}.insparq.com/v2.0.0/widget/scripts/issw.js",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [{
      name: "API Domain",
      description: "The API domain to use for calls to inSparq.",
      token: "apidomain",
      uv: ""
    }, {
      name: "Client API Key",
      description: "Client API Key",
      token: "key",
      uv: ""
    }, {
      name: "jQuery Element Selector to Insert After",
      description: "e.g. #content",
      token: "selector",
      uv: ""
    }, {
      name: "jQuery",
      description: "e,g, jQuery , $ , myJquery etc.",
      token: "jQuery",
      uv: ""
    }, {
      name: "Publisher Name",
      description: "Your publisher name.",
      token: "clientname",
      uv: ""
    }, {
      name: "Product Name",
      description: "The product name.",
      token: "product_name",
      uv: "universal_variable.product.name"
    }, {
      name: "Product URL",
      description: "The product url.",
      token: "product_url",
      uv: "universal_variable.product.url"
    }, {
      name: "Product ID",
      description: "The product ID.",
      token: "product_id",
      uv: "universal_variable.product.id"
    }, {
      name: "Product Image",
      description: "The product image.",
      token: "product_image",
      uv: "universal_variable.product.image_url"
    }, {
      name: "Product Value",
      description: "The product value.",
      token: "product_value",
      uv: "universal_variable.product.unit_price"
    }, {
      name: "Pinboard Domain",
      description: "The Pinboard domain to use.",
      token: "pinboard_domain",
      uv: ""
    }]
    /*~DATA*/
  },
  script: function () {
    /*SCRIPT*/
    /*~SCRIPT*/
  },
  pre: function () {
    /*PRE*/
    var _tmp_html = '<div id="issw" data-issw-publisher-id="' + this.valueForToken("key") + '"' +
      ' data-issw-publisher-name="' + this.valueForToken("clientname") + '"' +
      ' data-issw-name="' + this.valueForToken("product_name") + '"' +
      ' data-issw-product-url="' + this.valueForToken("product_url") + '"' +
      ' data-issw-product-id="' + this.valueForToken("product_id") + '"' +
      ' data-issw-product-image-url="' + this.valueForToken("product_image") + '"' +
      ' data-issw-price-value="' + this.valueForToken("product_value") + '"' +
      ' data-issw-load-config="1" data-issw-page-mode="normal"></div>';

    window[''+this.valueForToken("jQuery")](_tmp_html).insertAfter(''+this.valueForToken("selector"));

    var head, styleElement;
    var css_url = "//" + this.valueForToken('pinboard_domain') + ".insparq.com/assets/vendors/" + this.valueForToken("clientname") + "/insparq-widget/share-widget.css";
    head = document.getElementsByTagName('head')[0];
    styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css_url;
    } else {
      styleElement.appendChild(document.createTextNode(css_url));
    }
    head.appendChild(styleElement);
    /*~PRE*/
  },
  post: function () {
    /*POST*/
    /*~POST*/
  }
});