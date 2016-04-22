//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("insparq.carousel.v1.Tag", {
  getDefaultConfig: function () {
      return {
    /*config*/
    name: "Trending Products Carousel",
    async: true,
    description: "A carousel module that showcases your e-commerce site’s trending products. You can implement anywhere on your site.",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [{
      name: "Module Name",
      description: "inSparq-provided name for carousel instance.",
      token: "module",
      uv: ""
    }, {
      name: "inSparq API Key",
      description: "inSparq API Key",
      token: "insparq_api_key",
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
    (function () {

      window['' + _this.valueForToken('jQuery')]('<div id="iecw"></div>').insertAfter('' + _this.valueForToken('selector'));

      var e = document.createElement('script');
      e.type = 'text/javascript';
      e.async = true;
      e.src = '//pinboard.insparq.com/assets/endcaps/insparq_endcaps.js';
      e.module = '' + _this.valueForToken("module") + '';
      e.apikey = '' + _this.valueForToken("insparq_api_key") + '';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(e, s);
    })();
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
