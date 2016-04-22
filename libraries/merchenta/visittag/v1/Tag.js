//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("merchenta.visittag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Visit Tag",
		async: true,
		description: "Use this tag to track visits to your home page or landing pages.",
		html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">VISIT</div>\n  <div class=\"mc_retailer\">${Merchenta_Id}</div>\n</div>\n\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Merchenta Retailer Code",
			description: "Your Merchenta account ID",
			token: "Merchenta_Id",
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
		window.mc_api_url = "api.merchenta.com/merchenta/t";
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		var secure = (window.parent.document.location.protocol == "https:");
		if (secure) {
			script.src = "https://api.merchenta.com/track/t.js";
		} else {
			script.src = "http://cdn.merchenta.com/track/t.js";
		}
		document.getElementsByTagName('head')[0].appendChild(script);
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
