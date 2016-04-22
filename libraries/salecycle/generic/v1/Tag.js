//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("salecycle.generic.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Generic",
		async: true,
		description: "To implement SaleCycle, SaleCycle code must be pasted into the relevant web pages on your live website.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "d16fk4ms6rqz1v.cloudfront.net/capture/${clientName}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Client Name",
			description: "needs to be changed to reflect your company name minus any spaces",
			token: "clientName",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
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
