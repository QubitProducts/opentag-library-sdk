//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("outbrain.visualrevenue.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "visualrevenue",
      async: true,
      description: "Visual Revenue (Outbrain) permit to get in real time the most visited articles, and optimize the audience performances.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "http://a.visualrevenue.com/vrs.js",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name:"Visual Revenue id",
        description:"Visual Revenue id",
        token:"visualrevenue_id",
        uv:"universal_variable.outbrain.visualrevenue_id"
      }]
      /*~config*/
    };
	},
	script: function() {
	/*script*/
	/*~script*/
	},
	pre: function() {
		/*pre*/
		var _vrq = _vrq || [];
		_vrq.push(['id', this.valueForToken("visualrevenue_id")]);
		_vrq.push(['automate', true]);
		_vrq.push(['track', function(){}]);
		/*~pre*/
	},
	post: function() {
	/*post*/
	/*~post*/
	}
});
