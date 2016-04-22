//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("PACKAGE_NAME.Tag", {
	getDefaultConfig: function () {
		return {
			/*config*/
			description: "DESCRIPTION.",
			name: "TAG_NAME",
			async: true,
			isPrivate: false,
			html: "",
			parameters: [
				
			]
			/*~config*/
		};
	},
	script: function() {
	/*script*/
		// write your code here that will be executed after all 
		// filters, urls, html injections and dependencies pass/execute.
	/*~script*/
	},
	pre: function() {
	/*pre*/
		//write here pre execution code
	/*~pre*/
	},
	post: function() {
	/*post*/
		//write here post execution code
	/*~post*/
	}
});
