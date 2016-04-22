//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelliad.seotracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "SEO Tracking",
		async: true,
		description: "The intelliAd SEO tracking allows you to track organic Google traffic as well as other search engine traffic, direct traffic, type-in traffic and referrer traffic from backlinks.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "t13.intelliad.de/cl/${client_id}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "IntelliAd Client ID",
			description: "The identifier that relates you to IntelliAd",
			token: "client_id",
			uv: ""
		}, {
			name: "Optional Campaign / Main Category Name",
			description: "You have the option to categorise your SEO traffic / web pages into main categories.",
			token: "campaign_id",
			uv: ""
		}, {
			name: "Optional AdGroup / Sub Category Name",
			description: "You have the option to categorise your SEO traffic / web pages into sub categories",
			token: "ad_id",
			uv: ""
		}],
		categories:[
			"Advertising Network"
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
		window.ia_tc = "" + this.valueForToken("campaign_id");
		window.ia_sc = "" + this.valueForToken("ad_id");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
