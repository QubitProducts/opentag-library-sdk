//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("flxone.platform.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Platform",
		async: true,
		description: "Use iatDev=1 in your URL parameters, or cookies to enable debug mode.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "FlxOne Client ID",
			description: "The client ID given to you by FlxOne",
			token: "client_id",
			uv: ""
		}],
		categories:[
			"Advertising Network"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var _this = this;
		(function(a) {
			var d = document,
				c = d.createElement("script");
			c.async = !0, c.defer = !0, c.src = a, d.getElementsByTagName("head")[0].appendChild(
				c)
		})((iatDev = (window.location.href.indexOf("iatDev=1") > -1 || document.cookie
				.indexOf("iatDev=1") > -1), "//" + (window.location.protocol == "http:" && !
				iatDev ? "h" : "") + "j.flxpxl.com/" + _this.valueForToken("client_id") +
			".js?r=" + Math.random() * 1e16 + (iatDev ? "&d=1" : "")))

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
