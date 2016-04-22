//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googlewebfontloader.googlewebfontloader.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google WebFont Loader",
			async: true,
			description: "Google Web Fonts lets you browse all the fonts available via the Google Web Fonts API. All fonts in the directory are available for use on your website under an open source license and are served by Google servers.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Font Family",
				description: "The font family code you wish to load, e.g. \"Noto+Serif::latin\"",
				token: "font_family",
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
			window.WebFontConfig = {
				google: {
					families: ['' + this.valueForToken("font_family")]
				}
			};
			var wf = document.createElement('script');
			wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
			/*~script*/
		},
		pre: function() {
			/*pre*/
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
