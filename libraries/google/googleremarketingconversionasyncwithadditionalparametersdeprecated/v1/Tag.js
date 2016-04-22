//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleremarketingconversionasyncwithadditionalparametersdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Remarketing Conversion Async, with additional parameters [DEPRECATED]",
			async: true,
			description: "Contains additional parameters including color, language, and format.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Your Google id provided in the script",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Google Conversion Label",
				description: "A alphanumeric label of your conversion tracking",
				token: "label",
				uv: ""
			}, {
				name: "Google Conversion Language",
				description: "e.g. \"en\"",
				token: "lang",
				uv: ""
			}, {
				name: "Google Conversion Format",
				description: "The format of the conversion, e.g. \"3\"",
				token: "format",
				uv: ""
			}, {
				name: "Google Conversion Color",
				description: "The related color to the conversion, e.g. \"ffffff\"",
				token: "color",
				uv: ""
			}, {
				name: "Google Conversion Value",
				description: "The value associated with the conversion.",
				token: "value",
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
				google_conversion_label: "" + this.valueForToken("label"),
				google_conversion_language: "" + this.valueForToken("lang"),
				google_conversion_format: "" + this.valueForToken("format"),
				google_conversion_color: "" + this.valueForToken("color"),
				google_conversion_value: this.valueForToken("value"),
				google_custom_params: window.google_tag_params || {}
			});
			/*~post*/
		}
	});
