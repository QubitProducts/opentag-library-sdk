//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelliad.impressionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Impression Pixel",
		async: true,
		description: "With intelliAd’s impression pixel you have the possibility to measure all impressions of your custom channels.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "IntelliAd Client ID",
			description: "The ID that relates you to IntelliAd",
			token: "client_id",
			uv: ""
		}, {
			name: "IntelliAd Campaign ID",
			description: "The ID for the specific campaign",
			token: "campaign_id",
			uv: ""
		}, {
			name: "IntelliAd Ad Group ID",
			description: "The ID for the ad group",
			token: "ad_group_id",
			uv: ""
		}, {
			name: "IntelliAd Buy Market ID",
			description: "100 for custom channels",
			token: "buy_market",
			uv: ""
		}, {
			name: "IntelliAd Client Market ID",
			description: "The ID relating to your client market (different to client ID)",
			token: "client_market_id",
			uv: ""
		}, {
			name: "IntelliAd Keyword ID",
			description: "Keyword and Keyword ID will be transferred",
			token: "keyword_id",
			uv: ""
		}, {
			name: "IntelliAd Cost Per Impression",
			description: "Represents cost per impression in EUR - so 0.1 cent  is 0.0010 (leave blank if not required)",
			token: "cost_per_impression",
			uv: ""
		}],
		categories:[
			"Advertising Network"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var t = (new Date()).getTime();
		var paramObj = {
			cl: "" + this.valueForToken("client_id"),
			cp: "" + this.valueForToken("campaign_id"),
			ag: "" + this.valueForToken("ad_group_id"),
			bm: "" + this.valueForToken("buy_market"),
			bmcl: "" + this.valueForToken("client_market_id"),
			crid: "" + this.valueForToken("keyword_id"),
			timestamp: t
		};
		if (("" + this.valueForToken("cost_per_impression")).length) {
			paramObj.co = "" + this.valueForToken("cost_per_impression");
		}
		var src = "//t23.intelliad.de/impression.php?";
		for (var key in paramObj) {
			if (paramObj.hasOwnProperty(key)) {
				var val = paramObj[key];
				src += key + "=" + val + "&";
			}
		}

		var img = new Image();
		img.src = src.slice(0, -1);
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
