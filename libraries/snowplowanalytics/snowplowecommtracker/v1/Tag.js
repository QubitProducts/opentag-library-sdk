//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("snowplowanalytics.snowplowecommtracker.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Snowplow EcommTracker",
		async: true,
		description: "SnowPlow eCommerce tracking tag to collect transaction data into your SnowPlow system. Must have a dependency set on the PageTracker.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Web Analytics"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.sp_t = window.universal_variable.transaction;

		if (sp_t) {
			// First fire the 'addTrans' event for the new transaction
			_snaq.push(['addTrans',
				sp_t.order_id || '', // transactionId
				'', // transactionAffiliation
				quote(sp_t.total), // transactionTotal
				quote(sp_t.tax), // transactionTax
				quote(sp_t.shipping_cost), // transactionShipping
				sp_t.delivery.city || '', // city
				sp_t.delivery.state || '', // state
				sp_t.delivery.country || '' //country
			]);

			// Second fire the 'addItem' event for each item included in the transaction
			for (i = 0; i < sp_t.line_items.length; i++) {
				_snaq.push(['addItem',
					sp_t.order_id || '', // transaction Id
					sp_t.line_items[i].product.id || '', // product sku
					sp_t.line_items[i].product.name || '', // product name
					sp_t.line_items[i].product.category || '', // product category
					quote(sp_t.line_items[i].product.unit_sale_price), // product price
					quote(sp_t.line_items[i].quantity) // product quantity
				]);
			}

			// Finally fire the 'trackTrans' event to commit the transaction
			_snaq.push(['trackTrans']);
		}
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
