//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("outbrain.widgets.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "widgets",
      async: true,
      description: "Outbrain : get your content featured on the world's top media sites. The widget script displays the recommendend content on your website.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "//widgets.outbrain.com/outbrain.js",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [

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
	/*~pre*/
	},
	post: function() {
	/*post*/
	/*~post*/
	}
});
