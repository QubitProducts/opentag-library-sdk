//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("krux.kruxinterchange.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Krux Interchange",
		async: true,
		description: "Leverage data to inform first party targeting of advertising, content, or commerce on your own web properties",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "http://cdn.krxd.net/krux.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Publisher Id",
			description: "Your unique publisher id",
			token: "publisher_id",
			uv: ""
		}, {
			name: "Site Domain",
			description: "The domain of your site",
			token: "site_url",
			uv: ""
		}, {
			name: "Page Section",
			description: "The section of your website that the tag is being loaded on - this may change from page to page",
			token: "section",
			uv: "universal_variable.page.category"
		}, {
			name: "Page Sub-section",
			description: "The subsection of the site that is being shown",
			token: "subsection",
			uv: "universal_variable.page.subcategory"
		}],
		categories:[
			"Audience Management"
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
		window.KRUXSetup = {
			pubid: "" + this.valueForToken("publisher_id"),
			site: "" + this.valueForToken("site_url"),
			section: "" + this.valueForToken("section"),
			subSection: "" + this.valueForToken("subsection"),
			async: true
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
