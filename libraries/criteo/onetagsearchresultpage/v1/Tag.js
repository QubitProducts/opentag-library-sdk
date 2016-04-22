//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("criteo.onetagsearchresultpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "OneTag - Search Result Page",
		async: true,
		description: "Add to a page listing products. This will pick off the first three values in the Listing Product IDs array and send them to Criteo, with (by default) the search query as keywords. INTENDED FOR: Pages which include a query in their UV Listing.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "static.criteo.net/js/ld/ld.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Criteo Partner ID",
			description: "The ID assigned to you by Criteo",
			token: "partner_id",
			uv: ""
		}, {
			name: "Customer ID",
			description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Site Type",
			description: "\"m\" for mobile or \"t\" for tablet or \"d\" for desktop",
			token: "site_type",
			uv: ""
		}, {
			name: "Search Query",
			description: "The query used to return this page's listing. NOTE: Words should be separated by spaces",
			token: "search_query",
			uv: "universal_variable.listing.query"
		}, {
			name: "Product ID List",
			description: "Listing of Product IDs this search has produced.",
			token: "product_ids",
			uv: "universal_variable.listing.items[#].id"
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
		//Criteo suggests that this list should only be 3 products long.
		var products = [];

		var ii = (this.valueForToken("product_ids").length < 3) ?
			this.valueForToken("product_ids").length : 3;

		for (i = 0; i < ii; i++) {
			products.push(this.valueForToken("product_ids")[i]);
		}

		var user_id = "" + this.valueForToken("customer_id");
		//Remove email if present.
		if (user_id.indexOf("@") > -1) {
			user_id = "";
		}

		window.criteo_q = window.criteo_q || [];
		window.criteo_q.push({
			event: "setAccount",
			account: this.valueForToken("partner_id")
		}, {
			event: "setCustomerId",
			id: user_id
		}, {
			event: "setSiteType",
			type: "" + this.valueForToken("site_type")
		}, {
			event: "viewList",
			product: products,
			keywords: "" + this.valueForToken("search_query")
		});
		/*~post*/
	}
});
