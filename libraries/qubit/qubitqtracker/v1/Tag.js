//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("qubit.qubitqtracker.v1.Tag", {
	getDefaultConfig: function () {
      return {
			/*config*/
			name: "Qubit - QTracker",
			async: true,
			description: "Tracking Script for Qubit",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "dtxtngytz5im1.cloudfront.net/qtracker-v3-min.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Client ID",
				description: "Client's tracking ID",
				token: "client_id",
				uv: ""
			},{
				name: "Domain",
				description: "Client's Cookie Domain",
				token: "domain",
				uv: ""
			}],
			categories:[]
			/*~config*/
		};
	},
	script: function() {
	/*script*/
	/*~script*/
	},
	pre: function() {
	/*pre*/
      window._qtd = [{
        options: {
          domain: "${domain}",
          serverUrl: "pong.qubitproducts.com/t2",
          clientId: "${cliend_id}"
        }
      }];
	/*~pre*/
	},
	post: function() {
	/*post*/
	/*~post*/
	}
});
