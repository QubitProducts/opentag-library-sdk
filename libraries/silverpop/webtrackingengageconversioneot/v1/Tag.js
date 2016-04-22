//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"silverpop.webtrackingengageconversioneot.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Web Tracking (Engage Conversion EOT)",
			async: true,
			description: "Web tracking if you use Engage Conversion Tracking EOT",
			html: "<meta name=\"com.silverpop.page_name\" content=\"${page_name}\"/>\n<meta name=\"com.silverpop.brandeddomains\" content=\"${branded_domains}\" />\n<meta name=\"com.silverpop.cothost\" content=\"${cot_host}\" />\n\n",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Page Name",
				description: "The name of the page the tag is current on",
				token: "page_name",
				uv: ""
			}, {
				name: "Branded Domains",
				description: "The comma separated listed of qualified/unqualified branded domains i.e. www.a.com,b.com,www.c.com",
				token: "branded_domains",
				uv: ""
			}, {
				name: "Secure Domain",
				description: "The domain for secure pages on your site provided by your Org Admin",
				token: "secure_domain",
				uv: ""
			}, {
				name: "Non-secure Domain",
				description: "The domain for non-secure pages on your site provided by your Org Admin",
				token: "non_secure_domain",
				uv: ""
			}, {
				name: "Engage Conversion Tracking COT Host",
				description: "The host for the Engage Conversion Tracking meta tag e.g. engage5.sliverpop.com",
				token: "cot_host",
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
