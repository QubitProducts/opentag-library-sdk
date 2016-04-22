//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("weborama.weboramawreport.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Weborama - WReport",
		async: true,
		description: "This tag is typically placed on all pages of a site and is used for web analytics.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${SOURCE_URL}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "WRP_ID",
			description: "Site Id",
			token: "WRP_ID",
			uv: ""
		}, {
			name: "WRP_SECTION",
			description: "Site Section",
			token: "SECTION",
			uv: ""
		}, {
			name: "WRP_SUBSECTION",
			description: "Site subsection",
			token: "SUBSECTION",
			uv: ""
		}, {
			name: "Source URL",
			description: "Please put the full URL of the script here www.domain.com/path/to/script.js without http or https://",
			token: "SOURCE_URL",
			uv: ""
		}],
		categories:[
			"Advertising Network"
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
		window.WRP_ID = this.valueForToken("WRP_ID");
		window.WRP_SECTION = '' + this.valueForToken("SECTION");
		window.WRP_SUBSECTION = '' + this.valueForToken("SUBSECTION");
		window.wreport_ok = 0;
		/* Profondeur Frame */
		window.WRP_ACC;
		/*~pre*/
	},
	post: function() {
		/*post*/
		if (wreport_ok == 1) {
			window.w_counter = new wreport_counter(WRP_SECTION, WRP_SUBSECTION, WRP_ID,
				WRP_ACC);
			w_counter.count();
		}
		/*~post*/
	}
});
