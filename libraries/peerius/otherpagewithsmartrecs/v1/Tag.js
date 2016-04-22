//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.otherpagewithsmartrecs.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Other Page (with SmartRecs)",
		async: true,
		description: "Peerius tag for all other pages. Uses the renderRecsLanding function, so requires window.renderRecsLanding to be defined on all pages the tag is on.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_name}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Client Name",
			description: "The name that Peerius can refer to you as",
			token: "client_name",
			uv: ""
		}, {
			name: "Peerius User Language",
			description: "The language the user uses on the current page",
			token: "lang",
			uv: "universal_variable.user.language"
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
				type: "other",
				lang: "" + this.valueForToken("lang")
			},
			smartRecs: function(jsonData) {
				if (window.renderRecsLanding) {
					window.renderRecsLanding(jsonData);
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
