//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("quantcast.quantcastwitheventtracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "QuantCast - with event tracking",
		async: true,
		description: "Track custom events with QuantCast.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "QuantCast Account Number",
			description: "Your quantcast account number",
			token: "account_no",
			uv: ""
		}, {
			name: "QuantCast Custom Page",
			description: "The label for the custom page - e.g. \"Home\", \"Bracelets\"",
			token: "custom_page",
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
		window._qevents = window._qevents || [];

		var e = document.createElement("script");
		e.src = (document.location.protocol === "https:" ? "https://secure" :
			"http://edge") + ".quantserve.com/quant.js";
		e.async = true;
		document.getElementsByTagName("head")[0].appendChild(e);
		_qevents.push({
			qacct: "" + this.valueForToken("account_no"),
			labels: "_fp.event." + this.valueForToken("custom_page")
		});
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
