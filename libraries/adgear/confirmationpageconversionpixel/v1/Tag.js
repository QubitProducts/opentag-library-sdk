//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("adgear.confirmationpageconversionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Confirmation Page Conversion Pixel",
		async: true,
		description: "Build audience profiles for both groups of customers, allowing to overlay that data on top of inventory operated by networks using the platform, or on top of third party ad exchange inventory. Retargeting based on conversion events, previous clicks on ads and other customer lifecycle events are all made possible in a simple, integrated interface.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Account ID",
			description: "The account ID for AdGear",
			token: "accountid",
			uv: ""
		}, {
			name: "Chip Key",
			description: "The chip key value",
			token: "chipkey",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var _this = this;
		if (typeof ADGEAR == "undefined") {
			var proto = "http:";
			var host = "cdna.runadtag.com";
			var bucket = "";
			if (window.location.protocol == "https:") {
				proto = "https:";
				host = "a.runadtag.com";
				bucket = "";
			}
			ADGEAR_DONT_SAY_HELLO = true;

			var __scS = document.createElement("script");
			__scS.type = "text/javascript";
			__scS.src = proto + '//' + host + '/adgear.js/current/adgear.js';
			document.getElementsByTagName("body")[0].appendChild(__scS);

			//waiting for script to load
			var waitForAdgear = function() {
				if (typeof ADGEAR != "undefined" && document.readyState == "complete") {
					ADGEAR.tags.conversion.init();
					ADGEAR.tags.conversion.embed({
						"id": "" + _this.valueForToken("accountid"),
						"chip_key": "" + _this.valueForToken("chipkey"),
						"revenue": null
					});
				} else {
					setTimeout(waitForAdgear, 100);
				}
			};
			waitForAdgear();
		}
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
