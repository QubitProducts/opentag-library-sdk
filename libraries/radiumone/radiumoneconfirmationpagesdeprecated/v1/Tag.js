//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"radiumone.radiumoneconfirmationpagesdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "RadiumOne - Confirmation Pages DEPRECATED",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Product Quantity List",
				description: "An array of all the product ids in the transaction",
				token: "order_article",
				uv: "universal_variable.transaction.line_items[#].quantity"
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

			// Get comma separated list
			var i = 0,
				ii = this.valueForToken("order_article").length;
			var arr = [];
			for (; i < ii; i++) {
				arr[i] = this.valueForToken("order_article")[i];
			}
			var product_qty_list = arr.join(',');

			// Iframe
			iframe = document.createElement('iframe');
			iframe.src = '//rs.gwallet.com/r1/pixel/x6034r' + time +
				'?product_quantity=' + product_qty_list;
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
