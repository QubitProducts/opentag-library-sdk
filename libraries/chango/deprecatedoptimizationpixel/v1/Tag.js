//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("chango.deprecatedoptimizationpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "[DEPRECATED] Optimization Pixel",
		async: true,
		description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "//cc.chango.com/static/o.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account ID",
			description: "Your Chango Account ID",
			token: "id",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
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
		window.__cho__ = {
			"pid": this.valueForToken("id")
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
