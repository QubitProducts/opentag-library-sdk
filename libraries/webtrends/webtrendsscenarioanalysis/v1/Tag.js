//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("webtrends.webtrendsscenarioanalysis.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Webtrends - Scenario analysis",
		async: true,
		description: "Analyse paths through your website to measure conversion or abandonment. Depends on the main Webtrends pageview tag.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Scenario Analysis name",
			description: "Identifies the name of the Scenario Analysis. The maximum length for each Name is 64 bytes.",
			token: "name",
			uv: ""
		}, {
			name: "Step Name",
			description: "Identifies the step by name.",
			token: "step_name",
			uv: ""
		}, {
			name: "Step Position",
			description: "Identifies the step by numeric position. Must be an integer",
			token: "step_position",
			uv: ""
		}, {
			name: "Is conversion step?",
			description: "If the value is 1, the page is identified as a conversion page. Set as 0 otherwise.",
			token: "step_where_conversion_occurs",
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
		var _this = this;
		window.dcsMultiTrack({
			"WT.si_n": "" + _this.valueForToken("name"),
			"WT.si_p": "" + _this.valueForToken("step_name"),
			"WT.si_x": _this.valueForToken("step_position"),
			"WT.si_cs": _this.valueForToken("step_where_conversion_occurs")
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
