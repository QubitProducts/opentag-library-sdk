//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"qubit.googletagmanagerconverterdatalayeruv.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Tag Manager Converter: dataLayer > UV",
			async: true,
			description: "Take the Google Tag Manager data layer and map it to UV.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
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
			var u = window.universal_variable = window.universal_variable || {};

			var dataLayerOptions = {

				from: "dataLayer",
				fromType: "gtm",

				// What we do with each variable
				mappings: [

					// Page
					{
						key: "pageCategory",
						parent: "page",
						action: function(value) {
							value = (isArray(value)) ? value.join(" - ") : value;
							u.page.category = value;
						}
					}, {
						key: "pageSubCategory",
						parent: "page",
						action: function(value) {
							value = (isArray(value)) ? value.join(" - ") : value;
							u.page.subcategory = value;
						}
					},


					// User
					{
						key: "visitorId",
						parent: "user",
						action: function(value) {
							u.user.user_id = value;
						}
					}, {
						key: "visitorType",
						parent: "user",
						action: function(value) {
							u.user.types = u.user.types || [];
							u.user.types.push(value);
						}
					},

					// Conversion data
					// tbc


					// Transaction data
					{
						key: "transactionId",
						parent: "transaction",
						action: function(value) {
							u.transaction.order_id = value;
						}
					}, {
						key: "transactionTotal",
						parent: "transaction",
						action: function(value) {
							u.transaction.total = value;
							u.transaction.subtotal = value;
						}
					}, {
						key: "transactionShipping",
						parent: "transaction",
						action: function(value) {
							u.transaction.shipping_cost = value;
						}
					}, {
						key: "transactionTax",
						parent: "transaction",
						action: function(value) {
							u.transaction.tax = value;
						}
					}, {
						key: "transactionPaymentType",
						parent: "transaction",
						action: function(value) {
							u.transaction.payment_type = value;
						}
					}, {
						key: "transactionCurrency",
						parent: "transaction",
						action: function(value) {
							u.transaction.currency = value;
						}
					}, {
						key: "transactionShippingMethod",
						parent: "transaction",
						action: function(value) {
							u.transaction.shipping_method = value;
						}
					}, {
						key: "transactionPromoCode",
						parent: "transaction",
						action: function(value) {
							u.transaction.voucher = value;
						}
					}, {
						key: "transactionProducts",
						parent: "transaction",
						action: function(value) {
							var line_items = u.transaction.line_items = u.transaction.line_items || [];
							if (!isArray(value)) return;
							for (var i = 0; i < value.length; i++) {
								var gtmProduct = value[i];
								if (typeof gtmProduct === "object") {
									var lineItem = {
										product: {
											id: gtmProduct.id,
											name: gtmProduct.name,
											sku_code: gtmProduct.sku,
											category: gtmProduct.category,
											currency: gtmProduct.currency,
											unit_sale_price: gtmProduct.price,
											unit_price: gtmProduct.price
										},
										subtotal: gtmProduct.price * gtmProduct.quantity,
										quantity: gtmProduct.quantity
									};
									line_items.push(lineItem);
								}
							}
						}
					},


					// Search data 
					{
						key: "siteSearchTerm",
						parent: "listing",
						action: function(value) {
							u.listing.query = value;
						}
					}

				]

			};

			/*** Library functions ***/

			var isArray = function(value) {
				return (Object.prototype.toString.call(value) === "[object Array]");
			};


			/*** Generic adapter API ***/

			var Adapater = {

				mappings: [],

				initialize: function(options) {
					this.options = options;
					this.currentDataLayer = window[options.from];
					this.convert();
				},

				convert: function() {
					if (!this.currentDataLayer) return;
					if (this.options.fromType === "gtm") {
						this.convertGTM();
					}
				},

				ensureUv: function(key) {
					var u = window.universal_variable = window.universal_variable || {};
					if (key) {
						u[key] = u[key] || {};
					}
				},

				// The GTM dataLayer is an array of objects. Keys can be added at any point.
				convertGTM: function() {
					for (var i = 0; i < this.currentDataLayer.length; i++) {
						var arrayItem = this.currentDataLayer[i];
						for (var key in arrayItem) {
							var value = arrayItem[key];
							this.map(key, value);
						}
					}
				},

				map: function(key, value) {
					var info = this.getMappingInfo(key);
					if (info && info.parent && typeof info.action === "function") {
						this.ensureUv(info.parent);
						info.action(value);
					}
				},

				getMappingInfo: function(key) {
					for (var i = 0; i < this.options.mappings.length; i++) {
						if (this.options.mappings[i].key === key) {
							return this.options.mappings[i];
						}
					}
				}

			};

			// Start up
			Adapater.initialize(dataLayerOptions);
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
