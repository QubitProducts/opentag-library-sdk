//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("marinsoftware.basicconversion.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basic Conversion",
		async: true,
		description: "The Javascript will take the values specified below in the array of conversion metrics and send them to Marin along with the Cookie ID (UUID) created by the Click JavaScript; this allows Marin to join Clicks and Conversion data together. This version has fewer metrics for only basic conversion tracking.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Marin Conversion Type",
			description: "Marin Conversion Type",
			token: "conversion_type",
			uv: ""
		}, {
			name: "Marin Tracking Id",
			description: "Your unique tracking id",
			token: "tracking_id",
			uv: ""
		}, {
			name: "Order Total",
			description: "Order Total",
			token: "total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Currency",
			description: "Order Currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
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

		_mTrack.push(['addTrans', {
			currency: "" + this.valueForToken("currency"),
			items: [{
				convType: "" + this.valueForToken("conversion_type"),
				price: "" + this.valueForToken("total"),
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
