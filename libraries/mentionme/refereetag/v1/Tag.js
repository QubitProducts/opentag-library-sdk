//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mentionme.refereetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Referee Tag",
		async: true,
		description: "The implementation can be either as an embedded form where the customer enters the name of their referrer or an embedded link, both of which lead to a modal popup where the customer can register to get their reward. The 'implementation' parameter is one of 'link' or 'form' which respectively load a link or a form into the div <div id=\"mmWrapper\" style=\"height:60px;\"></div> which should be on the page. All parameters marked with * are optional (if not used populate with an empty hardcoded value, even if default is 'uses universal variable')",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "MentionMe Partner Code",
			description: "The partner id given to you by MentionMe",
			token: "partner_code",
			uv: ""
		}, {
			name: "MentionMe Script Domain",
			description: "Domain for the script: 'tag-demo.mention-me.com' for testing 'tag.mention-me.com' for production",
			token: "script_domain",
			uv: ""
		}, {
			name: "MentionMe Situation",
			description: "The string indicator of the page you are including this tag on e.g. \"checkout\", \"homepage\"",
			token: "situation",
			uv: ""
		}, {
			name: "User Email*",
			description: "The customer's email address, leave parameter empty if not used",
			token: "email",
			uv: "universal_variable.user.email"
		}, {
			name: "Full Name*",
			description: "The full name of the customer, leave parameter empty if not used",
			token: "fullname",
			uv: "universal_variable.user.name"
		}, {
			name: "Implementation*",
			description: "Optionally override the way the flow is implemented (one of: link, form)",
			token: "implementation",
			uv: ""
		}],
		categories:[
			"Social"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var baseUrl = "https://" + this.valueForToken("script_domain") +
			"/api/v2/refereefind/" + this.valueForToken("partner_code") + "?";
		var mmScript = document.createElement("script");
		var paramArr = [];
		var paramObj = {
			situation: "" + this.valueForToken("situation")
		}
		if (("" + this.valueForToken("email")).length)
			paramObj["email"] = "" + this.valueForToken("email");
		if (("" + this.valueForToken("fullname")).length)
			paramObj["fullname"] = "" + this.valueForToken("fullname");
		if (("" + this.valueForToken("implementation")).length)
			paramObj["implementation"] = "" + this.valueForToken("implementation");

		for (var param in paramObj) {
			var value = paramObj[param];
			paramArr.push(param + "=" + escape(value));
		}

		mmScript.src = baseUrl + paramArr.join("&");
		document.body.appendChild(mmScript);
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
