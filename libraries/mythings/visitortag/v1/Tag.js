//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mythings.visitortag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Visitor Tag",
		async: true,
		description: "This tag should be placed on ALL pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${subdomain}.mythings.com/c.aspx?atok=${token}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "myThings Advertiser Token",
			description: "Value of mtAdvertiserToken",
			token: "token",
			uv: ""
		}, {
			name: "myThings Subdomain",
			description: "subdomian provided for tracking",
			token: "subdomain",
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
		window._mt_ready = function() {
			if (typeof(MyThings) !== "undefined") {
				MyThings.Track({
					EventType: MyThings.Event.Visit,
					Action: "300"
				});
			}
		};

		window.mtHost = (("https:" == document.location.protocol) ? "https://" +
			this.valueForToken("subdomain") : "http://" +
			this.valueForToken("subdomain")) + ".mythings.com";
		window.mtAdvertiserToken = "" + this.valueForToken("token");
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
