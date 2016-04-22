//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("amazon.amazondirectmatchbuying.v1.Tag", {
	getDefaultConfig: function () {
      return  {
      /*config*/
      name: "amazondirectmatchbuying",
      async: false,
      description: "The Amazon Direct Match Buying program is designed to integrate Amazon’s demand into your ad server and ad optimization stack. It works through two main components, an Amazon-provided JavaScript and the Key-Value targeting or Custom Targeting feature in your ad server. Use amznads.getTokens() to send the tokens to your ad server. Debug mode to get test tokens : //url?amzn_debug_mode=1 .",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "//c.amazon-adsystem.com/aax2/amzn_ads.js",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [
        {
          name: "Amazon direct match buying id",
          description: "Amazon direct match buying id",
          token: "amazon_direct_match_buying_id",
          uv: "universal_variable.amazon.amazon_direct_match_buying_id"
        }
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
	/*~pre*/
	},
	post: function() {
	/*post*/
		try {
			window.amznads.getAds(this.valueForToken("amazon_direct_match_buying_id"));
		} catch(e) { /*ignore*/}
	/*~post*/
	}
});
