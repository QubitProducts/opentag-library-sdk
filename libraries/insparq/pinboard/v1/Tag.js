//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("insparq.pinboard.v1.Tag", {
  getDefaultConfig: function () {
      return {
    /*config*/
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
      name: "inSparq API Key",
      description: "inSparq API Key",
      token: "insparq_api_key",
      uv: ""
    }, {
      name: "Pinboard Stylesheet URL",
      description: "URL for pinboard's CSS",
      token: "stylesheeturl",
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
    var _this = this;
    // CSS
    var link = document.createElement('link');
    link.media = "all";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "//pinboard.insparq.com/assets/insparq.css";
    document.head.appendChild(link);

    link = document.createElement('link');
    link.media = "all";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "" + _this.valueForToken("stylesheeturl");
    document.head.appendChild(link);

    // HTML
    window[''+_this.valueForToken("jQuery")]('<div id="insparq"></div>').insertAfter(''+_this.valueForToken('selector'));

    // JS
    (function (d, t) {
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.type = 'text/javascript';
      g.async = true;
      g.src = '//pinboard.insparq.com/assets/insparq.js';
      g.apikey = '' + _this.valueForToken("insparq_api_key");
      s.parentNode.insertBefore(g, s);
    })(document, 'script');
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
