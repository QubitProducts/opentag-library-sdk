//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.searchpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Search Page",
		async: true,
		description: "Peerius tag for the search page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "Language that the site is in",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Search Query",
			description: "The search query string",
			token: "query",
			uv: ""
		}, {
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is to be implemented",
			token: "client_id",
			uv: ""
		}, {
			name: "Peerius Search Listing IDs",
			description: "The ids of the products in the search listing",
			token: "listing_ids",
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
				lang: "" + this.valueForToken("lang"),
				searchResults: {
					term: "" + this.valueForToken("query"),
					results: []
				}
			}
		};
		var ii = this.valueForToken("listing_ids").length;
		for (var i = 0; i < ii; i++) {
			PeeriusCallbacks.track.searchResults.results.push({
				refCode: this.valueForToken("listing_ids")[i]
			});
		}
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
