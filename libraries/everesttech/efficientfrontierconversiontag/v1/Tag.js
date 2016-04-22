//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"everesttech.efficientfrontierconversiontag.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Efficient Frontier Conversion Tag",
			async: true,
			description: "To be placed only on the confirmation page",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.everestjs.net/static/st.v2.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Efficient Frontier User ID",
				description: "",
				token: "user",
				uv: ""
			}, {
				name: "Efficient Frontier Segment ID",
				description: "",
				token: "seg",
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
			"Email Service Provider (ESP)"
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
			try {
				window.ef_event_type = "transaction";
				window.ef_transaction_properties = "ev_Very_Revenue=" +
					this.valueForToken("order_total") + "&ev_Very_Order=1&ev_transid=" +
					this.valueForToken("order_id");
				window.ef_segment = "" + this.valueForToken("seg");
				window.ef_search_segment = "";
				window.ef_userid = "" + this.valueForToken("user");
				window.ef_pixel_host = "pixel.everesttech.net";
				effp();
			} catch (err) {}

			/*~post*/
		}
	});
