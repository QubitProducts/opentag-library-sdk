//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("facebook.facebookpixelwithcurrency.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Facebook Pixel with Currency",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "connect.facebook.net/${countrycode}/fp.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Country Code",
			description: "",
			token: "countrycode",
			uv: ""
		}, {
			name: "Pixel ID",
			description: "",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "order_value",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
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
		fb_param.value = '' + this.valueForToken("order_value");
		fb_param.currency = '' + this.valueForToken("currency");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
