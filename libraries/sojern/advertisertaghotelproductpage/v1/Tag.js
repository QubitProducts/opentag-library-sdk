//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sojern.advertisertaghotelproductpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Advertiser Tag - Hotel Product Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product ID",
			description: "Product ID",
			token: "id",
			uv: ""
		}],
		categories:[
			"Audience Management"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		(new Image()).src = "https://beacon.sojern.com/p/1?hpid=" +
			this.valueForToken("id");
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
