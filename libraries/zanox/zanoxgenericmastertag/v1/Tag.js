//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("zanox.zanoxgenericmastertag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "zanox Generic MasterTag",
		async: true,
		description: "The MasterTag for all pages. Different IDs needed for each page type.",
		html: "<div class=\"zx_${zanoxPageId} zx_mediaslot\">\n	\n</div>",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "zanox Page ID",
			description: "Unique ID for the page",
			token: "zanoxPageId",
			uv: ""
		}],
		categories:[
			"Affiliate Networks"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		window._zx = window._zx || [];
		window._zx.push({
			"id": "" + this.valueForToken("zanoxPageId")
		});
		var _this = this;
		window.waitForZanoxDiv = function() {
			if (document.querySelector(".zx_" + _this.valueForToken("zanoxPageId") +
				".zx_mediaslot")) {
				(function(d) {
					var s = d.createElement("script");
					s.async = true;
					s.src = (d.location.protocol == "https:" ? "https:" : "http:") +
						"//static.zanox.com/scripts/zanox.js";
					var a = d.getElementsByTagName("script")[0];
					a.parentNode.insertBefore(s, a);
				}(document));
			} else {
				setTimeout(waitForZanoxDiv, 100);
			}
		};
		waitForZanoxDiv();
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
