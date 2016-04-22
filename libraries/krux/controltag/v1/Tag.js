//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("krux.controltag.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "controltag",
      async: true,
      description: "Data Management Platform (DMP) : leverage data to inform first party targeting of advertising, content, or commerce on your own web properties.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name: "Configuration Id",
        description: "Configuration id",
        token: "configuration_id",
        uv: "universal_variable.dmp.configuration_id"
      }]
      /*~config*/
    };
	},
	script: function() {
	/*script*/
		window.Krux || (( Krux = function() { Krux.q.push(arguments) }).q=[] );
		var k = document.createElement('script');
		k.type = 'text/javascript';
		k.async = true;
		var m,src = ( m = location.href.match(/\bkxsrc=([^&]+)/)) && decodeURIComponent(m[1]);
		k.src = /^https?:\/\/([a-z0-9_\-\.]+\.) ? krxd\.net(:\d{1,5})?\//i.test(src) ? src : src === "disable" ? "" :
		( location.protocol === "https:" ? "https:" : "http:" ) + "//cdn.krxd.net/controltag?confid=" + this.valueForToken("configuration_id");
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(k,s);
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
