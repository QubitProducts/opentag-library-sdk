//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("smartfocus.allpages.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "All Pages",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "js.advisor.smartfocus.com/advisor.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "endpoint URL",
			description: "Endpoint URL",
			token: "endpoint",
			uv: ""
		}, {
			name: "username",
			description: "username",
			token: "user",
			uv: ""
		}, {
			name: "accid",
			description: "ccid",
			token: "accid",
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
		window._advisorq = window._advisorq || [];
		window._advisorq.push({
			_setAccount: {
				endpoint: "" + this.valueForToken("endpoint"),
				username: "" + this.valueForToken("user"),
				accid: "" + this.valueForToken("accid")
			}
		});
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
