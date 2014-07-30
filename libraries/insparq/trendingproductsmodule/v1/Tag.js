//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.trendingproductsmodule.v1.Tag", {
  config: {
    /*DATA*/
    name: "Trending Products Module",
    async: true,
    description: "A carousel module that showcases your e-commerce site’s trending products. You can implement anywhere on your site.",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [{
      name: "Pinboard Domain",
      description: "The Pinboard domain to use for calls to inSparq.",
      token: "pinboarddomain",
      uv: ""
    }, {
      name: "Module Name",
      description: "module",
      token: "module",
      uv: ""
    }, {
      name: "Client API Key",
      description: "Client API Key",
      token: "key",
      uv: ""
    }, {
      name: "jQuery",
      description: "e.g. jQuery , $ , myJquery etc..",
      token: "jQuery",
      uv: ""
    }, {
      name: "jQuery Element Selector to Insert After",
      description: "e.g. #content",
      token: "selector",
      uv: ""
    }]
    /*~DATA*/
  },
  script: function () {
    /*SCRIPT*/
    var _this = this;
    (function () {

      window['' + _this.valueForToken('jQuery')]('<div id="iecw"></div>').insertAfter('' + _this.valueForToken('selector'));

      var e = document.createElement('script');
      e.type = 'text/javascript';
      e.async = true;
      e.src = '//' + _this.valueForToken('pinboarddomain') + '.insparq.com/assets/endcaps/insparq_endcaps.js';
      e.module = '' + _this.valueForToken("module") + '';
      e.apikey = '' + _this.valueForToken("key") + '';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(e, s);
    })();
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