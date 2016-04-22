//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"bing.bingadcentercampaignanalyticsfullycustomizable.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Bing AdCenter Campaign Analytics - Fully Customizable",
			async: true,
			description: "Script to generate reports on the success of your advertising campaigns via Bing Search. Fully customizable.",
			html: "<iframe src=\"//flex.atdmt.com/mstag/tag/${URL_ID}/analytics.html?dedup=${DEDUPE}&domainId=${DOMAIN_ID}&type=${TYPE}&revenue=${REVENUE}&actionid=${ACTION_ID}\" frameborder=\"0\" scrolling=\"no\" width=\"1\" height=\"1\" style=\"visibility:hidden;display:none\">",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "URL ID",
				description: "The id in the url of the script, eg fb9804c9-b48f-46d1-a20e-88c3ff3302cc",
				token: "URL_ID",
				uv: ""
			}, {
				name: "Domain Id",
				description: "The id common to all bing tracking tags",
				token: "DOMAIN_ID",
				uv: ""
			}, {
				name: "Dedupe",
				description: "Dedupe settings eg 1",
				token: "DEDUPE",
				uv: ""
			}, {
				name: "Type",
				description: "Type eg 1",
				token: "TYPE",
				uv: ""
			}, {
				name: "Revenue",
				description: "Revenue",
				token: "REVENUE",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Action Id",
				description: "Action Id. Eg 948565",
				token: "ACTION_ID",
				uv: ""
			}],
		categories:[
			"Search Engine"
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
			/*~post*/
		}
	});
