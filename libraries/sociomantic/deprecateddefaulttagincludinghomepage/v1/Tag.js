//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sociomantic.deprecateddefaulttagincludinghomepage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "{DEPRECATED} Default Tag (including Home Page)",
			async: true,
			description: "Homepage tracking code as Default for all pages that can't be assigned to a specific page type",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${TOKEN}",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Advertiser Token",
				description: "Your Sociomantic customer ID. Please only use the token that has been created and sent to you.",
				token: "TOKEN",
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
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
