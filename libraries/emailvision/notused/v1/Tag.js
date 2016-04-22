//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("emailvision.notused.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Not Used",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Email Service Provider (ESP)"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/

		function setCookie(domain, label, val, minutes) {
			var txpDate = new Date();
			txpDate.setTime(txpDate.getTime() + (minutes * 60 * 1000));
			document.cookie = label + "=" + escape(val) + ";domain=" + domain +
				";path =/" + (!minutes ? "" : ";expires=" + txpDate.toGMTString());
		}

		setCookie(".office.co.uk",
			"opentag_emailvision_timestamp", (new Date()).getTime(),
			60 * 24 * 2);

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
