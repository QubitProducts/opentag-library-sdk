//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleremarketingonlyaynscdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Remarketing Only Aynsc [DEPRECATED]",
			async: true,
			description: "Remarkting Only Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "",
				token: "conversionid",
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
			var _this = this;
			var poll = function() {
				if (window.google_trackConversion) {
					window.google_trackConversion({
						google_conversion_id: "" + _this.valueForToken("conversionid"),
						google_remarketing_only: true,
						google_custom_params: window.google_tag_params || {}
					});
				} else {
					setTimeout(poll, 250);
				}
			};
			poll();
			/*~post*/
		}
	});
