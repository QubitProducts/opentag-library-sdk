//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("bizrate.bizratenonbuyersurvey.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "BizRate Non-Buyer Survey",
		async: true,
		description: "Survey presented to visitors as they browse the site.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "eval.bizrate.com/js/survey_${merchant_id}_1.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "BizRate Merchant ID",
			description: "The identifier that corresponds to the merchant.",
			token: "merchant_id",
			uv: ""
		}],
		categories:[
			"Feed Management (Shopping Comparison)"
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
