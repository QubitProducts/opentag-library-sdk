//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("webtrends.deprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "DEPRECATED",
		async: true,
		description: "",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"/cs/static/js/webtrends/webtrends.js\"></script><!-- Version: 9.3.0 -->\n\n\n\n<script type=\"text/javascript\">	\n//<![CDATA[\n  var _tag=new WebTrends();\n  _tag.dcsGetId();\n//]]>	\n</script>\n\n<script type=\"text/javascript\">\n//<![CDATA[\n  _tag.dcsCustom=function(){\n    // Add custom parameters here.\n    //_tag.DCSext.param_name=param_value;\n  }	\n  _tag.dcsCollect();\n//]]>	\n</script>",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Web Analytics"
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
