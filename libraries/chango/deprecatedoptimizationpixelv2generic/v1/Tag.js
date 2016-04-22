//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"chango.deprecatedoptimizationpixelv2generic.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "[DEPRECATED] Optimization Pixel  [v2] - Generic",
			async: true,
			description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "ID",
				description: "",
				token: "ID",
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
			window.__cho__ = {
				"data": {
					"pt": "",
					"crt": "",
					"na": "",
					"op": "",
					"sp": "",
					"sku": "",
					"pc": ""
				},
				"pid": this.valueForToken("ID"),
				"puid2": ""
			};
			
			var c = document.createElement('script');
			c.type = 'text/javascript';
			c.async = true;
			c.src = document.location.protocol + '//cc.chango.com/static/o.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(c, s);
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
