//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("salecycle.genericmobile.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Generic [Mobile]",
		async: true,
		description: "The same as the non-confirmation tag, but for mobile.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "d16fk4ms6rqz1v.cloudfront.net/capture/mobile/${client_name}.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Client Name",
			description: "The client name that identifies you to SaleCycle",
			token: "client_name",
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
