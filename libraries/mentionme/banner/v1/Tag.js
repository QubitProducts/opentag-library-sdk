//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mentionme.banner.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Banner",
		async: true,
		description: "Referrer promotional banner integration as an embedded iframe. Requires <div id=\"mmWrapper\"></div> to be on the page.\nThe * represents parameters that can be left as an empty value.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "MentionMe Partner Code",
			description: "The ID given to you by MentionMe",
			token: "partner_code",
			uv: ""
		}, {
			name: "MentionMe Script Domain",
			description: "'tag-demo' for testing and 'tag' for production",
			token: "script_domain",
			uv: ""
		}, {
			name: "MentionMe Situation",
			description: "String indicator of where you are including this tag within your site (for reporting)",
			token: "situation",
			uv: ""
		}, {
			name: "User Email*",
			description: "The customer's email address (string) e.g. bobdavies@mention-me.com",
			token: "user_email",
			uv: "universal_variable.user.email"
		}, {
			name: "User Full Name*",
			description: "The customer's fullname (parsed into surname, fullname fields)",
			token: "fullname",
			uv: "universal_variable.user.name"
		}, {
			name: "MentionMe Segment*",
			description: "String representing a customer segment (one of new, existing)",
			token: "segment",
			uv: ""
		}, {
			name: "User Locale*",
			description: "String representing the locale for the campaign",
			token: "locale",
			uv: "universal_variable.user.language"
		}, {
			name: "Username",
			description: "username",
			token: "username",
			uv: "universal_variable.user.username"
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
			".mention-me.com/api/v2/banner/" + this.valueForToken("partner_code") + "?";
		var mmScript = document.createElement("script");
		var paramArr = [];
		var paramObj = {
			situation: "" + this.valueForToken("situation")
		}
		if (("" + this.valueForToken("user_email")).length)
			paramObj["email"] = "" + this.valueForToken("user_email");
		if (("" + this.valueForToken("fullname")).length)
			paramObj["fullname"] = "" + this.valueForToken("fullname");
		if (("" + this.valueForToken("segment")).length)
			paramObj["segment"] = "" + this.valueForToken("segment");
		if (("" + this.valueForToken("locale")).length)
			paramObj["locale"] = "" + this.valueForToken("locale");

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
