//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
  "insparq.sharingwidgetrecipientpopoutcoupon.v1.Tag", {
    config: {
      /*DATA*/
      name: "Sharing Widget - Non-Product Display Pages",
      async: true,
      description: "Reward your e-commerce site’s shoppers for sharing on social! Place this tag on every other non-product display page template to enable recipient popout coupon.",
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
        name: "jQuery",
        description: "e.g. $ , jQuery , myJquery etc..",
        token: "jQuery",
        uv: ""
      }, {
        name: "jQuery Element Selector to Insert After",
        description: "e.g. #content",
        token: "selector",
        uv: ""
      }, {
        name: "Publisher Name",
        description: "Your publisher name.",
        token: "clientname",
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
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      var _tmp_html = '<div id="issw" data-issw-publisher-id="' +
        this.valueForToken("key") +
        '" data-issw-load-config="1" data-issw-page-mode="hidden"></div>';

      window['' + this.valueForToken("jQuery")](_tmp_html).insertAfter('' + this.valueForToken('selector'));
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