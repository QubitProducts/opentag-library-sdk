//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"deprecatedtags.deprecatedgoogleremarketingconversiontagsynchronous.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "[Deprecated] Google Remarketing Conversion Tag - Synchronous",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.googleadservices.com/pagead/conversion.js",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Conversion ID",
				description: "Google Conversion ID provided in the script",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Conversion Language",
				description: "Google Conversion Language provided in the script without quotes. e.g. en",
				token: "conversion_language",
				uv: ""
			}, {
				name: "Conversion Color",
				description: "Google Conversion Color provided in the script without quotes, e.g. 666666",
				token: "conversion_color",
				uv: ""
			}, {
				name: "Conversion Label",
				description: "Google Conversion Label provided in the script, it's usually a long text. e.g. CBAtWAvEaWOA43HV9PA",
				token: "conversion_label",
				uv: ""
			}, {
				name: "Conversion Format",
				description: "A conversion format provided in the script without quotes, e.g. 3",
				token: "conversion_format",
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
			window.google_conversion_id = this.valueForToken("conversion_id");
			window.google_conversion_language = "" + 
					this.valueForToken("conversion_language");
			window.google_conversion_color = "" + this.valueForToken("conversion_color");
			window.google_conversion_label = "" + this.valueForToken("conversion_label");
			window.google_conversion_format = "" + 
					this.valueForToken("conversion_format");
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
