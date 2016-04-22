//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("olapic.widgetinstance.v1.Tag", {
  getDefaultConfig: function () {
      return {
    /*config*/
    name: "Widget Instance",
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
      name: "Olapic Widget Instance Reference",
      description: "This is the AlphaNumeric Identifier key used to reference to a specific widget instance on the Olapic Servers.",
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
      name: "Widget Mode",
      description: "This is an optional paramater used to set widget mode. Accepted values are \"live\" and \"development\". Set the value to \"development\" for development purposes (warning: bypasses cache layer, and should not be used for production use).",
      defaultValue: "live",
      token: "widgetmode"
    }, {
      name: "Append DIV after Selector",
      description: "The location for where the <div/> created by the script will be inserted into the DOM. Example: .pdp-content or #side-content",
      defaultValue: "body",
      token: "appendat"
    }],
		categories:[
			"Personalisation Platform"
		]

    /*~config*/
		};
  },
  script: function () {
    /*script*/
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
      olapicJs.setAttribute("data-mode", this.valueForToken("widgetmode"));
      if (this.valueForToken("refkey") !== "-") {
        olapicJs.setAttribute("data-tags", this.valueForToken("refkey"));
      }
      olapicEl.parentNode.insertBefore(olapicJs, olapicEl.nextSibling);
    }
    /*~script*/
  },
  pre: function () {
    /*pre*/
    /*~pre*/
  },
  post: function () {
    /*post*/
    /*~post*/
  }
});
