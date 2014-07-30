//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.trendingproductsfeed.v1.Tag", {
  config: {
    /*DATA*/
    name: "Trending Products Feed",
    async: true,
    description: "A pinboard-style feed that showcases your e-commerce site’s trending products. Best implemented in a standalone page.",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [{
      name: "jQuery",
      description: "e.g. window.jQuery , $ , myJquery , etc..",
      token: "jQuery",
      uv: ""
    }, {
      name: "jQuery Element Selector to Insert After",
      description: "e.g. #content",
      token: "selector",
      uv: ""
    }, {
      name: "Client API Key",
      description: "Client API Key",
      token: "client",
      uv: ""
    }, {
      name: "URL",
      description: "url",
      token: "url",
      uv: ""
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
    var _this = this;
    // CSS
    var link = document.createElement('link');
    link.media = "all";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "//" + _this.valueForToken("pinboard_domain") + ".insparq.com/assets/insparq.css";
    document.head.appendChild(link);

    link = document.createElement('link');
    link.media = "all";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "" + _this.valueForToken("url");
    document.head.appendChild(link);

    // HTML
    window[''+_this.valueForToken("jQuery")]('<div id="insparq"></div>').insertAfter(''+_this.valueForToken('selector'));

    // JS
    (function (d, t) {
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.type = 'text/javascript';
      g.async = true;
      g.src = '//' + _this.valueForToken('pinboard_domain') + '.insparq.com/assets/insparq.js';
      g.apikey = '' + _this.valueForToken("client");
      s.parentNode.insertBefore(g, s);
    })(document, 'script');
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