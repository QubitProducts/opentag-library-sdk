//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("googleuniversalanalytics.ecgeneric.v1.Tag", {
	config: {
		/*DATA*/
		name: "Enhanced Ecommerce - Pageview - Generic",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
			{
				name: "Property ID",
				token: "property_id",
				description: "Universal Analytics Property ID",
				defaultValue: []
			},
			{
				name: "Create Configuration",
				token: "create_conf",
				description: "JavaScript configuration object for create command",
				defaultValue: {}
			},
			{
				name: "Additional Commands",
				token: "additional_commands",
				description: "Array of additional commands to be executed",
				defaultValue: []
			},
			{
				name: "Pageview Configuration",
				token: "pageview_conf",
				description: "JavaScript configuration object for pageview command",
				defaultValue: {}
			}
		]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
		(function(i, s, o, g, r, a, m) {
			i["GoogleAnalyticsObject"] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, "script", "//www.google-analytics.com/analytics.js","ga");

		ga("create", this.valueForToken("property_id"), this.valueForToken("create_conf"));

		var commands = this.valueForToken("additional_commands");
		for (var i = 0; i < commands.length; i++) {
			ga.apply(ga, commands[i]);
		}

		ga("send", "pageview", this.valueForToken("pageview_conf"));
	/*~SCRIPT*/
	},
	pre: function() {
	/*PRE*/
	/*~PRE*/
	},
	post: function() {
	/*POST*/
	/*~POST*/
	}
});
