//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("shopzilla.shopzillasurveyform.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Shopzilla Survey Form",
		async: true,
		description: "The buyer survey comes in two parts – the point of sale survey, which collects feedback from customers that buy from your store, and the fulfilment survey, which follows up after goods have been delivered.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "evaleu.shopzilla.com/js/pos_${account}.js",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Account Number",
			description: "The number at the end of Shopzilla script. e.g. 0000 in evaleu.shopzilla.com/js/pos_0000.js",
			token: "account",
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
