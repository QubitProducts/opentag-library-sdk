//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("olapic.carouselwidget.v1.Tag", {
  config: {
    /*DATA*/
    name: "Carousel Widget",
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
      description: "This is the AlphaNumeric Identifier key for the customers account to allow communication to the Olapic servers for their account.",
      token: "apikey"
    }, {
      name: "Olapic Widget Reference",
      description: "This is the AlphaNumeric Identifier key used to reference to a specific widget on the Olapic Servers.",
      token: "widgetref"
    }, {
      name: "Element Reference",
      description: "This is the reference to the div id used on the page which Olapic needs to target in order to inject the widget.",
      token: "elementref"
    }, {
      name: "Reference Key",
      description: "This is an optional paramater used to dynamically reference the widget to a specific product or product category based on the unique ID values passed in the product Feed.",
      defaultValue: "-",
      token: "refkey"
    }, {
      name: "Append DIV after Selector",
      description: "The location for where the <div/> created by the script will be inserted into the DOM",
      defaultValue: "body",
      token: "appendat"
    }]
    /*~DATA*/
  },
  script: function () {
    /*SCRIPT*/
    var olapicEl = document.createElement("div");
    olapicEl.id = this.valueForToken("elementref");
    if (document.querySelectorAll(this.valueForToken("appendat")).length > 0) {
      document.querySelectorAll(this.valueForToken("appendat"))[0].appendChild(olapicEl);
      var olapicJs = document.createElement("script");
      olapicJs.type = "text/javascript";
      olapicJs.async = true;
      olapicJs.src = "//photorankstatics-a.akamaihd.net/81b03e40475846d5883661ff57b34ece/static/frontend/latest/build.min.js";
      olapicJs.setAttribute("data-olapic", this.valueForToken("elementref"));
      olapicJs.setAttribute("data-instance", this.valueForToken("widgetref"));
      olapicJs.setAttribute("data-apikey", this.valueForToken("apikey"));
      if (this.valueForToken("refkey") !== "-") {
        olapicJs.setAttribute("data-olapic", this.valueForToken("refkey"));
      }
      olapicEl.parentNode.insertBefore(olapicJs, olapicEl.nextSibling);
    }
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