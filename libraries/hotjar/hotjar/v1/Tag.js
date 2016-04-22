//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("hotjar.hotjar.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "hotjar",
      async: true,
      description: "Hotjar : all-in-one analytics and feedback. User tracking with heatmaps, record user sessions, create polls and surveys. Find the biggest opportunities for improvement and testing by identifying on which page and at which step most visitors are leaving your site.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name: "hotjar hjid",
        description: "hjid",
        token: "hjid",
        uv: "universal_variable.hotjar.hjid"
      }, {
        name: "hotjar hjsv",
        description: "hjsv",
        token: "hjsv",
        uv: "universal_variable.hotjar.hjsv"
      }]
      /*~config*/
    };
	},
	script: function() {
	/*script*/
		var _this = this;
		(function(f,b){
			var c;
			f.hj = f.hj || function() { ( f.hj.q = f.hj.q || [] ).push(arguments) };
			f._hjSettings = { hjid : _this.valueForToken('hjid'), hjsv:_this.valueForToken('hjsv') };
			c = b.createElement("script");
			c.async = 1;
			c.src = "//static.hotjar.com/c/hotjar-" + _this.valueForToken('hjid') + ".js?sv=" + _this.valueForToken('hjsv');
			b.getElementsByTagName("head")[0].appendChild(c);
		})(window,document);
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
