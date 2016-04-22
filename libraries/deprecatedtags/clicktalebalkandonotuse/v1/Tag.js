//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("deprecatedtags.clicktalebalkandonotuse.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "ClickTale - balkan - donotuse",
		async: true,
		description: "do not use",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "${clicktale_url}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "ClickTale URL",
			description: "Set this to the JavaScript variable 'window.clicktale_url' which is created by the Pre-Script",
			token: "clicktale_url",
			uv: ""
		}, {
			name: "ClickTale HTTPS URL",
			description: "Set this to the HTTPS URL specified in the ClickTale implementation code",
			token: "clicktale_https",
			uv: ""
		}, {
			name: "ClickTale HTTP URL",
			description: "Set this to the HTTP URL specified in the ClickTale implementation code",
			token: "clicktale_http",
			uv: ""
		}],
		categories:[
			"Web Analytics"
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
		window.WRInitTime = (new Date()).getTime();

		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
