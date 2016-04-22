//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"radiumone.radiumonegenericpagesdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "RadiumOne - Generic Pages DEPRECATED",
			async: true,
			description: "",
			html: "\n\n",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Shop ID",
				description: "The unique ID for the store",
				token: "shop_id",
				uv: ""
			}],
		categories:[
			"Advertising Network"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			// Get timestamp (cachebuster)
			var time = new Date().getTime();
			// Iframe
			iframe = document.createElement('iframe');
			iframe.src = "//rs.gwallet.com/r1/pixel/x6036r" + time + "?shop_id=" +
				this.valueForToken("shop_id");
			iframe.width = 1;
			iframe.height = 1;
			iframe.frameBorder = 0;
			iframe.marginWidth = 0;
			iframe.marginHeight = 0;
			iframe.scrolling = 'no';
			document.body.appendChild(iframe);
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
