//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("facebook.facebookcustomaudiencepixel.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "Facebook Custom Audience Pixel",
      async: true,
      description: "The Custom Audience pixel is activated every time someone opens a webpage where the code is installed. When the pixel is activated an event is sent to Facebook's servers with general information about the browsing session including page URLs. The events are then compared to a set of Audience rules the advertiser has created. If the event matches an Audience rule the person who visited the webpage is added to that Audience. These website Custom Audiences can later be targeted by ads.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name: "FB Country Code",
        description: "e.g. en_UK ( if not sure, use : en_US )",
        token: "url_locale",
        uv: "universal_variable.locale"
      },{
        name: "Pixel ID",
        description: "Client Specific (e.g. 6007143437659)",
        token: "pixel_id",
        uv: "universal_variable.facebook.customaudience.pixel_id"
      }]
		/*~config*/
    };
	},
	script: function() {
	/*script*/
		var _this = this;
		(function(){
			var _fbq=window._fbq||(window._fbq = []);
			if(!_fbq.loaded){
				var fbds=document.createElement('script');
				fbds.async = true;
				fbds.src='//connect.facebook.net/' + _this.valueForToken("url_locale") + '/fbds.js';
				var s=document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(fbds,s);
				_fbq.loaded = true;
			}
			_fbq.push(['addPixelId', '' + _this.valueForToken("pixel_id")]);
		})();
		window._fbq=window._fbq||[];
		window._fbq.push(['track','PixelInitialized',{}]);
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
