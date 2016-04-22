//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sociomantic.confirmationtagwithlastclicktracking.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Confirmation Tag (with last click tracking)",
			async: true,
			description: "As confirmation page tag, but with last click tracking. Now includes optional user ID support. MUST be set as dependent on CryptoJS SHA1 (Web Utilities in the tag library)",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Advertiser ID",
				description: "An identifier for the client",
				token: "advertiserid",
				uv: ""
			}, {
				name: "User ID",
				description: "User's identifier - return false to safely exclude it",
				token: "user_id",
				uv: "universal_variable.user.user_id"
			}, {
				name: "Transaction ID",
				description: "Identifier relating to the current transaction",
				token: "transaction_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Checkout Total",
				description: "The total value of items at checkout",
				token: "checkout_total",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Product Ids",
				description: "A list of identifiers relating to products in the order",
				token: "product_ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Prices",
				description: "A list of sale prices for each item in the order",
				token: "prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Currency",
				description: "The currency for the current order",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Quantities",
				description: "A list of quantities for items relating to respective items currently in the order",
				token: "quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "User Email",
				description: "User's email - return false to safely exclude it - will be hashed before sending (no PII is sent)",
				token: "user_email",
				uv: "universal_variable.user.email"
			}],
		categories:[
			"Advertising Network"
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
			window.sale = {
				confirmed: true
			};

			window.basket = {
				products: []
			};

			for (var i = 0, ii = this.valueForToken("product_ids").length; i < ii; i++) {
				basket.products.push({
					identifier: this.valueForToken("product_ids")[i],
					amount: this.valueForToken("prices")[i],
					currency: '' + this.valueForToken("currency"),
					quantity: this.valueForToken("quantities")[i]
				});
			}

			basket.transaction = '' + this.valueForToken("transaction_id");
			basket.amount = '' + this.valueForToken("checkout_total");
			basket.currency = '' + this.valueForToken("currency");
			window.basket = basket;
			window.customer = window.customer || {};

			//Allows for custom scripts altering the customer object. Skipped over if user_id or user_email is false-like
			window.email = '' + this.valueForToken("user_email");
			if (email && email.toLowerCase() !== "false") {
				email = email;
				email = CryptoJS.SHA1(email).toString();
				var date = new Date();
				date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
				document.cookie = "qb_sm_mhash=" + email + expires + ";";
				window.customer.mhash = email;
			} else {
				var parts = document.cookie.split("qb_sm_mhash=");
				if (parts.length == 2) window.customer.mhash = parts.pop().split(";").shift();
			}

			window.user_id = '' + this.valueForToken("user_id");
			if (user_id && user_id.toLowerCase() !== "false") {
				user_id = user_id;
				var date = new Date();
				date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
				document.cookie = "qb_sm_uid=" + email + expires + ";";
				window.customer.identifier = user_id;
			} else {
				var parts = document.cookie.split("qb_sm_uid=");
				if (parts.length == 2) window.customer.identifier = parts.pop().split(";").shift();
			}
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
