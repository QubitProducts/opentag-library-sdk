//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"lengow.conversiontrackingconfirmationpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Conversion Tracking - Confirmation Page",
			async: true,
			description: "If you place this tag on the return page once the payment has been confirmed (order \nconfirmation page), you ensure that you’ll only find confirmed sales that have been validated by a \nbank or other payment method (i.e.: PayPal,…) in your Statistics board.\nIf you are using both tags (Payment Method Page & Confirmation Page), you need to visit this page https://solution.lengow.com/compte/tracking/\nto enable confirmation of orders by checking the box.\nDo not activate this box if you are only using the Payment Method Page tag.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Lengow Customer ID",
				description: "[mandatory] Your Lengow customer ID (integer value)",
				token: "lengow_customer_id",
				uv: ""
			}, {
				name: "Lengow Group ID",
				description: "[mandatory] Your Lengow Group ID (integer value)",
				token: "lengow_group_id",
				uv: ""
			}, {
				name: "Lengow Order Value",
				description: "[mandatory] the order amount (float value e.g.1254.54)",
				token: "lengow_order_value",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Lengow Order ID",
				description: "Conversion Tag - Lead Order ID must be identical with Conversion Tag - Lead Validation Order ID",
				token: "lengow_order_id",
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
			var lengowTrackPixel = new Image();
			lengowTrackPixel.src =
				"https://tracking.lengow.com/leadValidation.php?idClient=" +
				this.valueForToken("lengow_customer_id") + "&idGroup=" +
				this.valueForToken("lengow_group_id") + "&price=" +
				this.valueForToken("lengow_order_value") + "&idCommande=" +
				this.valueForToken("lengow_order_id");
			lengowTrackPixel.alt = "";
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
