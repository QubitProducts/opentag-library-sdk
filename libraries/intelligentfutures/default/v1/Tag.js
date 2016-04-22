//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelligentfutures.default.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Default",
		async: true,
		description: ".",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		//script must be manually imported! empty parameters entries!
		(function(a) {
			var d = document,	c = d.createElement("script");
			c.async = !0, c.defer = !0, c.src = a, 
			d.getElementsByTagName("head")[0].appendChild(c)
		})((iatDev = (window.location.href.indexOf("iatDev=1") > -1 ||
				document.cookie.indexOf("iatDev=1") > -1),
				"//" + (window.location.protocol == "http:" && !iatDev ? "h" : "") +
				"j.flxpxl.com/176554.js?r=" + Math.random() * 1e16 +
				"&m=${}&a=${}" + (iatDev ? "&d=1" : "")))
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
