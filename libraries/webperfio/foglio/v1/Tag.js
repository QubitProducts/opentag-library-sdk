//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("webperfio.foglio.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "foglio",
      async: true,
      description: "Foglio sampling tag sends user navigation performance to Webperf.io and time markers.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [
        {
          name: "App Id",
          description: "Your unique app id",
          token: "foglio_app_id",
          uv: "universal_variable.foglio.app_id"
        },
        {
          name: "Foglio sampling rate",
          description: "Foglio sampling rate : 1 = 100%, generally : 0.1 (10%). Rates depends of your plan.",
          token: "foglio_sampling_rate",
          uv: "universal_variable.foglio.foglio_sampling_rate"
        },
        {
          name: "Foglio token",
          description: "Foglio token",
          token: "foglio_token",
          uv: "universal_variable.foglio.foglio_token"
        }
      ]
      /*~config*/
    };
	},
	script: function() {
	/*script*/
		var _this = this;
		(function() {
			var f,d,a,b = document.createElement("iframe");
			b.src="javascript:false";
			( b.frameElement || b ).style.cssText="width: 0; height: 0; border: 0; display: none;";
			var a = document.getElementsByTagName("script")[0];
			a.parentNode.insertBefore(b,a);
			try {
				d = b.contentWindow.document
			} catch(c) { 
				f = document.domain;
				b.src = "javascript:var d=document.open();d.domain='" + f + "';void(0);";
				d = b.contentWindow.document
			};
			d.open()._l = function() {
				var e = this.createElement("script");
				if (f) {
					this.domain=f
				};
				e.id = "boomr-if-as";
				e.src = window.location.protocol == "https:" ? "https://d3phbp7p78bdk9.cloudfront.net/"
				+ _this.valueForToken("foglio_app_id") + "/foglio.js" : "http://foglio.basilic.io/"
				+ _this.valueForToken("foglio_app_id") + "/foglio.js";
				this.body.appendChild(e)
			};
			d.write('<body onload="document._l();">');
			d.close();
		})
		();
	/*~script*/
	},
	pre: function() {
	/*pre*/
		var FOGLIO = window.FOGLIO || {};
		FOGLIO.queue = FOGLIO.queue || {};
		FOGLIO.tag_s = new Date().getTime();
		FOGLIO.app_id = this.valueForToken("foglio_app_id");
		FOGLIO.cr = this.valueForToken("foglio_sampling_rate");	// client rate
		FOGLIO.sr = 1;	// server rate
		FOGLIO.ft = this.valueForToken("foglio_token");
		FOGLIO.q = function(a,b) {
			FOGLIO.queue[a] = FOGLIO.queue[a] || [];
			FOGLIO.queue[a].push(b)
		};
		FOGLIO.oldOnerror = window.onerror;
		FOGLIO.jserr = 0;
		window.onerror = function() {
			FOGLIO.jserr++;
			if ( FOGLIO.oldOnerror ) {
				FOGLIO.oldOnerror.apply(this, arguments);
			};
			return false;
		};
	/*~pre*/
	},
	post: function() {
	/*post*/
	/*~post*/
	}
});
