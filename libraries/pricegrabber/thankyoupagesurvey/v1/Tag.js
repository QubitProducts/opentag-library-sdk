//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("pricegrabber.thankyoupagesurvey.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Thank You Page Survey",
		async: true,
		description: "Adjust the values of popup_pos_x, popup_pos_y to change the location of the popup layer on your confirmation page",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "https://www.pricegrabber.com/rating_merchrevpopjs.php?retid=${account_number}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "PriceGrabber Account Number",
			description: "",
			token: "account_number",
			uv: ""
		}, {
			name: "PriceGrabber Popup X",
			description: "",
			token: "x",
			uv: ""
		}, {
			name: "PriceGrabber Popup Y",
			description: "",
			token: "y",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "PriceGrabber Popup Email",
			description: "",
			token: "email",
			uv: "universal_variable.user.email"
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
		window.popup_pos_x = Number("" + this.valueForToken("x"));
		window.popup_pos_y = Number("" + this.valueForToken("y"));

		window.popup_order_number = "" + this.valueForToken("order_id");
		window.popup_email = "" + this.valueForToken("email");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
