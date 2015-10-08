//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("hotjar.hotjar.v1.Tag", {
	config: {
		/*DATA*/
		name: "hotjar",
		async: true,
		description: "Heatmap user tracking.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "heatmap hjid",
			description: "hjid",
			token: "hjid",
			uv: "universal_variable.hotjar.hjid"
		}, {
			name: "heatmap hjsv",
			description: "hjsv",
			token: "hjsv",
			uv: "universal_variable.hotjar.hjsv"
		}]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
		var _this = this;
		(function(f,b){
			var c;
			f.hj=f.hj||function(){(f.hj.q=f.hj.q||[]).push(arguments)};
			f._hjSettings={hjid:_this.valueForToken('hjid'), hjsv:_this.valueForToken('hjsv')};
			c=b.createElement("script");c.async=1;
			c.src="//static.hotjar.com/c/hotjar-"+_this.valueForToken('hjid')+".js?sv="+_this.valueForToken('hjsv');
			b.getElementsByTagName("head")[0].appendChild(c);
		})(window,document);
	/*~SCRIPT*/
	},
	pre: function() {
	/*PRE*/
	/*~PRE*/
	},
	post: function() {
	/*POST*/
	/*~POST*/
	}
});
