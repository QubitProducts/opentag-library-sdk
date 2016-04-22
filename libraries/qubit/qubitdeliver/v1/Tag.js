//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("qubit.qubitdeliver.v1.Tag", {
	getDefaultConfig: function () {
		return {
			/*config*/
		name: "Qubit - Deliver",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "dd6zx4ibq538k.cloudfront.net/smartserve-${property_id}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
            name: "Property ID",
            description: "Client's Property ID",
            token: "property_id",
            uv: ""
        }]
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
