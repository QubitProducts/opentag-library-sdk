//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("smartfocus.productpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Product Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "js.advisor.smartfocus.com/advisor.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product SKU Code",
			description: "Product SKU Code",
			token: "sku",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "Full Category Path",
			description: "e.g. men,shoes,trainers",
			token: "path",
			uv: ""
		}, {
			name: "div ID or Class",
			description: "div ID or Class",
			token: "selector",
			uv: ""
		}, {
			name: "Title",
			description: "e.g. Recommendations for You",
			token: "title",
			uv: ""
		}],
		categories:[
			"Web Analytics"
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
		window._advisorq = window._advisorq || [];

		window._advisorq.push({
			_setConfig: {
				sku: "" + this.valueForToken("sku"),
				currentPath: "" + this.valueForToken("path")
			}
		});

		window._advisorq.push({
			_suggest: {
				code: "product",
				layout: {
					selector: "" + this.valueForToken("selector"),
					title: "" + this.valueForToken("title")
				}
			}
		});
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
