//:import CurrentSDK

qubit.opentag.LibraryTag.define("commissionjunction.cjconversionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "CJ Affiliate Simple Conversion Tag",
		async: true,
		description: "The purpose of this tag is to track transaction or lead information in order for commission to be paid out to the referring publisher.  For advertiser programs that offer a single product or service or do not process online orders through a standardized shopping cart, a simple integration is usually the preferred option.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Commission Junction Enterprise ID",
			description: "View the Enterprise ID in your CJ Account Manager>Account>Tracking Settings area",
			token: "cid",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "CJ Event ID",
			description: "",
			token: "cjevent",
			uv: "universal_variable.transaction.cjevent"
		}, {
			name: "Currency",
			description: "Currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Action ID",
			description: "Action ID",
			token: "actionid",
			uv: ""
		}, {
			name: "Container Tag ID",
			description: "Container Tag ID",
			token: "containerid",
			uv: ""
		}, {
			name: "Amount",
			description: "Order Subtotal",
			token: "amount",
			uv: "universal_variable.transaction.amount"
		}],
		categories:[
			"Affiliate Networks"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var url = "https://www.emjcd.com/tags/c?containerTagId=" + this.valueForToken(
			"containerid") + "&";
		url = url + "CID=" + 
			this.valueForToken("cid") + "&OID=" + 
			this.valueForToken("order_id") + "&TYPE=" + 
			this.valueForToken("actionid") + "&CURRENCY=" +
			this.valueForToken("cjevent") + "CJEVENT=" +
			this.valueForToken("amount") + "AMOUNT=" +
			this.valueForToken("currency");
	
		var iframe = document.createElement("iframe");
		iframe.height = 1;
		iframe.width = 1;
		iframe.frameBorder = 0;
		iframe.scrolling = 0;
		iframe.src = url;
		document.body.appendChild(iframe);
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
