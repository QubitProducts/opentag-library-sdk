//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("tenderapp.tenderapp.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Tender App",
		async: true,
		description: "Web 2.0 based support desk and knowlegebase software.",
		html: "<script type=\"text/javascript\" src=\"//${SUBDOMAIN}.tenderapp.com/tender_widget.js\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Subdomain",
			description: "Please enter your subdomain. Example: yourdomain.tenderapp.com",
			token: "SUBDOMAIN",
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
