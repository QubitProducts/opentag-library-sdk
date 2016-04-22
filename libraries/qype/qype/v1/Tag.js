//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qype.qype.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Qype",
		async: true,
		description: "Qype is a local review site - http://www.qype.co.uk/.",
		html: "<!--@SRC@--><script type=\"text/javascript\">var qypetoolConfig = {reviewCount: ${REVIEW_COUNT}, showStars: ${SHOW_STARS}}</script><script type=\"text/javascript\" src=\"http://www.qype.co.uk/qypetool/city_widget/world.en.js\"></script>",
		locationDetail: "${DIV_ID}",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Review Count",
			description: "The amount of reviews to show, must be < 24",
			token: "REVIEW_COUNT",
			uv: ""
		}, {
			name: "Show review rating",
			description: "Show the amount of stars in your review, must be either true or false",
			token: "SHOW_STARS",
			uv: ""
		}, {
			name: "Div Id",
			description: "In what url element should the reviews go? Must be an element id.",
			token: "DIV_ID",
			uv: ""
		}],
		categories:[
			"Ratings & Review Engine"
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
