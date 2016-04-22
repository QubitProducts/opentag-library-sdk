//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.qubitcookieconsent.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Qubit Cookie Consent",
		async: true,
		description: "customisable  cookie consent drop-down slider",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "d3c3cq33003psk.cloudfront.net/consent/consent-widget-1.1.0.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Privacy & Cookies Policy Statement Link [compulsory]",
			description: "add the URL of your Privacy & Cookies Policy Statement",
			token: "linkHref",
			uv: ""
		}, {
			name: "Main Text [optional]",
			description: "Replace the main text with your own - Otherwise assign an empty value to this  variable",
			token: "mainText",
			uv: ""
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		/*~script*/
	},
	pre: function() {
		/*pre*/
		window.mainText =
			"For this website to run at its best, we ask the browser (like Google " +
			"Chrome and Internet Explorer) for a little personal information. " +
			"Nothing drastic, just enough to remember your preferences, login ID, " +
			"and what you like to look at (on our site). Having this information to "+
			"hand helps us understand your needs and improve our service to you.";

		window.cookiesAndPrivacyStatementUrl = "" + this.valueForToken("linkHref");

		if ("" + this.valueForToken("mainText")) {
			mainText = "" + this.valueForToken("mainText");
		}

		window._q_pd = document.createElement("script");
		_q_pd.src = "//d3c3cq33003psk.cloudfront.net/PostData.js";

		document.getElementsByTagName("head")[0].appendChild(_q_pd);

		window._q_ping = function(type, reason) {
			if (!window._q_) {
				setTimeout(function() {
					_q_ping(type);
				}, 100);
			} else {
				window._q_.PostData("//pong.qubitproducts.com/s?tid=65219_355873&time=" +
					new Date().getTime() + "&type=" + type + "&r=" + reason);
			}
		};

		//=Q=

		window.qcw = {
			"mode": "notification",
			"acceptButtonText": "Enable Cookies",
			"declineButtonText": "No, Thank You",
			"acceptButtonId": "buttonAccept",
			"declineButtonId": "buttonDecline",
			"cookieStatusId": "cookieStatus",
			"cookieAndPrivacyAndPolicyId": "cookieAndPrivacy",
			"closeButtonText": "Dismiss",
			"closeButtonId": "closePopup",
			"statusAcceptedText": "Cookies Enabled",
			"statusDeclinedText": "Cookies Disabled",
			"cookieAndprivacyPolicyText": "privacy and cookies policy",
			"cookieAndprivacyPolicyUrl": cookiesAndPrivacyStatementUrl,
			"cookieDomain": "",
			"whenIgnoredShowPopup": true,
			"whenIgnoredShowStatus": true,
			"whenAcceptedHideStatus": true,
			"onIgnoreShowEvery": 2,
			"sampleRate": 1,
			"hidePopupOnBlur": true,
			"onUserAccept": null,
			"onUserDecline": null,
			"onUserDismiss": null,
			"onPreCreate": null,
			"onPostCreate": null,
			"name": "internal config",
			"cookieExpiryDays": 365,
			"popup": {
				"iframeCss": "top: 0;left: 0;height: 185px;width: 100%;box-shadow: 0 0 20px 0px #888;z-index: 2147483647;",
				"headerHtml": "<div class=\"content\">  <div class=\"action-header\">    <div class=\"close\" id=\"{{closeButtonId}}\">      {{closeButtonText}}    </div>  </div></div>",
				"contentCss": "body {  padding-top: 8px;  text-align: center;  background: url(https://d3c3cq33003psk.cloudfront.net/consent/img/cbg_w.png) repeat;  font-size: 12px;  line-height: 17px;  font-family: arial, helvetica;  color: #555;  text-shadow: 0px 0px 1px #CCC;}.content {  text-align: left;  width: 800px;  margin: 0 auto;  padding-top: 5px;}body p {  margin: 5px 0px;}a {  color: #2e9dc5;}h1 {  font-size: 1.4em;}.action-footer {  margin-top: 0px;}.action-footer .button {  padding: 5px 8px;  line-height: 16px;  cursor: pointer;}#{{closeButtonId}} {  vertical-align: middle  color: #939598;  padding: 5px 10px 5px 10px;  font-size: 13px;  text-decoration: none;  margin-top: 0px;  float: right;  cursor: pointer;  border: 1px solid #EEE;  background: #EEE;  border-radius: 5px;}.action-footer #{{acceptButtonId}} {  -moz-box-shadow:inset 0px 1px 0px 0px #bbdaf7;  -webkit-box-shadow:inset 0px 1px 0px 0px #bbdaf7;  box-shadow:inset 0px 1px 0px 0px #bbdaf7;  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #35b7de), color-stop(1, #0189a1) );  background:-moz-linear-gradient( center top, #35b7de 5%, #0189a1 100% );  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#35b7de\", endColorstr=\"#0189a1\");  background-color:#35b7de;  -moz-border-radius:4px;  -webkit-border-radius:4px;  border-radius:4px;  border:1px solid #0189a1;  display:inline-block;  color:#fff;  font-weight:normal;  text-decoration:none;  vertical-align: middle;  float:right;}.action-footer #{{acceptButtonId}}:hover {  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #0189a1), color-stop(1, #35b7de) );  background:-moz-linear-gradient( center top, #0189a1 5%, #35b7de 100% );  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#0189a1\", endColorstr=\"#35b7de\");  background-color:#0189a1;}.action-footer #{{acceptButtonId}}:active {  position:relative;  top: 1px;}.action-footer #{{declineButtonId}} {  color: #555;  float:right;  margin-right: 15px;}",
				"contentHtml": "<div class=\"content\">  <h1>Privacy and Cookies</h1>  <p>" +
					mainText +
					"</p>  <p>  If you would like to learn more about the information we   store, how it is used or how to disable Cookies please read our <a href=\"" +
					cookiesAndPrivacyStatementUrl +
					"\"       target = \"_blank\"      id=\"{{cookieAndPrivacyAndPolicyId}}\">{{cookieAndprivacyPolicyText}}</a>.</p></div>",
				"footerHtml": "<div class=\"content\">   <div class=\"actions action-footer\">     <div class=\"button\" id=\"{{acceptButtonId}}\">       {{acceptButtonText}}     </div>     <div class=\"button\" id=\"{{declineButtonId}}\">        {{declineButtonText}}     </div>   </div></div>"
			},
			"status": {
				"iframeCss": "bottom: 0;left: 0;height: 20px;width: 100%;z-index: 2147483647;",
				"headerHtml": "",
				"contentCss": "body {  background: transparent;  margin: 0;  padding: 0;  font-family: arial, helvetica;  text-align: center;  vertical-align: middle;  font-size: 12px;  line-height: 18px;}.content {  width: 800px;  margin: 0 auto;  text-align: left;}html>body #{{cookieStatusId}} {  width: auto;}#{{cookieStatusId}} {  padding: 1px 10px 0px 22px;  width: 11.5em;  cursor: pointer; !important}.icon {  background-image: url(\"https://d3c3cq33003psk.cloudfront.net/consent/img/background-image.png\");  width: 20px;  height: 20px;  position: absolute;  background-position: 6px -116px;  background-repeat: no-repeat;  z-index: 199999;}.declined #{{cookieStatusId}} {  -webkit-box-shadow:inset 0px 1px 0px 0px #f5978e;  box-shadow:inset 0px 1px 0px 0px #f5978e;  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #f24537), color-stop(1, #c62d1f) );  background:-moz-linear-gradient( center top, #f24537 5%, #c62d1f 100% );  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#f24537\", endColorstr=\"#c62d1f\");  background-color:#f24537;  -moz-border-radius:5px 5px 0px 0px;  -webkit-border-radius:5px 5px 0px 0px;  border-radius:5px 5px 0px 0px;  border:1px solid #d02718;  display:inline-block;  color:#ffffff;  font-family:arial;  font-size:12px;  text-decoration:none;}.declined #{{cookieStatusId}}:hover {  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #c62d1f), color-stop(1, #f24537) );  background:-moz-linear-gradient( center top, #c62d1f 5%, #f24537 100% );  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#c62d1f\", endColorstr=\"#f24537\");  background-color:#c62d1f;}.declined #{{cookieStatusId}}:active {  position:relative;  top: 1px;}.accepted #{{cookieStatusId}} {  -moz-box-shadow:inset 0px 1px 0px 0px #6ebf26;  -webkit-box-shadow:inset 0px 1px 0px 0px #6ebf26;  box-shadow:inset 0px 1px 0px 0px #6ebf26;  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #7ca814), color-stop(1, #5e8007) );  background:-moz-linear-gradient( center top, #7ca814 5%,#5e8007 100% );  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#7ca814\", endColorstr=\"#5e8007\");  background-color:#7ca814;  -moz-border-radius:5px 5px 0px 0px;  -webkit-border-radius:5px 5px 0px 0px;  border-radius:5px 5px 0px 0px;  border:1px solid #619908;  display:inline-block;  color:#ffffff;  font-family:arial;  font-size:12px;  font-weight:normal;  text-decoration:none;}.accepted #{{cookieStatusId}}:hover {  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #5e8007), color-stop(1, #7ca814) );  background:-moz-linear-gradient( center top, #5e8007 5%, #7ca814 100% );  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#5e8007\", endColorstr=\"#7ca814\");  background-color:#5e8007;}.accepted #{{cookieStatusId}}:active {  position:relative;  top: 1px;}",
				"contentHtml": "<div class=\"content\">  <div class=\"icon\"></div>  <div id=\"{{cookieStatusId}}\"></div></div>",
				"footerHtml": ""
			}
		};

		qcw.onUserAccept = function(reason) {
			if (window.opentag_consentGiven) {
				window.opentag_consentGiven();
			}
			if (window._q_ping) {
				window._q_ping("consentAccept", reason);
			}
		};

		qcw.onUserDecline = function(reason) {
			if (window._q_ping) {
				window._q_ping("consentDecline", reason);
			}
		};

		qcw.onPostCreate = function(reason) {
			if (window._q_ping) {
				window._q_ping("consentShown", reason);
			}
		};

		qcw.onUserDismiss = function(reason) {
			if (window._q_ping) {
				window._q_ping("consentDismiss", reason);
			}
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
