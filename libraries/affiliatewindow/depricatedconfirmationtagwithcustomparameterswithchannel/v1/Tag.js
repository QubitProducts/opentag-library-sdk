//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"affiliatewindow.depricatedconfirmationtagwithcustomparameterswithchannel.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "[depricated]Confirmation Tag with Custom Parameters (with channel)",
			async: true,
			description: "Use this if you have different commission groups per product.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.dwin1.com/${merchant_id}.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [

			],
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
