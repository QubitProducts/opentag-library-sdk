//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.confirmationpage.v1.Tag", {
  config: {
    /*DATA*/
    name: "Purchase Tracking Pixel",
    async: true,
    description: "inSparq uses a tracking pixel to capture purchase data for two purposes: (1) As an input in calculating scores for trending products. (2) Tracking the business performance of inSparq installations in our analytics.",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [{
      name: "API Domain",
      description: "The API domain to use for calls to inSparq.",
      token: "apidomain",
      uv: ""
    }, {
      name: "Array of Product IDs",
      description: "Array of Product IDs",
      token: "ids",
      uv: "universal_variable.transaction.line_items[#].product.id"
    }, {
      name: "Array of Product Unit Sale Prices",
      description: "Array of Product Unit Sale Prices",
      token: "prices",
      uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
    }, {
      name: "Array of Product Quantities",
      description: "Array of Product Quantities",
      token: "quantities",
      uv: "universal_variable.transaction.line_items[#].quantity"
    }, {
      name: "Order ID",
      description: "Order ID",
      token: "id",
      uv: "universal_variable.transaction.order_id"
    }, {
      name: "Order Value",
      description: "Order Value",
      token: "subtotal",
      uv: "universal_variable.transaction.subtotal"
    }, {
      name: "Array of Product Names",
      description: "Array of Product Names",
      token: "names",
      uv: "universal_variable.transaction.line_items[#].product.name"
    }, {
      name: "inSparq API key",
      description: "inSparq API key",
      token: "insparq_api_key",
      uv: ""
    }, {
      name: "Coupons Used",
      description: "A pipe delimited list of the coupon codes used.",
      token: "vouchers",
      uv: "universal_variable.transaction.voucher"
    }, {
      name: "Buyer ID",
      description: "Unique identifier for the buyer.",
      token: "user_id",
      uv: "universal_variable.user.user_id"
    }, {
      name: "Buyer Name",
      description: "The buyer's name.",
      token: "user_name",
      uv: "universal_variable.user.name"
    }, {
      name: "Buyer Email",
      description: "The buyer's email.",
      token: "user_email",
      uv: "universal_variable.user.email"
    }]
    /*~DATA*/
  },
  script: function () {
    /*SCRIPT*/
    var ids = "";
    var names = "";
    var prices = "";
    var quantity = 0;

    for (var i = 0; i < this.valueForToken("ids").length; i++) {
      if (i > 0) {
        ids += "|";
        prices += "|";
        names += "|";
      }
      ids += this.valueForToken("ids")[i];
      names += this.valueForToken("names")[i];
      prices += this.valueForToken("prices")[i];
      quantity += this.valueForToken("quantities")[i];
    }

    var src = document.location.protocol +
      "//" + this.valueForToken("apidomain") + ".insparq.com/api/v20120319/key/" +
      this.valueForToken("insparq_api_key") +
      "/user?pageType=purcon";
    src += "&orderID=" + this.valueForToken("id");
    src += "&cartValue=" + this.valueForToken("subtotal");
    src += "&cartItemCount=" + quantity;
    src += "&productIDs=" + ids;
    src += "&productNames=" + names;
    src += "&productPrices=" + prices;
    src += "&couponsUsed=" + this.valueForToken("vouchers");
    src += "&buyerID=" + this.valueForToken("user_id");
    src += "&buyerName=" + this.valueForToken("user_name");
    src += "&buyerEmail=" + this.valueForToken("user_email");

    (new Image()).src = src;
    /*~SCRIPT*/
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