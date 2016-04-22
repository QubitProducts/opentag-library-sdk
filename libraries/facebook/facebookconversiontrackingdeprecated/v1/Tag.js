//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"facebook.facebookconversiontrackingdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Facebook Conversion Tracking DEPRECATED",
			async: true,
			description: "Conversion tracking helps businesses measure the return on investment of their Facebook Ads by reporting on the actions people take after viewing those ads.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Facebook Pixel Id",
				description: "The unique tracking pixel id for the tag.",
				token: "pixel_id",
				uv: ""
			}, {
				name: "Subtotal",
				description: "The value of the conversion",
				token: "subtotal",
				uv: "universal_variable.transaction.subtotal"
			}],
		categories:[
			"Social"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window.fb_param = {};
			fb_param.pixel_id = '' + this.valueForToken("pixel_id");
			fb_param.value = '' + this.valueForToken("subtotal");
			var fpw = document.createElement('script');
			fpw.async = true;
			fpw.src = '//connect.facebook.net/en_US/fp.js';
			var ref = document.getElementsByTagName('script')[0];
			ref.parentNode.insertBefore(fpw, ref);
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
