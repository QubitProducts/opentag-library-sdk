//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mediaforge.basic.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basic",
		async: true,
		description: "The Basic Tag might be placed on a home/landing page where no product or category specific information is available.",
		html: "<script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "mediaFORGE Merchant ID",
			description: "The ID that relates you to mediaFORGE",
			token: "merchant_id",
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
