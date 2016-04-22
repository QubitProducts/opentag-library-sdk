//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("lyris.clicktracksconfirmationpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Click Tracks Confirmation Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "stats2.clicktracks.com/cgi-bin/ctasp-server.cgi?i=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Click Tracks ID",
			description: "",
			token: "id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}],
		categories:[
			"Digital Media Agencies"
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
		window.CT_C_OrderTotal = '' + this.valueForToken("order_total");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
