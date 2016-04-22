//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("nextperformance.homepagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Home Page Tag",
		async: true,
		description: "Tag to be inserted on the home page.",
		html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${id}\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account (zid)",
			description: "zid value provided by NextPerformance",
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
