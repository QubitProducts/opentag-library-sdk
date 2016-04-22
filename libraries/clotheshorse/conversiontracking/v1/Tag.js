//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("clotheshorse.conversiontracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Tracking",
		async: true,
		description: "Single Javascript tag for conversion tracking",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Clothes Horse Client Token",
			description: "The token specific to the client using the tag",
			token: "client_token",
			uv: ""
		}],
		categories:[
			"Merchandising & Rich Media"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.ch212 = window.ch212 || [];
		ch212['token'] = '' + this.valueForToken("client_token");
		ch212['ts'] = new Date().getTime();

		var ch = document.createElement('script');
		ch.type = 'text/javascript';
		ch.async = true;
		ch.src = '//script.clotheshor.se/widget/conversion?token=' +
			ch212['token'] + '&ts=' + ch212['ts'];
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ch, s);
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
