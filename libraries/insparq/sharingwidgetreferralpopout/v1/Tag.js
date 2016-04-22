//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("insparq.sharingwidgetreferralpopout.v1.Tag", {
  getDefaultConfig: function () {
      return {
    /*config*/
    name: "Sharing Widget Referral Popout for Non-PDPs",
    async: true,
    description: "Reward your e-commerce site’s shoppers for sharing on social! Place this tag on non-PDP pages to enable site-wide referral popout.",
    html: "",
    locationDetail: "",
    isPrivate: true,
    url: "//pinboard.insparq.com/v2.0.0/widget/scripts/issw.js",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [{
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
    var _tmp_html = '<div id="issw" data-issw-publisher-id = "' + _this.valueForToken("insparq_api_key") + '" data-issw-load-config = "1" data-issw-page-mode="hidden"></div>';
    
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
