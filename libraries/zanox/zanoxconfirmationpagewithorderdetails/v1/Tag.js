//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"zanox.zanoxconfirmationpagewithorderdetails.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Zanox - Confirmation Page with Order Details",
			async: true,
			description: "The Zanox confirmation page tag with order details. Includes generic \"MasterTag\" tracking pixel.",
			html: "<div class=\"zx_${page_id} zx_mediaslot\">\n  \n</div>",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Program ID",
				description: "Unique identifier, e.g. 10292C1904329647",
				token: "program_id",
				uv: ""
			}, {
				name: "User ID",
				description: "The user's unique identifier. Will not track if left blank.",
				token: "user_id",
				uv: "universal_variable.user.user_id"
			}, {
				name: "Order ID",
				description: "The unique identifier for this order",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Currency",
				description: "The currency in which this order was charged",
				token: "order_currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Subtotal",
				description: "The order's total value",
				token: "subtotal",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Zanox Partner ID",
				description: "Required for Advanced Session Tracking. Pass an empty hard-coded variable otherwise.",
				token: "partner_id",
				uv: ""
			}, {
				name: "Product Categories",
				description: "An array of categories for each product in the order",
				token: "product_cats",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Product Names",
				description: "An array of names for each product in the order",
				token: "product_names",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Product IDs",
				description: "An array of IDs for each product in the order",
				token: "product_ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product Prices",
				description: "An array of prices paid for each product in the order",
				token: "product_prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Product Quantities",
				description: "An array of quantities purchased for each product in the order",
				token: "product_qtys",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Product URLs",
				description: "An array of urls for each product in the order. Pass an empty hard-coded variable if unavailable.",
				token: "product_urls",
				uv: "universal_variable.transaction.line_items[#].product.url"
			}, {
				name: "Zanox Page ID",
				description: "The page ID for the confirmation page. Zanox calls this the 'checkout' page.",
				token: "page_id",
				uv: ""
			}],
		categories:[
			"Affiliate Networks"
		]

			/*~config*/
      };
		},
		script: function() {
			/*script*/
			var _this = this;
			//Define a function to ensure all product details are HTML encoded.
			window.htmlEncode = function(value) {

				//Place the string into an HTML div.
				var div = document.createElement("div");
				div.innerText = escape(value);

				//Extract the HTML from the div
				return div.innerHTML;
			};

			//Populate the XML String
			var xml_string = "<z><o>";
			for (var i = 0; i < _this.valueForToken("product_ids").length; i++) {
				var tempcat = htmlEncode(_this.valueForToken("product_cats")[i]);
				var tempname = htmlEncode(_this.valueForToken("product_names")[i]);
				var tempnum = htmlEncode(_this.valueForToken("product_ids")[i]);
				var tempprice = htmlEncode(_this.valueForToken("product_prices")[i]);
				var tempqty = htmlEncode(_this.valueForToken("product_qtys")[i]);
				var tempulp = htmlEncode(_this.valueForToken("product_urls")[i]); //Tracking will work if these are blank strings.
				xml_string += '<so cid="' + tempcat + '" pn="' + tempname + '" pnr="' +
					tempnum + '" up="' + tempprice + '" qty="' + tempqty + '" ulp="' + tempulp +
					'"/>';
			}
			xml_string += "</o></z>";

			//Encode the XML String as a URI Component
			xml_string = encodeURIComponent(xml_string);

			// Fire the confirmation tag
			var url = "//ad.zanox.com/pps/?" + _this.valueForToken("program_id");
			url += "&mode=[[1]]"; //Always '1' for JS
			url += "&CID=[[Basket]]";
			url += "&CustomerID=[[" + _this.valueForToken("user_id") + "]]";
			url += "&OrderID=[[" + _this.valueForToken("order_id") + "]]";
			url += "&CurrencySymbol=[[" + _this.valueForToken("order_currency") + "]]";
			url += "&TotalPrice=[[" + _this.valueForToken("subtotal") + "]]";
			url += "&PartnerID=[[" + _this.valueForToken("partner_id") + "]]"; //Leave blank unless supporting Advanced Session Tracking
			url += "&XML=[[" + xml_string + "]]";
			var script = document.createElement('script');
			script.src = url;
			script.type = "text/javascript";
			document.body.appendChild(script);

			// Set globals for usage by the master tag
			window.zx_products = [];
			window.zx_transaction = "" + _this.valueForToken("order_id");
			window.zx_total_amount = "" + _this.valueForToken("subtotal");
			window.zx_total_currency = "" + _this.valueForToken("order_currency");

			// The standard mastertag
			window._zx = window._zx || [];
			window._zx.push({
				"id": "" + _this.valueForToken("page_id")
			});
			window.waitForZanoxDiv = function() {
				if (document.querySelector(".zx_" + _this.valueForToken("page_id") +
					".zx_mediaslot")) {
					(function(d) {
						var s = d.createElement("script");
						s.async = true;
						s.src = (d.location.protocol == "https:" ? "https:" : "http:") +
							"//static.zanox.com/scripts/zanox.js";
						var a = d.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(s, a);
					}(document));
				} else {
					setTimeout(waitForZanoxDiv, 100);
				}
			};
			waitForZanoxDiv();
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
