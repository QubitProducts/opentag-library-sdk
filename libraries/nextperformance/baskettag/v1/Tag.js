//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("nextperformance.baskettag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basket Tag",
		async: true,
		description: "Tag to be inserted on the shopping carts pages, pre-confirmation.",
		html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account (zid)",
			description: "zid value provided by NextPerformance",
			token: "zid",
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
