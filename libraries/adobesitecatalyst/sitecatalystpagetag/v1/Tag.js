//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("adobesitecatalyst.sitecatalystpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "SiteCatalyst Page Tag",
		async: true,
		description: "Tag to be added to any non-conversion page. Any unused variables should be left blank.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${scriptURL}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Omniture S Code URL",
			description: "The custom s_code.js provided to you should be hosted on your server e.g. abc.com/scripts/s_code.js",
			token: "scriptURL",
			uv: ""
		}, {
			name: "Page Name",
			description: "",
			token: "page_name",
			uv: "universal_variable.page.subcategory"
		}, {
			name: "Omniture Server Address",
			description: "Server used for Omniture analytics",
			token: "server",
			uv: ""
		}, {
			name: "Page Type",
			description: "",
			token: "page_type",
			uv: "universal_variable.page.category"
		}, {
			name: "Omniture Events",
			description: "",
			token: "events",
			uv: ""
		}, {
			name: "Prop 1",
			description: "",
			token: "prop1",
			uv: ""
		}, {
			name: "Prop 2",
			description: "",
			token: "prop2",
			uv: ""
		}, {
			name: "Prop 3",
			description: "",
			token: "prop3",
			uv: ""
		}, {
			name: "Prop 4",
			description: "",
			token: "prop4",
			uv: ""
		}, {
			name: "Prop 5",
			description: "",
			token: "prop5",
			uv: ""
		}, {
			name: "Omniture Channel",
			description: "",
			token: "channel",
			uv: "universal_variable.page.category"
		}, {
			name: "eVar 1",
			description: "",
			token: "evar1",
			uv: ""
		}, {
			name: "eVar 2",
			description: "",
			token: "evar2",
			uv: ""
		}, {
			name: "eVar 3",
			description: "",
			token: "evar3",
			uv: ""
		}, {
			name: "eVar 4",
			description: "",
			token: "evar4",
			uv: ""
		}, {
			name: "eVar 5",
			description: "",
			token: "evar5",
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
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		var s = window.s;

		s.pageName = "" + this.valueForToken("page_name");
		s.server = "" + this.valueForToken("server");
		s.channel = "" + this.valueForToken("channel");
		s.pageType = "" + this.valueForToken("page_type");
		s.prop1 = "" + this.valueForToken("prop1");
		s.prop2 = "" + this.valueForToken("prop2");
		s.prop3 = "" + this.valueForToken("prop3");
		s.prop4 = "" + this.valueForToken("prop4");
		s.prop5 = "" + this.valueForToken("prop5");

		s.events = "" + this.valueForToken("events");
		s.eVar1 = "" + this.valueForToken("evar1");
		s.eVar2 = "" + this.valueForToken("evar2");
		s.eVar3 = "" + this.valueForToken("evar3");
		s.eVar4 = "" + this.valueForToken("evar4");
		s.eVar5 = "" + this.valueForToken("evar5");

		window.s_code = s.t();
		/*~post*/
	}
});
