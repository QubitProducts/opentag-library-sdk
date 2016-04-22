//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("matiro.matirotag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Matiro Tag",
		async: true,
		description: "Real-time web market advertising tag",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "asset.matiro.com/${pixel_id}?m1=${order_id}&m2=${order_amount}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Matiro Pixel Identifier",
			description: "ID for the Matiro tracking pixel",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Matiro Order Identifier",
			description: "ID for the specific order",
			token: "order_id",
			uv: ""
		}, {
			name: "Matiro Order Amount",
			description: "The amount of the current order",
			token: "order_amount",
			uv: ""
		}],
		categories:[
			"Advertising Network"
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
