//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googleretargetingconversionasyncwithcustomparameters.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Retargeting Conversion Async with custom parameters",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_id",
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
						google_conversion_id: _this.valueForToken("google_id"),
						google_custom_params: window.google_tag_params || {},
						google_remarketing_only: true
					});
				} else {
					setTimeout(poll, 100);
				}
			};

			poll();
			/*~post*/
		}
	});
