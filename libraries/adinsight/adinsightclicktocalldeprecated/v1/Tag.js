//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"adinsight.adinsightclicktocalldeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "AdInsight Click to Call DEPRECATED",
			async: true,
			description: "DEPRECATED",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "static.adinsight.eu/static/scripts/adiTrack.min.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Account Id",
				description: "Your AdInsight account id, generally a 3 digit number",
				token: "Account_Id",
				uv: ""
			}],
		categories:[
			"Web Utilities / JavaScript Tools"
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
			window.adiInit = "" + this.valueForToken("Account_Id");
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
