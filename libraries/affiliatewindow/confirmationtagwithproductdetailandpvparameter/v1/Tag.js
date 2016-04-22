//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"affiliatewindow.confirmationtagwithproductdetailandpvparameter.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Confirmation Tag with Product Detail and PV parameter",
			async: true,
			description: "Confirmation page script for pages that send product information with the same commission group for each product. This includes the PV parameter which can be used when AWin is not being affiliated to the sale but still needs to be made aware of it.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.dwin1.com/${merchant_id}.js",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Affiliate Window Merchant ID",
				description: "Affiliate Window Merchant ID",
				token: "merchant_id",
				uv: ""
			}, {
				name: "Affiliate Window Test Mode",
				description: "Enter 0 if code is on production mode; Test mode uses value 1.",
				token: "test_mode",
				uv: ""
			}, {
				name: "Affiliate Window Commission Group",
				description: "Enter DEFAULT if no commission group is defined.",
				token: "commission_group",
				uv: ""
			}, {
				name: "Order Total",
				description: "The total cost of the order",
				token: "order_total",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order Id",
				description: "A unique id for the order",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Voucher",
				description: "The voucher by which the order was discounted",
				token: "voucher",
				uv: ""
			}, {
				name: "Order Currency",
				description: "The currency the order was paid with",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Product Ids",
				description: "The id of each product purchased",
				token: "product_ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product Name",
				description: "The name of each product purchased",
				token: "product_names",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Product Unit Price",
				description: "The price of each product purchased",
				token: "product_prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_price"
			}, {
				name: "Product Quantities",
				description: "The quantity of each product purchased",
				token: "product_quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Product SKUs",
				description: "The SKUs for each product in the order",
				token: "product_skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Categories",
				description: "The category for each product purchased",
				token: "product_categories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}],
		categories:[
			"Affiliate Networks"
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
			var awinImgSrc = [
				"https://www.awin1.com/sread.img?tt=ns&tv=2&merchant=" +
				this.valueForToken("merchant_id") + "&amount=",
				"" + this.valueForToken("order_total"),
				"&ref=", "" + this.valueForToken("order_id"),
				"&parts=" + this.valueForToken("commission_group") + ":",
				"" + this.valueForToken("order_total"),
				"&vc=", "" + this.valueForToken("voucher"),
				"&testmode=" + this.valueForToken("test_mode") + "&cr=",
				"" + this.valueForToken("currency")
			].join("");
			var el = document.createElement("img");
			el.setAttribute("src", awinImgSrc);
			document.body.appendChild(el);

			var form = document.createElement("form");
			form.setAttribute("style", "display:none;");
			form.setAttribute("name", "aw_basket_form");

			var textarea = document.createElement("textarea");
			textarea.setAttribute("wrap", "physical");
			textarea.setAttribute("id", "aw_basket");

			var textareaText = [];
			for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
				textareaText.push([
					"AW:P|" + this.valueForToken("merchant_id") + "|",
					"" + this.valueForToken("order_id"), "|",
					this.valueForToken("product_ids")[i], "|",
					this.valueForToken("product_names")[i], "|",
					this.valueForToken("product_prices")[i], "|",
					this.valueForToken("product_quantities")[i], "|",
					this.valueForToken("product_skus")[i], "|",
					this.valueForToken("commission_group") + "|",
					this.valueForToken("product_categories")[i], "|"
				].join(""));
			}
			textarea.innerHTML = textareaText.join("\n");

			form.appendChild(textarea);
			document.body.appendChild(form);

			window.AWIN = {
				Tracking: {
					Sale: {
						amount: this.valueForToken("order_total"),
						currency: "" + this.valueForToken("currency"),
						orderRef: "" + this.valueForToken("order_id"),
						parts: "" + this.valueForToken("commission_group") + ":" +
								this.valueForToken("order_total"),
						voucher: "" + this.valueForToken("voucher"),
						test: "" + this.valueForToken("test_mode"),
						pvOnly: '1'
					}
				}
			};
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
