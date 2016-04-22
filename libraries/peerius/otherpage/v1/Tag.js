//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.otherpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Other Page",
		async: true,
		description: "Peerius tag for all other pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "Language of the page the tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
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
		window.PeeriusCallbacks = window.PeeriusCallbacks || {};
		window.PeeriusCallbacks.track = {
			type: "other",
			lang: "" + this.valueForToken("lang")
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
