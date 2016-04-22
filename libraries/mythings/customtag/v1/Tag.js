//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mythings.customtag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Custom  Tag",
		async: true,
		description: "This is a custom myThings tracking tag in which the action number can be specified.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "https://${subdomain}.mythings.com/c.aspx?atok=${advertiser_token}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "myThings Advertiser Token",
			description: "Token provided by myThings",
			token: "advertiser_token",
			uv: ""
		}, {
			name: "myThings Subdomain",
			description: "Subdomain specified by myThings, if unsure use \"rainbow-uk\"",
			token: "subdomain",
			uv: ""
		}, {
			name: "myThings Action Number",
			description: "The action number specified for the specific tag",
			token: "action_number",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
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
		var _this = this;
		window._mt_ready = function () {
			if (typeof(MyThings) != "undefined") {
				MyThings.Track({
					EventType: MyThings.Event.Visit,
					Action: "" + _this.valueForToken("action_number")
				});
			}
		}

		window.mtHost = (("https:" == document.location.protocol) ? "https" : "http") +
			"://" + this.valueForToken("subdomain") + ".mythings.com";
		window.mtAdvertiserToken = "" + this.valueForToken("advertiser_token");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
