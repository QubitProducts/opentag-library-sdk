//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("uservoice.uservoicechat.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "User Voice Chat",
		async: true,
		description: "UserVoice creates simple online feedback, help desk and knowledge base software. Our insight and support platforms enable businesses to understand and engage with customers with ease.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Unique Id",
			description: "Unique JavaScript File name",
			token: "ID",
			uv: ""
		}],
		categories:[
			"Ratings & Review Engine"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		window.uvOptions = {};
		var ID = this.valueForToken("ID");
    var uv = document.createElement('script');
		uv.type = 'text/javascript';
		uv.async = true;
    uv.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
				"widget.uservoice.com/" + ID +".js";
    var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(uv, s);
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
