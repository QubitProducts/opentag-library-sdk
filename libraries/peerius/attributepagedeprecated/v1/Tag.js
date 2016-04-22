//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.attributepagedeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Attribute Page DEPRECATED",
		async: true,
		description: "DO NOT USE. Peerius tag for the attribute page",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "pt.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "Language of the page with the tag on it",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Category Attribute Name",
			description: "The name of the attribute of the category i.e. \"style\"",
			token: "name",
			uv: ""
		}, {
			name: "Peerius Category Attribute Value",
			description: "The value of the Peerius category attribute name",
			token: "value",
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
				type: "attribute",
				lang: "" + this.valueForToken("lang"),
				attribute: {
					name: "" + this.valueForToken("name"),
					value: "" + this.valueForToken("value")
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
