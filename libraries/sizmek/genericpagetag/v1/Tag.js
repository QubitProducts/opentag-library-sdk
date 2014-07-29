//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("sizmek.genericpagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Generic Page Tag",
		async: true,
		description: "Tag to be placed on any unique page with an activity ID associated",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Sizmek Page Activity ID",
			description: "The ID unique to the page the tag is running on",
			token: "activity_id",
			uv: ""
		}, {
			name: "Session ID",
			description: "An ID unique to each user's session - can be set blank",
			token: "session_id",
			uv: "universal_variable.user.user_id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window.ebRand = Math.random() * 1000000;
		window.ebSession = "" + this.valueForToken("session_id");

		var script = document.createElement("script");
		script.src =
			"//bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&ActivityID=" +
			this.valueForToken("activity_id") + "&rnd=" + ebRand + "&Session=" +
			ebSession;
		document.getElementsByTagName("head")[0].appendChild(script);
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