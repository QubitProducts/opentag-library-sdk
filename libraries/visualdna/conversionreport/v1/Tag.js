//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("visualdna.conversionreport.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Conversion Report",
		async: true,
		description: "This tag should fire on the user converting to a designated goal identified by a Conversion ID.\nThe tag must have a dependency on the Visual DNA Page View Report tag.\nThe \"Extra Data\" parameter should be assigned a string. The format/value of the string should be agreed with VisualDNA in advance on a partner­ by ­partner, conversion­ by ­conversion basis.\nIf no extra data is available, then an empty string should be assigned to that parameter",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}, {
			name: "Extra Data",
			description: "Please read tag description for more details",
			token: "extra_data",
			uv: ""
		}, {
			name: "Conversion ID",
			description: "An ID identifying the designated Conversion Goal",
			token: "conversion_id",
			uv: ""
		}],
		categories:[
			"Web Analytics"
		]

		/*~config*/
      };
  },
	script: function() {
		/*script*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];

		var args = ["" +  ("conversion_id")];

		var extraData = "" + this.valueForToken("extra_data");
		if (extraData.length) {
			args.push(extraData);
		}

		window.VDNA.queue.push({
			apiKey: "" + this.valueForToken("api_key"),
			method: "reportConversion",
			args: args
		});
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
