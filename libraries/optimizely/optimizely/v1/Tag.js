//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("optimizely.optimizely.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Optimizely",
		async: true,
		description: "Simple, fast, and powerful. Optimizely is a dramatically easier way for you to improve your website through A/B testing. Create an experiment in minutes with our easy to use visual interface with absolutely no coding or engineering required.",
		html: "<script type=\"text/javascript\" src=\"//cdn.optimizely.com/js/${ACCOUNT_ID}.js\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account Id",
			description: "Please enter your account ID. Do not include the .js",
			token: "ACCOUNT_ID",
			uv: ""
		}],
		categories:[
			"AB & Multi-Variate Testing"
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
