//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"affiliatewindow.confirmationtagwithproductdetailchannel.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Confirmation Tag with Product Detail & Channel",
			async: true,
			description: "Confirmation page script for pages that send product information with the same commission group for each product.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.dwin1.com/${merchant_id}.js",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Affiliate Window Merchant ID",
				description: "",
				token: "merchant_id",
				uv: ""
			}, {
				name: "Affiliate Window Test Mode",
				description: "",
				token: "testmode",
				uv: ""
			}, {
				name: "Affiliate Window Commission Group",
				description: "",
				token: "commission_group",
				uv: ""
			}, {
				name: "Order Total",
				description: "",
				token: "orderTotal",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order ID",
				description: "",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Voucher",
				description: "",
				token: "voucher",
				uv: "universal_variable.transaction.voucher"
			}, {
				name: "Order Currency",
				description: "",
				token: "orderCurrency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Product Ids",
				description: "",
				token: "productId",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product Name",
				description: "",
				token: "productName",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Product Unit Price",
				description: "",
				token: "productUnitPrice",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Product Quantities",
				description: "",
				token: "quantity",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Product SKUs",
				description: "",
				token: "productSku",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Categories",
				description: "",
				token: "productCategory",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Traffic Channel",
				description: "The traffic source - should be aw if AWIN referrer",
				token: "channel",
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
			/*~script*/
		},
		pre: function() {
			/*pre*/
			var awinImgSrc = [
				"https://www.awin1.com/sread.img?tt=ns&tv=2",
				"&merchant=" + this.valueForToken("merchant_id"),
				"&amount=" + this.valueForToken("orderTotal"),
				"&ref=" + this.valueForToken("orderId"),
				"&parts=" + this.valueForToken("commission_group") + ":" +
				this.valueForToken("orderTotal"),
				"&vc=" + this.valueForToken("voucher"),
				"&testmode=" + this.valueForToken("testmode"),
				"&cr=" + this.valueForToken("orderCurrency"),
				"&ch=" + this.valueForToken("channel")
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
			for (var i = 0; i < this.valueForToken("productId").length; i++) {
				textareaText.push([
					"AW:P|" + this.valueForToken("merchant_id") + "|",
					"" + this.valueForToken("orderId"), "|",
					this.valueForToken("productId")[i], "|",
					this.valueForToken("productName")[i], "|",
					this.valueForToken("productUnitPrice")[i], "|",
					this.valueForToken("quantity")[i], "|",
					this.valueForToken("productSku")[i], "|",
					this.valueForToken("commission_group") + "|",
					this.valueForToken("productCategory")[i], "|"
				].join(""));
			}
			textarea.innerHTML = textareaText.join("\n");

			form.appendChild(textarea);
			document.body.appendChild(form);

			window.AWIN = {
				Tracking: {
					Sale: {
						amount: this.valueForToken("orderTotal"),
						currency: "" + this.valueForToken("orderCurrency"),
						orderRef: "" + this.valueForToken("orderId"),
						parts: "" + this.valueForToken("commission_group") + ":" + 
								this.valueForToken("orderTotal"),
						voucher: "" + this.valueForToken("voucher"),
						test: "" + this.valueForToken("testmode"),
						channel: "" + this.valueForToken("channel")
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
