//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"merchantadvantage.chanalyticsproductpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Chanalytics - Product Page",
			async: true,
			description: "To be placed on all product pages for MerchantAdvantage's Chanalytics tracking.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "http://chanalytics.merchantadvantage.com/inchannel/maq.js",
			usesDocWrite: true,
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
