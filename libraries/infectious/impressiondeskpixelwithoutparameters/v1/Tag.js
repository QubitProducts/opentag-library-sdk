//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("infectious.impressiondeskpixelwithoutparameters.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Impression Desk Pixel Without Parameters",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pixel Id",
			description: "Unique identifier for this pixel",
			token: "pixel_id",
			uv: ""
		},
		{
			name: "Doubleclick Type",
			description: "Doubleclick Type",
			token: "type",
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

		var x = document.createElement("script");
		x.src = (document.location.protocol === "https:") ?
			"https:" + "//pix.impdesk.com/pixel/px.js?id=" + this.valueForToken("pixel_id") :
			"http:" + "//pix.impdesk.com/pixel/px.js?id=" + this.valueForToken("pixel_id");

		x.type = "text/javascript";
		x.async = true;
		x.defer = true;
		document.getElementsByTagName("head")[0].appendChild(x);

		var y = document.createElement("script");
		y.src = (document.location.protocol === "https:") ?
			"https:" + "//secure-id.impressiondesk.com/seg?add=" + this.valueForToken("pixel_id") :
			"http:" + "//secure-id.impressiondesk.com/seg?add=" + this.valueForToken("pixel_id");

		y.type = "text/javascript";
		y.async = true;
		y.defer = true;
		document.getElementsByTagName("head")[0].appendChild(y);

		var src = "https://ad.doubleclick.net/activity;src=l5daka65;type=" + this.valueForToken("type") + ";cat=4277116;ord=1?"; //width="1" height="1" alt=""/>
		var img = document.createElement("img");
	    img.setAttribute("src", src);
	    document.body.appendChild(img);

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
