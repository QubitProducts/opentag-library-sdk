//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("googleuniversalanalytics.ectransaction.v1.Tag", {
  getDefaultConfig: function () {
      return {
    /*config*/
    name: "Enhanced Ecommerce - Pageview - Transaction",
    async: true,
    description: "",
    html: "",
    locationDetail: "",
    isPrivate: false,
    url: "",
    usesDocWrite: false,
    upgradeable: true,
    parameters: [
      {
        name: "Property ID",
        token: "property_id",
        description: "Universal Analytics Property ID",
        defaultValue: []
      },
      {
        name: "Create Configuration",
        token: "create_conf",
        description: "JavaScript configuration object for create command",
        defaultValue: {}
      },
      {
        name: "Additional Commands",
        token: "additional_commands",
        description: "Array of additional commands to be executed",
        defaultValue: []
      },
      {
        name: "Pageview Configuration",
        token: "pageview_conf",
        description: "JavaScript configuration object for pageview command",
        defaultValue: {}
      }
    ],
		categories:[
			"Web Analytics"
		]

    /*~config*/
		};
  },
  script: function() {
  /*script*/
    (function(i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, "script", "//www.google-analytics.com/analytics.js","ga");

    ga("create", this.valueForToken("property_id"), this.valueForToken("create_conf"));

    ga("require", "ec");

    ga("ec:setAction", "purchase", {
      "id": "T12345",
      "affiliation": "Google Store - Online",
      "revenue": "37.39",
      "tax": "2.85",
      "shipping": "5.34",
      "coupon": "SUMMER2013"    // User added a coupon at checkout.
    });

    var commands = this.valueForToken("additional_commands");
    for (var i = 0; i < commands.length; i++) {
      ga.apply(ga, commands[i]);
    }

    ga("send", "pageview", this.valueForToken("pageview_conf"));
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
