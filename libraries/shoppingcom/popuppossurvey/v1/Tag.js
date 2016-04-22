//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("shoppingcom.popuppossurvey.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Popup PoS Survey",
		async: true,
		description: "This will show a point of sale survey for customers to share their feedback about their shopping experience.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "https://www.shopping.com/xMSJ?pt=js&direct=1&mid=${merchant_id}&lid=1",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Shopping.com Merchant ID",
			description: "The merchant ID which represents your site.",
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
