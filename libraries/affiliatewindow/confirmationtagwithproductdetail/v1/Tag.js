//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"affiliatewindow.confirmationtagwithproductdetail.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Confirmation Tag with Product Detail",
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
				description: "Affiliate Window Merchant ID",
				token: "merchant_id",
				uv: ""
			}, {
				name: "Affiliate Window Test Mode",
				description: "Enter 0 if the code is on production mode; Test mode uses value 1.",
				token: "testmode",
				uv: ""
			}, {
				name: "Affiliate Window Commission Group",
				description: "Enter DEFAULT if there is no commission group is defined.",
				token: "commission_group",
				uv: ""
			}, {
				name: "Order Total",
				description: "The total cost of the order",
				token: "orderTotal",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order Id",
				description: "A unique id for the order",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Voucher",
				description: "The voucher by which the order was discounted",
				token: "voucher",
				uv: "universal_variable.transaction.voucher"
			}, {
				name: "Order Currency",
				description: "The currency the order was paid with",
				token: "orderCurrency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Product Ids",
				description: "The id of each product purchased",
				token: "productId",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product Name",
				description: "The name of each product purchased",
				token: "productName",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Product Unit Price",
				description: "The price of each product purchased",
				token: "productUnitPrice",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Product Quantities",
				description: "The quantity of each product purchased",
				token: "quantity",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Product SKUs",
				description: "The SKUs for each product in the order",
				token: "productSku",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Categories",
				description: "The category for each product purchased",
				token: "productCategory",
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
				"" + this.valueForToken("orderTotal"),
				"&ref=", "" + this.valueForToken("orderId"),
				"&parts=" + this.valueForToken("commission_group") + ":",
				"" + this.valueForToken("orderTotal"),
				"&vc=", "" + this.valueForToken("voucher"),
				"&testmode=" + this.valueForToken("testmode") + "&cr=",
				"" + this.valueForToken("orderCurrency")
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
						parts: this.valueForToken("commission_group") + ":" +
							this.valueForToken("orderTotal"),
						voucher: "" + this.valueForToken("voucher"),
						test: "" + this.valueForToken("testmode")
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
