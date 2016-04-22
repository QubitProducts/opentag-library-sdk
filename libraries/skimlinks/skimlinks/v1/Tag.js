//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("skimlinks.skimlinks.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Skimlinks",
		async: true,
		description: "Converts any normal product or merchant link in your content into its equivalent affiliate link as a user clicks on it.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "s.skimresources.com/js/${publisher_id}.skimlinks.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Publisher ID",
			description: "A publisher ID provided by Skimlinks. The format should be 0000X1111",
			token: "publisher_id",
			uv: ""
		}],
		categories:[
			"Affiliate Networks"
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
