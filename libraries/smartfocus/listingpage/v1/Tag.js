//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("smartfocus.listingpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Listing Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "js.advisor.smartfocus.com/advisor.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Array of product SKUs",
			description: "comma seArray of product SKUsperated",
			token: "skus",
			uv: "universal_variable.listing.items[#].sku_code"
		}, {
			name: "Category Page ID",
			description: "Category Page ID",
			token: "id",
			uv: "universal_variable.page.category"
		}, {
			name: "div ID or Class",
			description: "div ID or Class",
			token: "selector",
			uv: ""
		}, {
			name: "Current Category Path",
			description: "The whole category ID path, e.g. men,shoes,trainers",
			token: "path",
			uv: ""
		}, {
			name: "Title",
			description: "e.g. Recommnedations for You",
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
				sku: "CAT:" + this.valueForToken("id"),
				exclusionSkus: skus.join(","),
				currentPath: "" + this.valueForToken("path"),
				currentCategory: "" + this.valueForToken("id")
			}
		});

		window._advisorq.push({
			_suggest: {
				code: "category",
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
