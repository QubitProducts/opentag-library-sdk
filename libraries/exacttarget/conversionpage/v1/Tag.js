//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("exacttarget.conversionpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Page",
		async: true,
		description: "This tag must only fire if the Landing Page tag has previously fired and the relevant cookies have been set (see Landing Page tag). Once the Landing Page tag has fired on the Exact Target Landing page and stored the appropriate subscriber information in the relevant cookies, this tag should then fire on your chosen conversion page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Unique Conversion Page ID",
			description: "e.g. for a standard Confirmation page it would be the Order ID",
			token: "unique_conversion_page_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Conversion Display Order",
			description: "Number that represents the order in which the conversions page will be displayed in the ExactTarget",
			token: "conversion_display_order",
			uv: ""
		}, {
			name: "Conversion Page Name",
			description: "e.g. Registration or Email Sign Up or Standard Confirmation etc.",
			token: "conversion_page_name",
			uv: ""
		}, {
			name: "Conversion Value",
			description: "e.g. on a standard Confirmation page that would be the order subtotal",
			token: "conversion_value",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Measurement Unit",
			description: "The Unit used to measure the conversion value, e.g. GBP or Downloads or SignUps etc.",
			token: "measurement_unit",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Accumulate",
			description: "Boolean (true or false) : whether the conversion values should be accumulated.",
			token: "accumulate",
			uv: ""
		}],
		categories:[
			"Audience Management"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		function getCookie(cookiename) {
			if (document.cookie.length > 0) {
				startC = document.cookie.indexOf(cookiename + "=");
				if (startC != -1) {
					startC += cookiename.length + 1;
					endC = document.cookie.indexOf(";", startC);
					if (endC == -1) endC = document.cookie.length;
					return unescape(document.cookie.substring(startC, endC));
				}
			}
			return null;
		}

		var imgSrc = document.location.protocol +
			"//click.exacttarget.com/conversion.aspx?xml=";
		imgSrc += "<system>";
		imgSrc += "<system_name>tracking</system_name>";
		imgSrc += "<action>conversion</action>";
		imgSrc += "<member_id>" + getCookie("MemberID") + "</member_id>";
		imgSrc += "<job_id>" + getCookie("JobID") + "</job_id>";
		imgSrc += "<email>" + getCookie("EmailAddr") + "</email>";
		imgSrc += "<list>" + getCookie("ListID") + "</list>";
		imgSrc += "<BatchID>" + getCookie("BatchID") + "</BatchID>";
		imgSrc += "<original_link_id>" + getCookie("UrlID") +
			"</original_link_id>";
		imgSrc += "<conversion_link_id>" +
			this.valueForToken("unique_conversion_page_id") + "</conversion_link_id>";
		imgSrc += "<link_alias>" +
			this.valueForToken("conversion_page_name") +
			"</link_alias>";
		imgSrc += "<display_order>" +
			this.valueForToken("conversion_display_order") + "</display_order>";
		imgSrc += "<data_set><data amt=" +
			this.valueForToken("conversion_value") +
			" unit=" +
			this.valueForToken("measurement_unit") +
			" accumulate=" +
			this.valueForToken("accumulate") + "/></data_set>";
		imgSrc += "</system>";

		new Image().src = imgSrc;
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
