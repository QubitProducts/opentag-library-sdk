//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("outbrain.visualrevenue.v1.Tag", {
	config: {
		/*DATA*/
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
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
	/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		var _vrq = _vrq || [];
		_vrq.push(['id', this.valueForToken("visualrevenue_id")]);
		_vrq.push(['automate', true]);
		_vrq.push(['track', function(){}]);
		/*~PRE*/
	},
	post: function() {
	/*POST*/
	/*~POST*/
	}
});
