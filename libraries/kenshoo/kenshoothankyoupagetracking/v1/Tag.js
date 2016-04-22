//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("kenshoo.kenshoothankyoupagetracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Kenshoo Thank-You Page Tracking",
		async: true,
		description: "Kenshoo conversion tracking is an open, flexible system for collecting and utilizing information on conversions. You can track conversions through tracking pixels on the target website, transaction reports, or Kenshoo's Seamless Site Tracking option.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${ks_num}.xg4ken.com/media/getpx.php?cid=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Kenshoo Number",
			description: "The server number provided by Kenshoo. e.g. enter 110 if the submain provided is 110.xg4gen.com/...",
			token: "ks_num",
			uv: ""
		}, {
			name: "Profile ID",
			description: "ID of the profile the pixel belongs to, e.g. 22d2a77f-fbdd-41a8-84eb-c781c51d8464",
			token: "id",
			uv: ""
		}, {
			name: "Conversion Type",
			description: "The conversion type relevant to or applicable to the purchase on your website. Use conv as default.",
			token: "type",
			uv: ""
		}, {
			name: "Order Total",
			description: "The revenue from the conversion, which is the value of the conversion or purchase, without the currency. A value of 0 indicates either that there was no conversion or the revenue is not known.",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Promotion Code",
			description: "",
			token: "voucher",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}],
		categories:[
			"Search Engine"
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		var params = new Array();
		params[0] = 'id=' + this.valueForToken("id");
		params[1] = 'type=' + this.valueForToken("type");
		params[2] = 'val=' + this.valueForToken("order_total");
		params[3] = 'orderId=' + this.valueForToken("order_id");
		params[4] = 'promoCode=' + this.valueForToken("voucher");
		params[5] = 'valueCurrency=' + this.valueForToken("currency");
		window.k_trackevent(params, '' + this.valueForToken("ks_num"));
		/*~post*/
	}
});
