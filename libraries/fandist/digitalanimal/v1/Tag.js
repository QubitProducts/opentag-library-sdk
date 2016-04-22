//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("fandist.digitalanimal.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "Digital Animal",
      async: true,
      description: "This will enable fandi.st to show you what impact your Campaigns are having on your site.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name: "Fandi.st Client ID",
        description: "The ID relating the script to you",
        token: "client_id",
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
		var uv = window.universal_variable || {};
		var src = "//a.fandi.st/pixel.gif?acc=" + this.valueForToken("client_id") +
			"&camp=1&d=" + window.encodeURIComponent(JSON.stringify(uv));
		var fandImage = new Image();
		fandImage.src = src;
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
