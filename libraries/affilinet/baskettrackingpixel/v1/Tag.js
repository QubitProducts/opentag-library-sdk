//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("affilinet.baskettrackingpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Basket Tracking Pixel",
		async: true,
		description: "The affilinet basket tracking system allows you to submit shopping basket information on item level to affilinet. \nThat information enables you to perform detailed statistical analyses and allows your publishers to optimise their \nmarketing activities even further. If you would like to make use of this tracking functionality, please call your \naccount manager to activate basket tracking and change the registersale call on your order confirmation page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Affilinet Tracking Domain",
			description: "Domain of the affilinet country you are working with, e.g.	partners.webmasterplan.com",
			token: "affilinet_tracking_domain",
			uv: ""
		}, {
			name: "Site",
			description: "Your program ID",
			token: "program_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Basket Items SKUs",
			description: "",
			token: "basket_items_skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Basket Items Names",
			description: "",
			token: "basket_items_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Basket Items Categories",
			description: "",
			token: "basket_items_categories",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Basket Items Quantities",
			description: "",
			token: "basket_items_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Basket Items Prices",
			description: "",
			token: "basket_items_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}],
		categories:[
			"Affiliate Networks"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var iFrame = document.createElement('iframe');
		iFrame.style.display = 'none';
		iFrame.style.width = "1px";
		iFrame.style.height = "1px";
		iFrame.id = "affilinet-tracking-form-iframe";
		document.body.appendChild(iFrame);

		var iFrameDom = iFrame.contentDocument || iFrame.contentWindow.document;

		var form = iFrameDom.createElement('form');
		form.name = "affilinetTrackingForm";
		form.method = "post";
		form.action = document.location.protocol + "//" +
			this.valueForToken("affilinet_tracking_domain") + "/registersale.asp";
		form.id = "affilinetTrackingForm";
		iFrameDom.body.appendChild(form);

		var input = iFrameDom.createElement('input');
		input.type = "hidden";
		input.id = "site";
		input.name = "site";
		input.value = "" + this.valueForToken("program_id");
		iFrameDom.getElementById("affilinetTrackingForm").appendChild(input);

		var input = iFrameDom.createElement('input');
		input.type = "hidden";
		input.id = "order";
		input.name = "order";
		input.value = "" + this.valueForToken("order_id");
		iFrameDom.getElementById("affilinetTrackingForm").appendChild(input);

		var textarea = iFrameDom.createElement('textarea');
		textarea.type = "text";
		textarea.id = "basket";
		textarea.name = "basket";
		iFrameDom.getElementById("affilinetTrackingForm").appendChild(textarea);

		var basketItemsData = "";

		for (var i = 0; i < this.valueForToken("basket_items_skus").length; i++) {
			if (i > 0) {
				basketItemsData += "&";
			}

			basketItemsData += "articlenb=" +
				escape(this.valueForToken("basket_items_skus")[i]) +
				"&productname=" +
				escape(this.valueForToken("basket_items_names")[i]) +
				"&category=" +
				escape(this.valueForToken("basket_items_categories")[i]) +
				"&quantity=" +
				escape(this.valueForToken("basket_items_quantities")[i]) +
				"&singleprice=" +
				escape(this.valueForToken("basket_items_prices")[i]) +
				"&brand=";
		}

		iFrameDom.getElementById("basket").innerHTML = basketItemsData;
		iFrameDom.getElementById('affilinetTrackingForm').submit();
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
