//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("conexance.categorypagedeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Category Page DEPRECATED",
		async: true,
		description: "DO NOT USE DEPRECATED",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"${web1by1_function_script}\"></script><script type=\"text/javascript\" src=\"${web1by1_config_script}\"></script>\n\n<script type=\"text/javascript\">\n	w1x1.iSet(2, \"${page_category}\");\n</script>",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Web1by1 Function Script URL",
			description: "The full URL (i.e. http://www.your-website.com/w1x1.js) for the Web1by1 Function Script",
			token: "web1by1_function_script",
			uv: ""
		}, {
			name: "Web1by1 Configuration Parameters Script URL",
			description: "The full URL of the Web1by1 Configuration Parameters script (either production or test)",
			token: "web1by1_config_script",
			uv: ""
		}, {
			name: "Page Category",
			description: "A string representing the category of the page",
			token: "page_category",
			uv: "universal_variable.page.category"
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
