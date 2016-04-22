//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagotherpurchaseconfirmationpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Advertiser Tag - Other Purchase Confirmation Page",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Purchase Price",
				description: "if price is e.g. $234.23 then pass 234 only",
				token: "price",
				uv: ""
			}, {
				name: "Confirmation Number",
				description: "Confirmation Number",
				token: "id",
				uv: ""
			}, {
				name: "Number of Products Purchased",
				description: "Number of Products Purchased",
				token: "quantity",
				uv: ""
			}, {
				name: "Customer's Postcode",
				description: "Customer's Postcode",
				token: "postcode",
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
			(new Image()).src = "https://beacon.sojern.com/p/11?op=" + this.valueForToken(
				"price") + "&oconfno" + this.valueForToken("id") + "&ono1=" + this.valueForToken(
				"quantity") + "&oz1=" + this.valueForToken("postcode");
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
