//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"marinsoftware.basicconversionanonymizeip.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Basic Conversion - Anonymize IP",
			async: true,
			description: "This tag is the same as the Basic Conversion tag but also anonymizes the user's IP address",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Order ID",
				description: "Order ID",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Currency",
				description: "Order Currency",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Marin Tracking ID",
				description: "Marin Tracking ID",
				token: "tracking_id",
				uv: ""
			}, {
				name: "Order Total",
				description: "Order Total",
				token: "subtotal",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Marin Conversion Type",
				description: "Marin Conversion Type",
				token: "conversion",
				uv: ""
			}],
		categories:[
			"Search Engine"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window._mTrack = window._mTrack || [];
			_mTrack.push(['activateAnonymizeIp']);

			_mTrack.push(['addTrans', {
				currency: "" + this.valueForToken("currency"),
				items: [{
					convType: "" + this.valueForToken("conversion"),
					price: "" + this.valueForToken("subtotal"),
					orderId: "" + this.valueForToken("order_id")
				}]
			}]);

			_mTrack.push(['processOrders']);

			var mClientId = "" + this.valueForToken("tracking_id");
			var mProto = ('https:' == document.location.protocol ? 'https://' :
				'http://');
			var mHost = 'tracker.marinsm.com';
			var mt = document.createElement('script');
			mt.type = 'text/javascript';
			mt.async = true;
			mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
			var fscr = document.getElementsByTagName('script')[0];
			fscr.parentNode.insertBefore(mt, fscr);
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
