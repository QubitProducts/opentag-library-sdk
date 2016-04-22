//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.homepage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Home Page",
		async: true,
		description: "Peerius tag for the home page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "Language of the page that the tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius User Name",
			description: "The name of the user of the home page",
			token: "user_name",
			uv: "universal_variable.user.name"
		}, {
			name: "Peerius User Email",
			description: "Email of the user on the home page",
			token: "user_email",
			uv: "universal_variable.user.email"
		}, {
			name: "Peerius Channel",
			description: "Channel on the home page",
			token: "channel",
			uv: ""
		}, {
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is to be implemented",
			token: "client_id",
			uv: ""
		}],
		categories:[
			"Personalisation Platform"
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
		window.PeeriusCallbacks = {
			track: {
				type: "home",
				lang: "" + this.valueForToken("lang"),
				channel: "" + this.valueForToken("channel"),
				user: {
					name: "" + this.valueForToken("user_name"),
					email: "" + this.valueForToken("user_email")
				}
			}
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
