//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("veinteractive.containertag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Container Tag",
		async: true,
		description: "Tag to be placed on all pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "VE Interactive tag",
			description: "The ID for the tag in this format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX with dashes included",
			token: "id",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		var scriptURL = this.valueForToken("id");
		var script = document.createElement("script");

		script.src = scriptURL;
		document.getElementsByTagName("head")[0].appendChild(script);
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
