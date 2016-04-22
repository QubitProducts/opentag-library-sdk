//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("smartfocus.basketpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basket Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "js.advisor.smartfocus.com/advisor.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of Product SKUs",
			description: "Array of Product SKUs",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
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
		var skus = [];
		for (var i = 0; i < this.valueForToken("skus").length; i++) {
			skus.push("" + this.valueForToken("skus")[i]);
		}
		
		window._advisorq.push({
			_setConfig: {
				sku: 'CAT:CART',
				exclusionSkus: skus.join(",")
			}
		});

		window._advisorq.push({
			_suggest: {
				code: "cart",
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
