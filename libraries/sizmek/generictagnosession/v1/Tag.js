//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sizmek.generictagnosession.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Generic Tag (no session)",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Sizmek ID",
			description: "The ID that relates this pixel to Sizmek",
			token: "id",
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
		var r = (Math.random() * 1000000) + "";
		var s = document.createElement("script");
		s.src = "//bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=" +
			this.valueForToken("id") + "&rnd=" + r;
		document.body.appendChild(s);
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
