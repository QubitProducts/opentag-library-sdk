//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("olapic.checkoutpixel.v1.Tag", {
  config: {
    /*DATA*/
    name: "Checkout Pixel",
    async: false,
    description: "",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [{
      name: "Olapic API Key",
      description: "This is the AlphaNumeric Identifier key for the customers account to allow communication to the Olapic servers.",
      token: "apikey"
    }, {
      name: "User ID",
      description: "The ID for the user.",
      token: "userid",
      uv: "universal_variable.user.user_id"
    }, {
      name: "User Name",
      description: "The name of the user.",
      token: "username",
      uv: "universal_variable.user.name"
    }, {
      name: "User Email",
      description: "The email for the user.",
      token: "useremail",
      uv: "universal_variable.user.email"
    }, {
      name: "Order ID",
      description: "The ID for the transaction.",
      token: "orderid",
      uv: "universal_variable.transaction.order_id"
    }, {
      name: "Order Total",
      description: "The total for the transaction.",
      token: "ordertotal",
      uv: "universal_variable.transaction.total"
    }, {
      name: "Currency",
      description: "The currency for the transaction.",
      token: "currency",
      uv: "universal_variable.transaction.currency"
    }, {
      name: "Product IDs",
      description: "The IDs for the products purchased.",
      token: "productids",
      uv: "universal_variable.transaction.line_items[#].product.id"
    }, {
      name: "Product Prices",
      description: "The prices for the products purchased.",
      token: "productprices",
      uv: "universal_variable.transaction.line_items[#].product.unit_price"
    }]
    /*~DATA*/
  },
  script: function () {
    var olapicProducts = [];
    var productIds = this.valueForToken("productids");
    var productPrices = this.valueForToken("productprices");
    for (var i = productIds.length - 1; i >= 0; i--) {
      olapicProducts.push({
        "id": productIds[i],
        "price": productPrices[i]
      });
    }
    var olapicCheckout = document.createElement("script");
    olapicCheckout.async = true;
    olapicCheckout.setAttribute("olapicProducts", JSON.stringify(olapicProducts));
    olapicCheckout.setAttribute("olapicApiKey", encodeURIComponent("" + this.valueForToken("apikey")));
    olapicCheckout.setAttribute("olapicIdentifier", encodeURIComponent("" + this.valueForToken("userid")));
    olapicCheckout.setAttribute("olapicAmount", encodeURIComponent("" + this.valueForToken("ordertotal")));
    olapicCheckout.setAttribute("olapicCurrencyCode", encodeURIComponent("" + this.valueForToken("currency")));
    olapicCheckout.setAttribute("olapicTransactionId", encodeURIComponent("" + this.valueForToken("orderid")));
    olapicCheckout.setAttribute("olapicEmail", encodeURIComponent("" + this.valueForToken("useremail")));
    olapicCheckout.setAttribute("olapicName", encodeURIComponent("" + this.valueForToken("username")));
    olapicCheckout.src = "//www.photorank.me/static/js/olapic.checkout.js";
    document.body.appendChild(olapicCheckout);
  },
  pre: function () {
    /*PRE*/
    /*~PRE*/
  },
  post: function () {
    /*POST*/
    /*~POST*/
  }
});