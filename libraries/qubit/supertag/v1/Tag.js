//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.supertag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "SuperTag",
		async: true,
		description: "There are tags, most commonly Google AdWords and DoubleClick for Advertisers, which might have a huge number of different variants depending on a parameter in the URL, the landing page, or some other custom function. The aim of this script here is to make it much easier to handle them so you don't have to go through the grid of coding it yourself.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "s3-eu-west-1.amazonaws.com/opentag-images/super_tags.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Web Utilities / JavaScript Tools"
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
