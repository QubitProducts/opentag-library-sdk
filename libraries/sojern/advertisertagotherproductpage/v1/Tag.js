//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sojern.advertisertagotherproductpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Advertiser Tag - Other Product Page",
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
		}, {
			name: "Product Name",
			description: "Product Name",
			token: "name",
			uv: ""
		}, {
			name: "Product Date",
			description: "Product Date",
			token: "date",
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
		(new Image()).src = "https://beacon.sojern.com/p/1?opid=" + this.valueForToken(
			"id") + "&opn=" + this.valueForToken("name") + "&date" + this.valueForToken(
			"date");
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
