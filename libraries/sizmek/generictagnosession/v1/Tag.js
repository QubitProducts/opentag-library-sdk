//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("sizmek.generictagnosession.v1.Tag", {
	config: {
		/*DATA*/
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
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var r = (Math.random() * 1000000) + "";
		var s = document.createElement("script");
		s.src = "//bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=" +
			this.valueForToken("id") + "&rnd=" + r;
		document.body.appendChild(s);
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});