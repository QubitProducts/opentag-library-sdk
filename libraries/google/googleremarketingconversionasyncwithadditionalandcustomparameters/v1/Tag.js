//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleremarketingconversionasyncwithadditionalandcustomparameters.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Remarketing Conversion Async, with additional and custom parameters",
			async: true,
			description: "Contains additional parameters including color, language, and format. Also includes custom parameter support.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Your Google ID provided in the script.",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Google Conversion Label",
				description: "An alphanumeric label of your conversion tracking.",
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
				description: "The color related with the conversion, e.g. \"ffffff\"",
				token: "color",
				uv: ""
			}, {
				name: "Google Conversion Value",
				description: "The value associated with the conversion.",
				token: "value",
				uv: ""
			}, {
				name: "Google Custom Parameters",
				description: "Arbitrary parameters defined in the form of a javascript object. An empty object \"{ }\" is valid.",
				token: "custom",
				uv: ""
			}],
		categories:[
			"Web Utilities / JavaScript Tools"
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
				google_custom_params: this.valueForToken("custom")
			});
			/*~post*/
		}
	});
