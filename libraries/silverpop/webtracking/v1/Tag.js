//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("silverpop.webtracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Web Tracking",
		async: true,
		description: "Engage Web Tracking is a tool that tracks visits to your Web sites. You can link this data to individual contacts \nand then target communications to contacts based on their Web behaviors.",
		html: "<meta name=\"com.silverpop.page_name\" content=\"${page_name}\"/>\n<meta name=\"com.silverpop.brandeddomains\" content=\"${branded_domains}\" />\n\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Secure Domain URL",
			description: "The domain for secure pages on your site provided by your Org Admin",
			token: "secure_domain",
			uv: ""
		}, {
			name: "Non-Secure Domain URL",
			description: "The domain for non-secure pages on your site provided by your Org Admin",
			token: "non_secure_domain",
			uv: ""
		}, {
			name: "Branded Domains",
			description: "The comma separated listed of qualified/unqualified branded domains i.e. www.a.com,b.com,www.c.com",
			token: "branded_domains",
			uv: ""
		}, {
			name: "Page Name",
			description: "The name for the page the tag is currently firing on",
			token: "page_name",
			uv: ""
		}],
		categories:[
			"Email Service Provider (ESP)"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		function downloadJSAtOnload1() {

			var x = document.createElement("script");
			x.src = (document.location.protocol === "https:") ?
				"" + this.valueForToken("secure_domain") :
				"" + this.valueForToken("non_secure_domain");
			x.type = "text/javascript";
			document.getElementsByTagName("head")[0].appendChild(x);

			var intervalId = setInterval(poll, 10);

			function poll() {
			  	if (typeof ewt !== "undefined") {
			  		clearInteval(intervalId);
			  		ewt.init();
			  	}
			}
		}

		if (window.addEventListener) {
			window.addEventListener("load", downloadJSAtOnload1, false);
		}
		else if (window.attachEvent) {
			window.attachEvent("onload", downloadJSAtOnload1);
		}
		else window.onload = downloadJSAtOnload1;

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
