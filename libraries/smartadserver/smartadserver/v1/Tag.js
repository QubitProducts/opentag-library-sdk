//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("smartadserver.smartadserver.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      description: "SmartAdServer main script. To call the advertisement use into the page the sas.call() function, ex : sas.call('std', {siteId: 0000, pageId: 0000, formatId: 0000, target: ''}); and add the noscript marker. See the recommended implementation by SmartAdServer.",
      name: "SmartAdServer main script",
      async: false,
      isPrivate: false,
      html: "",
      url: "http://r.sascdn.com/diff/js/smart.js",
      usesDocWrite: true,
      parameters: [{
        name:"SmartAdServer domain",
        description:"SmartAdServer domain : ex ww691 (ww691.smartadserver.com)",
        token:"sas_domain",
        uv:"universal_variable.adserver.sas_domain"
      }]
      /*~config*/
    };
	},
	script: function() {
		/*script*/
		// write your code here that will be executed after all 
		// filters, urls, html injections and dependencies pass/execute.
		/*~script*/
	},
	pre: function() {
		/*pre*/
		//write here pre execution code
		/*~pre*/
	},
	post: function() {
		/*post*/
		sas.setup({ domain: "http://" + this.valueForToken("sas_domain")+".smartadserver.com"});
		/*~post*/
	}
});
