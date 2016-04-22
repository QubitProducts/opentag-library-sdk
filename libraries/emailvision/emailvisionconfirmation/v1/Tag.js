//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("emailvision.emailvisionconfirmation.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Emailvision - Confirmation",
		async: true,
		description: "The Emailvision tag to be used on confirmation pages.",
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
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Emailvision Conversion Flag",
			description: "",
			token: "conv_tag",
			uv: ""
		}, {
			name: "Emailvision Page Name",
			description: "",
			token: "page_name",
			uv: ""
		}, {
			name: "PCT Server",
			description: "The PCT server on Emailvision to send pings to",
			token: "pct_server",
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
		var src = "//" + this.valueForToken("pct_server") +
			".emv2.com/P?emv_client_id=" + this.valueForToken("client_id") +
			"&emv_value=";
		src += this.valueForToken("order_total");
		src += "&emv_transid=" + this.valueForToken("order_id");
		src += "&emv_currency=" + this.valueForToken("currency");
		src += "&emv_conversionflag=" + this.valueForToken("conv_tag");
		src += "&emv_pagename=" + this.valueForToken("page_name");
		var date = new Date();
		src += "&emv_date=" + date.getDate() + "-" + (date.getMonth() + 1) + "-" +
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
