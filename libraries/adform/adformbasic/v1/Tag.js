//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("adform.adformbasic.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "AdForm - Basic",
		async: true,
		description: "To be placed on any page except order confirmation pages.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "track.adform.net/serving/scripts/trackpoint/async/",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Adform Campaign ID",
			description: "The unique client ID for the AdForm tracking script",
			token: "campaignid",
			uv: ""
		}, {
			name: "AdForm Point ID",
			description: "Point ID for the tag. Usually unique to page type.",
			token: "pointid",
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
		/*~script*/
	},
	pre: function() {
		/*pre*/
		window._adftrack = {
			pm: this.valueForToken("campaignid"),
			id: this.valueForToken("pointid")
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
