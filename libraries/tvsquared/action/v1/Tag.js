//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("tvsquared.action.v1.Tag", {
	config: {
		/*DATA*/
		name: "Action Tag",
		async: true,
		description: "The basic hit tracker should be fired on all pages of the site. Our service is territory specific, so clients should be able to setup rules to ensure that the tag only fires on the US (or UK, or French) site, if their website is global. ",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "TVSquared Client ID",
			description: "Will be supplied by TVSquared, and specifies the clients individual ID",
			token: "clientID",
			uv: ""
		},{
			name: "TVSquared Brand ID",
			description: "Will be supplied by TVSquared, and specifies the brand within the client (separate countries, websites etc.)",
			token: "brandID",
			uv: ""
		},{
			name: "User ID",
			description: "Client identifiable reference of the user taking the action.",
			token: "userID",
			uv: "universal_variable.user.user_id"
		},{
			name: "Action ID",
			description: "If the client has a specific ID for the action, add here.",
			token: "actionID",
			uv: ""
		},{
			name: "Action Name",
			description: "The name of the action captured (Conversion, Quote etc.).",
			token: "actionName",
			uv: ""
		},{
			name: "Revenue",
			description: "For a sale, the total sales value.",
			token: "revenue",
			uv: ""
		},{
			name: "Product",
			description: "Can be used to indicate an overall product type the action refers to (e.g. a home insurance quote, or a recurring conversion).",
			token: "product",
			uv: ""
		},{
			name: "Promotion Code",
			description: "If the client uses Promo codes to attribute data, the code can be added here.",
			token: "promoCode",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
	    var _paq = _paq || [];
	    var that = this;
	    (function () {
        	var session = {'user': that.valueForToken("userID")};
    	    var actionname = that.valueForToken("actionName");
	        var action = {'rev': that.valueForToken("revenue"), 'prod': that.valueForToken("product"), 'id': that.valueForToken("actionID"), 'promo': that.valueForToken("promoCode") };
	        var clientID = that.valueForToken("clientID");
    	    var u = (("https:" == document.location.protocol) ? "https://collector-"+clientID+".tvsquared.com/piwik/" : "http://collector-"+clientID+".tvsquared.com/piwik/");
	        _paq.push(['setSiteId', that.valueForToken("brandID")]);
        	_paq.push(['setTrackerUrl', u + 'piwik.php']);
    	    _paq.push([function() { this.setCustomVariable(5, 'session', JSON2.stringify(session), 'visit')}]);
	        _paq.push([function() { this.setCustomVariable(5, actionname, JSON2.stringify(action), 'page')}]);
        	_paq.push(['trackPageView']);
    	    _paq.push(['enableLinkTracking']);
	        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0]; g.type = 'text/javascript'; g.defer = true; g.async = true; g.src = u + 'piwik.js';
        	s.parentNode.insertBefore(g, s);
    	})();
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
