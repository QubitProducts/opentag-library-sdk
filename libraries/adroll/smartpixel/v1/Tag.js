//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("adroll.smartpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "SmartPixel",
		async: true,
		description: "Asynchronously and independently registers a callback within the browser that will be called only at the end of the rendering process - adds an image to the head tag.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "AdRoll Advertiser ID",
			description: "ID for the Advertiser",
			token: "adroll_adv_id",
			uv: ""
		}, {
			name: "AdRoll Pixel ID",
			description: "ID for the AdRoll pixel",
			token: "adroll_pix_id",
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
		window.adroll_adv_id = "" + this.valueForToken("adroll_adv_id");
		window.adroll_pix_id = "" + this.valueForToken("adroll_pix_id");
		window.__adroll_loaded = true;
		var scr = document.createElement("script");
		var host = (("https:" === document.location.protocol) ?
			"https://s.adroll.com" : "http://a.adroll.com");
		scr.setAttribute('async', 'true');
		scr.type = "text/javascript";
		scr.src = host + "/j/roundtrip.js";
		((document.getElementsByTagName('head') || [null])[0] ||
			document.getElementsByTagName('script')[0].parentNode)
			.appendChild(scr);
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
