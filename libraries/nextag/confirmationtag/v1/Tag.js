//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("nextag.confirmationtag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Tag",
		async: true,
		description: "ROI Tag without product details",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "imgsrv.nextag.com/imagefiles/includes/roitrack.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "NexTag ID",
			description: "",
			token: "nextag_id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}],
		categories:[
			"Feed Management (Shopping Comparison)"
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
		window.id = '' + this.valueForToken("nextag_id");
		window.rev = '' + this.valueForToken("order_total");
		window.order = '' + this.valueForToken("order_id");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
