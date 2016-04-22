//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("lyris.clicktracksgenerictag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Click Tracks Generic Tag",
		async: true,
		description: "All pages except confirmation page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "stats2.clicktracks.com/cgi-bin/ctasp-server.cgi?i=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Click Tracks ID",
			description: "",
			token: "id",
			uv: ""
		}],
		categories:[
			"Digital Media Agencies"
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
