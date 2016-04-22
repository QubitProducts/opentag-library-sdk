//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"emailvision.emailvisionconfirmationpagewithcustomserver.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Emailvision - Confirmation page with custom server",
			async: true,
			description: "The Emailvision tag to be used on confirmation pages, with the option to fully specify a custom server.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Emailvision Client ID",
				description: "",
				token: "client_id",
				uv: ""
			}, {
				name: "Order Total",
				description: "",
				token: "order_total",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Currency",
				description: "",
				token: "order_currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Emailvision Conversion Flag",
				description: "",
				token: "conversion_flag",
				uv: ""
			}, {
				name: "Emailvision Page Name",
				description: "",
				token: "emailvision_page_name",
				uv: ""
			}, {
				name: "Emailvision Server",
				description: "The server to send data to",
				token: "server_name",
				uv: ""
			}],
		categories:[
			"Email Service Provider (ESP)"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			var src = "//" + this.valueForToken("server_name") + "/P?";
			src += "emv_client_id=" + this.valueForToken("client_id");
			src += "&emv_value=" + this.valueForToken("order_total");
			src += "&emv_transid=" + this.valueForToken("order_id");
			src += "&emv_currency=" + this.valueForToken("order_currency");
			src += "&emv_conversionflag=" + this.valueForToken("conversion_flag");
			src += "&emv_pagename=" + this.valueForToken("emailvision_page_name");
			var date = new Date();
			src += "&emv_date1=" + date.getDate() + "-" + (date.getMonth() + 1) + "-" +
				date.getFullYear();
			src += "&emv_random=" + Math.floor(Math.random() * 900 + 100);
			var pixel = document.createElement("img");
			pixel.setAttribute("src", src);
			pixel.setAttribute("border", "0");
			pixel.setAttribute("alt", "");
			pixel.setAttribute("width", "1");
			pixel.setAttribute("height", "1");
			document.body.appendChild(pixel);
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
