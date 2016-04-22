//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("visualdna.postcodesync.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Postcode Sync",
		async: true,
		description: "This tag should fire on any successful login or registration of a user with a known postcode. The tag must have a dependency on the Visual DNA Page View Report tag.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}, {
			name: "Postcode",
			description: "Postcode",
			token: "postcode",
			uv: ""
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		window.VDNA.queue.push({
			apiKey: "" + this.valueForToken("api_key"),
			method: "reportConversion",
			args: ["sync", {
				"partner_user_id": "" + this.valueForToken("postcode"),
				"partner_user_id_type": "postcode"
			}]
		});
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
