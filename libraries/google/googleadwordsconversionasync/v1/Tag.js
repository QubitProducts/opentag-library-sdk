//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("google.googleadwordsconversionasync.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Google AdWords Conversion Async",
		async: true,
		description: "Tracks users that have converted who previously clicked through on an ad.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Conversion ID",
			description: "Your Google id provided in the script",
			token: "conversion_id",
			uv: ""
		}, {
			name: "Conversion Label",
			description: "A alphanumeric label of your conversion tracking",
			token: "label",
			uv: ""
		}, {
			name: "Conversion Value",
			description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
			token: "value",
			uv: "universal_variable.transaction.subtotal"
		}],
		categories:[
			"Search Engine"
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
		window.google_trackConversion({
			google_conversion_id: this.valueForToken("conversion_id"),
			google_conversion_label: "" + this.valueForToken("label"),
			google_conversion_value: this.valueForToken("value"),
			google_conversion_format: "3",
			google_is_call: true,
			google_custom_params: {}
		});
		/*~post*/
	}
});
