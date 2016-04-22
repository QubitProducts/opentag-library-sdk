//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.searchpagewithsmartrecs.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Search Page (with SmartRecs)",
		async: true,
		description: "Peerius tag for search pages with SmartRecs. Uses renderRecsSearch global function. renderRecsSearch must be defined on window variable.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_name}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Client Name",
			description: "The name that peerius knows you buy",
			token: "client_name",
			uv: ""
		}, {
			name: "Peerius Language",
			description: "The current language on the search page",
			token: "peerius_language",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Search Query",
			description: "The search query responsible for the results on the current page",
			token: "search_query",
			uv: "universal_variable.listing.query"
		}, {
			name: "Peerius Product Listing IDs",
			description: "The array of product IDs in the results",
			token: "search_listing_ids",
			uv: "universal_variable.listing.items[#].id"
		}],
		categories:[
			"Personalisation Platform"
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
		window.PeeriusCallbacks = {
			track: {
				type: "searchresults",
				lang: "" + this.valueForToken("peerius_language"),
				searchResults: {
					term: "" + this.valueForToken("search_query"),
					results: []
				}
			},
			smartRecs: function(jsonData) {
				if (window.renderRecsSearch) {
					window.renderRecsSearch(jsonData);
				}
			}
		};

		var ii = this.valueForToken("search_listing_ids").length;
		for (var i = 0; i < ii; i++) {
			PeeriusCallbacks.track.searchResults.results.push({
				refCode: this.valueForToken("search_listing_ids")[i]
			});
		}
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
