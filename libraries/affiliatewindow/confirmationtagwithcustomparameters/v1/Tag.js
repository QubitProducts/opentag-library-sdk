//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"affiliatewindow.confirmationtagwithcustomparameters.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Confirmation Tag with Custom Parameters",
			async: true,
			description: "Use this if you have different commission groups per product.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.dwin1.com/${merchant_id}.js",
			usesDocWrite: false,
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
				name: "Order Sub Total",
				description: "The total cost of the order",
				token: "orderTotal",
				uv: "universal_variable.transaction.subtotal"
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
			}, {
				name: "Product Commission Groups",
				description: "The commission group for every product purchased",
				token: "commission_groups",
				uv: ""
			}, {
				name: "AWIN Custom Parameter 1",
				description: "",
				token: "custom_parameter1",
				uv: ""
			}, {
				name: "AWIN Custom Parameter 2",
				description: "",
				token: "custom_parameter2",
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
			var i, cg, cg_groups = {}, parts;
			for (i = 0; i < this.valueForToken("productId").length; i++) {
				cg = this.valueForToken("commission_groups")[i];
				if (cg !== "IGNORE_ITEM") {
					if (!cg_groups[cg]) {
						cg_groups[cg] = 0;
					}
					cg_groups[cg] += parseFloat(this.valueForToken("productUnitPrice")[i]) *
						parseInt(this.valueForToken("quantity")[i]);
				}
			}
			parts = [];
			for (i in cg_groups) {
				if (cg_groups.hasOwnProperty(i)) {
					parts.push(i + ":" + cg_groups[i].toFixed(2));
				}
			}
			parts = parts.join("|");
			var awinImgSrc = [
				"https://www.awin1.com/sread.img?tt=ns&tv=2&merchant=" + 
						this.valueForToken("merchant_id"),
				"&amount=" + this.valueForToken("orderTotal"),
				"&ref=" + this.valueForToken("orderId"),
				"&parts=", parts,
				"&vc=" + this.valueForToken("voucher"),
				"&testmode=" + this.valueForToken("testmode"),
				"&cr=" + this.valueForToken("orderCurrency"),
				"&p1=" + this.valueForToken("custom_parameter1"),
				"&p2=" + this.valueForToken("custom_parameter2")
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
			for (i = 0; i < this.valueForToken("productId").length; i++) {
				if (this.valueForToken("commission_groups")[i] !== "IGNORE_ITEM") {
					textareaText.push([
						"AW:P|" + this.valueForToken("merchant_id") + "|",
						"" + this.valueForToken("orderId"), "|",
						this.valueForToken("productId")[i], "|",
						this.valueForToken("productName")[i], "|",
						this.valueForToken("productUnitPrice")[i], "|",
						this.valueForToken("quantity")[i], "|",
						this.valueForToken("productSku")[i], "|",
						this.valueForToken("commission_groups")[i], "|",
						this.valueForToken("productCategory")[i]
					].join(""));
				}
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
						parts: parts,
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
