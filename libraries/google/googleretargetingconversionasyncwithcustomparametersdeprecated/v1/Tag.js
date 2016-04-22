//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleretargetingconversionasyncwithcustomparametersdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Retargeting Conversion Async with custom parameters [DEPRECATED]",
			async: true,
			description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Conversion ID",
				description: "",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Conversion Label",
				description: "",
				token: "conversion_label",
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
			window.google_trackConversion({
				google_conversion_id: this.valueForToken("conversion_id"),
				google_conversion_label: "" + this.valueForToken("conversion_label"),
				google_custom_params: window.google_tag_params || {},
				google_remarketing_only: true
			});
			/*~post*/
		}
	});
