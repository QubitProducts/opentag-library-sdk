//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("monetate.monetate.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Monetate",
		async: true,
		description: "Generic Monetate tag to be added on all pages.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Montetate ID",
			description: "Your unique id, e.g. a-64624593",
			token: "id",
			uv: ""
		}, {
			name: "Monetate Domain",
			description: "e.g. qubitproducts.com",
			token: "domain",
			uv: ""
		}],
		categories:[
			"AB & Multi-Variate Testing"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.monetateT = new Date().getTime();
		var p = document.location.protocol;
		if (p == "http:" || p == "https:") {
			var m = document.createElement('script');
			m.type = 'text/javascript';
			m.async = true;
			m.src = (p == "https:" ? "https://s" : "http://") +
				"b.monetate.net/js/1/" + this.valueForToken("id") + "/p/" + this.valueForToken(
					"domain") + "/" + Math.floor((monetateT + 2961942) / 3600000) + "/g";
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(m, s);
		}
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
