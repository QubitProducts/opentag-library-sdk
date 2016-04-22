//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("facebook.facebookpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Facebook Pixel",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "connect.facebook.net/${url_locale}/fp.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "FB Country Code",
			description: "e.g. en_UK ( if not sure, use : en_US )",
			token: "url_locale",
			uv: ""
		}, {
			name: "Pixel ID",
			description: "Client Specific (e.g. 6007143437659)",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Value",
			description: "if not on Transaction Page, use following hardcoded value  instead : 0.00",
			token: "param_value",
			uv: "universal_variable.transaction.total"
		}],
		categories:[
			"Social"
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
		window.fb_param = {};
		fb_param.pixel_id = '' + this.valueForToken("pixel_id");
		fb_param.value = '' + this.valueForToken("param_value");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
