//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.homepagewithsmartrecs.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Home Page (with SmartRecs)",
		async: true,
		description: "Home page tag with SmartRecs. Uses global function renderRecsHome. Need to make sure renderRecsHome is defined on the home page in the window.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_name}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Client Name",
			description: "The client name that Peerius refers to you as",
			token: "client_name",
			uv: ""
		}, {
			name: "Peerius Language",
			description: "The language that the user is viewing the site with",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Channel",
			description: "The channel that the user is viewing the site from",
			token: "channel",
			uv: ""
		}, {
			name: "Peerius User Name",
			description: "The user's full name",
			token: "user_name",
			uv: "universal_variable.user.name"
		}, {
			name: "Peerius Email",
			description: "The user's email",
			token: "email",
			uv: "universal_variable.user.email"
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
					email: "" + this.valueForToken("email")
				}
			},
			smartRecs: function(jsonData) {
				if (window.renderRecsHome) {
					window.renderRecsHome(jsonData);
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
