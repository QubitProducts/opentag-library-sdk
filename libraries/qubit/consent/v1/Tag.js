//:import sdk.releases.Current

qubit.Quick.library("qubit.consent.v1.Tag", {
  getDefaultConfig: function () { 
    return {
    /*config*/
    name: "Qubit Consent Library",
    async: true,
    active: false,
    description: "Consent library allows to easy create cookie consent banner.",
    html: "",
    locationDetail: "",
    isPrivate: false,
    url: "d3c3cq33003psk.cloudfront.net/consent/consent-widget-1.1.0.min.js",
    usesDocWrite: false,
    upgradeable: true,
    consentConfig: null,
    parameters: [],
		categories:[
			
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
    var container = qubit.opentag.Tags.findTagContainers(this)[0];
    if (container) {
      var clientId = container.config.clientId;
      var profileId = container.getContainerId();
      this.openConsent(clientId, profileId);
    } else {
      this.openConsent();
    }
    /*~pre*/
  },
  post: function () {
    /*post*/
    /*~post*/
  },
  openConsent: function (clientId, profileId) {
    var _q_pd = document.createElement("script");
    _q_pd.src = "//d3c3cq33003psk.cloudfront.net/PostData.js";
    document.getElementsByTagName("head")[0].appendChild(_q_pd);
    var _q_ping = function (type, reason) {
      if (!window._q_) {
        setTimeout(function () {
          _q_ping(type);
        }, 100);
      } else {
        if (clientId && profileId) {
          window._q_.PostData(
            "//pong.qubitproducts.com/s?tid=" + clientId + "_" + profileId +
            "&time=" + new Date().getTime() +
            "&type=" + type +
            "&r=" + reason);
        }
      }
    };

    //=Q=

    var qcw = this.getDefaultConfiguration();
    window.qcw = qcw;

    //=E=

    var consentConfig = this.config.consentConfig;
    
    //override defaults wherever defined.
    if (consentConfig) {
      for (var prop in consentConfig) {
        if (consentConfig.hasOwnProperty(prop) 
                && prop !== "status"
                && prop !== "popup") {
          qcw[prop] = consentConfig[prop];
        }
      }
      var status = consentConfig.status;
      if (status) {
        for (var prop in status) {
          if (status.hasOwnProperty(prop)) {
            qcw.status[prop] = status[prop];
          }
        }
      }
      var popup = consentConfig.popup;
      if (popup) {
        for (var prop in popup) {
          if (popup.hasOwnProperty(prop)) {
            qcw.popup[prop] = popup[prop];
          }
        }
      }
    }

    //=E=

    qcw.onUserAccept = function (reason) {
      if (window.opentag_consentGiven) {
        window.opentag_consentGiven();
      }
      if (window._q_ping) {
        window._q_ping("consentAccept", reason);
      }
    };
    qcw.onUserDecline = function (reason) {
      if (window._q_ping) {
        window._q_ping("consentDecline", reason);
      }
    };
    qcw.onPostCreate = function (reason) {
      if (window._q_ping) {
        window._q_ping("consentShown", reason);
      }
    };
    qcw.onUserDismiss = function (reason) {
      if (window._q_ping) {
        window._q_ping("consentDismiss", reason);
      }
    };
  },
  getDefaultConfiguration: function () {
    var background =
      'https://d3c3cq33003psk.cloudfront.net/consent/img/background-image.png';
    var cImage = 'https://d3c3cq33003psk.cloudfront.net/consent/img/cbg_w.png';
    return {
      // Popup display configuration
      mode: "notification",
      acceptButtonText: "Enable Cookies",
      declineButtonText: "No, Thank You",
      acceptButtonId: "buttonAccept",
      declineButtonId: "buttonDecline",
      cookieStatusId: "cookieStatus",
      cookieAndPrivacyAndPolicyId: "cookieAndPrivacy",
      closeButtonText: "Dismiss",
      closeButtonId: "closePopup",
      statusAcceptedText: "Cookies Enabled",
      statusDeclinedText: "Cookies Disabled",
      cookieAndprivacyPolicyText: "privacy and cookies policy",
      cookieAndprivacyPolicyUrl:
              "http://www.yoursite.com/privacy",
      cookieDomain: "",
      whenIgnoredShowPopup: true, // When cookie not set, show popup?
      whenIgnoredShowStatus: true, // When cookie not set, show status?
      whenAcceptedHideStatus: true, // hide status on acceptance
      onIgnoreShowEvery: 2, // Message repeat (minutes)
      sampleRate: 1, // Message repeat (minutes)
      hidePopupOnBlur: true, // hide when clicked outside of popup
      onUserAccept: null, // Callback
      onUserDecline: null, // Callback
      onUserDismiss: null, // Callback
      onPreCreate: null, // Callback, before content is appended
      onPostCreate: null, // Callback after content is appended
      name: "internal config",
      cookieExpiryDays: 365, // Use by Cookie (session vs persitent)

      popup: {
        iframeCss: [
          'top: 0;',
          'left: 0;',
          'height: 185px;',
          'width: 100%;',
          'box-shadow: 0 0 20px 0px #888;',
          'z-index: 2147483647;' // note: Safari 3 will use 16777271
        ].join("\n"),
        headerHtml: [
          '<div class="content">',
          '  <div class="action-header">',
          '    <div class="close" id="{{closeButtonId}}">',
          '      {{closeButtonText}}',
          '    </div>',
          '  </div>',
          '</div>'
        ].join("\n"),
        contentCss: [
          'body {',
          '  padding-top: 8px;',
          '  text-align: center;',
          '  background: url("' + cImage + '") repeat;',
          '  font-size: 12px;',
          '  line-height: 17px;',
          '  font-family: arial, helvetica;',
          '  color: #555;',
          '  text-shadow: 0px 0px 1px #CCC;',
          '}',
          '.content {',
          '  text-align: left;',
          '  width: 800px;',
          '  margin: 0 auto;',
          '  padding-top: 5px;',
          '}',
          'body p {',
          '  margin: 5px 0px;',
          '}',
          'a {',
          '  color: #2e9dc5;',
          '}',
          'h1 {',
          '  font-size: 1.4em;',
          '}',
          '.action-footer {',
          '  margin-top: 0px;',
          '}',
          '.action-footer .button {',
          '  padding: 5px 8px;',
          '  line-height: 16px;',
          '  cursor: pointer;',
          '}',
          '#{{closeButtonId}} {', // close button
          '  vertical-align: middle',
          '  color: #939598;',
          '  padding: 5px 10px 5px 10px;',
          '  font-size: 13px;',
          '  text-decoration: none;',
          '  margin-top: 0px;',
          '  float: right;',
          '  cursor: pointer;',
          '  border: 1px solid #EEE;',
          '  background: #EEE;',
          '  border-radius: 5px;',
          '}',
          '.action-footer #{{acceptButtonId}} {',
          '  -moz-box-shadow:inset 0px 1px 0px 0px #bbdaf7;',
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #bbdaf7;',
          '  box-shadow:inset 0px 1px 0px 0px #bbdaf7;',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #35b7de), color-stop(1, #0189a1));',
          '  background:-moz-linear-gradient( center top, #35b7de 5%,' +
                  ' #0189a1 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#35b7de", endColorstr="#0189a1");',
          '  background-color:#35b7de;',
          '  -moz-border-radius:4px;',
          '  -webkit-border-radius:4px;',
          '  border-radius:4px;',
          '  border:1px solid #0189a1;',
          '  display:inline-block;',
          '  color:#fff;',
          '  font-weight:normal;',
          '  text-decoration:none;',
          '  vertical-align: middle;',
          '  float:right;',
          '}',
          '.action-footer #{{acceptButtonId}}:hover {',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #0189a1), color-stop(1, #35b7de));',
          '  background:-moz-linear-gradient( center top,' +
                  ' #0189a1 5%, #35b7de 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#0189a1", endColorstr="#35b7de");',
          '  background-color:#0189a1;',
          '}',
          '.action-footer #{{acceptButtonId}}:active {',
          '  position:relative;',
          '  top: 1px;',
          '}',
          '.action-footer #{{declineButtonId}} {',
          '  color: #555;',
          '  float:right;',
          '  margin-right: 15px;',
          '}'
        ].join("\n"),
        contentHtml: [
          '<div class="content">',
          '  <h1>Privacy and Cookies</h1>',
          '  <p>',
          '    For this website to run at its best, we ask the browser',
          '    (like Google Chrome and Internet Explorer) for a little ',
          '    personal information. Nothing drastic, just enough to ',
          '    remember your preferences, login ID, and what you like to ',
          '    look at (on our site). Having this information to hand  ',
          '    helps us understand your needs and improve our',
          '    service to you. ',
          '  </p>',
          '  <p>',
          '  If you would like to learn more about the information we ',
          '  store, how it is used or how to disable Cookies please read our',
          '    <a href="{{cookieAndprivacyPolicyUrl}}" ',
          '      target = "_blank"',
          '      id="{{cookieAndPrivacyAndPolicyId}}">',
          '      {{cookieAndprivacyPolicyText}}',
          '    </a>.',
          '  </p>',
          '</div>'
        ].join("\n"),
        footerHtml: [
          '<div class="content">',
          '   <div class="actions action-footer">',
          '     <div class="button" id="{{acceptButtonId}}">',
          '       {{acceptButtonText}}',
          '     </div>',
          '     <div class="button" id="{{declineButtonId}}">',
          '        {{declineButtonText}}',
          '     </div>',
          '   </div>',
          '</div>'
        ].join("\n")
      }, // end popup

      status: {
        iframeCss: [
          'bottom: 0;',
          'left: 0;',
          'height: 20px;',
          'width: 100%;',
          'z-index: 2147483647;' // note: Safari 3 will use 16777271
        ].join("\n"),
        headerHtml: '',
        contentCss: [
          'body {',
          '  background: transparent;',
          '  margin: 0;',
          '  padding: 0;',
          '  font-family: arial, helvetica;',
          '  text-align: center;',
          '  vertical-align: middle;',
          '  font-size: 12px;',
          '  line-height: 18px;',
          '}',
          '.content {',
          '  width: 800px;',
          '  margin: 0 auto;',
          '  text-align: left;',
          '}',
          'html>body #{{cookieStatusId}} {',
          '  width: auto;',
          '}',
          '#{{cookieStatusId}} {',
          '  padding: 1px 10px 0px 22px;',
          '  width: 11.5em;',
          '  cursor: pointer; !important',
          '}',
          '.icon {',
          '  background-image: url("' + background + '");',
          '  width: 20px;',
          '  height: 20px;',
          '  position: absolute;',
          '  background-position: 6px -116px;',
          '  background-repeat: no-repeat;',
          '  z-index: 199999;',
          '}',
          '.declined #{{cookieStatusId}} {',
          // button customisation settings below
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #f5978e;',
          '  box-shadow:inset 0px 1px 0px 0px #f5978e;',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #f24537), color-stop(1, #c62d1f) );',
          '  background:-moz-linear-gradient( center top, #f24537 5%,' +
                  ' #c62d1f 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#f24537", endColorstr="#c62d1f");',
          '  background-color:#f24537;',
          '  -moz-border-radius:5px 5px 0px 0px;',
          '  -webkit-border-radius:5px 5px 0px 0px;',
          '  border-radius:5px 5px 0px 0px;',
          '  border:1px solid #d02718;',
          '  display:inline-block;',
          '  color:#ffffff;',
          '  font-family:arial;',
          '  font-size:12px;',
          '  text-decoration:none;',
          '}',
          '.declined #{{cookieStatusId}}:hover {',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #c62d1f), color-stop(1, #f24537) );',
          '  background:-moz-linear-gradient( center top, #c62d1f 5%,' +
                  ' #f24537 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#c62d1f", endColorstr="#f24537");',
          '  background-color:#c62d1f;',
          '}',
          '.declined #{{cookieStatusId}}:active {',
          '  position:relative;',
          '  top: 1px;',
          '}',
          '.accepted #{{cookieStatusId}} {',
          '  -moz-box-shadow:inset 0px 1px 0px 0px #6ebf26;',
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #6ebf26;',
          '  box-shadow:inset 0px 1px 0px 0px #6ebf26;',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #7ca814), color-stop(1, #5e8007) );',
          '  background:-moz-linear-gradient( center top, #7ca814 5%,' +
                  '#5e8007 100% );',
          '  filter:progid:DXImageTransform.Microsoft.' +
                  'gradient(startColorstr="#7ca814", endColorstr="#5e8007");',
          '  background-color:#7ca814;',
          '  -moz-border-radius:5px 5px 0px 0px;',
          '  -webkit-border-radius:5px 5px 0px 0px;',
          '  border-radius:5px 5px 0px 0px;',
          '  border:1px solid #619908;',
          '  display:inline-block;',
          '  color:#ffffff;',
          '  font-family:arial;',
          '  font-size:12px;',
          '  font-weight:normal;',
          '  text-decoration:none;',
          '}',
          '.accepted #{{cookieStatusId}}:hover {',
          '  background:-webkit-gradient( linear, left top, left bottom,' +
                  ' color-stop(0.05, #5e8007), color-stop(1, #7ca814) );',
          '  background:-moz-linear-gradient( center top, #5e8007 5%, ' +
                  '#7ca814 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#5e8007", endColorstr="#7ca814");',
          '  background-color:#5e8007;',
          '}',
          '.accepted #{{cookieStatusId}}:active {',
          '  position:relative;',
          '  top: 1px;',
          '}'
        ].join("\n"),
        contentHtml: [
          '<div class="content">',
          '  <div class="icon"></div>',
          '  <div id="{{cookieStatusId}}"></div>',
          '</div>'
        ].join("\n"),
        footerHtml: ''
      }
    };
  },
  consentModes: {
    notification: "Notification Only",
    implicit: "Implicit consent",
    explicit: "Explicit Consent"
  }
});
