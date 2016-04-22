//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"freespee.yetanotheroopsiforgottochangethedefaultstag.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Yet another \"oops I forgot to change the defaults\" tag",
			async: true,
			description: "The transaction ID is required on the Confirmation page along with extra information such as currency, amounts, quantities, checkout total and product IDs. Now includes optional user ID support",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [

			],
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
			window.basket = {
				products: []
			};

			for (var i = 0, ii = this.valueForToken("product_ids").length; i < ii; i++) {
				basket.products.push({
					identifier: this.valueForToken("product_ids")[i],
					amount: this.valueForToken("amounts")[i],
					currency: '' + this.valueForToken("currency"),
					quantity: this.valueForToken("quantities")[i]
				});
			}

			basket.transaction = '' + this.valueForToken("transaction_id");
			basket.amount = '' + this.valueForToken("checkout_total");
			basket.currency = '' + this.valueForToken("currency");
			window.basket = basket;

			//Allows for custom scripts altering the customer object. Skipped over if user_id is false-like
			var uid = this.valueForToken("user_id");
			if (uid) {
				var customer = window.customer || {};
				customer.identifier = uid;
			}
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
