//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("responsetap.responsetapclicktocall.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Response Tap Click to Call",
		async: true,
		description: "Response Tap click to call script that replaces the phone number on your page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account Id",
			description: "Your Response Tap account id, generally a 3-4 digit number",
			token: "ACCOUNT_ID",
			uv: ""
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.adiInit = "" + this.valueForToken("ACCOUNT_ID");
		window.adiRVO = true;
		window.adiFunc = null;
		var adiSrc = document.createElement("script");
		adiSrc.type = "text/javascript";
		adiSrc.async = true;
		adiSrc.src = ("https:" == document.location.protocol ?
			"https://static-ssl" : "http://static-cdn") +
			".responsetap.com/static/scripts/rTapTrack.min.js";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(adiSrc, s);
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
